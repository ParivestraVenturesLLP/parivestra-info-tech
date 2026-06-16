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
    q: 'What payment methods should my ecommerce store support?',
    a: 'For Indian ecommerce: UPI (mandatory — 50%+ of digital payments), debit/credit cards (Visa, Mastercard, RuPay), net banking, digital wallets (Paytm, PhonePe), and BNPL (Simpl, LazyPay) for high-AOV categories. For global ecommerce: credit/debit cards, PayPal, Apple Pay, Google Pay, and local payment methods by market (iDEAL in Netherlands, SEPA in Europe, PIX in Brazil). Supporting more payment methods directly increases checkout conversion.',
  },
  {
    q: 'How do I reduce cart abandonment at checkout?',
    a: 'The top cart abandonment causes and fixes: (1) Too many checkout steps → reduce to 2–3 steps maximum. (2) Unexpected fees → show total cost early, never surprise at the final step. (3) Unfamiliar payment methods → show logos of recognized payment providers. (4) No guest checkout → don\'t force account creation. (5) Slow page load → optimize checkout page for Core Web Vitals. (6) No saved payment → enable one-click checkout for returning customers. Industry average abandonment is 70% (Baymard Institute). Small improvements drive outsized revenue recovery.',
  },
  {
    q: 'What is the best payment gateway for Shopify?',
    a: 'Shopify Payments is the native option with no additional transaction fees and Shop Pay one-click checkout — available in US, UK, Canada, Australia, and select markets. For India, Shopify doesn\'t offer Shopify Payments, so Razorpay for Shopify or Cashfree for Shopify are the leading choices — both have native Shopify apps with UPI, cards, and net banking support. Stripe also works in Shopify for international sales.',
  },
  {
    q: 'What is Shop Pay and how does it work?',
    a: 'Shop Pay is Shopify\'s accelerated one-click checkout solution. It stores customer payment details (card, address, email) across all Shopify stores, allowing returning buyers to complete purchases in one tap. Merchants using Shopify Payments can enable Shop Pay at no extra cost. It shows higher conversion rates than standard checkout — Shopify reports 15% higher conversion vs. non-accelerated checkout.',
  },
  {
    q: 'How do I set up recurring payments for an ecommerce subscription?',
    a: 'For Indian ecommerce subscriptions: Use Razorpay Subscriptions or Cashfree Subscriptions which support UPI AutoPay (mandates without card-on-file), recurring card charges, and dunning management. For global SaaS subscriptions: Stripe Billing or Chargebee. Key features to look for: automatic retry logic for failed payments, prorated billing for plan upgrades, dunning email sequences, and analytics on MRR and churn.',
  },
]

const methods = [
  { name: 'UPI', share: '50%+', icon: '⚡', color: 'text-indigo-700 bg-indigo-50', note: 'India only — PhonePe, Google Pay, Paytm, BHIM' },
  { name: 'Credit/Debit Card', share: '25%', icon: '💳', color: 'text-blue-700 bg-blue-50', note: 'Visa, Mastercard, RuPay, Amex' },
  { name: 'Digital Wallets', share: '10%', icon: '📱', color: 'text-violet-700 bg-violet-50', note: 'Paytm, PhonePe wallet, Amazon Pay' },
  { name: 'Net Banking', share: '8%', icon: '🏦', color: 'text-cyan-700 bg-cyan-50', note: '50+ banks supported by Indian gateways' },
  { name: 'BNPL', share: '4%', icon: '🔄', color: 'text-emerald-700 bg-emerald-50', note: 'Simpl, LazyPay, ZestMoney' },
  { name: 'EMI', share: '3%', icon: '📅', color: 'text-orange-700 bg-orange-50', note: 'Credit card and cardless EMI options' },
]

export default function EcommercePaymentsTopic() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Topics', path: '/#ecosystem' },
    { name: 'Ecommerce Payments', path: '/topics/ecommerce-payments' },
  ]

  return (
    <>
      <SEOHead
        title="Ecommerce Payments — Payment Methods, Gateway Setup & Checkout Guide"
        description="Complete guide to ecommerce payments: best payment methods for online stores, how to set up payment gateways for Shopify and WooCommerce, checkout optimization to reduce abandonment, subscription billing, and Indian ecommerce payment stack."
        canonical="/topics/ecommerce-payments"
        keywords="ecommerce payments, ecommerce payment gateway, online payment methods, Shopify payments India, WooCommerce payment gateway, cart abandonment payments, ecommerce checkout, subscription ecommerce, UPI ecommerce"
        breadcrumbs={breadcrumbs}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Ecommerce Payments — Complete Guide',
          description: 'Everything about ecommerce payments: payment methods, gateway setup, checkout optimization, subscription billing, and reducing cart abandonment.',
          url: 'https://blog.parivestra.com/topics/ecommerce-payments',
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
              <li className="text-gray-900 font-medium">Ecommerce Payments</li>
            </ol>
          </div>
        </nav>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                <span className="text-xs font-semibold text-teal-700 tracking-wide uppercase">Topic Hub</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
                Ecommerce Payments
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed mb-8 speakable">
                Ecommerce payments encompass every aspect of how online stores accept and process customer payments — from payment method selection and gateway integration to checkout UX, subscription billing, fraud prevention, and cross-border sales. Getting payments right is one of the highest-leverage decisions an ecommerce business makes.
              </p>

              <AIAnswerBlock
                question="What are the best ecommerce payment solutions for Indian online stores?"
                answer="For Indian ecommerce, the recommended payment stack is: Razorpay or Cashfree as your primary payment gateway (both support UPI, cards, net banking, wallets, BNPL, and subscriptions), with Stripe added for international customers. Must-support payment methods: UPI (50%+ of Indian digital payments — NPCI), debit/credit cards (Visa/Mastercard/RuPay), net banking, and BNPL (Simpl/LazyPay) for higher-AOV categories. For Shopify stores in India, Razorpay for Shopify or Cashfree for Shopify are the native options. Industry cart abandonment averages 70% (Baymard Institute) — reducing checkout steps and showing familiar payment logos are the highest-impact fixes."
                entity={['Razorpay', 'Cashfree', 'UPI', 'Shopify', 'WooCommerce', 'Cart Abandonment', 'Checkout', 'BNPL', 'Subscription', 'Stripe']}
              />

              <KeyTakeaways
                topic="Ecommerce Payments"
                points={[
                  'UPI is non-negotiable for Indian ecommerce — it accounts for 50%+ of digital payment volume and has zero MDR for merchants.',
                  'Average cart abandonment is 70% (Baymard Institute). Reducing checkout to 2–3 steps can recover 35%+ of abandoned carts.',
                  'Show payment method logos prominently at checkout — recognizable logos increase trust and conversion, especially for first-time buyers.',
                  'Never show unexpected fees at the final step — price surprise is the #1 cause of checkout abandonment.',
                  'For subscriptions: use Razorpay Subscriptions (UPI AutoPay) or Chargebee/Stripe Billing. Invest in dunning logic — involuntary churn from failed payments can be 20–30% of total churn.',
                  'Shopify merchants in India should use Razorpay or Cashfree native apps — Shopify Payments is not available in India.',
                ]}
              />

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 speakable">Payment Methods for Indian Ecommerce</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {methods.map(m => (
                    <div key={m.name} className={`border rounded-xl p-4 ${m.color} border-current/20`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">{m.icon}</span>
                        <div>
                          <p className="text-sm font-semibold">{m.name}</p>
                          <p className="text-xs opacity-70">{m.share} of digital payments</p>
                        </div>
                      </div>
                      <p className="text-xs opacity-70">{m.note}</p>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-2">Source: NPCI Payment System Indicators, Worldpay Global Payments Report</p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Checkout Optimization for Ecommerce</h2>
                <div className="space-y-3">
                  {[
                    { issue: 'Too many checkout steps', fix: 'Reduce to maximum 3 steps. Use address autocomplete and pre-filled forms for returning customers.' },
                    { issue: 'Unexpected fees at final step', fix: 'Show shipping cost, taxes, and total from the cart page. Never reveal new costs at checkout.' },
                    { issue: 'Unfamiliar payment methods', fix: 'Display logos of Visa, Mastercard, UPI, RuPay, and other trusted brands prominently near the payment form.' },
                    { issue: 'Forced account creation', fix: 'Always offer guest checkout. You can prompt account creation post-purchase.' },
                    { issue: 'Slow checkout page', fix: 'Optimize for Core Web Vitals. Use lazy-load for non-critical scripts. Target <2s LCP on checkout.' },
                    { issue: 'No one-click for returning buyers', fix: 'Implement saved cards (Razorpay/Stripe tokenization) and UPI AutoPay for subscription customers.' },
                  ].map((item, i) => (
                    <div key={i} className="bg-gray-50 border border-gray-100 rounded-xl p-4">
                      <p className="text-xs font-bold text-rose-600 mb-1">Problem: {item.issue}</p>
                      <p className="text-sm text-gray-600">{item.fix}</p>
                    </div>
                  ))}
                </div>
              </section>

              <FAQSection title="Ecommerce Payments — Common Questions" faqs={faqs} />
            </div>

            <aside className="space-y-6">
              <RelatedResources
                topics={['payment-gateway', 'payment-integration', 'payment-processing', 'payment-api', 'fintech']}
                articles={[
                  { title: '7 Checkout Changes That Actually Move Conversion Rates', href: '/#research' },
                  { title: 'Why Subscribers Leave Even When They Don\'t Want To', href: '/#featured' },
                  { title: 'Selling Internationally: Payment Setup Checklist', href: '/#featured' },
                  { title: 'Razorpay vs Cashfree: Best for Indian Ecommerce?', href: '/#featured' },
                ]}
              />

              <div className="bg-teal-600 rounded-xl p-5 text-white">
                <p className="text-xs font-semibold text-teal-200 mb-3">Checkout Stats (Baymard)</p>
                <div className="space-y-3">
                  <div><p className="text-2xl font-bold">70%</p><p className="text-xs text-teal-200">Average cart abandonment rate</p></div>
                  <div><p className="text-2xl font-bold">35%</p><p className="text-xs text-teal-200">Revenue recovery with optimized checkout</p></div>
                  <div><p className="text-2xl font-bold">+15%</p><p className="text-xs text-teal-200">AOV lift from BNPL at checkout</p></div>
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
