"use client";

import { useEffect, useRef, useState, FormEvent } from "react";

export default function BetaSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, send to an API endpoint here
    
    // Redirect the user directly to TestFlight
    window.location.href = "https://testflight.apple.com/join/wGznFmJn";
  };

  return (
    <section id="beta" className="px-6 pb-24 sm:pb-36">
      <div ref={sectionRef} className="mx-auto max-w-4xl text-center">
        <div
          className={`card-shape bg-zinc-100 p-8 transition-all duration-700 sm:p-12 lg:p-16 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
          }`}
        >
          <p className="mb-5 font-mono text-sm tracking-[0.1em] text-[#FF2B00]">
            EARLY ACCESS
          </p>

          <h2 className="mb-4 font-sans text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Join the <span className="font-pixel text-4xl tracking-[0.04em] sm:text-5xl lg:text-6xl">Beta</span>
          </h2>
          
          <p className="mx-auto mb-10 max-w-xl font-sans text-base font-medium leading-snug tracking-tight opacity-80 sm:text-lg">
            Be the first to try Near. Enter your email to get early access via TestFlight and help us shape the future of personal privacy.
          </p>

          {submitted ? (
            <div className="mx-auto flex max-w-md flex-col items-center justify-center gap-4 border border-green-500/30 bg-green-500/10 p-6 text-green-700">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <p className="font-sans font-medium">Thanks! Here is your link:</p>
              </div>
              <a 
                href="https://testflight.apple.com/join/wGznFmJn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#FF2B00] px-6 py-2 font-sans font-medium text-white transition-colors duration-200 hover:bg-[#e62700]"
              >
                Join on TestFlight
              </a>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full border border-foreground/10 bg-white px-4 py-3 font-sans text-base text-foreground placeholder:text-foreground/40 focus:border-[#FF2B00] focus:outline-none focus:ring-1 focus:ring-[#FF2B00]"
              />
              <button
                type="submit"
                className="shrink-0 bg-[#FF2B00] px-6 py-3 font-sans font-medium text-white transition-colors duration-200 hover:bg-[#e62700]"
              >
                Join TestFlight
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
