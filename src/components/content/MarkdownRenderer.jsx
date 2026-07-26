import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { slugify } from "../../lib/slug";

function headingText(children) {
  return Array.isArray(children) ? children.join("") : String(children ?? "");
}

const baseComponents = {
  h3: ({ children }) => (
    <h3 id={slugify(headingText(children))} className="scroll-mt-24">
      {children}
    </h3>
  ),
  blockquote: ({ children }) => (
    <blockquote className="my-8 border-l-2 border-accent pl-6 font-serif text-xl leading-snug text-ink italic">
      {children}
    </blockquote>
  ),
  img: ({ src, alt }) => (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="my-8 w-full rounded-2xl border border-border"
    />
  ),
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto rounded-xl border border-border">
      <table className="w-full">{children}</table>
    </div>
  ),
  code: ({ inline, children }) =>
    inline ? (
      <code className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-[0.85em] text-ink">
        {children}
      </code>
    ) : (
      <code className="font-mono text-sm">{children}</code>
    ),
};

// `numbered` prefixes each H2 with a large ordinal (01, 02, ...), matching the
// Compilation listing page's numbered-listicle identity, for compilation-type articles.
export function MarkdownRenderer({ content, numbered = false }) {
  let h2Count = 0;

  const components = {
    ...baseComponents,
    h2: ({ children }) => {
      h2Count += 1;
      const index = h2Count;
      return (
        <h2 id={slugify(headingText(children))} className="scroll-mt-24 flex items-baseline gap-3">
          {numbered && (
            <span className="font-serif text-2xl text-accent/40">{String(index).padStart(2, "0")}</span>
          )}
          <span>{children}</span>
        </h2>
      );
    },
  };

  return (
    <div className="prose-article prose prose-lg max-w-none font-sans">
      <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
