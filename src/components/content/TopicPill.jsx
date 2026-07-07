import { Link } from "react-router-dom";

export function TopicPill({ slug, label, className = "" }) {
  return (
    <Link
      to={`/topics/${slug}`}
      className={`inline-flex items-center rounded-full border border-border bg-paper-raised px-3 py-1 text-xs font-medium text-ink-muted transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      {label}
    </Link>
  );
}
