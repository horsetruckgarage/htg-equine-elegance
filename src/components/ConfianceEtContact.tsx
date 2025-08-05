import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, CheckCircle, Users, Award, Shield, Phone, Mail, MapPin, ArrowRight, Heart, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { getLocalizedPath } from "@/hooks/useLocalizedRouting";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ConfianceEtContact = () => {
  const { t, language } = useTranslation();
  
  // Utilise les avis traduits selon la langue sélectionnée
  const reviews = t.trust.reviews;

  // Utilise les partenaires traduits selon la langue sélectionnée  
  const partners = t.trust.partners;

  const stats = [
    { number: "15+", label: t.trust.stats.experience, icon: Award },
    { number: "2500+", label: t.trust.stats.clients, icon: Users },
    { number: "98%", label: t.trust.stats.satisfaction, icon: Heart },
    { number: "24h", label: t.trust.stats.response, icon: CheckCircle }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-copper/10 rounded-full px-4 py-2">
            <Shield className="w-4 h-4 text-copper" />
            <span className="text-copper font-semibold">{t.trust.badge}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">{t.trust.title}</span>
            <span className="block htg-text-gradient">{t.trust.subtitle}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.trust.description}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-copper/10 rounded-full">
                  <IconComponent className="w-8 h-8 text-copper" />
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-copper">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reviews Section */}
        <div className="mb-20">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center space-x-3 bg-white rounded-full px-6 py-3 border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-2">
                <img 
                  src="/lovable-uploads/b90c9439-0e85-44c0-aa34-cdc82bc8b364.png" 
                  alt="Google"
                  className="w-6 h-6"
                />
                <span className="text-gray-700 font-semibold">Google</span>
              </div>
              <div className="w-px h-4 bg-gray-300"></div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                ))}
                <span className="text-sm text-gray-600 ml-2 font-medium">4.9</span>
              </div>
              <div className="text-sm text-gray-500">
                ({reviews.length} avis)
              </div>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
              {t.trust.reviewsTitle}
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.trust.reviewsDescription}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
            {reviews.slice(0, 8).map((review, index) => (
              <div 
                key={review.id} 
                className="htg-card p-6 space-y-4 group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-copper/10 rounded-full flex items-center justify-center">
                      <span className="text-copper font-bold text-lg">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-foreground">{review.name}</h4>
                        {review.verified && (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{review.location}</p>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-copper/50" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-copper fill-copper" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground leading-relaxed">
                  "{review.text}"
                </p>

                {/* Vehicle & Date */}
                <div className="pt-4 border-t border-border space-y-2">
                  <p className="text-sm font-medium text-copper">{review.vehicleType}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Review CTA */}
          <div className="text-center">
            <Link to={getLocalizedPath("/contact", language)}>
              <Button variant="outline" className="htg-button-secondary">
                {t.trust.leaveReview}
                <Star className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mb-20">
          <div className="text-center mb-12 space-y-4">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
              {t.trust.partnersTitle}
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t.trust.partnersDescription}
            </p>
          </div>

          <Carousel 
            className="w-full"
            plugins={[
              Autoplay({
                delay: 3000,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {partners.map((partner, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="htg-card p-6 text-center space-y-3 group hover:scale-105 transition-all duration-300 h-full">
                    <div className="h-12 flex items-center justify-center">
                      <img 
                        src={partner.logo} 
                        alt={`Logo ${partner.name}`}
                        className="max-h-10 max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{partner.name}</h4>
                      <p className="text-xs text-muted-foreground mt-1">{partner.description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Contact CTA Section */}
        <div className="text-center">
          <Link to={getLocalizedPath("/devis", language)}>
            <Button className="htg-button-primary">
              {t.trust.getQuote}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConfianceEtContact;