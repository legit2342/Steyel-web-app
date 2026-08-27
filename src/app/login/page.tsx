import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { login } from "@/app/auth/actions";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const { error } = await searchParams;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/dashboard");
  }

  return (
    <div className="flex flex-1 items-center justify-center bg-zinc-50 px-4 dark:bg-black">
      <div className="w-full max-w-sm animate-in fade-in slide-in-from-bottom-2 duration-300">
        <div className="rounded-2xl border border-black/[.08] bg-white p-8 shadow-sm dark:border-white/[.08] dark:bg-zinc-950">
          <h1 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
            Log in
          </h1>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Welcome back. Enter your details below.
          </p>

          {error && (
            <p className="mt-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-600 dark:bg-red-950/40 dark:text-red-400">
              {error}
            </p>
          )}

          <form action={login} className="mt-6 flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="rounded-lg border border-black/[.1] bg-transparent px-3 py-2 text-sm outline-none transition-colors focus:border-zinc-950 dark:border-white/[.15] dark:focus:border-zinc-50"
              />
            </div>

            <div className="flex flex-col gap-1.5">
              <label htmlFor="password" className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="rounded-lg border border-black/[.1] bg-transparent px-3 py-2 text-sm outline-none transition-colors focus:border-zinc-950 dark:border-white/[.15] dark:focus:border-zinc-50"
              />
            </div>

            <button
              type="submit"
              className="mt-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
            >
              Log in
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-zinc-500 dark:text-zinc-400">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-medium text-zinc-950 dark:text-zinc-50">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
