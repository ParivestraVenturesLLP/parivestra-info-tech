import { Link } from "react-router-dom";
import { SEOHead } from "../../components/seo/SEOHead";
import { Container } from "../../components/layout/Container";
import { Skeleton } from "../../components/ui/Skeleton";
import { EmptyState } from "../../components/ui/EmptyState";
import { PageBadge } from "../../components/content/PageBadge";
import { useFirestoreQuery } from "../../hooks/useFirestoreQuery";
import { getPublishedArticles } from "../../lib/firestore/articles";
import { MAGNET_CATEGORIES, MAGNET_TYPE_TONES } from "../../data/magnetCategories";

const category = MAGNET_CATEGORIES.find((c) => c.type === "resource");

function BookmarkIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0">
      <path
        d="M6 3.5h12a1 1 0 0 1 1 1V21l-7-4-7 4V4.5a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ResourceRow({ article }) {
  return (
    <Link
      to={`/blog/${article.slug}`}
      className="group flex items-center gap-5 rounded-2xl border border-border bg-paper-raised p-5 transition-colors hover:border-status-good/40 sm:p-6"
    >
      <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-status-good/10 sm:h-20 sm:w-20">
        {article.coverImageUrl && (
          <img
            src={article.coverImageUrl}
            alt={article.coverImageAlt || article.title}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2 text-status-good">
          <BookmarkIcon />
          <span className="font-mono text-[11px] font-semibold tracking-widest uppercase">Reference</span>
        </div>
        <h3 className="mt-1.5 font-serif text-lg leading-snug text-ink sm:text-xl">{article.title}</h3>
        <p className="mt-1 line-clamp-1 text-sm text-ink-muted">{article.excerpt}</p>
      </div>
      <span className="hidden shrink-0 text-sm text-ink-faint sm:block">
        {article.readingTimeMinutes ? `${article.readingTimeMinutes} min read` : ""}
      </span>
    </Link>
  );
}

export default function ResourcePage() {
  const { data: articles, loading } = useFirestoreQuery(
    () => getPublishedArticles({ type: "resource", max: 40 }),
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

      <div className="mt-14 space-y-3">
        {loading ? (
          [...Array(6)].map((_, i) => <Skeleton key={i} className="h-24 rounded-2xl" />)
        ) : articles?.length ? (
          articles.map((article) => <ResourceRow key={article.slug} article={article} />)
        ) : (
          <EmptyState title={category.emptyTitle} description={category.emptyDescription} />
        )}
      </div>
    </Container>
  );
}
