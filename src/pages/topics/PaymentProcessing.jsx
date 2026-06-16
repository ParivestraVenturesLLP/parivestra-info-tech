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
    q: 'What is payment processing?',
    a: 'Payment processing is the end-to-end sequence of steps that moves money from a customer\'s bank or digital wallet to a merchant\'s account when a purchase is made. It involves: (1) data capture at checkout, (2) encryption and secure transmission, (3) authorization by the issuing bank, (4) clearing (calculating net amounts), and (5) settlement (actual fund transfer). Modern payment processors like Stripe, Razorpay, and Adyen handle all of these steps.',
  },
  {
    q: 'What is the difference between payment processing and payment gateway?',
    a: 'The payment gateway is the interface that captures payment data at checkout and transmits it securely (think: the door). The payment processor is the entity that actually executes the fund transfer between banks (think: the moving truck). In practice, most modern platforms (Stripe, Razorpay) are both gateway and processor bundled together, so merchants rarely need to engage them separately.',
  },
  {
    q: 'How long does payment processing take?',
    a: 'Authorization (the yes/no from the bank) happens in under 3 seconds. Settlement — the actual transfer of funds to the merchant\'s bank account — takes 1–3 business days for most gateways. Cashfree Payments offers same-day or instant settlements in India. Stripe typically settles in 2 business days in the US. International transactions may take 3–5 business days due to SWIFT processing.',
  },
  {
    q: 'What is payment authorization vs settlement?',
    a: 'Authorization is the bank\'s real-time approval that a customer has sufficient funds and approves the transaction — it happens in under 3 seconds but no money has moved yet. Settlement is the actual transfer of funds from the customer\'s bank to the merchant\'s acquiring bank — this takes 1–3 business days. Between authorization and settlement, the funds are "held" (reserved) in the customer\'s account.',
  },
  {
    q: 'What is a payment processor\'s MDR (Merchant Discount Rate)?',
    a: 'MDR (Merchant Discount Rate) is the percentage fee a payment processor charges per transaction. In India: domestic UPI transactions have 0% MDR (government mandate). Debit cards: 0%–0.9% depending on transaction size. Credit cards: 1.5%–2.5%. International cards: 2.5%–3.5%. MDR is how payment processors and gateways make money on each transaction.',
  },
]

export default function PaymentProcessingTopic() {
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Topics', path: '/#ecosystem' },
    { name: 'Payment Processing', path: '/topics/payment-processing' },
  ]

  return (
    <>
      <SEOHead
        title="Payment Processing — How It Works, Authorization, Settlement & Fees"
        description="Complete guide to payment processing: how authorization and settlement work, payment processing fees (MDR), difference between gateway and processor, and how to choose the right payment processing solution for your ecommerce business."
        canonical="/topics/payment-processing"
        keywords="payment processing, payment processor, how payment processing works, payment authorization, payment settlement, MDR merchant discount rate, payment processing fees, online payment processing, credit card processing"
        breadcrumbs={breadcrumbs}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: 'Payment Processing — Complete Guide',
          description: 'How payment processing works: authorization, clearing, settlement, fees, and how to choose the right payment processor for your business.',
          url: 'https://blog.parivestra.com/topics/payment-processing',
          about: { '@type': 'Thing', name: 'Payment Processor', sameAs: 'https://en.wikipedia.org/wiki/Payment_processor' },
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
              <li className="text-gray-900 font-medium">Payment Processing</li>
            </ol>
          </div>
        </nav>

        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-100 rounded-full px-4 py-1.5 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-500" />
                <span className="text-xs font-semibold text-cyan-700 tracking-wide uppercase">Topic Hub</span>
              </div>

              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-4">
                Payment Processing
              </h1>

              <p className="text-lg text-gray-500 leading-relaxed mb-8 speakable">
                Payment processing is the complete cycle of steps that enables a merchant to receive funds from a customer's payment. It spans real-time authorization, clearing, and settlement — turning a customer's tap-to-pay or card entry into actual money in a merchant's bank account.
              </p>

              <AIAnswerBlock
                question="How does payment processing work end-to-end?"
                answer="Payment processing involves 5 stages: (1) A customer initiates payment at checkout by entering card/UPI details. (2) The payment gateway encrypts the data and sends it to the payment processor. (3) The processor routes it to the card network (Visa/Mastercard) or UPI network (NPCI), which forwards it to the customer's issuing bank for authorization. (4) The bank approves or declines — response returned in under 3 seconds. (5) Approved transactions are cleared and settled to the merchant's bank account within 1–3 business days. Payment processors like Stripe, Razorpay, and Adyen manage all of these steps."
                entity={['Authorization', 'Settlement', 'Clearing', 'MDR', 'Issuing Bank', 'Acquiring Bank', 'Card Network', 'UPI', 'NPCI', 'Chargeback']}
              />

              <KeyTakeaways
                topic="Payment Processing"
                points={[
                  'Authorization (bank approval) happens in <3 seconds. Settlement (actual money transfer) takes 1–3 business days.',
                  'MDR (Merchant Discount Rate) is the processing fee: 0% for UPI in India (government mandate), 1.75%–2% for domestic cards, 2.5%–3.5% for international cards.',
                  'Payment processors and payment gateways are often the same company (Stripe, Razorpay) but technically serve different functions in the processing chain.',
                  'Failed authorizations are common (10–30% of transactions) — caused by insufficient funds, suspected fraud, or expired cards. Smart retry logic can recover many failed payments.',
                  'Chargebacks occur when a customer disputes a charge. Merchants typically pay ₹500–₹1,000 per chargeback dispute fee, win rates average 20–40%.',
                  'PCI DSS compliance is required for all merchants who accept card payments — SAQ A is the lightest path for hosted checkout users.',
                ]}
              />

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 speakable">The 5 Stages of Payment Processing</h2>
                <div className="space-y-4">
                  {[
                    { stage: 'Initiation', color: 'bg-indigo-500', desc: 'Customer enters payment details (card, UPI, wallet) at the merchant\'s checkout.' },
                    { stage: 'Authorization', color: 'bg-violet-500', desc: 'Gateway encrypts data, processor routes it to the card network and issuing bank for real-time approval.' },
                    { stage: 'Authentication', color: 'bg-blue-500', desc: 'For cards: 3DS2 verification may trigger. For UPI: customer approves in their UPI app.' },
                    { stage: 'Clearing', color: 'bg-cyan-500', desc: 'The transaction is confirmed and net amounts calculated after network and processor fees.' },
                    { stage: 'Settlement', color: 'bg-emerald-500', desc: 'Funds transferred to the merchant\'s acquiring bank account. Timeline: same-day to T+3 days.' },
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className={`shrink-0 w-8 h-8 rounded-full ${item.color} flex items-center justify-center text-white text-xs font-bold`}>
                        {i + 1}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-gray-900">{item.stage}</p>
                        <p className="text-sm text-gray-500">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Processing Fees in India</h2>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border border-gray-100 rounded-xl overflow-hidden">
                    <thead>
                      <tr className="bg-gray-50 text-left">
                        <th className="px-4 py-3 text-xs font-semibold text-gray-600">Payment Method</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-600">MDR / Fee</th>
                        <th className="px-4 py-3 text-xs font-semibold text-gray-600">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                      {[
                        ['UPI', '0%', 'Government mandate — no MDR for UPI in India'],
                        ['Debit Card (RuPay)', '0%–0.9%', 'Waived for small transactions under ₹2,000'],
                        ['Domestic Credit Card', '1.75%–2.5%', 'Varies by gateway and card network'],
                        ['Net Banking', '1%–1.75%', 'Bank-specific MDR applies'],
                        ['International Card', '2.5%–3.5%', 'Includes currency conversion fee'],
                        ['Wallets (Paytm etc.)', '1%–1.75%', 'Loaded wallet transactions'],
                      ].map(([method, fee, note]) => (
                        <tr key={method} className="hover:bg-gray-50">
                          <td className="px-4 py-3 font-medium text-gray-900 text-sm">{method}</td>
                          <td className="px-4 py-3 text-indigo-700 font-semibold text-sm">{fee}</td>
                          <td className="px-4 py-3 text-gray-500 text-xs">{note}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-xs text-gray-400 mt-2">Source: Razorpay, Cashfree, RBI payment regulations (2025)</p>
              </section>

              <FAQSection title="Payment Processing — Common Questions" faqs={faqs} />
            </div>

            <aside className="space-y-6">
              <RelatedResources
                topics={['payment-gateway', 'payment-integration', 'ecommerce-payments', 'payment-api', 'fintech']}
                articles={[
                  { title: 'Payment Gateway vs Payment Processor: Key Differences', href: '/topics/payment-gateway' },
                  { title: 'How to Reduce Failed Payment Authorizations', href: '/#research' },
                  { title: 'Chargeback Management for Ecommerce Merchants', href: '/#research' },
                  { title: 'UPI Processing: How India\'s Real-Time Payments Work', href: '/#ecosystem' },
                ]}
              />

              <div className="bg-white border border-gray-100 rounded-xl p-5">
                <p className="text-xs font-bold text-gray-700 uppercase tracking-wide mb-3">Processing Terminology</p>
                <div className="space-y-2 text-xs text-gray-600">
                  <p><strong>Authorization:</strong> Real-time bank approval</p>
                  <p><strong>Settlement:</strong> Actual fund transfer to merchant</p>
                  <p><strong>MDR:</strong> Merchant Discount Rate (transaction fee)</p>
                  <p><strong>Chargeback:</strong> Customer-disputed transaction reversal</p>
                  <p><strong>Acquirer:</strong> Merchant's bank/processor</p>
                  <p><strong>Issuer:</strong> Customer's bank that issued the card</p>
                  <p><strong>3DS2:</strong> Strong customer authentication standard</p>
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
