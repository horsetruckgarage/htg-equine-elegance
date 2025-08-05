import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Car, Calendar, Gauge, Users, Eye, Heart, Star, Filter, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Vans = () => {
  const vans = [
    {
      id: 1,
      title: "Renault Master L3H2",
      price: "67 900",
      year: 2020,
      km: "89 500",
      capacity: "2 chevaux",
      features: ["Plancher antidérapant", "Éclairage LED", "Ventilation", "Kit mains libres"],
      badge: "Coup de Cœur",
      rating: 4.8
    },
    {
      id: 2,
      title: "Mercedes Sprinter 516",
      price: "78 500",
      originalPrice: "84 900",
      promo: true,
      year: 2018,
      km: "156 000",
      capacity: "3 chevaux",
      features: ["Moteur BlueTEC", "Boîte automatique", "Caméra de recul", "Radar de recul"],
      badge: "Promotion",
      rating: 4.7,
      savings: "6 400"
    },
    {
      id: 3,
      title: "Fiat Ducato Maxi",
      price: "54 900",
      year: 2019,
      km: "98 000",
      capacity: "2 chevaux",
      features: ["Volume optimisé", "Kit mains libres", "Régulateur de vitesse", "Climatisation"],
      badge: "Occasion Certifiée",
      rating: 4.6
    },
    {
      id: 4,
      title: "Ford Transit L4H3",
      price: "61 500",
      year: 2021,
      km: "45 000",
      capacity: "3 chevaux",
      features: ["EcoBlue", "SYNC 3", "Caméra de recul", "Aide au stationnement"],
      badge: "Récent",
      rating: 4.7
    },
    {
      id: 5,
      title: "Volkswagen Crafter",
      price: "73 900",
      originalPrice: "79 500",
      promo: true,
      year: 2019,
      km: "112 000",
      capacity: "3 chevaux",
      features: ["TDI BlueMotion", "Climatisation", "ESP", "Assistant de démarrage en côte"],
      badge: "Bestseller",
      rating: 4.8,
      savings: "5 600"
    },
    {
      id: 6,
      title: "Peugeot Boxer L4H2",
      price: "58 900",
      year: 2020,
      km: "78 000",
      capacity: "2 chevaux",
      features: ["BlueHDi", "Mirror Screen", "Régulateur de vitesse", "Détecteur de fatigue"],
      badge: "Économique",
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
              <Car className="w-4 h-4 text-copper" />
              <span className="text-copper font-semibold">Vans Chevaux</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold">
              <span className="text-foreground">Vans Chevaux</span>
              <span className="block htg-text-gradient">Polyvalents</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez notre gamme de vans chevaux alliant polyvalence et maniabilité. 
              Parfaits pour vos déplacements urbains et ruraux avec 2 à 4 chevaux.
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
              {vans.length} vans trouvés
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {vans.map((van, index) => (
              <div 
                key={van.id} 
                className="htg-card p-0 overflow-hidden group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-leather/30 to-copper/10 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <Car className="w-16 h-16 text-copper mx-auto" />
                      <p className="text-copper font-semibold text-lg">Van Chevaux</p>
                    </div>
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                    <Badge className={`font-semibold ${
                      van.badge === 'Bestseller' ? 'bg-copper text-black' :
                      van.badge === 'Premium' ? 'bg-gradient-to-r from-copper to-bronze text-white' :
                      van.badge === 'Promotion' ? 'bg-red-600 text-white' :
                      van.badge === 'Coup de Cœur' ? 'bg-pink-600 text-white' :
                      'bg-copper/90 text-black'
                    }`}>
                      {van.badge}
                    </Badge>
                    {van.promo && (
                      <Badge variant="destructive" className="bg-red-600 animate-pulse">
                        -8%
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
                      <span className="text-copper font-semibold">{van.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Header */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-copper transition-colors">
                      {van.title}
                    </h3>
                    <p className="text-copper text-sm font-medium">Van Chevaux</p>
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <Calendar className="w-4 h-4 text-copper mx-auto mb-1" />
                      <span className="text-muted-foreground">{van.year}</span>
                    </div>
                    <div className="text-center">
                      <Gauge className="w-4 h-4 text-copper mx-auto mb-1" />
                      <span className="text-muted-foreground">{van.km} km</span>
                    </div>
                    <div className="text-center">
                      <Users className="w-4 h-4 text-copper mx-auto mb-1" />
                      <span className="text-muted-foreground">{van.capacity}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-1">
                    {van.features.slice(0, 3).map((feature, idx) => (
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
                        {van.originalPrice && (
                          <span className="text-lg text-muted-foreground line-through">
                            {van.originalPrice}€
                          </span>
                        )}
                        <div className="text-2xl font-bold text-copper">
                          {van.price}€
                        </div>
                      </div>
                      {van.promo && van.savings && (
                        <div className="text-right">
                          <div className="text-green-600 font-semibold text-sm">
                            Économisez {van.savings}€
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Financement disponible dès 590€/mois
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
                  Trouvez le Van Parfait pour Vous
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Nos experts vous conseillent pour choisir le van chevaux adapté à vos besoins et votre budget.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/devis">
                    <Button className="htg-button-primary">
                      Demander un Devis Gratuit
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="htg-button-secondary">
                      Prendre Rendez-vous
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

export default Vans;