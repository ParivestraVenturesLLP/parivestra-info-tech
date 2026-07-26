import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// Same validated accent used by StatDonut / PublishedOverTimeChart — single-hue
// magnitude encoding, not a categorical palette.
const FILL = "#0f5c46";
const AXIS_TICK = { fontSize: 12, fill: "#8c8878" };
const GRIDLINE = "#e7e2d5";

function truncate(label, max = 34) {
  return label.length > max ? `${label.slice(0, max - 1)}…` : label;
}

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const item = payload[0].payload;
  return (
    <div className="max-w-64 rounded-xl border border-border bg-paper-raised px-3 py-2 text-xs shadow-lg">
      <p className="font-medium text-ink">{item.fullLabel}</p>
      <p className="text-ink-muted">{item.value}%</p>
    </div>
  );
}

/** Charts only the genuine "share of a whole" percent stats (<=100) in `stats` —
 * never a growth rate or a different-unit figure, so units are never mixed on one axis. */
export function CategoryStatsBar({ stats }) {
  const data = stats
    .filter((s) => s.format === "percent" && Number(s.value) <= 100)
    .map((s) => ({
      label: truncate(s.label),
      fullLabel: s.label,
      value: Number(s.value) || 0,
    }));
  const height = Math.max(110, data.length * 46);

  return (
    <div className="mb-6 rounded-2xl border border-border bg-paper-raised p-6">
      <ResponsiveContainer width="100%" height={height}>
        <BarChart data={data} layout="vertical" margin={{ top: 4, right: 28, left: 4, bottom: 4 }}>
          <XAxis
            type="number"
            domain={[0, 100]}
            unit="%"
            tick={AXIS_TICK}
            axisLine={{ stroke: GRIDLINE }}
            tickLine={false}
          />
          <YAxis
            type="category"
            dataKey="label"
            width={230}
            tick={AXIS_TICK}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: FILL, fillOpacity: 0.06 }} />
          <Bar dataKey="value" fill={FILL} radius={[0, 4, 4, 0]} barSize={20} isAnimationActive={false} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export function canChartTogether(stats) {
  const percentStats = stats.filter((s) => s.format === "percent");
  return percentStats.length >= 2 && percentStats.every((s) => Number(s.value) <= 100);
}
