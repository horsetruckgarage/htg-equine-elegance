import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Star, Calendar, Gauge, Users } from "lucide-react";

const FeaturedVehicles = () => {
  const featuredVehicles = [
    {
      id: 1,
      title: "Iveco Daily 70C21",
      category: "Camion Chevaux",
      price: "89 500",
      promo: true,
      promoPrice: "79 900",
      year: 2019,
      km: "125 000",
      capacity: "4 chevaux",
      features: ["Suspension pneumatique", "Climatisation", "Cabine couchette"],
      image: "/api/placeholder/600/400",
      badge: "Bestseller",
      rating: 4.9
    },
    {
      id: 2,
      title: "Renault Master L3H2",
      category: "Van Chevaux",
      price: "45 900",
      year: 2020,
      km: "89 000",
      capacity: "3 chevaux",
      features: ["Plancher anti-dérapant", "Éclairage LED", "Rampe d'accès"],
      image: "/api/placeholder/600/400",
      badge: "Nouveau",
      rating: 4.8
    },
    {
      id: 3,
      title: "Böckmann Comfort",
      category: "Remorque Chevaux",
      price: "12 500",
      year: 2021,
      km: "Neuf",
      capacity: "2 chevaux",
      features: ["Aluminium", "Suspension AL-KO", "Plancher caoutchouc"],
      image: "/api/placeholder/600/400",
      badge: "Premium",
      rating: 5.0
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-copper/10 rounded-full px-4 py-2">
            <Star className="w-4 h-4 text-copper fill-copper" />
            <span className="text-copper font-semibold">Sélection Premium</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Véhicules</span>
            <span className="block htg-text-gradient">Les Plus Demandés</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez nos coups de cœur : les véhicules qui séduisent le plus nos clients 
            par leur qualité exceptionnelle et leur rapport qualité-prix.
          </p>
        </div>

        {/* Vehicles Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredVehicles.map((vehicle, index) => (
            <div 
              key={vehicle.id} 
              className="htg-card p-0 overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-leather/30 to-copper/10 flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <Gauge className="w-12 h-12 text-copper mx-auto" />
                    <p className="text-copper font-semibold">{vehicle.category}</p>
                  </div>
                </div>
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <Badge className="bg-copper text-black font-semibold">
                    {vehicle.badge}
                  </Badge>
                  {vehicle.promo && (
                    <Badge variant="destructive" className="bg-red-600">
                      Promotion
                    </Badge>
                  )}
                </div>

                {/* Actions */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
                    <Heart className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="secondary" className="w-10 h-10 p-0">
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
                    <span className="text-muted-foreground">{vehicle.km} km</span>
                  </div>
                  <div className="text-center">
                    <Users className="w-4 h-4 text-copper mx-auto mb-1" />
                    <span className="text-muted-foreground">{vehicle.capacity}</span>
                  </div>
                </div>

                {/* Features */}
                <div className="space-y-1">
                  {vehicle.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1 h-1 bg-copper rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                  {vehicle.features.length > 2 && (
                    <div className="text-xs text-copper font-medium">
                      +{vehicle.features.length - 2} autres équipements
                    </div>
                  )}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="space-y-1">
                    {vehicle.promo ? (
                      <>
                        <div className="text-lg font-bold text-copper">
                          {vehicle.promoPrice}€
                        </div>
                        <div className="text-sm text-muted-foreground line-through">
                          {vehicle.price}€
                        </div>
                      </>
                    ) : (
                      <div className="text-lg font-bold text-copper">
                        {vehicle.price}€
                      </div>
                    )}
                  </div>
                  <Button className="htg-button-primary" title="En savoir plus sur ce modèle">
                    Voir Détails
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