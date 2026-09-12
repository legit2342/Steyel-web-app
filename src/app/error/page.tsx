import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Error — Steyel",
  description: "Something went wrong.",
};

export default async function ErrorPage({
  searchParams,
}: {
  searchParams: Promise<{ message?: string }>;
}) {
  const { message } = await searchParams;

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-3 bg-zinc-50 px-4 text-center dark:bg-black">
      <h1 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">
        Something went wrong
      </h1>
      <p className="max-w-sm text-sm text-zinc-500 dark:text-zinc-400">
        {message ?? "An unexpected error occurred."}
      </p>
      <Link
        href="/login"
        className="mt-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
      >
        Back to login
      </Link>
    </div>
  );
}
