import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useFirestoreQuery } from "../../hooks/useFirestoreQuery";
import { createTopic, getTopicBySlug, updateTopic } from "../../lib/firestore/topics";
import { slugify } from "../../lib/slug";
import { Button } from "../../components/ui/Button";
import { Spinner } from "../../components/ui/Spinner";
import { SlugField } from "../components/SlugField";
import { ImageUploadField } from "../components/ImageUploadField";
import { MarkdownEditor } from "../components/MarkdownEditor";

const emptyTopic = {
  name: "",
  slug: "",
  description: "",
  longDescriptionMarkdown: "",
  heroImageUrl: "",
  heroImagePath: "",
  order: 0,
  status: "draft",
  seoTitle: "",
  seoDescription: "",
  views: 0,
};

export default function TopicEditPage() {
  const { slug } = useParams();
  const isNew = !slug;

  const { data: existing, loading } = useFirestoreQuery(
    () => (isNew ? Promise.resolve(null) : getTopicBySlug(slug)),
    [slug]
  );

  if (!isNew && loading) return <Spinner />;

  return <TopicForm isNew={isNew} slug={slug} existing={existing} />;
}

function TopicForm({ isNew, slug, existing }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [form, setForm] = useState(() => ({ ...emptyTopic, ...existing }));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setSaving(true);

    try {
      const finalSlug = isNew ? form.slug || slugify(form.name) : slug;
      if (!finalSlug) throw new Error("A name or slug is required.");

      const payload = { ...form, order: Number(form.order) || 0 };
      delete payload.slug;

      if (isNew) {
        await createTopic(finalSlug, payload, user.uid);
      } else {
        await updateTopic(finalSlug, payload);
      }

      navigate("/admin/topics");
    } catch (err) {
      setError(err.message || "Failed to save topic.");
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-8 pb-20">
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-2xl text-ink">{isNew ? "New topic" : "Edit topic"}</h1>
        <Button as="button" type="submit" variant="accent" size="sm" disabled={saving}>
          {saving ? "Saving…" : "Save"}
        </Button>
      </div>

      {error && <p className="rounded-xl bg-status-critical/10 px-4 py-3 text-sm text-status-critical">{error}</p>}

      <div className="space-y-5 rounded-2xl border border-border bg-paper-raised p-6">
        <div>
          <label className="text-sm font-medium text-ink">Name</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
          />
        </div>

        <SlugField
          value={isNew ? form.slug || slugify(form.name) : slug}
          onChange={(v) => update("slug", v)}
          isNew={isNew}
        />

        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="text-sm font-medium text-ink">Order</label>
            <input
              type="number"
              value={form.order}
              onChange={(e) => update("order", e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-ink">Status</label>
            <select
              value={form.status}
              onChange={(e) => update("status", e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
            >
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-ink">Description</label>
          <textarea
            required
            rows={2}
            value={form.description}
            onChange={(e) => update("description", e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
          />
        </div>

        <ImageUploadField
          label="Hero image"
          url={form.heroImageUrl}
          path={form.heroImagePath}
          slug={isNew ? form.slug || slugify(form.name) : slug}
          kind="cover"
          collectionName="topics"
          onChange={({ url, path }) => {
            update("heroImageUrl", url);
            update("heroImagePath", path);
          }}
        />
      </div>

      <div className="rounded-2xl border border-border bg-paper-raised p-6">
        <MarkdownEditor
          label="Hub page body (optional)"
          value={form.longDescriptionMarkdown}
          onChange={(v) => update("longDescriptionMarkdown", v)}
        />
      </div>
    </form>
  );
}
