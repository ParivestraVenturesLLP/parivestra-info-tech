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

function valueFontSize(text) {
  if (text.length > 13) return "text-[7px]";
  if (text.length > 9) return "text-[9px]";
  if (text.length > 6) return "text-[11px]";
  return "text-sm";
}

export function StatCard({ stat }) {
  const isPercent = stat.format === "percent";
  const showUnit = stat.unit && !SELF_SUFFIXED_FORMATS.has(stat.format);
  const formatted = formatStat(stat.value, stat.format);

  return (
    <div className="min-w-0 rounded-2xl border border-border bg-paper-raised p-6">
      <p className="text-sm wrap-break-word text-ink-muted">{stat.label}</p>

      <div className="mt-3 flex items-center gap-4">
        <div className="relative shrink-0">
          <StatDonut value={isPercent ? stat.value : 100} tone={isPercent ? "accent" : "neutral"} size={76} />
          <span
            className={`absolute top-1/2 left-1/2 w-13 -translate-x-1/2 -translate-y-1/2 text-center leading-[1.1] wrap-break-word font-mono font-semibold text-ink ${valueFontSize(formatted)}`}
          >
            {formatted}
          </span>
        </div>
        <div className="min-w-0 flex-1">
          {showUnit && <p className="text-xs wrap-break-word text-ink-faint">{stat.unit}</p>}
          {stat.deltaLabel && (
            <p className={`mt-1 text-sm font-medium wrap-break-word ${trendColor[stat.trend] || "text-ink-faint"}`}>
              {trendIcon[stat.trend] || ""} {stat.deltaLabel}
            </p>
          )}
        </div>
      </div>

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
