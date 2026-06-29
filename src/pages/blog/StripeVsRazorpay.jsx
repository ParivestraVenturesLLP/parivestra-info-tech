import BlogPostLayout, {
  H2, H3, P, Ul, CalloutBox, CompareTable, Verdict,
  FAQSection, KeyTakeaways, AIAnswerBlock,
} from '../../components/blog/BlogPostLayout'

const faqs = [
  {
    q: 'Should I use Stripe or Razorpay for my Indian ecommerce store?',
    a: 'If your customers are primarily in India, use Razorpay. It supports UPI, net banking, RuPay, and UPI AutoPay — payment methods that Stripe does not support in India. UPI alone accounts for 50%+ of digital payments in India. If you\'re selling internationally or building a global-first product, Stripe is the stronger choice. Many Indian businesses use both: Razorpay for domestic transactions and Stripe for international orders.',
  },
  {
    q: 'Does Stripe work in India?',
    a: 'Yes, Stripe is available in India and works for Indian businesses. However, Stripe in India does not support UPI, net banking, or RuPay cards — which means you\'ll miss the majority of Indian payment preferences. Stripe is best used by Indian businesses for accepting international payments (USD, EUR, GBP) from overseas customers, while Razorpay or Cashfree handles domestic INR transactions.',
  },
  {
    q: 'Which has better developer experience — Stripe or Razorpay?',
    a: 'Stripe has the best developer experience globally — its documentation, SDKs, local testing with Stripe CLI, and API design are industry-leading. Razorpay\'s developer experience has improved significantly and is excellent for Indian integrations. If you\'re building for India specifically, Razorpay\'s docs are more relevant. For a global product, Stripe\'s ecosystem (Stripe Connect, Stripe Billing, Stripe Radar) is deeper.',
  },
  {
    q: 'Can I use both Stripe and Razorpay together?',
    a: 'Yes, and many Indian businesses do. A common setup: detect the customer\'s currency/location at checkout, route INR transactions through Razorpay (for UPI, domestic cards, net banking) and USD/international transactions through Stripe. This requires a simple if-else in your checkout flow and separate API credentials for each gateway. Some payment orchestration platforms (like Juspay) can manage this routing automatically.',
  },
  {
    q: 'What are Stripe\'s fees in India?',
    a: 'Stripe\'s pricing in India: 2% for domestic card transactions + 1.5% for international cards on top. For cross-border transactions from Indian merchants to international customers, it\'s typically 2.9% + $0.30 (if settled in USD). There\'s also a currency conversion fee of 1–1.5% when converting to INR. Compare this to Razorpay\'s ~2% flat for domestic cards with no currency conversion needed.',
  },
]

export default function StripeVsRazorpay() {
  return (
    <BlogPostLayout
      seo={{
        title: 'Stripe vs Razorpay: A Real Comparison for Indian Ecommerce Brands (2026)',
        description: 'Stripe vs Razorpay: which payment gateway is right for your Indian ecommerce or SaaS business? Full comparison of UPI support, pricing, developer experience, settlement times, and when to use both.',
        canonical: '/blog/stripe-vs-razorpay',
        keywords: 'Stripe vs Razorpay, Stripe India, Razorpay vs Stripe, best payment gateway India, Stripe UPI, Razorpay developer experience, Stripe pricing India, Razorpay pricing, Indian ecommerce payment gateway',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: 'Stripe vs Razorpay', path: '/blog/stripe-vs-razorpay' },
        ],
      }}
      meta={{
        tag: 'Gateway Comparison',
        tagColor: 'bg-violet-100 text-violet-700',
        category: 'Payment Gateway Guides',
        readTime: '12 min',
        date: '2026-05-20',
      }}
      sidebar={{
        resources: {
          topics: ['payment-gateway', 'payment-api', 'payment-integration', 'ecommerce-payments'],
          articles: [
            { title: 'Razorpay vs Cashfree vs PayU Comparison', href: '/blog/razorpay-vs-cashfree-vs-payu' },
            { title: 'Paddle vs Stripe for SaaS', href: '/blog/paddle-vs-stripe-saas' },
            { title: 'Payment API Integration Guide', href: '/topics/payment-api' },
            { title: 'UPI AutoPay: Subscription Billing India', href: '/blog/upi-autopay-subscriptions' },
          ],
        },
        stats: {
          label: 'Key Numbers',
          items: [
            { value: '50%+', note: 'India digital payments via UPI' },
            { value: '2%', note: 'Stripe domestic India MDR' },
            { value: '0%', note: 'UPI MDR (Razorpay)' },
          ],
        },
      }}
      faqs={faqs}
    >
      <h1 className="text-3xl lg:text-[36px] font-bold text-gray-900 tracking-tight leading-tight mb-6" itemProp="headline">
        Stripe vs Razorpay: A Real Comparison for Indian Ecommerce Brands (2026)
      </h1>

      <AIAnswerBlock
        question="Stripe vs Razorpay — which is better for Indian ecommerce?"
        answer="For Indian customers: Razorpay wins clearly. It supports UPI (50%+ of Indian digital payments), net banking, RuPay cards, and UPI AutoPay for subscriptions — none of which Stripe supports in India. For international customers or a global-first product: Stripe wins on developer experience, ecosystem depth, and global payment method coverage. The most common setup for Indian businesses is both: Razorpay for domestic INR transactions, Stripe for international orders."
        entity={['Stripe', 'Razorpay', 'UPI', 'RuPay', 'Payment Intents', 'UPI AutoPay', 'India', 'MDR', 'International Payments', 'Stripe Billing']}
      />

      <KeyTakeaways
        topic="Stripe vs Razorpay"
        points={[
          'Razorpay is the clear winner for Indian customers — it supports UPI, net banking, and RuPay which Stripe does not offer in India.',
          'Stripe is the stronger choice for international sales and developer teams building global products.',
          'UPI accounts for 50%+ of India\'s digital payment volume (NPCI 2025). A gateway that doesn\'t support UPI loses majority of Indian users.',
          'Stripe has marginally better developer experience globally; Razorpay is equally excellent for Indian-specific integrations.',
          'Many Indian businesses use both — Razorpay for domestic, Stripe for international — with a routing layer.',
          'Stripe Billing is more mature than Razorpay Subscriptions for complex SaaS billing scenarios, but Razorpay\'s UPI AutoPay is essential for Indian subscription users.',
        ]}
      />

      <H2>The Core Question</H2>
      <P>
        Stripe vs Razorpay is the most-searched payment gateway comparison in India — and the answer is almost never "one or the other." It depends entirely on who your customers are and where they're paying from.
      </P>
      <P>
        India's payment landscape is fundamentally different from the US and Europe. UPI dominates with 50%+ of digital transaction volume. Net banking and RuPay cards are widely used. Stripe — despite being available in India — does not support any of these methods. That's not a minor gap; it's a dealbreaker for any business with primarily Indian customers.
      </P>
      <P>
        Razorpay, meanwhile, was built for India. It understands the payment methods, the banking relationships, and the compliance requirements. But it doesn't have Stripe's global reach or the depth of Stripe's ecosystem for international SaaS products.
      </P>

      <H2>Head-to-Head Comparison</H2>
      <CompareTable
        headers={['Feature', 'Stripe', 'Razorpay']}
        rows={[
          ['UPI Support', '✗ Not available in India', '✓ Full UPI support'],
          ['UPI AutoPay (Subscriptions)', '✗ No', '✓ Yes — full mandate support'],
          ['Net Banking (India)', '✗ No', '✓ 60+ banks'],
          ['RuPay Cards', '✗ No', '✓ Yes'],
          ['International Cards', '✓ 135+ currencies', '✓ Yes (via int\'l acquiring)'],
          ['Domestic Card MDR', '~2% + handling', '~2% flat'],
          ['Standard Settlement', 'T+2 (US); varies India', 'T+2 (T+1 available)'],
          ['Wallets (Paytm, PhonePe)', '✗ No', '✓ Yes'],
          ['BNPL India (Simpl, LazyPay)', '✗ No', '✓ Yes'],
          ['Developer Experience', '★★★★★ (Global best)', '★★★★☆ (India-excellent)'],
          ['Stripe Billing / Subscriptions', '★★★★★ (Most mature)', '★★★★☆ (India-strong)'],
          ['Payment Links', '✓ Yes', '✓ Yes'],
          ['Payouts / Disbursements', '✓ Stripe Connect', '✓ RazorpayX'],
          ['Fraud Detection', '✓ Stripe Radar (ML)', '✓ Razorpay Shield'],
          ['Shopify Native', '✓ Yes (global)', '✓ Yes (India)'],
          ['Sandbox / Test Mode', '✓ Excellent + CLI', '✓ Good'],
          ['RBI PA License', '✗ (Foreign entity)', '✓ RBI licensed'],
        ]}
      />

      <H2>Razorpay Deep Dive</H2>
      <P>
        Razorpay was founded in 2014 specifically to solve Indian payment infrastructure. It holds an RBI Payment Aggregator license, which matters for compliance and bank relationships. Over the past decade it's expanded from a basic gateway to a full financial stack including business banking (RazorpayX), payouts, capital loans, and corporate cards.
      </P>

      <H3>Where Razorpay Wins</H3>
      <Ul items={[
        'UPI support is comprehensive — QR codes, collect requests, UPI Deep Links, and UPI AutoPay (eMandate) for subscriptions.',
        'UPI is free to merchants (0% MDR mandated by government) — a significant cost advantage over card payments.',
        'Full Indian payment stack: net banking (60+ banks), wallets (Paytm, PhonePe, Amazon Pay, Mobikwik), BNPL, EMI on cards and cardless.',
        'UPI AutoPay is the primary way to do subscription billing for Indian users. Razorpay\'s implementation is the most mature in the market.',
        'RazorpayX provides business bank accounts with integrated payouts — useful for platforms paying vendors or creators.',
        'Handles Indian compliance: KYC for onboarding, TDS reconciliation, GST invoicing APIs.',
      ]} />

      <H3>Where Razorpay Falls Short</H3>
      <Ul items={[
        'International payment acceptance is limited compared to Stripe. Not as strong for USD-denominated SaaS products.',
        'Product ecosystem (Radar-equivalent fraud ML, Stripe Connect for marketplace payouts) is less mature globally.',
        'Documentation quality, while good, doesn\'t match Stripe\'s best-in-class global developer experience.',
      ]} />

      <H2>Stripe Deep Dive</H2>
      <P>
        Stripe is the global standard for developer-first payment infrastructure. Its API design, documentation, testing tools (Stripe CLI), and product breadth (Billing, Radar, Connect, Issuing, Terminal) are unmatched. For a SaaS company building a global product, Stripe is almost always the right choice.
      </P>

      <H3>Where Stripe Wins</H3>
      <Ul items={[
        'Best-in-class developer experience worldwide — documentation, SDKs, Stripe CLI for local webhook testing, and a consistent API design.',
        'Stripe Billing is the most mature subscription billing platform — supports complex pricing models (usage-based, tiered, flat fee), trials, coupons, and enterprise billing.',
        'Stripe Connect handles marketplace payouts to global recipients in 30+ countries.',
        'Stripe Radar provides ML-based fraud detection that improves with transaction volume.',
        'Supports 135+ currencies and 40+ local payment methods globally (iDEAL, SEPA, Klarna, Alipay, etc.).',
        'Stripe Payment Intents API is the global standard for SCA/3DS2 compliance required in Europe (PSD2).',
      ]} />

      <H3>Where Stripe Falls Short in India</H3>
      <Ul items={[
        'No UPI support. Full stop. This is the biggest gap for any India-focused business.',
        'No net banking support in India.',
        'No RuPay card support.',
        'No BNPL integration with Indian providers (Simpl, LazyPay, ZestMoney).',
        'Not an RBI-licensed Payment Aggregator — matters for certain compliance requirements.',
        'MDR for domestic India card transactions is competitive but currency conversion adds cost for INR settlement.',
      ]} />

      <CalloutBox title="The Practical Answer for Indian Businesses" color="indigo">
        <strong>India-only business:</strong> Use Razorpay. Don't overthink it. UPI is 50%+ of your payment volume and Stripe can't support it. <br /><br />
        <strong>Global SaaS (billing in USD):</strong> Use Stripe. Billing, Connect, Radar — it's the best stack for subscription software businesses. <br /><br />
        <strong>Indian business with international customers:</strong> Use both. Razorpay for INR domestic, Stripe for USD/EUR international. Route at checkout based on detected currency/country.
      </CalloutBox>

      <H2>Integration Complexity: Stripe vs Razorpay</H2>
      <P>
        Both gateways offer similar integration approaches — hosted checkout (redirect), embedded JS SDK (within your page), and direct REST API. The flows are similar but with important differences:
      </P>

      <H3>Stripe Integration Flow</H3>
      <Ul items={[
        'Create a PaymentIntent server-side with amount, currency, payment_method_types.',
        'Return the client_secret to the frontend.',
        'Use Stripe.js + Stripe Elements to render payment form.',
        'Call stripe.confirmPayment() with the client_secret.',
        'Handle payment_intent.succeeded webhook for fulfillment.',
        'Use Stripe CLI (stripe listen --forward-to localhost:3000/webhook) for local testing.',
      ]} />

      <H3>Razorpay Integration Flow</H3>
      <Ul items={[
        'Create an Order server-side with amount, currency, receipt using Razorpay Orders API.',
        'Return order_id to the frontend.',
        'Load Razorpay Checkout.js and open checkout with the order_id.',
        'On payment success, receive razorpay_payment_id, razorpay_order_id, razorpay_signature.',
        'Verify signature server-side: HMAC-SHA256(order_id + "|" + payment_id, key_secret).',
        'Handle payment.captured webhook for async fulfillment.',
      ]} />

      <Verdict title="Use Razorpay for India. Use Stripe globally. Use both if you have both markets." color="violet">
        There's no single winner — the right answer depends on your market. Razorpay is non-negotiable for Indian customer-facing payments because of UPI. Stripe is non-negotiable for global SaaS or international customer acceptance. Most successful Indian digital businesses will end up using both as they scale. Set up Razorpay first. Add Stripe when you start getting meaningful international volume.
      </Verdict>

      <FAQSection title="Stripe vs Razorpay — Common Questions" faqs={faqs} />
    </BlogPostLayout>
  )
}
