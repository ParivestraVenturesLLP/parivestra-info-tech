import { Link } from "react-router-dom";
import { SEOHead } from "../components/seo/SEOHead";
import { Container } from "../components/layout/Container";

const CONTACT_EMAIL = "accounts@parivestra.com";
const LAST_UPDATED = "July 30, 2026";

export default function PrivacyPolicy() {
  return (
    <Container className="py-16 sm:py-20">
      <SEOHead
        title="Privacy Policy"
        description="How Parivestra collects, uses, and protects your data, including our use of cookies, analytics, and advertising partners."
        path="/privacy-policy"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "Privacy Policy", path: "/privacy-policy" },
        ]}
      />

      <div className="max-w-3xl">
        <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">Privacy Policy</p>
        <h1 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-ink-faint">Last updated: {LAST_UPDATED}</p>
      </div>

      <div className="mt-12 max-w-3xl space-y-8 text-base leading-relaxed text-ink-muted">
        <p>
          This policy explains what information Parivestra ("we," "us") collects when you visit
          parivestrabytes.com (the "Site"), how it's used, and the choices you have. By using the
          Site, you agree to the collection and use of information as described here.
        </p>

        <section>
          <h2 className="font-serif text-2xl text-ink">Information we collect</h2>
          <p className="mt-3">
            We do not require you to create an account or submit personal information to read
            the Site. We do collect limited data automatically:
          </p>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>
              <strong className="text-ink">Usage data</strong> — pages visited, time on page,
              referring URL, device and browser type, and approximate location (derived from IP
              address), collected via Google Analytics.
            </li>
            <li>
              <strong className="text-ink">Cookies and similar technologies</strong> — used for
              analytics and to serve advertising, as described below.
            </li>
            <li>
              <strong className="text-ink">Information you provide directly</strong> — for
              example, if you email us via the{" "}
              <Link to="/contact" className="text-accent underline underline-offset-2">
                Contact
              </Link>{" "}
              page, we receive your email address and whatever you include in the message.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">Cookies</h2>
          <p className="mt-3">
            Cookies are small text files stored on your device. We use them to remember your
            preferences, understand how the Site is used, and to serve relevant advertising.
            Most browsers let you refuse or delete cookies through their settings; doing so may
            affect how parts of the Site function.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">Advertising — Google AdSense</h2>
          <p className="mt-3">
            We use Google AdSense to display advertising on the Site. Google, as a third-party
            vendor, uses cookies (including the DoubleClick DART cookie) to serve ads based on
            your visits to this and other sites. Google's use of advertising cookies enables it
            and its partners to serve ads based on your visit to this Site and/or other sites on
            the Internet.
          </p>
          <p className="mt-3">
            You can opt out of personalized advertising by visiting{" "}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              Google Ads Settings
            </a>
            , or opt out of third-party vendor cookies for personalized advertising by visiting{" "}
            <a
              href="https://www.aboutads.info/choices"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              aboutads.info/choices
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">Analytics &amp; hosting infrastructure</h2>
          <p className="mt-3">
            We use Google Analytics to understand aggregate site traffic and usage patterns, and
            Google Firebase for site hosting, content storage, and analytics. These providers may
            collect data as described in their own privacy policies (
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent underline underline-offset-2"
            >
              Google Privacy Policy
            </a>
            ).
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">Children's privacy</h2>
          <p className="mt-3">
            The Site is not directed at children under 13, and we do not knowingly collect
            personal information from children under 13.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">Your choices</h2>
          <p className="mt-3">
            You can control or disable cookies through your browser settings, and manage
            ad-personalization through the Google links above. If you'd like us to delete any
            personal information you've sent us directly (for example, via email), contact us and
            we'll act on that request.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">Changes to this policy</h2>
          <p className="mt-3">
            We may update this policy from time to time. Changes take effect when posted on this
            page, with the "Last updated" date revised accordingly.
          </p>
        </section>

        <section>
          <h2 className="font-serif text-2xl text-ink">Contact</h2>
          <p className="mt-3">
            Questions about this policy or your data can be sent to{" "}
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
