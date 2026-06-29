const pillars = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: 'text-emerald-400',
    bg: 'bg-emerald-500/10',
    border: 'border-emerald-500/20',
    glow: 'shadow-emerald-500/10',
    title: 'It Directly Hits Your Revenue',
    desc: 'Most businesses don\'t realize they\'re leaking revenue until it\'s too late. A bad routing setup, unnecessarily high fees, a few failed transactions a day — it quietly adds up to 5–15% of what you should have earned.',
    stat: 'Up to 15% revenue lost silently',
    statBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
    border: 'border-indigo-500/20',
    glow: 'shadow-indigo-500/10',
    title: 'Checkout Is Where You Win or Lose',
    desc: 'People who reach your checkout already want to buy. But 70% of them leave anyway. Usually it\'s too many steps, a payment method they don\'t trust, or a hiccup they didn\'t expect.',
    stat: '70% average cart abandonment',
    statBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
    border: 'border-violet-500/20',
    glow: 'shadow-violet-500/10',
    title: 'Going Global? Payments Decide That',
    desc: 'You can\'t enter a new market if the local payment methods don\'t work. Customers in India need UPI. Customers in Europe expect local wallets. The wrong gateway doesn\'t just slow you down — it shuts the door entirely.',
    stat: '200+ countries, each needs local methods',
    statBg: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    glow: 'shadow-blue-500/10',
    title: 'Customers Read the Checkout Before Paying',
    desc: 'Before anyone enters their card number, they\'re scanning the page. No lock icon? Unfamiliar payment logos? Sketchy-looking form? They\'re gone. Payment trust signals are a conversion tool, not just a security thing.',
    stat: '59% abandon at an unfamiliar checkout',
    statBg: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    color: 'text-orange-400',
    bg: 'bg-orange-500/10',
    border: 'border-orange-500/20',
    glow: 'shadow-orange-500/10',
    title: 'Subscriptions Fail Quietly',
    desc: 'Your subscriber didn\'t cancel — their card just expired. Happens thousands of times a month at scale. Good billing infrastructure catches this before the subscription lapses. Bad infrastructure just doesn\'t bill them.',
    stat: '9% of MRR lost to failed payments',
    statBg: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    glow: 'shadow-cyan-500/10',
    title: 'What Works at ₹10L Won\'t Work at ₹10Cr',
    desc: 'Most founders pick a payment gateway when they\'re just starting and never revisit it. That\'s fine until you hit volume thresholds, need custom routing, or want enterprise pricing. The decision compounds over time.',
    stat: 'Infrastructure decisions compound',
    statBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  },
]

export default function WhyPaymentsMatter() {
  return (
    <section id="guides" className="py-24 lg:py-32 bg-gray-950 relative overflow-hidden">
      {/* Subtle glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="line-grid absolute inset-0 opacity-100 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-semibold text-emerald-400 tracking-wide uppercase">Why Payments Matter</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
            Your payment stack touches{' '}
            <span className="gradient-text">every part of your business</span>
          </h2>
          <p className="mt-4 text-lg text-gray-400 leading-relaxed">
            It's not a backend decision you make once and forget. It's a recurring choice that affects revenue, conversions, customer trust, and your ability to grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {pillars.map(pillar => (
            <div
              key={pillar.title}
              className={`group bg-gray-900/60 border border-white/8 rounded-2xl p-6 hover:border-white/16 hover:bg-gray-900/90 transition-all duration-300 shadow-xl ${pillar.glow}`}
            >
              <div className={`w-10 h-10 ${pillar.bg} ${pillar.border} border rounded-xl flex items-center justify-center ${pillar.color} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                {pillar.icon}
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{pillar.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-5">{pillar.desc}</p>
              <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border ${pillar.statBg}`}>
                <span>⚡</span>
                <span>{pillar.stat}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
