import { useState } from 'react'

const faqs = [
  {
    q: 'What is the best payment gateway for ecommerce in India?',
    a: 'For most Indian ecommerce businesses, Razorpay or Cashfree will be your starting point. Razorpay has more product depth — payment links, subscriptions, payouts, UPI AutoPay — and a stronger developer ecosystem. Cashfree is known for faster settlements, sometimes same-day. If you\'re also selling internationally, you\'ll want to add Stripe alongside your Indian gateway. PayPal is worth including if a chunk of your customers are overseas. There\'s no universal best — it depends on your volume, category, and who your customers are.',
  },
  {
    q: 'What\'s the actual difference between a payment gateway and a payment processor?',
    a: 'Think of the gateway as the door and the processor as the person moving money through it. The gateway captures your customer\'s card details at checkout and securely sends them forward. The processor actually moves money between the customer\'s bank and yours. In practice, most providers like Stripe and Razorpay do both — so you won\'t feel the distinction in your day-to-day. But it matters when you\'re evaluating fees, because sometimes they\'re charged separately.',
  },
  {
    q: 'Stripe or Razorpay — which should I pick?',
    a: 'If your customers are mostly in India, go with Razorpay. It supports UPI, net banking, RuPay, and UPI AutoPay for subscriptions — none of which Stripe supports in India. If you\'re primarily selling internationally or building a product for a global market, Stripe is the stronger choice. Many Indian businesses end up using both: Razorpay for domestic transactions, Stripe for international orders. That\'s a reasonable setup if your volume justifies managing two integrations.',
  },
  {
    q: 'What is a Merchant of Record and do I need one?',
    a: 'A Merchant of Record (MoR) like Paddle or Lemon Squeezy acts as the legal seller of your product. They collect the payment, handle VAT/GST in every country, file the taxes, and send you the net revenue. You don\'t have to register for tax in 40 countries or think about compliance. The trade-off is a higher fee — usually 5%+ — versus ~2–3% with a direct gateway. If you sell software or digital products globally and the idea of tracking VAT in Germany, Australia, and Canada separately sounds like a nightmare, an MoR is probably worth it.',
  },
  {
    q: 'What payment methods should I support for Indian customers?',
    a: 'UPI is non-negotiable for India right now — it\'s the most used digital payment method in the country by a huge margin. Beyond UPI: debit and credit cards (RuPay, Visa, Mastercard), net banking, and at least a couple of major wallets. If you\'re running subscriptions, UPI AutoPay (Mandate) is critical — it lets you set up recurring debits that work exactly like a standing order. Razorpay and Cashfree both support all of this natively.',
  },
  {
    q: 'Why are my subscribers churning even though they don\'t want to cancel?',
    a: 'This is called involuntary churn and it\'s more common than most founders realize. The subscription doesn\'t cancel because the customer decided to leave — it cancels because their card expired, their bank declined the charge, or they hit a credit limit temporarily. Good billing platforms have retry logic (they try again in 3 days, then 7 days), account updater services (Visa/Mastercard automatically update card details), and a pre-dunning email sequence. If your billing setup doesn\'t have these, you\'re losing subscribers who never meant to go.',
  },
  {
    q: 'Why are customers dropping off at my checkout page?',
    a: 'Usually it\'s one of these: too many steps before the payment, a payment method they don\'t recognize or trust, unexpected fees showing up at the last screen, no saved card option for return buyers, or the checkout looks different from the rest of your site. The fix is almost always: cut steps, show familiar payment logos early, offer the payment method your customer actually uses, and never surprise people with fees they didn\'t see coming. One-click checkout for returning customers also makes a big difference at scale.',
  },
  {
    q: 'What PCI compliance do I need for my online store?',
    a: 'If you use a hosted checkout page from Razorpay, Stripe, PayPal, or similar — meaning the customer is redirected to their page to pay — you qualify for SAQ A. That\'s the lightest path: just fill out a short self-assessment questionnaire once a year. If you embed card fields inside your own page using their JS SDK (like Stripe Elements or Razorpay Checkout.js), you\'re usually on SAQ A-EP, which is slightly more involved. The full PCI DSS requirements (SAQ D) only apply if you\'re actually storing raw card data on your servers — which almost no modern ecommerce business should be doing.',
  },
  {
    q: 'How do payment gateway fees actually work — what am I really paying?',
    a: 'The transaction fee is usually the headline number (Razorpay charges ~2%, Stripe charges 2.9% + 30¢) but it\'s rarely the whole story. Also check: currency conversion fees (usually 1–1.5% on top for international cards), chargeback fees (₹500–₹1000 or $15 per dispute), refund fees (some gateways don\'t return the original transaction fee), monthly platform fees, and settlement frequency charges if you want daily payouts. Add all of these up at your actual transaction mix before comparing providers.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState(0)

  return (
    <section id="faq" className="py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
              <span className="text-xs font-semibold text-indigo-700 tracking-wide uppercase">Common Questions</span>
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight">
              Questions people actually{' '}
              <span className="gradient-text">Google about payments</span>
            </h2>
            <p className="mt-4 text-base text-gray-500 leading-relaxed">
              Straight answers — no fluff, no "it depends on your use case" without actually explaining what it depends on.
            </p>
            <div className="mt-8 p-5 bg-indigo-50 border border-indigo-100 rounded-xl">
              <p className="text-sm font-semibold text-indigo-900 mb-1">Want the full breakdown?</p>
              <p className="text-xs text-indigo-700 leading-relaxed mb-3">
                Each of these topics has a full guide in the research hub with real numbers, comparisons, and step-by-step walkthroughs.
              </p>
              <a href="#research" className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-700 hover:text-indigo-900">
                Browse all guides
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-2 space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border rounded-xl overflow-hidden transition-all duration-200 ${
                  open === i ? 'border-indigo-200 bg-indigo-50/40' : 'border-gray-100 bg-white hover:border-gray-200'
                }`}
              >
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full text-left px-5 py-4 flex items-start justify-between gap-4"
                >
                  <span className="text-sm font-semibold text-gray-900 leading-snug">{faq.q}</span>
                  <div className={`shrink-0 w-6 h-6 rounded-full flex items-center justify-center border transition-all duration-200 ${
                    open === i ? 'bg-indigo-600 border-indigo-600 text-white' : 'border-gray-200 text-gray-400'
                  }`}>
                    <svg className={`w-3 h-3 transition-transform duration-200 ${open === i ? 'rotate-45' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>
                {open === i && (
                  <div className="px-5 pb-5">
                    <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
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
