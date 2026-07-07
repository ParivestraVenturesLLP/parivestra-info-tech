import { useState } from "react";
import { Link } from "react-router-dom";
import { AdminTable } from "../components/AdminTable";
import { StatusBadge } from "../components/StatusBadge";
import { ConfirmDialog } from "../components/ConfirmDialog";
import { Button } from "../../components/ui/Button";
import { Spinner } from "../../components/ui/Spinner";
import { EmptyState } from "../../components/ui/EmptyState";
import { useRefetchableQuery } from "../../hooks/useFirestoreQuery";
import { deleteHeroSlide, getAllHeroSlidesAdmin } from "../../lib/firestore/heroSlides";

export default function HeroSlidesListPage() {
  const { data: slides, loading, refetch } = useRefetchableQuery(() => getAllHeroSlidesAdmin());
  const [pendingDelete, setPendingDelete] = useState(null);

  async function handleDelete() {
    await deleteHeroSlide(pendingDelete.slug);
    setPendingDelete(null);
    refetch();
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl text-ink">Hero slides</h1>
          <p className="mt-1 text-sm text-ink-faint">
            Shown as the image slider on the home page hero. Only published slides appear, up to 3 at a time, ordered by "Order".
          </p>
        </div>
        <Button to="/admin/hero-slides/new" variant="accent" size="sm">
          New slide
        </Button>
      </div>

      <div className="mt-6">
        {loading ? (
          <Spinner />
        ) : slides?.length ? (
          <AdminTable
            keyField="slug"
            editPath={(row) => `/admin/hero-slides/${row.slug}/edit`}
            rows={slides}
            columns={[
              {
                key: "imageUrl",
                label: "",
                render: (r) =>
                  r.imageUrl ? (
                    <img src={r.imageUrl} alt="" className="h-10 w-14 rounded-lg object-cover" />
                  ) : (
                    <div className="h-10 w-14 rounded-lg bg-ink/5" />
                  ),
              },
              { key: "imageAlt", label: "Alt text" },
              { key: "order", label: "Order" },
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
            title="No hero slides yet"
            description="Add up to 3 images to populate the home page slider."
            action={
              <Link to="/admin/hero-slides/new" className="text-sm font-medium text-accent">
                New slide &rarr;
              </Link>
            }
          />
        )}
      </div>

      <ConfirmDialog
        open={!!pendingDelete}
        title="Delete this slide?"
        description="This cannot be undone."
        onConfirm={handleDelete}
        onCancel={() => setPendingDelete(null)}
      />
    </div>
  );
}
