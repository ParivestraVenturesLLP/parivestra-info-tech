function BulbIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-accent">
      <path
        d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.6.45.9 1.15.9 1.9V16h5.4v-.3c0-.75.3-1.45.9-1.9A6 6 0 0 0 12 3Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function AIReadableAnswer({ faq }) {
  if (!faq?.q) return null;

  return (
    <div className="rounded-2xl border border-accent/20 bg-accent-soft p-6 sm:p-8">
      <div className="flex items-center gap-2">
        <BulbIcon />
        <p className="font-mono text-xs font-semibold tracking-[0.2em] text-accent uppercase">
          AI-readable answer
        </p>
      </div>
      <h2 className="mt-4 font-serif text-xl text-ink sm:text-2xl">{faq.q}</h2>
      <p className="mt-3 leading-relaxed text-ink-muted">{faq.a}</p>
    </div>
  );
}
