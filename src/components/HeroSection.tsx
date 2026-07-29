"use client";
import dynamic from "next/dynamic";
import Image from "next/image";

const UnicornScene = dynamic(() => import("unicornstudio-react/next"), {
  ssr: false,
});

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex flex-col items-center justify-center px-6 pt-36 pb-24 sm:pt-48 sm:pb-32"
    >
      {/* Unicorn Studio WebGL background — full width */}
      <div className="absolute inset-0 z-0 hidden opacity-50">
        <UnicornScene
          projectId="GUJ5KvRM2c731uSfesyJ"
          sdkUrl="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.0.5/dist/unicornStudio.umd.js"
          width="100%"
          height="100%"
          scale={1}
          lazyLoad={false}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex max-w-3xl flex-col items-center gap-8 text-center">
        <p className="animate-fade-in font-mono text-sm tracking-[0.1em] opacity-0 [animation-fill-mode:forwards]">
          <span className="opacity-50">PRIVACY FIRST</span>
        </p>

        {/* Phone Image */}
        <div className="flex w-full max-w-sm justify-center animate-fade-in-up opacity-0 [animation-fill-mode:forwards] [animation-delay:0.1s]">
          <Image 
            src="/hero-iphone.png" 
            alt="Near iOS App Interface" 
            width={384}
            height={700}
            className="w-full h-auto object-contain drop-shadow-2xl pointer-events-none select-none"
            style={{
              WebkitMaskImage: "linear-gradient(to bottom, black 60%, transparent 100%)",
              maskImage: "linear-gradient(to bottom, black 60%, transparent 100%)"
            }}
            draggable={false}
            priority
            fetchPriority="high"
          />
        </div>

        <h1 className="animate-fade-in font-sans text-5xl font-medium leading-none tracking-tight opacity-0 sm:text-7xl md:text-[87px] [animation-delay:0.2s]">
          Near{" "}
          <span className="font-pixel text-6xl tracking-[0.04em] sm:text-8xl md:text-[108px]">
            Glasses
          </span>
        </h1>

        <p className="max-w-2xl animate-fade-in-up font-sans text-lg font-medium tracking-tight opacity-0 [animation-delay:0.2s] sm:text-xl">
          Detect Smart Glasses Around You. Reclaim Your Privacy.
          Near Glasses is an iOS application that scans for Bluetooth signatures from known smart glasses and alerts you when they cross into your proximity.
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href="https://apps.apple.com/pt/app/nearby-glasses/id6776279207?l=en-GB"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-fade-in-up opacity-0 transition-all duration-200 [animation-delay:0.6s] hover:scale-105 flex items-center justify-center gap-3 bg-[#ff2b00] hover:bg-[#ff2b00]/90 text-white px-8 py-4 card-shape-sm font-sans font-semibold text-lg"
          >
            <Image 
              src="/Apple Logo.png" 
              alt="Apple Logo" 
              width={32}
              height={32}
              className="w-8 h-8 mix-blend-screen invert"
            />
            Get the app
          </a>

          <a
            href="/about"
            className="animate-fade-in-up font-sans text-sm font-medium text-foreground/60 opacity-0 transition-colors duration-200 [animation-delay:0.8s] hover:text-foreground"
          >
            Learn how Near protects your privacy{" "}
            <span className="text-[#FF2B00]">→</span>
          </a>
        </div>
      </div>

    </section>
  );
}
