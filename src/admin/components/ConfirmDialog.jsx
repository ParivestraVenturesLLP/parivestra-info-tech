export function ConfirmDialog({ open, title, description, onConfirm, onCancel }) {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 backdrop-blur-sm"
      onClick={onCancel}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-sm rounded-2xl border border-border bg-paper-raised p-6"
      >
        <h3 className="font-serif text-lg text-ink">{title}</h3>
        {description && <p className="mt-2 text-sm text-ink-muted">{description}</p>}
        <div className="mt-6 flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="rounded-full px-4 py-2 text-sm font-medium text-ink-muted hover:bg-ink/5"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="rounded-full bg-status-critical px-4 py-2 text-sm font-medium text-paper hover:opacity-90"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
