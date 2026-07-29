"use client";

import { useState } from "react";

const features = [
  {
    label: "\"Geiger Counter\" Proximity Tracker",
    description: "An intuitive, real-time interface that helps you pinpoint the exact location of detected smart glasses using Bluetooth signal strength. Watch the signal increase as you get closer, just like a geiger counter."
  },
  {
    label: "Geofenced Auto-Scanning",
    description: "Set up custom Safe Zones (like your home or office). Near will automatically pause scanning when you enter these areas to save battery, and instantly resume protection when you leave."
  },
  {
    label: "Live Activities & Dynamic Island Mini Radar",
    description: "Keep an eye on your surroundings without opening the app. Near integrates seamlessly with iOS Live Activities and the Dynamic Island to provide a mini radar right on your Lock Screen or while you're using other apps."
  },
  {
    label: "Control Center Widgets",
    description: "Toggle scanning on or off with a single tap. By adding Near to your iOS Control Center, managing your privacy becomes as easy as turning on your flashlight."
  },
  {
    label: "Siri Voice Shortcuts",
    description: "Hands-free protection. Simply say \"Hey Siri, start scanning\" or \"Hey Siri, pause Near\" to control your proximity alerts using custom voice shortcuts."
  },
  {
    label: "Privacy",
    description: "Built from the ground up to respect your data. Near features a zero-telemetry architecture where all processing, signature matching, and log storage happen 100% locally on your device. We never see your data."
  }
];

export default function FeatureList() {
  const [activeIndex, setActiveIndex] = useState<number | null>(2);

  const toggleFeature = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col items-start gap-4 w-full">
      {features.map((feature, idx) => {
        const isActive = activeIndex === idx;
        return (
          <button
            key={idx}
            onClick={() => toggleFeature(idx)}
            className={`text-left transition-all duration-300 ease-in-out shadow-sm overflow-hidden text-zinc-900 ${
              isActive 
                ? "card-shape-sm bg-zinc-100 p-6 sm:p-8 w-full max-w-sm" 
                : "card-shape-sm bg-zinc-100 px-6 py-4 hover:bg-zinc-200 w-fit"
            }`}
          >
            <div className={`flex items-start ${isActive ? "flex-col" : "items-center space-x-3"}`}>
              {!isActive && (
                <span className="flex-shrink-0 flex items-center justify-center rounded-full border border-zinc-300 text-xs font-light h-5 w-5 text-zinc-500">
                  +
                </span>
              )}
              
              <div className="flex-1">
                {isActive ? (
                  <>
                    <h3 className="mb-2 font-sans text-lg font-medium tracking-tight">
                      {feature.label}
                    </h3>
                    <div 
                      className="grid transition-all duration-300 ease-in-out grid-rows-[1fr] opacity-100 mt-2"
                    >
                      <div className="overflow-hidden">
                        <p className="font-sans text-sm font-medium leading-snug tracking-tight opacity-70">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </>
                ) : (
                  <span className="font-sans text-sm font-medium tracking-tight mt-0.5 inline-block">
                    {feature.label}
                  </span>
                )}
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
