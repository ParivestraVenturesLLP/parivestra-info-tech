import { useEffect, useRef, useState } from "react";

export function useFirestoreQuery(fetcher, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetcherRef = useRef(fetcher);

  useEffect(() => {
    fetcherRef.current = fetcher;
  });

  useEffect(() => {
    let cancelled = false;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- this effect's job is to run the fetch and report its lifecycle; there is no non-effect way to synchronize with an async Firestore read
    setLoading(true);
    setError(null);

    fetcherRef.current()
      .then((result) => {
        if (!cancelled) setData(result);
      })
      .catch((err) => {
        if (!cancelled) setError(err);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return { data, loading, error };
}

export function useRefetchableQuery(fetcher) {
  const [key, setKey] = useState(0);
  const result = useFirestoreQuery(fetcher, [key]);
  return { ...result, refetch: () => setKey((k) => k + 1) };
}
