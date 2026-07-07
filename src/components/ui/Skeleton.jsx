export function Skeleton({ className = "" }) {
  return (
    <div
      className={`animate-pulse rounded-lg bg-ink/[0.06] ${className}`}
      aria-hidden="true"
    />
  );
}
