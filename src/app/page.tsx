import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrendingAuctions } from "@/components/sections/TrendingAuctions";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { HomeCTA } from "@/components/sections/HomeCTA";

export default function HomePage() {
  return (
    <div className="page-shell">
      <Navbar />
      <main>
        <HeroSection />
        <TrendingAuctions />
        <HowItWorks />
        <HomeCTA />
      </main>
      <Footer variant="full" />
    </div>
  );
}
