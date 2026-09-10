import Header from "@/components/layout/Header";
import Reveal from "@/components/home/Reveal";

export default function LegalHero({
  title,
  description,
  effectiveDate,
}: {
  title: string;
  description: string;
  effectiveDate: string;
}) {
  return (
    <section
      className="relative overflow-hidden bg-[#020617]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 0%, rgba(88,28,135,0.5) 0%, transparent 60%)",
      }}
    >
      <Header />
      <div className="relative mx-auto flex max-w-3xl flex-col px-6 pb-16 pt-6">
        <Reveal>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">{title}</h1>
          <p className="mt-4 max-w-xl text-lg text-white/60">{description}</p>
          <p className="mt-6 text-sm font-medium uppercase tracking-wide text-white/40">
            Effective Date: {effectiveDate}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
