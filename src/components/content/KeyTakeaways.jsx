export function KeyTakeaways({ points = [] }) {
  if (!points.length) return null;

  return (
    <aside className="rounded-2xl border border-border bg-paper-raised p-6">
      <h3 className="font-serif text-lg text-ink">Key takeaways</h3>
      <ol className="mt-4 space-y-3">
        {points.map((point, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-ink-muted">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-soft font-mono text-[11px] font-semibold text-accent">
              {i + 1}
            </span>
            {point}
          </li>
        ))}
      </ol>
    </aside>
  );
}
