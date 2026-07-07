import {
  collection,
  deleteDoc,
  doc,
  getCountFromServer,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";

const col = collection(db, "stats");

function toStat(snap) {
  return { id: snap.id, ...snap.data() };
}

export async function getPublishedStatsByCategory() {
  const q = query(
    col,
    where("status", "==", "published"),
    orderBy("category", "asc"),
    orderBy("order", "asc")
  );
  const snap = await getDocs(q);
  const stats = snap.docs.map(toStat);

  const grouped = [];
  for (const stat of stats) {
    let group = grouped.find((g) => g.category === stat.category);
    if (!group) {
      group = { category: stat.category, items: [] };
      grouped.push(group);
    }
    group.items.push(stat);
  }
  return grouped;
}

export async function getStatById(id) {
  const snap = await getDoc(doc(col, id));
  if (!snap.exists()) return null;
  return toStat(snap);
}

export async function getAllStatsAdmin() {
  const snap = await getDocs(col);
  return snap.docs
    .map(toStat)
    .sort((a, b) => a.category.localeCompare(b.category) || a.order - b.order);
}

export async function getStatCount() {
  const snap = await getCountFromServer(col);
  return snap.data().count;
}

export async function createStat(data, uid) {
  const ref = doc(col);
  await setDoc(ref, {
    ...data,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
    createdBy: uid,
  });
  return ref.id;
}

export async function updateStat(id, data) {
  await updateDoc(doc(col, id), { ...data, updatedAt: serverTimestamp() });
}

export async function deleteStat(id) {
  await deleteDoc(doc(col, id));
}
