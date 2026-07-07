import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SEOHead } from "../components/seo/SEOHead";
import { Container } from "../components/layout/Container";
import { Button } from "../components/ui/Button";
import { Skeleton } from "../components/ui/Skeleton";
import { EmptyState } from "../components/ui/EmptyState";
import { ArticleCard } from "../components/content/ArticleCard";
import { HeroSlider } from "../components/content/HeroSlider";
import { useFirestoreQuery } from "../hooks/useFirestoreQuery";
import { getPublishedArticles } from "../lib/firestore/articles";
import { getPublishedTopics } from "../lib/firestore/topics";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  const { data: featured, loading: loadingFeatured } = useFirestoreQuery(
    () => getPublishedArticles({ featured: true, max: 6 }),
    []
  );
  const { data: latest, loading: loadingLatest } = useFirestoreQuery(
    () => getPublishedArticles({ type: "blog", max: 6 }),
    []
  );
  const { data: topics, loading: loadingTopics } = useFirestoreQuery(
    () => getPublishedTopics(),
    []
  );

  const featuredSlugs = new Set((featured || []).map((a) => a.slug));
  const restArticles = (latest || []).filter((a) => !featuredSlugs.has(a.slug)).slice(0, 6);

  return (
    <>
      <SEOHead path="/" />

      {/* Hero */}
      <section className="border-b border-border">
        <Container className="flex flex-col items-center py-20 text-center sm:py-28">
          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="font-mono text-xs tracking-[0.2em] text-accent uppercase"
          >
            Ideas, Research &amp; Stories
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: [16, 0, 0, -8, 0] }}
            transition={{
              opacity: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              y: { duration: 5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 },
            }}
            className="mt-5 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            Clarity on the things that matter.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-ink-muted"
          >
            Research, data, and analysis across a range of topics —
            written to inform, and worth coming back to.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap justify-center gap-3"
          >
            <Button to="/blog" variant="primary" size="lg">
              Read the latest
            </Button>
            <Button to="/statistics" variant="outline" size="lg">
              Browse statistics
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Featured story */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="font-serif text-2xl text-ink">Featured story</h2>
            <Link to="/blog" className="text-sm font-medium text-accent hover:text-accent-hover">
              View all &rarr;
            </Link>
          </div>

          {loadingFeatured ? (
            <Skeleton className="h-105 w-full rounded-3xl" />
          ) : featured?.length ? (
            <HeroSlider articles={featured} />
          ) : (
            <EmptyState
              title="No featured story yet"
              description="Publish an article and mark it as featured from the admin panel to showcase it here."
            />
          )}
        </Container>
      </section>

      {/* Latest articles */}
      <section className="border-t border-border bg-paper-raised py-16 sm:py-20">
        <Container>
          <div className="mb-8 flex items-baseline justify-between">
            <h2 className="font-serif text-2xl text-ink">Latest insights</h2>
            <Link to="/blog" className="text-sm font-medium text-accent hover:text-accent-hover">
              View all &rarr;
            </Link>
          </div>

          {loadingLatest ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-80 rounded-2xl" />
              ))}
            </div>
          ) : restArticles.length ? (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {restArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <EmptyState
              title="No articles published yet"
              description="Once articles are published from the admin panel, they'll appear here."
            />
          )}
        </Container>
      </section>

      {/* Topic collections */}
      <section className="py-16 sm:py-20">
        <Container>
          <h2 className="mb-8 font-serif text-2xl text-ink">Explore by topic</h2>

          {loadingTopics ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[...Array(3)].map((_, i) => (
                <Skeleton key={i} className="h-32 rounded-2xl" />
              ))}
            </div>
          ) : topics?.length ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {topics.map((topic) => (
                <Link
                  key={topic.slug}
                  to={`/topics/${topic.slug}`}
                  className="group flex flex-col justify-between rounded-2xl border border-border bg-paper-raised p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-ink/5"
                >
                  <h3 className="font-serif text-lg text-ink transition-colors group-hover:text-accent">
                    {topic.name}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-ink-muted">{topic.description}</p>
                </Link>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No topics yet"
              description="Topic collections created in the admin panel will be listed here."
            />
          )}
        </Container>
      </section>
    </>
  );
}
