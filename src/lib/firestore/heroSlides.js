import {
  collection,
  deleteDoc,
  doc,
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

const col = collection(db, "heroSlides");

function toHeroSlide(snap) {
  return { slug: snap.id, ...snap.data() };
}

export async function getPublishedHeroSlides(max = 3) {
  const q = query(
    col,
    where("status", "==", "published"),
    orderBy("order", "asc"),
    fbLimit(max)
  );
  const snap = await getDocs(q);
  return snap.docs.map(toHeroSlide);
}

export async function getHeroSlideBySlug(slug) {
  const snap = await getDoc(doc(col, slug));
  if (!snap.exists()) return null;
  return toHeroSlide(snap);
}

export async function getAllHeroSlidesAdmin() {
  const snap = await getDocs(query(col, orderBy("order", "asc")));
  return snap.docs.map(toHeroSlide);
}

export async function createHeroSlide(slug, data, uid) {
  await setDoc(doc(col, slug), {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    createdBy: uid,
  });
}

export async function updateHeroSlide(slug, data) {
  await updateDoc(doc(col, slug), { ...data, updatedAt: serverTimestamp() });
}

export async function deleteHeroSlide(slug) {
  await deleteDoc(doc(col, slug));
}
