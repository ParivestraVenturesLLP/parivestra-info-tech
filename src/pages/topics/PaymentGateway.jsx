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
    q: 'What is a payment gateway?',
    a: 'A payment gateway is a technology service that securely authorizes and processes card, UPI, and digital wallet transactions between a customer, a merchant, and a bank. It encrypts payment data, sends it to the payment processor, receives authorization from the issuing bank, and returns a success or decline response — all within 1–3 seconds. Examples: Stripe, Razorpay, Cashfree, Adyen, PayPal.',
  },
  {
    q: 'What is the best payment gateway for Indian ecommerce?',
    a: 'Razorpay and Cashfree are the top payment gateways for Indian ecommerce. Razorpay has the broadest product suite including UPI, net banking, RuPay, UPI AutoPay, payment links, and payouts. Cashfree offers faster settlements, sometimes same-day. For international transactions, Stripe or PayPal should be added alongside your Indian gateway.',
  },
  {
    q: 'What is the difference between a payment gateway and a payment processor?',
    a: 'The payment gateway is the front-end interface that captures payment data at checkout and encrypts it. The payment processor is the back-end system that moves money between the customer\'s bank and the merchant\'s bank. Most modern platforms like Stripe and Razorpay combine both functions, so the distinction matters mainly when evaluating fees or switching providers.',
  },
  {
    q: 'How much does a payment gateway cost in India?',
    a: 'Indian payment gateways typically charge 1.75%–2% per transaction for domestic cards and UPI. International cards add 1–1.5% for currency conversion. Additional costs include: setup fees (often waived), chargeback fees (₹500–₹1,000 per dispute), refund fees (some gateways keep the original processing fee), and monthly platform fees for premium features. Razorpay and Cashfree both offer competitive rates for Indian merchants.',
  },
  {
    q: 'How do I integrate a payment gateway into my website?',
    a: 'Three integration approaches: (1) Hosted checkout — redirect customers to the gateway\'s payment page; easiest and most secure. (2) Embedded checkout — use JS SDKs like Stripe.js or Razorpay Checkout.js to show payment fields within your site. (3) API integration — call the gateway\'s REST API directly for full customization. Most ecommerce platforms (Shopify, WooCommerce, Magento) offer pre-built payment gateway plugins for one-click setup.',
  },
  {
    q: 'What payment methods do Indian payment gateways support?',
    a: 'Leading Indian gateways (Razorpay, Cashfree, PayU) support: UPI (including QR codes and UPI AutoPay), debit and credit cards (Visa, Mastercard, RuPay, Amex), net banking (50+ banks), digital wallets (Paytm, PhonePe, Amazon Pay), BNPL (Simpl, LazyPay, ZestMoney), and EMI options. UPI accounts for over 50% of digital payment volume in India (NPCI data).',
  },
]

const providers = [
  { name: 'Razorpay', category: 'India Gateway', highlight: 'UPI + Full Indian payment stack', color: 'bg-blue-50 border-blue-200 text-blue-700' },
  { name: 'Cashfree', category: 'India Gateway', highlight: 'Fastest settlements in India', color: 'bg-emerald-50 border-emerald-200 text-emerald-700' },
  { name: 'Stripe', category: 'Global Gateway', highlight: 'Developer-first global infrastructure', color: 'bg-indigo-50 border-indigo-200 text-indigo-700' },
  { name: 'Adyen', category: 'Enterprise Gateway', highlight: 'Unified global commerce', color: 'bg-green-50 border-green-200 text-green-700' },
  { name: 'PayPal', category: 'Global Wallet', highlight: 'Consumer trust + global reach', color: 'bg-blue-50 border-blue-200 text-blue-800' },
  { name: 'PayU', category: 'India Gateway', highlight: 'Strong SMB adoption in India', color: 'bg-orange-50 border-orange-200 text-orange-700' },
]

export default function PaymentGatewayTopic() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Topics', path: '/#ecosystem' },
    { name: 'Payment Gateway', path: '/topics/payment-gateway' },
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Payment Gateway — Complete Guide & Comparisons',
    description: 'Everything about payment gateways: how they work, top providers in India and globally, integration guides, fees, and how to choose the right gateway for your ecommerce business.',
    url: 'https://blog.parivestra.com/topics/payment-gateway',
    about: {
      '@type': 'Thing',
      name: 'Payment Gateway',
      description: 'A payment gateway is a technology service that processes online payments by securely transmitting transaction data between customers, merchants, and banks.',
      sameAs: 'https://en.wikipedia.org/wiki/Payment_gateway',
    },
    isPartOf: { '@id': 'https://blog.parivestra.com/#blog' },
    publisher: { '@id': 'https://parivestra.com/#organization' },
  }

  return (
    <>
      <SEOHead
        title="Payment Gateway — What It Is, How It Works & Top Providers"
        description="Complete guide to payment gateways: how they work, best payment gateways for India (Razorpay, Cashfree, Stripe), fees, integration methods, and how to choose the right gateway for your ecommerce or SaaS business."
        canonical="/topics/payment-gateway"
        keywords="payment gateway, best payment gateway India, payment gateway comparison, Razorpay, Cashfree, Stripe India, payment gateway integration, payment gateway fees, online payment gateway, ecommerce payment gateway"
        breadcrumbs={breadcrumbs}
        schema={schema}
      />

      <Navbar />

      <main className="pt-20">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 py-3">
            <ol className="flex items-center gap-2 text-xs text-gray-500">
              <li><Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link></li>
              <li className="text-gray-300">/</li>
              <li><Link to="/#ecosystem" className="hover:text-indigo-600 transition-colors">Topics</Link></li>
              <li className="text-gray-300">/</li>
              <li className="text-gray-900 font-medium">Payment Gateway</li>
            </ol>
          </div>
        </nav>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Topic badge */}
              <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                <span className="text-xs font-semibold text-indigo-700 tracking-wide uppercase">Topic Hub</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
                Payment Gateway
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed mb-8 speakable">
                A payment gateway is the critical infrastructure that enables online businesses to accept digital payments. It securely captures customer payment data at checkout, routes it to the appropriate payment processor, and returns an authorization response — making every online transaction possible.
              </p>

              {/* AI Answer Block */}
              <AIAnswerBlock
                question="What is a payment gateway and how does it work?"
                answer="A payment gateway is a technology service that securely processes digital payments between customers and merchants. When a customer pays online, the gateway encrypts their card or UPI data, sends it to the payment processor for bank authorization, and returns success or failure — all in under 3 seconds. It acts as the secure conduit between your checkout and the banking system. Major payment gateways include Razorpay and Cashfree (India), Stripe (global), Adyen (enterprise), and PayPal (consumer-facing)."
                entity={['Razorpay', 'Cashfree', 'Stripe', 'Adyen', 'PayPal', 'UPI', 'Payment Processing', 'Checkout', 'PCI DSS']}
              />

              {/* Key Takeaways */}
              <KeyTakeaways
                topic="Payment Gateways"
                points={[
                  'A payment gateway encrypts and routes payment data — it does not store your customers\' card numbers.',
                  'For Indian ecommerce, Razorpay and Cashfree are the leading gateways — both support UPI, which accounts for 50%+ of digital payments in India (NPCI).',
                  'Stripe is the strongest choice for international sales and developer-first teams; it does not support UPI or RuPay in India.',
                  'Payment gateway fees in India: 1.75%–2% for domestic cards, plus 1–1.5% for international cards. Always check for chargeback and refund fees.',
                  'Most ecommerce businesses qualify for PCI DSS SAQ A (the easiest compliance path) by using a hosted or embedded checkout.',
                  'UPI AutoPay enables subscription billing through Indian gateways — no card required from the customer.',
                ]}
              />

              {/* Definition section */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 speakable">What Is a Payment Gateway?</h2>
                <div className="bg-gray-50 border-l-4 border-indigo-400 rounded-r-xl p-5 mb-6">
                  <p className="text-sm font-semibold text-gray-700 mb-1">Definition</p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    A <strong>payment gateway</strong> is a merchant service that authorizes and processes digital payments — including credit cards, debit cards, UPI, digital wallets, and net banking — for online businesses. It encrypts sensitive payment data, transmits it securely to the payment processor and issuing bank, and returns a real-time authorization decision to complete or decline the transaction.
                  </p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  The payment gateway sits between your checkout page and the banking network. Without it, your store cannot accept digital payments. Modern gateways like Stripe, Razorpay, and Adyen have expanded far beyond simple card processing — they now include fraud detection, subscription management, payouts, reporting dashboards, and multi-currency support in a single platform.
                </p>
                <p className="text-sm text-gray-600 leading-relaxed">
                  In India, the RBI regulates payment gateways under the Payment Aggregators framework. Razorpay, Cashfree, and PayU hold PA licenses from RBI, making them fully regulated payment infrastructure providers for Indian merchants.
                </p>
              </section>

              {/* How it works */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">How a Payment Gateway Works (Step by Step)</h2>
                <ol className="space-y-4">
                  {[
                    { step: '1. Customer initiates payment', desc: 'Customer enters card/UPI details at checkout and clicks "Pay Now".' },
                    { step: '2. Data encryption', desc: 'The payment gateway encrypts the payment data using SSL/TLS and tokenization to prevent interception.' },
                    { step: '3. Authorization request', desc: 'The gateway sends the encrypted data to the payment processor (e.g., Visa/Mastercard network), which forwards it to the issuing bank.' },
                    { step: '4. Bank authorization', desc: 'The issuing bank checks for fraud signals, sufficient funds, and approves or declines the transaction.' },
                    { step: '5. Response returned', desc: 'The authorization result (approved/declined) is sent back through the processor to the gateway, then displayed to the customer — all in under 3 seconds.' },
                    { step: '6. Settlement', desc: 'Approved transactions are batched and settled to the merchant\'s bank account within 1–3 business days (or same-day with Cashfree).' },
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <div className="shrink-0 w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                        <span className="text-xs font-bold text-indigo-700">{i + 1}</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{item.step}</p>
                        <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </section>

              {/* Comparison table */}
              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Top Payment Gateways Compared</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {providers.map(p => (
                    <div key={p.name} className={`border rounded-xl p-4 ${p.color}`}>
                      <div className="flex items-start justify-between mb-2">
                        <p className="text-sm font-bold">{p.name}</p>
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-white/60">{p.category}</span>
                      </div>
                      <p className="text-xs opacity-80">{p.highlight}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* FAQ */}
              <FAQSection
                title="Payment Gateway — Common Questions"
                faqs={faqs}
              />
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              <RelatedResources
                topics={['payment-processing', 'payment-integration', 'ecommerce-payments', 'payment-api', 'fintech']}
                articles={[
                  { title: 'Razorpay vs Cashfree vs PayU: Which Indian Payment Gateway is Better?', href: '/#featured' },
                  { title: 'Stripe vs Razorpay: A Real Comparison for Indian Ecommerce', href: '/#research' },
                  { title: 'Payment Gateway Integration Guide for Developers', href: '/topics/payment-integration' },
                  { title: 'UPI Infrastructure: How Indian Payments Work', href: '/#ecosystem' },
                  { title: 'PCI DSS Compliance for Ecommerce Stores', href: '/#faq' },
                ]}
              />

              {/* Entity block */}
              <div className="bg-white border border-gray-100 rounded-xl p-5">
                <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-3">Key Entities</p>
                <div className="space-y-2 text-xs text-gray-600">
                  <p><strong>Payment Gateway:</strong> Technology that authorizes digital payments</p>
                  <p><strong>Payment Processor:</strong> Moves funds between banks</p>
                  <p><strong>Issuing Bank:</strong> Customer's bank that approves/declines</p>
                  <p><strong>Acquiring Bank:</strong> Merchant's bank that receives funds</p>
                  <p><strong>PCI DSS:</strong> Payment security compliance standard</p>
                  <p><strong>UPI:</strong> India's real-time payment rail (NPCI)</p>
                  <p><strong>Settlement:</strong> Transfer of funds to merchant account</p>
                </div>
              </div>

              {/* Stats */}
              <div className="bg-indigo-600 rounded-xl p-5 text-white">
                <p className="text-xs font-semibold text-indigo-200 mb-3">India Payments Data (NPCI)</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-2xl font-bold">₹24T+</p>
                    <p className="text-xs text-indigo-200">Monthly UPI transaction value</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">50%+</p>
                    <p className="text-xs text-indigo-200">Share of digital payments via UPI</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold">1.75%</p>
                    <p className="text-xs text-indigo-200">Avg. MDR for Indian gateways</p>
                  </div>
                </div>
              </div>

              <Link
                to="/"
                className="block text-center w-full py-3 px-4 bg-gray-900 text-white text-sm font-semibold rounded-xl hover:bg-gray-800 transition-colors"
              >
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
