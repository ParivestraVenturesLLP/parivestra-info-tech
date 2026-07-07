import { SEOHead } from "../components/seo/SEOHead";
import { Container } from "../components/layout/Container";
import { Button } from "../components/ui/Button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <SEOHead title="Page not found" path="/404" noindex />
      <p className="font-mono text-sm tracking-widest text-accent uppercase">404</p>
      <h1 className="font-serif text-4xl text-ink sm:text-5xl">We couldn&apos;t find that page</h1>
      <p className="max-w-md text-ink-muted">
        The page you&apos;re looking for may have been moved, unpublished, or never existed.
      </p>
      <Button to="/" variant="primary">
        Back to homepage
      </Button>
    </Container>
  );
}
