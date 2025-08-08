import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VehicleCategories from "@/components/VehicleCategories";
// import OffresEtVehicules from "@/components/OffresEtVehicules";
import ConfianceEtContact from "@/components/ConfianceEtContact";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <VehicleCategories />
      
      <ConfianceEtContact />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
