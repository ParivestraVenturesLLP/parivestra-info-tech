const tones = {
  accent: "bg-accent-soft text-accent",
  secondary: "bg-secondary-soft text-secondary",
  neutral: "bg-ink/5 text-ink-muted",
  good: "bg-status-good/10 text-status-good",
  warning: "bg-status-warning/10 text-status-warning",
  critical: "bg-status-critical/10 text-status-critical",
};

export function Badge({ tone = "neutral", className = "", children }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide uppercase ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
