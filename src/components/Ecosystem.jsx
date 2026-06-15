const categories = [
  {
    icon: '⚡',
    title: 'Payment Gateways',
    desc: 'Compare gateway features, fees, supported markets, settlement timelines, and developer experience across leading providers.',
    tags: ['Stripe', 'Razorpay', 'Adyen', 'Braintree'],
    color: 'indigo',
  },
  {
    icon: '📱',
    title: 'UPI Infrastructure',
    desc: 'Understand UPI rails, payment apps, merchant onboarding, deep linking, QR flows, and UPI AutoPay for Indian markets.',
    tags: ['UPI', 'BHIM', 'PhonePe', 'Google Pay'],
    color: 'violet',
  },
  {
    icon: '🏢',
    title: 'Merchant of Record',
    desc: 'Explore MoR solutions that handle tax compliance, global payments, and regulatory requirements on your behalf.',
    tags: ['Paddle', 'Lemon Squeezy', 'FastSpring'],
    color: 'purple',
  },
  {
    icon: '🔄',
    title: 'Subscription Billing',
    desc: 'Navigate recurring billing platforms, dunning management, revenue recognition, and subscriber lifecycle tools.',
    tags: ['Chargebee', 'Recurly', 'Stripe Billing'],
    color: 'blue',
  },
  {
    icon: '🔌',
    title: 'Payment APIs',
    desc: 'Developer-focused analysis of payment API quality, documentation depth, SDK support, and webhook reliability.',
    tags: ['REST APIs', 'Webhooks', 'SDKs', 'Libraries'],
    color: 'cyan',
  },
  {
    icon: '🛒',
    title: 'Checkout Systems',
    desc: 'Evaluate hosted checkouts, embedded flows, one-click solutions, and conversion-optimized checkout builders.',
    tags: ['Hosted', 'Embedded', 'One-Click', 'Custom'],
    color: 'teal',
  },
  {
    icon: '🛡️',
    title: 'Fraud Prevention',
    desc: 'Research adaptive fraud detection, machine learning risk scoring, chargeback management, and 3DS2 implementations.',
    tags: ['ML Scoring', 'Chargebacks', '3DS2', 'KYC'],
    color: 'rose',
  },
  {
    icon: '🌐',
    title: 'Cross-Border Payments',
    desc: 'Understand FX rates, local acquiring, SWIFT alternatives, multi-currency settlement, and cross-border compliance.',
    tags: ['FX', 'Local Acquiring', 'Multi-Currency'],
    color: 'amber',
  },
]

const colorMap = {
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-100', text: 'text-indigo-700', tag: 'bg-indigo-100 text-indigo-700' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-100', text: 'text-violet-700', tag: 'bg-violet-100 text-violet-700' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-100', text: 'text-purple-700', tag: 'bg-purple-100 text-purple-700' },
  blue: { bg: 'bg-blue-50', border: 'border-blue-100', text: 'text-blue-700', tag: 'bg-blue-100 text-blue-700' },
  cyan: { bg: 'bg-cyan-50', border: 'border-cyan-100', text: 'text-cyan-700', tag: 'bg-cyan-100 text-cyan-700' },
  teal: { bg: 'bg-teal-50', border: 'border-teal-100', text: 'text-teal-700', tag: 'bg-teal-100 text-teal-700' },
  rose: { bg: 'bg-rose-50', border: 'border-rose-100', text: 'text-rose-700', tag: 'bg-rose-100 text-rose-700' },
  amber: { bg: 'bg-amber-50', border: 'border-amber-100', text: 'text-amber-700', tag: 'bg-amber-100 text-amber-700' },
}

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            <span className="text-xs font-semibold text-indigo-700 tracking-wide uppercase">Payments Ecosystem</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
            Explore the entire ecommerce{' '}
            <span className="gradient-text">payments landscape</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            From gateways to global infrastructure — research every layer of the modern payments stack with depth and clarity.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map(cat => {
            const c = colorMap[cat.color]
            return (
              <div
                key={cat.title}
                className="group bg-white border border-gray-100 rounded-2xl p-6 card-hover cursor-pointer relative overflow-hidden"
              >
                {/* Hover accent */}
                <div className={`absolute inset-x-0 top-0 h-0.5 ${c.bg.replace('bg-', 'bg-').replace('-50', '-400')} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className={`w-11 h-11 ${c.bg} ${c.border} border rounded-xl flex items-center justify-center text-xl mb-4`}>
                  {cat.icon}
                </div>

                <h3 className="text-sm font-semibold text-gray-900 mb-2">{cat.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{cat.desc}</p>

                <div className="flex flex-wrap gap-1.5">
                  {cat.tags.map(tag => (
                    <span key={tag} className={`inline-flex text-[10px] font-semibold px-2 py-0.5 rounded-full ${c.tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={`mt-4 flex items-center gap-1 text-xs font-semibold ${c.text} opacity-0 group-hover:opacity-100 transition-opacity`}>
                  Explore
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
