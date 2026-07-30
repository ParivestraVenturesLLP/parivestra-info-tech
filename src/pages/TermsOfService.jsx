import { Link } from "react-router-dom";
import { SEOHead } from "../components/seo/SEOHead";
import { Container } from "../components/layout/Container";

const CONTACT_EMAIL = "accounts@parivestra.com";
const LAST_UPDATED = "July 30, 2026";

export default function TermsOfService() {
  return (
    <Container className="py-16 sm:py-20">
      <SEOHead
        title="Terms of Service"
        description="The terms that govern your use of Parivestra, including our content and financial-information disclaimer."
        path="/terms"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Terms of Service", path: "/terms" },
        ]}
      />

      <div className="max-w-3xl">
        <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Terms of Service</p>
        <h1 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">Terms of Service</h1>
        <p className="mt-4 text-sm text-ink-faint">Last updated: {LAST_UPDATED}</p>
      </div>

      <div className="mt-12 max-w-3xl space-y-8 text-base leading-relaxed text-ink-muted">
        <p>
          These terms govern your use of parivestrabytes.com (the "Site"), published by
          Parivestra. By using the Site, you agree to these terms.
        </p>

        <section>
          <h2 className="font-serif text-2xl text-ink">Not financial or professional advice</h2>
          <p className="mt-3">
            Parivestra covers fintech, payments, and technology topics for informational purposes
            only. Nothing on this Site constitutes financial, investment, legal, tax, or
            professional advice, and no article should be relied on as the sole basis for a
            business or financial decision. Product pricing, fees, and regulatory details change
            over time — verify current terms directly with the relevant provider or authority
            before acting on anything described here.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">Content &amp; intellectual property</h2>
          <p className="mt-3">
            Unless otherwise noted, articles, graphics, and other content on the Site are the
            property of Parivestra and may not be reproduced, republished, or redistributed
            without prior written permission. Brief excerpts with a clear, direct link back to
            the original article are permitted.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">Third-party links</h2>
          <p className="mt-3">
            The Site links to third-party websites, products, and services for reference. We
            don't control and aren't responsible for the content, accuracy, or practices of those
            sites. Links are not endorsements.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">Advertising</h2>
          <p className="mt-3">
            The Site displays advertising served by Google AdSense and other ad networks. See our{" "}
            <Link to="/privacy-policy" className="text-accent underline underline-offset-2">
              Privacy Policy
            </Link>{" "}
            for details on how advertising cookies are used.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">Limitation of liability</h2>
          <p className="mt-3">
            The Site and its content are provided "as is," without warranties of any kind. To the
            fullest extent permitted by law, Parivestra is not liable for any loss or damage
            arising from your use of, or reliance on, the Site or its content.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">Changes</h2>
          <p className="mt-3">
            We may update these terms from time to time. Continued use of the Site after changes
            are posted constitutes acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">Contact</h2>
          <p className="mt-3">
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-accent underline underline-offset-2">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </section>
      </div>
    </Container>
  );
}
