import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useFirestoreQuery } from "../../hooks/useFirestoreQuery";
import {
  createArticle,
  getArticleBySlug,
  updateArticle,
} from "../../lib/firestore/articles";
import { getAllAuthors } from "../../lib/firestore/authors";
import { readingTime } from "../../lib/format";
import { slugify } from "../../lib/slug";
import { Button } from "../../components/ui/Button";
import { Spinner } from "../../components/ui/Spinner";
import { SlugField } from "../components/SlugField";
import { ImageUploadField } from "../components/ImageUploadField";
import { MultiSelectTopics } from "../components/MultiSelectTopics";
import { RepeatableListField } from "../components/RepeatableListField";
import { MarkdownEditor } from "../components/MarkdownEditor";

const emptyArticle = {
  title: "",
  slug: "",
  dek: "",
  type: "blog",
  status: "draft",
  excerpt: "",
  contentMarkdown: "",
  coverImageUrl: "",
  coverImagePath: "",
  coverImageAlt: "",
  authorId: "",
  topicSlugs: [],
  keyTakeaways: [],
  faqs: [],
  seoTitle: "",
  seoDescription: "",
  canonicalUrl: "",
  featured: false,
};

export default function ArticleEditPage() {
  const { slug } = useParams();
  const isNew = !slug;

  const { data: existing, loading } = useFirestoreQuery(
    () => (isNew ? Promise.resolve(null) : getArticleBySlug(slug)),
    [slug]
  );
  const { data: authors } = useFirestoreQuery(() => getAllAuthors(), []);

  if (!isNew && loading) return <Spinner />;

  return <ArticleForm isNew={isNew} slug={slug} existing={existing} authors={authors} />;
}

function ArticleForm({ isNew, slug, existing, authors }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [form, setForm] = useState(() => ({ ...emptyArticle, ...existing }));
  const [originalStatus] = useState(existing?.status ?? "draft");
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
      const finalSlug = isNew ? form.slug || slugify(form.title) : slug;
      if (!finalSlug) throw new Error("A title or slug is required.");

      const payload = {
        ...form,
        readingTimeMinutes: readingTime(form.contentMarkdown),
      };
      delete payload.slug;

      if (isNew) {
        await createArticle(finalSlug, payload, user.uid);
      } else {
        const justPublished = originalStatus !== "published" && form.status === "published";
        await updateArticle(finalSlug, payload, { justPublished });
      }

      navigate("/admin/articles");
    } catch (err) {
      setError(err.message || "Failed to save article.");
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-3xl space-y-8 pb-20">
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-2xl text-ink">{isNew ? "New article" : "Edit article"}</h1>
        <div className="flex gap-3">
          <Button as="button" type="submit" variant="accent" size="sm" disabled={saving}>
            {saving ? "Saving…" : "Save"}
          </Button>
        </div>
      </div>

      {error && <p className="rounded-xl bg-status-critical/10 px-4 py-3 text-sm text-status-critical">{error}</p>}

      <div className="space-y-5 rounded-2xl border border-border bg-paper-raised p-6">
        <div>
          <label className="text-sm font-medium text-ink">Title</label>
          <input
            type="text"
            required
            value={form.title}
            onChange={(e) => update("title", e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
          />
        </div>

        <SlugField
          value={isNew ? form.slug || slugify(form.title) : slug}
          onChange={(v) => update("slug", v)}
          isNew={isNew}
        />

        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="text-sm font-medium text-ink">Type</label>
            <select
              value={form.type}
              onChange={(e) => update("type", e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
            >
              <option value="blog">Blog</option>
              <option value="research">Research</option>
            </select>
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
          <label className="text-sm font-medium text-ink">Dek (optional standfirst)</label>
          <input
            type="text"
            value={form.dek}
            onChange={(e) => update("dek", e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-ink">Excerpt</label>
          <textarea
            required
            rows={2}
            value={form.excerpt}
            onChange={(e) => update("excerpt", e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
          />
        </div>

        <div>
          <label className="text-sm font-medium text-ink">Author</label>
          <select
            value={form.authorId}
            onChange={(e) => update("authorId", e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
          >
            <option value="">Parivestra Research Desk</option>
            {authors?.map((a) => (
              <option key={a.slug} value={a.slug}>
                {a.name}
              </option>
            ))}
          </select>
        </div>

        <MultiSelectTopics value={form.topicSlugs} onChange={(v) => update("topicSlugs", v)} />

        <ImageUploadField
          label="Cover image"
          url={form.coverImageUrl}
          path={form.coverImagePath}
          slug={isNew ? form.slug || slugify(form.title) : slug}
          kind="cover"
          collectionName="articles"
          onChange={({ url, path }) => {
            update("coverImageUrl", url);
            update("coverImagePath", path);
          }}
        />

        {form.coverImageUrl && (
          <div>
            <label className="text-sm font-medium text-ink">Cover image alt text</label>
            <input
              type="text"
              value={form.coverImageAlt}
              onChange={(e) => update("coverImageAlt", e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
            />
          </div>
        )}

        <label className="flex items-center gap-2 text-sm text-ink">
          <input
            type="checkbox"
            checked={form.featured}
            onChange={(e) => update("featured", e.target.checked)}
            className="h-4 w-4 rounded border-border accent-accent"
          />
          Feature on homepage
        </label>
      </div>

      <div className="rounded-2xl border border-border bg-paper-raised p-6">
        <MarkdownEditor value={form.contentMarkdown} onChange={(v) => update("contentMarkdown", v)} />
      </div>

      <div className="rounded-2xl border border-border bg-paper-raised p-6">
        <RepeatableListField
          label="Key takeaways"
          type="text"
          items={form.keyTakeaways}
          onChange={(v) => update("keyTakeaways", v)}
        />
      </div>

      <div className="rounded-2xl border border-border bg-paper-raised p-6">
        <RepeatableListField label="FAQs" type="faq" items={form.faqs} onChange={(v) => update("faqs", v)} />
      </div>

      <div className="space-y-5 rounded-2xl border border-border bg-paper-raised p-6">
        <h2 className="text-sm font-semibold tracking-widest text-ink-faint uppercase">SEO</h2>
        <div>
          <label className="text-sm font-medium text-ink">SEO title (optional override)</label>
          <input
            type="text"
            value={form.seoTitle}
            onChange={(e) => update("seoTitle", e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-ink">SEO description (optional override)</label>
          <textarea
            rows={2}
            value={form.seoDescription}
            onChange={(e) => update("seoDescription", e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-ink">Canonical URL (if cross-posted)</label>
          <input
            type="url"
            value={form.canonicalUrl}
            onChange={(e) => update("canonicalUrl", e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
          />
        </div>
      </div>
    </form>
  );
}
