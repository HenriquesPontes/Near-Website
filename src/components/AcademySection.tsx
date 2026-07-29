"use client";

import { useEffect, useRef, useState } from "react";

const includes = [
  "No telemetry or data collection",
  "No ads or in-app tracking",
  "No phoning home",
  "Locally stored device logs using SwiftData",
];

export default function AcademySection() {
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
    <section id="academy" className="px-6 pb-24 sm:pb-36">
      <div ref={sectionRef} className="mx-auto max-w-5xl">
        <div
          className={`card-shape bg-zinc-100 p-8 transition-all duration-700 sm:p-12 lg:p-16 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <p className="mb-5 font-mono text-sm tracking-[0.1em] text-[#FF2B00]">
            LOCAL & PRIVATE
          </p>

          <h2 className="max-w-3xl font-sans text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Your Privacy,{" "}
            <span className="font-pixel text-4xl tracking-[0.04em] sm:text-5xl lg:text-6xl">
              Protected
            </span>
          </h2>

          <p className="mt-6 max-w-2xl font-sans text-base font-medium leading-snug tracking-tight opacity-80 sm:text-lg">
            Near does not track you. It collects no telemetry, contains no ads, and does not phone home. All detected device logs are stored locally on your device and can be cleared at any time.
          </p>

          <ul className="mt-10 grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
            {includes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 font-sans text-sm font-medium leading-snug tracking-tight opacity-80"
              >
                <svg
                  className="mt-0.5 h-4 w-4 shrink-0 text-[#FF2B00]"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>


        </div>
      </div>
    </section>
  );
}
