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
    q: 'What is a payment API?',
    a: 'A payment API (Application Programming Interface) is a set of protocols and endpoints that allow software applications to communicate with payment gateways and processors. Using a payment API, developers can programmatically create payment intents, charge customers, issue refunds, create subscriptions, retrieve transaction history, and handle webhooks — all without a manual dashboard.',
  },
  {
    q: 'Which payment API is best for developers?',
    a: 'Stripe is widely regarded as the best payment API for developers due to its comprehensive documentation, SDKs in every major language (Python, Node.js, Ruby, PHP, Go, Java, .NET), consistent REST API design, and excellent developer experience. For Indian developers, Razorpay offers a strong API with full UPI support, clear documentation, and active developer community.',
  },
  {
    q: 'What is a payment webhook?',
    a: 'A payment webhook is an HTTP callback that a payment gateway sends to your server when a payment event occurs — such as payment.authorized, payment.captured, subscription.charged, or refund.created. Instead of polling the API for payment status, webhooks push real-time event data to your endpoint. You must verify webhook signatures to prevent spoofed events.',
  },
  {
    q: 'How do I integrate a payment API into my application?',
    a: 'Payment API integration steps: (1) Create an account and get API keys (test and production). (2) Install the official SDK for your language. (3) Create a payment intent/order on your server using the secret key. (4) Use the client-side SDK to render the payment form. (5) Handle the webhook events for payment success/failure. (6) Test in sandbox mode before going live. Most gateways have step-by-step integration guides for all major frameworks.',
  },
  {
    q: 'What is the difference between Stripe Payment Intents and the Charges API?',
    a: 'Stripe Payment Intents is the modern API that supports Strong Customer Authentication (SCA/3DS2) required by PSD2 in Europe and handles multi-step payment flows including card authentication. The older Charges API is a simpler, single-step charge that doesn\'t support SCA. Stripe recommends all new integrations use Payment Intents for global compliance and higher authorization rates.',
  },
  {
    q: 'What are the best payment APIs for Indian developers?',
    a: 'For Indian payment API integrations: Razorpay API (best for UPI + full Indian payment stack), Cashfree API (fast settlements + strong payout API), PayU API (wide acceptance, strong SMB base), and Instamojo API (best for small businesses and creators). For international payments from India: Stripe or Airwallex. All support REST APIs with JSON responses, webhooks, and multi-language SDKs.',
  },
]

const apis = [
  { name: 'Stripe API', feature: 'Payment Intents, Connect, Billing, Radar', lang: 'Node/Python/Ruby/Go/Java/.NET', rating: '★★★★★' },
  { name: 'Razorpay API', feature: 'Orders, UPI, Subscriptions, Payouts', lang: 'Node/Python/PHP/Java/Go', rating: '★★★★☆' },
  { name: 'Cashfree API', feature: 'Payment Gateway, Payouts, AutoCollect', lang: 'Node/Python/PHP/Java', rating: '★★★★☆' },
  { name: 'Adyen API', feature: 'CheckoutAPI, Recurring, Payouts', lang: 'All major languages', rating: '★★★★☆' },
  { name: 'PayPal API', feature: 'Orders, Subscriptions, Payouts', lang: 'Node/Python/PHP/Java', rating: '★★★☆☆' },
  { name: 'Braintree API', feature: 'GraphQL + REST, Tokenization', lang: 'Node/Ruby/Python/PHP/Java', rating: '★★★★☆' },
]

export default function PaymentAPITopic() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Topics', path: '/#ecosystem' },
    { name: 'Payment APIs', path: '/topics/payment-api' },
  ]

  return (
    <>
      <SEOHead
        title="Payment APIs — Best Payment APIs for Developers, Integration Guide"
        description="Complete guide to payment APIs: best payment APIs for developers (Stripe, Razorpay, Cashfree), how to integrate payment APIs, webhooks, SDKs, REST API design, and payment API comparison for ecommerce and SaaS applications."
        canonical="/topics/payment-api"
        keywords="payment API, payment API integration, best payment API, Stripe API, Razorpay API, payment webhooks, REST API payments, payment SDK, payment API developer guide, ecommerce payment API"
        breadcrumbs={breadcrumbs}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Payment APIs — Developer Guide & Comparison',
          description: 'Complete guide to payment APIs: best APIs for developers, integration tutorials, webhooks, SDKs, and payment API comparisons.',
          url: 'https://blog.parivestra.com/topics/payment-api',
          about: { '@type': 'Thing', name: 'Application Programming Interface', sameAs: 'https://en.wikipedia.org/wiki/API' },
          publisher: { '@id': 'https://parivestra.com/#organization' },
        }}
      />

      <Navbar />

      <main className="pt-20">
        <nav aria-label="Breadcrumb" className="bg-gray-50 border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-6 lg:px-8 py-3">
            <ol className="flex items-center gap-2 text-xs text-gray-500">
              <li><Link to="/" className="hover:text-indigo-600 transition-colors">Home</Link></li>
              <li className="text-gray-300">/</li>
              <li className="text-gray-900 font-medium">Payment APIs</li>
            </ol>
          </div>
        </nav>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                <span className="text-xs font-semibold text-blue-700 tracking-wide uppercase">Topic Hub</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
                Payment APIs
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed mb-8 speakable">
                Payment APIs are the developer interfaces that connect applications to payment infrastructure. They abstract the complexity of bank networks, card schemes, and compliance into clean REST endpoints and SDKs — letting developers build payment flows, subscriptions, payouts, and refunds in hours rather than months.
              </p>

              <AIAnswerBlock
                question="What is a payment API and which one should developers use?"
                answer="A payment API is a REST or GraphQL interface provided by payment gateways that allows developers to programmatically initiate charges, create subscriptions, issue refunds, handle webhooks, and manage payment flows without a GUI. For international projects: Stripe has the best developer experience with the most comprehensive documentation, SDKs in every major language, and a consistent API design. For Indian projects: Razorpay API provides full UPI support, strong documentation, and a fast-growing SDK ecosystem. Both offer sandbox/test environments for development."
                entity={['Stripe API', 'Razorpay API', 'REST API', 'Webhook', 'SDK', 'Payment Intent', 'API Key', 'Sandbox', 'JSON', 'OAuth']}
              />

              <KeyTakeaways
                topic="Payment APIs"
                points={[
                  'Stripe\'s Payment Intents API is the industry standard for modern payment flows — it handles 3DS2/SCA authentication, multi-step flows, and is required for European compliance.',
                  'Always use server-side API calls for sensitive operations (creating charges, retrieving secrets). Never expose your secret API key to client-side code.',
                  'Webhooks are critical — do not rely solely on client-side redirects to confirm payment success. Always verify payment status via webhook or server-side API call.',
                  'Validate all webhook signatures using the gateway\'s secret to prevent spoofed events from triggering fulfillment.',
                  'Razorpay\'s Orders API is the recommended flow for Indian integrations — create an order on the server, capture signature verification after payment.',
                  'Test with realistic scenarios in sandbox mode: declined cards, 3DS2 challenges, webhooks, subscription renewals, and refunds before going live.',
                ]}
              />

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Payment API Comparison</h2>
                <div className="space-y-3">
                  {apis.map(api => (
                    <div key={api.name} className="bg-gray-50 border border-gray-100 rounded-xl p-4 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{api.name}</p>
                        <p className="text-xs text-gray-500 mt-0.5">{api.feature}</p>
                        <p className="text-[11px] text-gray-400 mt-1">{api.lang}</p>
                      </div>
                      <span className="text-sm text-amber-500 shrink-0">{api.rating}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment API Integration Checklist</h2>
                <ul className="space-y-3">
                  {[
                    'Create test and production API key pairs — never hardcode them in source code',
                    'Install official SDK for your language (npm install stripe / razorpay)',
                    'Create payment orders/intents server-side using your secret key',
                    'Render payment UI using client-side SDK (Stripe.js / Razorpay Checkout)',
                    'Implement webhook endpoint to receive async payment events',
                    'Verify webhook signatures on every incoming request',
                    'Handle idempotency keys to prevent duplicate charges on retries',
                    'Test with all payment method types in sandbox mode',
                    'Implement proper error handling for declined payments',
                    'Log all payment events for debugging and reconciliation',
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

              <FAQSection title="Payment API — Developer Questions" faqs={faqs} />
            </div>

            <aside className="space-y-6">
              <RelatedResources
                topics={['payment-gateway', 'payment-integration', 'payment-processing', 'ecommerce-payments', 'fintech']}
                articles={[
                  { title: 'Stripe Payment Intents vs Charges API Guide', href: '/#featured' },
                  { title: 'Razorpay API Integration: Step-by-Step', href: '/#research' },
                  { title: 'Payment Webhook Security Best Practices', href: '/#research' },
                  { title: 'How to Handle Failed Payments with API Retry Logic', href: '/#research' },
                ]}
              />

              <div className="bg-white border border-gray-100 rounded-xl p-5">
                <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-3">API Terminology</p>
                <div className="space-y-2 text-xs text-gray-600">
                  <p><strong>REST API:</strong> HTTP-based interface with JSON responses</p>
                  <p><strong>Webhook:</strong> Async HTTP callback for payment events</p>
                  <p><strong>API Key:</strong> Authentication credential for API calls</p>
                  <p><strong>Idempotency:</strong> Deduplication of retried requests</p>
                  <p><strong>Payment Intent:</strong> Stripe's payment object with state</p>
                  <p><strong>Order API:</strong> Razorpay's pre-payment object</p>
                  <p><strong>SDK:</strong> Language-specific client library</p>
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
