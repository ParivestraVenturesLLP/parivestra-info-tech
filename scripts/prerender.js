import { mkdirSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { preview } from "vite";
import puppeteer from "puppeteer";
import { fetchPublishedContent } from "./lib/content.js";
import { topicNames, articleTitles } from "../src/pages/topics/static/staticContentLinks.js";
import { MAGNET_CATEGORIES } from "../src/data/magnetCategories.js";

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

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

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
