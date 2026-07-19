import { SEOHead } from "../components/seo/SEOHead";
import { Container } from "../components/layout/Container";
import { Skeleton } from "../components/ui/Skeleton";
import { EmptyState } from "../components/ui/EmptyState";
import { ArticleCard } from "../components/content/ArticleCard";
import { PageBadge } from "../components/content/PageBadge";
import { useFirestoreQuery } from "../hooks/useFirestoreQuery";
import { getPublishedArticles } from "../lib/firestore/articles";
import { MAGNET_TYPE_TONES } from "../data/magnetCategories";

export default function CategoryPage({
  type,
  path,
  label,
  heading,
  description,
  emptyTitle,
  emptyDescription,
}) {
  const { data: articles, loading } = useFirestoreQuery(
    () => getPublishedArticles({ type, max: 40 }),
    [type]
  );

  const [featured, ...rest] = articles || [];

  return (
    <Container className="py-16 sm:py-20">
      <SEOHead
        title={label}
        description={description}
        path={path}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label, path },
        ]}
      />

      <div className="max-w-2xl">
        <PageBadge tone={MAGNET_TYPE_TONES[type]}>{label}</PageBadge>
        <h1 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">{heading}</h1>
        <p className="mt-5 text-lg text-ink-muted">{description}</p>
      </div>

      <div className="mt-14">
        {loading ? (
          <div className="space-y-10">
            <Skeleton className="h-105 w-full rounded-3xl" />
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-80 rounded-2xl" />
              ))}
            </div>
          </div>
        ) : featured ? (
          <div className="space-y-12">
            <ArticleCard article={featured} variant="featured" />
            {rest.length > 0 && (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {rest.map((article) => (
                  <ArticleCard key={article.slug} article={article} />
                ))}
              </div>
            )}
          </div>
        ) : (
          <EmptyState title={emptyTitle} description={emptyDescription} />
        )}
      </div>
    </Container>
  );
}
