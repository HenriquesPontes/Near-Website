"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    question: "Are there false positives?",
    answer:
      "Yes. Because we rely on Bluetooth manufacturer signatures, other devices from the same brands (like Meta Quest VR headsets or certain Apple accessories) may occasionally trigger an alert. You can use our cooldown features and custom Safe Zones to minimize these interruptions.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Near Glasses is currently 100% free to download and use. We have a growing community of over 5,000 active users and are committed to accessible privacy tools.",
  },
  {
    question: "If it's not open source, how can I trust it?",
    answer:
      "We believe in building a premium, highly-polished, sustainable privacy tool. All detection, logging, and storage happens exclusively on your device using Apple's local SwiftData. We collect absolutely zero telemetry, so your data never leaves your phone.",
  },
];

export default function FAQSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="faq" className="px-6 py-24 sm:py-32">
      <div ref={sectionRef} className="mx-auto max-w-4xl">
        <h2
          className={`mb-16 text-center font-sans text-3xl font-medium leading-none tracking-tight transition-all duration-700 sm:text-4xl ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          Frequently Asked{" "}
          <span className="font-pixel text-4xl tracking-[0.04em] sm:text-5xl">
            Questions
          </span>
        </h2>

        <div className="space-y-8">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`border-b border-foreground/10 pb-8 transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${(i + 1) * 150}ms` : "0ms",
              }}
            >
              <h3 className="mb-3 font-sans text-xl font-medium leading-snug tracking-tight text-foreground sm:text-2xl">
                {faq.question}
              </h3>
              <p className="font-sans text-base leading-relaxed tracking-tight opacity-80 sm:text-lg">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
