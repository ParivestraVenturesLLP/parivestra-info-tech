import { StaticTopicLayout } from "../../../components/content/StaticTopicLayout";
import { topicsFor, articlesFor } from "./staticContentLinks";

const faqs = [
  {
    q: "What are the different ways to integrate a payment gateway?",
    a: "Three integration approaches: (1) Hosted Payment Page — redirect customers to the gateway's payment page (e.g., Stripe Checkout, Razorpay Standard Checkout). Easiest, most secure, PCI SAQ A compliant. (2) Embedded Checkout — use JS SDKs (Stripe Elements, Razorpay Checkout.js) to render payment fields within your own site. More customizable, PCI SAQ A-EP. (3) Direct API Integration — call REST APIs directly from your server to handle the full payment flow. Maximum control, requires highest PCI compliance level.",
  },
  {
    q: "How do I integrate Razorpay into my website?",
    a: "Razorpay integration steps: (1) Create a Razorpay account and get API keys. (2) Install Razorpay SDK (npm install razorpay for server-side Node.js). (3) Create an Order on the server: razorpay.orders.create({ amount, currency, receipt }). (4) Load Razorpay Checkout.js on the front-end and pass the order_id. (5) Handle the payment response and verify the signature server-side using crypto.createHmac. (6) On success, fulfill the order. Set up webhooks to handle async events.",
  },
  {
    q: "How do I integrate Stripe into my website?",
    a: "Stripe integration steps: (1) Create a Stripe account and get API keys. (2) npm install stripe (server) and load Stripe.js (client). (3) Create a PaymentIntent on the server: stripe.paymentIntents.create({ amount, currency }). (4) Use Stripe Elements (client) to render the payment form with the client_secret. (5) Confirm the payment with stripe.confirmPayment(). (6) Handle webhook events (payment_intent.succeeded) for fulfillment. Use Stripe CLI for local webhook testing.",
  },
  {
    q: "What is PCI DSS compliance for payment integration?",
    a: "PCI DSS (Payment Card Industry Data Security Standard) is a security standard for handling card data. Integration type determines compliance scope: (1) Hosted checkout redirect → SAQ A (simplest, annual questionnaire). (2) JS SDK embedded fields → SAQ A-EP (more involved). (3) Direct API card handling → SAQ D (full compliance with 300+ controls). Modern integrations using hosted or JS SDK approaches always qualify for SAQ A or A-EP, which is manageable for any business.",
  },
  {
    q: "How do I add payment integration to a Shopify store?",
    a: "For Shopify payment integration in India: go to Settings → Payments → Third-Party Providers → search for Razorpay or Cashfree → install the official app → enter your API keys. Both Razorpay and Cashfree have certified Shopify apps that support UPI, cards, net banking, and wallets natively. For international Shopify stores, Shopify Payments (powered by Stripe) is the native option where available.",
  },
  {
    q: "What are payment webhooks and why do I need them?",
    a: "Webhooks are HTTP callbacks that payment gateways use to push real-time event notifications to your server — for events like payment.success, payment.failed, subscription.charged, and refund.created. You must implement webhooks because client-side redirects can fail (browser closes, network drops) and should never be relied upon alone to confirm payment. Webhook handlers must: (1) return 200 OK quickly, (2) verify the event signature, (3) process the event idempotently, and (4) update your database/fulfill orders.",
  },
];

const body = `Payment gateway integration has three approaches: (1) Hosted checkout — redirect customers to the gateway's payment page (Stripe Checkout, Razorpay Standard). Easiest, most secure, minimal code, PCI SAQ A compliant. (2) Embedded checkout — use gateway JS SDKs (Stripe Elements, Razorpay Checkout.js) to show payment fields within your site without redirecting. More customizable, PCI SAQ A-EP. (3) Full API integration — call payment REST APIs directly for maximum control. For most businesses, hosted or embedded checkout is the recommended approach. Always verify payment success via webhooks on the server, never rely solely on client-side redirects.

## Key takeaways

- Choose hosted checkout for fastest go-to-live with minimum code and PCI SAQ A compliance. Best for most small to medium ecommerce stores.
- Use embedded JS SDK checkout when you need design control within your site — Stripe Elements and Razorpay Checkout.js are the gold standard.
- Always create payment orders/intents on the server — never trust client-side amounts for security.
- Webhooks are mandatory for reliable payment confirmation — never rely solely on redirect callbacks which can fail due to browser/network issues.
- Verify all webhook signatures using the gateway's shared secret before processing any event.
- Use idempotency keys on payment creation calls to prevent duplicate charges if the request is retried.

## Integration by platform

| Platform | Method | Effort |
| --- | --- | --- |
| Shopify | Official Gateway Apps (Razorpay, Cashfree) | Low |
| WooCommerce | WooCommerce Payment Plugins | Low |
| Custom React/Next.js | Stripe.js + Payment Intents API | Medium |
| Custom Node.js | Razorpay/Stripe Node SDK + Webhooks | Medium |
| Mobile App (React Native) | Razorpay React Native SDK / Stripe Mobile | Medium |
| SaaS / Subscription | Stripe Billing / Chargebee / Razorpay Subscriptions | High |

## Integration security checklist

- Store API keys in environment variables, never in source code or frontend
- Create payment amounts on the server — never pass amounts from client to server
- Use HTTPS everywhere — payment gateways refuse non-HTTPS endpoints
- Implement Content Security Policy (CSP) headers to prevent XSS on payment pages
- Verify Razorpay payment signatures: HMAC-SHA256(order_id + "|" + payment_id, key_secret)
- Verify Stripe webhook signatures using stripe.webhooks.constructEvent()
- Use idempotency keys for all payment creation API calls to prevent duplicates
- Log all payment events with timestamps for fraud investigation and reconciliation
- Never store raw card numbers — use tokenization provided by the gateway
- Test in sandbox mode with all failure scenarios before going to production

## Integration key terms

- **Hosted Checkout:** Gateway-hosted payment page redirect
- **Embedded Checkout:** Payment fields in your own site via SDK
- **Webhook:** Async HTTP callback for payment events
- **Idempotency Key:** Deduplication token for API calls
- **PCI SAQ A:** Simplest compliance for hosted checkout
- **Signature Verification:** HMAC validation of webhook events
- **Tokenization:** Replace card data with a safe token`;

export default function PaymentIntegrationTopic() {
  return (
    <StaticTopicLayout
      seoTitle="Payment Integration — How to Integrate Payment Gateways (Stripe, Razorpay)"
      seoDescription="Complete payment integration guide: how to integrate Stripe, Razorpay, and Cashfree into your website, app, or Shopify store. Step-by-step setup, webhooks, PCI compliance, and platform-specific integration tutorials."
      path="/topics/payment-integration"
      name="Payment Integration"
      description="Payment integration is the technical process of connecting a payment gateway to your website, application, or platform so customers can pay. The right integration approach determines your PCI compliance scope, customization level, and development timeline."
      bodyMarkdown={body}
      faqs={faqs}
      relatedTopics={topicsFor(["payment-api", "payment-gateway", "payment-processing", "ecommerce-payments", "fintech"])}
      relatedArticles={articlesFor(["pci-dss-ecommerce", "stripe-vs-razorpay"])}
    />
  );
}
