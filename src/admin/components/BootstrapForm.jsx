import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { bootstrapFirstAdmin } from "../../lib/firestore/admins";
import { useAuth } from "../../context/AuthContext";
import { Button } from "../../components/ui/Button";

export function BootstrapForm() {
  const navigate = useNavigate();
  const { markAsAdmin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      await bootstrapFirstAdmin(email, password);
      markAsAdmin();
      navigate("/admin", { replace: true });
    } catch (err) {
      setError(err.message || "Something went wrong creating the admin account.");
      setSubmitting(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <p className="rounded-xl bg-accent-soft px-4 py-3 text-sm text-accent">
          No admin account exists yet. Create the first one — it will have full
          access to the site content.
        </p>
      </div>

      <div>
        <label className="text-sm font-medium text-ink" htmlFor="email">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-ink" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1.5 w-full rounded-xl border border-border bg-paper px-4 py-2.5 text-sm text-ink focus:border-accent"
        />
      </div>

      {error && <p className="text-sm text-status-critical">{error}</p>}

      <Button as="button" type="submit" variant="accent" className="w-full" disabled={submitting}>
        {submitting ? "Creating account…" : "Create admin account"}
      </Button>
    </form>
  );
}
