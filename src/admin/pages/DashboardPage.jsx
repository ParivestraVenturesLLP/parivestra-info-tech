import { useMemo, useState } from "react";
import { useFirestoreQuery } from "../../hooks/useFirestoreQuery";
import { getAllArticlesAdmin } from "../../lib/firestore/articles";
import { getAllTopicsAdmin } from "../../lib/firestore/topics";
import { getAllReportsAdmin } from "../../lib/firestore/reports";
import { getAllStatsAdmin } from "../../lib/firestore/stats";
import { Spinner } from "../../components/ui/Spinner";
import { StatTile } from "../components/dashboard/StatTile";
import { PublishedOverTimeChart } from "../components/dashboard/PublishedOverTimeChart";
import { ArticlesByTopicChart } from "../components/dashboard/ArticlesByTopicChart";

const WEEKS_BACK = 12;

function buildWeeklySeries(articles) {
  const now = new Date();
  const weeks = [];

  for (let i = WEEKS_BACK - 1; i >= 0; i--) {
    const start = new Date(now);
    start.setDate(now.getDate() - i * 7);
    weeks.push({
      week: new Intl.DateTimeFormat("en-IN", { month: "short", day: "numeric" }).format(start),
      start: new Date(start.setHours(0, 0, 0, 0)),
      count: 0,
    });
  }

  for (const article of articles) {
    if (article.status !== "published" || !article.publishedAt?.toDate) continue;
    const publishedDate = article.publishedAt.toDate();
    for (let i = weeks.length - 1; i >= 0; i--) {
      if (publishedDate >= weeks[i].start) {
        weeks[i].count += 1;
        break;
      }
    }
  }

  return weeks.map(({ week, count }) => ({ week, count }));
}

function buildTopicBreakdown(articles, topics) {
  const counts = new Map();
  for (const article of articles) {
    if (article.status !== "published") continue;
    for (const slug of article.topicSlugs || []) {
      counts.set(slug, (counts.get(slug) || 0) + 1);
    }
  }

  const nameFor = (slug) => topics?.find((t) => t.slug === slug)?.name || slug;

  const sorted = [...counts.entries()]
    .map(([slug, count]) => ({ name: nameFor(slug), count }))
    .sort((a, b) => b.count - a.count);

  if (sorted.length <= 8) return sorted;

  const top = sorted.slice(0, 7);
  const otherCount = sorted.slice(7).reduce((sum, item) => sum + item.count, 0);
  return [...top, { name: "Other", count: otherCount }];
}

export default function DashboardPage() {
  const [showTopicTable, setShowTopicTable] = useState(false);

  const { data, loading, error } = useFirestoreQuery(async () => {
    const [articles, topics, reports, stats] = await Promise.all([
      getAllArticlesAdmin(),
      getAllTopicsAdmin(),
      getAllReportsAdmin(),
      getAllStatsAdmin(),
    ]);
    return { articles, topics, reports, stats };
  }, []);

  const weeklySeries = useMemo(() => (data ? buildWeeklySeries(data.articles) : []), [data]);
  const topicBreakdown = useMemo(
    () => (data ? buildTopicBreakdown(data.articles, data.topics) : []),
    [data]
  );

  if (loading) return <Spinner />;

  if (error || !data) {
    return (
      <p className="rounded-xl bg-status-critical/10 px-4 py-3 text-sm text-status-critical">
        Couldn't load dashboard data{error?.message ? `: ${error.message}` : "."}
      </p>
    );
  }

  const published = data.articles.filter((a) => a.status === "published").length;
  const drafts = data.articles.filter((a) => a.status === "draft").length;

  return (
    <div className="space-y-8">
      <h1 className="font-serif text-2xl text-ink">Dashboard</h1>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatTile label="Published articles" value={published} />
        <StatTile label="Drafts" value={drafts} />
        <StatTile label="Topics" value={data.topics.length} />
        <StatTile label="Reports" value={data.reports.length} />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-border bg-paper-raised p-6">
          <h2 className="font-serif text-lg text-ink">Published over time</h2>
          <p className="text-xs text-ink-faint">Last {WEEKS_BACK} weeks</p>
          <div className="mt-4">
            <PublishedOverTimeChart data={weeklySeries} />
          </div>
        </div>

        <div className="rounded-2xl border border-border bg-paper-raised p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-lg text-ink">Articles by topic</h2>
            <button
              onClick={() => setShowTopicTable((v) => !v)}
              className="text-xs font-medium text-accent hover:text-accent-hover"
            >
              {showTopicTable ? "View chart" : "View table"}
            </button>
          </div>
          <div className="mt-4">
            {showTopicTable ? (
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-border text-ink-faint">
                    <th className="py-2 font-medium">Topic</th>
                    <th className="py-2 font-medium">Articles</th>
                  </tr>
                </thead>
                <tbody>
                  {topicBreakdown.map((row) => (
                    <tr key={row.name} className="border-b border-border last:border-0">
                      <td className="py-2 text-ink">{row.name}</td>
                      <td className="py-2 text-ink-muted">{row.count}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <ArticlesByTopicChart data={topicBreakdown} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
