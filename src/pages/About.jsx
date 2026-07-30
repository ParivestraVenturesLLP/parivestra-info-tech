import { Link } from "react-router-dom";
import { SEOHead } from "../components/seo/SEOHead";
import { Container } from "../components/layout/Container";

export default function About() {
  return (
    <Container className="py-16 sm:py-20">
      <SEOHead
        title="About"
        description="Parivestra is a multi-topic publication featuring in-depth articles, research, and data across fintech, payments, AI, and technology — written to inform, and worth coming back to."
        path="/about"
        breadcrumbs={[
          { label: "Home", path: "/" },
          { label: "About", path: "/about" },
        ]}
      />

      <div className="max-w-2xl">
        <p className="font-mono text-xs tracking-[0.2em] text-accent uppercase">About</p>
        <h1 className="mt-4 font-serif text-4xl text-ink sm:text-5xl">
          Ideas, research &amp; stories worth reading.
        </h1>
      </div>

      <div className="mt-12 max-w-2xl space-y-6 text-base leading-relaxed text-ink-muted">
        <p>
          Parivestra is a multi-topic publication — ideas, research, and stories across a range
          of subjects, not just one lane. We cover the technology, finance, and business trends
          shaping how people work, build, and spend, and try to explain the mechanics behind them
          rather than just restate the headline.
        </p>
        <p>
          We write for people who need to make a real decision or just want to understand a
          trend properly — which tool is worth adopting, how a new regulation changes the
          landscape, what a set of numbers actually means. Articles are structured around
          concrete comparisons, glossaries, data, and explainers so you can act on them, not just
          skim them.
        </p>
        <h2 className="pt-4 font-serif text-2xl text-ink">What we cover</h2>
        <p>
          Artificial intelligence and the tools built on it, fintech and payments
          infrastructure, cloud and developer tooling, cybersecurity, startup funding, and the
          broader tech and business trends worth tracking — along with the research, statistics,
          and reports behind them.
        </p>
        <h2 className="pt-4 font-serif text-2xl text-ink">Editorial approach</h2>
        <p>
          Articles are researched and drafted using public sources — vendor documentation,
          regulatory filings, pricing pages, and published market data — and are reviewed and
          updated as the underlying facts change (pricing, regulation, and product features
          move quickly in this space). We link to primary sources where they exist. If you spot
          something that's out of date or incorrect, we want to know —{" "}
          <Link to="/contact" className="text-accent underline underline-offset-2">
            get in touch
          </Link>{" "}
          and we'll correct it.
        </p>
        <p>
          Nothing on Parivestra is financial, legal, or investment advice — see our{" "}
          <Link to="/terms" className="text-accent underline underline-offset-2">
            Terms of Service
          </Link>{" "}
          for details. For how we handle data on this site, read our{" "}
          <Link to="/privacy-policy" className="text-accent underline underline-offset-2">
            Privacy Policy
          </Link>
          .
        </p>
      </div>
    </Container>
  );
}
