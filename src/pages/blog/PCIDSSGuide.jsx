import BlogPostLayout, {
  H2, H3, P, Ul, CalloutBox, CompareTable, Verdict,
  FAQSection, KeyTakeaways, AIAnswerBlock,
} from '../../components/blog/BlogPostLayout'

const faqs = [
  {
    q: 'PCI DSS kya hai aur mujhe kyun chahiye?',
    a: 'PCI DSS (Payment Card Industry Data Security Standard) ek security standard hai jo Visa, Mastercard, Amex, aur Discover ne banaya hai card payment data protect karne ke liye. Agar aap online payments accept karte ho — chahe direct ya hosted gateway ke through — technically aapko PCI compliance maintain karna hoga. SAQ A (simplest path) ek annual self-assessment questionnaire hai — ek page, koi audit nahi. Zyada merchants yahi path follow karte hain.',
  },
  {
    q: 'SAQ A aur SAQ A-EP mein kya farak hai?',
    a: 'SAQ A tab apply hota hai jab customers aapki site se gateway ki hosted payment page pe redirect hote hain (e.g., Razorpay hosted checkout, Stripe Checkout). Aapka server card data touch nahi karta. SAQ A-EP tab apply hota hai jab aap JavaScript SDK use karte ho (Stripe Elements, Razorpay Checkout.js) jo aapki page mein embed hote hain, lekin card data directly aapke server pe nahi jata. SAQ A-EP mein zyada requirements hain lekin abhi bhi manageable hai. Full SAQ D sirf tab apply hota hai jab aap raw card data store ya transmit karte ho apne servers pe.',
  },
  {
    q: 'Kya Shopify use karna PCI compliant hai?',
    a: 'Haan. Shopify khud PCI DSS Level 1 certified hai — sabse highest level. Agar aap Shopify Payments ya Razorpay for Shopify ya Cashfree for Shopify use karte ho, aap automatically SAQ A path pe hote ho. Shopify ki hosted checkout page pe payment hota hai, toh card data aapke store ke servers pe nahi aata. Aapko khud koi separate PCI certification nahi karni hoti.',
  },
  {
    q: 'Indian payment gateways PCI compliant hain?',
    a: 'Haan. Razorpay, Cashfree, PayU — sabhi RBI-licensed payment aggregators PCI DSS Level 1 certified hain. Yeh highest certification level hai. Inka compliance aapko card data handling ke liye protect karta hai jab tum inke hosted checkout ya JavaScript SDK use karte ho. Hamesha confirm karo ki gateway ka current PCI compliance certificate valid hai.',
  },
  {
    q: 'PCI compliance violation pe kya penalty hoti hai?',
    a: 'Non-compliance penalties card networks (Visa/Mastercard) set karte hain, directly merchants pe nahi — banks aur acquirers ke through. Data breach hone pe: $5,000–$100,000 per month fine acquirer pe, jo merchant pe pass hoti hai. Forensic investigation cost ($20,000+). Compensation to banks for card reissue. Chargeback liability shift. Reputational damage. India mein RBI ne bhi payment data localization aur security requirements enforce ki hain Payment Aggregator guidelines mein.',
  },
]

export default function PCIDSSGuide() {
  return (
    <BlogPostLayout
      seo={{
        title: 'PCI Compliance for Ecommerce Store Owners: What You Actually Have to Do',
        description: 'Simple PCI DSS compliance guide for ecommerce merchants: SAQ A vs SAQ A-EP vs SAQ D explained, what triggers each, how hosted checkout keeps you compliant, and what Indian payment gateways require.',
        canonical: '/blog/pci-dss-ecommerce',
        keywords: 'PCI DSS ecommerce, PCI compliance India, SAQ A ecommerce, payment security compliance, PCI DSS for Shopify, Razorpay PCI compliance, card payment security, PCI certification India',
        breadcrumbs: [
          { name: 'Home', path: '/' },
          { name: 'Blog', path: '/blog' },
          { name: 'PCI DSS Guide', path: '/blog/pci-dss-ecommerce' },
        ],
      }}
      meta={{
        tag: 'Quick Guide',
        tagColor: 'bg-orange-100 text-orange-700',
        category: 'Payment Compliance',
        readTime: '9 min',
        date: '2026-06-05',
      }}
      sidebar={{
        resources: {
          topics: ['payment-gateway', 'payment-integration', 'ecommerce-payments'],
          articles: [
            { title: 'Razorpay vs Cashfree: Which Gateway for India?', href: '/blog/razorpay-vs-cashfree-vs-payu' },
            { title: 'Payment Integration Security Checklist', href: '/topics/payment-integration' },
            { title: 'Stripe vs Razorpay Full Comparison', href: '/blog/stripe-vs-razorpay' },
          ],
        },
        stats: {
          label: 'PCI DSS Key Numbers',
          items: [
            { value: 'SAQ A', note: 'Simplest compliance for hosted checkout' },
            { value: '4 levels', note: 'Merchant compliance levels by volume' },
            { value: '₹0', note: 'Cost for SAQ A self-assessment' },
          ],
        },
      }}
    >
      <h1 className="text-3xl lg:text-[36px] font-bold text-gray-900 tracking-tight leading-tight mb-6" itemProp="headline">
        PCI Compliance for Ecommerce Store Owners: What You Actually Have to Do
      </h1>

      <AIAnswerBlock
        question="What PCI DSS compliance does my ecommerce store need?"
        answer="Most ecommerce stores using a hosted payment gateway (Razorpay hosted checkout, Stripe Checkout, PayPal redirect) only need PCI DSS SAQ A — the simplest compliance path. It's a short annual self-assessment questionnaire with around 22 requirements, no external audit needed. If you embed payment fields in your own page using JS SDKs (Stripe Elements, Razorpay Checkout.js), you need SAQ A-EP (around 191 requirements). Full SAQ D (300+ requirements, annual QSA audit) is only required if you store raw card data on your own servers — which no modern ecommerce business should ever do."
        entity={['PCI DSS', 'SAQ A', 'SAQ A-EP', 'SAQ D', 'Hosted Checkout', 'Tokenization', 'Razorpay', 'Stripe', 'Card Data', 'QSA']}
      />

      <KeyTakeaways
        topic="PCI DSS Compliance"
        points={[
          'PCI DSS SAQ A is the compliance path for most ecommerce stores using hosted checkout — it\'s an annual self-assessment questionnaire, no external audit required.',
          'If you redirect customers to Razorpay, Stripe Checkout, PayPal, or Cashfree hosted pages — you qualify for SAQ A.',
          'If you embed JS payment fields in your own page (Stripe Elements, Razorpay Checkout.js) — you need SAQ A-EP, which has more requirements but is still manageable.',
          'Never store raw card numbers, CVV, or full magnetic stripe data on your servers. Modern integrations use tokenization — store tokens, not card data.',
          'Razorpay, Cashfree, Stripe, and PayPal are all PCI DSS Level 1 certified (the highest level), which covers the card data handling portion for merchants using their services.',
          'India-specific: RBI\'s Payment Aggregator guidelines also require merchants to follow data security standards, and your PA-licensed gateway handles the heavy lifting.',
        ]}
      />

      <H2>What Is PCI DSS and Who Made It?</H2>
      <P>
        PCI DSS (Payment Card Industry Data Security Standard) is a set of security requirements created by the PCI Security Standards Council — founded by Visa, Mastercard, American Express, Discover, and JCB in 2006. The standard exists to protect cardholder data and prevent payment fraud.
      </P>
      <P>
        Any business that accepts, processes, transmits, or stores cardholder data is subject to PCI DSS requirements. This includes virtually every online store. The good news: the compliance requirements scale significantly based on how you handle card data. If you use a hosted checkout, you're in the easiest tier.
      </P>

      <H2>The 3 SAQ Types That Matter for Ecommerce</H2>
      <CompareTable
        headers={['SAQ Type', 'When It Applies', 'Requirements', 'Audit?']}
        rows={[
          ['SAQ A', 'Hosted checkout redirect (Razorpay, Stripe Checkout, PayPal)', '~22 requirements', 'Self-assessment only'],
          ['SAQ A-EP', 'JS SDK embedded fields on your page (Stripe Elements, Razorpay Checkout.js)', '~191 requirements', 'Self-assessment only'],
          ['SAQ D', 'You store, process, or transmit card data on your own servers', '300+ requirements', 'Annual QSA audit required'],
        ]}
      />

      <H3>SAQ A: The Path 90% of Ecommerce Stores Take</H3>
      <P>
        SAQ A applies when you completely outsource all cardholder data handling to a PCI DSS certified third party. In practice: when your checkout redirects customers to Razorpay's hosted page, Stripe Checkout, PayPal's payment page, or a similar hosted solution — the customer enters card details on the gateway's servers, not yours.
      </P>
      <Ul items={[
        'Your website contains only a "Pay Now" button that redirects to the payment provider\'s page.',
        'You never see, touch, or store any raw card numbers.',
        'The SAQ A questionnaire has approximately 22 yes/no questions.',
        'You complete it yourself online at the PCI SSC portal or through your acquirer\'s compliance program.',
        'Validity: 1 year. Completion time: 30–60 minutes.',
        'Cost: typically free or low-cost through your payment gateway\'s compliance program.',
      ]} />

      <H3>SAQ A-EP: For JS SDK Integrations</H3>
      <P>
        If you use Stripe Elements or Razorpay Checkout.js — where payment fields are rendered on your page but card data is captured and tokenized by the gateway's JavaScript before it reaches your server — you need SAQ A-EP.
      </P>
      <P>
        The key distinction: your page's server never handles raw card data, but your page delivers the JavaScript that captures it. This means attackers could theoretically inject malicious scripts into your page to intercept card data. SAQ A-EP therefore requires more security controls around your website code, hosting, and change management.
      </P>
      <Ul items={[
        'Around 191 requirements versus SAQ A\'s 22.',
        'Requires proper implementation of Content Security Policy (CSP) headers.',
        'Website change management and code review requirements.',
        'File integrity monitoring on payment-page scripts.',
        'Still self-assessment — no external QSA audit needed.',
        'Most developers on modern frameworks (Next.js, React) can meet these requirements with reasonable security hygiene.',
      ]} />

      <H3>SAQ D: Avoid This Entirely</H3>
      <P>
        SAQ D applies only if you store, process, or transmit raw card data on your own infrastructure. This means 300+ requirements and an annual audit by a Qualified Security Assessor (QSA) that costs ₹5L–₹20L+ per year.
      </P>
      <P>
        No modern ecommerce business needs to do this. Tokenization exists precisely to make this unnecessary. Use your payment gateway's hosted checkout or JS SDK — they handle card data capture, tokenization, and storage. You store a token (a non-sensitive reference ID), not the actual card number.
      </P>

      <CalloutBox title="Golden Rule of PCI Compliance" color="emerald">
        Never let raw card data (card numbers, CVV, expiry) touch your servers. Use hosted checkout or gateway JS SDKs — they handle capture and tokenization. Store only the gateway-provided payment token. This keeps you at SAQ A or A-EP and eliminates the massive liability of SAQ D compliance.
      </CalloutBox>

      <H2>What Indian Ecommerce Stores Specifically Need</H2>
      <P>
        If you're using Razorpay, Cashfree, PayU, or any RBI-licensed Payment Aggregator with their hosted checkout or JavaScript SDK:
      </P>
      <Ul items={[
        'Your gateway is PCI DSS Level 1 certified — the highest level of compliance, covering over 300 controls on their end.',
        'You fall under SAQ A (hosted checkout) or SAQ A-EP (JS SDK) — both are self-assessment only.',
        'RBI\'s Payment Aggregator framework (2020) mandates that PAs maintain PCI DSS compliance and implement additional data localization requirements.',
        'Merchants using certified PAs inherit significant compliance coverage — your gateway\'s annual compliance certificate covers the payment data handling portion.',
        'You still need to secure your own website (HTTPS, CSP headers, regular updates, no storing card data in databases or logs).',
      ]} />

      <H2>PCI Compliance Checklist for Ecommerce Merchants</H2>
      <Ul items={[
        'Use HTTPS everywhere on your site — get a free SSL certificate via Let\'s Encrypt or your hosting provider.',
        'Redirect to hosted checkout OR use JS SDK for payment — never build custom card forms that post to your server.',
        'Never log card numbers, CVV, or PAN in server logs, database, or analytics tools.',
        'Store only the gateway token (e.g., razorpay_payment_id, Stripe charge ID) — not any card details.',
        'Keep your payment gateway integration library and CMS (WordPress, Shopify, etc.) updated.',
        'Implement Content Security Policy headers if using embedded JS payment fields.',
        'Complete your SAQ A or A-EP questionnaire annually through your acquiring bank or gateway\'s compliance portal.',
        'Run a quarterly vulnerability scan of your website (some gateways provide this as part of their merchant program).',
        'Restrict access to payment transaction data — only give access to team members who need it.',
        'Have an incident response plan: what to do if you suspect a data breach.',
      ]} />

      <CompareTable
        headers={['Gateway', 'PCI Level', 'Merchant Compliance Path', 'India Compliance']}
        rows={[
          ['Razorpay', 'Level 1 certified', 'SAQ A (hosted) / SAQ A-EP (JS)', 'RBI PA licensed'],
          ['Cashfree', 'Level 1 certified', 'SAQ A (hosted) / SAQ A-EP (JS)', 'RBI PA licensed'],
          ['Stripe', 'Level 1 certified', 'SAQ A (Checkout) / SAQ A-EP (Elements)', 'Foreign entity in India'],
          ['PayPal', 'Level 1 certified', 'SAQ A (hosted)', 'Available in India'],
          ['Shopify Payments', 'Level 1 certified', 'SAQ A (Shopify hosted checkout)', 'Not in India'],
        ]}
      />

      <Verdict title="Most stores need SAQ A. It takes 30 minutes, once a year." color="indigo">
        PCI compliance is dramatically simpler than most merchants fear. If you're using any major gateway's hosted checkout or JS SDK — and you should be — you're at SAQ A or SAQ A-EP. That's a self-assessment, not an audit. The most important action right now: confirm you're not accidentally logging card details in your server logs or database, and make sure you're on HTTPS everywhere. Everything else your certified payment gateway handles for you.
      </Verdict>

      <FAQSection title="PCI DSS Compliance — Common Questions" faqs={faqs} />
    </BlogPostLayout>
  )
}
