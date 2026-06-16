import { Link } from 'react-router-dom'

const articles = [
  {
    tag: 'Head to Head',
    tagColor: 'bg-indigo-100 text-indigo-700',
    title: 'Razorpay vs Cashfree vs PayU: Which Indian Payment Gateway is Actually Better?',
    desc: 'We went through the real pricing, settlement timelines, UPI support, and what developers actually say. Here\'s what we found.',
    readTime: '11 min',
    category: 'India Payments',
    accent: 'border-l-indigo-400',
    href: '/blog/razorpay-vs-cashfree-vs-payu',
  },
  {
    tag: 'Decision Guide',
    tagColor: 'bg-violet-100 text-violet-700',
    title: 'Paddle vs Stripe for SaaS: When the Merchant of Record Model Makes Sense',
    desc: 'Paddle costs more per transaction. But for some SaaS businesses it saves tens of thousands in tax compliance work. Here\'s how to decide.',
    readTime: '8 min',
    category: 'SaaS Billing',
    accent: 'border-l-violet-400',
    href: '/blog/paddle-vs-stripe-saas',
  },
  {
    tag: 'Conversion Fix',
    tagColor: 'bg-cyan-100 text-cyan-700',
    title: 'Why Subscribers Leave Even When They Don\'t Want To — And How to Fix It',
    desc: 'Involuntary churn from failed payments is silent MRR destruction. Retry logic, account updaters, and dunning sequences can recover most of it.',
    readTime: '13 min',
    category: 'Subscription Billing',
    accent: 'border-l-cyan-400',
    href: '/blog/involuntary-churn-subscription',
  },
  {
    tag: 'Global Expansion',
    tagColor: 'bg-emerald-100 text-emerald-700',
    title: 'Selling Internationally? Here\'s the Payment Setup Checklist You\'ll Need',
    desc: 'Local payment methods by market, how to avoid double FX fees, and which gateways actually have local acquiring in the regions you want to enter.',
    readTime: '15 min',
    category: 'Cross-Border Payments',
    accent: 'border-l-emerald-400',
    href: '/blog/cross-border-payments-india',
  },
  {
    tag: 'Developer Guide',
    tagColor: 'bg-blue-100 text-blue-700',
    title: 'Stripe vs Razorpay: A Real Comparison for Indian Ecommerce Brands',
    desc: 'Side-by-side on pricing, UPI support, developer experience, settlement times, and which one actually fits Indian customers.',
    readTime: '12 min',
    category: 'Stripe vs Razorpay',
    accent: 'border-l-blue-400',
    href: '/blog/stripe-vs-razorpay',
  },
  {
    tag: 'Quick Guide',
    tagColor: 'bg-orange-100 text-orange-700',
    title: 'PCI Compliance for Ecommerce Store Owners: What You Actually Have to Do',
    desc: 'Most stores using a hosted checkout just need to fill out a one-page SAQ A. We walk through what that means and when it gets more complex.',
    readTime: '9 min',
    category: 'Payment Compliance',
    accent: 'border-l-orange-400',
    href: '/blog/pci-dss-ecommerce',
  },
]

export default function FeaturedArticles() {
  return (
    <section className="py-24 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
              <span className="text-xs font-semibold text-gray-600 tracking-wide uppercase">Latest Guides</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
              Guides people are{' '}
              <span className="gradient-text">actually searching for</span>
            </h2>
            <p className="mt-3 text-base text-gray-500">
              Real questions, real answers — written by people who've been through these payment decisions.
            </p>
          </div>
          <Link to="/blog" className="shrink-0 text-sm font-semibold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5">
            View all articles
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map(art => (
            <Link
              key={art.title}
              to={art.href}
              className={`group bg-white border border-gray-100 border-l-4 ${art.accent} rounded-2xl rounded-l-xl p-6 card-hover flex flex-col`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${art.tagColor}`}>
                  {art.tag}
                </span>
                <span className="text-[10px] text-gray-400 font-medium">{art.readTime} read</span>
              </div>

              <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-3 group-hover:text-indigo-700 transition-colors flex-1">
                {art.title}
              </h3>

              <p className="text-xs text-gray-500 leading-relaxed mb-5">{art.desc}</p>

              <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                <span className="text-[10px] font-medium text-gray-400 bg-gray-50 px-2 py-0.5 rounded-full">
                  {art.category}
                </span>
                <div className="flex items-center gap-1 text-xs font-semibold text-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity">
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
