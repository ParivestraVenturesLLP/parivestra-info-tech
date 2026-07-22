import { Link } from "react-router-dom";
import { formatDate } from "../../lib/format";

export function ArticleCard({ article, variant = "default", badge }) {
  const dateLabel = article.publishedAt ? formatDate(article.publishedAt) : "";

  if (variant === "featured") {
    return (
      <Link
        to={`/blog/${article.slug}`}
        className="group relative block overflow-hidden rounded-3xl bg-ink text-paper"
      >
        {article.coverImageUrl && (
          <img
            src={article.coverImageUrl}
            alt={article.coverImageAlt || article.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-700 ease-out group-hover:scale-105"
          />
        )}
        <div className="relative flex min-h-105 flex-col justify-end gap-4 bg-linear-to-t from-ink via-ink/40 to-transparent p-8 sm:p-10">
          {article.topicSlugs?.[0] && (
            <span className="w-fit rounded-full bg-paper/15 px-3 py-1 text-xs font-medium tracking-wide text-paper uppercase backdrop-blur-sm">
              {article.topicSlugs[0].replace(/-/g, " ")}
            </span>
          )}
          <h3 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
            {article.title}
          </h3>
          <p className="max-w-xl text-sm text-paper/70">{article.excerpt}</p>
          <p className="text-xs text-paper/50">
            {dateLabel}
            {article.readingTimeMinutes ? ` · ${article.readingTimeMinutes} min read` : ""}
          </p>
        </div>
      </Link>
    );
  }

  if (variant === "compact") {
    return (
      <Link to={`/blog/${article.slug}`} className="group flex items-start gap-4 py-4">
        {article.coverImageUrl && (
          <img
            src={article.coverImageUrl}
            alt=""
            loading="lazy"
            className="h-16 w-16 shrink-0 rounded-xl object-cover"
          />
        )}
        <div>
          <h4 className="font-medium text-ink transition-colors group-hover:text-accent">
            {article.title}
          </h4>
          <p className="mt-1 text-xs text-ink-faint">{dateLabel}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/blog/${article.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-paper-raised transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5"
    >
      <div className="aspect-16/10 overflow-hidden bg-accent-soft">
        {article.coverImageUrl && (
          <img
            src={article.coverImageUrl}
            alt={article.coverImageAlt || article.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col gap-3 p-6">
        {badge ??
          (article.topicSlugs?.[0] && (
            <span className="text-xs font-medium tracking-wide text-accent uppercase">
              {article.topicSlugs[0].replace(/-/g, " ")}
            </span>
          ))}
        <h3 className="font-serif text-xl leading-snug text-ink">{article.title}</h3>
        <p className="line-clamp-2 flex-1 text-sm text-ink-muted">{article.excerpt}</p>
        <p className="text-xs text-ink-faint">
          {dateLabel}
          {article.readingTimeMinutes ? ` · ${article.readingTimeMinutes} min read` : ""}
        </p>
      </div>
    </Link>
  );
}
