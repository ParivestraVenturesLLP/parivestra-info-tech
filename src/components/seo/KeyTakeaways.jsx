export default function KeyTakeaways({ points = [], topic = '' }) {
  return (
    <aside
      className="key-takeaway bg-gray-900 text-white rounded-2xl p-6 mb-8"
      aria-label={`Key takeaways about ${topic}`}
    >
      <div className="flex items-center gap-2.5 mb-4">
        <div className="w-7 h-7 rounded-lg bg-indigo-500 flex items-center justify-center shrink-0">
          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-sm font-bold text-white uppercase tracking-wide">
          Key Takeaways{topic ? ` — ${topic}` : ''}
        </h2>
      </div>
      <ul className="space-y-3">
        {points.map((point, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="shrink-0 w-5 h-5 rounded-full bg-indigo-500/30 flex items-center justify-center mt-0.5">
              <span className="text-[10px] font-bold text-indigo-300">{i + 1}</span>
            </span>
            <p className="text-sm text-gray-300 leading-relaxed">{point}</p>
          </li>
        ))}
      </ul>
    </aside>
  )
}
