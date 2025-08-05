import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, CheckCircle, Users, Award, Shield, Phone, Mail, MapPin, ArrowRight, Heart, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const ConfianceEtContact = () => {
  const reviews = [
    {
      id: 1,
      name: "Marie Dubois",
      location: "Normandie",
      rating: 5,
      text: "Service exceptionnel ! J'ai acheté mon van chez HTG il y a 2 ans et je suis toujours aussi satisfaite. L'équipe est professionnelle et de bon conseil.",
      vehicleType: "Van Chevaux Renault Master",
      date: "Il y a 3 semaines",
      verified: true
    },
    {
      id: 2,
      name: "Pierre Martin",
      location: "Île-de-France",
      rating: 5,
      text: "Excellent rapport qualité-prix pour mon camion 4 places. La livraison s'est parfaitement déroulée et le véhicule était impeccable.",
      vehicleType: "Camion Iveco Daily",
      date: "Il y a 1 mois",
      verified: true
    },
    {
      id: 3,
      name: "Sophie Lemoine",
      location: "Bretagne",
      rating: 5,
      text: "Je recommande vivement HTG ! Leur expertise m'a permis de trouver la remorque parfaite pour mes besoins. Suivi irréprochable.",
      vehicleType: "Remorque Böckmann",
      date: "Il y a 2 mois",
      verified: true
    }
  ];

  const partners = [
    { name: "Iveco", logo: "/lovable-uploads/2b478b96-e19a-4288-ac04-f0410f56f0bc.png", description: "Partenaire officiel depuis 2015" },
    { name: "Mercedes", logo: "/lovable-uploads/bee66bcd-4af5-4ce6-a9d1-a044053fa657.png", description: "Distributeur agréé" },
    { name: "Renault", logo: "/lovable-uploads/2307287b-f2a8-4858-984f-44b3a646dd23.png", description: "Concessionnaire certifié" },
    { name: "Böckmann", logo: "/lovable-uploads/35ff85cc-4513-4a11-9b8b-eda640027c91.png", description: "Revendeur exclusif région" },
    { name: "Ifor Williams", logo: "/lovable-uploads/a3bc9f31-af5a-4053-a835-56933ae8d26b.png", description: "Distributeur autorisé" },
    { name: "Humbaur", logo: "/lovable-uploads/243f1cf5-f2ce-48a8-a2dd-8c9d7334fa5a.png", description: "Partenaire premium" }
  ];

  const stats = [
    { number: "15+", label: "Années d'expérience", icon: Award },
    { number: "2500+", label: "Clients satisfaits", icon: Users },
    { number: "98%", label: "Taux de satisfaction", icon: Heart },
    { number: "24h", label: "Réponse garantie", icon: CheckCircle }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-copper/10 rounded-full px-4 py-2">
            <Shield className="w-4 h-4 text-copper" />
            <span className="text-copper font-semibold">Confiance & Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Votre Partenaire</span>
            <span className="block htg-text-gradient">de Confiance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez pourquoi plus de 2500 clients nous font confiance pour leurs véhicules équestres. 
            Excellence, expertise et service personnalisé depuis plus de 15 ans.
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
            <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2 border border-blue-200">
              <div className="flex items-center space-x-1">
                <div className="w-5 h-5 bg-blue-500 text-white rounded-sm flex items-center justify-center text-xs font-bold">G</div>
                <span className="text-blue-600 font-semibold">Avis Google</span>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                ))}
                <span className="text-sm text-gray-600 ml-1">4.9/5</span>
              </div>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
              Ce que Disent Nos Clients
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des témoignages authentiques de professionnels et passionnés qui nous font confiance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {reviews.map((review, index) => (
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
            <Link to="/contact">
              <Button variant="outline" className="htg-button-secondary">
                Laisser un Avis
                <Star className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mb-20">
          <div className="text-center mb-12 space-y-4">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
              Nos Partenaires de Confiance
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nous travaillons exclusivement avec les plus grandes marques du secteur équestre
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
          <Link to="/devis">
            <Button className="htg-button-primary">
              Demander un Devis Gratuit
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ConfianceEtContact;