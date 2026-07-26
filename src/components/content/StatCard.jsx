import { formatStat } from "../../lib/format";
import { StatDonut } from "./StatDonut";

const trendColor = {
  up: "text-status-good",
  down: "text-status-critical",
  flat: "text-ink-faint",
};

const trendIcon = { up: "↑", down: "↓", flat: "→" };

// "percent" and "multiplier" formats already append their own suffix (e.g. "85%", "3x"),
// so a separate unit field would double up (e.g. "85%" + "%" unit -> "85%%").
const SELF_SUFFIXED_FORMATS = new Set(["percent", "multiplier"]);

export function StatCard({ stat }) {
  const isDonut = stat.format === "percent";
  const showUnit = stat.unit && !SELF_SUFFIXED_FORMATS.has(stat.format);

  return (
    <div className="min-w-0 rounded-2xl border border-border bg-paper-raised p-6">
      <p className="text-sm wrap-break-word text-ink-muted">{stat.label}</p>

      {isDonut ? (
        <div className="mt-3 flex items-center gap-4">
          <div className="relative shrink-0">
            <StatDonut value={stat.value} size={64} />
            <span className="absolute inset-0 flex items-center justify-center font-mono text-xs font-semibold text-ink">
              {formatStat(stat.value, stat.format)}
            </span>
          </div>
          {stat.deltaLabel && (
            <p className={`text-sm font-medium ${trendColor[stat.trend] || "text-ink-faint"}`}>
              {trendIcon[stat.trend] || ""} {stat.deltaLabel}
            </p>
          )}
        </div>
      ) : (
        <>
          <div className="mt-2">
            <span className="font-mono text-3xl font-semibold tracking-tight wrap-break-word text-ink">
              {formatStat(stat.value, stat.format)}
            </span>
            {showUnit && <p className="mt-0.5 text-sm wrap-break-word text-ink-faint">{stat.unit}</p>}
          </div>
          {stat.deltaLabel && (
            <p className={`mt-2.5 text-sm font-medium ${trendColor[stat.trend] || "text-ink-faint"}`}>
              {trendIcon[stat.trend] || ""} {stat.deltaLabel}
            </p>
          )}
        </>
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
