import { SEOHead } from "../seo/SEOHead";
import { Container } from "../layout/Container";
import { Breadcrumbs } from "./Breadcrumbs";
import { PageBadge } from "./PageBadge";
import { MarkdownRenderer } from "./MarkdownRenderer";
import { FAQAccordion } from "./FAQAccordion";
import { RelatedResources } from "./RelatedResources";

export function StaticTopicLayout({
  seoTitle,
  seoDescription,
  path,
  name,
  description,
  bodyMarkdown,
  faqs = [],
  relatedTopics = [],
  relatedArticles = [],
}) {
  return (
    <Container className="py-16 sm:py-20">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        path={path}
        faqs={faqs}
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: name, path },
        ]}
      />

      <Breadcrumbs
        items={[
          { label: "Home", path: "/" },
          { label: name, path },
        ]}
      />

      <div className="mt-6 max-w-2xl">
        <PageBadge>Topic Hub</PageBadge>
        <h1 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">{name}</h1>
        <p className="mt-5 text-lg text-ink-muted">{description}</p>
      </div>

      <div className="mt-14 grid gap-12 md:grid-cols-[1fr_240px] md:items-start">
        <div className="max-w-2xl space-y-10">
          <MarkdownRenderer content={bodyMarkdown} />
          <FAQAccordion faqs={faqs} />
        </div>

        <div className="md:sticky md:top-24">
          <RelatedResources topics={relatedTopics} articles={relatedArticles} />
        </div>
      </div>
    </Container>
  );
}
