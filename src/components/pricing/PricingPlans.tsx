import Image from "next/image";
import Reveal from "@/components/home/Reveal";
import { createClient } from "@/lib/supabase/server";
import { startPremiumCheckout } from "@/app/dashboard/billing-actions";

type PlanFeature = {
  label: string;
  enabled: boolean;
};

type Plan = {
  id: string;
  slug: string;
  name: string;
  price: number;
  billing_label: string;
  cta_label: string;
  cta_style: "primary" | "danger";
  is_featured: boolean;
  pricing_plan_features: PlanFeature[];
};

async function getPlans(): Promise<Plan[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("pricing_plans")
    .select("id, slug, name, price, billing_label, cta_label, cta_style, is_featured, pricing_plan_features(label, enabled, sort_order)")
    .order("sort_order")
    .order("sort_order", { referencedTable: "pricing_plan_features" });

  return (data as Plan[]) ?? [];
}

export default async function PricingPlans() {
  const plans = await getPlans();

  return (
    <section id="pricing-plan" className="bg-[#0b0a0f] px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="flex flex-col items-center pb-16">
          <h2 className="text-5xl font-semibold tracking-tight text-white">Pricing Plan</h2>
          <div className="mt-4 h-0.5 w-64 bg-gradient-to-r from-transparent via-[#9333ea] to-transparent shadow-[0_0_15px_0_#9333ea]" />
        </Reveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {plans.map((plan, i) => {
            const featured = plan.is_featured;
            return (
              <Reveal
                key={plan.id}
                delay={i * 150}
                className={`relative flex flex-col overflow-hidden rounded-[40px] border-2 p-12 transition-all duration-300 hover:-translate-y-2 ${
                  featured
                    ? "border-[#3655c1] bg-[#170f36]/50 hover:border-[#8b5fe8] hover:shadow-[0_25px_60px_-20px_rgba(139,95,232,0.5)]"
                    : "border-[#3655c1]/50 bg-[#0a0a0f]/80 hover:border-[#5b7cff] hover:shadow-[0_25px_60px_-20px_rgba(59,90,246,0.4)]"
                }`}
              >
                <div className="flex items-baseline justify-between">
                  <h3 className="text-3xl font-bold tracking-wide text-white">{plan.name}</h3>
                  <span className="text-5xl font-bold text-white">${plan.price.toFixed(2)}</span>
                </div>
                <p className="mt-2 text-white">{plan.billing_label}</p>
                <div className="my-8 h-px w-full bg-white/10" />
                <ul className="flex flex-1 flex-col gap-6">
                  {plan.pricing_plan_features.map((f) => (
                    <li key={f.label} className={`flex items-center gap-4 ${f.enabled ? "" : "opacity-50"}`}>
                      <span className="flex size-6 shrink-0 items-center justify-center rounded-full border border-[#3b82f6]">
                        <Image
                          src={f.enabled ? "/images/home/pricing/check.svg" : "/images/home/pricing/cross.svg"}
                          alt=""
                          width={10}
                          height={10}
                        />
                      </span>
                      <span className={f.enabled ? "text-white" : "text-[#9ca3af]"}>{f.label}</span>
                    </li>
                  ))}
                </ul>
                {plan.cta_style === "danger" ? (
                  <button className="mt-12 self-start rounded-full bg-[#da2619] px-8 py-3 text-base font-medium text-white transition-all duration-300 hover:scale-105 hover:bg-[#c0210f]">
                    {plan.cta_label}
                  </button>
                ) : plan.slug === "premium" ? (
                  <form action={startPremiumCheckout} className="mt-12 self-start">
                    <button
                      type="submit"
                      className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#4c6fff] to-[#8b5fe8] px-8 py-3 text-base font-medium text-white transition-all duration-300 hover:scale-105"
                    >
                      {plan.cta_label}
                      <span aria-hidden>↗</span>
                    </button>
                  </form>
                ) : (
                  <a
                    href="/download"
                    className="mt-12 inline-flex items-center gap-2 self-start rounded-full bg-gradient-to-r from-[#4c6fff] to-[#8b5fe8] px-8 py-3 text-base font-medium text-white transition-all duration-300 hover:scale-105"
                  >
                    {plan.cta_label}
                    <span aria-hidden>↗</span>
                  </a>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
