import { Cell, Pie, PieChart } from "recharts";

// Both use the site's existing brand hues (src/index.css --color-accent /
// --color-secondary) — single-hue proportion encodings, not a categorical palette,
// so the standard CVD checks don't apply here. "neutral" (secondary/gold) is a full,
// solid-color ring for non-percent values — colored like the rest of the site, but
// visually distinct from the real accent-green fill used for genuine percentages.
const TONES = {
  accent: { fill: "#0f5c46", track: "#e4efe9" },
  neutral: { fill: "#b08d4f", track: "#b08d4f" },
};

export function StatDonut({ value, size = 64, tone = "accent" }) {
  const v = Math.min(Math.max(Number(value) || 0, 0), 100);
  const { fill, track } = TONES[tone] || TONES.accent;
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
        innerRadius={size * 0.34}
        outerRadius={size * 0.47}
        startAngle={90}
        endAngle={-270}
        stroke="none"
        isAnimationActive={false}
      >
        <Cell fill={fill} />
        <Cell fill={track} />
      </Pie>
    </PieChart>
  );
}
