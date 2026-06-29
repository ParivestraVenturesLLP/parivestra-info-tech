import { Link } from 'react-router-dom'
import SEOHead from '../../components/seo/SEOHead'
import AIAnswerBlock from '../../components/seo/AIAnswerBlock'
import KeyTakeaways from '../../components/seo/KeyTakeaways'
import FAQSection from '../../components/seo/FAQSection'
import RelatedResources from '../../components/seo/RelatedResources'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const faqs = [
  {
    q: 'What is fintech?',
    a: 'Fintech (financial technology) refers to technology companies and software that improve or automate financial services and processes. In payments, fintech companies build payment gateways, digital wallets, BNPL platforms, subscription billing tools, and payment APIs that help businesses accept and manage money more efficiently than traditional banks.',
  },
  {
    q: 'What are the top fintech payment companies in India?',
    a: 'The leading fintech payment companies in India are: Razorpay (payment gateway, banking, payouts), Cashfree Payments (payment processing, payouts), PhonePe (UPI, digital wallet), Paytm (digital wallet, payment gateway), BillDesk (payment aggregator), and Instamojo (payments for small businesses). Globally, Stripe, Adyen, and Square are dominant fintech payment infrastructure providers.',
  },
  {
    q: 'What is the difference between fintech and traditional banking?',
    a: 'Traditional banks focus on deposit-taking and lending through physical branches. Fintech companies use software and APIs to deliver faster, cheaper, and more accessible financial services — payment processing in milliseconds instead of days, API-driven account opening in minutes instead of weeks, and global money transfers at lower costs. Many fintech payment companies are not banks themselves but work alongside banks to move money.',
  },
  {
    q: 'What is BNPL in fintech?',
    a: 'BNPL (Buy Now Pay Later) is a fintech payment method that lets customers split purchases into installments — typically 3–12 payments, often interest-free for short periods. Indian BNPL fintech companies: Simpl, ZestMoney, LazyPay, Razorpay Pay Later. Global: Klarna, Afterpay, Affirm. BNPL at checkout typically increases average order value by 15–30% (Juniper Research).',
  },
  {
    q: 'What is embedded finance in fintech?',
    a: 'Embedded finance is the integration of financial services (payments, lending, banking, insurance) directly into non-financial platforms. Examples: Shopify Capital offering loans to merchants, Grab Pay embedded in the Grab ride-hailing app, or a SaaS platform offering payouts to its users via Banking-as-a-Service (BaaS). Embedded finance removes the need for customers to interact with a traditional bank separately.',
  },
]

const sectors = [
  { icon: '⚡', name: 'Payment Gateways', desc: 'Stripe, Razorpay, Cashfree, Adyen' },
  { icon: '📱', name: 'Digital Wallets', desc: 'PhonePe, Paytm, Google Pay, Apple Pay' },
  { icon: '🔄', name: 'BNPL', desc: 'Simpl, Klarna, Afterpay, ZestMoney' },
  { icon: '🏢', name: 'Neobanks', desc: 'Revolut, N26, Jupiter, Fi Money' },
  { icon: '📊', name: 'Subscription Billing', desc: 'Chargebee, Recurly, Stripe Billing' },
  { icon: '🌐', name: 'Cross-border', desc: 'Wise, Airwallex, Currencycloud' },
]

export default function FintechTopic() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Fintech', path: '/topics/fintech' },
  ]

  return (
    <>
      <SEOHead
        title="Fintech — What It Is, Payment Applications & Top Companies"
        description="Complete guide to fintech (financial technology): what it is, fintech payment companies in India and globally, BNPL, digital wallets, embedded finance, neobanks, and how fintech is changing ecommerce payments."
        canonical="/topics/fintech"
        keywords="fintech, financial technology, fintech companies India, fintech payment solutions, BNPL fintech, digital wallet India, neobank India, embedded finance, fintech for ecommerce, UPI fintech"
        breadcrumbs={breadcrumbs}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Fintech — Financial Technology Guide',
          description: 'Everything about fintech: payment applications, top fintech companies in India, BNPL, digital wallets, embedded finance, and the future of financial technology.',
          url: 'https://blog.parivestra.com/topics/fintech',
          about: { '@type': 'Thing', name: 'Financial Technology', sameAs: 'https://en.wikipedia.org/wiki/Financial_technology' },
          publisher: { '@id': 'https://parivestra.com/#organization' },
        }}
        faqs={faqs}
      />

      <Navbar />

      <main className="topic-page pt-20 min-h-screen">
        <nav aria-label="Breadcrumb" className="breadcrumb-bar border-b border-white/8 bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 py-3">
            <ol className="flex items-center gap-2 text-xs text-gray-500">
              <li><Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link></li>
              <li className="text-gray-300">/</li>
              <li><Link to="/#ecosystem" className="hover:text-indigo-600 transition-colors">Topics</Link></li>
              <li className="text-gray-300">/</li>
              <li className="text-gray-900 font-medium">Fintech</li>
            </ol>
          </div>
        </nav>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-100 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-violet-500" />
                <span className="text-xs font-semibold text-violet-700 tracking-wide uppercase">Topic Hub</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
                Fintech (Financial Technology)
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed mb-8 speakable">
                Fintech is the application of technology to deliver financial services faster, cheaper, and more accessibly. In ecommerce and payments, fintech has replaced slow, expensive bank-driven processes with instant digital payments, API-driven integrations, real-time cross-border transfers, and embedded financial tools that any developer can build on.
              </p>

              <AIAnswerBlock
                question="What is fintech and how does it relate to payments?"
                answer="Fintech (financial technology) is the use of software and technology to improve and automate financial services. In the context of payments, fintech companies build payment gateways (Stripe, Razorpay), digital wallets (PhonePe, Paytm), BNPL platforms (Simpl, Klarna), subscription billing tools (Chargebee), and payment APIs that enable businesses to accept and manage money digitally. India's fintech ecosystem is one of the world's largest, driven by UPI — a government-built real-time payment rail that processes over 14 billion transactions per month (NPCI)."
                entity={['Razorpay', 'PhonePe', 'Paytm', 'UPI', 'NPCI', 'BNPL', 'Chargebee', 'Stripe', 'Neobank', 'BaaS']}
              />

              <KeyTakeaways
                topic="Fintech"
                points={[
                  'India is among the world\'s top 3 fintech ecosystems, driven by UPI (14B+ monthly transactions), Jan Dhan financial inclusion, and a young digital-native population.',
                  'Fintech payment companies like Razorpay and Cashfree serve 1M+ Indian merchants with API-first infrastructure that traditional banks cannot match.',
                  'BNPL (Buy Now Pay Later) is the fastest-growing fintech payment method globally — expect 15–30% AOV lift when added at checkout (Juniper Research).',
                  'Embedded finance is enabling every SaaS company, marketplace, and app to become a financial services provider through Banking-as-a-Service APIs.',
                  'UPI AutoPay has transformed subscription billing in India — merchants can set up recurring mandates without requiring customers to save card details.',
                  'Indian fintech is regulated by RBI (Reserve Bank of India) under the Payment Aggregators and Payment Gateways framework.',
                ]}
              />

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 speakable">What Does Fintech Mean for Ecommerce?</h2>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  For ecommerce businesses, fintech has transformed every step of the payment journey. Instead of integrating with a bank's legacy MOTO terminal, you can now accept payments from 40+ methods (UPI, cards, wallets, BNPL, EMI, net banking) through a single API call. Settlement that took 7 days now happens same-day with providers like Cashfree. Fraud detection that required a full-time risk team is now built into every transaction through ML-based scoring.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The result: a D2C brand or SaaS startup can launch with enterprise-grade payment infrastructure on day one, at a fraction of the cost that was previously only available to large corporations.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Fintech Payment Sectors</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {sectors.map(s => (
                    <div key={s.name} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                      <span className="text-2xl mb-2 block">{s.icon}</span>
                      <p className="text-sm font-semibold text-gray-800 mb-1">{s.name}</p>
                      <p className="text-xs text-gray-500">{s.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <FAQSection title="Fintech — Common Questions" faqs={faqs} />
            </div>

            <aside className="space-y-6">
              <RelatedResources
                topics={['payment-gateway', 'payment-processing', 'ecommerce-payments', 'payment-api', 'payment-integration']}
                articles={[
                  { title: 'India Fintech Market Size & Statistics', href: '/statistics' },
                  { title: 'BNPL Guide: Best Buy Now Pay Later for Indian Ecommerce', href: '/#ecosystem' },
                  { title: 'UPI AutoPay: Setting Up Subscription Billing in India', href: '/#research' },
                  { title: 'Embedded Finance: How Platforms Are Becoming Banks', href: '/#research' },
                ]}
              />

              <div className="bg-white border border-gray-100 rounded-xl p-5">
                <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-3">Fintech Key Entities</p>
                <div className="space-y-2 text-xs text-gray-600">
                  <p><strong>UPI:</strong> India's real-time payment rail (NPCI)</p>
                  <p><strong>BNPL:</strong> Buy Now Pay Later credit product</p>
                  <p><strong>BaaS:</strong> Banking-as-a-Service API</p>
                  <p><strong>Neobank:</strong> Digital-only bank with no branches</p>
                  <p><strong>PA License:</strong> RBI Payment Aggregator licence</p>
                  <p><strong>KYC/AML:</strong> Identity & fraud compliance</p>
                  <p><strong>Open Banking:</strong> API-driven bank data access</p>
                </div>
              </div>

              <div className="bg-violet-600 rounded-xl p-5 text-white">
                <p className="text-xs font-semibold text-violet-200 mb-3">India Fintech Stats</p>
                <div className="space-y-3">
                  <div><p className="text-2xl font-bold">14B+</p><p className="text-xs text-violet-200">Monthly UPI transactions (NPCI)</p></div>
                  <div><p className="text-2xl font-bold">$31B</p><p className="text-xs text-violet-200">India fintech funding 2024 (Tracxn)</p></div>
                  <div><p className="text-2xl font-bold">2,100+</p><p className="text-xs text-violet-200">Active fintech startups in India</p></div>
                </div>
              </div>

              <Link to="/" className="block text-center w-full py-3 px-4 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors">
                ← Back to Payments Hub
              </Link>
            </aside>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
