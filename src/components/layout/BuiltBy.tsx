export default function BuiltBy({ className = "" }: { className?: string }) {
  return (
    <p className={`text-sm text-white/30 ${className}`}>
      Built by{" "}
      <a
        href="https://www.devcipator.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="font-semibold text-white/50 transition-colors duration-200 hover:text-white"
      >
        Devcipator
      </a>
    </p>
  );
}
