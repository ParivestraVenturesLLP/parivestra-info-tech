import {
  collection,
  deleteDoc,
  doc,
  getCountFromServer,
  getDoc,
  getDocs,
  limit as fbLimit,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

const col = collection(db, "reports");

function toReport(snap) {
  return { slug: snap.id, ...snap.data() };
}

export async function getPublishedReports(max = 30) {
  const q = query(
    col,
    where("status", "==", "published"),
    orderBy("publishedAt", "desc"),
    fbLimit(max)
  );
  const snap = await getDocs(q);
  return snap.docs.map(toReport);
}

export async function getReportBySlug(slug) {
  const snap = await getDoc(doc(col, slug));
  if (!snap.exists()) return null;
  return toReport(snap);
}

export async function getAllReportsAdmin() {
  const snap = await getDocs(query(col, orderBy("updatedAt", "desc")));
  return snap.docs.map(toReport);
}

export async function getReportCount() {
  const snap = await getCountFromServer(col);
  return snap.data().count;
}

export async function createReport(slug, data, uid) {
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

export async function updateReport(slug, data, { justPublished } = {}) {
  await updateDoc(doc(col, slug), {
    ...data,
    updatedAt: serverTimestamp(),
    ...(justPublished ? { publishedAt: serverTimestamp() } : {}),
  });
}

export async function deleteReport(slug) {
  await deleteDoc(doc(col, slug));
}
