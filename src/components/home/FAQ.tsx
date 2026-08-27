"use client";

import Image from "next/image";
import { useState } from "react";

const QUESTIONS = [
  {
    q: "How does Steyel work?",
    a: "The app utilizes a pretrained machine learning model to analyze the uploaded images and then compares the identified items with an external database to find matching brands and similar products. The app then retrieves information such as brand names, prices, and possible purchase locations to provide the user with relevant details about the clothing items in the image.",
  },
  {
    q: "How does the app determine the price of the items?",
    a: "Steyel cross-references detected items against a live catalog of retailer pricing and stock data, so the price shown reflects current availability rather than a static estimate.",
  },
  {
    q: "How accurate is the information provided by the app?",
    a: "Our vision model recognizes 200+ garment types with 99.2% accuracy, though results can vary with photo quality and lighting.",
  },
  {
    q: "Can I purchase the items directly through the app?",
    a: "Yes — matched items link straight to the retailer so you can buy instantly, or save them to a board for later.",
  },
  {
    q: "Does the image need to include someone well-known?",
    a: "No, any photo works — a street style shot, a magazine tear, or your own outfit flat-lay.",
  },
  {
    q: "Can I upload multiple images at once?",
    a: "Currently Steyel processes one outfit photo per scan to keep detection accuracy high, with support for batch uploads on the roadmap.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="bg-[#0b0a0f] px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-medium text-white sm:text-5xl">Frequently Asked Questions</h2>
        <p className="mt-4 text-lg font-light text-white/60">
          If you have further pressing questions, or require any assistance, please{" "}
          <a href="#contact" className="font-bold text-white underline">
            contact us
          </a>
        </p>

        <div className="mt-12 flex flex-col gap-4 text-left">
          {QUESTIONS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.q}
                className={`overflow-hidden rounded-[20px] border border-white/10 backdrop-blur-md transition-colors ${
                  isOpen ? "bg-[#8607ff]/50" : "bg-white/[0.02]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="flex w-full items-center justify-between gap-4 px-8 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg text-white">{item.q}</span>
                  <Image
                    src="/images/home/faq/chevron1.svg"
                    alt=""
                    width={14}
                    height={8}
                    className={`shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isOpen && (
                  <p className="px-8 pb-6 text-base leading-relaxed text-white/50">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
