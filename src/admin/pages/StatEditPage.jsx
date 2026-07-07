import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useFirestoreQuery } from "../../hooks/useFirestoreQuery";
import { createStat, getStatById, updateStat } from "../../lib/firestore/stats";
import { Button } from "../../components/ui/Button";
import { Spinner } from "../../components/ui/Spinner";

const emptyStat = {
  category: "",
  label: "",
  value: "",
  unit: "",
  format: "number",
  trend: "flat",
  deltaLabel: "",
  sourceName: "",
  sourceUrl: "",
  asOfDate: "",
  order: 0,
  status: "draft",
};

export default function StatEditPage() {
  const { id } = useParams();
  const isNew = !id;

  const { data: existing, loading } = useFirestoreQuery(
    () => (isNew ? Promise.resolve(null) : getStatById(id)),
    [id]
  );

  if (!isNew && loading) return <Spinner />;

  return <StatForm isNew={isNew} id={id} existing={existing} />;
}

function StatForm({ isNew, id, existing }) {
  const navigate = useNavigate();
  const { user } = useAuth();

  const [form, setForm] = useState(() => ({ ...emptyStat, ...existing }));
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
      const payload = {
        ...form,
        value: Number(form.value) || 0,
        order: Number(form.order) || 0,
      };
      delete payload.id;

      if (isNew) {
        await createStat(payload, user.uid);
      } else {
        await updateStat(id, payload);
      }

      navigate("/admin/stats");
    } catch (err) {
      setError(err.message || "Failed to save stat.");
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-8 pb-20">
      <div className="flex items-center justify-between">
        <h1 className="font-serif text-2xl text-ink">{isNew ? "New stat" : "Edit stat"}</h1>
        <Button as="button" type="submit" variant="accent" size="sm" disabled={saving}>
          {saving ? "Saving…" : "Save"}
        </Button>
      </div>

      {error && <p className="rounded-xl bg-status-critical/10 px-4 py-3 text-sm text-status-critical">{error}</p>}

      <div className="space-y-5 rounded-2xl border border-border bg-paper-raised p-6">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="text-sm font-medium text-ink">Category</label>
            <input
              type="text"
              required
              value={form.category}
              onChange={(e) => update("category", e.target.value)}
              placeholder="e.g. Market Trends"
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
          <label className="text-sm font-medium text-ink">Label</label>
          <input
            type="text"
            required
            value={form.label}
            onChange={(e) => update("label", e.target.value)}
            className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
          />
        </div>

        <div className="grid grid-cols-3 gap-5">
          <div>
            <label className="text-sm font-medium text-ink">Value</label>
            <input
              type="number"
              step="any"
              required
              value={form.value}
              onChange={(e) => update("value", e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-ink">Unit</label>
            <input
              type="text"
              value={form.unit}
              onChange={(e) => update("unit", e.target.value)}
              placeholder="e.g. Bn"
              className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-ink">Format</label>
            <select
              value={form.format}
              onChange={(e) => update("format", e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
            >
              <option value="number">Number</option>
              <option value="percent">Percent</option>
              <option value="currency">Currency (INR)</option>
              <option value="multiplier">Multiplier</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="text-sm font-medium text-ink">Trend</label>
            <select
              value={form.trend}
              onChange={(e) => update("trend", e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
            >
              <option value="up">Up</option>
              <option value="down">Down</option>
              <option value="flat">Flat</option>
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-ink">Delta label</label>
            <input
              type="text"
              value={form.deltaLabel}
              onChange={(e) => update("deltaLabel", e.target.value)}
              placeholder="e.g. +18% YoY"
              className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="text-sm font-medium text-ink">Source name</label>
            <input
              type="text"
              required
              value={form.sourceName}
              onChange={(e) => update("sourceName", e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-ink">Source URL</label>
            <input
              type="url"
              required
              value={form.sourceUrl}
              onChange={(e) => update("sourceUrl", e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div>
            <label className="text-sm font-medium text-ink">As of</label>
            <input
              type="text"
              value={form.asOfDate}
              onChange={(e) => update("asOfDate", e.target.value)}
              placeholder="e.g. FY2025-26"
              className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-ink">Order</label>
            <input
              type="number"
              value={form.order}
              onChange={(e) => update("order", e.target.value)}
              className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
            />
          </div>
        </div>
      </div>
    </form>
  );
}
