import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AUTOPLAY_MS = 6000;

export function HomeImageSlider({ slides }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(0);
  }, [slides]);

  useEffect(() => {
    if (slides.length < 2) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [slides.length]);

  const slide = slides[index];

  const image = (
    <img
      src={slide.imageUrl}
      alt={slide.imageAlt || ""}
      loading="lazy"
      className="absolute inset-0 h-full w-full object-cover"
    />
  );

  return (
    <div className="relative aspect-4/3 w-full overflow-hidden rounded-2xl border border-border bg-paper-raised">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.slug}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          {slide.linkUrl ? (
            <a href={slide.linkUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-0 block">
              {image}
            </a>
          ) : (
            image
          )}
        </motion.div>
      </AnimatePresence>

      {slides.length > 1 && (
        <div className="absolute bottom-3 right-3 z-10 flex gap-1.5">
          {slides.map((s, i) => (
            <button
              key={s.slug}
              type="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === index ? "w-5 bg-paper" : "w-1.5 bg-paper/50 hover:bg-paper/80"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
