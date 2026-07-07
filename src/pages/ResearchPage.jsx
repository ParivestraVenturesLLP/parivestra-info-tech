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
          <EmptyState
            title="No research published yet"
            description="Articles marked as research from the admin panel will appear here."
          />
        )}
      </div>
    </Container>
  );
}
