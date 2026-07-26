import { Link } from "react-router-dom";
import { SEOHead } from "../../components/seo/SEOHead";
import { Container } from "../../components/layout/Container";
import { Skeleton } from "../../components/ui/Skeleton";
import { EmptyState } from "../../components/ui/EmptyState";
import { PageBadge } from "../../components/content/PageBadge";
import { useFirestoreQuery } from "../../hooks/useFirestoreQuery";
import { getPublishedArticles } from "../../lib/firestore/articles";
import { formatDate } from "../../lib/format";
import { parseComparison } from "../../lib/comparison";
import { MAGNET_CATEGORIES, MAGNET_TYPE_TONES } from "../../data/magnetCategories";

const category = MAGNET_CATEGORIES.find((c) => c.type === "comparison");

function ComparisonCard({ article }) {
  const parsed = parseComparison(article.title);
  const dateLabel = article.publishedAt ? formatDate(article.publishedAt) : "";

  return (
    <Link
      to={`/blog/${article.slug}`}
      className="group block overflow-hidden rounded-2xl border border-border bg-paper-raised transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-ink/5"
    >
      {parsed ? (
        <div className={`grid divide-x divide-border ${parsed.names.length >= 3 ? "grid-cols-3" : "grid-cols-2"}`}>
          {parsed.names.slice(0, 3).map((name, i) => (
            <div key={i} className="relative flex items-center justify-center p-6 text-center sm:p-8">
              {i > 0 && (
                <span className="absolute -left-3.5 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-paper font-mono text-[10px] font-bold text-ink-faint">
                  VS
                </span>
              )}
              <h3 className="font-serif text-lg leading-snug text-ink sm:text-xl">{name}</h3>
            </div>
          ))}
        </div>
      ) : (
        <div className="p-6 sm:p-8">
          <h3 className="font-serif text-xl text-ink">{article.title}</h3>
        </div>
      )}
      <div className="border-t border-border p-6 sm:p-8">
        {parsed?.subtitle && (
          <p className="font-mono text-xs tracking-wide text-status-critical uppercase">{parsed.subtitle}</p>
        )}
        <p className="mt-2 line-clamp-2 text-sm text-ink-muted">{article.excerpt}</p>
        <p className="mt-3 text-xs text-ink-faint">
          {dateLabel}
          {article.readingTimeMinutes ? ` · ${article.readingTimeMinutes} min read` : ""}
        </p>
      </div>
    </Link>
  );
}

export default function ComparisonPage() {
  const { data: articles, loading } = useFirestoreQuery(
    () => getPublishedArticles({ type: "comparison", max: 40 }),
    []
  );

  return (
    <Container className="py-16 sm:py-20">
      <SEOHead
        title={category.label}
        description={category.description}
        path={category.path}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: category.label, path: category.path },
        ]}
      />

      <div className="max-w-2xl">
        <PageBadge tone={MAGNET_TYPE_TONES[category.type]}>{category.label}</PageBadge>
        <h1 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">{category.heading}</h1>
        <p className="mt-5 text-lg text-ink-muted">{category.description}</p>
      </div>

      <div className="mt-14 space-y-6">
        {loading ? (
          [...Array(4)].map((_, i) => <Skeleton key={i} className="h-48 rounded-2xl" />)
        ) : articles?.length ? (
          articles.map((article) => <ComparisonCard key={article.slug} article={article} />)
        ) : (
          <EmptyState title={category.emptyTitle} description={category.emptyDescription} />
        )}
      </div>
    </Container>
  );
}
