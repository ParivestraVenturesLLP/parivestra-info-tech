import { Link } from 'react-router-dom'
import SEOHead from '../components/seo/SEOHead'
import AIAnswerBlock from '../components/seo/AIAnswerBlock'
import RelatedResources from '../components/seo/RelatedResources'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const guides = [
  {
    category: 'Payment Gateway Comparisons',
    color: 'indigo',
    articles: [
      { title: 'Razorpay vs Cashfree vs PayU: Which Indian Payment Gateway is Better?', desc: 'Side-by-side on pricing, UPI support, settlement times, and developer experience.', time: '11 min', tags: ['India', 'Comparison'] },
      { title: 'Stripe vs Razorpay: A Real Comparison for Indian Ecommerce Brands', desc: 'Which gateway to choose based on your market, volume, and payment method mix.', time: '12 min', tags: ['India', 'Global'] },
      { title: 'Adyen vs Stripe: Enterprise Payment Gateway Comparison', desc: 'When enterprise companies outgrow Stripe and when Adyen\'s unified model makes sense.', time: '9 min', tags: ['Enterprise', 'Global'] },
      { title: 'Paddle vs Stripe for SaaS: When the Merchant of Record Model Makes Sense', desc: 'Higher fees, zero tax headaches — how to decide for your software business.', time: '8 min', tags: ['SaaS', 'MoR'] },
    ],
  },
  {
    category: 'UPI & India Payments',
    color: 'violet',
    articles: [
      { title: 'UPI Infrastructure Guide: How India\'s Real-Time Payments Work', desc: 'NPCI architecture, payment flows, UPI AutoPay, and what it means for merchants.', time: '14 min', tags: ['UPI', 'India'] },
      { title: 'UPI AutoPay: Setting Up Subscription Billing for Indian Customers', desc: 'How UPI mandates work, implementation via Razorpay/Cashfree, and edge cases.', time: '10 min', tags: ['UPI', 'Subscriptions'] },
      { title: 'Digital Wallet Comparison for Indian Ecommerce: Paytm vs PhonePe vs Google Pay', desc: 'Usage data, merchant setup, and when wallets convert better than UPI.', time: '7 min', tags: ['Wallets', 'India'] },
    ],
  },
  {
    category: 'Checkout Optimization',
    color: 'cyan',
    articles: [
      { title: '7 Checkout Changes That Actually Move Conversion Rates', desc: 'Based on Baymard Institute data and real A/B tests from ecommerce brands.', time: '14 min', tags: ['Conversion', 'UX'] },
      { title: 'Why Are Customers Abandoning My Checkout? (And How to Fix It)', desc: 'Diagnosing the real causes of cart abandonment and the fixes that recover revenue.', time: '11 min', tags: ['Abandonment', 'CRO'] },
      { title: 'One-Click Checkout: Shop Pay, Link, and Accelerated Checkout Comparison', desc: 'Which accelerated checkout solutions move conversion and how to implement them.', time: '9 min', tags: ['One-Click', 'Shopify'] },
    ],
  },
  {
    category: 'Subscription Billing',
    color: 'emerald',
    articles: [
      { title: 'Why Subscribers Leave Even When They Don\'t Want To — And How to Fix It', desc: 'Involuntary churn from failed payments: retry logic, account updaters, and dunning.', time: '13 min', tags: ['Churn', 'SaaS'] },
      { title: 'Chargebee vs Stripe Billing vs Recurly: Subscription Platform Comparison', desc: 'Which subscription billing platform fits your SaaS business model and scale.', time: '10 min', tags: ['SaaS', 'Comparison'] },
      { title: 'Proration, Upgrades, and Plan Changes: A Billing Engineering Guide', desc: 'How to handle mid-cycle plan changes without overcharging or confusing customers.', time: '12 min', tags: ['Engineering', 'SaaS'] },
    ],
  },
  {
    category: 'Cross-Border Payments',
    color: 'orange',
    articles: [
      { title: 'Selling Internationally: Payment Setup Checklist for Indian Merchants', desc: 'Local payment methods by market, FX fees, acquiring strategy, and compliance.', time: '15 min', tags: ['Global', 'India'] },
      { title: 'How to Avoid Double FX Fees in Cross-Border Ecommerce', desc: 'Dynamic currency conversion, multi-currency accounts, and local acquiring explained.', time: '8 min', tags: ['FX', 'Global'] },
      { title: 'Merchant of Record vs Direct Gateway for Global Digital Products', desc: 'When Paddle or Lemon Squeezy saves money vs. when direct Stripe is better.', time: '9 min', tags: ['MoR', 'SaaS'] },
    ],
  },
  {
    category: 'Payment Compliance',
    color: 'rose',
    articles: [
      { title: 'PCI DSS for Ecommerce Store Owners: What You Actually Have to Do', desc: 'SAQ types explained, what triggers each, and the minimum compliance path.', time: '9 min', tags: ['PCI', 'Compliance'] },
      { title: 'RBI Payment Regulations: What Indian Merchants Need to Know in 2025', desc: 'PA/PG framework, tokenization mandates, recurring payment rules, and KYC.', time: '11 min', tags: ['RBI', 'India'] },
      { title: '3DS2 and SCA: What Strong Customer Authentication Means for Checkout', desc: 'PSD2 in Europe, how 3DS2 works, and minimizing authentication friction.', time: '8 min', tags: ['3DS2', 'EU'] },
    ],
  },
]

const colorMap = {
  indigo:  { bg: 'bg-indigo-50', border: 'border-indigo-100', tag: 'bg-indigo-100 text-indigo-700', dot: 'bg-indigo-500' },
  violet:  { bg: 'bg-violet-50', border: 'border-violet-100', tag: 'bg-violet-100 text-violet-700', dot: 'bg-violet-500' },
  cyan:    { bg: 'bg-cyan-50', border: 'border-cyan-100', tag: 'bg-cyan-100 text-cyan-700', dot: 'bg-cyan-500' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-100', tag: 'bg-emerald-100 text-emerald-700', dot: 'bg-emerald-500' },
  orange:  { bg: 'bg-orange-50', border: 'border-orange-100', tag: 'bg-orange-100 text-orange-700', dot: 'bg-orange-500' },
  rose:    { bg: 'bg-rose-50', border: 'border-rose-100', tag: 'bg-rose-100 text-rose-700', dot: 'bg-rose-500' },
}

export default function ResearchPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Research', path: '/research' },
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Payment & Fintech Research Hub — Parivestra',
    description: 'In-depth payment research guides covering payment gateway comparisons, UPI infrastructure, checkout optimization, subscription billing, cross-border payments, and payment compliance.',
    url: 'https://blog.parivestra.com/research',
    publisher: { '@id': 'https://parivestra.com/#organization' },
    about: [
      { '@type': 'Thing', name: 'Payment Gateway' },
      { '@type': 'Thing', name: 'Ecommerce Payments' },
      { '@type': 'Thing', name: 'Subscription Billing' },
      { '@type': 'Thing', name: 'Cross-Border Payments' },
    ],
  }

  return (
    <>
      <SEOHead
        title="Payment & Fintech Research Hub — Gateway Comparisons, UPI, Checkout Guides"
        description="In-depth payment research: gateway comparisons (Razorpay vs Cashfree, Stripe vs Adyen), UPI infrastructure guides, checkout optimization, subscription billing, cross-border payments, and PCI compliance for ecommerce businesses."
        canonical="/research"
        keywords="payment research, payment gateway comparison, UPI guide India, checkout optimization research, subscription billing guide, cross-border payments guide, PCI DSS guide, fintech research India, ecommerce payment guides"
        breadcrumbs={breadcrumbs}
        schema={schema}
      />

      <Navbar />

      <main className="pt-20">
        <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3">
            <ol className="flex items-center gap-2 text-xs text-gray-500">
              <li><Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link></li>
              <li className="text-gray-300">/</li>
              <li className="text-gray-900 font-medium">Research</li>
            </ol>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <span className="text-xs font-semibold text-indigo-700 tracking-wide uppercase">Research Hub</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
              Payment Research & Guides
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed speakable">
              Independent research on payment gateways, fintech infrastructure, and ecommerce payment decisions. Gateway comparisons, UPI guides, checkout optimization, subscription billing, and compliance — written for founders, merchants, and developers making real payment stack decisions.
            </p>
          </div>

          <AIAnswerBlock
            question="Where can I find in-depth payment gateway research and guides?"
            answer="The Parivestra Research Hub contains free, independent guides on payment gateways (Razorpay, Cashfree, Stripe, Adyen comparisons), UPI infrastructure (AutoPay, mandates, QR flows), checkout optimization (reducing 70% cart abandonment), subscription billing (dunning, churn, involuntary churn recovery), cross-border payments (FX, local acquiring, merchant of record), and PCI DSS compliance — all without vendor bias or affiliate rankings."
            entity={['Razorpay', 'Cashfree', 'Stripe', 'UPI', 'Checkout', 'Subscription Billing', 'Cross-Border', 'PCI DSS', 'Merchant of Record']}
          />

          <div className="space-y-12 mt-12">
            {guides.map(section => {
              const c = colorMap[section.color]
              return (
                <div key={section.category}>
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-2 h-2 rounded-full ${c.dot}`} />
                    <h2 className="text-xl font-bold text-gray-900">{section.category}</h2>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.articles.map(art => (
                      <article
                        key={art.title}
                        className={`${c.bg} ${c.border} border rounded-2xl p-5 cursor-pointer hover:shadow-md transition-shadow`}
                        itemScope
                        itemType="https://schema.org/Article"
                      >
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex flex-wrap gap-1">
                            {art.tags.map(tag => (
                              <span key={tag} className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${c.tag}`}>{tag}</span>
                            ))}
                          </div>
                          <span className="text-[10px] text-gray-400">{art.time}</span>
                        </div>
                        <h3 className="text-sm font-semibold text-gray-900 leading-snug mb-2" itemProp="headline">
                          {art.title}
                        </h3>
                        <p className="text-xs text-gray-500 leading-relaxed" itemProp="description">{art.desc}</p>
                        <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-gray-400">
                          <span>Coming soon</span>
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </article>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12">
            <RelatedResources
              topics={['payment-gateway', 'fintech', 'payment-processing', 'ecommerce-payments', 'payment-api', 'payment-integration']}
              articles={[
                { title: 'Payment & Fintech Statistics', href: '/statistics' },
                { title: 'Industry Research Reports', href: '/reports' },
              ]}
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
