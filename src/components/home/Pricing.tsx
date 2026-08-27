import Image from "next/image";

const BASIC_FEATURES = [
  { text: "Limited to three scans, refreshed daily", enabled: true },
  { text: "Close affordable matches", enabled: true },
  { text: "Save your favorite styles to personal Steyel boards.", enabled: false },
  { text: "Access to budget mode: close affordable matches", enabled: false },
  { text: "Save your favorite styles to personal Steyel boards.", enabled: false },
];

const MONTHLY_FEATURES = [
  "Save your favorite styles to personal Steyel boards.",
  "Close affordable matches",
  "Related items on each scan",
  "High quality scans for better accuracy",
  "12 daily scans",
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#0b0a0f] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col items-center pb-16">
          <h2 className="text-5xl font-semibold tracking-tight text-white">
            Pricing <span className="bg-gradient-to-r from-white to-[#a855f7] bg-clip-text text-transparent">Plan</span>
          </h2>
          <div className="mt-4 h-0.5 w-64 bg-gradient-to-r from-transparent via-[#9333ea] to-transparent shadow-[0_0_15px_0_#9333ea]" />
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="relative rounded-[40px] border-2 border-[#3655c1]/50 bg-[#0a0a0f]/80 p-12">
            <div className="flex items-baseline justify-between">
              <h3 className="text-3xl font-bold tracking-wide text-white">Basic</h3>
              <span className="text-5xl font-bold text-white">$0.00</span>
            </div>
            <p className="mt-2 text-white">Limited use, Lifetime access</p>
            <div className="my-8 h-px w-full bg-white/10" />
            <ul className="flex flex-col gap-6">
              {BASIC_FEATURES.map((f, i) => (
                <li key={i} className={`flex items-center gap-4 ${f.enabled ? "" : "opacity-50"}`}>
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-[#3b82f6]">
                    <Image
                      src={f.enabled ? "/images/home/pricing/check.svg" : "/images/home/pricing/cross.svg"}
                      alt=""
                      width={10}
                      height={10}
                    />
                  </span>
                  <span className={f.enabled ? "text-white" : "text-[#9ca3af]"}>{f.text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-[40px] border-2 border-[#3655c1] bg-[#170f36]/50 p-12">
            <span
              className="absolute -right-8 -top-6 flex w-[150px] items-center justify-center rounded-b-lg py-1 text-xs font-bold uppercase tracking-widest text-white"
              style={{ backgroundImage: "linear-gradient(135deg, rgb(99,102,241) 0%, rgb(168,85,247) 100%)" }}
            >
              Popular
            </span>
            <div className="flex items-baseline justify-between">
              <h3 className="text-3xl font-bold tracking-wide text-white">Monthly</h3>
              <span className="text-5xl font-bold text-white">$7.88</span>
            </div>
            <p className="mt-2 text-white">Unlimited use, paid monthly.</p>
            <div className="my-8 h-px w-full bg-white/10" />
            <ul className="flex flex-col gap-6">
              {MONTHLY_FEATURES.map((text) => (
                <li key={text} className="flex items-center gap-4">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-[#3b82f6]">
                    <Image src="/images/home/pricing/check.svg" alt="" width={10} height={10} />
                  </span>
                  <span className="text-white">{text}</span>
                </li>
              ))}
            </ul>
            <button className="mt-12 rounded-full bg-[#da2619] px-8 py-3 text-base font-medium text-white transition-colors hover:bg-[#c0210f]">
              Cancel
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
