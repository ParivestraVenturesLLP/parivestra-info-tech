const topicNames = {
  "payment-gateway": "Payment Gateway",
  fintech: "Fintech",
  "payment-processing": "Payment Processing",
  "payment-api": "Payment APIs",
  "ecommerce-payments": "Ecommerce Payments",
  "payment-integration": "Payment Integration",
};

const articleTitles = {
  "stripe-vs-razorpay": "Stripe vs Razorpay: A Real Comparison for Indian Ecommerce Brands (2026)",
  "paddle-vs-stripe-saas": "Paddle vs Stripe for SaaS: When the Merchant of Record Model Makes Sense",
  "razorpay-vs-cashfree-vs-payu": "Razorpay vs Cashfree vs PayU: Which Indian Payment Gateway is Actually Better?",
  "pci-dss-ecommerce": "PCI Compliance for Ecommerce Store Owners: What You Actually Have to Do",
  "checkout-optimization": "7 Checkout Changes That Actually Move Conversion Rates",
  "cross-border-payments-india": "Cross-Border Payments for Indian Businesses: A Complete 2025 Guide",
  "involuntary-churn-subscription": "Why Subscribers Leave Even When They Don't Want To — And How to Fix It",
  "upi-autopay-subscriptions": "UPI AutoPay for Subscriptions: Complete Setup Guide for Indian SaaS & D2C",
};

export function topicsFor(slugs = []) {
  return slugs.filter((slug) => topicNames[slug]).map((slug) => ({ slug, name: topicNames[slug] }));
}

export function articlesFor(slugs = []) {
  return slugs.filter((slug) => articleTitles[slug]).map((slug) => ({ slug, title: articleTitles[slug] }));
}
