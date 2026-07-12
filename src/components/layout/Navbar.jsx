import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { Container } from "./Container";
import { MAGNET_CATEGORIES } from "../../data/magnetCategories";

const links = [
  { to: "/blog", label: "Blog" },
  { to: "/research", label: "Research" },
  { to: "/statistics", label: "Statistics" },
  { to: "/reports", label: "Reports" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [magnetOpen, setMagnetOpen] = useState(false);
  const [magnetOpenMobile, setMagnetOpenMobile] = useState(false);
  const magnetRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!magnetOpen) return;
    const onClickOutside = (e) => {
      if (magnetRef.current && !magnetRef.current.contains(e.target)) {
        setMagnetOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [magnetOpen]);

  return (
    <header
      className={`sticky top-0 z-40 border-b transition-colors duration-300 ${
        scrolled
          ? "border-border bg-paper/90 backdrop-blur-md"
          : "border-transparent bg-paper"
      }`}
    >
      <Container className="flex items-center justify-between py-3">
        <NavLink to="/" className="flex items-center">
          <img src="/logo.png" alt="Parivestra" className="h-12 w-auto sm:h-14" />
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-accent" : "text-ink-muted hover:text-ink"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <div className="relative" ref={magnetRef}>
            <button
              type="button"
              onClick={() => setMagnetOpen((v) => !v)}
              aria-expanded={magnetOpen}
              className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                magnetOpen ? "text-accent" : "text-ink-muted hover:text-ink"
              }`}
            >
              Magnet
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className={`transition-transform ${magnetOpen ? "rotate-180" : ""}`}
              >
                <path
                  d="M1.5 3.5L5 7l3.5-3.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {magnetOpen && (
              <div className="absolute top-full left-1/2 z-50 mt-3 w-56 -translate-x-1/2 rounded-xl border border-border bg-paper py-2 shadow-lg">
                {MAGNET_CATEGORIES.map((category) => (
                  <NavLink
                    key={category.path}
                    to={category.path}
                    onClick={() => setMagnetOpen(false)}
                    className={({ isActive }) =>
                      `block px-4 py-2 text-sm font-medium transition-colors ${
                        isActive ? "text-accent" : "text-ink-muted hover:bg-ink/5 hover:text-ink"
                      }`
                    }
                  >
                    {category.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </nav>

        <button
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {open ? (
              <path
                d="M4 4l12 12M16 4L4 16"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M2.5 5.5h15M2.5 10h15M2.5 14.5h15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border px-6 py-4 md:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-muted hover:bg-ink/5 hover:text-ink"
            >
              {link.label}
            </NavLink>
          ))}

          <button
            type="button"
            onClick={() => setMagnetOpenMobile((v) => !v)}
            aria-expanded={magnetOpenMobile}
            className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm font-medium text-ink-muted hover:bg-ink/5 hover:text-ink"
          >
            Magnet
            <svg
              width="10"
              height="10"
              viewBox="0 0 10 10"
              fill="none"
              className={`transition-transform ${magnetOpenMobile ? "rotate-180" : ""}`}
            >
              <path
                d="M1.5 3.5L5 7l3.5-3.5"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {magnetOpenMobile && (
            <div className="flex flex-col gap-1 pl-4">
              {MAGNET_CATEGORIES.map((category) => (
                <NavLink
                  key={category.path}
                  to={category.path}
                  onClick={() => {
                    setOpen(false);
                    setMagnetOpenMobile(false);
                  }}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-muted hover:bg-ink/5 hover:text-ink"
                >
                  {category.label}
                </NavLink>
              ))}
            </div>
          )}
        </nav>
      )}
    </header>
  );
}
