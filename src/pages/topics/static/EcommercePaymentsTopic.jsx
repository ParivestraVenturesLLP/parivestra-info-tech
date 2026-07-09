import { StaticTopicLayout } from "../../../components/content/StaticTopicLayout";
import { topicsFor, articlesFor } from "./staticContentLinks";

const faqs = [
  {
    q: "What payment methods should my ecommerce store support?",
    a: "For Indian ecommerce: UPI (mandatory — 50%+ of digital payments), debit/credit cards (Visa, Mastercard, RuPay), net banking, digital wallets (Paytm, PhonePe), and BNPL (Simpl, LazyPay) for high-AOV categories. For global ecommerce: credit/debit cards, PayPal, Apple Pay, Google Pay, and local payment methods by market (iDEAL in Netherlands, SEPA in Europe, PIX in Brazil). Supporting more payment methods directly increases checkout conversion.",
  },
  {
    q: "How do I reduce cart abandonment at checkout?",
    a: "The top cart abandonment causes and fixes: (1) Too many checkout steps → reduce to 2–3 steps maximum. (2) Unexpected fees → show total cost early, never surprise at the final step. (3) Unfamiliar payment methods → show logos of recognized payment providers. (4) No guest checkout → don't force account creation. (5) Slow page load → optimize checkout page for Core Web Vitals. (6) No saved payment → enable one-click checkout for returning customers. Industry average abandonment is 70% (Baymard Institute). Small improvements drive outsized revenue recovery.",
  },
  {
    q: "What is the best payment gateway for Shopify?",
    a: "Shopify Payments is the native option with no additional transaction fees and Shop Pay one-click checkout — available in US, UK, Canada, Australia, and select markets. For India, Shopify doesn't offer Shopify Payments, so Razorpay for Shopify or Cashfree for Shopify are the leading choices — both have native Shopify apps with UPI, cards, and net banking support. Stripe also works in Shopify for international sales.",
  },
  {
    q: "What is Shop Pay and how does it work?",
    a: "Shop Pay is Shopify's accelerated one-click checkout solution. It stores customer payment details (card, address, email) across all Shopify stores, allowing returning buyers to complete purchases in one tap. Merchants using Shopify Payments can enable Shop Pay at no extra cost. It shows higher conversion rates than standard checkout — Shopify reports 15% higher conversion vs. non-accelerated checkout.",
  },
  {
    q: "How do I set up recurring payments for an ecommerce subscription?",
    a: "For Indian ecommerce subscriptions: Use Razorpay Subscriptions or Cashfree Subscriptions which support UPI AutoPay (mandates without card-on-file), recurring card charges, and dunning management. For global SaaS subscriptions: Stripe Billing or Chargebee. Key features to look for: automatic retry logic for failed payments, prorated billing for plan upgrades, dunning email sequences, and analytics on MRR and churn.",
  },
];

const body = `For Indian ecommerce, the recommended payment stack is: Razorpay or Cashfree as your primary payment gateway (both support UPI, cards, net banking, wallets, BNPL, and subscriptions), with Stripe added for international customers. Must-support payment methods: UPI (50%+ of Indian digital payments — NPCI), debit/credit cards (Visa/Mastercard/RuPay), net banking, and BNPL (Simpl/LazyPay) for higher-AOV categories. For Shopify stores in India, Razorpay for Shopify or Cashfree for Shopify are the native options. Industry cart abandonment averages 70% (Baymard Institute) — reducing checkout steps and showing familiar payment logos are the highest-impact fixes.

## Key takeaways

- UPI is non-negotiable for Indian ecommerce — it accounts for 50%+ of digital payment volume and has zero MDR for merchants.
- Average cart abandonment is 70% (Baymard Institute). Reducing checkout to 2–3 steps can recover 35%+ of abandoned carts.
- Show payment method logos prominently at checkout — recognizable logos increase trust and conversion, especially for first-time buyers.
- Never show unexpected fees at the final step — price surprise is the #1 cause of checkout abandonment.
- For subscriptions: use Razorpay Subscriptions (UPI AutoPay) or Chargebee/Stripe Billing. Invest in dunning logic — involuntary churn from failed payments can be 20–30% of total churn.
- Shopify merchants in India should use Razorpay or Cashfree native apps — Shopify Payments is not available in India.

## Payment methods for Indian ecommerce

| Method | Share of digital payments | Notes |
| --- | --- | --- |
| UPI | 50%+ | India only — PhonePe, Google Pay, Paytm, BHIM |
| Credit/Debit Card | 25% | Visa, Mastercard, RuPay, Amex |
| Digital Wallets | 10% | Paytm, PhonePe wallet, Amazon Pay |
| Net Banking | 8% | 50+ banks supported by Indian gateways |
| BNPL | 4% | Simpl, LazyPay, ZestMoney |
| EMI | 3% | Credit card and cardless EMI options |

*Source: NPCI Payment System Indicators, Worldpay Global Payments Report*

## Checkout optimization for ecommerce

- **Too many checkout steps** — Reduce to maximum 3 steps. Use address autocomplete and pre-filled forms for returning customers.
- **Unexpected fees at final step** — Show shipping cost, taxes, and total from the cart page. Never reveal new costs at checkout.
- **Unfamiliar payment methods** — Display logos of Visa, Mastercard, UPI, RuPay, and other trusted brands prominently near the payment form.
- **Forced account creation** — Always offer guest checkout. You can prompt account creation post-purchase.
- **Slow checkout page** — Optimize for Core Web Vitals. Use lazy-load for non-critical scripts. Target <2s LCP on checkout.
- **No one-click for returning buyers** — Implement saved cards (Razorpay/Stripe tokenization) and UPI AutoPay for subscription customers.

## Checkout stats (Baymard)

- **70%** average cart abandonment rate
- **35%** revenue recovery with optimized checkout
- **+15%** AOV lift from BNPL at checkout`;

export default function EcommercePaymentsTopic() {
  return (
    <StaticTopicLayout
      seoTitle="Ecommerce Payments — Payment Methods, Gateway Setup & Checkout Guide"
      seoDescription="Complete guide to ecommerce payments: best payment methods for online stores, how to set up payment gateways for Shopify and WooCommerce, checkout optimization to reduce abandonment, subscription billing, and Indian ecommerce payment stack."
      path="/topics/ecommerce-payments"
      name="Ecommerce Payments"
      description="Ecommerce payments encompass every aspect of how online stores accept and process customer payments — from payment method selection and gateway integration to checkout UX, subscription billing, fraud prevention, and cross-border sales. Getting payments right is one of the highest-leverage decisions an ecommerce business makes."
      bodyMarkdown={body}
      faqs={faqs}
      relatedTopics={topicsFor(["payment-gateway", "payment-integration", "payment-processing", "payment-api", "fintech"])}
      relatedArticles={articlesFor(["checkout-optimization", "involuntary-churn-subscription", "cross-border-payments-india", "razorpay-vs-cashfree-vs-payu"])}
    />
  );
}
