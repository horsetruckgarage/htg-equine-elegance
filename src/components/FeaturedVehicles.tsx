import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Star, Calendar, Gauge, Users, Clock, TrendingUp } from "lucide-react";

const FeaturedVehicles = () => {
  const featuredVehicles = [
    {
      id: 1,
      title: "Iveco Daily 70C21",
      category: "Camion Chevaux",
      price: "79 900",
      originalPrice: "89 500",
      promo: true,
      promoText: "-11%",
      year: 2019,
      km: "125 000",
      capacity: "4 chevaux",
      features: ["Suspension pneumatique", "Climatisation", "Cabine couchette", "Boîte automatique"],
      image: "/api/placeholder/600/400",
      badge: "Bestseller",
      rating: 4.9,
      urgency: "Plus que 3 jours",
      savings: "9 600"
    },
    {
      id: 2,
      title: "Renault Master L3H2",
      category: "Van Chevaux",
      price: "67 900",
      year: 2020,
      km: "89 500",
      capacity: "2 chevaux",
      features: ["Plancher antidérapant", "Éclairage LED", "Ventilation", "Kit mains libres"],
      image: "/api/placeholder/600/400",
      badge: "Coup de Cœur",
      rating: 4.8
    },
    {
      id: 3,
      title: "Böckmann Comfort",
      category: "Remorque Chevaux",
      price: "32 900",
      year: 2021,
      km: "Neuf",
      capacity: "2 chevaux",
      features: ["Aluminium", "Suspension AL-KO", "Plancher caoutchouc", "Éclairage LED"],
      image: "/api/placeholder/600/400",
      badge: "Premium",
      rating: 5.0
    },
    {
      id: 4,
      title: "Mercedes Sprinter 516",
      category: "Van Chevaux Premium",
      price: "78 500",
      originalPrice: "84 900",
      promo: true,
      promoText: "-8%",
      year: 2018,
      km: "156 000",
      capacity: "3 chevaux",
      features: ["Moteur BlueTEC", "Boîte automatique", "Caméra de recul", "Radar de recul"],
      image: "/api/placeholder/600/400",
      badge: "Promotion",
      rating: 4.7,
      urgency: "Dernière semaine",
      savings: "6 400"
    },
    {
      id: 5,
      title: "Fiat Ducato Maxi",
      category: "Van Chevaux",
      price: "54 900",
      year: 2019,
      km: "98 000",
      capacity: "2 chevaux",
      features: ["Volume optimisé", "Kit mains libres", "Régulateur de vitesse", "Climatisation"],
      image: "/api/placeholder/600/400",
      badge: "Occasion Certifiée",
      rating: 4.6
    },
    {
      id: 6,
      title: "Humbaur Xanthos",
      category: "Remorque Premium",
      price: "45 900",
      year: 2022,
      km: "Neuf",
      capacity: "3 chevaux",
      features: ["Système de freinage AL-KO", "Éclairage full LED", "Sellerie cuir", "Plancher bois"],
      image: "/api/placeholder/600/400",
      badge: "Nouveauté",
      rating: 5.0
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-copper/10 rounded-full px-4 py-2">
            <TrendingUp className="w-4 h-4 text-copper" />
            <span className="text-copper font-semibold">Sélection Premium</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Véhicules</span>
            <span className="block htg-text-gradient">Les Plus Demandés</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Profitez de nos offres exceptionnelles sur une sélection de véhicules premium. 
            Chaque véhicule est rigoureusement contrôlé par nos experts.
          </p>
          <div className="flex justify-center items-center gap-4 mt-6">
            <div className="flex items-center gap-2 bg-red-600/10 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
              <span className="text-red-600 font-medium text-sm">Promotions limitées</span>
            </div>
            <div className="flex items-center gap-2 bg-copper/10 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-copper rounded-full"></div>
              <span className="text-copper font-medium text-sm">Expertise garantie</span>
            </div>
          </div>
        </div>

        {/* Vehicles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredVehicles.map((vehicle, index) => (
            <div 
              key={vehicle.id} 
              className="htg-card p-0 overflow-hidden group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-leather/30 to-copper/10 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <Gauge className="w-16 h-16 text-copper mx-auto" />
                    <p className="text-copper font-semibold text-lg">{vehicle.category}</p>
                  </div>
                </div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                  <Badge className={`font-semibold ${
                    vehicle.badge === 'Bestseller' ? 'bg-copper text-black' :
                    vehicle.badge === 'Premium' ? 'bg-gradient-to-r from-copper to-bronze text-white' :
                    vehicle.badge === 'Promotion' ? 'bg-red-600 text-white' :
                    vehicle.badge === 'Nouveauté' ? 'bg-green-600 text-white' :
                    'bg-copper/90 text-black'
                  }`}>
                    {vehicle.badge}
                  </Badge>
                  {vehicle.promo && (
                    <div className="flex gap-1">
                      <Badge variant="destructive" className="bg-red-600 animate-pulse">
                        {vehicle.promoText}
                      </Badge>
                    </div>
                  )}
                  {vehicle.urgency && (
                    <Badge className="bg-orange-600 text-white text-xs animate-bounce">
                      <Clock className="w-3 h-3 mr-1" />
                      {vehicle.urgency}
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
                    <span className="text-copper font-semibold">{vehicle.rating}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Header */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-copper transition-colors">
                    {vehicle.title}
                  </h3>
                  <p className="text-copper text-sm font-medium">{vehicle.category}</p>
                </div>

                {/* Specs */}
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <Calendar className="w-4 h-4 text-copper mx-auto mb-1" />
                    <span className="text-muted-foreground">{vehicle.year}</span>
                  </div>
                  <div className="text-center">
                    <Gauge className="w-4 h-4 text-copper mx-auto mb-1" />
                    <span className="text-muted-foreground">{vehicle.km} {vehicle.km !== 'Neuf' ? 'km' : ''}</span>
                  </div>
                  <div className="text-center">
                    <Users className="w-4 h-4 text-copper mx-auto mb-1" />
                    <span className="text-muted-foreground">{vehicle.capacity}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-1">
                  {vehicle.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-copper rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                  {vehicle.features.length > 3 && (
                    <div className="text-xs text-copper font-medium">
                      +{vehicle.features.length - 3} autres équipements
                    </div>
                  )}
                </div>

                {/* Pricing */}
                <div className="space-y-2 pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {vehicle.originalPrice && (
                        <span className="text-lg text-muted-foreground line-through">
                          {vehicle.originalPrice}€
                        </span>
                      )}
                      <div className="text-2xl font-bold text-copper">
                        {vehicle.price}€
                      </div>
                    </div>
                    {vehicle.promo && vehicle.savings && (
                      <div className="text-right">
                        <div className="text-green-600 font-semibold text-sm">
                          Économisez {vehicle.savings}€
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {vehicle.promo ? 'Prix promotionnel • Offre limitée' : 'Financement disponible dès 299€/mois'}
                  </div>
                </div>
                
                <div className="flex gap-2 pt-2">
                  <Button className="htg-button-primary flex-1" title="Découvrir toutes les caractéristiques de ce véhicule">
                    Voir Détails
                  </Button>
                  <Button variant="outline" className="htg-button-secondary px-3" title="Ajouter à ma sélection">
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center space-y-4">
          <p className="text-muted-foreground max-w-xl mx-auto">
            Parcourez l'ensemble de notre gamme, véhicules neufs et d'occasion.
          </p>
          <Button 
            size="lg" 
            className="htg-button-primary"
          >
            Voir Tous les Véhicules
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedVehicles;