import { ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroTruck from "@/assets/hero-truck.jpg";
import heroTruck2 from "@/assets/hero-truck-2.jpg";
import heroVan from "@/assets/hero-van.jpg";
import heroTrailer from "@/assets/hero-trailer.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden htg-hero-gradient">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-copper/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-bronze/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Background Carousel */}
      <Carousel 
        className="absolute inset-0 w-full h-full"
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="h-full">
          <CarouselItem className="h-full">
            <div className="relative h-full">
              <img 
                src={heroTruck} 
                alt="Camion chevaux premium HTG" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </CarouselItem>
          <CarouselItem className="h-full">
            <div className="relative h-full">
              <img 
                src={heroTruck2} 
                alt="Camion chevaux de luxe HTG" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </CarouselItem>
          <CarouselItem className="h-full">
            <div className="relative h-full">
              <img 
                src={heroVan} 
                alt="Van chevaux HTG" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40"></div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-black/30 border-copper text-copper hover:bg-copper hover:text-black z-20" />
        <CarouselNext className="right-4 bg-black/30 border-copper text-copper hover:bg-copper hover:text-black z-20" />
      </Carousel>

      {/* Content Overlay */}
      <div className="container mx-auto px-6 relative z-10 h-full flex items-center">
        <div className="max-w-2xl text-center lg:text-left space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-copper/20 backdrop-blur-sm rounded-full px-4 py-2 border border-copper/30">
            <Star className="w-4 h-4 text-copper fill-copper" />
            <span className="text-copper font-medium">Excellence Française</span>
          </div>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              <span className="block text-white">Transport Équin</span>
              <span className="block htg-text-gradient">Haute Performance</span>
            </h1>
            <p className="text-xl lg:text-2xl text-white/90 max-w-2xl">
              Découvrez notre sélection exclusive de camions chevaux, vans et remorques. 
              L'expertise française au service de vos champions.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Button className="htg-button-primary group">
              Voir nos Véhicules
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              variant="outline" 
              className="htg-button-secondary border-copper text-copper hover:bg-copper hover:text-black"
            >
              Demander un Devis
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8">
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-copper">500+</div>
              <div className="text-white/80">Véhicules Vendus</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-copper">15+</div>
              <div className="text-white/80">Années d'Expertise</div>
            </div>
            <div className="text-center lg:text-left">
              <div className="text-3xl font-bold text-copper">98%</div>
              <div className="text-white/80">Clients Satisfaits</div>
            </div>
          </div>
        </div>

        {/* Floating Cards */}
        <div className="absolute top-20 right-8 htg-card p-4 w-48 animate-pulse-glow hidden lg:block">
          <div className="text-center">
            <div className="text-2xl font-bold text-copper">Nouveau</div>
            <div className="text-sm text-muted-foreground">Stock Disponible</div>
          </div>
        </div>

        <div className="absolute bottom-32 right-16 htg-card p-4 w-48 hidden lg:block">
          <div className="text-center">
            <div className="text-2xl font-bold text-copper">Premium</div>
            <div className="text-sm text-muted-foreground">Qualité Garantie</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-copper rounded-full flex justify-center">
          <div className="w-1 h-3 bg-copper rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;