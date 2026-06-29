import { Link } from 'react-router-dom'

function addRipple(e) {
  const card = e.currentTarget
  const circle = document.createElement('span')
  const diameter = Math.max(card.clientWidth, card.clientHeight)
  const rect = card.getBoundingClientRect()
  circle.style.width = circle.style.height = `${diameter}px`
  circle.style.left = `${e.clientX - rect.left - diameter / 2}px`
  circle.style.top = `${e.clientY - rect.top - diameter / 2}px`
  circle.className = 'ripple'
  card.querySelector('.ripple')?.remove()
  card.appendChild(circle)
}

const articles = [
  {
    tag: 'Head to Head',
    tagColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/25',
    title: 'Razorpay vs Cashfree vs PayU: Which Indian Payment Gateway is Actually Better?',
    desc: 'We went through the real pricing, settlement timelines, UPI support, and what developers actually say. Here\'s what we found.',
    readTime: '11 min',
    category: 'India Payments',
    accent: 'border-l-indigo-500',
    href: '/blog/razorpay-vs-cashfree-vs-payu',
    featured: true,
  },
  {
    tag: 'Decision Guide',
    tagColor: 'text-violet-400 bg-violet-500/10 border-violet-500/25',
    title: 'Paddle vs Stripe for SaaS: When the Merchant of Record Model Makes Sense',
    desc: 'Paddle costs more per transaction. But for some SaaS businesses it saves tens of thousands in tax compliance work. Here\'s how to decide.',
    readTime: '8 min',
    category: 'SaaS Billing',
    accent: 'border-l-violet-500',
    href: '/blog/paddle-vs-stripe-saas',
  },
  {
    tag: 'Conversion Fix',
    tagColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/25',
    title: 'Why Subscribers Leave Even When They Don\'t Want To — And How to Fix It',
    desc: 'Involuntary churn from failed payments is silent MRR destruction. Retry logic, account updaters, and dunning sequences can recover most of it.',
    readTime: '13 min',
    category: 'Subscription Billing',
    accent: 'border-l-cyan-500',
    href: '/blog/involuntary-churn-subscription',
  },
  {
    tag: 'Global Expansion',
    tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
    title: 'Selling Internationally? Here\'s the Payment Setup Checklist You\'ll Need',
    desc: 'Local payment methods by market, how to avoid double FX fees, and which gateways actually have local acquiring in the regions you want to enter.',
    readTime: '15 min',
    category: 'Cross-Border Payments',
    accent: 'border-l-emerald-500',
    href: '/blog/cross-border-payments-india',
  },
  {
    tag: 'Developer Guide',
    tagColor: 'text-blue-400 bg-blue-500/10 border-blue-500/25',
    title: 'Stripe vs Razorpay: A Real Comparison for Indian Ecommerce Brands',
    desc: 'Side-by-side on pricing, UPI support, developer experience, settlement times, and which one actually fits Indian customers.',
    readTime: '12 min',
    category: 'Stripe vs Razorpay',
    accent: 'border-l-blue-500',
    href: '/blog/stripe-vs-razorpay',
  },
  {
    tag: 'Quick Guide',
    tagColor: 'text-orange-400 bg-orange-500/10 border-orange-500/25',
    title: 'PCI Compliance for Ecommerce Store Owners: What You Actually Have to Do',
    desc: 'Most stores using a hosted checkout just need to fill out a one-page SAQ A. We walk through what that means and when it gets more complex.',
    readTime: '9 min',
    category: 'Payment Compliance',
    accent: 'border-l-orange-500',
    href: '/blog/pci-dss-ecommerce',
  },
]

export default function FeaturedArticles() {
  return (
    <section className="py-24 lg:py-32 bg-gray-950 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="line-grid absolute inset-0 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
              <span className="text-xs font-semibold text-orange-400 tracking-wide uppercase">Latest Guides</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
              Guides people are{' '}
              <span className="gradient-text">actually searching for</span>
            </h2>
            <p className="mt-3 text-base text-gray-400">
              Real questions, real answers — written by people who've been through these payment decisions.
            </p>
          </div>
          <Link
            to="/blog"
            className="shrink-0 flex items-center gap-2 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group"
          >
            View all articles
            <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((art, i) => (
            <Link
              key={art.title}
              to={art.href}
              onClick={addRipple}
              className={`group blog-card-enter relative bg-gray-900/60 border border-white/8 border-l-4 ${art.accent} rounded-2xl rounded-l-xl p-6 flex flex-col hover:bg-gray-900/90 hover:border-white/16 transition-all duration-300 overflow-hidden`}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              {/* Top shimmer line on hover */}
              <div className="absolute top-0 left-4 right-4 h-px bg-linear-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${art.tagColor}`}>
                  {art.tag}
                </span>
                <span className="text-[10px] text-gray-500 font-medium">{art.readTime} read</span>
              </div>

              <h3 className="text-sm font-semibold text-gray-100 leading-snug mb-3 group-hover:text-white transition-colors flex-1">
                {art.title}
              </h3>

              <p className="text-xs text-gray-500 leading-relaxed mb-5">{art.desc}</p>

              <div className="flex items-center justify-between pt-4 border-t border-white/6">
                <span className="text-[10px] font-medium text-gray-500 bg-white/5 px-2.5 py-1 rounded-full border border-white/8 group-hover:border-indigo-500/30 group-hover:text-indigo-400 group-hover:bg-indigo-500/8 transition-all duration-200">
                  {art.category}
                </span>
                <div className="flex items-center gap-1 text-xs font-semibold text-indigo-400 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200">
                  Read
                  <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
