import Skeleton from "@/components/dashboard/Skeleton";

export default function AccountLoading() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="flex flex-col gap-3">
          <Skeleton className="h-9 w-56" />
          <Skeleton className="h-4 w-72" />
        </div>
        <div className="flex items-center gap-3">
          <Skeleton className="size-9 rounded-full" />
          <Skeleton className="h-4 w-24" />
          <Skeleton className="h-6 w-24 rounded-full" />
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
        <Skeleton className="h-5 w-32" />
        <div className="flex items-center gap-6">
          <Skeleton className="size-20 rounded-full" />
          <div className="flex flex-col gap-3">
            <Skeleton className="h-10 w-40 rounded-full" />
            <Skeleton className="h-3 w-32" />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
        <Skeleton className="h-5 w-40" />
        <Skeleton className="h-11 w-full rounded-xl" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Skeleton className="h-11 w-full rounded-xl" />
          <Skeleton className="h-11 w-full rounded-xl" />
        </div>
        <Skeleton className="h-11 w-40 rounded-full" />
      </div>

      <div className="flex flex-col gap-4 rounded-[28px] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
        <Skeleton className="h-5 w-32" />
        <Skeleton className="h-16 w-full rounded-2xl" />
      </div>
    </div>
  );
}
