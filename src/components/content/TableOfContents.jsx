import { useEffect, useState } from "react";

export function TableOfContents({ headings = [] }) {
  const [activeId, setActiveId] = useState(headings[0]?.id);

  useEffect(() => {
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveId(visible.target.id);
      },
      { rootMargin: "-100px 0px -70% 0px" }
    );

    headings.forEach((h) => {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [headings]);

  if (!headings.length) return null;

  return (
    <nav className="sticky top-24">
      <p className="text-xs font-semibold tracking-widest text-ink-faint uppercase">
        On this page
      </p>
      <ul className="mt-4 space-y-2.5 border-l border-border">
        {headings.map((h) => (
          <li key={h.id} style={{ paddingLeft: h.depth === 3 ? "2rem" : "1rem" }}>
            <a
              href={`#${h.id}`}
              className={`block border-l -ml-px pl-3 text-sm leading-snug transition-colors ${
                activeId === h.id
                  ? "border-accent font-medium text-accent"
                  : "border-transparent text-ink-faint hover:text-ink"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
