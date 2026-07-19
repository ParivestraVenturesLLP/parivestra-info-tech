import { existsSync, readFileSync } from "fs";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";
import { readingTime } from "../src/lib/format.js";
import { articlesToSeed, statsToSeed } from "./seed-data.js";

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

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

async function main() {
  if (!process.env.SEED_ADMIN_EMAIL || !process.env.SEED_ADMIN_PASSWORD) {
    console.error(
      "Missing SEED_ADMIN_EMAIL / SEED_ADMIN_PASSWORD in .env — add your existing admin panel login " +
        "credentials under those two keys (not committed, .env is gitignored) and re-run."
    );
    process.exit(1);
  }

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  await signInWithEmailAndPassword(auth, process.env.SEED_ADMIN_EMAIL, process.env.SEED_ADMIN_PASSWORD);
  console.log(`Signed in as admin (uid: ${auth.currentUser.uid.slice(0, 6)}…)`);

  const articlesCol = collection(db, "articles");
  for (const { slug, ...data } of articlesToSeed) {
    const ref = doc(articlesCol, slug);
    const existing = await getDoc(ref);
    if (existing.exists()) {
      console.log(`skip (exists): articles/${slug}`);
      continue;
    }
    await setDoc(ref, {
      ...data,
      slug,
      readingTimeMinutes: readingTime(data.contentMarkdown),
      coverImageUrl: data.coverImageUrl || "",
      coverImagePath: data.coverImagePath || "",
      coverImageAlt: data.coverImageAlt || "",
      authorId: data.authorId || "",
      seoTitle: data.seoTitle || "",
      seoDescription: data.seoDescription || "",
      canonicalUrl: data.canonicalUrl || "",
      featured: data.featured ?? false,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      createdBy: auth.currentUser.uid,
      publishedAt: data.status === "published" ? serverTimestamp() : null,
    });
    console.log(`created: articles/${slug}`);
  }

  const statsCol = collection(db, "stats");
  for (const stat of statsToSeed) {
    const dupCheck = await getDocs(
      query(statsCol, where("category", "==", stat.category), where("label", "==", stat.label))
    );
    if (!dupCheck.empty) {
      console.log(`skip (exists): stats/${stat.label}`);
      continue;
    }
    const ref = doc(statsCol);
    await setDoc(ref, {
      ...stat,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
      createdBy: auth.currentUser.uid,
    });
    console.log(`created: stats/${stat.label} (${ref.id})`);
  }

  console.log("Done.");
  process.exit(0);
}

main().catch((err) => {
  console.error("Seed failed:", err.message);
  process.exit(1);
});
