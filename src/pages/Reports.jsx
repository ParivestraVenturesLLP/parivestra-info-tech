import { Link } from 'react-router-dom'
import SEOHead from '../components/seo/SEOHead'
import RelatedResources from '../components/seo/RelatedResources'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const reports = [
  {
    title: 'India Digital Payments Market Report 2025',
    subtitle: 'UPI growth, gateway market share, fintech funding, and regulatory landscape',
    tag: 'Market Report',
    tagColor: 'bg-indigo-100 text-indigo-700',
    status: 'Publishing Q3 2025',
    topics: ['UPI', 'Market Size', 'Fintech', 'RBI Regulation'],
    desc: 'Comprehensive analysis of India\'s digital payments ecosystem: UPI transaction growth curves, market share of top payment gateways (Razorpay, Cashfree, PayU, BillDesk), fintech funding trends, and the impact of RBI\'s Payment Aggregator framework on merchant services.',
  },
  {
    title: 'Ecommerce Checkout Optimization Benchmark Report',
    subtitle: 'Cart abandonment data, checkout UX analysis, and conversion benchmarks by category',
    tag: 'Benchmark Report',
    tagColor: 'bg-cyan-100 text-cyan-700',
    status: 'Publishing Q4 2025',
    topics: ['Checkout', 'Conversion', 'Cart Abandonment', 'UX'],
    desc: 'In-depth benchmark analysis of ecommerce checkout performance across 50+ Indian and global online stores. Covers checkout step counts, payment method display impact on conversion, mobile vs desktop abandonment patterns, and the conversion lift from one-click checkout implementations.',
  },
  {
    title: 'SaaS Subscription Billing Intelligence Report',
    subtitle: 'Involuntary churn analysis, dunning effectiveness, and billing platform comparison',
    tag: 'Industry Report',
    tagColor: 'bg-emerald-100 text-emerald-700',
    status: 'Publishing Q3 2025',
    topics: ['SaaS', 'Subscription', 'Churn', 'Billing'],
    desc: 'Analysis of subscription billing performance across SaaS companies: involuntary churn rates by payment method, dunning sequence effectiveness (email timing, retry logic), MRR recovery rates, and platform comparison of Stripe Billing vs Chargebee vs Recurly for different business scales.',
  },
  {
    title: 'Cross-Border Payments Intelligence Report 2025',
    subtitle: 'FX costs, local payment method adoption, and global gateway comparison for Indian exporters',
    tag: 'Market Report',
    tagColor: 'bg-violet-100 text-violet-700',
    status: 'Publishing Q4 2025',
    topics: ['Cross-Border', 'FX', 'Global Payments', 'India'],
    desc: 'Market intelligence for Indian businesses and global merchants on cross-border payment infrastructure: FX conversion cost analysis, local payment method penetration by target market (EU, US, Southeast Asia), acquiring strategy for international sales, and comparative analysis of Stripe vs Adyen vs Airwallex for cross-border ecommerce.',
  },
  {
    title: 'Fintech Payment Infrastructure State of the Market 2025',
    subtitle: 'API quality, developer experience, and payment stack architecture for modern businesses',
    tag: 'Developer Report',
    tagColor: 'bg-blue-100 text-blue-700',
    status: 'Publishing Q1 2026',
    topics: ['API', 'Developer', 'Infrastructure', 'Fintech'],
    desc: 'Technical assessment of payment gateway APIs: documentation quality, SDK coverage, webhook reliability, latency benchmarks, sandbox environment quality, and developer community support. Rated for Stripe, Razorpay, Cashfree, Adyen, and Braintree with real integration experience data.',
  },
  {
    title: 'BNPL & Embedded Finance Market Report',
    subtitle: 'BNPL adoption in India and globally, provider comparison, and impact on AOV and returns',
    tag: 'Market Report',
    tagColor: 'bg-rose-100 text-rose-700',
    status: 'Publishing Q2 2026',
    topics: ['BNPL', 'Embedded Finance', 'India', 'Global'],
    desc: 'Market analysis of BNPL (Buy Now Pay Later) adoption in Indian and global ecommerce: provider comparison (Simpl, ZestMoney, LazyPay, Klarna, Afterpay), impact on average order value (average +15–30%), return rates, integration complexity, and the regulatory environment in India and internationally.',
  },
]

export default function ReportsPage() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Reports', path: '/reports' },
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Payment & Fintech Research Reports — Parivestra',
    description: 'Independent market research reports on India digital payments, ecommerce checkout benchmarks, SaaS subscription billing, cross-border payments, fintech infrastructure, and BNPL market analysis.',
    url: 'https://blog.parivestra.com/reports',
    publisher: { '@id': 'https://parivestra.com/#organization' },
  }

  return (
    <>
      <SEOHead
        title="Payment & Fintech Research Reports — Parivestra"
        description="Independent market research reports on India digital payments market, ecommerce checkout optimization benchmarks, SaaS subscription billing intelligence, cross-border payment infrastructure, fintech API analysis, and BNPL market data."
        canonical="/reports"
        keywords="payment research reports, fintech market report India, ecommerce payment report, digital payments India report, subscription billing report, cross-border payments report, BNPL market report, payment gateway market analysis"
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
              <li className="text-gray-900 font-medium">Reports</li>
            </ol>
          </div>
        </nav>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="mb-12 max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">Research Reports</span>
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
              Payment & Fintech Research Reports
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed speakable">
              Independent market intelligence reports covering India's digital payments ecosystem, ecommerce payment benchmarks, subscription billing performance, and fintech infrastructure analysis. Designed for founders, payment leaders, and analysts making data-driven payment decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {reports.map(report => (
              <article
                key={report.title}
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-indigo-100 hover:shadow-md transition-all cursor-pointer"
                itemScope
                itemType="https://schema.org/Report"
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <span className={`text-[10px] font-semibold px-2.5 py-1 rounded-full ${report.tagColor}`}>
                    {report.tag}
                  </span>
                  <span className="text-[10px] text-gray-400 font-medium shrink-0">{report.status}</span>
                </div>

                <h2 className="text-base font-bold text-gray-900 leading-snug mb-2" itemProp="name">
                  {report.title}
                </h2>
                <p className="text-xs text-gray-500 font-medium mb-3">{report.subtitle}</p>
                <p className="text-xs text-gray-600 leading-relaxed mb-4" itemProp="description">
                  {report.desc}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {report.topics.map(t => (
                    <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-gray-50 border border-gray-100 text-gray-500">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-indigo-600">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  Notify when published
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 bg-indigo-50 border border-indigo-100 rounded-2xl p-6">
            <div className="max-w-lg">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Get Early Access to Reports</h3>
              <p className="text-sm text-gray-600 mb-4">
                Our research reports are free and designed to provide the payment intelligence that most paid market research misses. Subscribe to be notified when new reports publish.
              </p>
              <Link
                to="/"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
              >
                Back to Payments Hub
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="mt-8">
            <RelatedResources
              topics={['payment-gateway', 'fintech', 'ecommerce-payments', 'payment-processing']}
              articles={[
                { title: 'Payment & Fintech Statistics', href: '/statistics' },
                { title: 'All Research Guides', href: '/research' },
              ]}
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
