import { StaticArticleLayout } from "../../../components/content/StaticArticleLayout";
import { topicsFor, articlesFor } from "../../topics/static/staticContentLinks";

const faqs = [
  {
    q: "Indian company international payments accept karne ke liye kya chahiye?",
    a: "Minimum requirements: (1) RBI-authorized payment gateway jo foreign currency accept kare (Razorpay International, Stripe India, PayPal). (2) FIRC/FIRA documents — every inward foreign remittance ke liye Foreign Inward Remittance Certificate milta hai, jo RBI compliance ke liye required hai. (3) AD-I/AD-II bank account jahan FX settlements hoti hain. (4) GST registration — export of services zero-rated hai, lekin filing required hai. (5) LUT (Letter of Undertaking) RBI ke paas for export without payment of IGST.",
  },
  {
    q: "India se USA customers ko charge karne ki best way kya hai?",
    a: "Options in order of ease: (1) Stripe India — accepts USD cards, SEPA, wallets. Settles in USD to your Indian account (converted to INR by bank). Good for under $1M annual revenue. (2) Razorpay International — similar to Stripe for Indian businesses. (3) Paddle/Lemon Squeezy as Merchant of Record — they handle everything including tax. Best for digital products/SaaS. (4) At $1M+ revenue: dedicated international acquiring via standard chartered, HDFC Forex services, or payment orchestrator.",
  },
  {
    q: "Cross-border payment mein double FX conversion kaise avoid karein?",
    a: "Double FX happens when: customer pays in USD → gateway converts to INR → your bank converts INR to USD for international transfer. Each conversion has a spread (0.5–2%). Avoid it by: (1) Choosing a gateway with multi-currency settlement (Stripe, Airwallex, Wise Business). (2) Keeping a USD account at your Indian bank for FX settlement. (3) Using a Merchant of Record who settles in your preferred currency. (4) For high volume: use payment orchestrator with local acquiring (collect in USD without conversion until you need INR).",
  },
  {
    q: "GST cross-border services pe kaise apply hoti hai?",
    a: "Export of services from India: zero-rated under GST. Aapko IGST pay nahi karna. Lekin GST return file karna hota hai aur LUT (Letter of Undertaking) submit karna hota hai annually. Agar aap LUT file nahi karte, toh aapko IGST pay karna hoga aur phir refund claim karna hoga — slow aur cash-flow negative. LUT file karo GSTN portal pe, renew karo annually. Foreign currency invoice banao (in USD/EUR), aur FIRC/FIRA documents maintain karo each payment ke liye.",
  },
  {
    q: "India mein international payment gateway fees kya hain?",
    a: "Typical fees for India-based merchants accepting international payments: Stripe: 2.9% + $0.30 (US cards), 1.5% additional for currency conversion. Razorpay International: 3% + ₹3 (international cards). PayPal: 3.4% + fixed fee. Paddle: ~5% + $0.50 (includes all tax compliance). Airwallex: 0.5–1% FX fee with local collection. For $10K/month in international revenue, the total fee difference between these options can be $150–$300/month — worth optimizing at scale.",
  },
];

const keyTakeaways = [
  "Indian businesses accepting international payments need an RBI-authorized payment gateway and must maintain FIRC/FIRA documents for each foreign inward remittance.",
  "Export of services is zero-rated under GST — you pay 0% IGST, but must file LUT (Letter of Undertaking) annually on GSTN portal.",
  "Double FX conversion (USD → INR → USD) costs 1–4% extra in spread. Avoid with multi-currency settlement accounts or Merchant of Record.",
  "Stripe India and Razorpay International are the two best options for most Indian businesses under $1M annual international revenue.",
  "Above $1M in cross-border revenue: evaluate payment orchestrators with local acquiring (collect in local currency without conversion).",
  "Merchant of Record (Paddle, Lemon Squeezy) handles all global VAT/GST automatically — worth the 5% fee for SaaS with 10+ country sales.",
];

const body = `## Why cross-border payments are uniquely complex for Indian businesses

Accepting payments from international customers is more involved for Indian businesses than it is for US or European companies, for a few reasons:

- RBI regulations: every foreign inward remittance has reporting requirements. Your payment gateway and bank handle most of this, but you need to understand what's happening.
- FEMA compliance: Foreign Exchange Management Act governs how foreign currency can flow in and be repatriated or converted.
- GST on exports: export of services is zero-rated, but you need to file LUT or IGST refund claims. Miss this and you're paying tax you don't owe.
- FX spread: every currency conversion has a cost. Without the right infrastructure, you can lose 2–4% purely to FX before adding gateway fees.
- Local payment methods: US customers expect Visa/Mastercard and PayPal. European customers expect SEPA. Southeast Asian customers want local wallets. One gateway rarely covers all.

## Gateway options for Indian businesses accepting international payments

| Gateway | International Cards | FX Settlement | Tax Handling | Best For |
| --- | --- | --- | --- | --- |
| Stripe India | ✓ 135+ currencies | INR (bank converts) | You handle | Developer-first, US/EU customers |
| Razorpay International | ✓ Major currencies | INR | You handle | India+global hybrid |
| PayPal India | ✓ Global | INR or USD (hold) | You handle | Customers who trust PayPal |
| Paddle | ✓ 200+ countries | Your currency of choice | ✓ Paddle handles VAT/GST | SaaS/digital products globally |
| Lemon Squeezy | ✓ Global | USD, GBP, EUR | ✓ Handles all | Indie SaaS, digital products |
| Airwallex | ✓ Multi-currency | USD/EUR/GBP (local collect) | You handle | High-volume, minimize FX loss |
| Wise Business | ✓ Via payment links | Hold in 40+ currencies | You handle | Freelancers, services businesses |

## The double FX problem, and how to fix it

Here's the hidden cost most Indian businesses don't realize they're paying:

- Customer in USA pays $100 via Stripe.
- Stripe converts $100 → ₹8,370 (at their FX rate, ~1.5% spread).
- Stripe settles ₹8,370 to your Indian bank account.
- Your bank converts ₹8,370 → $100.44 (at their rate) if you're trying to hold USD — or you take the INR.
- Net effective FX cost: 1.5–3% just in conversion spread, before gateway fees.

The solution depends on your scale:

| Revenue Scale | Recommended Approach |
| --- | --- |
| Under $5K/month | Accept INR settlement — FX cost isn't worth the complexity |
| $5K–$50K/month | Stripe or Razorpay International with USD-hold account at your bank |
| $50K–$500K/month | Airwallex local collection — collect in USD from US customers without conversion |
| $500K+/month | Payment orchestrator with local acquiring in key markets + treasury management |

## RBI compliance: what you actually need to do

### FIRC / FIRA documents

For every foreign inward remittance above a threshold, your bank (AD-I authorized dealer) issues a Foreign Inward Remittance Certificate (FIRC) or Foreign Inward Remittance Advice (FIRA). These are proof that foreign currency legally entered India.

- Payment gateways (Stripe, Razorpay) batch settlements — your bank issues FIRC for each settlement batch, not each individual transaction.
- Keep FIRC/FIRA documents for 5+ years — required for FEMA audit, IT assessment, and GST export compliance.
- If your gateway settles in INR: your bank auto-generates these. If settling in USD: request FIRA from your bank for each credit.
- CA firms often use FIRCs to document export income for IT returns. Losing these creates documentation headaches.

### GST on export of services

If you're providing services (SaaS, consulting, freelance, digital products) to foreign customers, this is zero-rated under GST — you don't charge or pay IGST.

- File LUT (Letter of Undertaking) on GSTN portal before the financial year starts. Renewal every year by April.
- LUT lets you export without payment of IGST. Without LUT: you pay IGST and claim refund — slow, cash-flow negative.
- Still file GSTR-1 and GSTR-3B — show zero-rated export supplies separately in Table 6A (GSTR-1).
- Maintain foreign currency invoices — invoice the customer in USD/EUR/GBP at the exchange rate on the invoice date.
- No GST number is needed on invoices to foreign customers (GSTIN is only for domestic B2B). But LUT number should be mentioned.

> **GST LUT filing: do this before April 1st every year**
>
> Filing your Letter of Undertaking is a 10-minute process on the GSTN portal (gst.gov.in → Services → User Services → Furnish Letter of Undertaking). Miss this and you'll be paying IGST and waiting months for refund — entirely avoidable. If you have a CA, they can file it as part of annual GST housekeeping.

## Local payment methods by target market

Different markets have very different preferred payment methods. If you're selling to customers in a specific region, offering local payment options dramatically improves conversion:

| Market | Primary Methods | Secondary | Notes |
| --- | --- | --- | --- |
| USA / Canada | Visa, Mastercard, Amex | PayPal, Apple Pay, ACH | Credit cards dominant |
| Europe (UK, DE, FR) | Visa, Mastercard | SEPA debit (EU), PayPal, iDEAL (NL) | SEPA for subscriptions |
| Southeast Asia | Local wallets (GrabPay, GoPay) | Cards, FPX (Malaysia) | Stripe supports most |
| Australia | Visa, Mastercard | PayID, BPAY | Stripe AU |
| Middle East (UAE, KSA) | Visa, Mastercard | Tabby/Tamara BNPL, Apple Pay | Cards dominant |
| Japan | Credit cards | Konbini (convenience store) | Stripe JP |
| Brazil | Boleto (bank slip) | Credit cards, PIX | Stripe BR supports PIX |

For most Indian SaaS and service companies selling to US/EU: Stripe covers your needs (accepts all major cards, Apple Pay, Google Pay, SEPA). As you expand to Southeast Asia or Latin America, evaluate whether Stripe's local method coverage is sufficient or if you need region-specific gateways.

## When to use a Merchant of Record for international sales

If you're selling a digital product (SaaS, software, ebook, course, template) to customers in multiple countries, a Merchant of Record (MoR) like Paddle or Lemon Squeezy eliminates a massive compliance headache: global VAT/GST registration and filing.

- Selling to German customers: you technically need German VAT registration (or EU VAT OSS) to collect and remit VAT. Paddle does this for you.
- Selling to Australian customers: you technically need Australian GST registration above AU$75K revenue from Australian buyers. Paddle handles it.
- Selling to Indian customers from a foreign entity: GST implications. A MoR navigates this.
- As an Indian company selling globally: Paddle handles all destination-country tax, you receive net revenue.
- Cost: ~5% per transaction. At $10K/month international revenue, that's $500/month — vs. the cost of accountants in 10 jurisdictions.

## Practical setup for an Indian SaaS selling globally

### Recommended setup, under $50K/month international revenue

- Indian customers: Razorpay (UPI, Indian cards, NetBanking, all local methods, INR settlement, GST invoice generation).
- International customers: Paddle or Lemon Squeezy as MoR (they handle USD/EUR/GBP billing, all global VAT/GST, chargeback liability).
- Benefit: no multi-currency settlement complexity, no global tax registration, Paddle handles chargebacks from international customers.
- Downside: Paddle's 5% fee is higher than direct Stripe (2.9%). Worth it under $50K/month; re-evaluate above.

### Optimized setup, above $50K/month international revenue

- Indian customers: Razorpay (as above).
- US customers: Stripe (direct, 2.9% + $0.30, local card acquiring = better approval rates).
- EU customers: Stripe EU + Avalara for VAT handling (~$200/month for basic EU VAT OSS).
- APAC customers: evaluate Stripe APAC or regional gateways (Adyen, Braintree).
- Tax compliance: Avalara or TaxJar ($200–$500/month at this scale) instead of MoR premium.
- Treasury: Airwallex or Wise Business to hold international currencies and convert strategically.

> **Verdict — Start simple. Scale the infrastructure as international revenue grows.**
>
> For most Indian businesses just starting to get international customers: use Stripe India or Razorpay International for straightforward card acceptance, file your GST LUT, and keep your FIRCs organized. If you sell digital products to 10+ countries and tax compliance feels overwhelming: Paddle or Lemon Squeezy as your MoR is genuinely worth the 5% fee premium. Only build out sophisticated multi-gateway, multi-currency infrastructure when you've validated international demand and your international revenue justifies the complexity.`;

export default function CrossBorderPayments() {
  return (
    <StaticArticleLayout
      seoTitle="Cross-Border Payments for Indian Businesses: A Complete 2025 Guide"
      seoDescription="Complete guide to accepting international payments from India: best gateways for cross-border payments, avoiding double FX conversion, RBI/GST compliance, FIRC documentation, and when to use a Merchant of Record."
      path="/blog/cross-border-payments-india"
      dek="Global Expansion"
      title="Cross-Border Payments for Indian Businesses: A Complete 2025 Guide"
      excerpt="Best gateways for accepting international payments from India, avoiding double FX conversion, RBI/GST compliance, and when to use a Merchant of Record."
      date="14 June 2026"
      readingTimeMinutes={15}
      bodyMarkdown={body}
      keyTakeaways={keyTakeaways}
      faqs={faqs}
      relatedTopics={topicsFor(["payment-gateway", "payment-integration", "fintech"])}
      relatedArticles={articlesFor(["paddle-vs-stripe-saas", "stripe-vs-razorpay", "pci-dss-ecommerce"])}
    />
  );
}
