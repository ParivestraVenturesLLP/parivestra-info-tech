import { formatStat } from "../../lib/format";

const trendColor = {
  up: "text-status-good",
  down: "text-status-critical",
  flat: "text-ink-faint",
};

const trendIcon = { up: "↑", down: "↓", flat: "→" };

export function StatCard({ stat }) {
  return (
    <div className="min-w-0 rounded-2xl border border-border bg-paper-raised p-6">
      <p className="text-sm wrap-break-word text-ink-muted">{stat.label}</p>
      <p className="mt-2 font-mono text-3xl font-semibold tracking-tight wrap-break-word text-ink">
        {formatStat(stat.value, stat.format)}
        {stat.unit && <span className="ml-1 text-lg wrap-break-word text-ink-faint">{stat.unit}</span>}
      </p>
      {stat.deltaLabel && (
        <p className={`mt-1 text-sm font-medium ${trendColor[stat.trend] || "text-ink-faint"}`}>
          {trendIcon[stat.trend] || ""} {stat.deltaLabel}
        </p>
      )}
      {stat.note && <p className="mt-2 text-xs text-ink-faint">{stat.note}</p>}
      <a
        href={stat.sourceUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 block text-xs text-ink-faint underline decoration-border underline-offset-2 hover:text-accent"
      >
        Source: {stat.sourceName} ({stat.asOfDate})
      </a>
    </div>
  );
}
