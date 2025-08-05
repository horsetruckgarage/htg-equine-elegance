import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import VehicleCategories from "@/components/VehicleCategories";
import FeaturedVehicles from "@/components/FeaturedVehicles";
import PromotionsSection from "@/components/PromotionsSection";
import CustomerReviews from "@/components/CustomerReviews";
import PartnersSection from "@/components/PartnersSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <VehicleCategories />
      <FeaturedVehicles />
      <PromotionsSection />
      <CustomerReviews />
      <PartnersSection />
      <CTASection />
      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Index;
