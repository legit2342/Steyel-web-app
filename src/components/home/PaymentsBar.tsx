import Image from "next/image";

export default function PaymentsBar() {
  return (
    <section className="bg-[#0b0a0f] px-6 pb-8">
      <div
        className="mx-auto flex max-w-5xl flex-col items-center gap-6 rounded-[30px] border border-[#3704c1] px-8 py-12 text-center"
        style={{ backgroundImage: "linear-gradient(179deg, rgb(54,1,63) 124%, rgb(0,0,0) 107%)" }}
      >
        <p className="flex items-center gap-2 text-2xl font-light text-white">
          🔒 Secure payments powered by
          <Image src="/images/home/payments/stripe-logo.png" alt="Stripe" width={90} height={38} />
        </p>
        <Image
          src="/images/home/payments/cards-strip.png"
          alt="Visa, Mastercard, Discover, Amex, Maestro, Cirrus, Apple Pay, Google Pay"
          width={567}
          height={51}
          className="h-auto w-full max-w-md"
        />
      </div>
    </section>
  );
}
