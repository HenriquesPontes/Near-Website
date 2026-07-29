"use client";

import { useEffect, useRef, useState } from "react";

export default function BuildOnAutopilot() {
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
    <section className="px-6 pt-16 pb-24 sm:pt-24 sm:pb-36">
      <div ref={sectionRef} className="mx-auto max-w-5xl">
        <h2
          className={`mb-12 text-center font-sans text-3xl font-medium leading-none tracking-tight transition-all duration-700 sm:text-4xl ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-4 opacity-0"
          }`}
        >
          Advanced Radar &{" "}
          <span className="font-pixel text-4xl tracking-[0.04em] sm:text-5xl">
            Detection
          </span>
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {/* Radar Dashboard */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isVisible ? "150ms" : "0ms" }}
          >
            <h3 className="mb-4 font-mono text-sm tracking-[0.1em] opacity-50">
              RADAR DASHBOARD
            </h3>
            <p className="font-sans text-base font-medium leading-snug tracking-tight opacity-80">
              A sleek interface listing historical detections with threat levels, signal strength (RSSI), and estimated distance.
            </p>
          </div>

          {/* Customizable Alerts */}
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}
          >
            <h3 className="mb-4 font-mono text-sm tracking-[0.1em] opacity-50">
              CUSTOMIZABLE ALERTS
            </h3>
            <p className="font-sans text-base font-medium leading-snug tracking-tight opacity-80">
              Adjust detection ranges to avoid false alarms from distant devices. Granular control over which brands of smart glasses trigger an alert, and a customizable cooldown period prevents notification spam.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
