import { existsSync, readFileSync, writeFileSync } from "fs";
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

function loadEnv() {
  const envPath = new URL("../.env", import.meta.url);
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, "utf-8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadEnv();

const BASE_URL = "https://blog.parivestra.com";
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

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

async function fetchPublishedContent() {
  if (!firebaseConfig.projectId) {
    console.warn("generate-seo-files: Firebase env vars not set — writing static-only sitemap.");
    return { articles: [], topics: [], reports: [] };
  }

  try {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const published = (name) => query(collection(db, name), where("status", "==", "published"));

    const [articlesSnap, topicsSnap, reportsSnap] = await Promise.all([
      getDocs(published("articles")),
      getDocs(published("topics")),
      getDocs(published("reports")),
    ]);

    return {
      articles: articlesSnap.docs.map((d) => ({ slug: d.id, ...d.data() })),
      topics: topicsSnap.docs.map((d) => ({ slug: d.id, ...d.data() })),
      reports: reportsSnap.docs.map((d) => ({ slug: d.id, ...d.data() })),
    };
  } catch (err) {
    console.warn("generate-seo-files: failed to fetch published content, writing static-only output.", err.message);
    return { articles: [], topics: [], reports: [] };
  }
}

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
