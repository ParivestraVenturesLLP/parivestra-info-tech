const categories = [
  {
    icon: '⚡',
    title: 'Payment Gateways',
    desc: 'Compare gateway fees, settlement times, supported markets, and developer experience across India and global providers.',
    tags: ['Stripe', 'Razorpay', 'Adyen', 'Cashfree'],
    color: 'indigo',
  },
  {
    icon: '📱',
    title: 'UPI & Digital Payments',
    desc: 'UPI rails, QR flows, UPI AutoPay for subscriptions, BHIM, and India\'s real-time payment infrastructure for merchants.',
    tags: ['UPI', 'PhonePe', 'Google Pay', 'BHIM'],
    color: 'violet',
  },
  {
    icon: '🏢',
    title: 'Merchant of Record',
    desc: 'MoR platforms that handle global tax, compliance, and VAT/GST so you can sell software and digital products worldwide.',
    tags: ['Paddle', 'Lemon Squeezy', 'FastSpring'],
    color: 'purple',
  },
  {
    icon: '🔄',
    title: 'Subscription Billing',
    desc: 'Recurring billing platforms, dunning management, churn recovery, and subscriber lifecycle tools for SaaS and D2C.',
    tags: ['Chargebee', 'Recurly', 'Stripe Billing'],
    color: 'blue',
  },
  {
    icon: '🛍️',
    title: 'BNPL & Digital Wallets',
    desc: 'Buy Now Pay Later fintech solutions and digital wallet integrations that increase average order value and conversion.',
    tags: ['Simpl', 'LazyPay', 'Klarna', 'Paytm'],
    color: 'pink',
  },
  {
    icon: '🔌',
    title: 'Payment APIs & SDKs',
    desc: 'Developer-focused comparison of fintech payment APIs, webhook reliability, SDK quality, and integration complexity.',
    tags: ['REST APIs', 'Webhooks', 'SDKs', 'Docs'],
    color: 'cyan',
  },
  {
    icon: '🛒',
    title: 'Checkout Optimization',
    desc: 'Hosted checkouts, embedded flows, one-click buying, and conversion-focused checkout design for ecommerce stores.',
    tags: ['Hosted', 'Embedded', 'One-Click', 'Shop Pay'],
    color: 'teal',
  },
  {
    icon: '🛡️',
    title: 'Fraud Prevention',
    desc: 'Adaptive fraud detection, ML risk scoring, chargeback management, 3DS2, and KYC tools for payment security.',
    tags: ['ML Scoring', 'Chargebacks', '3DS2', 'KYC'],
    color: 'rose',
  },
  {
    icon: '🌐',
    title: 'Cross-Border Payments',
    desc: 'FX rates, local acquiring, SWIFT alternatives, multi-currency settlement, and fintech solutions for global expansion.',
    tags: ['FX', 'Local Acquiring', 'SWIFT', 'Multi-Currency'],
    color: 'amber',
  },
  {
    icon: '🏦',
    title: 'Embedded Finance',
    desc: 'Banking-as-a-Service, embedded lending, virtual accounts, and fintech infrastructure for platforms and marketplaces.',
    tags: ['BaaS', 'Virtual Accounts', 'Lending', 'Payouts'],
    color: 'emerald',
  },
  {
    icon: '📊',
    title: 'Payment Orchestration',
    desc: 'Multi-gateway routing, fallback logic, and intelligent transaction routing to maximize authorization rates at scale.',
    tags: ['Routing', 'Failover', 'Cost Optimization'],
    color: 'sky',
  },
  {
    icon: '⚖️',
    title: 'Compliance & Regulation',
    desc: 'PCI DSS, RBI payment regulations, 3DS2, AML, KYC, GDPR, and what Indian and global compliance means for your stack.',
    tags: ['PCI DSS', 'RBI', 'KYC/AML', 'GDPR'],
    color: 'orange',
  },
]

const colorMap = {
  indigo:  { bg: 'bg-indigo-50',  border: 'border-indigo-100',  text: 'text-indigo-700',  tag: 'bg-indigo-100 text-indigo-700'  },
  violet:  { bg: 'bg-violet-50',  border: 'border-violet-100',  text: 'text-violet-700',  tag: 'bg-violet-100 text-violet-700'  },
  purple:  { bg: 'bg-purple-50',  border: 'border-purple-100',  text: 'text-purple-700',  tag: 'bg-purple-100 text-purple-700'  },
  blue:    { bg: 'bg-blue-50',    border: 'border-blue-100',    text: 'text-blue-700',    tag: 'bg-blue-100 text-blue-700'    },
  pink:    { bg: 'bg-pink-50',    border: 'border-pink-100',    text: 'text-pink-700',    tag: 'bg-pink-100 text-pink-700'    },
  cyan:    { bg: 'bg-cyan-50',    border: 'border-cyan-100',    text: 'text-cyan-700',    tag: 'bg-cyan-100 text-cyan-700'    },
  teal:    { bg: 'bg-teal-50',    border: 'border-teal-100',    text: 'text-teal-700',    tag: 'bg-teal-100 text-teal-700'    },
  rose:    { bg: 'bg-rose-50',    border: 'border-rose-100',    text: 'text-rose-700',    tag: 'bg-rose-100 text-rose-700'    },
  amber:   { bg: 'bg-amber-50',   border: 'border-amber-100',   text: 'text-amber-700',   tag: 'bg-amber-100 text-amber-700'   },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-100', text: 'text-emerald-700', tag: 'bg-emerald-100 text-emerald-700' },
  sky:     { bg: 'bg-sky-50',     border: 'border-sky-100',     text: 'text-sky-700',     tag: 'bg-sky-100 text-sky-700'     },
  orange:  { bg: 'bg-orange-50',  border: 'border-orange-100',  text: 'text-orange-700',  tag: 'bg-orange-100 text-orange-700'  },
}

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
            <span className="text-xs font-semibold text-indigo-700 tracking-wide uppercase">Fintech & Payments Ecosystem</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
            Every fintech payment topic{' '}
            <span className="gradient-text">your business needs to understand</span>
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            From UPI and BNPL to payment orchestration and cross-border fintech — research every layer of the modern payments stack.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map(cat => {
            const c = colorMap[cat.color]
            return (
              <div
                key={cat.title}
                className="group bg-white border border-gray-100 rounded-2xl p-6 card-hover cursor-pointer relative overflow-hidden"
              >
                <div className={`absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-current to-transparent ${c.text} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />

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
