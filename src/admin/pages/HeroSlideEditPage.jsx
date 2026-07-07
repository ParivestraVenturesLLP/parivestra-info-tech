import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useFirestoreQuery } from "../../hooks/useFirestoreQuery";
import { createHeroSlide, getHeroSlideBySlug, updateHeroSlide } from "../../lib/firestore/heroSlides";
import { slugify } from "../../lib/slug";
import { Button } from "../../components/ui/Button";
import { Spinner } from "../../components/ui/Spinner";
import { SlugField } from "../components/SlugField";
import { ImageUploadField } from "../components/ImageUploadField";

const emptySlide = {
  title: "",
  slug: "",
  imageUrl: "",
  imagePath: "",
  imageAlt: "",
  linkUrl: "",
  order: 0,
  status: "draft",
};

export default function HeroSlideEditPage() {
  const { slug } = useParams();
  const isNew = !slug;

  const { data: existing, loading } = useFirestoreQuery(
    () => (isNew ? Promise.resolve(null) : getHeroSlideBySlug(slug)),
    [slug]
  );

  if (!isNew && loading) return <Spinner />;

  return <HeroSlideForm isNew={isNew} slug={slug} existing={existing} />;
}

function HeroSlideForm({ isNew, slug, existing }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [form, setForm] = useState(() => ({ ...emptySlide, ...existing }));
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState(null);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);

    if (!form.imageUrl) {
      setError("An image is required.");
      return;
    }

    setSaving(true);

    try {
      const finalSlug = isNew ? form.slug || slugify(form.title) : slug;
      if (!finalSlug) throw new Error("A title or slug is required.");

      const payload = { ...form, order: Number(form.order) || 0 };
      delete payload.slug;

      if (isNew) {
        await createHeroSlide(finalSlug, payload, user.uid);
      } else {
        await updateHeroSlide(finalSlug, payload);
      }

      navigate("/admin/hero-slides");
    } catch (err) {
      setError(err.message || "Failed to save slide.");
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-8 pb-20">
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-2xl text-ink">{isNew ? "New hero slide" : "Edit hero slide"}</h1>
        <Button as="button" type="submit" variant="accent" size="sm" disabled={saving}>
          {saving ? "Saving…" : "Save"}
        </Button>
      </div>

      {error && <p className="rounded-xl bg-status-critical/10 px-4 py-3 text-sm text-status-critical">{error}</p>}

      <div className="space-y-5 rounded-2xl border border-border bg-paper-raised p-6">
        <div>
          <label className="text-sm font-medium text-ink">Internal title</label>
          <input
            type="text"
            required
            value={form.title}
            onChange={(e) => update("title", e.target.value)}
            placeholder="e.g. Homepage slide 1"
            className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
          />
        </div>

        <SlugField
          value={isNew ? form.slug || slugify(form.title) : slug}
          onChange={(v) => update("slug", v)}
          isNew={isNew}
        />

        <ImageUploadField
          label="Image"
          url={form.imageUrl}
          path={form.imagePath}
          slug={isNew ? form.slug || slugify(form.title) : slug}
          kind="cover"
          collectionName="heroSlides"
          maxSizeMB={5}
          onChange={({ url, path }) => {
            update("imageUrl", url);
            update("imagePath", path);
          }}
        />

        <div>
          <label className="text-sm font-medium text-ink">Alt text</label>
          <input
            type="text"
            value={form.imageAlt}
            onChange={(e) => update("imageAlt", e.target.value)}
            placeholder="Describe the image for screen readers"
            className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-ink">Link URL (optional)</label>
          <input
            type="url"
            value={form.linkUrl}
            onChange={(e) => update("linkUrl", e.target.value)}
            placeholder="https://…"
            className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
          />
        </div>

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
      </div>
    </form>
  );
}
