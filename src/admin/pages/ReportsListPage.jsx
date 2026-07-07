import { useState } from "react";
import { Link } from "react-router-dom";
import { AdminTable } from "../components/AdminTable";
import { StatusBadge } from "../components/StatusBadge";
import { ConfirmDialog } from "../components/ConfirmDialog";
import { Button } from "../../components/ui/Button";
import { Spinner } from "../../components/ui/Spinner";
import { EmptyState } from "../../components/ui/EmptyState";
import { useRefetchableQuery } from "../../hooks/useFirestoreQuery";
import { deleteReport, getAllReportsAdmin } from "../../lib/firestore/reports";

export default function ReportsListPage() {
  const { data: reports, loading, refetch } = useRefetchableQuery(() => getAllReportsAdmin());
  const [pendingDelete, setPendingDelete] = useState(null);

  async function handleDelete() {
    await deleteReport(pendingDelete.slug);
    setPendingDelete(null);
    refetch();
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-2xl text-ink">Reports</h1>
        <Button to="/admin/reports/new" variant="accent" size="sm">
          New report
        </Button>
      </div>

      <div className="mt-6">
        {loading ? (
          <Spinner />
        ) : reports?.length ? (
          <AdminTable
            keyField="slug"
            editPath={(row) => `/admin/reports/${row.slug}/edit`}
            rows={reports}
            columns={[
              { key: "title", label: "Title" },
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
            title="No reports yet"
            description="Publish downloadable research briefs from here."
            action={
              <Link to="/admin/reports/new" className="text-sm font-medium text-accent">
                New report &rarr;
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
