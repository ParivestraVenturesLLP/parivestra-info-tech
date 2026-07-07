import { SEOHead } from "../components/seo/SEOHead";
import { Container } from "../components/layout/Container";
import { Skeleton } from "../components/ui/Skeleton";
import { EmptyState } from "../components/ui/EmptyState";
import { ReportCard } from "../components/content/ReportCard";
import { useFirestoreQuery } from "../hooks/useFirestoreQuery";
import { getPublishedReports } from "../lib/firestore/reports";

export default function ReportsPage() {
  const { data: reports, loading } = useFirestoreQuery(() => getPublishedReports(), []);

  return (
    <Container className="py-16 sm:py-20">
      <SEOHead
        title="Reports"
        description="Downloadable reports and research briefs across a range of topics."
        path="/reports"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Reports", path: "/reports" },
        ]}
      />

      <div className="max-w-2xl">
        <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Reports</p>
        <h1 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
          Research briefs, in depth.
        </h1>
      </div>

      <div className="mt-14 space-y-4">
        {loading ? (
          [...Array(4)].map((_, i) => <Skeleton key={i} className="h-24 rounded-2xl" />)
        ) : reports?.length ? (
          reports.map((report) => <ReportCard key={report.slug} report={report} />)
        ) : (
          <EmptyState
            title="No reports published yet"
            description="Reports published from the admin panel will be listed here."
          />
        )}
      </div>
    </Container>
  );
}
