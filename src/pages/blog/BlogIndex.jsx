import { useMemo, useState } from "react";
import { SEOHead } from "../../components/seo/SEOHead";
import { Container } from "../../components/layout/Container";
import { Skeleton } from "../../components/ui/Skeleton";
import { EmptyState } from "../../components/ui/EmptyState";
import { ArticleCard } from "../../components/content/ArticleCard";
import { useFirestoreQuery } from "../../hooks/useFirestoreQuery";
import { useDebounce } from "../../hooks/useDebounce";
import { getPublishedArticles } from "../../lib/firestore/articles";
import { getPublishedTopics } from "../../lib/firestore/topics";

export default function BlogIndex() {
  const [activeTopic, setActiveTopic] = useState(null);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 250);

  const { data: articles, loading } = useFirestoreQuery(
    () => getPublishedArticles({ type: "blog", max: 60 }),
    []
  );
  const { data: topics } = useFirestoreQuery(() => getPublishedTopics(), []);

  const filtered = useMemo(() => {
    if (!articles) return [];
    return articles.filter((article) => {
      const matchesTopic = !activeTopic || article.topicSlugs?.includes(activeTopic);
      const matchesSearch =
        !debouncedSearch ||
        article.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        article.excerpt?.toLowerCase().includes(debouncedSearch.toLowerCase());
      return matchesTopic && matchesSearch;
    });
  }, [articles, activeTopic, debouncedSearch]);

  return (
    <Container className="py-16 sm:py-20">
      <SEOHead
        title="Blog"
        description="Articles and guides spanning a range of topics — analysis, how-tos, and deep dives worth reading."
        path="/blog"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Blog", path: "/blog" },
        ]}
      />

      <div className="max-w-2xl">
        <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Blog</p>
        <h1 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
          Ideas, explained.
        </h1>
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveTopic(null)}
            className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
              !activeTopic
                ? "border-accent bg-accent-soft text-accent"
                : "border-border text-ink-muted hover:border-ink/30"
            }`}
          >
            All
          </button>
          {topics?.map((topic) => (
            <button
              key={topic.slug}
              onClick={() => setActiveTopic(topic.slug)}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${
                activeTopic === topic.slug
                  ? "border-accent bg-accent-soft text-accent"
                  : "border-border text-ink-muted hover:border-ink/30"
              }`}
            >
              {topic.name}
            </button>
          ))}
        </div>

        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search articles…"
          className="w-full rounded-full border border-border bg-paper-raised px-4 py-2 text-sm text-ink placeholder:text-ink-faint focus:border-accent sm:w-64"
        />
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...Array(6)].map((_, i) => (
              <Skeleton key={i} className="h-80 rounded-2xl" />
            ))}
          </div>
        ) : filtered.length ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No articles found"
            description={
              articles?.length
                ? "Try a different topic or search term."
                : "Articles published from the admin panel will appear here."
            }
          />
        )}
      </div>
    </Container>
  );
}
