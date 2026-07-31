import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BuildOnAutopilot from "@/components/BuildOnAutopilot";
import HowItWorksSection from "@/components/HowItWorksSection";
import AcademySection from "@/components/AcademySection";
import BetaSection from "@/components/BetaSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            "name": "Near Glasses",
            "operatingSystem": "iOS",
            "applicationCategory": "UtilitiesApplication",
            "offers": {
              "@type": "Offer",
              "price": "0",
              "priceCurrency": "USD"
            },
            "description": "An iOS application that scans for Bluetooth signatures from known smart glasses and alerts you when they cross into your proximity.",
            "url": "https://nearglasses.com"
          })
        }}
      />
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <AcademySection />
      <BuildOnAutopilot />
      <FAQSection />
      <BetaSection />
      <Footer />
    </main>
  );
}
