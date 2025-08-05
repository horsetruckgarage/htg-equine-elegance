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
    },
    {
      id: 4,
      name: "Jean-Claude Bertrand",
      location: "Provence-Alpes-Côte d'Azur",
      rating: 5,
      text: "20 ans d'expérience dans l'équestre, et je n'ai jamais vu un service aussi professionnel. Mon nouveau van Mercedes est parfait pour mes compétitions.",
      vehicleType: "Van Mercedes Sprinter",
      date: "Il y a 1 semaine",
      verified: true
    },
    {
      id: 5,
      name: "Camille Rousseau",
      location: "Nouvelle-Aquitaine",
      rating: 4,
      text: "Très satisfaite de mon achat ! L'équipe a su me conseiller sur le bon modèle. Juste un petit délai de livraison mais le résultat en valait la peine.",
      vehicleType: "Remorque Ifor Williams",
      date: "Il y a 3 jours",
      verified: true
    },
    {
      id: 6,
      name: "Thomas Moreau",
      location: "Centre-Val de Loire",
      rating: 5,
      text: "Service après-vente au top ! Mon camion a eu un petit souci et ils ont tout réglé rapidement. Une équipe vraiment fiable, je recommande sans hésiter.",
      vehicleType: "Camion Renault Master",
      date: "Il y a 2 semaines",
      verified: true
    },
    {
      id: 7,
      name: "Isabelle Durand",
      location: "Occitanie",
      rating: 5,
      text: "Achat d'une remorque 2 places pour mes chevaux de dressage. Produit de qualité, conseil expert et prix compétitif. Parfait !",
      vehicleType: "Remorque Humbaur",
      date: "Il y a 5 jours",
      verified: true
    },
    {
      id: 8,
      name: "Antoine Lefevre",
      location: "Hauts-de-France",
      rating: 4,
      text: "Bonne expérience globale. Le personnel connaît vraiment bien les produits équestres. Mon van correspond exactement à mes attentes pour les concours.",
      vehicleType: "Van Iveco Daily",
      date: "Il y a 4 semaines",
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
            <div className="inline-flex items-center space-x-3 bg-white rounded-full px-6 py-3 border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-green-500 text-white rounded flex items-center justify-center text-sm font-bold">G</div>
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
              Ce que Disent Nos Clients
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des témoignages authentiques de professionnels et passionnés qui nous font confiance
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