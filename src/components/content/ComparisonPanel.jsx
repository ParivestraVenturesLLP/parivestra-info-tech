import { Container } from "../layout/Container";
import { parseComparison } from "../../lib/comparison";

export function ComparisonPanel({ title }) {
  const parsed = parseComparison(title);
  if (!parsed) return null;

  return (
    <Container className="max-w-5xl pb-10 sm:pb-14">
      <div
        className={`grid divide-x divide-border overflow-hidden rounded-2xl border border-border bg-paper ${
          parsed.names.length >= 3 ? "grid-cols-3" : "grid-cols-2"
        }`}
      >
        {parsed.names.slice(0, 3).map((name, i) => (
          <div key={i} className="relative flex items-center justify-center p-6 text-center sm:p-8">
            {i > 0 && (
              <span className="absolute -left-3.5 top-1/2 z-10 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-paper font-mono text-[10px] font-bold text-ink-faint">
                VS
              </span>
            )}
            <h2 className="font-serif text-xl leading-snug text-ink sm:text-2xl">{name}</h2>
          </div>
        ))}
      </div>
    </Container>
  );
}
