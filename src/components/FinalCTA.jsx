export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-gray-950">
      <div className="line-grid absolute inset-0 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden border border-white/10">
          {/* Background layers */}
          <div className="absolute inset-0 bg-linear-to-br from-indigo-950 via-gray-900 to-violet-950" />
          <div className="absolute inset-0 line-grid opacity-60" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-indigo-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500/15 rounded-full blur-3xl" />
          <div className="absolute inset-0 bg-linear-to-t from-gray-900/60 via-transparent to-transparent" />

          <div className="relative px-8 py-16 lg:px-16 lg:py-20 text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/8 border border-white/12 rounded-full px-4 py-1.5 mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-400" />
              </span>
              <span className="text-xs font-semibold text-gray-300 tracking-wide uppercase">Free. No Signup Required.</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight max-w-3xl mx-auto">
              Make better payment infrastructure{' '}
              <span className="gradient-text">decisions</span>
            </h2>

            <p className="mt-5 text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
              Stop guessing which gateway to pick, what fees you're actually paying, and whether your checkout is costing you sales. Start here.
            </p>

            {/* CTA buttons */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#ecosystem"
                className="group relative flex items-center gap-2 px-8 py-4 bg-white text-gray-900 text-sm font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-xl shadow-black/30 shine overflow-hidden"
              >
                Start Exploring
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#research"
                className="group flex items-center gap-2 px-8 py-4 bg-white/8 text-white text-sm font-semibold rounded-xl border border-white/15 hover:bg-white/14 hover:border-white/25 transition-all duration-200 backdrop-blur-sm"
              >
                Browse Research Library
                <svg className="w-4 h-4 text-gray-400 group-hover:text-indigo-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Trust items */}
            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
              {[
                'No signup required',
                'No affiliate bias',
                'Updated regularly',
                'Written by practitioners',
              ].map(item => (
                <div key={item} className="flex items-center gap-2 text-xs text-gray-500 font-medium">
                  <svg className="w-3.5 h-3.5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>

            {/* Gradient border glow at bottom of card */}
            <div className="absolute bottom-0 left-1/4 right-1/4 h-px bg-linear-to-r from-transparent via-indigo-500/50 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
