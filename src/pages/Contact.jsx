import { SEOHead } from "../components/seo/SEOHead";
import { Container } from "../components/layout/Container";
import { Button } from "../components/ui/Button";

const CONTACT_EMAIL = "accounts@parivestra.com";

export default function Contact() {
  return (
    <Container className="py-16 sm:py-20">
      <SEOHead
        title="Contact"
        description="Get in touch with the Parivestra team for corrections, editorial inquiries, or advertising."
        path="/contact"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Contact", path: "/contact" },
        ]}
      />

      <div className="max-w-2xl">
        <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Contact</p>
        <h1 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">Get in touch.</h1>
        <p className="mt-5 text-lg text-ink-muted">
          Corrections, editorial inquiries, advertising, or anything else — email us and we'll
          get back to you.
        </p>
      </div>

      <div className="mt-12 max-w-2xl space-y-8">
        <div className="rounded-2xl border border-border bg-paper-raised p-8">
          <h2 className="font-serif text-xl text-ink">General &amp; editorial</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            Story tips, corrections, or feedback on an article.
          </p>
          <Button href={`mailto:${CONTACT_EMAIL}`} variant="accent" className="mt-5">
            {CONTACT_EMAIL}
          </Button>
        </div>

        <div className="rounded-2xl border border-border bg-paper-raised p-8">
          <h2 className="font-serif text-xl text-ink">Advertising &amp; partnerships</h2>
          <p className="mt-2 text-sm leading-relaxed text-ink-muted">
            For sponsorships or partnership inquiries, reach us at the same address.
          </p>
          <Button href={`mailto:${CONTACT_EMAIL}?subject=Advertising inquiry`} variant="outline" className="mt-5">
            Email us
          </Button>
        </div>
      </div>
    </Container>
  );
}
