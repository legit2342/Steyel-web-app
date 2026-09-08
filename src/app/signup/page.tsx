import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import AuthShell from "@/components/auth/AuthShell";
import SignupForm from "@/components/auth/SignupForm";

export default async function SignupPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; "check-email"?: string }>;
}) {
  const { error, "check-email": checkEmail } = await searchParams;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <AuthShell>
      {checkEmail ? (
        <>
          <h1 className="text-center text-2xl font-bold text-white sm:text-3xl">Check Your Email</h1>
          <p className="mt-4 rounded-lg bg-green-500/10 px-3 py-3 text-center text-sm text-green-400">
            Check your email to confirm your account before logging in.
          </p>
        </>
      ) : (
        <SignupForm error={error} />
      )}
    </AuthShell>
  );
}
