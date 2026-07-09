import { StaticTopicLayout } from "../../../components/content/StaticTopicLayout";
import { topicsFor, articlesFor } from "./staticContentLinks";

const faqs = [
  {
    q: "What is payment processing?",
    a: "Payment processing is the end-to-end sequence of steps that moves money from a customer's bank or digital wallet to a merchant's account when a purchase is made. It involves: (1) data capture at checkout, (2) encryption and secure transmission, (3) authorization by the issuing bank, (4) clearing (calculating net amounts), and (5) settlement (actual fund transfer). Modern payment processors like Stripe, Razorpay, and Adyen handle all of these steps.",
  },
  {
    q: "What is the difference between payment processing and payment gateway?",
    a: "The payment gateway is the interface that captures payment data at checkout and transmits it securely (think: the door). The payment processor is the entity that actually executes the fund transfer between banks (think: the moving truck). In practice, most modern platforms (Stripe, Razorpay) are both gateway and processor bundled together, so merchants rarely need to engage them separately.",
  },
  {
    q: "How long does payment processing take?",
    a: "Authorization (the yes/no from the bank) happens in under 3 seconds. Settlement — the actual transfer of funds to the merchant's bank account — takes 1–3 business days for most gateways. Cashfree Payments offers same-day or instant settlements in India. Stripe typically settles in 2 business days in the US. International transactions may take 3–5 business days due to SWIFT processing.",
  },
  {
    q: "What is payment authorization vs settlement?",
    a: 'Authorization is the bank\'s real-time approval that a customer has sufficient funds and approves the transaction — it happens in under 3 seconds but no money has moved yet. Settlement is the actual transfer of funds from the customer\'s bank to the merchant\'s acquiring bank — this takes 1–3 business days. Between authorization and settlement, the funds are "held" (reserved) in the customer\'s account.',
  },
  {
    q: "What is a payment processor's MDR (Merchant Discount Rate)?",
    a: "MDR (Merchant Discount Rate) is the percentage fee a payment processor charges per transaction. In India: domestic UPI transactions have 0% MDR (government mandate). Debit cards: 0%–0.9% depending on transaction size. Credit cards: 1.5%–2.5%. International cards: 2.5%–3.5%. MDR is how payment processors and gateways make money on each transaction.",
  },
];

const body = `Payment processing involves 5 stages: (1) A customer initiates payment at checkout by entering card/UPI details. (2) The payment gateway encrypts the data and sends it to the payment processor. (3) The processor routes it to the card network (Visa/Mastercard) or UPI network (NPCI), which forwards it to the customer's issuing bank for authorization. (4) The bank approves or declines — response returned in under 3 seconds. (5) Approved transactions are cleared and settled to the merchant's bank account within 1–3 business days. Payment processors like Stripe, Razorpay, and Adyen manage all of these steps.

## Key takeaways

- Authorization (bank approval) happens in under 3 seconds. Settlement (actual money transfer) takes 1–3 business days.
- MDR (Merchant Discount Rate) is the processing fee: 0% for UPI in India (government mandate), 1.75%–2% for domestic cards, 2.5%–3.5% for international cards.
- Payment processors and payment gateways are often the same company (Stripe, Razorpay) but technically serve different functions in the processing chain.
- Failed authorizations are common (10–30% of transactions) — caused by insufficient funds, suspected fraud, or expired cards. Smart retry logic can recover many failed payments.
- Chargebacks occur when a customer disputes a charge. Merchants typically pay ₹500–₹1,000 per chargeback dispute fee, win rates average 20–40%.
- PCI DSS compliance is required for all merchants who accept card payments — SAQ A is the lightest path for hosted checkout users.

## The 5 stages of payment processing

1. **Initiation** — Customer enters payment details (card, UPI, wallet) at the merchant's checkout.
2. **Authorization** — Gateway encrypts data, processor routes it to the card network and issuing bank for real-time approval.
3. **Authentication** — For cards: 3DS2 verification may trigger. For UPI: customer approves in their UPI app.
4. **Clearing** — The transaction is confirmed and net amounts calculated after network and processor fees.
5. **Settlement** — Funds transferred to the merchant's acquiring bank account. Timeline: same-day to T+3 days.

## Payment processing fees in India

| Payment Method | MDR / Fee | Notes |
| --- | --- | --- |
| UPI | 0% | Government mandate — no MDR for UPI in India |
| Debit Card (RuPay) | 0%–0.9% | Waived for small transactions under ₹2,000 |
| Domestic Credit Card | 1.75%–2.5% | Varies by gateway and card network |
| Net Banking | 1%–1.75% | Bank-specific MDR applies |
| International Card | 2.5%–3.5% | Includes currency conversion fee |
| Wallets (Paytm etc.) | 1%–1.75% | Loaded wallet transactions |

*Source: Razorpay, Cashfree, RBI payment regulations (2025)*

## Processing terminology

- **Authorization:** Real-time bank approval
- **Settlement:** Actual fund transfer to merchant
- **MDR:** Merchant Discount Rate (transaction fee)
- **Chargeback:** Customer-disputed transaction reversal
- **Acquirer:** Merchant's bank/processor
- **Issuer:** Customer's bank that issued the card
- **3DS2:** Strong customer authentication standard`;

export default function PaymentProcessingTopic() {
  return (
    <StaticTopicLayout
      seoTitle="Payment Processing — How It Works, Authorization, Settlement & Fees"
      seoDescription="Complete guide to payment processing: how authorization and settlement work, payment processing fees (MDR), difference between gateway and processor, and how to choose the right payment processing solution for your ecommerce business."
      path="/topics/payment-processing"
      name="Payment Processing"
      description="Payment processing is the complete cycle of steps that enables a merchant to receive funds from a customer's payment. It spans real-time authorization, clearing, and settlement — turning a customer's tap-to-pay or card entry into actual money in a merchant's bank account."
      bodyMarkdown={body}
      faqs={faqs}
      relatedTopics={topicsFor(["payment-gateway", "payment-integration", "ecommerce-payments", "payment-api", "fintech"])}
      relatedArticles={articlesFor(["stripe-vs-razorpay", "razorpay-vs-cashfree-vs-payu", "pci-dss-ecommerce", "upi-autopay-subscriptions"])}
    />
  );
}
