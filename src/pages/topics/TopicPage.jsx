import { useParams } from "react-router-dom";
import { SEOHead } from "../../components/seo/SEOHead";
import { Container } from "../../components/layout/Container";
import { Skeleton } from "../../components/ui/Skeleton";
import { EmptyState } from "../../components/ui/EmptyState";
import { ArticleCard } from "../../components/content/ArticleCard";
import { MarkdownRenderer } from "../../components/content/MarkdownRenderer";
import { Breadcrumbs } from "../../components/content/Breadcrumbs";
import { RelatedResources } from "../../components/content/RelatedResources";
import { useFirestoreQuery } from "../../hooks/useFirestoreQuery";
import { getTopicBySlug, getPublishedTopics } from "../../lib/firestore/topics";
import { getPublishedArticles } from "../../lib/firestore/articles";
import NotFound from "../NotFound";

export default function TopicPage() {
  const { slug } = useParams();

  const { data, loading } = useFirestoreQuery(async () => {
    let topic;
    try {
      topic = await getTopicBySlug(slug);
    } catch (err) {
      if (err.code === "permission-denied") return { topic: null };
      throw err;
    }
    if (!topic) return { topic: null };

    const [articles, allTopics] = await Promise.all([
      getPublishedArticles({ topicSlug: slug, max: 30 }),
      getPublishedTopics(),
    ]);
    const otherTopics = allTopics.filter((t) => t.slug !== slug).slice(0, 6);
    return { topic, articles, otherTopics };
  }, [slug]);

  if (loading) {
    return (
      <Container className="py-20">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="mt-8 h-96 w-full" />
      </Container>
    );
  }

  if (!data?.topic) return <NotFound />;

  const { topic, articles, otherTopics } = data;

  return (
    <Container className="py-16 sm:py-20">
      <SEOHead
        title={topic.seoTitle || topic.name}
        description={topic.seoDescription || topic.description}
        path={`/topics/${topic.slug}`}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: topic.name, path: `/topics/${topic.slug}` },
        ]}
      />

      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: topic.name, path: `/topics/${topic.slug}` },
        ]}
      />

      <div className="mt-6 max-w-2xl">
        <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Topic</p>
        <h1 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">{topic.name}</h1>
        <p className="mt-5 text-lg text-ink-muted">{topic.description}</p>
      </div>

      {topic.longDescriptionMarkdown && (
        <div className="mt-10 max-w-2xl">
          <MarkdownRenderer content={topic.longDescriptionMarkdown} />
        </div>
      )}

      <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_240px] lg:items-start">
        <div>
          <h2 className="mb-6 font-serif text-2xl text-ink">Articles in this topic</h2>
          {articles.length ? (
            <div className="grid gap-6 sm:grid-cols-2">
              {articles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No articles yet"
              description="Articles tagged with this topic from the admin panel will appear here."
            />
          )}
        </div>

        <div className="lg:sticky lg:top-24">
          <RelatedResources topics={otherTopics} />
        </div>
      </div>
    </Container>
  );
}
