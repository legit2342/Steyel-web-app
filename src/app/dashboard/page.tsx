import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { logout } from "@/app/auth/actions";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-4 bg-zinc-50 px-4 text-center dark:bg-black">
      <p className="text-sm text-zinc-500 dark:text-zinc-400">Logged in as</p>
      <h1 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
        {user.email}
      </h1>
      <form action={logout}>
        <button
          type="submit"
          className="mt-2 rounded-full border border-black/[.1] px-5 py-2.5 text-sm font-medium transition-colors hover:bg-black/[.04] dark:border-white/[.15] dark:hover:bg-white/[.06]"
        >
          Log out
        </button>
      </form>
    </div>
  );
}
