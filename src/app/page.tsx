import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BuildOnAutopilot from "@/components/BuildOnAutopilot";
import HowItWorksSection from "@/components/HowItWorksSection";
import AcademySection from "@/components/AcademySection";
import BetaSection from "@/components/BetaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <AcademySection />
      <BuildOnAutopilot />
      <BetaSection />
      <Footer />
    </main>
  );
}
