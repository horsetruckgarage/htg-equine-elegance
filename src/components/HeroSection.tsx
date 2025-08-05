import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import heroTruck from "@/assets/hero-truck.jpg";
import heroTruck2 from "@/assets/hero-truck-2.jpg";
import heroVan from "@/assets/hero-van.jpg";
import heroTrailer from "@/assets/hero-trailer.jpg";

const HeroSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const { t } = useTranslation();

  const slides = [
    {
      id: 1,
      image: heroTruck,
      title: t.hero.slide1.title,
      subtitle: t.hero.slide1.subtitle,
      description: t.hero.slide1.description,
    },
    {
      id: 2,
      image: heroTruck2,
      title: t.hero.slide2.title,
      subtitle: t.hero.slide2.subtitle,
      description: t.hero.slide2.description,
    },
    {
      id: 3,
      image: heroVan,
      title: t.hero.slide3.title,
      subtitle: t.hero.slide3.subtitle,
      description: t.hero.slide3.description,
    },
    {
      id: 4,
      image: heroTrailer,
      title: t.hero.slide4.title,
      subtitle: t.hero.slide4.subtitle,
      description: t.hero.slide4.description,
    },
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Full Screen Carousel */}
      <Carousel 
        setApi={setApi}
        className="w-full h-full"
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
        <CarouselContent className="h-full ml-0">
          {slides.map((slide) => (
            <CarouselItem key={slide.id} className="h-full pl-0">
              <div className="relative w-screen h-screen">
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center bg-no-repeat w-full h-full"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                
                {/* Overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />
                
                {/* Content */}
                <div className="relative z-10 w-full h-full flex items-center justify-center">
                  <div className="text-center max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Subtitle Badge */}
                    <div className="inline-flex items-center justify-center bg-copper/20 backdrop-blur-sm rounded-full px-6 py-3 border border-copper/30 mb-6 animate-fade-in">
                      <span className="text-copper font-medium text-sm sm:text-base">{slide.subtitle}</span>
                    </div>
                    
                    {/* Main Title */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight text-white mb-6 animate-fade-in">
                      <span className="block htg-text-gradient drop-shadow-2xl">
                        {slide.title}
                      </span>
                    </h1>
                    
                    {/* Description */}
                    <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-lg mb-8 animate-fade-in">
                      {slide.description}
                    </p>
                    
                    {/* Call to Action */}
                    <div className="flex flex-col gap-2 justify-center items-center animate-fade-in mb-6">
                      <p className="text-white/80 text-sm font-medium">Recevez votre offre personnalisée en moins de 24h – Sans engagement</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
                      <Link to="/devis">
                        <Button 
                          size="lg"
                          className="htg-button-primary group px-8 py-4 text-lg font-semibold shadow-2xl hover:shadow-copper/50 transition-all duration-300 w-full sm:w-auto"
                        >
                          {t.hero.cta}
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Custom Navigation Arrows - Hidden on mobile */}
        <CarouselPrevious className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 z-30 bg-black/20 backdrop-blur-sm border-white/20 text-white hover:bg-copper hover:text-black hover:border-copper transition-all duration-300 w-12 h-12 sm:w-14 sm:h-14 hidden md:flex">
          <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
        </CarouselPrevious>
        <CarouselNext className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 z-30 bg-black/20 backdrop-blur-sm border-white/20 text-white hover:bg-copper hover:text-black hover:border-copper transition-all duration-300 w-12 h-12 sm:w-14 sm:h-14 hidden md:flex">
          <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
        </CarouselNext>
      </Carousel>
      
      {/* Dots Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === current
                ? "bg-copper shadow-lg shadow-copper/50 scale-125"
                : "bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce z-20 hidden sm:block">
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-24 h-24 bg-copper/20 rounded-full blur-xl animate-float z-10 hidden lg:block"></div>
      <div className="absolute bottom-32 right-16 w-32 h-32 bg-bronze/20 rounded-full blur-xl animate-float z-10 hidden lg:block" style={{ animationDelay: '2s' }}></div>
      
      {/* Floating Quality Badges */}
      <div className="absolute top-8 right-8 hidden xl:block z-20">
        <div className="htg-glass rounded-xl p-4 w-56 animate-pulse-glow">
          <div className="text-center">
            <div className="text-2xl font-bold text-copper mb-1">Premium</div>
            <div className="text-sm text-white/80">Qualité Française</div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-32 left-8 hidden xl:block z-20">
        <div className="htg-glass rounded-xl p-4 w-56">
          <div className="text-center">
            <div className="text-2xl font-bold text-copper mb-1">Excellence</div>
            <div className="text-sm text-white/80">Depuis 2008</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;