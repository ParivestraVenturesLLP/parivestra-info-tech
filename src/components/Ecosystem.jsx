import { Link } from 'react-router-dom'

const categories = [
  {
    icon: '⚡',
    title: 'Payment Gateways',
    desc: 'Compare fees, settlement times, and developer experience across India and global providers.',
    tags: ['Stripe', 'Razorpay', 'Adyen', 'Cashfree'],
    color: 'indigo',
    href: '/topics/payment-gateway',
  },
  {
    icon: '📱',
    title: 'UPI & Digital Payments',
    desc: 'UPI rails, QR flows, UPI AutoPay, and India\'s real-time payment infrastructure for merchants.',
    tags: ['UPI', 'PhonePe', 'Google Pay', 'BHIM'],
    color: 'violet',
    href: '/topics/payment-gateway',
  },
  {
    icon: '🔄',
    title: 'Subscription Billing',
    desc: 'Recurring billing platforms, dunning management, and churn recovery for SaaS and D2C.',
    tags: ['Chargebee', 'Recurly', 'Stripe Billing'],
    color: 'blue',
    href: '/topics/ecommerce-payments',
  },
  {
    icon: '🏢',
    title: 'Merchant of Record',
    desc: 'MoR platforms that handle global tax, compliance, and VAT/GST for software sellers worldwide.',
    tags: ['Paddle', 'Lemon Squeezy', 'FastSpring'],
    color: 'purple',
    href: '/topics/payment-integration',
  },
  {
    icon: '🌐',
    title: 'Cross-Border Payments',
    desc: 'FX rates, local acquiring, multi-currency settlement, and fintech for global expansion.',
    tags: ['FX', 'Local Acquiring', 'SWIFT', 'Multi-Currency'],
    color: 'emerald',
    href: '/topics/payment-processing',
  },
  {
    icon: '🔌',
    title: 'Payment APIs & SDKs',
    desc: 'Developer comparison of fintech payment APIs, webhook reliability, SDK quality, and docs.',
    tags: ['REST APIs', 'Webhooks', 'SDKs'],
    color: 'cyan',
    href: '/topics/payment-api',
  },
]

const colorMap = {
  indigo:  { bg: 'bg-indigo-500/10',  border: 'border-indigo-500/20',  text: 'text-indigo-400',  tag: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20'  },
  violet:  { bg: 'bg-violet-500/10',  border: 'border-violet-500/20',  text: 'text-violet-400',  tag: 'bg-violet-500/10 text-violet-300 border-violet-500/20'  },
  blue:    { bg: 'bg-blue-500/10',    border: 'border-blue-500/20',    text: 'text-blue-400',    tag: 'bg-blue-500/10 text-blue-300 border-blue-500/20'    },
  purple:  { bg: 'bg-purple-500/10',  border: 'border-purple-500/20',  text: 'text-purple-400',  tag: 'bg-purple-500/10 text-purple-300 border-purple-500/20'  },
  emerald: { bg: 'bg-emerald-500/10', border: 'border-emerald-500/20', text: 'text-emerald-400', tag: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' },
  cyan:    { bg: 'bg-cyan-500/10',    border: 'border-cyan-500/20',    text: 'text-cyan-400',    tag: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20'    },
}

export default function Ecosystem() {
  return (
    <section id="ecosystem" className="py-20 lg:py-28 bg-gray-950 relative overflow-hidden">
      <div className="line-grid absolute inset-0 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
            <span className="text-xs font-semibold text-indigo-300 tracking-wide uppercase">Payments Ecosystem</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
            Every payment topic your{' '}
            <span className="gradient-text">business needs to know</span>
          </h2>
          <p className="mt-4 text-base text-gray-400 leading-relaxed">
            From UPI and BNPL to payment orchestration and cross-border fintech — research every layer of the modern payments stack.
          </p>
        </div>

        {/* 6-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {categories.map(cat => {
            const c = colorMap[cat.color]
            return (
              <Link
                key={cat.title}
                to={cat.href}
                className="group bg-gray-900/60 border border-white/8 rounded-2xl p-6 hover:bg-gray-900/90 hover:border-white/16 transition-all duration-300 relative overflow-hidden flex flex-col"
              >
                <div className={`absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-current to-transparent ${c.text} opacity-0 group-hover:opacity-40 transition-opacity duration-300`} />

                <div className={`w-11 h-11 ${c.bg} ${c.border} border rounded-xl flex items-center justify-center text-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {cat.icon}
                </div>

                <h3 className="text-sm font-semibold text-white mb-2">{cat.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed mb-4 flex-1">{cat.desc}</p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {cat.tags.map(tag => (
                    <span key={tag} className={`inline-flex text-[10px] font-semibold px-2 py-0.5 rounded-full border ${c.tag}`}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className={`flex items-center gap-1 text-xs font-semibold ${c.text} opacity-0 group-hover:opacity-100 transition-all duration-200`}>
                  Explore guides
                  <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
