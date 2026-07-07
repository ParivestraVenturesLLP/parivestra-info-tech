import { useState } from "react";
import { Link } from "react-router-dom";
import { AdminTable } from "../components/AdminTable";
import { StatusBadge } from "../components/StatusBadge";
import { ConfirmDialog } from "../components/ConfirmDialog";
import { Button } from "../../components/ui/Button";
import { Spinner } from "../../components/ui/Spinner";
import { EmptyState } from "../../components/ui/EmptyState";
import { useRefetchableQuery } from "../../hooks/useFirestoreQuery";
import { deleteTopic, getAllTopicsAdmin } from "../../lib/firestore/topics";

export default function TopicsListPage() {
  const { data: topics, loading, refetch } = useRefetchableQuery(() => getAllTopicsAdmin());
  const [pendingDelete, setPendingDelete] = useState(null);

  async function handleDelete() {
    await deleteTopic(pendingDelete.slug);
    setPendingDelete(null);
    refetch();
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-2xl text-ink">Topics</h1>
        <Button to="/admin/topics/new" variant="accent" size="sm">
          New topic
        </Button>
      </div>

      <div className="mt-6">
        {loading ? (
          <Spinner />
        ) : topics?.length ? (
          <AdminTable
            keyField="slug"
            editPath={(row) => `/admin/topics/${row.slug}/edit`}
            rows={topics}
            columns={[
              { key: "name", label: "Name" },
              { key: "order", label: "Order" },
              { key: "status", label: "Status", render: (r) => <StatusBadge status={r.status} /> },
              { key: "views", label: "Views", render: (r) => r.views || 0 },
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
            title="No topics yet"
            description="Topics organize articles into browsable hubs."
            action={
              <Link to="/admin/topics/new" className="text-sm font-medium text-accent">
                New topic &rarr;
              </Link>
            }
          />
        )}
      </div>

      <ConfirmDialog
        open={!!pendingDelete}
        title={`Delete "${pendingDelete?.name}"?`}
        description="This cannot be undone."
        onConfirm={handleDelete}
        onCancel={() => setPendingDelete(null)}
      />
    </div>
  );
}
