import { Link } from 'react-router-dom'

const providers = [
  {
    name: 'Stripe',
    abbr: 'ST',
    color: 'from-indigo-500 to-violet-600',
    category: 'Global Gateway',
    description: 'Developer-first payment infrastructure with global reach, extensible APIs, and a comprehensive product suite for startups to enterprise.',
    markets: ['US', 'EU', 'APAC', 'Global'],
    highlights: ['Stripe Connect', 'Stripe Billing', 'Radar Fraud'],
    badge: 'Most Popular',
    badgeColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/25',
    href: '/topics/payment-api',
  },
  {
    name: 'Razorpay',
    abbr: 'RZ',
    color: 'from-blue-500 to-cyan-600',
    category: 'India Gateway',
    description: 'India\'s leading payment gateway with deep UPI integration, payment links, payouts, and a full banking stack for Indian businesses.',
    markets: ['India', 'Malaysia'],
    highlights: ['UPI AutoPay', 'Payment Links', 'Instant Payouts'],
    badge: 'India Leader',
    badgeColor: 'text-blue-400 bg-blue-500/10 border-blue-500/25',
    href: '/topics/payment-gateway',
  },
  {
    name: 'Cashfree',
    abbr: 'CF',
    color: 'from-emerald-500 to-teal-600',
    category: 'India Gateway',
    description: 'Fast-settlement Indian payment gateway known for real-time payouts, subscription infrastructure, and strong SMB adoption.',
    markets: ['India'],
    highlights: ['Instant Payouts', 'Subscriptions', 'AutoCollect'],
    badge: 'Fast Payouts',
    badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
    href: '/topics/payment-gateway',
  },
  {
    name: 'PayPal',
    abbr: 'PP',
    color: 'from-blue-600 to-blue-800',
    category: 'Global Wallet',
    description: 'Trusted global payment brand with wallet-based checkout, Braintree gateway, and strong consumer recognition in 200+ countries.',
    markets: ['Global', '200+ Countries'],
    highlights: ['PayPal Checkout', 'Braintree', 'Buy Now Pay Later'],
    badge: 'High Trust',
    badgeColor: 'text-sky-400 bg-sky-500/10 border-sky-500/25',
    href: '/topics/ecommerce-payments',
  },
  {
    name: 'Adyen',
    abbr: 'AD',
    color: 'from-green-500 to-emerald-700',
    category: 'Enterprise Gateway',
    description: 'End-to-end enterprise payment platform with in-person, online, and unified commerce capabilities for global scale brands.',
    markets: ['Global', 'Omnichannel'],
    highlights: ['Unified Commerce', 'Local Acquiring', 'Risk Management'],
    badge: 'Enterprise',
    badgeColor: 'text-green-400 bg-green-500/10 border-green-500/25',
    href: '/topics/payment-processing',
  },
  {
    name: 'Paddle',
    abbr: 'PA',
    color: 'from-teal-500 to-cyan-700',
    category: 'Merchant of Record',
    description: 'SaaS-focused merchant of record that handles global tax, compliance, and payments — ideal for software and digital product companies.',
    markets: ['Global', 'SaaS Focus'],
    highlights: ['Tax Management', 'Global Compliance', 'Subscription Tools'],
    badge: 'MoR Solution',
    badgeColor: 'text-teal-400 bg-teal-500/10 border-teal-500/25',
    href: '/topics/payment-integration',
  },
  {
    name: 'Lemon Squeezy',
    abbr: 'LS',
    color: 'from-yellow-400 to-orange-500',
    category: 'Merchant of Record',
    description: 'Creator and indie software-focused MoR with easy setup, automatic tax handling, and built-in digital product tools.',
    markets: ['Global', 'Indie/Creator'],
    highlights: ['Digital Products', 'Automatic VAT', 'License Keys'],
    badge: 'Creator Friendly',
    badgeColor: 'text-amber-400 bg-amber-500/10 border-amber-500/25',
    href: '/topics/payment-integration',
  },
  {
    name: 'Shopify Payments',
    abbr: 'SP',
    color: 'from-green-400 to-green-600',
    category: 'Embedded Gateway',
    description: 'Shopify\'s native payment solution with seamless checkout, no transaction fees, and deep platform integration.',
    markets: ['Shopify Stores'],
    highlights: ['Shop Pay', 'Accelerated Checkout', 'Installments'],
    badge: 'Shopify Native',
    badgeColor: 'text-lime-400 bg-lime-500/10 border-lime-500/25',
    href: '/topics/ecommerce-payments',
  },
]

export default function ProviderHub({ limit }) {
  const displayed = limit ? providers.slice(0, limit) : providers
  const showMore = limit && providers.length > limit

  return (
    <section id="providers" className="py-20 lg:py-28 bg-gray-950 relative overflow-hidden">
      <div className="dot-grid absolute inset-0 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-64 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <span className="text-xs font-semibold text-violet-300 tracking-wide uppercase">Provider Intelligence</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
              In-depth research on{' '}
              <span className="gradient-text">major payment providers</span>
            </h2>
            <p className="mt-4 text-base text-gray-400 leading-relaxed">
              Objective analysis of the platforms powering ecommerce payments globally — features, strengths, trade-offs, and fit.
            </p>
          </div>
          {showMore && (
            <Link
              to="/topics/payment-gateway"
              className="shrink-0 flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group"
            >
              View all providers
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          )}
        </div>

        {/* Provider cards */}
        <div className={`grid grid-cols-1 md:grid-cols-2 ${limit === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-4'} gap-5`}>
          {displayed.map(p => (
            <Link
              key={p.name}
              to={p.href}
              className="group bg-gray-900/60 border border-white/8 rounded-2xl p-5 hover:bg-gray-900/90 hover:border-white/16 transition-all duration-300 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-11 h-11 rounded-xl bg-linear-to-br ${p.color} flex items-center justify-center text-white text-xs font-bold shadow-lg`}>
                  {p.abbr}
                </div>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${p.badgeColor}`}>
                  {p.badge}
                </span>
              </div>

              <div className="mb-1">
                <p className="text-[10px] text-gray-500 font-medium uppercase tracking-wide">{p.category}</p>
                <h3 className="text-base font-semibold text-white">{p.name}</h3>
              </div>

              <p className="text-xs text-gray-400 leading-relaxed mt-2 mb-4 flex-1">{p.description}</p>

              {/* Highlights */}
              <div className="space-y-1.5 mb-4">
                {p.highlights.map(h => (
                  <div key={h} className="flex items-center gap-2 text-xs text-gray-400">
                    <div className="w-1 h-1 rounded-full bg-indigo-400 shrink-0" />
                    {h}
                  </div>
                ))}
              </div>

              {/* Markets */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/6">
                {p.markets.map(m => (
                  <span key={m} className="text-[10px] font-medium px-2 py-0.5 bg-white/5 border border-white/8 text-gray-500 rounded-full">
                    {m}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 text-center">
          <p className="text-xs text-gray-600 max-w-2xl mx-auto leading-relaxed">
            All product names, logos, and trademarks are property of their respective owners. Parivestra is an independent research resource, not affiliated with or sponsored by any provider listed.
          </p>
        </div>
      </div>
    </section>
  )
}
