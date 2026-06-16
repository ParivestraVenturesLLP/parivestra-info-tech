import SEOHead from '../components/seo/SEOHead'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import WhyPaymentsMatter from '../components/WhyPaymentsMatter'
import Ecosystem from '../components/Ecosystem'
import ProviderHub from '../components/ProviderHub'
import ResearchHub from '../components/ResearchHub'
import TrustSection from '../components/TrustSection'
import FeaturedArticles from '../components/FeaturedArticles'
import FAQ from '../components/FAQ'
import FinalCTA from '../components/FinalCTA'
import Sources from '../components/Sources'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <SEOHead
        title="Payment Gateway Comparison & Fintech Guides"
        description="The complete fintech and ecommerce payments resource. Compare payment gateways (Stripe, Razorpay, Cashfree, Adyen, PayPal), understand UPI infrastructure, digital wallets, BNPL, payment APIs, checkout optimization, and payment solutions for Indian and global businesses. Free guides by Parivestra."
        canonical="/"
        keywords="payment gateway, payment processing, payment integration, payment solutions, fintech, merchant services, ecommerce payments, payment APIs, UPI payments, subscription billing, cross-border payments, checkout optimization, Stripe vs Razorpay, best payment gateway India, fintech companies India"
        breadcrumbs={[{ name: 'Home', path: '/' }]}
        schema={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'Payment Gateway Comparison & Fintech Guides — Parivestra Blog',
          url: 'https://blog.parivestra.com/',
          isPartOf: { '@id': 'https://blog.parivestra.com/#website' },
          speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', 'h2', '.speakable', '.ai-answer', '.key-takeaway'],
          },
        }}
      />
      <Navbar />
      <main>
        <Hero />
        <WhyPaymentsMatter />
        <Ecosystem />
        <ProviderHub />
        <ResearchHub />
        <TrustSection />
        <FeaturedArticles />
        <FAQ />
        <FinalCTA />
        <Sources />
      </main>
      <Footer />
    </>
  )
}
