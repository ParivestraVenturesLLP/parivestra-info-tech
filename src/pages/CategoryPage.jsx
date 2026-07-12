import { SEOHead } from "../components/seo/SEOHead";
import { Container } from "../components/layout/Container";
import { Skeleton } from "../components/ui/Skeleton";
import { EmptyState } from "../components/ui/EmptyState";
import { ArticleCard } from "../components/content/ArticleCard";
import { useFirestoreQuery } from "../hooks/useFirestoreQuery";
import { getPublishedArticles } from "../lib/firestore/articles";

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
        <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">{label}</p>
        <h1 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">{heading}</h1>
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
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <EmptyState title={emptyTitle} description={emptyDescription} />
        )}
      </div>
    </Container>
  );
}
