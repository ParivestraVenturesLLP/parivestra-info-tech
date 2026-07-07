import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useFirestoreQuery } from "../../hooks/useFirestoreQuery";
import { createReport, getReportBySlug, updateReport } from "../../lib/firestore/reports";
import { getAllAuthors } from "../../lib/firestore/authors";
import { slugify } from "../../lib/slug";
import { buildStoragePath, uploadFile } from "../../lib/storage/upload";
import { Button } from "../../components/ui/Button";
import { Spinner } from "../../components/ui/Spinner";
import { SlugField } from "../components/SlugField";
import { ImageUploadField } from "../components/ImageUploadField";
import { MultiSelectTopics } from "../components/MultiSelectTopics";
import { MarkdownEditor } from "../components/MarkdownEditor";

const emptyReport = {
  title: "",
  slug: "",
  summary: "",
  contentMarkdown: "",
  fileUrl: "",
  filePath: "",
  fileSizeLabel: "",
  coverImageUrl: "",
  coverImagePath: "",
  authorId: "",
  topicSlugs: [],
  status: "draft",
  featured: false,
  seoTitle: "",
  seoDescription: "",
};

export default function ReportEditPage() {
  const { slug } = useParams();
  const isNew = !slug;

  const { data: existing, loading } = useFirestoreQuery(
    () => (isNew ? Promise.resolve(null) : getReportBySlug(slug)),
    [slug]
  );
  const { data: authors } = useFirestoreQuery(() => getAllAuthors(), []);

  if (!isNew && loading) return <Spinner />;

  return <ReportForm isNew={isNew} slug={slug} existing={existing} authors={authors} />;
}

function ReportForm({ isNew, slug, existing, authors }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [form, setForm] = useState(() => ({ ...emptyReport, ...existing }));
  const [originalStatus] = useState(existing?.status ?? "draft");
  const [saving, setSaving] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(null);
  const [error, setError] = useState(null);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handlePdfSelect(e) {
    const file = e.target.files?.[0];
    if (!file) return;
    const currentSlug = isNew ? form.slug || slugify(form.title) : slug;
    if (!currentSlug) {
      setError("Add a title first before uploading a PDF.");
      return;
    }
    const path = buildStoragePath("reportFile", null, currentSlug, file.name);
    setUploadProgress(0);
    const result = await uploadFile(file, path, { onProgress: setUploadProgress });
    update("fileUrl", result.url);
    update("filePath", result.path);
    update("fileSizeLabel", `${(file.size / (1024 * 1024)).toFixed(1)} MB`);
    setUploadProgress(null);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setSaving(true);

    try {
      const finalSlug = isNew ? form.slug || slugify(form.title) : slug;
      if (!finalSlug) throw new Error("A title or slug is required.");

      const payload = { ...form };
      delete payload.slug;

      if (isNew) {
        await createReport(finalSlug, payload, user.uid);
      } else {
        const justPublished = originalStatus !== "published" && form.status === "published";
        await updateReport(finalSlug, payload, { justPublished });
      }

      navigate("/admin/reports");
    } catch (err) {
      setError(err.message || "Failed to save report.");
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-8 pb-20">
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-2xl text-ink">{isNew ? "New report" : "Edit report"}</h1>
        <Button as="button" type="submit" variant="accent" size="sm" disabled={saving}>
          {saving ? "Saving…" : "Save"}
        </Button>
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

        <div>
          <label className="text-sm font-medium text-ink">Summary</label>
          <textarea
            required
            rows={2}
            value={form.summary}
            onChange={(e) => update("summary", e.target.value)}
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
          collectionName="reports"
          onChange={({ url, path }) => {
            update("coverImageUrl", url);
            update("coverImagePath", path);
          }}
        />

        <div>
          <label className="text-sm font-medium text-ink">PDF file</label>
          {form.fileUrl ? (
            <p className="mt-1.5 text-sm text-ink-muted">
              Uploaded ({form.fileSizeLabel}) —{" "}
              <a href={form.fileUrl} target="_blank" rel="noreferrer" className="text-accent">
                view
              </a>
            </p>
          ) : (
            <input
              type="file"
              accept="application/pdf"
              onChange={handlePdfSelect}
              className="mt-1.5 text-sm text-ink-muted"
            />
          )}
          {uploadProgress !== null && (
            <p className="mt-1 text-xs text-ink-faint">Uploading… {uploadProgress}%</p>
          )}
        </div>

        <label className="flex items-center gap-2 text-sm text-ink">
          <input
            type="checkbox"
            checked={form.featured}
            onChange={(e) => update("featured", e.target.checked)}
            className="h-4 w-4 rounded border-border accent-accent"
          />
          Feature this report
        </label>
      </div>

      <div className="rounded-2xl border border-border bg-paper-raised p-6">
        <MarkdownEditor
          label="Full body (optional)"
          value={form.contentMarkdown}
          onChange={(v) => update("contentMarkdown", v)}
        />
      </div>
    </form>
  );
}
