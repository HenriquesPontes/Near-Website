import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureList from "@/components/FeatureList";

export default function AboutPage() {
  return (
    <main className="min-h-screen text-foreground overflow-hidden">
      <Navbar />

      {/* SECTION 1: Features & Phone (Inspired by Image 1) */}
      <section className="mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:flex lg:items-center lg:justify-between">
        <div className="lg:w-1/3 space-y-4">
          <div className="mb-12">
            <h1 className="font-sans text-5xl font-medium tracking-tight sm:text-6xl">
              About <span className="font-pixel text-6xl tracking-[0.04em] sm:text-7xl text-[#ff2b00]">Near</span>
            </h1>
            <p className="mt-4 font-sans text-lg font-medium text-foreground/60">
              The privacy-first scanning app.
            </p>
          </div>
          
          <FeatureList />
        </div>
        <div className="mt-20 lg:mt-0 lg:w-2/3 flex justify-center">
          <div className="relative">
            <Image 
              src="/Group 1.png" 
              alt="Near Glasses App Interface" 
              width={400} 
              height={800} 
              className="w-full max-w-[320px] drop-shadow-2xl pointer-events-none select-none"
              priority
              fetchPriority="high"
              draggable={false}
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: Massive Headline (Inspired by Image 2 & 5) */}
      <section className="mx-auto max-w-4xl px-6 py-24 text-center sm:py-32">
        <p className="mb-4 font-sans text-xl font-semibold tracking-tight text-foreground/90">
          Privacy.
        </p>
        <h2 className="mb-8 font-sans text-5xl font-medium tracking-tight sm:text-7xl lg:text-[100px] lg:leading-[1.1]">
          Your <span className="font-pixel tracking-[0.04em]">environment</span>.
          <br />
          Your <span className="font-pixel text-[#ff2b00] tracking-[0.04em]">rules</span>.
        </h2>
        <p className="mx-auto max-w-3xl font-sans text-lg font-medium leading-relaxed text-foreground/60 sm:text-xl">
          Near Glasses gives you flexible ways to understand your surroundings — and so much more. 
          Tap to scan the area for Bluetooth signatures of known smart glasses <strong className="text-foreground">without compromising your own data.</strong> And when unknown devices enter the space, the radar alerts you so you get more awareness in public spaces.
        </p>
      </section>

      {/* SECTION 3: Erupting iPhone & Card Features (Inspired by Image 2 & 3) */}
      <section className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pt-12 overflow-hidden">
        {/* iPhone crop */}
        <div className="relative z-10 -mb-[55%] sm:-mb-[60%] flex w-full max-w-3xl justify-center">
          <Image 
            src="/Device3.png" 
            alt="Near App Radar Interface" 
            width={800} 
            height={800} 
            className="w-full object-cover object-top pointer-events-none select-none"
            style={{ 
              WebkitMaskImage: "linear-gradient(to bottom, black 20%, transparent 55%)",
              maskImage: "linear-gradient(to bottom, black 20%, transparent 55%)"
            }}
            draggable={false}
          />
        </div>
        

        <p className="max-w-2xl text-center font-sans text-lg font-medium text-foreground/60">
          An all-new scanning engine enables fast and accurate detection, for more flexible ways to monitor your environment. And it runs completely on-device — automatically.
        </p>
      </section>

      {/* SECTION 4: Diagonal Phones (Inspired by Image 4) */}
      <section className="mx-auto max-w-6xl px-6 py-16 text-center overflow-hidden sm:py-24">
        <h2 className="mb-6 font-sans text-4xl font-medium tracking-tight sm:text-6xl lg:text-[80px] lg:leading-[1.1]">
          All completely <span className="font-pixel tracking-[0.04em]">local</span>.
          <br />
          An evolution in <span className="font-pixel text-[#ff2b00] tracking-[0.04em]">privacy</span>.
        </h2>
        <p className="mx-auto max-w-3xl font-sans text-lg font-medium leading-relaxed text-foreground/60 sm:text-xl">
          Near has a powerful detection engine with robust range, and a <strong className="text-foreground">zero-telemetry architecture with unmatched security</strong> compared to cloud-based alternatives. And now logs are stored entirely on-device by default. So you&apos;ll get stunning, super-fast alerts — up close or far away, indoors and out. So you can protect your privacy — and beyond.
        </p>
        
      </section>

      <Footer />
    </main>
  );
}
