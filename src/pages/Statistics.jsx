import { Link } from 'react-router-dom'
import SEOHead from '../components/seo/SEOHead'
import KeyTakeaways from '../components/seo/KeyTakeaways'
import RelatedResources from '../components/seo/RelatedResources'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const stats = [
  {
    category: 'UPI & India Payments',
    color: 'indigo',
    source: 'NPCI',
    sourceUrl: 'https://www.npci.org.in/what-we-do/upi/product-statistics',
    data: [
      { label: 'Monthly UPI Transaction Volume', value: '14B+', note: 'As of Q1 2025' },
      { label: 'Monthly UPI Transaction Value', value: '₹24T+', note: 'As of Q1 2025' },
      { label: 'UPI Share of Digital Payments', value: '50%+', note: 'By volume' },
      { label: 'Active UPI Users', value: '300M+', note: 'Monthly active users' },
      { label: 'UPI AutoPay Mandates', value: '100M+', note: 'Registered mandates' },
    ],
  },
  {
    category: 'Ecommerce & Checkout',
    color: 'cyan',
    source: 'Baymard Institute',
    sourceUrl: 'https://baymard.com/lists/cart-abandonment-rate',
    data: [
      { label: 'Average Cart Abandonment Rate', value: '70.19%', note: 'Global average across industries' },
      { label: 'Revenue Recoverable via Checkout Optimization', value: '35.26%', note: 'Of abandoned carts' },
      { label: 'Checkout Steps — Industry Average', value: '5.1', note: 'Top sites average 3.5 steps' },
      { label: 'Mobile Checkout Abandonment', value: '85%+', note: 'Higher than desktop' },
      { label: 'Increase with One-Page Checkout', value: '+21.8%', note: 'Conversion lift vs. multi-page' },
    ],
  },
  {
    category: 'Global Payment Market',
    color: 'violet',
    source: 'McKinsey & Worldpay',
    sourceUrl: 'https://www.mckinsey.com/industries/financial-services/our-insights/global-payments',
    data: [
      { label: 'Global Payments Revenue (2024)', value: '$2.4T', note: 'McKinsey Global Payments Report' },
      { label: 'Digital Payments CAGR (2024–2028)', value: '15.2%', note: 'Projected growth rate' },
      { label: 'Cross-Border Payment Volume', value: '$250T', note: 'Annual global flow' },
      { label: 'India Digital Payments Market Size', value: '$10T', note: 'Projected by 2026 (PhonePe-BCG)' },
      { label: 'BNPL Market Size (Global)', value: '$560B', note: 'By 2026 (Juniper Research)' },
    ],
  },
  {
    category: 'Subscription & SaaS Billing',
    color: 'emerald',
    source: 'Recurly / Stripe',
    sourceUrl: 'https://recurly.com/research/',
    data: [
      { label: 'Involuntary Churn Rate (avg.)', value: '1.2%', note: 'Monthly, from failed payments' },
      { label: 'Revenue Recovered with Dunning', value: '20–30%', note: 'Of failed subscription payments' },
      { label: 'Subscribers Recovered via Smart Retry', value: '12–18%', note: 'With 3-attempt retry logic' },
      { label: 'Account Updater Recovery Rate', value: '30%+', note: 'For expired card revenue recovery' },
      { label: 'BNPL AOV Lift at Checkout', value: '+15–30%', note: 'Average order value increase' },
    ],
  },
  {
    category: 'Payment Gateway Fees',
    color: 'orange',
    source: 'Razorpay / Cashfree / Stripe (public pricing)',
    sourceUrl: 'https://razorpay.com/pricing/',
    data: [
      { label: 'Razorpay Domestic Card MDR', value: '2%', note: 'Standard domestic credit/debit card' },
      { label: 'Cashfree Domestic Card MDR', value: '1.90%', note: 'Standard rate' },
      { label: 'UPI MDR (Indian gateways)', value: '0%', note: 'Government mandate — no MDR on UPI' },
      { label: 'Stripe US Card Rate', value: '2.9% + 30¢', note: 'Per successful card transaction' },
      { label: 'Chargeback Fee (India)', value: '₹500–₹1,000', note: 'Per dispute, varies by gateway' },
    ],
  },
  {
    category: 'Fintech & India Market',
    color: 'rose',
    source: 'Tracxn / RBI / DPIIT',
    sourceUrl: 'https://www.rbi.org.in',
    data: [
      { label: 'Fintech Startups in India', value: '2,100+', note: 'Active as of 2024 (Tracxn)' },
      { label: 'India Fintech Funding (2024)', value: '$3.1B', note: 'Annual venture funding' },
      { label: 'Licensed Payment Aggregators (PA)', value: '32+', note: 'RBI-approved entities' },
      { label: 'Internet Users in India', value: '900M+', note: 'Potential digital payment users (ITU)' },
      { label: 'Digital Payment Users India', value: '350M+', note: 'Active digital payers (RBI estimate)' },
    ],
  },
]

const colorMap = {
  indigo: { bg: 'bg-indigo-50', border: 'border-indigo-100', badge: 'bg-indigo-100 text-indigo-700', value: 'text-indigo-700' },
  cyan: { bg: 'bg-cyan-50', border: 'border-cyan-100', badge: 'bg-cyan-100 text-cyan-700', value: 'text-cyan-700' },
  violet: { bg: 'bg-violet-50', border: 'border-violet-100', badge: 'bg-violet-100 text-violet-700', value: 'text-violet-700' },
  emerald: { bg: 'bg-emerald-50', border: 'border-emerald-100', badge: 'bg-emerald-100 text-emerald-700', value: 'text-emerald-700' },
  orange: { bg: 'bg-orange-50', border: 'border-orange-100', badge: 'bg-orange-100 text-orange-700', value: 'text-orange-700' },
  rose: { bg: 'bg-rose-50', border: 'border-rose-100', badge: 'bg-rose-100 text-rose-700', value: 'text-rose-700' },
}

export default function StatisticsPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Statistics', path: '/statistics' },
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'DataCatalog',
    name: 'Payments & Fintech Statistics Hub — Parivestra',
    description: 'Curated payment industry statistics: UPI transaction data, ecommerce checkout benchmarks, global payment market size, gateway fees, subscription billing metrics, and India fintech market data.',
    url: 'https://blog.parivestra.com/statistics',
    publisher: { '@id': 'https://parivestra.com/#organization' },
    about: [
      { '@type': 'Thing', name: 'Payment Gateway Statistics' },
      { '@type': 'Thing', name: 'UPI Transaction Statistics' },
      { '@type': 'Thing', name: 'Ecommerce Payment Statistics' },
      { '@type': 'Thing', name: 'Fintech Market Statistics' },
    ],
  }

  return (
    <>
      <SEOHead
        title="Payment & Fintech Statistics — UPI Data, Checkout Benchmarks, Market Size"
        description="Curated payment industry statistics: UPI transaction volumes, cart abandonment benchmarks, global payment market size, payment gateway fees, subscription billing metrics, and India fintech market data. Sources: NPCI, RBI, Baymard Institute, McKinsey."
        canonical="/statistics"
        keywords="payment statistics, UPI statistics India, ecommerce payment statistics, cart abandonment statistics, fintech market size India, payment gateway fees, subscription billing statistics, digital payments India data"
        breadcrumbs={breadcrumbs}
        schema={schema}
      />

      <Navbar />

      <main className="topic-page pt-20 min-h-screen">
        <nav aria-label="Breadcrumb" className="breadcrumb-bar border-b border-white/8 bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3">
            <ol className="flex items-center gap-2 text-xs text-gray-500">
              <li><Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link></li>
              <li className="text-gray-300">/</li>
              <li className="text-gray-900 font-medium">Statistics</li>
            </ol>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">

          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-rose-50 border border-rose-100 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
              <span className="text-xs font-semibold text-rose-700 tracking-wide uppercase">Data & Statistics</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
              Payments & Fintech Statistics
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed max-w-3xl speakable">
              Curated payment industry data from authoritative sources — NPCI, RBI, Baymard Institute, McKinsey, Worldpay, and gateway public pricing. All statistics include source citations for reference and backlink acquisition.
            </p>
          </div>

          <KeyTakeaways
            topic="Payments Data"
            points={[
              'UPI processes 14B+ transactions monthly in India — the world\'s largest real-time payment system by volume (NPCI, 2025).',
              'Global cart abandonment averages 70.19% — checkout optimization can recover 35% of abandoned revenue (Baymard Institute).',
              'Global payments revenue reached $2.4T in 2024 and is growing at 15.2% CAGR through 2028 (McKinsey).',
              'Involuntary subscription churn averages 1.2% monthly — smart dunning logic recovers 20–30% of failed payments (Recurly).',
              'UPI MDR is 0% by government mandate — making it the most merchant-friendly payment method in India.',
              'India is projected to reach $10T in digital payment volume by 2026, driven by UPI expansion and fintech adoption.',
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
            {stats.map(section => {
              const c = colorMap[section.color]
              return (
                <div key={section.category} className={`${c.bg} ${c.border} border rounded-2xl p-6`}>
                  <div className="flex items-start justify-between mb-5">
                    <h2 className="text-lg font-bold text-gray-900">{section.category}</h2>
                    <a
                      href={section.sourceUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${c.badge} hover:opacity-80 transition-opacity`}
                    >
                      Source: {section.source} ↗
                    </a>
                  </div>
                  <div className="space-y-3">
                    {section.data.map(item => (
                      <div key={item.label} className="flex items-start justify-between gap-4 bg-white/60 rounded-xl px-4 py-3">
                        <div>
                          <p className="text-xs font-medium text-gray-700">{item.label}</p>
                          <p className="text-[10px] text-gray-400 mt-0.5">{item.note}</p>
                        </div>
                        <p className={`text-lg font-bold ${c.value} shrink-0`}>{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          <div className="mt-12 bg-gray-50 border border-gray-100 rounded-xl p-6">
            <div className="flex items-start gap-3">
              <div className="shrink-0 w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center mt-0.5">
                <svg className="w-3 h-3 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-800 mb-1">Data Sources & Methodology</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  All statistics are sourced from public research, official data, and gateway pricing pages as cited. Data points reflect the most recently available figures as of June 2025. Market data is subject to change; always verify with primary sources before citing in reports or presentations. Parivestra does not fabricate or sponsor any data referenced on this platform.
                </p>
                <p className="text-xs text-gray-500 mt-2">
                  Primary sources: NPCI (npci.org.in), RBI (rbi.org.in), Baymard Institute (baymard.com), McKinsey & Company, Worldpay/FIS Global Payments Report, Juniper Research, Recurly Research, Razorpay public pricing, Cashfree public pricing, Stripe public pricing, Tracxn.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <RelatedResources
              topics={['payment-gateway', 'fintech', 'payment-processing', 'ecommerce-payments']}
              articles={[
                { title: 'India Fintech Market Research Reports', href: '/reports' },
                { title: 'Ecommerce Checkout Optimization Research', href: '/research' },
                { title: 'Payment Gateway Fee Comparison', href: '/topics/payment-gateway' },
              ]}
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
