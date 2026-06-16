import { Link } from 'react-router-dom'
import SEOHead from '../../components/seo/SEOHead'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const allArticles = [
  {
    slug: 'razorpay-vs-cashfree-vs-payu',
    title: 'Razorpay vs Cashfree vs PayU: Which Indian Payment Gateway is Actually Better?',
    desc: 'We went through the real pricing, settlement timelines, UPI support, developer experience, and what merchants actually say. Here\'s what we found.',
    tag: 'Head to Head',
    tagColor: 'bg-indigo-100 text-indigo-700',
    category: 'India Payments',
    readTime: '11 min',
    date: '2026-05-10',
    keywords: ['Razorpay', 'Cashfree', 'PayU', 'India', 'UPI'],
  },
  {
    slug: 'stripe-vs-razorpay',
    title: 'Stripe vs Razorpay: A Real Comparison for Indian Ecommerce Brands (2026)',
    desc: 'Side-by-side on pricing, UPI support, developer experience, settlement times, and which one actually fits Indian customers.',
    tag: 'Gateway Comparison',
    tagColor: 'bg-violet-100 text-violet-700',
    category: 'Payment Gateway Guides',
    readTime: '12 min',
    date: '2026-05-20',
    keywords: ['Stripe', 'Razorpay', 'India', 'UPI', 'International'],
  },
  {
    slug: 'checkout-optimization',
    title: '7 Checkout Changes That Actually Move Conversion Rates',
    desc: 'Based on Baymard Institute data and what actually works — fewer steps, better payment method order, trust signals, and the one thing most stores get wrong.',
    tag: 'Conversion Fix',
    tagColor: 'bg-cyan-100 text-cyan-700',
    category: 'Checkout Optimization',
    readTime: '14 min',
    date: '2026-05-28',
    keywords: ['Checkout', 'Conversion', 'Cart Abandonment', 'UX'],
  },
  {
    slug: 'involuntary-churn-subscription',
    title: 'Why Subscribers Leave Even When They Don\'t Want To — And How to Fix It',
    desc: 'Involuntary churn from failed payments is silent MRR destruction. Retry logic, account updaters, and dunning sequences can recover most of it.',
    tag: 'Conversion Fix',
    tagColor: 'bg-rose-100 text-rose-700',
    category: 'Subscription Billing',
    readTime: '13 min',
    date: '2026-06-01',
    keywords: ['Subscription', 'Churn', 'Dunning', 'SaaS', 'Billing'],
  },
  {
    slug: 'pci-dss-ecommerce',
    title: 'PCI Compliance for Ecommerce Store Owners: What You Actually Have to Do',
    desc: 'Most stores using a hosted checkout just need to fill out a one-page SAQ A. We walk through what that means and when it gets more complex.',
    tag: 'Quick Guide',
    tagColor: 'bg-orange-100 text-orange-700',
    category: 'Payment Compliance',
    readTime: '9 min',
    date: '2026-06-05',
    keywords: ['PCI DSS', 'Compliance', 'SAQ A', 'Ecommerce', 'Security'],
  },
  {
    slug: 'paddle-vs-stripe-saas',
    title: 'Paddle vs Stripe for SaaS: When the Merchant of Record Model Makes Sense',
    desc: 'Paddle costs more per transaction. But for some SaaS businesses it saves tens of thousands in tax compliance work. Here\'s how to decide.',
    tag: 'Decision Guide',
    tagColor: 'bg-emerald-100 text-emerald-700',
    category: 'SaaS Billing',
    readTime: '8 min',
    date: '2026-06-10',
    keywords: ['Paddle', 'Stripe', 'SaaS', 'Merchant of Record', 'Tax'],
  },
  {
    slug: 'upi-autopay-subscriptions',
    title: 'UPI AutoPay for Subscriptions: How to Set Up Recurring Billing for Indian Users',
    desc: 'UPI AutoPay (eMandate) lets you bill customers on a recurring schedule without storing card details. Setup guide for Razorpay and Cashfree.',
    tag: 'Developer Guide',
    tagColor: 'bg-blue-100 text-blue-700',
    category: 'UPI Payments',
    readTime: '10 min',
    date: '2026-06-12',
    keywords: ['UPI AutoPay', 'Subscriptions', 'Razorpay', 'Cashfree', 'India'],
  },
  {
    slug: 'cross-border-payments-india',
    title: 'Selling Internationally from India: The Payment Setup Checklist You\'ll Need',
    desc: 'Local payment methods by market, how to avoid double FX fees, and which gateways actually have local acquiring in the regions you want to enter.',
    tag: 'Global Expansion',
    tagColor: 'bg-emerald-100 text-emerald-700',
    category: 'Cross-Border Payments',
    readTime: '15 min',
    date: '2026-06-14',
    keywords: ['Cross-Border', 'International Payments', 'FX', 'India', 'Export'],
  },
]

const categoryColors = {
  'India Payments': 'bg-indigo-50 text-indigo-700 border-indigo-100',
  'Payment Gateway Guides': 'bg-violet-50 text-violet-700 border-violet-100',
  'Checkout Optimization': 'bg-cyan-50 text-cyan-700 border-cyan-100',
  'Subscription Billing': 'bg-rose-50 text-rose-700 border-rose-100',
  'Payment Compliance': 'bg-orange-50 text-orange-700 border-orange-100',
  'SaaS Billing': 'bg-emerald-50 text-emerald-700 border-emerald-100',
  'UPI Payments': 'bg-blue-50 text-blue-700 border-blue-100',
  'Cross-Border Payments': 'bg-teal-50 text-teal-700 border-teal-100',
}

const categories = ['All', ...new Set(allArticles.map(a => a.category))]

export default function BlogIndex() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Parivestra Payments Blog',
    description: 'In-depth guides on payment gateways, fintech payment solutions, UPI, checkout optimization, subscription billing, and ecommerce payments.',
    url: 'https://blog.parivestra.com/blog',
    publisher: { '@id': 'https://parivestra.com/#organization' },
    blogPost: allArticles.map(a => ({
      '@type': 'BlogPosting',
      headline: a.title,
      description: a.desc,
      datePublished: a.date,
      url: `https://blog.parivestra.com/blog/${a.slug}`,
      author: { '@type': 'Organization', name: 'Parivestra' },
    })),
  }

  return (
    <>
      <SEOHead
        title="Payment & Fintech Blog — Guides, Comparisons & Research"
        description="In-depth payment guides: Razorpay vs Cashfree, Stripe vs Razorpay, checkout optimization, UPI AutoPay for subscriptions, PCI DSS compliance, Paddle vs Stripe for SaaS, cross-border payments. Free by Parivestra."
        canonical="/blog"
        keywords="payment gateway comparison, Razorpay vs Cashfree, Stripe vs Razorpay, checkout optimization, UPI AutoPay subscriptions, PCI DSS ecommerce, Paddle vs Stripe SaaS, fintech blog India"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
        ]}
        schema={schema}
      />

      <Navbar />

      <main className="pt-20">
        <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3">
            <ol className="flex items-center gap-2 text-xs text-gray-500">
              <li><Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link></li>
              <li className="text-gray-300">/</li>
              <li className="text-gray-900 font-medium">Blog</li>
            </ol>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">

          {/* Header */}
          <div className="mb-12 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <span className="text-xs font-semibold text-indigo-700 tracking-wide uppercase">Payments Blog</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
              Payment Gateway Guides & Fintech Research
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed">
              Real answers to payment questions that actually matter. Gateway comparisons, UPI guides, checkout fixes, subscription billing, compliance — no fluff, no vendor bias.
            </p>
          </div>

          {/* Category filter chips */}
          <div className="flex flex-wrap gap-2 mb-10">
            {categories.map(cat => (
              <span
                key={cat}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border cursor-default ${
                  cat === 'All'
                    ? 'bg-gray-900 text-white border-gray-900'
                    : categoryColors[cat] || 'bg-gray-50 text-gray-600 border-gray-100'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          {/* Article grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allArticles.map(art => (
              <article
                key={art.slug}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden hover:border-indigo-100 hover:shadow-lg transition-all duration-200 flex flex-col"
                itemScope
                itemType="https://schema.org/BlogPosting"
              >
                <meta itemProp="datePublished" content={art.date} />
                <meta itemProp="author" content="Parivestra" />

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${art.tagColor}`}>
                      {art.tag}
                    </span>
                    <span className="text-[10px] text-gray-400 font-medium">{art.readTime} read</span>
                  </div>

                  <h2
                    className="text-sm font-semibold text-gray-900 leading-snug mb-3 group-hover:text-indigo-700 transition-colors flex-1"
                    itemProp="headline"
                  >
                    {art.title}
                  </h2>

                  <p className="text-xs text-gray-500 leading-relaxed mb-4" itemProp="description">
                    {art.desc}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {art.keywords.slice(0, 3).map(k => (
                      <span key={k} className="text-[10px] px-2 py-0.5 bg-gray-50 border border-gray-100 text-gray-500 rounded-full font-medium">
                        {k}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <span className="text-[10px] font-medium text-gray-400">{art.category}</span>
                    <Link
                      to={`/blog/${art.slug}`}
                      className="flex items-center gap-1 text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
                      itemProp="url"
                    >
                      Read guide
                      <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Topic cluster links */}
          <div className="mt-16 bg-gray-50 border border-gray-100 rounded-2xl p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-2">Browse by Topic</h2>
            <p className="text-sm text-gray-500 mb-6">Deep-dive topic hubs with definitions, comparisons, and structured data.</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {[
                { label: 'Payment Gateway', path: '/topics/payment-gateway' },
                { label: 'Fintech',          path: '/topics/fintech' },
                { label: 'Processing',       path: '/topics/payment-processing' },
                { label: 'Payment APIs',     path: '/topics/payment-api' },
                { label: 'Ecommerce',        path: '/topics/ecommerce-payments' },
                { label: 'Integration',      path: '/topics/payment-integration' },
              ].map(t => (
                <Link
                  key={t.path}
                  to={t.path}
                  className="text-center py-3 px-3 bg-white border border-gray-100 rounded-xl text-xs font-semibold text-gray-700 hover:border-indigo-200 hover:text-indigo-700 hover:bg-indigo-50 transition-all"
                >
                  {t.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
