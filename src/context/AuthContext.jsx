import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";
import { isUidAdmin } from "../lib/firestore/admins";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      setUser(firebaseUser);

      if (firebaseUser) {
        try {
          const admin = await isUidAdmin(firebaseUser.uid);
          setIsAdmin(admin);
        } catch {
          setIsAdmin(false);
        }
      } else {
        setIsAdmin(false);
      }

      setLoading(false);
    });

    return unsubscribe;
  }, []);

  async function refreshAdmin() {
    if (!auth.currentUser) return false;
    const admin = await isUidAdmin(auth.currentUser.uid);
    setIsAdmin(admin);
    return admin;
  }

  // Call this right after an operation that is itself proof of admin status
  // (e.g. a successful bootstrap transaction) — re-querying Firestore
  // immediately afterward can race with a still-in-flight stale read for the
  // same document and return a coalesced/stale result instead of a fresh one.
  function markAsAdmin() {
    setIsAdmin(true);
  }

  return (
    <AuthContext.Provider value={{ user, isAdmin, loading, refreshAdmin, markAsAdmin }}>
      {children}
    </AuthContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components -- context + its hook are conventionally colocated
export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within AuthProvider");
  return ctx;
}
