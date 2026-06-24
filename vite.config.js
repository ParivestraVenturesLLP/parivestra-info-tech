import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// All routes that should be pre-rendered to static HTML.
// Google will receive real HTML for each of these — no JS execution needed.
const PRERENDER_ROUTES = [
  '/',
  '/blog',
  '/blog/razorpay-vs-cashfree-vs-payu',
  '/blog/stripe-vs-razorpay',
  '/blog/checkout-optimization',
  '/blog/involuntary-churn-subscription',
  '/blog/pci-dss-ecommerce',
  '/blog/paddle-vs-stripe-saas',
  '/blog/upi-autopay-subscriptions',
  '/blog/cross-border-payments-india',
  '/topics/payment-gateway',
  '/topics/fintech',
  '/topics/payment-processing',
  '/topics/payment-api',
  '/topics/ecommerce-payments',
  '/topics/payment-integration',
  '/statistics',
  '/research',
  '/reports',
]

export default defineConfig(async () => {
  // Dynamically import vite-plugin-prerender so build still works
  // even if the package hasn't been installed yet (dev mode).
  let prerenderPlugin = null
  try {
    const { default: Prerender } = await import('vite-plugin-prerender')
    prerenderPlugin = Prerender({
      staticDir: path.resolve(__dirname, 'dist'),
      routes:    PRERENDER_ROUTES,
    })
  } catch {
    // vite-plugin-prerender not installed — run: npm install --save-dev vite-plugin-prerender
    console.warn('[vite.config] vite-plugin-prerender not found — skipping static prerender. Run: npm install --save-dev vite-plugin-prerender')
  }

  return {
    plugins: [
      react(),
      tailwindcss(),
      ...(prerenderPlugin ? [prerenderPlugin] : []),
    ],
  }
})
