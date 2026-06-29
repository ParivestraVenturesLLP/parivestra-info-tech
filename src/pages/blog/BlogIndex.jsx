import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import SEOHead from '../../components/seo/SEOHead'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

export const allArticles = [
  {
    slug: 'razorpay-vs-cashfree-vs-payu',
    title: 'Razorpay vs Cashfree vs PayU: Which Indian Payment Gateway is Actually Better?',
    desc: 'We went through the real pricing, settlement timelines, UPI support, developer experience, and what merchants actually say. Here\'s what we found.',
    tag: 'Head to Head',
    tagColor: 'text-teal-400 bg-teal-500/10 border-teal-500/25',
    category: 'India Payments',
    readTime: '11 min',
    date: '2026-05-10',
    keywords: ['Razorpay', 'Cashfree', 'PayU', 'India', 'UPI'],
    accent: 'border-l-teal-500',
  },
  {
    slug: 'stripe-vs-razorpay',
    title: 'Stripe vs Razorpay: A Real Comparison for Indian Ecommerce Brands (2026)',
    desc: 'Side-by-side on pricing, UPI support, developer experience, settlement times, and which one actually fits Indian customers.',
    tag: 'Gateway Comparison',
    tagColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/25',
    category: 'Payment Gateway Guides',
    readTime: '12 min',
    date: '2026-05-20',
    keywords: ['Stripe', 'Razorpay', 'India', 'UPI', 'International'],
    accent: 'border-l-emerald-500',
  },
  {
    slug: 'checkout-optimization',
    title: '7 Checkout Changes That Actually Move Conversion Rates',
    desc: 'Based on Baymard Institute data and what actually works — fewer steps, better payment method order, trust signals, and the one thing most stores get wrong.',
    tag: 'Conversion Fix',
    tagColor: 'text-amber-400 bg-amber-500/10 border-amber-500/25',
    category: 'Checkout Optimization',
    readTime: '14 min',
    date: '2026-05-28',
    keywords: ['Checkout', 'Conversion', 'Cart Abandonment', 'UX'],
    accent: 'border-l-amber-500',
  },
  {
    slug: 'involuntary-churn-subscription',
    title: 'Why Subscribers Leave Even When They Don\'t Want To — And How to Fix It',
    desc: 'Involuntary churn from failed payments is silent MRR destruction. Retry logic, account updaters, and dunning sequences can recover most of it.',
    tag: 'Conversion Fix',
    tagColor: 'text-rose-400 bg-rose-500/10 border-rose-500/25',
    category: 'Subscription Billing',
    readTime: '13 min',
    date: '2026-06-01',
    keywords: ['Subscription', 'Churn', 'Dunning', 'SaaS', 'Billing'],
    accent: 'border-l-rose-500',
  },
  {
    slug: 'pci-dss-ecommerce',
    title: 'PCI Compliance for Ecommerce Store Owners: What You Actually Have to Do',
    desc: 'Most stores using a hosted checkout just need to fill out a one-page SAQ A. We walk through what that means and when it gets more complex.',
    tag: 'Quick Guide',
    tagColor: 'text-orange-400 bg-orange-500/10 border-orange-500/25',
    category: 'Payment Compliance',
    readTime: '9 min',
    date: '2026-06-05',
    keywords: ['PCI DSS', 'Compliance', 'SAQ A', 'Ecommerce', 'Security'],
    accent: 'border-l-orange-500',
  },
  {
    slug: 'paddle-vs-stripe-saas',
    title: 'Paddle vs Stripe for SaaS: When the Merchant of Record Model Makes Sense',
    desc: 'Paddle costs more per transaction. But for some SaaS businesses it saves tens of thousands in tax compliance work. Here\'s how to decide.',
    tag: 'Decision Guide',
    tagColor: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/25',
    category: 'SaaS Billing',
    readTime: '8 min',
    date: '2026-06-10',
    keywords: ['Paddle', 'Stripe', 'SaaS', 'Merchant of Record', 'Tax'],
    accent: 'border-l-indigo-500',
  },
  {
    slug: 'upi-autopay-subscriptions',
    title: 'UPI AutoPay for Subscriptions: How to Set Up Recurring Billing for Indian Users',
    desc: 'UPI AutoPay (eMandate) lets you bill customers on a recurring schedule without storing card details. Setup guide for Razorpay and Cashfree.',
    tag: 'Developer Guide',
    tagColor: 'text-blue-400 bg-blue-500/10 border-blue-500/25',
    category: 'UPI Payments',
    readTime: '10 min',
    date: '2026-06-12',
    keywords: ['UPI AutoPay', 'Subscriptions', 'Razorpay', 'Cashfree', 'India'],
    accent: 'border-l-blue-500',
  },
  {
    slug: 'cross-border-payments-india',
    title: 'Selling Internationally from India: The Payment Setup Checklist You\'ll Need',
    desc: 'Local payment methods by market, how to avoid double FX fees, and which gateways actually have local acquiring in the regions you want to enter.',
    tag: 'Global Expansion',
    tagColor: 'text-violet-400 bg-violet-500/10 border-violet-500/25',
    category: 'Cross-Border Payments',
    readTime: '15 min',
    date: '2026-06-14',
    keywords: ['Cross-Border', 'International Payments', 'FX', 'India', 'Export'],
    accent: 'border-l-violet-500',
  },
]

const categories = ['All', ...new Set(allArticles.map(a => a.category))]

const categoryActiveColors = {
  'India Payments':         'bg-teal-500/20 text-teal-300 border-teal-500/40',
  'Payment Gateway Guides': 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40',
  'Checkout Optimization':  'bg-amber-500/20 text-amber-300 border-amber-500/40',
  'Subscription Billing':   'bg-rose-500/20 text-rose-300 border-rose-500/40',
  'Payment Compliance':     'bg-orange-500/20 text-orange-300 border-orange-500/40',
  'SaaS Billing':           'bg-indigo-500/20 text-indigo-300 border-indigo-500/40',
  'UPI Payments':           'bg-blue-500/20 text-blue-300 border-blue-500/40',
  'Cross-Border Payments':  'bg-violet-500/20 text-violet-300 border-violet-500/40',
}

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

export default function BlogIndex() {
  const [activeCategory, setActiveCategory] = useState('All')
  const navigate = useNavigate()

  const filtered = activeCategory === 'All' ? allArticles : allArticles.filter(a => a.category === activeCategory)

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Parivestra Payments Blog',
    description: 'In-depth guides on payment gateways, fintech, UPI, checkout optimization, subscription billing, and ecommerce payments.',
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
        breadcrumbs={[{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }]}
        schema={schema}
      />

      <Navbar />

      <main className="bg-gray-950 min-h-screen pt-20">

        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="border-b border-white/8 bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3">
            <ol className="flex items-center gap-2 text-xs text-gray-500">
              <li><Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
              <li className="text-gray-700">/</li>
              <li className="text-gray-300 font-medium">Blog</li>
            </ol>
          </div>
        </nav>

        <div className="relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-64 bg-indigo-500/6 rounded-full blur-3xl pointer-events-none" />
          <div className="line-grid absolute inset-0 pointer-events-none" />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-14 lg:py-20">

            {/* Header */}
            <div className="mb-12 max-w-2xl">
              <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
                <span className="text-xs font-semibold text-indigo-300 tracking-wide uppercase">Payments Blog</span>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight mb-4">
                Payment Gateway Guides &<br className="hidden sm:block" /> Fintech Research
              </h1>
              <p className="text-lg text-gray-400 leading-relaxed">
                Real answers to payment questions that actually matter. Gateway comparisons, UPI guides, checkout fixes, subscription billing, compliance — no fluff, no vendor bias.
              </p>
            </div>

            {/* Category filter chips */}
            <div className="flex flex-wrap gap-2 mb-10">
              {categories.map(cat => {
                const isActive = activeCategory === cat
                const activeStyle = cat === 'All'
                  ? 'bg-white text-gray-900 border-white'
                  : categoryActiveColors[cat] || 'bg-indigo-500/20 text-indigo-300 border-indigo-500/40'
                return (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`text-xs font-semibold px-3.5 py-1.5 rounded-full border transition-all duration-200 ${
                      isActive
                        ? activeStyle
                        : 'bg-white/5 text-gray-400 border-white/10 hover:bg-white/10 hover:text-gray-200'
                    }`}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>

            {/* Article grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filtered.map((art, i) => (
                <article
                  key={art.slug}
                  className={`group blog-card-enter bg-gray-900/60 border border-white/8 border-l-4 ${art.accent} rounded-2xl rounded-l-xl overflow-hidden flex flex-col cursor-pointer hover:bg-gray-900/90 hover:border-white/16 transition-all duration-300 relative`}
                  style={{ animationDelay: `${i * 0.07}s` }}
                  itemScope
                  itemType="https://schema.org/BlogPosting"
                  onClick={(e) => { addRipple(e); navigate(`/blog/${art.slug}`) }}
                >
                  <div className="absolute top-0 left-4 right-4 h-px bg-linear-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <meta itemProp="datePublished" content={art.date} />
                  <meta itemProp="author" content="Parivestra" />

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full border ${art.tagColor}`}>
                        {art.tag}
                      </span>
                      <span className="text-[10px] text-gray-500 font-medium">{art.readTime} read</span>
                    </div>

                    <h2
                      className="text-sm font-semibold text-gray-100 leading-snug mb-3 group-hover:text-white transition-colors flex-1"
                      itemProp="headline"
                    >
                      {art.title}
                    </h2>

                    <p className="text-xs text-gray-500 leading-relaxed mb-4" itemProp="description">
                      {art.desc}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {art.keywords.slice(0, 3).map(k => (
                        <span key={k} className="text-[10px] px-2 py-0.5 bg-white/5 border border-white/8 text-gray-500 rounded-full font-medium group-hover:border-indigo-500/25 group-hover:text-indigo-400 transition-colors">
                          {k}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/6">
                      <span className="text-[10px] font-medium text-gray-600">{art.category}</span>
                      <span className="flex items-center gap-1 text-xs font-semibold text-indigo-400 opacity-0 group-hover:opacity-100 transition-all duration-200">
                        Read guide
                        <svg className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Topic hub links */}
            <div className="mt-16 bg-gray-900/60 border border-white/8 rounded-2xl p-8">
              <h2 className="text-lg font-bold text-white mb-2">Browse by Topic</h2>
              <p className="text-sm text-gray-400 mb-6">Deep-dive topic hubs with definitions, comparisons, and structured data.</p>
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
                    className="text-center py-3 px-3 bg-white/5 border border-white/8 rounded-xl text-xs font-semibold text-gray-300 hover:border-indigo-500/30 hover:text-indigo-300 hover:bg-indigo-500/8 transition-all duration-200"
                  >
                    {t.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
