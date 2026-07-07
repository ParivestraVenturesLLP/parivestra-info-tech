import { useFirestoreQuery } from "../../hooks/useFirestoreQuery";
import { getAllTopicsAdmin } from "../../lib/firestore/topics";

export function MultiSelectTopics({ value = [], onChange }) {
  const { data: topics, loading } = useFirestoreQuery(() => getAllTopicsAdmin(), []);

  function toggle(slug) {
    if (value.includes(slug)) {
      onChange(value.filter((s) => s !== slug));
    } else {
      onChange([...value, slug]);
    }
  }

  return (
    <div>
      <label className="text-sm font-medium text-ink">Topics</label>
      <div className="mt-2 flex flex-wrap gap-2">
        {loading && <p className="text-xs text-ink-faint">Loading topics…</p>}
        {topics?.map((topic) => (
          <button
            key={topic.slug}
            type="button"
            onClick={() => toggle(topic.slug)}
            className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
              value.includes(topic.slug)
                ? "border-accent bg-accent-soft text-accent"
                : "border-border text-ink-muted hover:border-ink/30"
            }`}
          >
            {topic.name}
          </button>
        ))}
        {topics && !topics.length && (
          <p className="text-xs text-ink-faint">Create a topic first.</p>
        )}
      </div>
    </div>
  );
}
