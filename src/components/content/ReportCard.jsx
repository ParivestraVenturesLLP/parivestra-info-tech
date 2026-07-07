import { Link } from "react-router-dom";
import { formatDate } from "../../lib/format";

export function ReportCard({ report }) {
  return (
    <Link
      to={`/reports/${report.slug}`}
      className="group flex flex-col gap-4 rounded-2xl border border-border bg-paper-raised p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5 sm:flex-row sm:items-center"
    >
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-secondary-soft text-secondary">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path d="M9 12h6M9 16h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <div className="flex-1">
        <h3 className="font-serif text-lg text-ink transition-colors group-hover:text-accent">
          {report.title}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-ink-muted">{report.summary}</p>
        <p className="mt-2 text-xs text-ink-faint">
          {report.publishedAt ? formatDate(report.publishedAt) : "Coming soon"}
          {report.fileSizeLabel ? ` · ${report.fileSizeLabel}` : ""}
        </p>
      </div>
    </Link>
  );
}
