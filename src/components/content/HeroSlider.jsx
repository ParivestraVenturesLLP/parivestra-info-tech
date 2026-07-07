import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { formatDate } from "../../lib/format";

const AUTOPLAY_MS = 6000;

export function HeroSlider({ articles }) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    setIndex(0);
  }, [articles]);

  useEffect(() => {
    if (paused || articles.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % articles.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [paused, articles.length]);

  const article = articles[index];
  const dateLabel = article.publishedAt ? formatDate(article.publishedAt) : "";

  return (
    <div
      className="group relative overflow-hidden rounded-3xl bg-ink text-paper"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative min-h-[420px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={article.slug}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Link to={`/blog/${article.slug}`} className="absolute inset-0 block">
              {article.coverImageUrl && (
                <img
                  src={article.coverImageUrl}
                  alt={article.coverImageAlt || article.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover opacity-60"
                />
              )}
              <div className="relative flex min-h-[420px] flex-col justify-end gap-4 bg-gradient-to-t from-ink via-ink/40 to-transparent p-8 sm:p-10">
                {article.topicSlugs?.[0] && (
                  <span className="w-fit rounded-full bg-paper/15 px-3 py-1 text-xs font-medium tracking-wide text-paper uppercase backdrop-blur-sm">
                    {article.topicSlugs[0].replace(/-/g, " ")}
                  </span>
                )}
                <h3 className="font-serif text-3xl leading-tight tracking-tight sm:text-4xl">
                  {article.title}
                </h3>
                <p className="max-w-xl text-sm text-paper/70">{article.excerpt}</p>
                <p className="text-xs text-paper/50">
                  {dateLabel}
                  {article.readingTimeMinutes ? ` · ${article.readingTimeMinutes} min read` : ""}
                </p>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>
      </div>

      {articles.length > 1 && (
        <div className="absolute bottom-6 right-8 z-10 flex gap-2">
          {articles.map((a, i) => (
            <button
              key={a.slug}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-paper" : "w-1.5 bg-paper/40 hover:bg-paper/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
