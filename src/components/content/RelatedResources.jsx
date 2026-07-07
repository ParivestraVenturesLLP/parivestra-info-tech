import { Link } from "react-router-dom";
import { ArticleCard } from "./ArticleCard";

export function RelatedResources({ articles = [], topics = [] }) {
  if (!articles.length && !topics.length) return null;

  return (
    <aside className="rounded-2xl border border-border bg-paper-raised p-6">
      {articles.length > 0 && (
        <div>
          <h3 className="font-serif text-lg text-ink">Related reading</h3>
          <div className="mt-2 divide-y divide-border">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} variant="compact" />
            ))}
          </div>
        </div>
      )}

      {topics.length > 0 && (
        <div className={articles.length ? "mt-6 border-t border-border pt-6" : ""}>
          <h3 className="font-serif text-lg text-ink">Explore topics</h3>
          <div className="mt-3 flex flex-wrap gap-2">
            {topics.map((topic) => (
              <Link
                key={topic.slug}
                to={`/topics/${topic.slug}`}
                className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-ink-muted transition-colors hover:border-accent hover:text-accent"
              >
                {topic.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}
