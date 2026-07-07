import {
  collection,
  deleteDoc,
  doc,
  getCountFromServer,
  getDoc,
  getDocs,
  increment,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

const col = collection(db, "topics");
const articlesCol = collection(db, "articles");

function toTopic(snap) {
  return { slug: snap.id, ...snap.data() };
}

export async function getPublishedTopics() {
  const q = query(col, where("status", "==", "published"), orderBy("order", "asc"));
  const snap = await getDocs(q);
  return snap.docs.map(toTopic);
}

export async function getTopicBySlug(slug) {
  const snap = await getDoc(doc(col, slug));
  if (!snap.exists()) return null;
  return toTopic(snap);
}

export async function getAllTopicsAdmin() {
  const snap = await getDocs(query(col, orderBy("order", "asc")));
  return snap.docs.map(toTopic);
}

export async function countPublishedArticlesForTopic(slug) {
  const q = query(
    articlesCol,
    where("status", "==", "published"),
    where("topicSlugs", "array-contains", slug)
  );
  const snap = await getCountFromServer(q);
  return snap.data().count;
}

export async function getTopicCount() {
  const snap = await getCountFromServer(col);
  return snap.data().count;
}

export async function createTopic(slug, data, uid) {
  await setDoc(doc(col, slug), {
    ...data,
    slug,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    createdBy: uid,
  });
}

export async function updateTopic(slug, data) {
  await updateDoc(doc(col, slug), { ...data, updatedAt: serverTimestamp() });
}

export async function deleteTopic(slug) {
  await deleteDoc(doc(col, slug));
}

export async function incrementTopicViews(slug) {
  await updateDoc(doc(col, slug), { views: increment(1) });
}
