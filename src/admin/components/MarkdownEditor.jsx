import { useState } from "react";
import { MarkdownRenderer } from "../../components/content/MarkdownRenderer";

export function MarkdownEditor({ value, onChange, label = "Content" }) {
  const [tab, setTab] = useState("write");

  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-ink">{label}</label>
        <div className="flex rounded-full border border-border p-0.5 text-xs">
          <button
            type="button"
            onClick={() => setTab("write")}
            className={`rounded-full px-3 py-1 font-medium ${
              tab === "write" ? "bg-ink text-paper" : "text-ink-muted"
            }`}
          >
            Write
          </button>
          <button
            type="button"
            onClick={() => setTab("preview")}
            className={`rounded-full px-3 py-1 font-medium ${
              tab === "preview" ? "bg-ink text-paper" : "text-ink-muted"
            }`}
          >
            Preview
          </button>
        </div>
      </div>

      <div className="mt-2">
        {tab === "write" ? (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            rows={20}
            placeholder="Write in Markdown — headings (##), lists, tables, > quotes, and images are all supported."
            className="w-full rounded-xl border border-border bg-paper px-4 py-3 font-mono text-sm leading-relaxed text-ink focus:border-accent"
          />
        ) : (
          <div className="max-h-[32rem] overflow-y-auto rounded-xl border border-border bg-paper-raised px-6 py-4">
            {value ? (
              <MarkdownRenderer content={value} />
            ) : (
              <p className="text-sm text-ink-faint">Nothing to preview yet.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
