export function RepeatableListField({ label, type = "text", items = [], onChange }) {
  function addItem() {
    onChange([...items, type === "faq" ? { q: "", a: "" } : ""]);
  }

  function updateItem(index, next) {
    const copy = [...items];
    copy[index] = next;
    onChange(copy);
  }

  function removeItem(index) {
    onChange(items.filter((_, i) => i !== index));
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="text-sm font-medium text-ink">{label}</label>
        <button
          type="button"
          onClick={addItem}
          className="text-sm font-medium text-accent hover:text-accent-hover"
        >
          + Add
        </button>
      </div>

      <div className="mt-2 space-y-3">
        {items.map((item, i) =>
          type === "faq" ? (
            <div key={i} className="rounded-xl border border-border p-4">
              <div className="flex items-start justify-between gap-3">
                <input
                  type="text"
                  value={item.q}
                  onChange={(e) => updateItem(i, { ...item, q: e.target.value })}
                  placeholder="Question"
                  className="w-full rounded-lg border border-border bg-paper px-3 py-2 text-sm text-ink focus:border-accent"
                />
                <button
                  type="button"
                  onClick={() => removeItem(i)}
                  className="shrink-0 text-xs text-status-critical"
                >
                  Remove
                </button>
              </div>
              <textarea
                value={item.a}
                onChange={(e) => updateItem(i, { ...item, a: e.target.value })}
                placeholder="Answer"
                rows={2}
                className="mt-2 w-full rounded-lg border border-border bg-paper px-3 py-2 text-sm text-ink focus:border-accent"
              />
            </div>
          ) : (
            <div key={i} className="flex items-center gap-2">
              <input
                type="text"
                value={item}
                onChange={(e) => updateItem(i, e.target.value)}
                className="w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
              />
              <button
                type="button"
                onClick={() => removeItem(i)}
                className="shrink-0 text-xs text-status-critical"
              >
                Remove
              </button>
            </div>
          )
        )}
        {!items.length && <p className="text-xs text-ink-faint">Nothing added yet.</p>}
      </div>
    </div>
  );
}
