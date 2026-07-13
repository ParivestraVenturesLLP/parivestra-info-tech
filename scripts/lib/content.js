import { existsSync, readFileSync } from "fs";
import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";

export function loadEnv() {
  const envPath = new URL("../../.env", import.meta.url);
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

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

export async function fetchPublishedContent() {
  if (!firebaseConfig.projectId) {
    console.warn("scripts/lib/content: Firebase env vars not set — returning static-only content.");
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
    console.warn("scripts/lib/content: failed to fetch published content, returning static-only content.", err.message);
    return { articles: [], topics: [], reports: [] };
  }
}
