import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VehicleCategories from "@/components/VehicleCategories";
import FeaturedVehicles from "@/components/FeaturedVehicles";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <VehicleCategories />
      <FeaturedVehicles />
      <Footer />
    </div>
  );
};

export default Index;
