import SEOHead from '../components/seo/SEOHead'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Ecosystem from '../components/Ecosystem'
import ProviderHub from '../components/ProviderHub'
import FeaturedArticles from '../components/FeaturedArticles'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <SEOHead
        title="Payment Gateway Comparison & Fintech Guides"
        description="Compare payment gateways, UPI solutions, and fintech platforms for India and global ecommerce. In-depth guides on Stripe, Razorpay, Cashfree, Adyen, PayPal, checkout optimization, subscription billing, and cross-border payments. Free, unbiased research by Parivestra."
        canonical="/"
        keywords="payment gateway India, best payment gateway ecommerce, Stripe vs Razorpay, Razorpay vs Cashfree, UPI payment gateway, payment processing India, payment integration guide, fintech payment solutions, checkout optimization, subscription billing platform, cross-border payments India, PCI DSS compliance, merchant of record, payment APIs, ecommerce payments 2026"
        breadcrumbs={[{ name: 'Home', path: '/' }]}
        schema={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'WebSite',
              '@id': 'https://blog.parivestra.com/#website',
              url: 'https://blog.parivestra.com/',
              name: 'Parivestra — Payments & Fintech Intelligence',
              description: 'Free, unbiased payment gateway comparisons, UPI guides, and fintech research for Indian and global ecommerce businesses.',
              publisher: { '@id': 'https://parivestra.com/#organization' },
              inLanguage: 'en-IN',
              potentialAction: {
                '@type': 'SearchAction',
                target: { '@type': 'EntryPoint', urlTemplate: 'https://blog.parivestra.com/?s={search_term_string}' },
                'query-input': 'required name=search_term_string',
              },
            },
            {
              '@type': 'WebPage',
              '@id': 'https://blog.parivestra.com/#webpage',
              url: 'https://blog.parivestra.com/',
              name: 'Payment Gateway Comparison & Fintech Guides — Parivestra',
              isPartOf: { '@id': 'https://blog.parivestra.com/#website' },
              description: 'Compare payment gateways (Stripe, Razorpay, Cashfree, Adyen, PayPal), understand UPI infrastructure, checkout optimization, subscription billing, cross-border payments, and payment API reviews.',
              inLanguage: 'en-IN',
              datePublished: '2025-01-01',
              dateModified: '2026-06-29',
              speakable: { '@type': 'SpeakableSpecification', cssSelector: ['h1', 'h2', '.speakable'] },
              breadcrumb: {
                '@type': 'BreadcrumbList',
                itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://blog.parivestra.com/' }],
              },
            },
            {
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'What is the best payment gateway for ecommerce in India?',
                  acceptedAnswer: { '@type': 'Answer', text: 'For Indian ecommerce, Razorpay and Cashfree are the top choices. Razorpay has broader product depth — UPI, net banking, RuPay, UPI AutoPay for subscriptions, payment links, and payouts. Cashfree is known for faster, often same-day settlements. For international customers, add Stripe alongside your Indian gateway.' },
                },
                {
                  '@type': 'Question',
                  name: 'Stripe vs Razorpay — which should I choose for India?',
                  acceptedAnswer: { '@type': 'Answer', text: 'If your customers are mostly in India, choose Razorpay — it supports UPI, net banking, RuPay, and UPI AutoPay which Stripe does not support in India. For international sales or global SaaS, Stripe is stronger. Many Indian businesses use both: Razorpay for domestic, Stripe for international transactions.' },
                },
                {
                  '@type': 'Question',
                  name: 'How do payment gateway fees work?',
                  acceptedAnswer: { '@type': 'Answer', text: 'Transaction fee is the headline number (Razorpay ~2%, Stripe 2.9% + 30¢) but also check: FX fees (1–1.5% on international cards), chargeback fees (₹500–₹1000 per dispute), refund fees, monthly platform fees, and settlement charges. Add all at your actual transaction mix before comparing.' },
                },
                {
                  '@type': 'Question',
                  name: 'What payment methods should Indian ecommerce stores support?',
                  acceptedAnswer: { '@type': 'Answer', text: 'UPI is non-negotiable for India — it accounts for over 50% of digital payments. Beyond UPI: debit and credit cards (RuPay, Visa, Mastercard), net banking, and wallets (Paytm, PhonePe). For subscriptions, UPI AutoPay is critical. BNPL options like Simpl and LazyPay increase conversions for higher-value purchases.' },
                },
                {
                  '@type': 'Question',
                  name: 'What PCI DSS compliance level does my ecommerce store need?',
                  acceptedAnswer: { '@type': 'Answer', text: 'If you use a hosted checkout from Razorpay, Stripe, or PayPal (customer redirects to their page), you qualify for SAQ A — the simplest level, just a short annual self-assessment. Embedding card fields in your own page via JS SDK puts you on SAQ A-EP. Full SAQ D only applies if you store raw card data on your servers.' },
                },
              ],
            },
          ],
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <Ecosystem />
        <ProviderHub limit={4} />
        <FeaturedArticles />
        <FAQ limit={5} />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
