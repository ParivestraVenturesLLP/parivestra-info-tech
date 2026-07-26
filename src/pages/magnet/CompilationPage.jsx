import { Link } from "react-router-dom";
import { SEOHead } from "../../components/seo/SEOHead";
import { Container } from "../../components/layout/Container";
import { Skeleton } from "../../components/ui/Skeleton";
import { EmptyState } from "../../components/ui/EmptyState";
import { PageBadge } from "../../components/content/PageBadge";
import { useFirestoreQuery } from "../../hooks/useFirestoreQuery";
import { getPublishedArticles } from "../../lib/firestore/articles";
import { MAGNET_CATEGORIES, MAGNET_TYPE_TONES } from "../../data/magnetCategories";

const category = MAGNET_CATEGORIES.find((c) => c.type === "compilation");

function CompilationRow({ article, index }) {
  return (
    <Link
      to={`/blog/${article.slug}`}
      className="group flex items-center gap-6 border-b border-border py-6 first:pt-0 last:border-b-0"
    >
      <span className="font-serif text-4xl leading-none text-accent/25 transition-colors group-hover:text-accent/50 sm:text-5xl">
        {String(index + 1).padStart(2, "0")}
      </span>
      <div className="min-w-0 flex-1">
        <h3 className="font-serif text-xl leading-snug text-ink transition-colors group-hover:text-accent sm:text-2xl">
          {article.title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm text-ink-muted">{article.excerpt}</p>
        <p className="mt-2 text-xs text-ink-faint">
          {article.readingTimeMinutes ? `${article.readingTimeMinutes} min read` : ""}
        </p>
      </div>
      {article.coverImageUrl && (
        <img
          src={article.coverImageUrl}
          alt={article.coverImageAlt || article.title}
          loading="lazy"
          className="hidden h-20 w-28 shrink-0 rounded-xl object-cover sm:block"
        />
      )}
    </Link>
  );
}

export default function CompilationPage() {
  const { data: articles, loading } = useFirestoreQuery(
    () => getPublishedArticles({ type: "compilation", max: 40 }),
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
          <div className="space-y-6">
            {[...Array(5)].map((_, i) => (
              <Skeleton key={i} className="h-24 rounded-2xl" />
            ))}
          </div>
        ) : articles?.length ? (
          <div>
            {articles.map((article, i) => (
              <CompilationRow key={article.slug} article={article} index={i} />
            ))}
          </div>
        ) : (
          <EmptyState title={category.emptyTitle} description={category.emptyDescription} />
        )}
      </div>
    </Container>
  );
}
