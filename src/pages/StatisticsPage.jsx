import { SEOHead } from "../components/seo/SEOHead";
import { Container } from "../components/layout/Container";
import { Skeleton } from "../components/ui/Skeleton";
import { EmptyState } from "../components/ui/EmptyState";
import { StatCard } from "../components/content/StatCard";
import { useFirestoreQuery } from "../hooks/useFirestoreQuery";
import { getPublishedStatsByCategory } from "../lib/firestore/stats";

export default function StatisticsPage() {
  const { data: groups, loading } = useFirestoreQuery(() => getPublishedStatsByCategory(), []);

  return (
    <Container className="py-16 sm:py-20">
      <SEOHead
        title="Statistics"
        description="Cited data points and statistics across a range of topics — sourced and dated."
        path="/statistics"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Statistics", path: "/statistics" },
        ]}
      />

      <div className="max-w-2xl">
        <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Statistics</p>
        <h1 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
          By the numbers.
        </h1>
        <p className="mt-5 text-lg text-ink-muted">
          Cited data points and statistics across topics — sourced and dated.
        </p>
      </div>

      <div className="mt-14 space-y-14">
        {loading ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[...Array(4)].map((_, i) => (
              <Skeleton key={i} className="h-40 rounded-2xl" />
            ))}
          </div>
        ) : groups?.length ? (
          groups.map((group) => (
            <div key={group.category}>
              <h2 className="mb-5 font-serif text-2xl text-ink">{group.category}</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {group.items.map((stat) => (
                  <StatCard key={stat.id} stat={stat} />
                ))}
              </div>
            </div>
          ))
        ) : (
          <EmptyState
            title="No statistics published yet"
            description="Data points added from the admin panel will be grouped and shown here."
          />
        )}
      </div>
    </Container>
  );
}
