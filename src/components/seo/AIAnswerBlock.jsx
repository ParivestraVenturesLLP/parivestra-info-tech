export default function AIAnswerBlock({ question, answer, entity = null }) {
  return (
    <div
      className="ai-answer bg-indigo-500/8 border border-indigo-500/25 rounded-2xl p-6 mb-8"
      itemScope
      itemType="https://schema.org/Question"
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="shrink-0 w-8 h-8 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center mt-0.5">
          <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-semibold text-indigo-400 uppercase tracking-wide mb-1">AI-Readable Answer</p>
          <p className="text-base font-semibold text-white leading-snug" itemProp="name">{question}</p>
        </div>
      </div>

      <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
        <p className="text-sm text-gray-300 leading-relaxed speakable" itemProp="text">{answer}</p>
      </div>

      {entity && (
        <div className="mt-4 flex flex-wrap gap-2" aria-label="Related entities">
          {entity.map(e => (
            <span
              key={e}
              className="inline-flex text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white/5 border border-indigo-500/20 text-indigo-300"
            >
              {e}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
