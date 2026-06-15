const categories = [
  { icon: '⚡', label: 'Payment Gateway Guides', count: '24 guides', color: 'text-indigo-600', bg: 'bg-indigo-50', desc: 'Gateway comparisons, fee breakdowns, integration guides' },
  { icon: '🏗️', label: 'Payment Infrastructure', count: '18 articles', color: 'text-violet-600', bg: 'bg-violet-50', desc: 'Stack architecture, routing, acquiring, orchestration' },
  { icon: '🔌', label: 'Integration Guides', count: '32 guides', color: 'text-blue-600', bg: 'bg-blue-50', desc: 'Step-by-step for Stripe, Razorpay, Shopify, WooCommerce' },
  { icon: '📈', label: 'Checkout Optimization', count: '15 articles', color: 'text-cyan-600', bg: 'bg-cyan-50', desc: 'Cut abandonment, improve UX, lift conversion rates' },
  { icon: '🔄', label: 'Subscription Billing', count: '21 guides', color: 'text-teal-600', bg: 'bg-teal-50', desc: 'Recurring billing, dunning, churn recovery, MRR protection' },
  { icon: '🌐', label: 'Global Payments', count: '19 articles', color: 'text-emerald-600', bg: 'bg-emerald-50', desc: 'Cross-border, local payment methods, FX, market entry' },
  { icon: '⚖️', label: 'Payment Compliance', count: '12 guides', color: 'text-orange-600', bg: 'bg-orange-50', desc: 'PCI DSS, 3DS2, KYC, AML, tax compliance' },
  { icon: '🔬', label: 'Industry Research', count: '9 reports', color: 'text-rose-600', bg: 'bg-rose-50', desc: 'Ecommerce payment trends, benchmarks, market data' },
]

const featured = [
  {
    tag: 'Most Read',
    tagColor: 'bg-indigo-100 text-indigo-700',
    title: 'Stripe vs Razorpay: A Real Comparison for Indian Ecommerce Brands (2025)',
    desc: 'Side-by-side on pricing, UPI support, developer experience, settlement times, and which one actually fits Indian customers.',
    readTime: '12 min read',
    category: 'Payment Gateway Guides',
  },
  {
    tag: 'Popular',
    tagColor: 'bg-violet-100 text-violet-700',
    title: 'Merchant of Record vs Payment Gateway: The Honest Guide for SaaS Founders',
    desc: 'When Paddle or Lemon Squeezy makes sense, when it doesn\'t, and how to think through the tax vs margin trade-off for your specific situation.',
    readTime: '9 min read',
    category: 'Payment Infrastructure',
  },
  {
    tag: 'High Impact',
    tagColor: 'bg-cyan-100 text-cyan-700',
    title: '7 Checkout Changes That Actually Move Conversion Rates',
    desc: 'Based on what actually works — fewer steps, better payment method order, trust signals that convert, and the one thing most stores get wrong.',
    readTime: '14 min read',
    category: 'Checkout Optimization',
  },
]

export default function ResearchHub() {
  return (
    <section id="research" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
            <span className="text-xs font-semibold text-gray-600 tracking-wide uppercase">Research Hub</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
            Every payment question your{' '}
            <span className="gradient-text">business will ever have</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            From "which gateway should I start with?" to "how do I set up cross-border acquiring?" — it's all here, with real answers and no filler.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {categories.map(cat => (
            <div
              key={cat.label}
              className="group bg-gray-50 border border-gray-100 rounded-xl p-4 cursor-pointer hover:border-indigo-100 hover:bg-indigo-50/30 transition-all duration-200"
            >
              <div className={`w-9 h-9 ${cat.bg} rounded-lg flex items-center justify-center text-lg mb-3`}>
                {cat.icon}
              </div>
              <p className="text-sm font-semibold text-gray-800 leading-snug mb-1">{cat.label}</p>
              <p className={`text-xs font-semibold ${cat.color} mb-1.5`}>{cat.count}</p>
              <p className="text-[11px] text-gray-400 leading-snug hidden sm:block">{cat.desc}</p>
            </div>
          ))}
        </div>

        {/* Featured guides */}
        <div>
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-gray-900">Most Read Guides</h3>
            <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1">
              View all
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featured.map(art => (
              <div key={art.title} className="group bg-white border border-gray-100 rounded-2xl p-6 card-hover cursor-pointer">
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${art.tagColor}`}>
                    {art.tag}
                  </span>
                  <span className="text-[10px] text-gray-400 font-medium">{art.readTime}</span>
                </div>
                <h4 className="text-sm font-semibold text-gray-900 leading-snug mb-3 group-hover:text-indigo-700 transition-colors">
                  {art.title}
                </h4>
                <p className="text-xs text-gray-500 leading-relaxed mb-4">{art.desc}</p>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600">
                  <span>Read guide</span>
                  <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
