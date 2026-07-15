const TONES = {
  accent: "border-accent/30 bg-accent-soft text-accent",
  secondary: "border-secondary/30 bg-secondary-soft text-secondary",
  good: "border-status-good/30 bg-status-good/10 text-status-good",
  warning: "border-status-warning/30 bg-status-warning/10 text-status-warning",
  critical: "border-status-critical/30 bg-status-critical/10 text-status-critical",
};

export function PageBadge({ children, tone = "accent" }) {
  const toneClasses = TONES[tone] || TONES.accent;
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-mono text-[11px] font-semibold tracking-[0.2em] uppercase ${toneClasses}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {children}
    </span>
  );
}
