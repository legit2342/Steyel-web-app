import Header from "@/components/layout/Header";
import Reveal from "@/components/home/Reveal";

export default function FAQHero() {
  return (
    <section
      className="relative overflow-hidden bg-[#020617]"
      style={{
        backgroundImage:
          "radial-gradient(circle at 50% 0%, rgba(88,28,135,0.5) 0%, transparent 60%)",
      }}
    >
      <Header />
      <div className="relative mx-auto flex max-w-3xl flex-col items-center px-6 pb-16 pt-6 text-center">
        <Reveal>
          <h1 className="text-4xl font-bold text-white sm:text-5xl">
            Frequently Asked <span className="text-[#c4b5fd]">Questions</span>
          </h1>
        </Reveal>
      </div>
    </section>
  );
}
