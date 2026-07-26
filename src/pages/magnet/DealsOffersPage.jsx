import { Link } from "react-router-dom";
import { SEOHead } from "../../components/seo/SEOHead";
import { Container } from "../../components/layout/Container";
import { Skeleton } from "../../components/ui/Skeleton";
import { EmptyState } from "../../components/ui/EmptyState";
import { PageBadge } from "../../components/content/PageBadge";
import { useFirestoreQuery } from "../../hooks/useFirestoreQuery";
import { getPublishedArticles } from "../../lib/firestore/articles";
import { formatDate } from "../../lib/format";
import { MAGNET_CATEGORIES, MAGNET_TYPE_TONES } from "../../data/magnetCategories";

const category = MAGNET_CATEGORIES.find((c) => c.type === "deals");

function TagIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
      <path
        d="M20 12.5 12.5 20a1.5 1.5 0 0 1-2.12 0l-6.38-6.38a1.5 1.5 0 0 1 0-2.12L11.5 4H19a1 1 0 0 1 1 1v7.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <circle cx="15" cy="8" r="1.25" fill="currentColor" />
    </svg>
  );
}

function DealCard({ article }) {
  const dateLabel = article.publishedAt ? formatDate(article.publishedAt) : "";

  return (
    <Link
      to={`/blog/${article.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-status-warning/25 bg-paper-raised transition-all duration-300 hover:-translate-y-1 hover:border-status-warning/50 hover:shadow-xl hover:shadow-status-warning/10"
    >
      <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 rounded-full bg-status-warning px-3 py-1.5 text-xs font-bold tracking-wide text-paper uppercase shadow-md">
        <TagIcon />
        Offer
      </div>
      <div className="aspect-16/10 overflow-hidden bg-status-warning/10">
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

export default function DealsOffersPage() {
  const { data: articles, loading } = useFirestoreQuery(
    () => getPublishedArticles({ type: "deals", max: 40 }),
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

      <div className="mt-14">
        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-80 rounded-2xl" />
            ))}
          </div>
        ) : articles?.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <DealCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <EmptyState title={category.emptyTitle} description={category.emptyDescription} />
        )}
      </div>
    </Container>
  );
}
