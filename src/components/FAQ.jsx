import { useState } from 'react'

const faqs = [
  {
    q: 'What is the best payment gateway for ecommerce in India?',
    a: 'For most Indian ecommerce businesses, Razorpay or Cashfree will be your starting point. Razorpay has more product depth — payment links, subscriptions, payouts, UPI AutoPay — and a stronger developer ecosystem. Cashfree is known for faster settlements, sometimes same-day. If you\'re also selling internationally, add Stripe alongside your Indian gateway. There\'s no universal best — it depends on your volume, category, and customer mix.',
  },
  {
    q: 'What\'s the actual difference between a payment gateway and a payment processor?',
    a: 'Think of the gateway as the door and the processor as the person moving money through it. The gateway captures your customer\'s card or UPI details at checkout and securely transmits them. The processor actually moves money between the customer\'s bank and yours. Most providers like Stripe and Razorpay do both, so you won\'t feel the distinction day-to-day — but it matters when fees are charged separately.',
  },
  {
    q: 'Stripe or Razorpay — which should I pick for India?',
    a: 'If your customers are mostly in India, go with Razorpay. It supports UPI, net banking, RuPay, and UPI AutoPay for subscriptions — none of which Stripe supports in India. For international sales or a global product, Stripe is the stronger choice. Many Indian businesses use both: Razorpay for domestic transactions, Stripe for international orders.',
  },
  {
    q: 'What is a Merchant of Record and do I need one?',
    a: 'A Merchant of Record (MoR) like Paddle or Lemon Squeezy acts as the legal seller of your product globally. They collect payments, handle VAT/GST in every country, file taxes, and send you the net revenue. The trade-off is a higher fee — usually 5%+ — vs ~2–3% with a direct gateway. If you sell software or digital products globally and want to avoid registering for tax in 40 countries, an MoR is likely worth it.',
  },
  {
    q: 'What payment methods should I support for Indian customers?',
    a: 'UPI is non-negotiable for India — it\'s the most-used digital payment method by a massive margin. Beyond UPI: debit and credit cards (RuPay, Visa, Mastercard), net banking, and major wallets. For subscriptions, UPI AutoPay (eMandate) is critical — it enables recurring debits that work like a standing order. Razorpay and Cashfree both support all of this natively.',
  },
  {
    q: 'Why are my subscribers churning even though they don\'t want to cancel?',
    a: 'This is involuntary churn — the subscription cancels not because the customer chose to leave, but because their card expired, their bank declined the charge, or they hit a temporary credit limit. Good billing platforms have retry logic (3 days, then 7 days), account updater services (Visa/Mastercard automatically update expired card details), and pre-dunning email sequences. Without these, you\'re losing subscribers who never meant to go.',
  },
  {
    q: 'Why are customers dropping off at my checkout page?',
    a: 'Usually it\'s one of: too many steps, a payment method they don\'t recognise or trust, surprise fees on the final screen, no saved card option for return buyers, or a checkout that looks different from the rest of your site. The fix: cut steps, show familiar payment logos early, offer the payment method your customer actually uses, and never reveal fees they didn\'t see coming.',
  },
  {
    q: 'What PCI compliance do I need for my online store?',
    a: 'If you use a hosted checkout from Razorpay, Stripe, or PayPal — the customer is redirected to their payment page — you qualify for SAQ A, the simplest level. Just a short self-assessment once a year. Embedding card fields via JS SDK (like Stripe Elements or Razorpay Checkout.js) puts you on SAQ A-EP. Full SAQ D only applies if you store raw card data on your servers, which modern integrations should never do.',
  },
  {
    q: 'How do payment gateway fees actually work — what am I really paying?',
    a: 'The transaction fee is the headline number (Razorpay ~2%, Stripe 2.9% + 30¢) but rarely the whole story. Also check: FX conversion fees (1–1.5% on international cards), chargeback fees (₹500–₹1000 or $15 per dispute), refund fees (some gateways keep the original transaction fee), monthly platform fees, and settlement frequency charges for daily payouts. Add these at your actual transaction mix before comparing providers.',
  },
]

export default function FAQ({ limit }) {
  const [open, setOpen] = useState(0)
  const displayed = limit ? faqs.slice(0, limit) : faqs

  return (
    <section id="faq" className="py-20 lg:py-28 bg-gray-950 relative overflow-hidden">
      <div className="line-grid absolute inset-0 pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Left */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span className="text-xs font-semibold text-indigo-300 tracking-wide uppercase">Common Questions</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
              Questions people{' '}
              <span className="gradient-text">actually Google about payments</span>
            </h2>
            <p className="mt-4 text-base text-gray-400 leading-relaxed">
              Straight answers — no fluff, no "it depends on your use case" without actually explaining what it depends on.
            </p>

            <div className="mt-8 p-5 bg-gray-900/60 border border-white/8 rounded-2xl">
              <p className="text-xs text-gray-500 leading-relaxed">
                Can't find your answer?{' '}
                <a href="mailto:accounts@parivestra.com" className="text-indigo-400 hover:text-indigo-300 transition-colors font-medium">
                  Write to us
                </a>{' '}
                and we'll cover it in a guide.
              </p>
            </div>
          </div>

          {/* Right — accordion */}
          <div className="lg:col-span-2 space-y-3">
            {displayed.map((faq, i) => (
              <div
                key={faq.q}
                className={`bg-gray-900/60 border rounded-2xl overflow-hidden transition-all duration-200 ${
                  open === i ? 'border-indigo-500/30 bg-gray-900/90' : 'border-white/8 hover:border-white/14'
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full flex items-start justify-between gap-4 px-6 py-5 text-left"
                  aria-expanded={open === i}
                >
                  <span className={`text-sm font-semibold leading-snug transition-colors ${open === i ? 'text-white' : 'text-gray-200'}`}>
                    {faq.q}
                  </span>
                  <div className={`shrink-0 w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-200 mt-0.5 ${
                    open === i ? 'border-indigo-500/50 bg-indigo-500/15 rotate-180' : 'border-white/15 bg-white/5'
                  }`}>
                    <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>

                {open === i && (
                  <div className="px-6 pb-5 border-t border-white/6">
                    <p className="text-sm text-gray-400 leading-relaxed pt-4">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
