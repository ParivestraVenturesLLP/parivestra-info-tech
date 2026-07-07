import { useState } from "react";
import { Link } from "react-router-dom";
import { AdminTable } from "../components/AdminTable";
import { StatusBadge } from "../components/StatusBadge";
import { ConfirmDialog } from "../components/ConfirmDialog";
import { Button } from "../../components/ui/Button";
import { Spinner } from "../../components/ui/Spinner";
import { EmptyState } from "../../components/ui/EmptyState";
import { useRefetchableQuery } from "../../hooks/useFirestoreQuery";
import { deleteStat, getAllStatsAdmin } from "../../lib/firestore/stats";
import { formatStat } from "../../lib/format";

export default function StatsListPage() {
  const { data: stats, loading, refetch } = useRefetchableQuery(() => getAllStatsAdmin());
  const [pendingDelete, setPendingDelete] = useState(null);

  async function handleDelete() {
    await deleteStat(pendingDelete.id);
    setPendingDelete(null);
    refetch();
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-2xl text-ink">Statistics</h1>
        <Button to="/admin/stats/new" variant="accent" size="sm">
          New stat
        </Button>
      </div>

      <div className="mt-6">
        {loading ? (
          <Spinner />
        ) : stats?.length ? (
          <AdminTable
            keyField="id"
            editPath={(row) => `/admin/stats/${row.id}/edit`}
            rows={stats}
            columns={[
              { key: "category", label: "Category" },
              { key: "label", label: "Label" },
              { key: "value", label: "Value", render: (r) => formatStat(r.value, r.format) },
              { key: "status", label: "Status", render: (r) => <StatusBadge status={r.status} /> },
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
            title="No statistics yet"
            description="Add cited data points to populate the Statistics page."
            action={
              <Link to="/admin/stats/new" className="text-sm font-medium text-accent">
                New stat &rarr;
              </Link>
            }
          />
        )}
      </div>

      <ConfirmDialog
        open={!!pendingDelete}
        title={`Delete "${pendingDelete?.label}"?`}
        description="This cannot be undone."
        onConfirm={handleDelete}
        onCancel={() => setPendingDelete(null)}
      />
    </div>
  );
}
