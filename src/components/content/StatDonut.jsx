import { Cell, Pie, PieChart } from "recharts";

// Same validated accent/accent-soft pair already used for the bar-meter
// (src/index.css --color-accent / --color-accent-soft) — a single-hue proportion
// encoding, not a categorical palette, so the standard CVD checks don't apply here.
const FILL = "#0f5c46";
const TRACK = "#e4efe9";

export function StatDonut({ value, size = 64 }) {
  const v = Math.min(Math.max(Number(value) || 0, 0), 100);
  const data = [
    { name: "value", amount: v },
    { name: "rest", amount: 100 - v },
  ];

  return (
    <PieChart width={size} height={size}>
      <Pie
        data={data}
        dataKey="amount"
        cx="50%"
        cy="50%"
        innerRadius={size * 0.32}
        outerRadius={size * 0.48}
        startAngle={90}
        endAngle={-270}
        stroke="none"
        isAnimationActive={false}
      >
        <Cell fill={FILL} />
        <Cell fill={TRACK} />
      </Pie>
    </PieChart>
  );
}
