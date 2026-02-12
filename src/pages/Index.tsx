import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import LocationsSection from "@/components/LocationsSection";
import PricingSection from "@/components/PricingSection";
import ExperienceSection from "@/components/ExperienceSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <LocationsSection />
        <PricingSection />
        <ExperienceSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
