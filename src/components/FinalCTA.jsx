export default function FinalCTA() {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative bg-gray-900 rounded-3xl overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(to right, #ffffff 1px, transparent 1px)',
              backgroundSize: '48px 48px',
            }}
          />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-indigo-500/15 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />

          <div className="relative px-8 py-16 lg:px-16 lg:py-20 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 rounded-full px-4 py-1.5 mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
              <span className="text-xs font-semibold text-gray-300 tracking-wide uppercase">Free. No Signup Required.</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight max-w-3xl mx-auto">
              Make better payment infrastructure{' '}
              <span className="gradient-text">decisions</span>
            </h2>

            <p className="mt-5 text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
              Stop guessing which gateway to pick, what fees you're actually paying, and whether your checkout is costing you sales. Start here.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#ecosystem"
                className="group flex items-center gap-2 px-7 py-4 bg-white text-gray-900 text-sm font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg"
              >
                Start Exploring
                <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#research"
                className="group flex items-center gap-2 px-7 py-4 bg-white/10 text-white text-sm font-semibold rounded-xl border border-white/15 hover:bg-white/15 transition-all duration-200"
              >
                Browse the Research Library
              </a>
            </div>

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
          </div>
        </div>
      </div>
    </section>
  )
}
