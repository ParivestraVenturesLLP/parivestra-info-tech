const providers = [
  {
    name: 'Stripe',
    abbr: 'ST',
    color: 'from-indigo-500 to-violet-600',
    category: 'Global Gateway',
    description: 'Developer-first payment infrastructure with global reach, extensible APIs, and a comprehensive product suite for startups to enterprise.',
    markets: ['US', 'EU', 'APAC', 'Global'],
    highlights: ['Stripe Connect', 'Stripe Billing', 'Radar Fraud', 'Terminal'],
    badge: 'Most Popular',
    badgeColor: 'bg-indigo-100 text-indigo-700',
  },
  {
    name: 'Razorpay',
    abbr: 'RZ',
    color: 'from-blue-500 to-cyan-600',
    category: 'India Gateway',
    description: 'India\'s leading payment gateway with deep UPI integration, payment links, payouts, and a full banking stack for Indian businesses.',
    markets: ['India', 'Malaysia'],
    highlights: ['UPI AutoPay', 'Payment Links', 'Payouts', 'Smart Collect'],
    badge: 'India Leader',
    badgeColor: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'Cashfree',
    abbr: 'CF',
    color: 'from-emerald-500 to-teal-600',
    category: 'India Gateway',
    description: 'Fast-settlement Indian payment gateway known for real-time payouts, subscription infrastructure, and strong SMB adoption.',
    markets: ['India'],
    highlights: ['Instant Payouts', 'Subscriptions', 'AutoCollect', 'Payment Forms'],
    badge: 'Fast Payouts',
    badgeColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    name: 'PayPal',
    abbr: 'PP',
    color: 'from-blue-600 to-blue-800',
    category: 'Global Wallet',
    description: 'Trusted global payment brand with wallet-based checkout, Braintree gateway, Venmo integration, and strong consumer recognition.',
    markets: ['Global', '200+ Countries'],
    highlights: ['PayPal Checkout', 'Braintree', 'Venmo', 'Buy Now Pay Later'],
    badge: 'High Trust',
    badgeColor: 'bg-blue-100 text-blue-800',
  },
  {
    name: 'Adyen',
    abbr: 'AD',
    color: 'from-green-500 to-emerald-700',
    category: 'Enterprise Gateway',
    description: 'End-to-end enterprise payment platform with in-person, online, and unified commerce capabilities for global scale brands.',
    markets: ['Global', 'Omnichannel'],
    highlights: ['Unified Commerce', 'Local Acquiring', 'Risk Management', 'Issuing'],
    badge: 'Enterprise',
    badgeColor: 'bg-green-100 text-green-800',
  },
  {
    name: 'Paddle',
    abbr: 'PA',
    color: 'from-teal-500 to-cyan-700',
    category: 'Merchant of Record',
    description: 'SaaS-focused merchant of record that handles global tax, compliance, and payments — ideal for software and digital product companies.',
    markets: ['Global', 'SaaS Focus'],
    highlights: ['Tax Management', 'Global Compliance', 'Subscription Tools', 'Usage Billing'],
    badge: 'MoR Solution',
    badgeColor: 'bg-teal-100 text-teal-700',
  },
  {
    name: 'Lemon Squeezy',
    abbr: 'LS',
    color: 'from-yellow-400 to-orange-500',
    category: 'Merchant of Record',
    description: 'Creator and indie software-focused MoR platform with easy setup, automatic tax handling, and built-in digital product tools.',
    markets: ['Global', 'Indie/Creator'],
    highlights: ['Digital Products', 'Automatic VAT', 'License Keys', 'Subscriptions'],
    badge: 'Creator Friendly',
    badgeColor: 'bg-amber-100 text-amber-700',
  },
  {
    name: 'Shopify Payments',
    abbr: 'SP',
    color: 'from-green-400 to-green-600',
    category: 'Embedded Gateway',
    description: 'Shopify\'s native payment solution offering seamless checkout, no transaction fees for store owners, and deep platform integration.',
    markets: ['Shopify Stores'],
    highlights: ['Shop Pay', 'Accelerated Checkout', 'No Trans Fees', 'Installments'],
    badge: 'Shopify Native',
    badgeColor: 'bg-green-100 text-green-700',
  },
]

export default function ProviderHub() {
  return (
    <section id="providers" className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
              <span className="text-xs font-semibold text-gray-600 tracking-wide uppercase">Provider Knowledge</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
              In-depth research on{' '}
              <span className="gradient-text">major payment providers</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed">
              Objective intelligence on the platforms powering ecommerce payments globally — features, strengths, trade-offs, and fit analysis.
            </p>
          </div>
        </div>

        {/* Provider cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {providers.map(p => (
            <div key={p.name} className="bg-white border border-gray-100 rounded-2xl p-5 card-hover flex flex-col">
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className={`w-11 h-11 rounded-xl bg-linear-to-br ${p.color} flex items-center justify-center text-white text-xs font-bold`}>
                  {p.abbr}
                </div>
                <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${p.badgeColor}`}>
                  {p.badge}
                </span>
              </div>

              <div className="mb-1">
                <p className="text-xs text-gray-400 font-medium">{p.category}</p>
                <h3 className="text-base font-semibold text-gray-900">{p.name}</h3>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed mt-2 mb-4 flex-1">{p.description}</p>

              {/* Highlights */}
              <div className="space-y-1.5 mb-4">
                {p.highlights.slice(0, 3).map(h => (
                  <div key={h} className="flex items-center gap-2 text-xs text-gray-600">
                    <div className="w-1 h-1 rounded-full bg-indigo-400 flex-shrink-0" />
                    {h}
                  </div>
                ))}
              </div>

              {/* Markets */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-50">
                {p.markets.map(m => (
                  <span key={m} className="text-[10px] font-medium px-2 py-0.5 bg-gray-50 border border-gray-100 text-gray-500 rounded-full">
                    {m}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 text-center">
          <p className="text-xs text-gray-400 max-w-2xl mx-auto leading-relaxed">
            <strong className="font-medium text-gray-500">Disclaimer:</strong> All product names, logos, and trademarks mentioned above are the property of their respective owners. Parivestra is an independent research and intelligence resource and is not affiliated with, endorsed by, or sponsored by any of the payment providers listed. Content is provided for informational and educational purposes only.
          </p>
        </div>
      </div>
    </section>
  )
}
