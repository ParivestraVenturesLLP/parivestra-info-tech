export function StatTile({ label, value }) {
  return (
    <div className="rounded-2xl border border-border bg-paper-raised p-6">
      <p className="text-sm text-ink-muted">{label}</p>
      <p className="mt-2 font-mono text-3xl font-semibold text-ink">{value}</p>
    </div>
  );
}
