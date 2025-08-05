import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import heroTruck from "@/assets/hero-truck.jpg";
import heroTruck2 from "@/assets/hero-truck-2.jpg";
import heroVan from "@/assets/hero-van.jpg";
import heroTrailer from "@/assets/hero-trailer.jpg";

const slides = [
  {
    id: 1,
    image: heroTruck,
    title: "Transport Équin d'Excellence",
    subtitle: "L'expertise française au service de vos champions",
    description: "Découvrez notre gamme premium de camions chevaux conçus pour le confort et la sécurité de vos équidés",
  },
  {
    id: 2,
    image: heroTruck2,
    title: "Véhicules Haut de Gamme",
    subtitle: "Innovation et tradition française",
    description: "Des solutions de transport sur mesure adaptées aux besoins les plus exigeants du monde équestre",
  },
  {
    id: 3,
    image: heroVan,
    title: "Sécurité & Performance",
    subtitle: "Chaque voyage compte",
    description: "Technologies avancées et finitions premium pour un transport équin sans compromis",
  },
  {
    id: 4,
    image: heroTrailer,
    title: "Remorques d'Exception",
    subtitle: "Mobilité et élégance",
    description: "Solutions compactes et performantes pour tous vos déplacements équestres",
  },
];

const HeroSection = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full Screen Carousel */}
      <Carousel 
        className="h-full w-full"
        plugins={[
          Autoplay({
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="h-full">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="h-full">
              <div className="relative h-full w-full">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                
                {/* Overlay for better text contrast */}
                <div className="absolute inset-0 bg-black/40" />
                
                {/* Content */}
                <div className="relative z-10 h-full flex items-center justify-center px-6">
                  <div className="text-center max-w-4xl mx-auto space-y-6 animate-fade-in">
                    {/* Subtitle */}
                    <div className="inline-flex items-center space-x-2 bg-copper/20 backdrop-blur-sm rounded-full px-6 py-3 border border-copper/30 mb-4">
                      <span className="text-copper font-medium text-sm md:text-base">{slide.subtitle}</span>
                    </div>
                    
                    {/* Main Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white mb-6">
                      <span className="block htg-text-gradient drop-shadow-2xl">
                        {slide.title}
                      </span>
                    </h1>
                    
                    {/* Description */}
                    <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed drop-shadow-lg mb-8">
                      {slide.description}
                    </p>
                    
                    {/* Call to Action */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                      <Button 
                        size="lg"
                        className="htg-button-primary group px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-copper/50 transition-all duration-300"
                      >
                        Demander un Devis
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                      <Button 
                        size="lg"
                        variant="outline" 
                        className="border-2 border-white/30 text-white bg-white/10 backdrop-blur-sm hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold transition-all duration-300"
                      >
                        Voir nos Véhicules
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute top-20 right-8 hidden lg:block">
                  <div className="htg-glass rounded-xl p-4 w-56 animate-pulse-glow">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-copper mb-1">Premium</div>
                      <div className="text-sm text-white/80">Qualité Française</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute bottom-32 left-8 hidden lg:block">
                  <div className="htg-glass rounded-xl p-4 w-56">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-copper mb-1">Excellence</div>
                      <div className="text-sm text-white/80">Depuis 2008</div>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Custom Navigation */}
        <CarouselPrevious className="absolute left-6 top-1/2 -translate-y-1/2 z-20 bg-black/20 backdrop-blur-sm border-white/20 text-white hover:bg-copper hover:text-black hover:border-copper transition-all duration-300 w-12 h-12">
          <ChevronLeft className="w-6 h-6" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-6 top-1/2 -translate-y-1/2 z-20 bg-black/20 backdrop-blur-sm border-white/20 text-white hover:bg-copper hover:text-black hover:border-copper transition-all duration-300 w-12 h-12">
          <ChevronRight className="w-6 h-6" />
        </CarouselNext>
      </Carousel>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-copper/20 rounded-full blur-xl animate-float z-10"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-bronze/20 rounded-full blur-xl animate-float z-10" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;