import { writeFileSync } from "fs";
import { fetchPublishedContent } from "./lib/content.js";

const BASE_URL = "https://parivestrabytes.com";
const STATIC_PATHS = [
  "/",
  "/blog",
  "/research",
  "/statistics",
  "/reports",
  "/social",
  "/compilation",
  "/resource",
  "/deals-offers",
  "/comparison",
];

function writeSitemap({ articles, topics, reports }) {
  const dynamicPaths = [
    ...articles.map((a) => `/blog/${a.slug}`),
    ...topics.map((t) => `/topics/${t.slug}`),
    ...reports.map((r) => `/reports/${r.slug}`),
  ];
  const allPaths = [...STATIC_PATHS, ...dynamicPaths];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${allPaths
    .map((path) => `  <url>\n    <loc>${BASE_URL}${path}</loc>\n  </url>`)
    .join("\n")}\n</urlset>\n`;

  writeFileSync(new URL("../public/sitemap.xml", import.meta.url), xml);
  console.log(`generate-seo-files: wrote ${allPaths.length} URLs to public/sitemap.xml`);
}

function writeLlmsTxt({ articles, topics }) {
  const lines = [
    "# Parivestra",
    "",
    "> A multi-topic publication featuring in-depth articles, research, and data on AI, fintech, payments, and technology — written to inform, with cited sources.",
    "",
    "## Topics",
    ...topics.map((t) => `- [${t.name}](${BASE_URL}/topics/${t.slug}): ${t.description || ""}`),
    "",
    "## Articles",
    ...articles
      .sort((a, b) => (b.publishedAt?.seconds || 0) - (a.publishedAt?.seconds || 0))
      .map((a) => `- [${a.title}](${BASE_URL}/blog/${a.slug}): ${a.excerpt || ""}`),
  ];

  writeFileSync(new URL("../public/llms.txt", import.meta.url), lines.join("\n") + "\n");
  console.log(`generate-seo-files: wrote llms.txt with ${articles.length} articles and ${topics.length} topics`);
}

async function main() {
  const content = await fetchPublishedContent();
  writeSitemap(content);
  writeLlmsTxt(content);
  process.exit(0);
}

main();
