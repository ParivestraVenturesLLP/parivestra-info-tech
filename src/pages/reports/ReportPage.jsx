import { useParams } from "react-router-dom";
import { SEOHead } from "../../components/seo/SEOHead";
import { Container } from "../../components/layout/Container";
import { Skeleton } from "../../components/ui/Skeleton";
import { Button } from "../../components/ui/Button";
import { MarkdownRenderer } from "../../components/content/MarkdownRenderer";
import { AuthorByline } from "../../components/content/AuthorByline";
import { Breadcrumbs } from "../../components/content/Breadcrumbs";
import { useFirestoreQuery } from "../../hooks/useFirestoreQuery";
import { getReportBySlug } from "../../lib/firestore/reports";
import { getAuthorBySlug } from "../../lib/firestore/authors";
import { formatDate } from "../../lib/format";
import NotFound from "../NotFound";

export default function ReportPage() {
  const { slug } = useParams();

  const { data, loading } = useFirestoreQuery(async () => {
    let report;
    try {
      report = await getReportBySlug(slug);
    } catch (err) {
      if (err.code === "permission-denied") return { report: null };
      throw err;
    }
    if (!report) return { report: null };

    const author = await getAuthorBySlug(report.authorId);
    return { report, author };
  }, [slug]);

  if (loading) {
    return (
      <Container className="py-20">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="mt-8 h-96 w-full" />
      </Container>
    );
  }

  if (!data?.report) return <NotFound />;

  const { report, author } = data;

  return (
    <article>
      <SEOHead
        title={report.seoTitle || report.title}
        description={report.seoDescription || report.summary}
        path={`/reports/${report.slug}`}
        ogType="article"
        ogImage={report.coverImageUrl}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Reports", path: "/reports" },
          { label: report.title, path: `/reports/${report.slug}` },
        ]}
      />

      <Container className="max-w-3xl py-14 sm:py-20">
        <Breadcrumbs
          items={[
            { label: "Home", path: "/" },
            { label: "Reports", path: "/reports" },
            { label: report.title, path: `/reports/${report.slug}` },
          ]}
        />

        <h1 className="mt-6 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
          {report.title}
        </h1>
        <p className="mt-5 text-lg text-ink-muted">{report.summary}</p>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <AuthorByline
            author={author}
            date={report.publishedAt ? formatDate(report.publishedAt) : "Draft"}
          />
          {report.fileUrl && (
            <Button href={report.fileUrl} variant="accent" size="md">
              Download PDF {report.fileSizeLabel ? `(${report.fileSizeLabel})` : ""}
            </Button>
          )}
        </div>

        {report.coverImageUrl && (
          <img
            src={report.coverImageUrl}
            alt={report.title}
            className="mt-10 aspect-[16/9] w-full rounded-3xl object-cover"
          />
        )}

        {report.contentMarkdown && (
          <div className="mt-10">
            <MarkdownRenderer content={report.contentMarkdown} />
          </div>
        )}
      </Container>
    </article>
  );
}
