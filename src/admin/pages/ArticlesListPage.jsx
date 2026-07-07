import { useState } from "react";
import { Link } from "react-router-dom";
import { AdminTable } from "../components/AdminTable";
import { StatusBadge } from "../components/StatusBadge";
import { ConfirmDialog } from "../components/ConfirmDialog";
import { Button } from "../../components/ui/Button";
import { Spinner } from "../../components/ui/Spinner";
import { EmptyState } from "../../components/ui/EmptyState";
import { useRefetchableQuery } from "../../hooks/useFirestoreQuery";
import { deleteArticle, getAllArticlesAdmin } from "../../lib/firestore/articles";
import { formatDate } from "../../lib/format";

export default function ArticlesListPage() {
  const { data: articles, loading, refetch } = useRefetchableQuery(() => getAllArticlesAdmin());
  const [pendingDelete, setPendingDelete] = useState(null);

  async function handleDelete() {
    await deleteArticle(pendingDelete.slug);
    setPendingDelete(null);
    refetch();
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-2xl text-ink">Articles</h1>
        <Button to="/admin/articles/new" variant="accent" size="sm">
          New article
        </Button>
      </div>

      <div className="mt-6">
        {loading ? (
          <Spinner />
        ) : articles?.length ? (
          <AdminTable
            keyField="slug"
            editPath={(row) => `/admin/articles/${row.slug}/edit`}
            rows={articles}
            columns={[
              { key: "title", label: "Title" },
              { key: "type", label: "Type", render: (r) => (r.type === "research" ? "Research" : "Blog") },
              { key: "status", label: "Status", render: (r) => <StatusBadge status={r.status} /> },
              {
                key: "updatedAt",
                label: "Updated",
                render: (r) => (r.updatedAt ? formatDate(r.updatedAt) : "—"),
              },
              {
                key: "actions",
                label: "",
                render: (r) => (
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setPendingDelete(r);
                    }}
                    className="text-xs text-status-critical"
                  >
                    Delete
                  </button>
                ),
              },
            ]}
          />
        ) : (
          <EmptyState
            title="No articles yet"
            description="Create your first article to publish it to the blog."
            action={
              <Link to="/admin/articles/new" className="text-sm font-medium text-accent">
                New article &rarr;
              </Link>
            }
          />
        )}
      </div>

      <ConfirmDialog
        open={!!pendingDelete}
        title={`Delete "${pendingDelete?.title}"?`}
        description="This cannot be undone."
        onConfirm={handleDelete}
        onCancel={() => setPendingDelete(null)}
      />
    </div>
  );
}
