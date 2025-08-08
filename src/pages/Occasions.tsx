import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingDown, Calendar, Gauge, Users, Eye, Heart, Star, Filter, ArrowRight, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Occasions = () => {
  const occasions = [
    {
      id: 1,
      title: "Iveco Daily 70C21",
      category: "Camion Chevaux",
      price: "79 900",
      originalPrice: "89 500",
      promo: true,
      year: 2019,
      km: "125 000",
      capacity: "4 chevaux",
      features: ["Suspension pneumatique", "Climatisation", "Cabine couchette", "Boîte automatique"],
      badge: "Promotion Flash",
      rating: 4.9,
      urgency: "Plus que 3 jours",
      savings: "9 600",
      discount: "-11%"
    },
    {
      id: 2,
      title: "Mercedes Sprinter 516",
      category: "Van Chevaux Premium",
      price: "78 500",
      originalPrice: "84 900",
      promo: true,
      year: 2018,
      km: "156 000",
      capacity: "3 chevaux",
      features: ["Moteur BlueTEC", "Boîte automatique", "Caméra de recul", "Radar de recul"],
      badge: "Dernière Semaine",
      rating: 4.7,
      urgency: "Dernière semaine",
      savings: "6 400",
      discount: "-8%"
    },
    {
      id: 3,
      title: "Ifor Williams HB511",
      category: "Van Chevaux",
      price: "28 500",
      originalPrice: "31 900",
      promo: true,
      year: 2020,
      km: "Occasion",
      capacity: "2 chevaux",
      features: ["Construction robuste", "Plancher antidérapant", "Ventilation optimale", "Facilité d'entretien"],
      badge: "Super Deal",
      rating: 4.8,
      savings: "3 400",
      discount: "-11%"
    },
    {
      id: 4,
      title: "Renault Master L3H2",
      category: "Van Chevaux",
      price: "67 900",
      originalPrice: "72 500",
      promo: true,
      year: 2020,
      km: "89 500",
      capacity: "2 chevaux",
      features: ["Plancher antidérapant", "Éclairage LED", "Ventilation", "Kit mains libres"],
      badge: "Offre Spéciale",
      rating: 4.8,
      savings: "4 600",
      discount: "-6%"
    },
    {
      id: 5,
      title: "Volkswagen Crafter",
      category: "Van Chevaux",
      price: "73 900",
      originalPrice: "79 500",
      promo: true,
      year: 2019,
      km: "112 000",
      capacity: "3 chevaux",
      features: ["TDI BlueMotion", "Climatisation", "ESP", "Assistant de démarrage en côte"],
      badge: "Prix Cassé",
      rating: 4.8,
      urgency: "Stock limité",
      savings: "5 600",
      discount: "-7%"
    },
    {
      id: 6,
      title: "Westfalia BC 60",
      category: "Van Chevaux",
      price: "24 900",
      originalPrice: "27 500",
      promo: true,
      year: 2019,
      km: "Occasion",
      capacity: "1 cheval",
      features: ["Compact", "Légère", "Manœuvrable", "Idéale débutant"],
      badge: "Première Acquisition",
      rating: 4.6,
      savings: "2 600",
      discount: "-9%"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-red-600/5 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-red-600/10 rounded-full px-4 py-2">
              <TrendingDown className="w-4 h-4 text-red-600" />
              <span className="text-red-600 font-semibold">Promotions Exceptionnelles</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold">
              <span className="text-foreground">Véhicules d'Occasion</span>
              <span className="block htg-text-gradient">En Promotion</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Profitez de nos offres exceptionnelles sur une sélection de véhicules d'occasion premium. 
              Remises importantes et stocks limités !
            </p>
            <div className="flex justify-center">
              <div className="flex items-center gap-3 bg-red-600/10 rounded-full px-6 py-3">
                <Clock className="w-5 h-5 text-red-600 animate-pulse" />
                <span className="text-red-600 font-semibold">Offres limitées • Fin le 31 mars</span>
              </div>
            </div>
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
              <Button variant="outline" size="sm">Type</Button>
              <Button variant="outline" size="sm">Prix</Button>
              <Button variant="outline" size="sm">Année</Button>
              <Button variant="outline" size="sm">Kilométrage</Button>
              <Button variant="outline" size="sm" className="bg-red-600/10 text-red-600 border-red-600">
                En Promotion
              </Button>
            </div>
            <div className="text-muted-foreground">
              {occasions.length} offres exceptionnelles
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {occasions.map((occasion, index) => (
              <div 
                key={occasion.id} 
                className="htg-card p-0 overflow-hidden group hover:scale-105 transition-all duration-300 border-red-600/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-red-600/20 to-copper/10 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <TrendingDown className="w-16 h-16 text-red-600 mx-auto" />
                      <p className="text-red-600 font-semibold text-lg">{occasion.category}</p>
                    </div>
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                    <Badge className="bg-red-600 text-white font-semibold animate-pulse">
                      {occasion.badge}
                    </Badge>
                    <Badge variant="destructive" className="bg-red-600 text-white">
                      {occasion.discount}
                    </Badge>
                    {occasion.urgency && (
                      <Badge className="bg-orange-600 text-white text-xs animate-bounce">
                        <Clock className="w-3 h-3 mr-1" />
                        {occasion.urgency}
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
                      <span className="text-copper font-semibold">{occasion.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Header */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-copper transition-colors">
                      {occasion.title}
                    </h3>
                    <p className="text-copper text-sm font-medium">{occasion.category}</p>
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <Calendar className="w-4 h-4 text-copper mx-auto mb-1" />
                      <span className="text-muted-foreground">{occasion.year}</span>
                    </div>
                    <div className="text-center">
                      <Gauge className="w-4 h-4 text-copper mx-auto mb-1" />
                      <span className="text-muted-foreground">{occasion.km} {occasion.km !== 'Occasion' ? 'km' : ''}</span>
                    </div>
                    <div className="text-center">
                      <Users className="w-4 h-4 text-copper mx-auto mb-1" />
                      <span className="text-muted-foreground">{occasion.capacity}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-1">
                    {occasion.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-copper rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Pricing */}
                  <div className="space-y-2 pt-4 border-t border-red-600/20">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-lg text-muted-foreground line-through">
                          {occasion.originalPrice}€
                        </span>
                        <div className="text-2xl font-bold text-red-600">
                          {occasion.price}€
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-600 font-semibold text-sm">
                          Économisez {occasion.savings}€
                        </div>
                      </div>
                    </div>
                    <div className="text-xs text-red-600 font-medium">
                      Prix promotionnel • Offre limitée
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Link to="/contact" className="flex-1">
                      <Button className="htg-button-primary w-full bg-red-600 hover:bg-red-700">
                        Voir Détails
                      </Button>
                    </Link>
                    <Button variant="outline" className="htg-button-secondary px-3 border-red-600 text-red-600">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="htg-card max-w-4xl mx-auto p-8 lg:p-12 border-red-600/20">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">
                  Ne Manquez Pas Ces Offres Exceptionnelles !
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Stocks limités et prix jamais vus. Ces promotions se terminent bientôt, 
                  contactez-nous rapidement pour réserver votre véhicule.
                </p>
                <div className="bg-red-600/10 rounded-lg p-4 max-w-md mx-auto">
                  <div className="flex items-center justify-center gap-2 text-red-600 font-semibold">
                    <Clock className="w-5 h-5 animate-pulse" />
                    <span>Offres valables jusqu'au 31 mars</span>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/devis">
                    <Button className="htg-button-primary bg-red-600 hover:bg-red-700">
                      Réserver Maintenant
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="htg-button-secondary border-red-600 text-red-600">
                      Appeler un Conseiller
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

export default Occasions;