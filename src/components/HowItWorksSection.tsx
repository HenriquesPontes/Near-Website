"use client";

import { useEffect, useRef, useState } from "react";
import PhaseCard from "./PhaseCard";

const phases = [
  {
    number: "01",
    title: "Scan for Devices",
    description:
      "Near uses Bluetooth Low Energy to passively scan for peripheral devices in your surroundings without draining your battery.",
  },
  {
    number: "02",
    title: "Identify Threats",
    description:
      "It matches Manufacturer Specific Data and naming patterns against known smart glasses brands like Meta, Apple, and Snapchat.",
  },
  {
    number: "03",
    title: "Stay Alerted",
    description:
      "Get push notifications when smart glasses get too close with our background Radar Mode, keeping you aware of your privacy.",
  },
];

export default function HowItWorksSection() {
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
    <section id="how-it-works" className="px-6 pt-12 pb-24 sm:pt-16 sm:pb-32">
      <div ref={sectionRef} className="mx-auto max-w-6xl">
        <h2
          className={`mb-16 text-center font-sans text-3xl font-medium leading-none tracking-tight transition-all duration-700 sm:text-4xl ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          How Near{" "}
          <span className="font-pixel text-4xl tracking-[0.04em] sm:text-5xl">
            Works
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 sm:gap-8">
          {phases.map((phase, i) => (
            <div
              key={phase.number}
              className={`transition-all duration-700 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
              style={{
                transitionDelay: isVisible ? `${(i + 1) * 150}ms` : "0ms",
              }}
            >
              <PhaseCard
                number={phase.number}
                title={phase.title}
                description={phase.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
