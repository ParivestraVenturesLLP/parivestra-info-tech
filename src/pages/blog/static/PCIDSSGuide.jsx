import { StaticArticleLayout } from "../../../components/content/StaticArticleLayout";
import { topicsFor, articlesFor } from "../../topics/static/staticContentLinks";

const faqs = [
  {
    q: "PCI DSS kya hai aur mujhe kyun chahiye?",
    a: "PCI DSS (Payment Card Industry Data Security Standard) ek security standard hai jo Visa, Mastercard, Amex, aur Discover ne banaya hai card payment data protect karne ke liye. Agar aap online payments accept karte ho — chahe direct ya hosted gateway ke through — technically aapko PCI compliance maintain karna hoga. SAQ A (simplest path) ek annual self-assessment questionnaire hai — ek page, koi audit nahi. Zyada merchants yahi path follow karte hain.",
  },
  {
    q: "SAQ A aur SAQ A-EP mein kya farak hai?",
    a: "SAQ A tab apply hota hai jab customers aapki site se gateway ki hosted payment page pe redirect hote hain (e.g., Razorpay hosted checkout, Stripe Checkout). Aapka server card data touch nahi karta. SAQ A-EP tab apply hota hai jab aap JavaScript SDK use karte ho (Stripe Elements, Razorpay Checkout.js) jo aapki page mein embed hote hain, lekin card data directly aapke server pe nahi jata. SAQ A-EP mein zyada requirements hain lekin abhi bhi manageable hai. Full SAQ D sirf tab apply hota hai jab aap raw card data store ya transmit karte ho apne servers pe.",
  },
  {
    q: "Kya Shopify use karna PCI compliant hai?",
    a: "Haan. Shopify khud PCI DSS Level 1 certified hai — sabse highest level. Agar aap Shopify Payments ya Razorpay for Shopify ya Cashfree for Shopify use karte ho, aap automatically SAQ A path pe hote ho. Shopify ki hosted checkout page pe payment hota hai, toh card data aapke store ke servers pe nahi aata. Aapko khud koi separate PCI certification nahi karni hoti.",
  },
  {
    q: "Indian payment gateways PCI compliant hain?",
    a: "Haan. Razorpay, Cashfree, PayU — sabhi RBI-licensed payment aggregators PCI DSS Level 1 certified hain. Yeh highest certification level hai. Inka compliance aapko card data handling ke liye protect karta hai jab tum inke hosted checkout ya JavaScript SDK use karte ho. Hamesha confirm karo ki gateway ka current PCI compliance certificate valid hai.",
  },
  {
    q: "PCI compliance violation pe kya penalty hoti hai?",
    a: "Non-compliance penalties card networks (Visa/Mastercard) set karte hain, directly merchants pe nahi — banks aur acquirers ke through. Data breach hone pe: $5,000–$100,000 per month fine acquirer pe, jo merchant pe pass hoti hai. Forensic investigation cost ($20,000+). Compensation to banks for card reissue. Chargeback liability shift. Reputational damage. India mein RBI ne bhi payment data localization aur security requirements enforce ki hain Payment Aggregator guidelines mein.",
  },
];

const keyTakeaways = [
  "PCI DSS SAQ A is the compliance path for most ecommerce stores using hosted checkout — it's an annual self-assessment questionnaire, no external audit required.",
  "If you redirect customers to Razorpay, Stripe Checkout, PayPal, or Cashfree hosted pages — you qualify for SAQ A.",
  "If you embed JS payment fields in your own page (Stripe Elements, Razorpay Checkout.js) — you need SAQ A-EP, which has more requirements but is still manageable.",
  "Never store raw card numbers, CVV, or full magnetic stripe data on your servers. Modern integrations use tokenization — store tokens, not card data.",
  "Razorpay, Cashfree, Stripe, and PayPal are all PCI DSS Level 1 certified (the highest level), which covers the card data handling portion for merchants using their services.",
  "India-specific: RBI's Payment Aggregator guidelines also require merchants to follow data security standards, and your PA-licensed gateway handles the heavy lifting.",
];

const body = `## What is PCI DSS and who made it?

PCI DSS (Payment Card Industry Data Security Standard) is a set of security requirements created by the PCI Security Standards Council — founded by Visa, Mastercard, American Express, Discover, and JCB in 2006. The standard exists to protect cardholder data and prevent payment fraud.

Any business that accepts, processes, transmits, or stores cardholder data is subject to PCI DSS requirements. This includes virtually every online store. The good news: the compliance requirements scale significantly based on how you handle card data. If you use a hosted checkout, you're in the easiest tier.

## The 3 SAQ types that matter for ecommerce

| SAQ Type | When It Applies | Requirements | Audit? |
| --- | --- | --- | --- |
| SAQ A | Hosted checkout redirect (Razorpay, Stripe Checkout, PayPal) | ~22 requirements | Self-assessment only |
| SAQ A-EP | JS SDK embedded fields on your page (Stripe Elements, Razorpay Checkout.js) | ~191 requirements | Self-assessment only |
| SAQ D | You store, process, or transmit card data on your own servers | 300+ requirements | Annual QSA audit required |

### SAQ A: the path 90% of ecommerce stores take

SAQ A applies when you completely outsource all cardholder data handling to a PCI DSS certified third party. In practice: when your checkout redirects customers to Razorpay's hosted page, Stripe Checkout, PayPal's payment page, or a similar hosted solution — the customer enters card details on the gateway's servers, not yours.

- Your website contains only a "Pay Now" button that redirects to the payment provider's page.
- You never see, touch, or store any raw card numbers.
- The SAQ A questionnaire has approximately 22 yes/no questions.
- You complete it yourself online at the PCI SSC portal or through your acquirer's compliance program.
- Validity: 1 year. Completion time: 30–60 minutes.
- Cost: typically free or low-cost through your payment gateway's compliance program.

### SAQ A-EP: for JS SDK integrations

If you use Stripe Elements or Razorpay Checkout.js — where payment fields are rendered on your page but card data is captured and tokenized by the gateway's JavaScript before it reaches your server — you need SAQ A-EP.

The key distinction: your page's server never handles raw card data, but your page delivers the JavaScript that captures it. This means attackers could theoretically inject malicious scripts into your page to intercept card data. SAQ A-EP therefore requires more security controls around your website code, hosting, and change management.

- Around 191 requirements versus SAQ A's 22.
- Requires proper implementation of Content Security Policy (CSP) headers.
- Website change management and code review requirements.
- File integrity monitoring on payment-page scripts.
- Still self-assessment — no external QSA audit needed.
- Most developers on modern frameworks (Next.js, React) can meet these requirements with reasonable security hygiene.

### SAQ D: avoid this entirely

SAQ D applies only if you store, process, or transmit raw card data on your own infrastructure. This means 300+ requirements and an annual audit by a Qualified Security Assessor (QSA) that costs ₹5L–₹20L+ per year.

No modern ecommerce business needs to do this. Tokenization exists precisely to make this unnecessary. Use your payment gateway's hosted checkout or JS SDK — they handle card data capture, tokenization, and storage. You store a token (a non-sensitive reference ID), not the actual card number.

> **Golden rule of PCI compliance**
>
> Never let raw card data (card numbers, CVV, expiry) touch your servers. Use hosted checkout or gateway JS SDKs — they handle capture and tokenization. Store only the gateway-provided payment token. This keeps you at SAQ A or A-EP and eliminates the massive liability of SAQ D compliance.

## What Indian ecommerce stores specifically need

If you're using Razorpay, Cashfree, PayU, or any RBI-licensed Payment Aggregator with their hosted checkout or JavaScript SDK:

- Your gateway is PCI DSS Level 1 certified — the highest level of compliance, covering over 300 controls on their end.
- You fall under SAQ A (hosted checkout) or SAQ A-EP (JS SDK) — both are self-assessment only.
- RBI's Payment Aggregator framework (2020) mandates that PAs maintain PCI DSS compliance and implement additional data localization requirements.
- Merchants using certified PAs inherit significant compliance coverage — your gateway's annual compliance certificate covers the payment data handling portion.
- You still need to secure your own website (HTTPS, CSP headers, regular updates, no storing card data in databases or logs).

## PCI compliance checklist for ecommerce merchants

- Use HTTPS everywhere on your site — get a free SSL certificate via Let's Encrypt or your hosting provider.
- Redirect to hosted checkout OR use JS SDK for payment — never build custom card forms that post to your server.
- Never log card numbers, CVV, or PAN in server logs, database, or analytics tools.
- Store only the gateway token (e.g., razorpay_payment_id, Stripe charge ID) — not any card details.
- Keep your payment gateway integration library and CMS (WordPress, Shopify, etc.) updated.
- Implement Content Security Policy headers if using embedded JS payment fields.
- Complete your SAQ A or A-EP questionnaire annually through your acquiring bank or gateway's compliance portal.
- Run a quarterly vulnerability scan of your website (some gateways provide this as part of their merchant program).
- Restrict access to payment transaction data — only give access to team members who need it.
- Have an incident response plan: what to do if you suspect a data breach.

## Gateway PCI compliance reference

| Gateway | PCI Level | Merchant Compliance Path | India Compliance |
| --- | --- | --- | --- |
| Razorpay | Level 1 certified | SAQ A (hosted) / SAQ A-EP (JS) | RBI PA licensed |
| Cashfree | Level 1 certified | SAQ A (hosted) / SAQ A-EP (JS) | RBI PA licensed |
| Stripe | Level 1 certified | SAQ A (Checkout) / SAQ A-EP (Elements) | Foreign entity in India |
| PayPal | Level 1 certified | SAQ A (hosted) | Available in India |
| Shopify Payments | Level 1 certified | SAQ A (Shopify hosted checkout) | Not in India |

> **Verdict — Most stores need SAQ A. It takes 30 minutes, once a year.**
>
> PCI compliance is dramatically simpler than most merchants fear. If you're using any major gateway's hosted checkout or JS SDK — and you should be — you're at SAQ A or SAQ A-EP. That's a self-assessment, not an audit. The most important action right now: confirm you're not accidentally logging card details in your server logs or database, and make sure you're on HTTPS everywhere. Everything else your certified payment gateway handles for you.`;

export default function PCIDSSGuide() {
  return (
    <StaticArticleLayout
      seoTitle="PCI Compliance for Ecommerce Store Owners: What You Actually Have to Do"
      seoDescription="Simple PCI DSS compliance guide for ecommerce merchants: SAQ A vs SAQ A-EP vs SAQ D explained, what triggers each, how hosted checkout keeps you compliant, and what Indian payment gateways require."
      path="/blog/pci-dss-ecommerce"
      dek="Quick Guide"
      title="PCI Compliance for Ecommerce Store Owners: What You Actually Have to Do"
      excerpt="SAQ A vs SAQ A-EP vs SAQ D explained — what triggers each, how hosted checkout keeps you compliant, and what Indian payment gateways require."
      date="5 June 2026"
      readingTimeMinutes={9}
      bodyMarkdown={body}
      keyTakeaways={keyTakeaways}
      faqs={faqs}
      relatedTopics={topicsFor(["payment-gateway", "payment-integration", "ecommerce-payments"])}
      relatedArticles={articlesFor(["razorpay-vs-cashfree-vs-payu", "stripe-vs-razorpay"])}
    />
  );
}
