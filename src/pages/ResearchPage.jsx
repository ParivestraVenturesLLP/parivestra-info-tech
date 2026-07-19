import { SEOHead } from "../components/seo/SEOHead";
import { Container } from "../components/layout/Container";
import { Skeleton } from "../components/ui/Skeleton";
import { EmptyState } from "../components/ui/EmptyState";
import { ArticleCard } from "../components/content/ArticleCard";
import { useFirestoreQuery } from "../hooks/useFirestoreQuery";
import { getPublishedArticles } from "../lib/firestore/articles";

export default function ResearchPage() {
  const { data: articles, loading } = useFirestoreQuery(
    () => getPublishedArticles({ type: "research", max: 40 }),
    []
  );

  const [featured, ...rest] = articles || [];

  return (
    <Container className="py-16 sm:py-20">
      <SEOHead
        title="Research"
        description="In-depth research and long-form analysis across a range of topics and trends."
        path="/research"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Research", path: "/research" },
        ]}
      />

      <div className="max-w-2xl">
        <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Research</p>
        <h1 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
          Deeper reads, wider topics.
        </h1>
        <p className="mt-5 text-lg text-ink-muted">
          Long-form analysis and cited research — the pieces worth setting aside time for.
        </p>
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
          <EmptyState
            title="No research published yet"
            description="Articles marked as research from the admin panel will appear here."
          />
        )}
      </div>
    </Container>
  );
}
