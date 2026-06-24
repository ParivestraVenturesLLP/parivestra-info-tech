import { Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import './index.css'
import { usePageTracking } from './hooks/usePageTracking'

// Main pages
import Home from './pages/Home'
import StatisticsPage from './pages/Statistics'
import ResearchPage from './pages/Research'
import ReportsPage from './pages/Reports'

// Topic pages
import PaymentGatewayTopic from './pages/topics/PaymentGateway'
import FintechTopic from './pages/topics/Fintech'
import PaymentProcessingTopic from './pages/topics/PaymentProcessing'
import PaymentAPITopic from './pages/topics/PaymentAPI'
import EcommercePaymentsTopic from './pages/topics/EcommercePayments'
import PaymentIntegrationTopic from './pages/topics/PaymentIntegration'

// Blog pages
import BlogIndex from './pages/blog/BlogIndex'
import RazorpayVsCashfree from './pages/blog/RazorpayVsCashfree'
import StripeVsRazorpay from './pages/blog/StripeVsRazorpay'
import CheckoutOptimization from './pages/blog/CheckoutOptimization'
import InvoluntaryChurn from './pages/blog/InvoluntaryChurn'
import PCIDSSGuide from './pages/blog/PCIDSSGuide'
import PaddleVsStripe from './pages/blog/PaddleVsStripe'
import UPIAutoPaySubscriptions from './pages/blog/UPIAutoPaySubscriptions'
import CrossBorderPayments from './pages/blog/CrossBorderPayments'

function ScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return null
}

function Wrap({ children }) {
  return <><ScrollToTop />{children}</>
}

export default function App() {
  usePageTracking()

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Blog */}
        <Route path="/blog" element={<Wrap><BlogIndex /></Wrap>} />
        <Route path="/blog/razorpay-vs-cashfree-vs-payu" element={<Wrap><RazorpayVsCashfree /></Wrap>} />
        <Route path="/blog/stripe-vs-razorpay" element={<Wrap><StripeVsRazorpay /></Wrap>} />
        <Route path="/blog/checkout-optimization" element={<Wrap><CheckoutOptimization /></Wrap>} />
        <Route path="/blog/involuntary-churn-subscription" element={<Wrap><InvoluntaryChurn /></Wrap>} />
        <Route path="/blog/pci-dss-ecommerce" element={<Wrap><PCIDSSGuide /></Wrap>} />
        <Route path="/blog/paddle-vs-stripe-saas" element={<Wrap><PaddleVsStripe /></Wrap>} />
        <Route path="/blog/upi-autopay-subscriptions" element={<Wrap><UPIAutoPaySubscriptions /></Wrap>} />
        <Route path="/blog/cross-border-payments-india" element={<Wrap><CrossBorderPayments /></Wrap>} />

        {/* Topic hubs */}
        <Route path="/topics/payment-gateway"    element={<Wrap><PaymentGatewayTopic /></Wrap>} />
        <Route path="/topics/fintech"            element={<Wrap><FintechTopic /></Wrap>} />
        <Route path="/topics/payment-processing" element={<Wrap><PaymentProcessingTopic /></Wrap>} />
        <Route path="/topics/payment-api"        element={<Wrap><PaymentAPITopic /></Wrap>} />
        <Route path="/topics/ecommerce-payments" element={<Wrap><EcommercePaymentsTopic /></Wrap>} />
        <Route path="/topics/payment-integration"element={<Wrap><PaymentIntegrationTopic /></Wrap>} />

        {/* Authority pages */}
        <Route path="/statistics" element={<Wrap><StatisticsPage /></Wrap>} />
        <Route path="/research"   element={<Wrap><ResearchPage /></Wrap>} />
        <Route path="/reports"    element={<Wrap><ReportsPage /></Wrap>} />
      </Routes>
    </div>
  )
}
