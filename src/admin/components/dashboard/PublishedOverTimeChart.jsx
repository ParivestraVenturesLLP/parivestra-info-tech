import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Validated single-hue emerald sequential ramp (OKLCH-derived from --color-accent,
// checked with the dataviz skill's validate_palette.js --ordinal — all checks pass).
const EMERALD_400 = "#398a6f";
const EMERALD_250 = "#7dc2a8";

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-border bg-paper-raised px-3 py-2 text-xs shadow-lg">
      <p className="font-medium text-ink">{label}</p>
      <p className="text-ink-muted">{payload[0].value} published</p>
    </div>
  );
}

export function PublishedOverTimeChart({ data }) {
  if (!data?.length) {
    return <p className="text-sm text-ink-faint">No published articles in the last 90 days yet.</p>;
  }

  return (
    <ResponsiveContainer width="100%" height={220}>
      <AreaChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
        <defs>
          <linearGradient id="publishedFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={EMERALD_400} stopOpacity={0.35} />
            <stop offset="100%" stopColor={EMERALD_400} stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <CartesianGrid vertical={false} stroke="#e7e2d5" />
        <XAxis
          dataKey="week"
          tick={{ fontSize: 11, fill: "#8c8878" }}
          axisLine={{ stroke: "#e7e2d5" }}
          tickLine={false}
        />
        <YAxis
          allowDecimals={false}
          tick={{ fontSize: 11, fill: "#8c8878" }}
          axisLine={false}
          tickLine={false}
          width={28}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ stroke: EMERALD_250, strokeWidth: 1 }} />
        <Area
          type="monotone"
          dataKey="count"
          stroke={EMERALD_400}
          strokeWidth={2}
          fill="url(#publishedFill)"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
