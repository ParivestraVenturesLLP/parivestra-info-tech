import { Route, Routes } from "react-router-dom";
import { AdminLayout } from "./AdminLayout";
import { RequireAdmin } from "./RequireAdmin";
import LoginPage from "./pages/LoginPage";
import DashboardPage from "./pages/DashboardPage";
import ArticlesListPage from "./pages/ArticlesListPage";
import ArticleEditPage from "./pages/ArticleEditPage";
import TopicsListPage from "./pages/TopicsListPage";
import TopicEditPage from "./pages/TopicEditPage";
import AuthorsListPage from "./pages/AuthorsListPage";
import AuthorEditPage from "./pages/AuthorEditPage";
import StatsListPage from "./pages/StatsListPage";
import StatEditPage from "./pages/StatEditPage";
import ReportsListPage from "./pages/ReportsListPage";
import ReportEditPage from "./pages/ReportEditPage";
import HeroSlidesListPage from "./pages/HeroSlidesListPage";
import HeroSlideEditPage from "./pages/HeroSlideEditPage";

export default function AdminApp() {
  return (
    <Routes>
      <Route path="login" element={<LoginPage />} />

      <Route element={<RequireAdmin />}>
        <Route element={<AdminLayout />}>
          <Route index element={<DashboardPage />} />

          <Route path="articles" element={<ArticlesListPage />} />
          <Route path="articles/new" element={<ArticleEditPage />} />
          <Route path="articles/:slug/edit" element={<ArticleEditPage />} />

          <Route path="topics" element={<TopicsListPage />} />
          <Route path="topics/new" element={<TopicEditPage />} />
          <Route path="topics/:slug/edit" element={<TopicEditPage />} />

          <Route path="authors" element={<AuthorsListPage />} />
          <Route path="authors/new" element={<AuthorEditPage />} />
          <Route path="authors/:slug/edit" element={<AuthorEditPage />} />

          <Route path="stats" element={<StatsListPage />} />
          <Route path="stats/new" element={<StatEditPage />} />
          <Route path="stats/:id/edit" element={<StatEditPage />} />

          <Route path="reports" element={<ReportsListPage />} />
          <Route path="reports/new" element={<ReportEditPage />} />
          <Route path="reports/:slug/edit" element={<ReportEditPage />} />

          <Route path="hero-slides" element={<HeroSlidesListPage />} />
          <Route path="hero-slides/new" element={<HeroSlideEditPage />} />
          <Route path="hero-slides/:slug/edit" element={<HeroSlideEditPage />} />
        </Route>
      </Route>
    </Routes>
  );
}
