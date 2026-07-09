import { StaticTopicLayout } from "../../../components/content/StaticTopicLayout";
import { topicsFor, articlesFor } from "./staticContentLinks";

const faqs = [
  {
    q: "What is a payment gateway?",
    a: "A payment gateway is a technology service that securely authorizes and processes card, UPI, and digital wallet transactions between a customer, a merchant, and a bank. It encrypts payment data, sends it to the payment processor, receives authorization from the issuing bank, and returns a success or decline response — all within 1–3 seconds. Examples: Stripe, Razorpay, Cashfree, Adyen, PayPal.",
  },
  {
    q: "What is the best payment gateway for Indian ecommerce?",
    a: "Razorpay and Cashfree are the top payment gateways for Indian ecommerce. Razorpay has the broadest product suite including UPI, net banking, RuPay, UPI AutoPay, payment links, and payouts. Cashfree offers faster settlements, sometimes same-day. For international transactions, Stripe or PayPal should be added alongside your Indian gateway.",
  },
  {
    q: "What is the difference between a payment gateway and a payment processor?",
    a: "The payment gateway is the front-end interface that captures payment data at checkout and encrypts it. The payment processor is the back-end system that moves money between the customer's bank and the merchant's bank. Most modern platforms like Stripe and Razorpay combine both functions, so the distinction matters mainly when evaluating fees or switching providers.",
  },
  {
    q: "How much does a payment gateway cost in India?",
    a: "Indian payment gateways typically charge 1.75%–2% per transaction for domestic cards and UPI. International cards add 1–1.5% for currency conversion. Additional costs include: setup fees (often waived), chargeback fees (₹500–₹1,000 per dispute), refund fees (some gateways keep the original processing fee), and monthly platform fees for premium features. Razorpay and Cashfree both offer competitive rates for Indian merchants.",
  },
  {
    q: "How do I integrate a payment gateway into my website?",
    a: "Three integration approaches: (1) Hosted checkout — redirect customers to the gateway's payment page; easiest and most secure. (2) Embedded checkout — use JS SDKs like Stripe.js or Razorpay Checkout.js to show payment fields within your site. (3) API integration — call the gateway's REST API directly for full customization. Most ecommerce platforms (Shopify, WooCommerce, Magento) offer pre-built payment gateway plugins for one-click setup.",
  },
  {
    q: "What payment methods do Indian payment gateways support?",
    a: "Leading Indian gateways (Razorpay, Cashfree, PayU) support: UPI (including QR codes and UPI AutoPay), debit and credit cards (Visa, Mastercard, RuPay, Amex), net banking (50+ banks), digital wallets (Paytm, PhonePe, Amazon Pay), BNPL (Simpl, LazyPay, ZestMoney), and EMI options. UPI accounts for over 50% of digital payment volume in India (NPCI data).",
  },
];

const body = `A payment gateway is the critical infrastructure that enables online businesses to accept digital payments. It securely captures customer payment data at checkout, routes it to the appropriate payment processor, and returns an authorization response — making every online transaction possible.

## Key takeaways

- A payment gateway encrypts and routes payment data — it does not store your customers' card numbers.
- For Indian ecommerce, Razorpay and Cashfree are the leading gateways — both support UPI, which accounts for 50%+ of digital payments in India (NPCI).
- Stripe is the strongest choice for international sales and developer-first teams; it does not support UPI or RuPay in India.
- Payment gateway fees in India: 1.75%–2% for domestic cards, plus 1–1.5% for international cards. Always check for chargeback and refund fees.
- Most ecommerce businesses qualify for PCI DSS SAQ A (the easiest compliance path) by using a hosted or embedded checkout.
- UPI AutoPay enables subscription billing through Indian gateways — no card required from the customer.

## What is a payment gateway?

> **Definition**
>
> A payment gateway is a merchant service that authorizes and processes digital payments — including credit cards, debit cards, UPI, digital wallets, and net banking — for online businesses. It encrypts sensitive payment data, transmits it securely to the payment processor and issuing bank, and returns a real-time authorization decision to complete or decline the transaction.

The payment gateway sits between your checkout page and the banking network. Without it, your store cannot accept digital payments. Modern gateways like Stripe, Razorpay, and Adyen have expanded far beyond simple card processing — they now include fraud detection, subscription management, payouts, reporting dashboards, and multi-currency support in a single platform.

In India, the RBI regulates payment gateways under the Payment Aggregators framework. Razorpay, Cashfree, and PayU hold PA licenses from RBI, making them fully regulated payment infrastructure providers for Indian merchants.

## How a payment gateway works, step by step

1. **Customer initiates payment** — Customer enters card/UPI details at checkout and clicks "Pay Now".
2. **Data encryption** — The payment gateway encrypts the payment data using SSL/TLS and tokenization to prevent interception.
3. **Authorization request** — The gateway sends the encrypted data to the payment processor (e.g., Visa/Mastercard network), which forwards it to the issuing bank.
4. **Bank authorization** — The issuing bank checks for fraud signals, sufficient funds, and approves or declines the transaction.
5. **Response returned** — The authorization result (approved/declined) is sent back through the processor to the gateway, then displayed to the customer — all in under 3 seconds.
6. **Settlement** — Approved transactions are batched and settled to the merchant's bank account within 1–3 business days (or same-day with Cashfree).

## Top payment gateways compared

| Gateway | Category | Highlight |
| --- | --- | --- |
| Razorpay | India Gateway | UPI + full Indian payment stack |
| Cashfree | India Gateway | Fastest settlements in India |
| Stripe | Global Gateway | Developer-first global infrastructure |
| Adyen | Enterprise Gateway | Unified global commerce |
| PayPal | Global Wallet | Consumer trust + global reach |
| PayU | India Gateway | Strong SMB adoption in India |

## Key entities

- **Payment Gateway:** Technology that authorizes digital payments
- **Payment Processor:** Moves funds between banks
- **Issuing Bank:** Customer's bank that approves/declines
- **Acquiring Bank:** Merchant's bank that receives funds
- **PCI DSS:** Payment security compliance standard
- **UPI:** India's real-time payment rail (NPCI)
- **Settlement:** Transfer of funds to merchant account

## India payments data (NPCI)

- **₹24T+** monthly UPI transaction value
- **50%+** share of digital payments via UPI
- **1.75%** average MDR for Indian gateways`;

export default function PaymentGatewayTopic() {
  return (
    <StaticTopicLayout
      seoTitle="Payment Gateway — What It Is, How It Works & Top Providers"
      seoDescription="Complete guide to payment gateways: how they work, best payment gateways for India (Razorpay, Cashfree, Stripe), fees, integration methods, and how to choose the right gateway for your ecommerce or SaaS business."
      path="/topics/payment-gateway"
      name="Payment Gateway"
      description="A payment gateway is the critical infrastructure that enables online businesses to accept digital payments. It securely captures customer payment data at checkout, routes it to the appropriate payment processor, and returns an authorization response — making every online transaction possible."
      bodyMarkdown={body}
      faqs={faqs}
      relatedTopics={topicsFor(["payment-processing", "payment-integration", "ecommerce-payments", "payment-api", "fintech"])}
      relatedArticles={articlesFor(["razorpay-vs-cashfree-vs-payu", "stripe-vs-razorpay", "pci-dss-ecommerce"])}
    />
  );
}
