import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AuthShell from "@/components/auth/AuthShell";
import LoginForm from "@/components/auth/LoginForm";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; "reset-sent"?: string; "reset-error"?: string }>;
}) {
  const { error, "reset-sent": resetSent, "reset-error": resetError } = await searchParams;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <AuthShell>
      <LoginForm error={error} resetSent={Boolean(resetSent)} resetError={resetError} />
    </AuthShell>
  );
}
