import { Link } from "react-router-dom";
import { Container } from "./Container";

const columns = [
  {
    heading: "Read",
    links: [
      { to: "/blog", label: "Blog" },
      { to: "/research", label: "Research" },
      { to: "/statistics", label: "Statistics" },
      { to: "/reports", label: "Reports" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-paper-raised">
      <Container className="grid gap-12 py-16 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Link to="/" className="flex w-fit items-center">
            <img src="/logo.png" alt="Parivestra" className="h-14 w-auto" />
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-muted">
            A multi-topic publication featuring in-depth articles, research,
            and data worth reading.
          </p>
        </div>

        {columns.map((col) => (
          <div key={col.heading}>
            <h3 className="text-xs font-semibold tracking-widest text-ink-faint uppercase">
              {col.heading}
            </h3>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-ink-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </Container>

      <div className="border-t border-border">
        <Container className="flex flex-col items-center justify-between gap-3 py-6 text-xs text-ink-faint sm:flex-row">
          <span>&copy; {new Date().getFullYear()} Parivestra. All rights reserved.</span>
          <span>Ideas, research &amp; stories.</span>
        </Container>
      </div>
    </footer>
  );
}
