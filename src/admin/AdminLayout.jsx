import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { logout } from "../lib/firestore/admins";
import { CommandPalette } from "./components/CommandPalette";

const navItems = [
  { to: "/admin", label: "Dashboard", end: true },
  { to: "/admin/articles", label: "Articles" },
  { to: "/admin/topics", label: "Topics" },
  { to: "/admin/authors", label: "Authors" },
  { to: "/admin/stats", label: "Statistics" },
  { to: "/admin/reports", label: "Reports" },
  { to: "/admin/hero-slides", label: "Hero slides" },
];

export function AdminLayout() {
  const { user } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    await logout();
    navigate("/admin/login", { replace: true });
  }

  return (
    <div className="flex min-h-screen bg-paper font-sans">
      <CommandPalette />

      <aside className="hidden w-64 shrink-0 border-r border-border bg-paper-raised md:flex md:flex-col">
        <div className="px-6 py-6">
          <p className="font-serif text-xl text-ink">Parivestra</p>
          <p className="text-xs text-ink-faint">Admin</p>
        </div>

        <nav className="flex-1 space-y-1 px-3">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive ? "bg-accent-soft text-accent" : "text-ink-muted hover:bg-ink/5 hover:text-ink"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="border-t border-border p-4">
          <p className="truncate text-xs text-ink-faint">{user?.email}</p>
          <button
            onClick={handleLogout}
            className="mt-2 text-sm font-medium text-ink-muted hover:text-status-critical"
          >
            Sign out
          </button>
        </div>
      </aside>

      <div className="flex-1">
        <header className="flex items-center justify-between border-b border-border bg-paper-raised px-6 py-4 md:px-8">
          <p className="font-serif text-lg text-ink md:hidden">Parivestra Admin</p>
          <button
            onClick={() =>
              document.dispatchEvent(
                new KeyboardEvent("keydown", { key: "k", ctrlKey: true })
              )
            }
            className="ml-auto flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs text-ink-faint hover:border-ink/30"
          >
            <span>Search actions</span>
            <kbd className="rounded bg-ink/5 px-1.5 py-0.5 font-mono text-[10px]">Ctrl K</kbd>
          </button>
        </header>

        <main className="p-6 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
