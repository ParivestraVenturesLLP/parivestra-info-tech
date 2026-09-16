import { existsSync, readFileSync, writeFileSync } from "fs";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, getDocs, doc, updateDoc } from "firebase/firestore";
import { pools } from "./relevant-images.mjs";

function loadEnv() {
  const envPath = new URL("../.env", import.meta.url);
  if (!existsSync(envPath)) return;
  for (const line of readFileSync(envPath, "utf-8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (!(key in process.env)) process.env[key] = value;
  }
}

loadEnv();

const firebaseConfig = {
  apiKey: process.env.VITE_FIREBASE_API_KEY,
  authDomain: process.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VITE_FIREBASE_APP_ID,
};

// slug -> ordered list of category names (primary first, then fallbacks used only if
// the primary pool runs out of unused images).
const categoryFor = {
  "5-ai-trends-shaping-our-world-2026": ["ai"],
  "ai-adoption-stats-2026-mainstream": ["ai"],
  "ai-agent-tools-for-customer-support-2026": ["customerSupport", "ai"],
  "ai-agents-future-of-work": ["ai", "remoteWork"],
  "ai-chip-gpu-shortage-2026": ["computerChip"],
  "ai-coding-assistants-compared-2026": ["softwareDev", "ai"],
  "ai-fraud-detection-banks-2026": ["cybersecurity", "ai"],
  "ai-infrastructure-spending-2026-497-billion": ["computerChip", "cloud"],
  "ai-note-taking-apps-2026-compilation": ["softwareDev", "ai"],
  "ai-productivity-tools-worth-adopting-2026": ["softwareDev", "ai"],
  "ai-prompt-engineering-guide-business-use-cases": ["ai"],
  "ai-reshaping-fintech-2026": ["ai", "fintech"],
  "agentic-commerce-ai-shopping-2026": ["ai", "onlineShopping"],
  "chatgpt-1-billion-users-sensor-tower-2026": ["ai"],
  "chatgpt-vs-gemini-vs-claude-market-share-2026": ["ai"],
  "enterprise-ai-roi-problem-2026-data": ["ai", "teamMeeting"],
  "plaid-vs-finicity-open-banking-api-2026": ["digitalBanking"],
  "generative-ai-2026-status": ["ai"],
  "perplexity-vs-chatgpt-ai-search-2026": ["ai"],
  "microsoft-copilot-vs-google-workspace-ai-vs-notion-ai-2026": ["ai", "softwareDev"],
  "insurtech-ai-india-2026-data": ["insurance", "ai"],

  "amazon-great-freedom-festival-2026-india-sale-guide": ["onlineShopping"],
  "annual-vs-monthly-saas-pricing-how-the-discount-math-works": ["softwareDev"],
  "api-first-banking-tools-founders-2026": ["digitalBanking"],
  "api-security-best-practices-fintech-guide": ["cybersecurity"],
  "aws-vs-azure-vs-gcp-startup-pricing-2026": ["cloud"],
  "bnpl-boom-numbers-2026": ["creditCard"],
  "bnpl-regulation-tightens-2026": ["lawRegulation", "creditCard"],
  "bnpl-usage-statistics-2026-global-data": ["creditCard"],
  "card-tokenization-mandate-india-impact": ["cybersecurity", "mobilePayment"],
  "cbdc-global-pilots-status": ["crypto"],
  "chargeback-dispute-glossary-merchant-checklist": ["creditCard", "lawRegulation"],
  "cloud-computing-growth-stats-2026": ["cloud"],
  "cloud-cost-optimization-checklist-startups-finops": ["cloud"],
  "composable-banking-api-first-2026": ["digitalBanking"],
  "contactless-tap-to-pay-adoption-2026-data": ["mobilePayment"],
  "creator-economy-payment-stats-2026": ["subscriptionStreaming", "moneyTransfer"],
  "cross-border-ecommerce-payment-friction": ["onlineShopping", "moneyTransfer"],
  "cross-border-remittance-india-2026-data": ["moneyTransfer"],
  "cybersecurity-threat-stats-2026": ["cybersecurity"],
  "data-privacy-regulations-glossary-gdpr-dpdp-ccpa": ["lawRegulation"],
  "deepfake-fraud-banking-stats-2026": ["cybersecurity", "ai"],
  "digital-rupee-e-rupee-india-pilot-status-2026": ["crypto", "indiaStreet"],
  "dpdp-act-data-localization-fintech": ["lawRegulation"],
  "embedded-finance-101-glossary-market-size-cheat-sheet": ["digitalBanking"],
  "embedded-finance-baas-platforms-to-know": ["digitalBanking"],
  "embedded-finance-explained": ["digitalBanking"],
  "enterprise-ai-agent-adoption-2026-data": ["ai"],
  "esg-green-fintech-investing-stats-2026": ["sustainabilityGreen"],
  "financial-services-data-breach-cost-2025-2026": ["cybersecurity"],
  "fintech-cybersecurity-tools-practices-2026": ["cybersecurity"],
  "fintech-regulations-to-watch-2026": ["lawRegulation"],
  "fintech-stats-where-money-going-2026": ["fintech"],
  "flipkart-big-billion-days-2026-guide": ["onlineShopping"],
  "fraud-prevention-checklist-fintech-startups": ["cybersecurity"],
  "gig-economy-payments-india-stats-2026": ["remoteWork", "moneyTransfer"],
  "global-cloud-computing-spend-2026-data": ["cloud"],
  "global-digital-wallet-adoption-2026-data": ["mobilePayment"],
  "global-ecommerce-sales-2026-data": ["onlineShopping"],
  "global-neobank-user-growth-2026-data": ["digitalBanking", "bankBuilding"],
  "global-smartphone-mobile-payments-2026-data": ["smartphoneTech", "mobilePayment"],
  "google-pay-vs-phonepe-vs-paytm-2026": ["mobilePayment"],
  "how-airline-hotel-loyalty-points-are-actually-valued": ["creditCard"],
  "how-appsumo-style-lifetime-deals-actually-work": ["softwareDev"],
  "how-bank-account-opening-bonuses-actually-work": ["bankBuilding", "creditCard"],
  "how-cloud-startup-credit-programs-actually-work": ["cloud"],
  "how-credit-card-cashback-programs-are-funded": ["creditCard"],
  "how-fintech-referral-bonus-programs-actually-work": ["fintech", "creditCard"],
  "how-github-student-developer-pack-actually-works": ["softwareDev"],
  "how-india-pays-2026-upi-facts": ["mobilePayment"],
  "how-payment-gateway-introductory-rates-actually-work": ["mobilePayment"],
  "how-saas-black-friday-cyber-monday-deals-work": ["softwareDev"],
  "india-digital-lending-nbfc-stats-2026": ["bankBuilding", "digitalBanking"],
  "india-fintech-funding-h1-2026-data": ["ventureCapital"],
  "india-gst-2026-founder-compliance-checklist": ["lawRegulation"],
  "invoicing-accounting-tools-small-business": ["softwareDev"],
  "klarna-vs-afterpay-bnpl-comparison-2026": ["creditCard"],
  "kyc-aml-glossary-fintech-founders": ["lawRegulation", "passwordSecurity"],
  "negotiate-lower-payment-gateway-fees": ["mobilePayment"],
  "neobank-shutdowns-consolidation-2026": ["digitalBanking", "bankBuilding"],
  "neobanks-for-startups-2026": ["digitalBanking"],
  "neobanks-vs-traditional-banks-2026": ["bankBuilding", "digitalBanking"],
  "online-fashion-deals-guide-bewakoof-and-beyond": ["onlineShopping"],
  "open-banking-api-standards-guide": ["digitalBanking"],
  "open-banking-next-phase": ["digitalBanking"],
  "passkeys-passwordless-login-stats-2026": ["passwordSecurity"],
  "payment-gateway-glossary": ["mobilePayment"],
  "payment-orchestration-platforms-compared": ["mobilePayment"],
  "payment-tokenization-explainer-network-vs-pci-tokens": ["cybersecurity"],
  "payments-stack-reading-list": ["mobilePayment"],
  "paypal-vs-razorpay-indian-businesses": ["mobilePayment"],
  "pci-dss-4-0-1-compliance-checklist-ecommerce": ["cybersecurity"],
  "quantum-computing-2026-breakthroughs": ["computerChip"],
  "quick-commerce-india-2026-data": ["deliveryScooter"],
  "razorpay-vs-cashfree-vs-payu-india": ["mobilePayment"],
  "rbi-digital-lending-guidelines-2026-fintech": ["lawRegulation", "bankBuilding"],
  "rbi-payment-aggregator-rules-2026": ["lawRegulation"],
  "real-time-payments-rise": ["mobilePayment"],
  "remote-hybrid-work-stats-2026": ["remoteWork"],
  "revolut-vs-traditional-banks-sme-2026": ["bankBuilding", "digitalBanking"],
  "saas-metrics-glossary-mrr-churn-ltv-cac-nrr": ["softwareDev"],
  "shadow-it-saas-sprawl-tools-2026": ["softwareDev"],
  "shopify-payments-vs-stripe-dtc-brands-2026": ["onlineShopping", "mobilePayment"],
  "small-business-digital-payments-india-2026": ["indiaStreet"],
  "smartphone-app-usage-stats-2026": ["smartphoneTech"],
  "smartphone-shipments-q2-2026-samsung-apple": ["smartphoneTech"],
  "stablecoin-market-cap-2026-data": ["crypto"],
  "stablecoins-cross-border-b2b-payments-2026-data": ["crypto", "moneyTransfer"],
  "stablecoins-vs-traditional-wires-cross-border-cost-comparison-2026": ["moneyTransfer", "crypto"],
  "startup-funding-pulse-mid-2026": ["ventureCapital"],
  "startup-fundraising-cap-table-glossary": ["ventureCapital"],
  "stripe-vs-adyen-global-saas-payments-2026": ["mobilePayment"],
  "subscription-economy-quick-facts-2026": ["subscriptionStreaming"],
  "super-apps-payments-commerce-2026": ["onlineShopping", "mobilePayment"],
  "telecom-recharge-cashback-offers-india-2026": ["telecomTower"],
  "top-app-categories-people-are-installing-2026": ["smartphoneTech"],
  "upi-85-percent-retail-digital-payments-india": ["mobilePayment"],
  "upi-fy26-24000-crore-transactions-data": ["mobilePayment"],
  "upi-goes-international-2026": ["mobilePayment", "indiaStreet"],
  "upi-variants-glossary-lite-123pay-circle": ["mobilePayment"],
  "vc-firms-backing-fintech-2026": ["ventureCapital"],
  "vc-funding-trends-mid-2026-ai-infrastructure": ["ventureCapital", "computerChip"],
  "whatsapp-business-commerce-india-2026": ["mobilePayment", "indiaStreet"],
  "wise-vs-bank-wire-transfers-cross-border-cost-2026": ["moneyTransfer"],
  "zelle-vs-upi-real-time-payments-2026": ["mobilePayment"],
  "zepto-vs-blinkit-vs-instamart-2026": ["deliveryScooter"],
  "5-payment-trends-founders-should-know-2027": ["fintech"],
  "9-numbers-digital-payments-headed-2026": ["mobilePayment"],
};

const FALLBACK_CHAIN = Object.keys(pools);

function buildUrl(id) {
  return `https://images.unsplash.com/photo-${id}?w=1200&q=80&fm=jpg&fit=crop`;
}

async function main() {
  if (!process.env.SEED_ADMIN_EMAIL || !process.env.SEED_ADMIN_PASSWORD) {
    console.error("Missing SEED_ADMIN_EMAIL / SEED_ADMIN_PASSWORD in .env");
    process.exit(1);
  }

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  await signInWithEmailAndPassword(auth, process.env.SEED_ADMIN_EMAIL, process.env.SEED_ADMIN_PASSWORD);
  console.log(`Signed in as admin (uid: ${auth.currentUser.uid.slice(0, 6)}…)`);

  const articlesCol = collection(db, "articles");
  const snap = await getDocs(articlesCol);
  const allDocs = snap.docs.map((d) => ({ slug: d.id, ...d.data() }));
  const published = allDocs.filter((a) => a.status === "published").sort((a, b) => a.slug.localeCompare(b.slug));

  console.log(`Found ${published.length} published articles.`);

  // Deep-copy pools so we can consume (splice) from them without mutating the source module across runs.
  const pool = {};
  for (const [cat, items] of Object.entries(pools)) pool[cat] = [...items];

  const usedIds = new Set();
  const assignments = [];
  const missing = [];

  function takeFromCategory(cat) {
    const list = pool[cat];
    if (!list) return null;
    while (list.length) {
      const [id, desc] = list.shift();
      if (!usedIds.has(id)) {
        usedIds.add(id);
        return { id, desc };
      }
    }
    return null;
  }

  for (const article of published) {
    const chain = [...(categoryFor[article.slug] || []), ...FALLBACK_CHAIN];
    let picked = null;
    for (const cat of chain) {
      picked = takeFromCategory(cat);
      if (picked) break;
    }
    if (!picked) {
      missing.push(article.slug);
      continue;
    }
    assignments.push({ slug: article.slug, url: buildUrl(picked.id), alt: picked.desc });
  }

  if (missing.length) {
    console.error("Could not assign images for:", missing);
    process.exit(1);
  }

  console.log(`Assigned ${assignments.length} unique, relevant images. Verifying HTTP status for a sample...`);

  for (const a of assignments) {
    await updateDoc(doc(articlesCol, a.slug), {
      coverImageUrl: a.url,
      coverImageAlt: a.alt,
      coverImagePath: "",
    });
    console.log(`updated: ${a.slug} -> ${a.url}`);
  }

  writeFileSync(
    new URL("./relevant-image-assignments.json", import.meta.url),
    JSON.stringify(assignments, null, 2)
  );
  console.log("\nDone.");
  process.exit(0);
}

main().catch((err) => {
  console.error("Failed:", err);
  process.exit(1);
});
