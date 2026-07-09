import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { PublicLayout } from "./components/layout/PublicLayout";
import { Spinner } from "./components/ui/Spinner";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import BlogIndex from "./pages/blog/BlogIndex";
import ArticlePage from "./pages/blog/ArticlePage";
import TopicPage from "./pages/topics/TopicPage";
import StatisticsPage from "./pages/StatisticsPage";
import ResearchPage from "./pages/ResearchPage";
import ReportsPage from "./pages/ReportsPage";
import ReportPage from "./pages/reports/ReportPage";
import PaymentProcessingTopic from "./pages/topics/static/PaymentProcessingTopic";
import FintechTopic from "./pages/topics/static/FintechTopic";
import EcommercePaymentsTopic from "./pages/topics/static/EcommercePaymentsTopic";
import PaymentGatewayTopic from "./pages/topics/static/PaymentGatewayTopic";
import PaymentAPITopic from "./pages/topics/static/PaymentAPITopic";
import PaymentIntegrationTopic from "./pages/topics/static/PaymentIntegrationTopic";
import StripeVsRazorpay from "./pages/blog/static/StripeVsRazorpay";
import PaddleVsStripe from "./pages/blog/static/PaddleVsStripe";
import RazorpayVsCashfree from "./pages/blog/static/RazorpayVsCashfree";
import PCIDSSGuide from "./pages/blog/static/PCIDSSGuide";
import CheckoutOptimization from "./pages/blog/static/CheckoutOptimization";
import CrossBorderPayments from "./pages/blog/static/CrossBorderPayments";
import InvoluntaryChurn from "./pages/blog/static/InvoluntaryChurn";
import UPIAutoPaySubscriptions from "./pages/blog/static/UPIAutoPaySubscriptions";

const AdminApp = lazy(() => import("./admin/AdminApp"));

function AdminBootLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-paper">
      <Spinner className="h-8 w-8" />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/stripe-vs-razorpay" element={<StripeVsRazorpay />} />
        <Route path="/blog/paddle-vs-stripe-saas" element={<PaddleVsStripe />} />
        <Route path="/blog/razorpay-vs-cashfree-vs-payu" element={<RazorpayVsCashfree />} />
        <Route path="/blog/pci-dss-ecommerce" element={<PCIDSSGuide />} />
        <Route path="/blog/checkout-optimization" element={<CheckoutOptimization />} />
        <Route path="/blog/cross-border-payments-india" element={<CrossBorderPayments />} />
        <Route path="/blog/involuntary-churn-subscription" element={<InvoluntaryChurn />} />
        <Route path="/blog/upi-autopay-subscriptions" element={<UPIAutoPaySubscriptions />} />
        <Route path="/blog/:slug" element={<ArticlePage />} />
        <Route path="/topics/payment-processing" element={<PaymentProcessingTopic />} />
        <Route path="/topics/fintech" element={<FintechTopic />} />
        <Route path="/topics/ecommerce-payments" element={<EcommercePaymentsTopic />} />
        <Route path="/topics/payment-gateway" element={<PaymentGatewayTopic />} />
        <Route path="/topics/payment-api" element={<PaymentAPITopic />} />
        <Route path="/topics/payment-integration" element={<PaymentIntegrationTopic />} />
        <Route path="/topics/:slug" element={<TopicPage />} />
        <Route path="/statistics" element={<StatisticsPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/reports" element={<ReportsPage />} />
        <Route path="/reports/:slug" element={<ReportPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route
        path="/admin/*"
        element={
          <Suspense fallback={<AdminBootLoader />}>
            <AdminApp />
          </Suspense>
        }
      />
    </Routes>
  );
}
