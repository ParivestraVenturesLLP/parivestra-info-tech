import { StaticArticleLayout } from "../../../components/content/StaticArticleLayout";
import { topicsFor, articlesFor } from "../../topics/static/staticContentLinks";

const faqs = [
  {
    q: "UPI AutoPay aur normal UPI payment mein kya fark hai?",
    a: "Normal UPI payment ek one-time transaction hai — customer har baar manually approve karta hai. UPI AutoPay (eMandate) ek standing instruction hai jisme customer ek baar approve karta hai future charges ke liye, phir scheduled debit automatically hota hai bina har baar approval ke. Exactly jaise bank mein ECS mandate hota tha, lekin UPI pe.",
  },
  {
    q: "UPI AutoPay setup karne ke liye customer ko kya karna hota hai?",
    a: "Customer ko sirf ek baar mandate approve karna hota hai apne UPI app mein (PhonePe, Google Pay, Paytm, BHIM, ya bank app). Woh maximum debit amount aur frequency dekh ke approve karte hain. Approval ke baad, har billing date pe automatic debit hoti hai. Agar customer mandate cancel karna chahte hain, woh apne UPI app mein ja ke cancel kar sakte hain.",
  },
  {
    q: "UPI AutoPay mein minimum aur maximum amount kya hai?",
    a: "NPCI ke guidelines ke mutabik: ₹1 se ₹1,00,000 per mandate (per transaction limit). Merchants ko mandate amount upfront declare karna hota hai. Actual charge declared amount se zyada nahi ho sakta. ₹15,000 tak ke charges notification-based hain (UPI app notification aata hai, auto-debit hoti hai). ₹15,000 se zyada ke liye customer ko OTP/PIN se approve karna hota hai.",
  },
  {
    q: "Kya UPI AutoPay credit card subscriptions se better hai?",
    a: "India ke liye haan — ek specific reason hai: UPI VPA (Virtual Payment Address) expire nahi hota jaise credit cards hote hain. 30-35% involuntary subscription churn card expiry ki wajah se hota hai. UPI AutoPay yeh problem structurally eliminate karta hai. Doosra advantage: India mein UPI penetration credit cards se zyada hai — 500M+ registered UPI users hain, credit cards sirf ~80M hain. UPI AutoPay aapko zyada large addressable market milti hai subscriptions ke liye.",
  },
  {
    q: "Razorpay Subscriptions ya Cashfree Subscriptions — UPI AutoPay ke liye kaunsa better hai?",
    a: "Dono production-ready solutions hain. Razorpay Subscriptions: mature API, better documentation, larger ecosystem, zyada integrations. Cashfree Subscriptions: competitive pricing, T+1 settlements (vs T+2 Razorpay), good for high-volume. If you're starting fresh: Razorpay for developer experience and documentation. If you're optimizing for settlement speed or cost at scale: evaluate Cashfree.",
  },
];

const keyTakeaways = [
  "UPI AutoPay is a one-time customer approval that enables automatic recurring debits — the customer doesn't need to take any action on subsequent charge dates.",
  "UPI VPAs (Virtual Payment Addresses) don't expire — this eliminates the card-expiry category of involuntary churn, which accounts for 30-35% of all failed subscription payments.",
  "NPCI mandates: ₹1 to ₹1,00,000 per transaction. Amounts under ₹15,000 debit automatically with notification. Above ₹15,000 requires PIN/OTP.",
  "Both Razorpay Subscriptions and Cashfree Subscriptions support UPI AutoPay with full API and webhook integration.",
  "500M+ registered UPI users in India — UPI AutoPay reaches 6x more Indians than credit cards for subscription billing.",
  "MDR on UPI = 0% — UPI subscription billing has no merchant discount rate, making it cost-free to accept.",
];

const body = `## What is UPI AutoPay?

UPI AutoPay is NPCI's solution for recurring payments on the UPI network. Before UPI AutoPay existed (launched 2020), Indian subscription businesses had two options: credit/debit card mandates (which require PCI compliance and have expiry issues) or NACH/ECS bank mandates (which took 7-30 days to register and had poor UX).

UPI AutoPay changes this. A customer sets up a mandate in their existing UPI app in under 60 seconds. No new app, no paper forms, no MICR codes. The mandate sits in their UPI app, and the merchant can debit on the billing date automatically.

## How UPI AutoPay works, step by step

- Merchant creates a mandate request via their payment gateway API (Razorpay, Cashfree, PayU) specifying: amount, frequency (daily/weekly/monthly/quarterly/annual), start date, end date, and description.
- Customer is sent a mandate approval link or shown a mandate QR code at checkout.
- Customer opens their UPI app, reviews mandate details (max amount, frequency), and approves with their UPI PIN.
- NPCI registers the mandate and confirms to the merchant — this is the one-time setup.
- On each billing date, the merchant calls the gateway API to execute the mandate charge.
- For amounts under ₹15,000: notification-based debit — customer gets a notification but no action needed. Debit happens automatically.
- For amounts above ₹15,000: the customer must approve with UPI PIN for each transaction.
- If mandate execution fails (insufficient balance), the gateway webhook notifies the merchant for retry logic.

> **UPI AutoPay vs card mandates vs NACH**
>
> UPI AutoPay wins on: setup speed (60 seconds vs 7+ days for NACH), user experience (existing app, no paper), reach (500M UPI users vs 80M credit cards), and no MDR (0% vs 1.75%+ for cards). The only area where card mandates have an edge: international customers and premium segment who prefer credit card billing for cashback/rewards.

## NPCI mandate limits and rules

| Parameter | Rule |
| --- | --- |
| Minimum amount | ₹1 per transaction |
| Maximum amount | ₹1,00,000 per transaction |
| Under ₹15,000 | Notification-based auto-debit (no PIN per transaction) |
| Above ₹15,000 | Customer must authenticate with UPI PIN each time |
| Frequency options | Daily, weekly, fortnightly, monthly, bi-monthly, quarterly, half-yearly, annual, as-presented |
| Mandate validity | Up to customer-defined end date, or until cancelled |
| Cancellation | Customer can cancel anytime from their UPI app |
| Registration time | Real-time (immediate after customer approval) |

## Setting up UPI AutoPay via Razorpay Subscriptions

### Step 1: create a plan

First, create a subscription plan in Razorpay that defines the billing amount, currency, and interval:

\`\`\`
POST /v1/plans
{
  "period": "monthly",
  "interval": 1,
  "item": {
    "name": "Pro Plan",
    "amount": 99900,
    "currency": "INR",
    "description": "Monthly subscription"
  }
}
\`\`\`

### Step 2: create a subscription

\`\`\`
POST /v1/subscriptions
{
  "plan_id": "plan_XXXX",
  "total_count": 12,
  "quantity": 1,
  "customer_notify": 1,
  "start_at": 1718025600
}
\`\`\`

### Step 3: customer approves mandate

Razorpay sends the customer a mandate link (or you embed the Razorpay checkout). Customer sees: subscription plan name, amount, frequency, and approves via UPI PIN in their app. On approval, you receive a \`subscription.authenticated\` webhook.

### Step 4: handle webhooks

- subscription.authenticated: mandate approved, subscription active — provision access.
- subscription.charged: payment successfully executed for a billing cycle.
- subscription.payment.failed: payment execution failed — trigger retry logic.
- subscription.cancelled: customer or merchant cancelled the mandate.
- subscription.halted: too many consecutive failures — subscription is suspended.

## Setting up UPI AutoPay via Cashfree Subscriptions

Cashfree's subscription API has a similar flow with a key difference: Cashfree offers T+1 settlements (faster than Razorpay's T+2 for subscription payments) and their API structure is slightly different.

| Feature | Razorpay Subscriptions | Cashfree Subscriptions |
| --- | --- | --- |
| UPI AutoPay | ✓ Full support | ✓ Full support |
| Settlement speed | T+2 | T+1 |
| Documentation quality | ★★★★★ | ★★★★☆ |
| Webhook reliability | ★★★★★ | ★★★★☆ |
| Dashboard UI | Excellent | Good |
| Transaction fee | 2% per transaction | 1.75% per transaction |
| Annual subscription fee | ₹0 | ₹0 |
| Retry logic | Configurable | Configurable |
| Pre-built dunning emails | Via Razorpay dashboard | Via webhooks only |
| Multi-plan support | ✓ | ✓ |

## Retry logic for failed UPI mandate executions

Even with UPI AutoPay, payment failures happen — primarily due to insufficient balance. Your retry strategy should be:

- Attempt 1 (Day 0): scheduled mandate execution — failure triggers payment.failed webhook.
- Attempt 2 (Day 3): most "insufficient balance" cases resolve within 72 hours (salary credit, wallet topup).
- Attempt 3 (Day 7): final retry before downgrade.
- After 3 failures: send dunning email with payment update link, downgrade to free tier or pause access.
- Unlike credit cards, no need for Account Updater — UPI VPA doesn't change.
- Keep mandate active through failures — customer can resolve without re-approving mandate.

> **UPI AutoPay + card fallback = maximum coverage**
>
> Best practice for Indian subscription businesses: offer UPI AutoPay as the primary option (prominent, first in checkout) with credit/debit card mandate as fallback. This covers: UPI-first customers (majority), credit card holders (premium segment), and provides redundancy for customers who may fail on UPI due to balance issues but have credit card availability.

## UPI AutoPay for D2C vs SaaS

| Use Case | D2C Subscriptions | SaaS Subscriptions |
| --- | --- | --- |
| Typical amount | ₹299–₹2,999/month | ₹499–₹49,999/month |
| NPCI auth requirement | Under ₹15K: auto-debit (no PIN) | Often under ₹15K: auto-debit. Over: PIN required |
| Customer friction | Very low | Acceptable (B2B customers expect it) |
| Churn risk | Higher (impulse cancel) | Lower (switching cost higher) |
| Best gateway | Razorpay for documentation, Cashfree for cost | Razorpay for maturity, Chargebee+Razorpay for advanced billing |
| Dunning sequence | Short (2–3 emails) | Extended (7+ days, in-app warnings) |

> **Verdict — UPI AutoPay is the default choice for subscription billing in India.**
>
> If you're building a subscription product for Indian customers, UPI AutoPay should be your first payment method — not a secondary option. The combination of zero MDR, no card expiry, 500M+ user reach, and instant mandate registration makes it structurally superior to card mandates for the Indian market. Implement it via Razorpay Subscriptions or Cashfree Subscriptions, add smart retry logic for failed executions, and set up pre-dunning alerts. Your involuntary churn will drop materially.`;

export default function UPIAutoPaySubscriptions() {
  return (
    <StaticArticleLayout
      seoTitle="UPI AutoPay for Subscriptions: Complete Setup Guide for Indian SaaS & D2C"
      seoDescription="Complete guide to UPI AutoPay (eMandate) for subscription businesses in India: how it works, setup via Razorpay/Cashfree, mandate limits, retry logic, and why it reduces involuntary churn by eliminating card expiry."
      path="/blog/upi-autopay-subscriptions"
      dek="India Payments"
      title="UPI AutoPay for Subscriptions: Complete Setup Guide for Indian SaaS & D2C"
      excerpt="How UPI AutoPay (eMandate) works for subscriptions in India: setup via Razorpay/Cashfree, mandate limits, retry logic, and why it reduces involuntary churn."
      date="12 June 2026"
      readingTimeMinutes={11}
      bodyMarkdown={body}
      keyTakeaways={keyTakeaways}
      faqs={faqs}
      relatedTopics={topicsFor(["payment-gateway", "ecommerce-payments", "fintech"])}
      relatedArticles={articlesFor(["involuntary-churn-subscription", "razorpay-vs-cashfree-vs-payu", "checkout-optimization"])}
    />
  );
}
