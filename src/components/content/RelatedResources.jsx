import { Link } from "react-router-dom";

function ChainIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-accent">
      <path
        d="M9 12h6M10 17H7a4 4 0 1 1 0-8h3M14 7h3a4 4 0 1 1 0 8h-3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5 shrink-0 text-ink-faint group-hover:text-accent">
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function RelatedResources({ articles = [], topics = [] }) {
  if (!articles.length && !topics.length) return null;

  return (
    <aside aria-label="Related resources" className="rounded-2xl border border-border bg-paper-raised p-5">
      <h3 className="flex items-center gap-2 font-serif text-base text-ink">
        <ChainIcon />
        Related Resources
      </h3>

      {topics.length > 0 && (
        <div className="mt-5">
          <p className="text-[10px] font-semibold tracking-wide text-ink-faint uppercase">Topic Hubs</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                to={`/topics/${topic.slug}`}
                className="rounded-full border border-accent/20 bg-accent-soft px-3 py-1.5 text-xs font-semibold text-accent transition-colors hover:border-accent/40 hover:bg-accent/15"
              >
                {topic.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {articles.length > 0 && (
        <div className={topics.length ? "mt-6 border-t border-border pt-5" : "mt-5"}>
          <p className="text-[10px] font-semibold tracking-wide text-ink-faint uppercase">Related Articles</p>
          <ul className="mt-3 space-y-2.5">
            {articles.map((article) => (
              <li key={article.slug}>
                <Link
                  to={`/blog/${article.slug}`}
                  className="group flex items-start gap-1.5 text-xs text-ink-muted transition-colors hover:text-ink"
                >
                  <ChevronRightIcon />
                  <span>{article.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </aside>
  );
}
