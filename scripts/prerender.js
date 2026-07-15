import { mkdirSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { preview } from "vite";
import { fetchPublishedContent } from "./lib/content.js";
import { topicNames, articleTitles } from "../src/pages/topics/static/staticContentLinks.js";
import { MAGNET_CATEGORIES } from "../src/data/magnetCategories.js";

async function launchBrowser() {
  // Vercel's build container is missing the shared libraries (libnspr4, libnss3, …)
  // that puppeteer's bundled Chrome needs, so use the serverless-packaged Chromium there.
  // Locally (Windows/macOS/Linux dev machines) fall back to regular puppeteer.
  if (process.env.VERCEL) {
    const [{ default: chromium }, { default: puppeteerCore }] = await Promise.all([
      import("@sparticuz/chromium"),
      import("puppeteer-core"),
    ]);
    return puppeteerCore.launch({
      args: chromium.args,
      executablePath: await chromium.executablePath(),
      headless: true,
    });
  }

  const { default: puppeteer } = await import("puppeteer");
  return puppeteer.launch();
}

const STATIC_PATHS = [
  "/",
  "/blog",
  "/research",
  "/statistics",
  "/reports",
  ...MAGNET_CATEGORIES.map((c) => c.path),
  ...Object.keys(topicNames).map((slug) => `/topics/${slug}`),
  ...Object.keys(articleTitles).map((slug) => `/blog/${slug}`),
];

function outputPathFor(route) {
  const dir = route === "/" ? "dist" : join("dist", route);
  return join(dir, "index.html");
}

async function prerenderRoute(page, base, route) {
  await page.goto(base + route, { waitUntil: "domcontentloaded" });

  let settled = true;
  try {
    await page.waitForFunction(
      () =>
        document.getElementById("root")?.children.length > 0 &&
        !document.querySelector(".animate-pulse"),
      { timeout: 15000 }
    );
  } catch {
    settled = false;
    const mounted = await page.evaluate(() => document.getElementById("root")?.children.length > 0);
    if (!mounted) throw new Error("root never mounted");
  }

  const html = await page.content();
  const outPath = outputPathFor(route);
  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html);
  return settled;
}

async function main() {
  const { articles, topics, reports } = await fetchPublishedContent();
  const routes = [
    ...STATIC_PATHS,
    ...articles.map((a) => `/blog/${a.slug}`),
    ...topics.map((t) => `/topics/${t.slug}`),
    ...reports.map((r) => `/reports/${r.slug}`),
  ];

  const server = await preview({ preview: { port: 4173 } });
  const base = server.resolvedUrls.local[0].replace(/\/$/, "");

  const browser = await launchBrowser();
  const page = await browser.newPage();

  // Prerendering loads every page in a real browser, which would otherwise fire
  // real analytics/ad pageviews (GA, Vercel Analytics, AdSense) on every build.
  await page.setRequestInterception(true);
  const TRACKING_PATTERNS = [
    "googletagmanager.com",
    "google-analytics.com",
    "googlesyndication.com",
    "doubleclick.net",
    "/_vercel/insights/",
    "/_vercel/speed-insights/",
  ];
  page.on("request", (req) => {
    if (TRACKING_PATTERNS.some((pattern) => req.url().includes(pattern))) {
      req.abort();
    } else {
      req.continue();
    }
  });

  let clean = 0;
  let partial = 0;
  let failed = 0;
  for (const route of routes) {
    try {
      const settled = await prerenderRoute(page, base, route);
      if (settled) clean += 1;
      else {
        partial += 1;
        console.warn(`prerender: ${route} captured before all content settled (partial)`);
      }
    } catch (err) {
      failed += 1;
      console.warn(`prerender: failed ${route} — ${err.message}`);
    }
  }

  await browser.close();
  await new Promise((resolve) => server.httpServer.close(resolve));

  console.log(`prerender: ${clean} clean, ${partial} partial, ${failed} failed (of ${routes.length} routes)`);
}

main();
