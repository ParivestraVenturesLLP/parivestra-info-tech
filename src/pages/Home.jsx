import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SEOHead } from "../components/seo/SEOHead";
import { Container } from "../components/layout/Container";
import { Button } from "../components/ui/Button";
import { Skeleton } from "../components/ui/Skeleton";
import { EmptyState } from "../components/ui/EmptyState";
import { ArticleCard } from "../components/content/ArticleCard";
import { HeroSlider } from "../components/content/HeroSlider";
import { CardSlider } from "../components/content/CardSlider";
import { RotatingWord } from "../components/content/RotatingWord";
import { StatCard } from "../components/content/StatCard";
import { PageBadge } from "../components/content/PageBadge";
import { useFirestoreQuery } from "../hooks/useFirestoreQuery";
import { getPublishedArticles } from "../lib/firestore/articles";
import { getPublishedTopics } from "../lib/firestore/topics";
import { getPublishedReports } from "../lib/firestore/reports";
import { getPublishedStatsByCategory } from "../lib/firestore/stats";
import { MAGNET_CATEGORIES, MAGNET_TYPE_TONES } from "../data/magnetCategories";
import { formatDate } from "../lib/format";

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const MAGNET_TYPES = MAGNET_CATEGORIES.map((c) => c.type);

function ArticleSlide({ article, badge }) {
  const dateLabel = article.publishedAt ? formatDate(article.publishedAt) : "";
  return (
    <Link
      to={`/blog/${article.slug}`}
      className="group grid overflow-hidden rounded-3xl border border-border bg-paper-raised sm:grid-cols-2"
    >
      <div className="aspect-video overflow-hidden bg-accent-soft sm:aspect-auto">
        {article.coverImageUrl && (
          <img
            src={article.coverImageUrl}
            alt={article.coverImageAlt || article.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        )}
      </div>
      <div className="flex flex-col justify-center gap-4 p-8 sm:p-10">
        {badge ??
          (article.topicSlugs?.[0] && (
            <span className="w-fit rounded-full bg-accent-soft px-3 py-1 text-xs font-medium tracking-wide text-accent uppercase">
              {article.topicSlugs[0].replace(/-/g, " ")}
            </span>
          ))}
        <h3 className="font-serif text-2xl leading-tight text-ink sm:text-3xl">{article.title}</h3>
        <p className="line-clamp-2 text-sm text-ink-muted">{article.excerpt}</p>
        <p className="text-xs text-ink-faint">
          {dateLabel}
          {article.readingTimeMinutes ? ` · ${article.readingTimeMinutes} min read` : ""}
        </p>
      </div>
    </Link>
  );
}

function ReportSlide({ report }) {
  return (
    <Link
      to={`/reports/${report.slug}`}
      className="group grid overflow-hidden rounded-3xl border border-border bg-paper-raised sm:grid-cols-[220px_1fr]"
    >
      <div className="relative flex items-center justify-center overflow-hidden bg-secondary-soft text-secondary">
        {report.coverImageUrl && (
          <img
            src={report.coverImageUrl}
            alt={report.coverImageAlt || report.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        )}
        <svg
          width="56"
          height="56"
          viewBox="0 0 24 24"
          fill="none"
          className={report.coverImageUrl ? "relative drop-shadow-lg" : ""}
        >
          <path
            d="M6 3h9l5 5v13a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Z"
            stroke={report.coverImageUrl ? "white" : "currentColor"}
            strokeWidth="1.4"
          />
          <path
            d="M9 12h6M9 16h6"
            stroke={report.coverImageUrl ? "white" : "currentColor"}
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="flex flex-col justify-center gap-3 p-8 sm:p-10">
        <span className="w-fit rounded-full bg-secondary-soft px-3 py-1 text-xs font-medium tracking-wide text-secondary uppercase">
          Report
        </span>
        <h3 className="font-serif text-2xl leading-tight text-ink sm:text-3xl">{report.title}</h3>
        <p className="line-clamp-2 text-sm text-ink-muted">{report.summary}</p>
        <p className="text-xs text-ink-faint">
          {report.publishedAt ? formatDate(report.publishedAt) : "Coming soon"}
          {report.fileSizeLabel ? ` · ${report.fileSizeLabel}` : ""}
        </p>
      </div>
    </Link>
  );
}

function SectionHeader({ title, viewAllPath }) {
  return (
    <div className="mb-8 flex items-baseline justify-between">
      <h2 className="font-serif text-2xl text-ink">{title}</h2>
      <Link to={viewAllPath} className="text-sm font-medium text-accent hover:text-accent-hover">
        View all &rarr;
      </Link>
    </div>
  );
}

export default function Home() {
  const { data: featured, loading: loadingFeatured } = useFirestoreQuery(
    () => getPublishedArticles({ featured: true, max: 6 }),
    []
  );
  const { data: latest, loading: loadingLatest } = useFirestoreQuery(
    () => getPublishedArticles({ type: "blog", max: 6 }),
    []
  );
  const { data: research, loading: loadingResearch } = useFirestoreQuery(
    () => getPublishedArticles({ type: "research", max: 6 }),
    []
  );
  const { data: reports, loading: loadingReports } = useFirestoreQuery(
    () => getPublishedReports(6),
    []
  );
  const { data: magnetArticles, loading: loadingMagnet } = useFirestoreQuery(
    () => getPublishedArticles({ type: MAGNET_TYPES, max: 6 }),
    []
  );
  const { data: statGroups, loading: loadingStats } = useFirestoreQuery(
    () => getPublishedStatsByCategory(),
    []
  );
  const { data: topics, loading: loadingTopics } = useFirestoreQuery(
    () => getPublishedTopics(),
    []
  );

  const featuredSlugs = new Set((featured || []).map((a) => a.slug));
  const restArticles = (latest || []).filter((a) => !featuredSlugs.has(a.slug)).slice(0, 6);
  const topStats = (statGroups || []).flatMap((g) => g.items).slice(0, 4);

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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mt-5 max-w-3xl font-serif text-5xl leading-[1.05] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            Clarity on the things that{" "}
            <RotatingWord words={["matter", "count", "last"]} />.
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
          <SectionHeader title="Featured story" viewAllPath="/blog" />

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
          <SectionHeader title="Latest insights" viewAllPath="/blog" />

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

      {/* From Research */}
      {(loadingResearch || research?.length > 0) && (
        <section className="py-16 sm:py-20">
          <Container>
            <SectionHeader title="From Research" viewAllPath="/research" />
            {loadingResearch ? (
              <Skeleton className="h-80 w-full rounded-3xl" />
            ) : (
              <CardSlider items={research} renderItem={(a) => <ArticleSlide article={a} />} />
            )}
          </Container>
        </section>
      )}

      {/* By the numbers */}
      {(loadingStats || topStats.length > 0) && (
        <section className="border-t border-border bg-paper-raised py-16 sm:py-20">
          <Container>
            <SectionHeader title="By the numbers" viewAllPath="/statistics" />
            {loadingStats ? (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="h-40 rounded-2xl" />
                ))}
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {topStats.map((stat) => (
                  <StatCard key={stat.id} stat={stat} />
                ))}
              </div>
            )}
          </Container>
        </section>
      )}

      {/* Latest Reports */}
      {(loadingReports || reports?.length > 0) && (
        <section className="py-16 sm:py-20">
          <Container>
            <SectionHeader title="Latest Reports" viewAllPath="/reports" />
            {loadingReports ? (
              <Skeleton className="h-64 w-full rounded-3xl" />
            ) : (
              <CardSlider items={reports} renderItem={(r) => <ReportSlide report={r} />} />
            )}
          </Container>
        </section>
      )}

      {/* From the Magnet desk */}
      {(loadingMagnet || magnetArticles?.length > 0) && (
        <section className="border-t border-border bg-paper-raised py-16 sm:py-20">
          <Container>
            <SectionHeader title="From the Magnet desk" viewAllPath="/deals-offers" />
            {loadingMagnet ? (
              <Skeleton className="h-80 w-full rounded-3xl" />
            ) : (
              <CardSlider
                items={magnetArticles}
                renderItem={(a) => {
                  const category = MAGNET_CATEGORIES.find((c) => c.type === a.type);
                  return (
                    <ArticleSlide
                      article={a}
                      badge={
                        category && (
                          <PageBadge tone={MAGNET_TYPE_TONES[a.type]}>{category.label}</PageBadge>
                        )
                      }
                    />
                  );
                }}
              />
            )}
          </Container>
        </section>
      )}

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
