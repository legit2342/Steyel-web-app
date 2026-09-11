export default function DashboardLoader({ label = "Loading…" }: { label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-20 text-center">
      <div className="relative flex size-14 items-center justify-center">
        <span className="absolute inset-0 rounded-full border-2 border-white/10" />
        <span
          className="animate-spin-fade absolute inset-0 rounded-full border-2 border-transparent"
          style={{ borderTopColor: "#8b5fe8", borderRightColor: "#4c6fff" }}
        />
        <span className="size-2 rounded-full bg-gradient-to-r from-[#4c6fff] to-[#8b5fe8]" />
      </div>
      <p className="text-sm text-white/40">{label}</p>
    </div>
  );
}
