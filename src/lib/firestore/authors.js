import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

const col = collection(db, "authors");

function toAuthor(snap) {
  return { slug: snap.id, ...snap.data() };
}

export async function getAuthorBySlug(slug) {
  if (!slug) return null;
  const snap = await getDoc(doc(col, slug));
  if (!snap.exists()) return null;
  return toAuthor(snap);
}

export async function getAllAuthors() {
  const snap = await getDocs(query(col, orderBy("name", "asc")));
  return snap.docs.map(toAuthor);
}

export async function createAuthor(slug, data, uid) {
  await setDoc(doc(col, slug), {
    ...data,
    slug,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    createdBy: uid,
  });
}

export async function updateAuthor(slug, data) {
  await updateDoc(doc(col, slug), { ...data, updatedAt: serverTimestamp() });
}

export async function deleteAuthor(slug) {
  await deleteDoc(doc(col, slug));
}
