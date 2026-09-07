import Reveal from "@/components/home/Reveal";
import { createClient } from "@/lib/supabase/server";

type CreditPackage = {
  id: string;
  credits: number;
  price: number;
};

async function getCreditPackages(): Promise<CreditPackage[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("credit_packages")
    .select("id, credits, price")
    .order("sort_order");

  return (data as CreditPackage[]) ?? [];
}

export default async function Credits() {
  const packages = await getCreditPackages();

  return (
    <section className="bg-[#0b0a0f] px-6 pb-16">
      <Reveal className="mx-auto max-w-5xl rounded-[40px] border border-white/10 bg-[#0a0a12] px-8 py-16 text-center">
        <h2 className="text-4xl font-bold text-white">Credits</h2>
        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#a855f7]">
          Premium Scans
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="flex flex-col items-start rounded-[24px] border border-white/10 bg-[#0f0e19] p-8 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#a855f7]/40"
            >
              <p className="text-lg font-medium text-white">{pkg.credits} Credits</p>
              <p className="mt-4 text-4xl font-bold text-white">${pkg.price.toFixed(0)}</p>
              <div className="my-6 h-px w-full bg-white/10" />
              <button className="w-full rounded-full bg-[#9333ea] py-3 text-sm font-bold text-white transition-colors duration-300 hover:bg-[#7e22ce]">
                Buy
              </button>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
