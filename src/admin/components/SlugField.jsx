import { slugify } from "../../lib/slug";

export function SlugField({ value, onChange, isNew }) {
  return (
    <div>
      <label className="text-sm font-medium text-ink">Slug</label>
      {isNew ? (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(slugify(e.target.value))}
          placeholder="auto-generated-from-title"
          className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 font-mono text-sm text-ink focus:border-accent"
        />
      ) : (
        <div className="mt-1.5 flex items-center gap-2">
          <input
            type="text"
            value={value}
            disabled
            className="w-full rounded-xl border border-border bg-ink/5 px-4 py-2.5 font-mono text-sm text-ink-faint"
          />
          <span className="shrink-0 text-xs text-ink-faint">locked</span>
        </div>
      )}
      <p className="mt-1 text-xs text-ink-faint">
        {isNew
          ? "Used in the URL. Cannot be changed after saving."
          : "Slugs can't be changed after creation to keep URLs stable."}
      </p>
    </div>
  );
}
