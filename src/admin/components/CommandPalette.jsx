import { useEffect, useState } from "react";
import { Command } from "cmdk";
import { useNavigate } from "react-router-dom";

const actions = [
  { group: "Navigate", label: "Dashboard", path: "/admin" },
  { group: "Navigate", label: "Articles", path: "/admin/articles" },
  { group: "Navigate", label: "Topics", path: "/admin/topics" },
  { group: "Navigate", label: "Authors", path: "/admin/authors" },
  { group: "Navigate", label: "Statistics", path: "/admin/stats" },
  { group: "Navigate", label: "Reports", path: "/admin/reports" },
  { group: "Navigate", label: "Hero slides", path: "/admin/hero-slides" },
  { group: "Create", label: "New article", path: "/admin/articles/new" },
  { group: "Create", label: "New topic", path: "/admin/topics/new" },
  { group: "Create", label: "New author", path: "/admin/authors/new" },
  { group: "Create", label: "New stat", path: "/admin/stats/new" },
  { group: "Create", label: "New report", path: "/admin/reports/new" },
  { group: "Create", label: "New hero slide", path: "/admin/hero-slides/new" },
  { group: "View site", label: "Open public homepage", path: "/" },
];

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    function onKeyDown(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  function go(path) {
    navigate(path);
    setOpen(false);
  }

  if (!open) return null;

  const groups = [...new Set(actions.map((a) => a.group))];

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-ink/40 pt-[15vh] backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-lg">
        <Command
          className="overflow-hidden rounded-2xl border border-border bg-paper-raised shadow-2xl"
          label="Command palette"
        >
          <Command.Input
            autoFocus
            placeholder="Search actions…"
            className="w-full border-b border-border px-5 py-4 text-sm text-ink outline-none placeholder:text-ink-faint"
          />
          <Command.List className="max-h-80 overflow-y-auto p-2">
            <Command.Empty className="px-3 py-6 text-center text-sm text-ink-faint">
              No results found.
            </Command.Empty>

            {groups.map((group) => (
              <Command.Group
                key={group}
                heading={group}
                className="**:[[cmdk-group-heading]]:px-3 **:[[cmdk-group-heading]]:py-2 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:font-semibold **:[[cmdk-group-heading]]:tracking-widest **:[[cmdk-group-heading]]:text-ink-faint **:[[cmdk-group-heading]]:uppercase"
              >
                {actions
                  .filter((a) => a.group === group)
                  .map((action) => (
                    <Command.Item
                      key={action.path + action.label}
                      onSelect={() => go(action.path)}
                      className="cursor-pointer rounded-lg px-3 py-2.5 text-sm text-ink data-[selected=true]:bg-accent-soft data-[selected=true]:text-accent"
                    >
                      {action.label}
                    </Command.Item>
                  ))}
              </Command.Group>
            ))}
          </Command.List>
        </Command>
      </div>
    </div>
  );
}
