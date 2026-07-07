import {
  doc,
  getDoc,
  runTransaction,
  serverTimestamp,
} from "firebase/firestore";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, db } from "../firebase";

export async function getAdminFlag() {
  const snap = await getDoc(doc(db, "meta", "adminFlag"));
  return snap.exists() && snap.data().exists === true;
}

export async function isUidAdmin(uid) {
  const snap = await getDoc(doc(db, "admins", uid));
  return snap.exists();
}

export async function login(email, password) {
  const cred = await signInWithEmailAndPassword(auth, email, password);
  return cred.user;
}

export async function logout() {
  await signOut(auth);
}

export async function bootstrapFirstAdmin(email, password) {
  const cred = await createUserWithEmailAndPassword(auth, email, password);
  const uid = cred.user.uid;

  await runTransaction(db, async (tx) => {
    tx.set(doc(db, "admins", uid), {
      email,
      createdAt: serverTimestamp(),
      createdBy: "self",
    });
    tx.set(doc(db, "meta", "adminFlag"), { exists: true });
  });

  return cred.user;
}
