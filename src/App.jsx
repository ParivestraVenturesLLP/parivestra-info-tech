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
        <Route path="/blog/:slug" element={<ArticlePage />} />
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
