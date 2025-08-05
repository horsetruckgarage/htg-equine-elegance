import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Truck, Calendar, Gauge, Users, Eye, Heart, Star, Filter, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Camions = () => {
  const camions = [
    {
      id: 1,
      title: "Iveco Daily 70C21",
      price: "79 900",
      originalPrice: "89 500",
      promo: true,
      year: 2019,
      km: "125 000",
      capacity: "4 chevaux",
      features: ["Suspension pneumatique", "Climatisation", "Cabine couchette", "Boîte automatique"],
      badge: "Bestseller",
      rating: 4.9,
      savings: "9 600"
    },
    {
      id: 2,
      title: "MAN TGL 8.180",
      price: "95 500",
      year: 2020,
      km: "89 000",
      capacity: "6 chevaux",
      features: ["Suspension pneumatique", "GPS intégré", "Cabine grand confort", "Boîte manuelle"],
      badge: "Premium",
      rating: 4.8
    },
    {
      id: 3,
      title: "Mercedes Atego 1224",
      price: "87 900",
      originalPrice: "94 500",
      promo: true,
      year: 2018,
      km: "156 000",
      capacity: "5 chevaux",
      features: ["BlueEFFICIENCY", "Climatisation automatique", "Régulateur de vitesse", "Système télématique"],
      badge: "Promotion",
      rating: 4.7,
      savings: "6 600"
    },
    {
      id: 4,
      title: "Renault D 7.5T",
      price: "68 900",
      year: 2019,
      km: "142 000",
      capacity: "4 chevaux",
      features: ["Moteur DTI", "Direction assistée", "Vitres électriques", "Verrouillage centralisé"],
      badge: "Occasion Certifiée",
      rating: 4.6
    },
    {
      id: 5,
      title: "DAF LF 45.160",
      price: "105 900",
      year: 2021,
      km: "67 000",
      capacity: "6 chevaux",
      features: ["Euro 6", "Système AdBlue", "Cabine spacieuse", "Transmission manuelle"],
      badge: "Récent",
      rating: 4.9
    },
    {
      id: 6,
      title: "Isuzu N-Series",
      price: "72 500",
      year: 2018,
      km: "178 000",
      capacity: "4 chevaux",
      features: ["Moteur efficient", "Maintenance facilité", "Cabine ergonomique", "Boîte manuelle"],
      badge: "Fiable",
      rating: 4.5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-copper/5 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-copper/10 rounded-full px-4 py-2">
              <Truck className="w-4 h-4 text-copper" />
              <span className="text-copper font-semibold">Camions Chevaux</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold">
              <span className="text-foreground">Camions Chevaux</span>
              <span className="block htg-text-gradient">Professionnels</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez notre sélection de camions chevaux haute capacité pour le transport professionnel. 
              4 à 6 chevaux, suspension pneumatique et tout le confort nécessaire.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="htg-button-secondary">
                <Filter className="w-4 h-4 mr-2" />
                Tous les filtres
              </Button>
              <Button variant="outline" size="sm">Capacité</Button>
              <Button variant="outline" size="sm">Prix</Button>
              <Button variant="outline" size="sm">Année</Button>
              <Button variant="outline" size="sm">Kilométrage</Button>
            </div>
            <div className="text-muted-foreground">
              {camions.length} camions trouvés
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {camions.map((camion, index) => (
              <div 
                key={camion.id} 
                className="htg-card p-0 overflow-hidden group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-leather/30 to-copper/10 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <Truck className="w-16 h-16 text-copper mx-auto" />
                      <p className="text-copper font-semibold text-lg">Camion Chevaux</p>
                    </div>
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                    <Badge className={`font-semibold ${
                      camion.badge === 'Bestseller' ? 'bg-copper text-black' :
                      camion.badge === 'Premium' ? 'bg-gradient-to-r from-copper to-bronze text-white' :
                      camion.badge === 'Promotion' ? 'bg-red-600 text-white' :
                      'bg-copper/90 text-black'
                    }`}>
                      {camion.badge}
                    </Badge>
                    {camion.promo && (
                      <Badge variant="destructive" className="bg-red-600 animate-pulse">
                        -11%
                      </Badge>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="sm" variant="secondary" className="w-10 h-10 p-0 bg-white/90 hover:bg-white">
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="w-10 h-10 p-0 bg-white/90 hover:bg-white">
                      <Eye className="w-4 h-4" />
                    </Button>
                  </div>

                  {/* Rating */}
                  <div className="absolute bottom-4 left-4">
                    <div className="htg-glass rounded-lg px-3 py-1 flex items-center space-x-1">
                      <Star className="w-4 h-4 text-copper fill-copper" />
                      <span className="text-copper font-semibold">{camion.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Header */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-copper transition-colors">
                      {camion.title}
                    </h3>
                    <p className="text-copper text-sm font-medium">Camion Chevaux</p>
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <Calendar className="w-4 h-4 text-copper mx-auto mb-1" />
                      <span className="text-muted-foreground">{camion.year}</span>
                    </div>
                    <div className="text-center">
                      <Gauge className="w-4 h-4 text-copper mx-auto mb-1" />
                      <span className="text-muted-foreground">{camion.km} km</span>
                    </div>
                    <div className="text-center">
                      <Users className="w-4 h-4 text-copper mx-auto mb-1" />
                      <span className="text-muted-foreground">{camion.capacity}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-1">
                    {camion.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-copper rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="space-y-2 pt-4 border-t border-border">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        {camion.originalPrice && (
                          <span className="text-lg text-muted-foreground line-through">
                            {camion.originalPrice}€
                          </span>
                        )}
                        <div className="text-2xl font-bold text-copper">
                          {camion.price}€
                        </div>
                      </div>
                      {camion.promo && camion.savings && (
                        <div className="text-right">
                          <div className="text-green-600 font-semibold text-sm">
                            Économisez {camion.savings}€
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Financement disponible dès 890€/mois
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Link to="/contact" className="flex-1">
                      <Button className="htg-button-primary w-full">
                        Voir Détails
                      </Button>
                    </Link>
                    <Button variant="outline" className="htg-button-secondary px-3">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="htg-card max-w-4xl mx-auto p-8 lg:p-12">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">
                  Besoin d'un Conseil sur nos Camions ?
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Nos experts vous accompagnent dans le choix du camion parfait pour vos besoins professionnels.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/devis">
                    <Button className="htg-button-primary">
                      Demander un Devis Gratuit
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="htg-button-secondary">
                      Contacter un Expert
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Camions;