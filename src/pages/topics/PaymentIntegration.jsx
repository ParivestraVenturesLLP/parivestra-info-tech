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
    q: 'What are the different ways to integrate a payment gateway?',
    a: 'Three integration approaches: (1) Hosted Payment Page — redirect customers to the gateway\'s payment page (e.g., Stripe Checkout, Razorpay Standard Checkout). Easiest, most secure, PCI SAQ A compliant. (2) Embedded Checkout — use JS SDKs (Stripe Elements, Razorpay Checkout.js) to render payment fields within your own site. More customizable, PCI SAQ A-EP. (3) Direct API Integration — call REST APIs directly from your server to handle the full payment flow. Maximum control, requires highest PCI compliance level.',
  },
  {
    q: 'How do I integrate Razorpay into my website?',
    a: 'Razorpay integration steps: (1) Create a Razorpay account and get API keys. (2) Install Razorpay SDK (npm install razorpay for server-side Node.js). (3) Create an Order on the server: razorpay.orders.create({ amount, currency, receipt }). (4) Load Razorpay Checkout.js on the front-end and pass the order_id. (5) Handle the payment response and verify the signature server-side using crypto.createHmac. (6) On success, fulfill the order. Set up webhooks to handle async events.',
  },
  {
    q: 'How do I integrate Stripe into my website?',
    a: 'Stripe integration steps: (1) Create a Stripe account and get API keys. (2) npm install stripe (server) and load Stripe.js (client). (3) Create a PaymentIntent on the server: stripe.paymentIntents.create({ amount, currency }). (4) Use Stripe Elements (client) to render the payment form with the client_secret. (5) Confirm the payment with stripe.confirmPayment(). (6) Handle webhook events (payment_intent.succeeded) for fulfillment. Use Stripe CLI for local webhook testing.',
  },
  {
    q: 'What is PCI DSS compliance for payment integration?',
    a: 'PCI DSS (Payment Card Industry Data Security Standard) is a security standard for handling card data. Integration type determines compliance scope: (1) Hosted checkout redirect → SAQ A (simplest, annual questionnaire). (2) JS SDK embedded fields → SAQ A-EP (more involved). (3) Direct API card handling → SAQ D (full compliance with 300+ controls). Modern integrations using hosted or JS SDK approaches always qualify for SAQ A or A-EP, which is manageable for any business.',
  },
  {
    q: 'How do I add payment integration to a Shopify store?',
    a: 'For Shopify payment integration in India: go to Settings → Payments → Third-Party Providers → search for Razorpay or Cashfree → install the official app → enter your API keys. Both Razorpay and Cashfree have certified Shopify apps that support UPI, cards, net banking, and wallets natively. For international Shopify stores, Shopify Payments (powered by Stripe) is the native option where available.',
  },
  {
    q: 'What are payment webhooks and why do I need them?',
    a: 'Webhooks are HTTP callbacks that payment gateways use to push real-time event notifications to your server — for events like payment.success, payment.failed, subscription.charged, and refund.created. You must implement webhooks because client-side redirects can fail (browser closes, network drops) and should never be relied upon alone to confirm payment. Webhook handlers must: (1) return 200 OK quickly, (2) verify the event signature, (3) process the event idempotently, and (4) update your database/fulfill orders.',
  },
]

const platforms = [
  { name: 'Shopify', method: 'Official Gateway Apps (Razorpay, Cashfree)', effort: 'Low', color: 'bg-green-50 text-green-700' },
  { name: 'WooCommerce', method: 'WooCommerce Payment Plugins', effort: 'Low', color: 'bg-violet-50 text-violet-700' },
  { name: 'Custom React/Next.js', method: 'Stripe.js + Payment Intents API', effort: 'Medium', color: 'bg-blue-50 text-blue-700' },
  { name: 'Custom Node.js', method: 'Razorpay/Stripe Node SDK + Webhooks', effort: 'Medium', color: 'bg-indigo-50 text-indigo-700' },
  { name: 'Mobile App (React Native)', method: 'Razorpay React Native SDK / Stripe Mobile', effort: 'Medium', color: 'bg-cyan-50 text-cyan-700' },
  { name: 'SaaS / Subscription', method: 'Stripe Billing / Chargebee / Razorpay Subscriptions', effort: 'High', color: 'bg-orange-50 text-orange-700' },
]

export default function PaymentIntegrationTopic() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
    { name: 'Payment Integration', path: '/topics/payment-integration' },
  ]

  return (
    <>
      <SEOHead
        title="Payment Integration — How to Integrate Payment Gateways (Stripe, Razorpay)"
        description="Complete payment integration guide: how to integrate Stripe, Razorpay, and Cashfree into your website, app, or Shopify store. Step-by-step setup, webhooks, PCI compliance, and platform-specific integration tutorials."
        canonical="/topics/payment-integration"
        keywords="payment integration, how to integrate payment gateway, Razorpay integration, Stripe integration, Shopify payment integration, payment webhook setup, PCI DSS integration, WooCommerce payment integration, payment gateway setup"
        breadcrumbs={breadcrumbs}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Payment Integration — Developer Guide',
          description: 'Step-by-step guides for integrating Stripe, Razorpay, and Cashfree into websites, apps, and ecommerce platforms.',
          url: 'https://blog.parivestra.com/topics/payment-integration',
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
              <li className="text-gray-900 font-medium">Payment Integration</li>
            </ol>
          </div>
        </nav>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-100 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                <span className="text-xs font-semibold text-orange-700 tracking-wide uppercase">Topic Hub</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
                Payment Integration
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed mb-8 speakable">
                Payment integration is the technical process of connecting a payment gateway to your website, application, or platform so customers can pay. The right integration approach determines your PCI compliance scope, customization level, and development timeline.
              </p>

              <AIAnswerBlock
                question="How do I integrate a payment gateway into my website or app?"
                answer="Payment gateway integration has three approaches: (1) Hosted checkout — redirect customers to the gateway's payment page (Stripe Checkout, Razorpay Standard). Easiest, most secure, minimal code, PCI SAQ A compliant. (2) Embedded checkout — use gateway JS SDKs (Stripe Elements, Razorpay Checkout.js) to show payment fields within your site without redirecting. More customizable, PCI SAQ A-EP. (3) Full API integration — call payment REST APIs directly for maximum control. For most businesses, hosted or embedded checkout is the recommended approach. Always verify payment success via webhooks on the server, never rely solely on client-side redirects."
                entity={['Stripe Checkout', 'Razorpay', 'Webhooks', 'PCI SAQ A', 'Payment Intent', 'API Keys', 'SDK', 'Shopify', 'WooCommerce', 'REST API']}
              />

              <KeyTakeaways
                topic="Payment Integration"
                points={[
                  'Choose hosted checkout for fastest go-to-live with minimum code and PCI SAQ A compliance. Best for most small to medium ecommerce stores.',
                  'Use embedded JS SDK checkout when you need design control within your site — Stripe Elements and Razorpay Checkout.js are the gold standard.',
                  'Always create payment orders/intents on the server — never trust client-side amounts for security.',
                  'Webhooks are mandatory for reliable payment confirmation — never rely solely on redirect callbacks which can fail due to browser/network issues.',
                  'Verify all webhook signatures using the gateway\'s shared secret before processing any event.',
                  'Use idempotency keys on payment creation calls to prevent duplicate charges if the request is retried.',
                ]}
              />

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 speakable">Integration by Platform</h2>
                <div className="space-y-3">
                  {platforms.map(p => (
                    <div key={p.name} className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{p.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{p.method}</p>
                      </div>
                      <span className={`shrink-0 text-[10px] font-bold px-2.5 py-1 rounded-full ${p.color}`}>
                        {p.effort} Effort
                      </span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Integration Security Checklist</h2>
                <ul className="space-y-3">
                  {[
                    'Store API keys in environment variables, never in source code or frontend',
                    'Create payment amounts on the server — never pass amounts from client to server',
                    'Use HTTPS everywhere — payment gateways refuse non-HTTPS endpoints',
                    'Implement Content Security Policy (CSP) headers to prevent XSS on payment pages',
                    'Verify Razorpay payment signatures: HMAC-SHA256(order_id + "|" + payment_id, key_secret)',
                    'Verify Stripe webhook signatures using stripe.webhooks.constructEvent()',
                    'Use idempotency keys for all payment creation API calls to prevent duplicates',
                    'Log all payment events with timestamps for fraud investigation and reconciliation',
                    'Never store raw card numbers — use tokenization provided by the gateway',
                    'Test in sandbox mode with all failure scenarios before going to production',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="shrink-0 w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center mt-0.5">
                        <svg className="w-3 h-3 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-sm text-gray-600">{item}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <FAQSection title="Payment Integration — Developer Questions" faqs={faqs} />
            </div>

            <aside className="space-y-6">
              <RelatedResources
                topics={['payment-api', 'payment-gateway', 'payment-processing', 'ecommerce-payments', 'fintech']}
                articles={[
                  { title: 'Razorpay Integration Guide: Orders, Checkout, Webhooks', href: '/#research' },
                  { title: 'Stripe Integration Guide: Payment Intents + Elements', href: '/#featured' },
                  { title: 'PCI DSS for Ecommerce: What You Actually Need to Do', href: '/#featured' },
                  { title: 'Shopify Payment Integration in India', href: '/#research' },
                ]}
              />

              <div className="bg-white border border-gray-100 rounded-xl p-5">
                <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-3">Integration Key Terms</p>
                <div className="space-y-2 text-xs text-gray-600">
                  <p><strong>Hosted Checkout:</strong> Gateway-hosted payment page redirect</p>
                  <p><strong>Embedded Checkout:</strong> Payment fields in your own site via SDK</p>
                  <p><strong>Webhook:</strong> Async HTTP callback for payment events</p>
                  <p><strong>Idempotency Key:</strong> Deduplication token for API calls</p>
                  <p><strong>PCI SAQ A:</strong> Simplest compliance for hosted checkout</p>
                  <p><strong>Signature Verification:</strong> HMAC validation of webhook events</p>
                  <p><strong>Tokenization:</strong> Replace card data with a safe token</p>
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
