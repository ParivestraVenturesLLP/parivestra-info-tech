import './index.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyPaymentsMatter from './components/WhyPaymentsMatter'
import Ecosystem from './components/Ecosystem'
import ProviderHub from './components/ProviderHub'
import ResearchHub from './components/ResearchHub'
import TrustSection from './components/TrustSection'
import FeaturedArticles from './components/FeaturedArticles'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
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
      </main>
      <Footer />
    </div>
  )
}
