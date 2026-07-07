import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useFirestoreQuery } from "../../hooks/useFirestoreQuery";
import { createAuthor, getAuthorBySlug, updateAuthor } from "../../lib/firestore/authors";
import { slugify } from "../../lib/slug";
import { Button } from "../../components/ui/Button";
import { Spinner } from "../../components/ui/Spinner";
import { SlugField } from "../components/SlugField";
import { ImageUploadField } from "../components/ImageUploadField";

const emptyAuthor = {
  name: "",
  slug: "",
  title: "",
  bio: "",
  avatarUrl: "",
  avatarPath: "",
  twitterHandle: "",
  linkedinUrl: "",
  email: "",
};

export default function AuthorEditPage() {
  const { slug } = useParams();
  const isNew = !slug;

  const { data: existing, loading } = useFirestoreQuery(
    () => (isNew ? Promise.resolve(null) : getAuthorBySlug(slug)),
    [slug]
  );

  if (!isNew && loading) return <Spinner />;

  return <AuthorForm isNew={isNew} slug={slug} existing={existing} />;
}

function AuthorForm({ isNew, slug, existing }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [form, setForm] = useState(() => ({ ...emptyAuthor, ...existing }));
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

      const payload = { ...form };
      delete payload.slug;

      if (isNew) {
        await createAuthor(finalSlug, payload, user.uid);
      } else {
        await updateAuthor(finalSlug, payload);
      }

      navigate("/admin/authors");
    } catch (err) {
      setError(err.message || "Failed to save author.");
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-8 pb-20">
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-2xl text-ink">{isNew ? "New author" : "Edit author"}</h1>
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

        <div>
          <label className="text-sm font-medium text-ink">Title / role</label>
          <input
            type="text"
            value={form.title}
            onChange={(e) => update("title", e.target.value)}
            placeholder="e.g. Staff Writer"
            className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-ink">Bio</label>
          <textarea
            rows={3}
            value={form.bio}
            onChange={(e) => update("bio", e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
          />
        </div>

        <ImageUploadField
          label="Avatar"
          url={form.avatarUrl}
          path={form.avatarPath}
          slug={isNew ? form.slug || slugify(form.name) : slug}
          kind="avatar"
          collectionName="authors"
          maxSizeMB={2}
          onChange={({ url, path }) => {
            update("avatarUrl", url);
            update("avatarPath", path);
          }}
        />

        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="text-sm font-medium text-ink">Twitter/X handle</label>
            <input
              type="text"
              value={form.twitterHandle}
              onChange={(e) => update("twitterHandle", e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-ink">LinkedIn URL</label>
            <input
              type="url"
              value={form.linkedinUrl}
              onChange={(e) => update("linkedinUrl", e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
            />
          </div>
        </div>

        <div>
          <label className="text-sm font-medium text-ink">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
          />
        </div>
      </div>
    </form>
  );
}
