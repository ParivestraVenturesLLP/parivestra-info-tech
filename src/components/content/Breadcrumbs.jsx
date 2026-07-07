import { Link } from "react-router-dom";

export function Breadcrumbs({ items = [] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-ink-faint">
      {items.map((item, i) => (
        <span key={item.path} className="flex items-center gap-1.5">
          {i > 0 && <span>/</span>}
          {i === items.length - 1 ? (
            <span className="text-ink-muted">{item.label}</span>
          ) : (
            <Link to={item.path} className="hover:text-accent">
              {item.label}
            </Link>
          )}
        </span>
      ))}
    </nav>
  );
}
