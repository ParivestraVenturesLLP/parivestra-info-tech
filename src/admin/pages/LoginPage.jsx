import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { getAdminFlag } from "../../lib/firestore/admins";
import { Spinner } from "../../components/ui/Spinner";
import { BootstrapForm } from "../components/BootstrapForm";
import { LoginForm } from "../components/LoginForm";

export default function LoginPage() {
  const { user, isAdmin, loading: authLoading } = useAuth();
  const [adminExists, setAdminExists] = useState(null);

  useEffect(() => {
    getAdminFlag().then(setAdminExists);
  }, []);

  if (!authLoading && user && isAdmin) {
    return <Navigate to="/admin" replace />;
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-paper px-6">
      <div className="w-full max-w-sm">
        <p className="text-center font-serif text-2xl text-ink">Parivestra Admin</p>

        <div className="mt-8 rounded-2xl border border-border bg-paper-raised p-8">
          {adminExists === null ? (
            <div className="flex justify-center py-4">
              <Spinner className="h-6 w-6" />
            </div>
          ) : adminExists ? (
            <LoginForm />
          ) : (
            <BootstrapForm />
          )}
        </div>
      </div>
    </div>
  );
}
