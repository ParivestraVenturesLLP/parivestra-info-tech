import { Bar, BarChart, Cell, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

// Validated default categorical order (dataviz skill, references/palette.md) —
// fixed hue-per-slot assignment, worst adjacent CVD ΔE 24.2. Never cycled/reassigned.
const CATEGORICAL = ["#2a78d6", "#1baf7a", "#eda100", "#008300", "#4a3aa7", "#e34948", "#e87ba4", "#eb6834"];

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const item = payload[0].payload;
  return (
    <div className="rounded-xl border border-border bg-paper-raised px-3 py-2 text-xs shadow-lg">
      <p className="font-medium text-ink">{item.name}</p>
      <p className="text-ink-muted">{item.count} articles</p>
    </div>
  );
}

export function ArticlesByTopicChart({ data }) {
  if (!data?.length) {
    return <p className="text-sm text-ink-faint">No articles tagged with topics yet.</p>;
  }

  const height = Math.max(160, data.length * 36);

  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart data={data} layout="vertical" margin={{ top: 0, right: 24, left: 0, bottom: 0 }}>
        <XAxis type="number" hide allowDecimals={false} />
        <YAxis
          type="category"
          dataKey="name"
          width={140}
          tick={{ fontSize: 12, fill: "#5b584f" }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip content={<CustomTooltip />} cursor={{ fill: "rgba(28,27,24,0.04)" }} />
        <Bar dataKey="count" radius={[0, 4, 4, 0]} barSize={16} label={{ position: "right", fontSize: 11, fill: "#5b584f" }}>
          {data.map((entry, i) => (
            <Cell key={entry.name} fill={CATEGORICAL[i % CATEGORICAL.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
