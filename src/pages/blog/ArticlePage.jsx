import { useParams } from "react-router-dom";
import { SEOHead } from "../../components/seo/SEOHead";
import { Container } from "../../components/layout/Container";
import { Skeleton } from "../../components/ui/Skeleton";
import { MarkdownRenderer } from "../../components/content/MarkdownRenderer";
import { KeyTakeaways } from "../../components/content/KeyTakeaways";
import { FAQAccordion } from "../../components/content/FAQAccordion";
import { RelatedResources } from "../../components/content/RelatedResources";
import { AuthorByline } from "../../components/content/AuthorByline";
import { Breadcrumbs } from "../../components/content/Breadcrumbs";
import { TableOfContents } from "../../components/content/TableOfContents";
import { ReadingProgress } from "../../components/content/ReadingProgress";
import { useFirestoreQuery } from "../../hooks/useFirestoreQuery";
import { getArticleBySlug, getRelatedArticles } from "../../lib/firestore/articles";
import { getAuthorBySlug } from "../../lib/firestore/authors";
import { getTopicBySlug } from "../../lib/firestore/topics";
import { extractHeadings } from "../../lib/toc";
import { formatDate } from "../../lib/format";
import NotFound from "../NotFound";

export default function ArticlePage() {
  const { slug } = useParams();

  const { data, loading } = useFirestoreQuery(async () => {
    let article;
    try {
      article = await getArticleBySlug(slug);
    } catch (err) {
      if (err.code === "permission-denied") return { article: null };
      throw err;
    }
    if (!article) return { article: null };

    const [author, related, topics] = await Promise.all([
      getAuthorBySlug(article.authorId),
      getRelatedArticles(article),
      Promise.all((article.topicSlugs || []).slice(0, 3).map((s) => getTopicBySlug(s))),
    ]);

    return { article, author, related, topics: topics.filter(Boolean) };
  }, [slug]);

  if (loading) {
    return (
      <Container className="py-20">
        <Skeleton className="h-8 w-40" />
        <Skeleton className="mt-6 h-16 w-full max-w-2xl" />
        <Skeleton className="mt-10 h-96 w-full rounded-3xl" />
      </Container>
    );
  }

  if (!data?.article) return <NotFound />;

  const { article, author, related, topics } = data;
  const headings = extractHeadings(article.contentMarkdown);

  return (
    <article>
      <ReadingProgress />
      <SEOHead
        title={article.seoTitle || article.title}
        description={article.seoDescription || article.excerpt}
        path={`/blog/${article.slug}`}
        ogType="article"
        ogImage={article.coverImageUrl}
        publishedAt={article.publishedAt?.toDate?.().toISOString()}
        updatedAt={article.updatedAt?.toDate?.().toISOString()}
        faqs={article.faqs}
        author={author}
        keywords={topics?.map((t) => t.name)}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Blog", path: "/blog" },
          { label: article.title, path: `/blog/${article.slug}` },
        ]}
      />

      <div className="border-b border-border bg-paper-raised">
        <Container className="max-w-3xl py-14 sm:py-20">
          <Breadcrumbs
            items={[
              { label: "Home", path: "/" },
              { label: "Blog", path: "/blog" },
              { label: article.title, path: `/blog/${article.slug}` },
            ]}
          />
          {article.dek && (
            <p className="mt-6 font-mono text-xs tracking-[0.2em] text-accent uppercase">
              {article.dek}
            </p>
          )}
          <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            {article.title}
          </h1>
          <p className="mt-5 text-lg text-ink-muted">{article.excerpt}</p>
          <div className="mt-8">
            <AuthorByline
              author={author}
              date={article.publishedAt ? formatDate(article.publishedAt) : "Draft"}
              readingTimeMinutes={article.readingTimeMinutes}
            />
          </div>
        </Container>
      </div>

      <Container className="grid gap-12 py-14 lg:grid-cols-[1fr_280px] lg:items-start">
        <div className="max-w-2xl space-y-12">
          {article.coverImageUrl && (
            <img
              src={article.coverImageUrl}
              alt={article.coverImageAlt || article.title}
              className="aspect-video w-full rounded-3xl object-cover"
            />
          )}
          <MarkdownRenderer content={article.contentMarkdown} />
          <KeyTakeaways points={article.keyTakeaways} />
          <FAQAccordion faqs={article.faqs} />
        </div>

        <div className="space-y-8 lg:sticky lg:top-24">
          <TableOfContents headings={headings} />
          <RelatedResources articles={related} topics={topics} />
        </div>
      </Container>
    </article>
  );
}
