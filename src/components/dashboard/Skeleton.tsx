export default function Skeleton({ className = "" }: { className?: string }) {
  return <div className={`animate-shimmer rounded-xl bg-white/[0.04] ${className}`} />;
}
