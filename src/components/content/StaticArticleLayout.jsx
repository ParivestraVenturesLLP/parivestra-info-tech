import { SEOHead } from "../seo/SEOHead";
import { Container } from "../layout/Container";
import { Breadcrumbs } from "./Breadcrumbs";
import { PageBadge } from "./PageBadge";
import { MarkdownRenderer } from "./MarkdownRenderer";
import { KeyTakeaways } from "./KeyTakeaways";
import { FAQAccordion } from "./FAQAccordion";
import { RelatedResources } from "./RelatedResources";
import { TableOfContents } from "./TableOfContents";
import { extractHeadings } from "../../lib/toc";

export function StaticArticleLayout({
  seoTitle,
  seoDescription,
  path,
  dek,
  title,
  excerpt,
  date,
  readingTimeMinutes,
  bodyMarkdown,
  keyTakeaways = [],
  faqs = [],
  relatedTopics = [],
  relatedArticles = [],
}) {
  const headings = extractHeadings(bodyMarkdown);

  return (
    <article>
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        path={path}
        ogType="article"
        faqs={faqs}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Blog", path: "/blog" },
          { label: title, path },
        ]}
      />

      <div className="border-b border-border bg-paper-raised">
        <Container className="max-w-3xl py-14 sm:py-20">
          <Breadcrumbs
            items={[
              { label: "Home", path: "/" },
              { label: "Blog", path: "/blog" },
              { label: title, path },
            ]}
          />
          <div className="mt-6">
            <PageBadge>Article</PageBadge>
          </div>
          {dek && (
            <p className="mt-4 font-mono text-xs tracking-[0.2em] text-accent uppercase">{dek}</p>
          )}
          <h1 className="mt-4 font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 text-lg text-ink-muted">{excerpt}</p>
          <p className="mt-8 text-sm text-ink-faint">
            Parivestra Research Desk · {date}
            {readingTimeMinutes ? ` · ${readingTimeMinutes} min read` : ""}
          </p>
        </Container>
      </div>

      <Container className="grid gap-12 py-14 md:grid-cols-[1fr_280px] md:items-start">
        <div className="max-w-2xl space-y-12">
          <MarkdownRenderer content={bodyMarkdown} />
          <KeyTakeaways points={keyTakeaways} />
          <FAQAccordion faqs={faqs} />
        </div>

        <div className="space-y-8 md:sticky md:top-24">
          <TableOfContents headings={headings} />
          <RelatedResources articles={relatedArticles} topics={relatedTopics} />
        </div>
      </Container>
    </article>
  );
}
