import {
  collection,
  deleteDoc,
  doc,
  getCountFromServer,
  getDoc,
  getDocs,
  increment,
  limit as fbLimit,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

const col = collection(db, "articles");

function toArticle(snap) {
  return { slug: snap.id, ...snap.data() };
}

export async function getPublishedArticles({ type, topicSlug, featured, max = 20 } = {}) {
  const clauses = [where("status", "==", "published")];
  if (type) clauses.push(where("type", "==", type));
  if (topicSlug) clauses.push(where("topicSlugs", "array-contains", topicSlug));
  if (featured !== undefined) clauses.push(where("featured", "==", featured));

  const q = query(col, ...clauses, orderBy("publishedAt", "desc"), fbLimit(max));
  const snap = await getDocs(q);
  return snap.docs.map(toArticle);
}

export async function getArticleBySlug(slug) {
  const snap = await getDoc(doc(col, slug));
  if (!snap.exists()) return null;
  return toArticle(snap);
}

export async function getRelatedArticles(article, max = 3) {
  if (article.relatedArticleIds?.length) {
    const docs = await Promise.all(
      article.relatedArticleIds.slice(0, max).map((slug) => getArticleBySlug(slug))
    );
    return docs.filter(Boolean);
  }

  if (!article.topicSlugs?.length) return [];

  const q = query(
    col,
    where("status", "==", "published"),
    where("topicSlugs", "array-contains", article.topicSlugs[0]),
    orderBy("publishedAt", "desc"),
    fbLimit(max + 1)
  );
  const snap = await getDocs(q);
  return snap.docs.map(toArticle).filter((a) => a.slug !== article.slug).slice(0, max);
}

export async function getAllArticlesAdmin({ status } = {}) {
  const clauses = status ? [where("status", "==", status)] : [];
  const q = query(col, ...clauses, orderBy("updatedAt", "desc"));
  const snap = await getDocs(q);
  return snap.docs.map(toArticle);
}

export async function getPublishedArticleCount() {
  const snap = await getCountFromServer(query(col, where("status", "==", "published")));
  return snap.data().count;
}

export async function getDraftArticleCount() {
  const snap = await getCountFromServer(query(col, where("status", "==", "draft")));
  return snap.data().count;
}

export async function createArticle(slug, data, uid) {
  const wasPublished = data.status === "published";
  await setDoc(doc(col, slug), {
    ...data,
    slug,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    createdBy: uid,
    publishedAt: wasPublished ? serverTimestamp() : null,
  });
}

export async function updateArticle(slug, data, { justPublished } = {}) {
  await updateDoc(doc(col, slug), {
    ...data,
    updatedAt: serverTimestamp(),
    ...(justPublished ? { publishedAt: serverTimestamp() } : {}),
  });
}

export async function deleteArticle(slug) {
  await deleteDoc(doc(col, slug));
}

export async function incrementArticleViews(slug) {
  await updateDoc(doc(col, slug), { views: increment(1) });
}
