export function PageBadge({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-border bg-paper-raised px-3 py-1.5 font-mono text-[11px] font-semibold tracking-[0.2em] text-accent uppercase">
      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
      {children}
    </span>
  );
}
