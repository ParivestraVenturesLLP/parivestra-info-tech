import { useState } from "react";
import { Link } from "react-router-dom";
import { AdminTable } from "../components/AdminTable";
import { ConfirmDialog } from "../components/ConfirmDialog";
import { Button } from "../../components/ui/Button";
import { Spinner } from "../../components/ui/Spinner";
import { EmptyState } from "../../components/ui/EmptyState";
import { useRefetchableQuery } from "../../hooks/useFirestoreQuery";
import { deleteAuthor, getAllAuthors } from "../../lib/firestore/authors";

export default function AuthorsListPage() {
  const { data: authors, loading, refetch } = useRefetchableQuery(() => getAllAuthors());
  const [pendingDelete, setPendingDelete] = useState(null);

  async function handleDelete() {
    await deleteAuthor(pendingDelete.slug);
    setPendingDelete(null);
    refetch();
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-2xl text-ink">Authors</h1>
        <Button to="/admin/authors/new" variant="accent" size="sm">
          New author
        </Button>
      </div>

      <div className="mt-6">
        {loading ? (
          <Spinner />
        ) : authors?.length ? (
          <AdminTable
            keyField="slug"
            editPath={(row) => `/admin/authors/${row.slug}/edit`}
            rows={authors}
            columns={[
              { key: "name", label: "Name" },
              { key: "title", label: "Title" },
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
            title="No authors yet"
            description="Authors are shown as bylines on articles and reports."
            action={
              <Link to="/admin/authors/new" className="text-sm font-medium text-accent">
                New author &rarr;
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
