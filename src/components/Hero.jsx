export default function Hero() {
  return (
    <section className="relative hero-gradient pt-32 pb-24 lg:pt-44 lg:pb-32 overflow-hidden">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(to right, #6366f1 1px, transparent 1px)',
          backgroundSize: '72px 72px',
        }}
      />
      <div className="absolute top-24 left-1/4 w-72 h-72 bg-indigo-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-32 right-1/4 w-96 h-96 bg-violet-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
            <span className="text-xs font-semibold text-indigo-700 tracking-wide uppercase">
              Free Ecommerce Payments Resource
            </span>
          </div>
        </div>

        {/* H1 — keyword rich for SEO */}
        <h1 className="text-center text-4xl sm:text-5xl lg:text-[64px] font-bold text-gray-900 leading-[1.08] tracking-tight max-w-4xl mx-auto">
          The Intelligence Layer Behind{' '}
          <span className="gradient-text">Modern Ecommerce Payments</span>
        </h1>

        {/* Subheadline — human, direct */}
        <p className="mt-7 text-center text-lg lg:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
          Picking the wrong payment gateway costs you real money. We compare providers, break down the fees,
          and help you make the call — no vendor bias, no affiliate rankings.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#ecosystem"
            className="group flex items-center gap-2 px-6 py-3.5 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-all duration-200 shadow-lg shadow-gray-900/10"
          >
            Compare Payment Providers
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#research"
            className="group flex items-center gap-2 px-6 py-3.5 bg-white text-gray-800 text-sm font-semibold rounded-xl border border-gray-200 hover:border-indigo-200 hover:bg-indigo-50/50 transition-all duration-200 shadow-sm"
          >
            Read Free Guides
            <svg className="w-4 h-4 text-gray-400 group-hover:text-indigo-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </a>
        </div>

        {/* Trust signals */}
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          {[
            { label: '40+ Payment Providers Covered', icon: '🏦' },
            { label: 'Gateway vs Gateway Comparisons', icon: '⚡' },
            { label: 'India & Global Payment Guides', icon: '📖' },
            { label: 'No Signup. Always Free.', icon: '✅' },
          ].map(item => (
            <div key={item.label} className="flex items-center gap-2 text-sm text-gray-500">
              <span>{item.icon}</span>
              <span className="font-medium">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Dashboard preview */}
        <div className="mt-16 relative max-w-5xl mx-auto">
          <div className="relative bg-white rounded-2xl border border-gray-100 shadow-2xl shadow-gray-200/60 overflow-hidden">
            <div className="flex items-center gap-2 px-5 py-3.5 border-b border-gray-100 bg-gray-50/50">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
              <div className="flex-1 mx-4">
                <div className="max-w-xs mx-auto bg-white border border-gray-200 rounded-md px-3 py-1 text-xs text-gray-400 text-center">
                  payments.parivestra.com
                </div>
              </div>
            </div>

            <div className="p-6 lg:p-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { label: 'Payment Gateways', count: '40+', color: 'bg-indigo-50 border-indigo-100', text: 'text-indigo-700', dot: 'bg-indigo-500' },
                { label: 'Integration Guides', count: '120+', color: 'bg-violet-50 border-violet-100', text: 'text-violet-700', dot: 'bg-violet-500' },
                { label: 'Provider Reviews', count: '80+', color: 'bg-cyan-50 border-cyan-100', text: 'text-cyan-700', dot: 'bg-cyan-500' },
                { label: 'Research Reports', count: '30+', color: 'bg-emerald-50 border-emerald-100', text: 'text-emerald-700', dot: 'bg-emerald-500' },
              ].map(card => (
                <div key={card.label} className={`${card.color} border rounded-xl p-4`}>
                  <div className={`w-2 h-2 rounded-full ${card.dot} mb-3`} />
                  <div className={`text-2xl font-bold ${card.text}`}>{card.count}</div>
                  <div className="text-xs text-gray-500 mt-1 font-medium">{card.label}</div>
                </div>
              ))}
            </div>

            <div className="px-6 lg:px-10 pb-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
              {[
                { title: 'Stripe vs Razorpay: Which is better for India?', tag: 'Head to Head', color: 'text-indigo-600' },
                { title: 'Merchant of Record vs Payment Gateway', tag: 'Decision Guide', color: 'text-violet-600' },
                { title: '7 Ways to Fix Checkout Drop-off', tag: 'Conversion Guide', color: 'text-cyan-600' },
              ].map(item => (
                <div key={item.title} className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white border border-gray-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className={`text-xs font-semibold ${item.color} mb-0.5`}>{item.tag}</p>
                    <p className="text-sm font-medium text-gray-800 leading-snug">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
