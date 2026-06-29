/**
 * prerender.js — Static HTML generation for Google indexing
 *
 * Runs AFTER `vite build`. Creates dist/<route>/index.html for every route
 * so Googlebot sees a unique title, description, canonical, and visible body
 * content without needing to execute JavaScript.
 *
 * Blog routes are loaded dynamically from scripts/blog-routes.json so that
 * the publish-agent can add new routes without editing this file.
 *
 * Usage: node scripts/prerender.js
 */

import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const DIST      = path.resolve(__dirname, '../dist')
const BASE_URL  = 'https://blog.parivestra.com'

// ── Dynamic blog routes — managed by publish-agent ────────────────────────
const BLOG_ROUTES_FILE = path.resolve(__dirname, 'blog-routes.json')
let dynamicBlogRoutes = []
try {
  dynamicBlogRoutes = JSON.parse(fs.readFileSync(BLOG_ROUTES_FILE, 'utf-8'))
  console.log(`  Loaded ${dynamicBlogRoutes.length} blog routes from blog-routes.json`)
} catch {
  console.warn('  blog-routes.json not found — using static routes only')
}

// ── Static non-blog routes ─────────────────────────────────────────────────
const STATIC_ROUTES = [
  {
    path: '/',
    title: 'Payment Gateway Comparison & Fintech Guides — Parivestra Blog',
    description: 'In-depth payment gateway comparisons, fintech guides, UPI infrastructure, checkout optimization, subscription billing, and cross-border payments for Indian ecommerce.',
    keywords: 'payment gateway India, fintech guides, UPI payments, checkout optimization, payment gateway comparison',
    type: 'website',
    h1: 'Payment Gateway Comparison & Fintech Guides',
    intro: 'The complete payments and fintech resource for Indian ecommerce — gateway comparisons, UPI infrastructure, checkout optimization, subscription billing, and cross-border payments.',
  },
  {
    path: '/blog',
    title: 'Blog — Payment Gateway & Fintech Articles | Parivestra',
    description: 'All articles on payment gateways, UPI, fintech, checkout optimization, subscription billing, and cross-border payments for Indian businesses.',
    keywords: 'payment gateway blog, fintech articles India, UPI guide, checkout optimization blog, payment processing articles',
    type: 'website',
    h1: 'Payments & Fintech Blog',
    intro: 'Expert articles on payment gateways, UPI infrastructure, checkout optimization, subscription billing, cross-border payments, and fintech for Indian businesses.',
  },
  {
    path: '/topics/payment-gateway',
    title: 'Payment Gateway Hub: Best Payment Gateways in India (2026)',
    description: 'Complete guide to payment gateways in India — Razorpay, Cashfree, PayU, Stripe, CCAvenue compared with pricing, features, and integration guides.',
    keywords: 'best payment gateway India, payment gateway comparison India, Razorpay, Cashfree, PayU, Stripe India, payment gateway 2026',
    type: 'website',
    h1: 'Payment Gateway Hub — Best Payment Gateways in India',
    intro: 'Complete resource on payment gateways for Indian ecommerce and SaaS — comparisons, pricing guides, integration tutorials, and expert recommendations.',
  },
  {
    path: '/topics/fintech',
    title: 'Fintech Hub: India Fintech Guides & Payment Resources (2026)',
    description: 'Fintech guides for Indian businesses — payment infrastructure, digital payments, UPI, open banking, BNPL, and fintech regulations in India.',
    keywords: 'fintech India, India fintech guides, digital payments India, UPI fintech, open banking India, BNPL India, fintech payment solutions',
    type: 'website',
    h1: 'Fintech Hub — India Payments & Financial Technology Guides',
    intro: 'Comprehensive fintech resources for Indian businesses — UPI infrastructure, digital payment trends, open banking, BNPL, and regulatory guides.',
  },
  {
    path: '/topics/payment-processing',
    title: 'Payment Processing Hub: How Online Payments Work in India',
    description: 'Everything about payment processing in India — acquiring banks, payment processors, settlement cycles, MDR rates, and transaction reconciliation.',
    keywords: 'payment processing India, how payments work India, acquiring bank India, MDR India, settlement cycle India, payment processor India',
    type: 'website',
    h1: 'Payment Processing Hub — How Online Payments Work in India',
    intro: 'Deep dive into payment processing in India — from acquiring banks and payment processors to settlement cycles, MDR rates, and reconciliation workflows.',
  },
  {
    path: '/topics/payment-api',
    title: 'Payment API Hub: Integration Guides for Developers (2026)',
    description: 'Payment API guides for developers — Razorpay API, Stripe API, Cashfree API, webhooks, SDKs, and step-by-step payment integration tutorials.',
    keywords: 'payment API India, Razorpay API, Stripe API India, Cashfree API, payment integration guide, payment webhook',
    type: 'website',
    h1: 'Payment API Hub — Integration Guides for Indian Developers',
    intro: 'Complete payment API resources — Razorpay, Stripe, and Cashfree integration guides with code examples, webhook setup, and developer-first documentation.',
  },
  {
    path: '/topics/ecommerce-payments',
    title: 'Ecommerce Payments Hub: Payment Solutions for Online Stores',
    description: 'Complete ecommerce payment guide — UPI, BNPL, checkout optimization, subscription billing, international payments, and gateway selection for Indian stores.',
    keywords: 'ecommerce payments India, UPI ecommerce, BNPL India, checkout optimization, payment gateway ecommerce, online store payments India',
    type: 'website',
    h1: 'Ecommerce Payments Hub — Payment Solutions for Indian Online Stores',
    intro: 'Complete payments resource for Indian ecommerce — UPI, cards, BNPL, checkout optimization, subscription billing, and international payment solutions.',
  },
  {
    path: '/topics/payment-integration',
    title: 'Payment Integration Hub: How to Integrate Payment Gateways',
    description: 'Step-by-step payment integration guides — Razorpay, Stripe, Cashfree integration for web apps, mobile apps, and API-first businesses.',
    keywords: 'payment integration India, Razorpay integration, Stripe integration India, payment gateway setup, integrate payment gateway, payment SDK India',
    type: 'website',
    h1: 'Payment Integration Hub — Step-by-Step Gateway Integration Guides',
    intro: 'Step-by-step guides for integrating Razorpay, Stripe, and Cashfree into your web app, mobile app, or API-first platform.',
  },
  {
    path: '/statistics',
    title: 'India Payment Industry Statistics & Data 2026',
    description: 'India digital payments statistics 2026 — UPI transaction volume, ecommerce payment data, payment gateway market share, and fintech industry numbers.',
    keywords: 'India payment statistics 2026, UPI transaction volume, digital payments India data, ecommerce payment statistics India, fintech market share India',
    type: 'website',
    h1: 'India Payment Industry Statistics & Data 2026',
    intro: 'Key statistics on India digital payments, UPI transaction volume, ecommerce payment trends, payment gateway market share, and fintech industry data.',
  },
  {
    path: '/research',
    title: 'Payment Gateway Research Hub | Parivestra',
    description: 'In-depth research on payment gateways, payment infrastructure, fintech trends, and digital payments in India.',
    keywords: 'payment gateway research India, fintech research India, digital payment trends, payment infrastructure India',
    type: 'website',
    h1: 'Payment Gateway Research Hub',
    intro: 'Original research and analysis on payment gateways, payment infrastructure, fintech trends, and digital payments in India.',
  },
  {
    path: '/reports',
    title: 'Fintech & Payments Reports | Parivestra',
    description: 'Free fintech and payments reports — Indian payment gateway benchmarks, checkout conversion data, subscription billing analysis, and payment industry research.',
    keywords: 'fintech reports India, payment gateway benchmarks, checkout conversion report, payment industry report India, subscription billing report',
    type: 'website',
    h1: 'Fintech & Payments Reports',
    intro: 'Free reports on Indian payment gateways, checkout conversion benchmarks, subscription billing platforms, and payment industry analysis.',
  },
]

// ── Helpers ────────────────────────────────────────────────────────────────
function esc(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

// ── Merge static + dynamic routes (deduplicate by path) ───────────────────
const seen = new Set(STATIC_ROUTES.map((r) => r.path))
const ROUTES = [
  ...STATIC_ROUTES,
  ...dynamicBlogRoutes.filter((r) => !seen.has(r.path)),
]
console.log(`  Total routes to prerender: ${ROUTES.length} (${STATIC_ROUTES.length} static + ${ROUTES.length - STATIC_ROUTES.length} from blog-routes.json)`)

// ── Read base index.html ───────────────────────────────────────────────────
const baseHtml = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8')

let generated = 0
let failed    = 0

for (const route of ROUTES) {
  if (route.path === '/') continue // root already correct in dist/index.html

  const fullUrl   = `${BASE_URL}${route.path}`
  const fullTitle = route.title

  let html = baseHtml

  // <title>
  html = html.replace(
    /<title>[^<]*<\/title>/,
    `<title>${esc(fullTitle)}</title>`
  )

  // meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${esc(route.description)}"`
  )

  // meta keywords
  html = html.replace(
    /<meta name="keywords" content="[^"]*"/,
    `<meta name="keywords" content="${esc(route.keywords)}"`
  )

  // canonical
  html = html.replace(
    /<link rel="canonical" href="[^"]*"/,
    `<link rel="canonical" href="${fullUrl}"`
  )

  // hreflang alternates
  html = html.replace(
    /<link rel="alternate" hreflang="en" href="[^"]*"/g,
    `<link rel="alternate" hreflang="en" href="${fullUrl}"`
  )
  html = html.replace(
    /<link rel="alternate" hreflang="en-IN" href="[^"]*"/g,
    `<link rel="alternate" hreflang="en-IN" href="${fullUrl}"`
  )
  html = html.replace(
    /<link rel="alternate" hreflang="x-default" href="[^"]*"/g,
    `<link rel="alternate" hreflang="x-default" href="${fullUrl}"`
  )

  // og:url
  html = html.replace(
    /<meta property="og:url" content="[^"]*"/,
    `<meta property="og:url" content="${fullUrl}"`
  )

  // og:title
  html = html.replace(
    /<meta property="og:title" content="[^"]*"/,
    `<meta property="og:title" content="${esc(fullTitle)}"`
  )

  // og:description
  html = html.replace(
    /<meta property="og:description" content="[^"]*"/,
    `<meta property="og:description" content="${esc(route.description)}"`
  )

  // og:type
  html = html.replace(
    /<meta property="og:type" content="[^"]*"/,
    `<meta property="og:type" content="${route.type}"`
  )

  // twitter:title
  html = html.replace(
    /<meta name="twitter:title" content="[^"]*"/,
    `<meta name="twitter:title" content="${esc(fullTitle)}"`
  )

  // twitter:description
  html = html.replace(
    /<meta name="twitter:description" content="[^"]*"/,
    `<meta name="twitter:description" content="${esc(route.description)}"`
  )

  // Inject visible body content so Google indexes the page without JS
  // React's createRoot will replace this on load — no flash for real users
  const bodySnippet = `<div id="root"><main style="font-family:system-ui,-apple-system,sans-serif;max-width:900px;margin:0 auto;padding:40px 20px"><h1 style="font-size:2rem;font-weight:700;color:#111;margin:0 0 16px">${esc(route.h1)}</h1><p style="font-size:1.1rem;color:#444;line-height:1.7;margin:0 0 24px">${esc(route.intro)}</p><p style="font-size:0.9rem;color:#888">Loading interactive content…</p></main></div>`

  html = html.replace('<div id="root"></div>', bodySnippet)

  // Write dist/<route>/index.html
  const outDir  = path.join(DIST, route.path)
  const outFile = path.join(outDir, 'index.html')

  try {
    fs.mkdirSync(outDir, { recursive: true })
    fs.writeFileSync(outFile, html, 'utf-8')
    console.log(`  ✅ ${route.path}`)
    generated++
  } catch (err) {
    console.error(`  ❌ ${route.path}: ${err.message}`)
    failed++
  }
}

console.log(`\n  Generated: ${generated} | Failed: ${failed}`)
console.log('  Prerender complete — commit + deploy dist/ to Vercel\n')
