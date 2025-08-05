import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Star, Calendar, Gauge, Users, Clock, TrendingUp, TrendingDown, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const OffresEtVehicules = () => {
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
      badge: "Premium",
      rating: 5.0
    }
  ];

  const promotions = [
    {
      id: 1,
      title: "Soldes d'Hiver",
      subtitle: "Jusqu'à -20% sur les camions chevaux",
      description: "Profitez de remises exceptionnelles sur notre sélection de camions premium",
      originalPrice: "89 500€",
      promoPrice: "71 600€",
      savings: "17 900€",
      timeLeft: "14 jours restants",
      vehicleCount: "8 véhicules",
      badge: "Hot Deal",
      bgColor: "from-red-600 to-red-800",
      urgent: true
    },
    {
      id: 2,
      title: "Offre Spéciale Vans",
      subtitle: "Financement 0% sur 24 mois",
      description: "Aucun frais de dossier • Première mensualité offerte",
      monthlyPayment: "À partir de 890€/mois",
      timeLeft: "Offre limitée",
      vehicleCount: "12 véhicules",
      badge: "Exclusif",
      bgColor: "from-blue-600 to-blue-800",
      urgent: false
    },
    {
      id: 3,
      title: "Pack Remorques",
      subtitle: "Remorque + Accessoires offerts",
      description: "Tapis, sangles et kit d'éclairage LED inclus",
      promoPrice: "32 900€",
      giftValue: "1 500€ d'accessoires offerts",
      timeLeft: "Stock limité",
      vehicleCount: "5 remorques",
      badge: "Cadeau",
      bgColor: "from-green-600 to-green-800",
      urgent: false
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
            <span className="text-foreground">Nos Meilleures</span>
            <span className="block htg-text-gradient">Offres & Véhicules</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez notre sélection de véhicules vedettes et profitez de nos promotions exceptionnelles. 
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

        {/* Featured Vehicles */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Véhicules Vedettes</h3>
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
                    <Link to={`/${vehicle.category.toLowerCase().includes('camion') ? 'camions' : vehicle.category.toLowerCase().includes('van') ? 'vans' : 'remorques'}`} className="flex-1">
                      <Button className="htg-button-primary w-full" title="Découvrir toutes les caractéristiques de ce véhicule">
                        Voir Détails
                      </Button>
                    </Link>
                    <Button variant="outline" className="htg-button-secondary px-3" title="Ajouter à ma sélection">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Véhicules */}
          <div className="text-center">
            <Link to="/occasions">
              <Button 
                size="lg" 
                className="htg-button-primary"
              >
                Voir Tous les Véhicules
              </Button>
            </Link>
          </div>
        </div>

        {/* Promotions Section */}
        <div>
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-red-600/10 rounded-full px-4 py-2">
              <TrendingDown className="w-4 h-4 text-red-600" />
              <span className="text-red-600 font-semibold">Promotions Exceptionnelles</span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold">
              <span className="text-foreground">Offres</span>
              <span className="block htg-text-gradient">Limitées dans le Temps</span>
            </h3>
            <div className="flex justify-center">
              <div className="flex items-center gap-3 bg-red-600/10 rounded-full px-6 py-3">
                <Clock className="w-5 h-5 text-red-600 animate-pulse" />
                <span className="text-red-600 font-semibold">Offres limitées • Fin le 31 mars</span>
              </div>
            </div>
          </div>

          {/* Promotions Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {promotions.map((promo, index) => (
              <div 
                key={promo.id} 
                className="relative htg-card p-0 overflow-hidden group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${promo.bgColor} opacity-10`}></div>
                
                {/* Urgent Badge */}
                {promo.urgent && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-red-600 text-white animate-pulse">
                      <Zap className="w-3 h-3 mr-1" />
                      Urgent
                    </Badge>
                  </div>
                )}
                
                {/* Promotion Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge className={`bg-gradient-to-r ${promo.bgColor} text-white font-semibold`}>
                    {promo.badge}
                  </Badge>
                </div>

                <div className="relative p-8 space-y-6">
                  {/* Header */}
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">{promo.title}</h3>
                    <p className="text-lg font-semibold text-copper">{promo.subtitle}</p>
                    <p className="text-muted-foreground">{promo.description}</p>
                  </div>

                  {/* Pricing */}
                  <div className="space-y-3">
                    {promo.originalPrice && promo.promoPrice && (
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <span className="text-lg text-muted-foreground line-through">
                            {promo.originalPrice}
                          </span>
                          <span className="text-2xl font-bold text-copper">
                            {promo.promoPrice}
                          </span>
                        </div>
                        <div className="text-green-600 font-semibold">
                          Économisez {promo.savings}
                        </div>
                      </div>
                    )}
                    
                    {promo.monthlyPayment && (
                      <div className="text-center p-4 bg-blue-600/10 rounded-lg">
                        <div className="text-2xl font-bold text-blue-600">
                          {promo.monthlyPayment}
                        </div>
                        <div className="text-sm text-muted-foreground">Financement 0%</div>
                      </div>
                    )}
                    
                    {promo.giftValue && (
                      <div className="text-center p-4 bg-green-600/10 rounded-lg">
                        <div className="text-lg font-bold text-green-600">
                          {promo.giftValue}
                        </div>
                        <div className="text-sm text-muted-foreground">Valeur cadeau</div>
                      </div>
                    )}
                  </div>

                  {/* Info */}
                  <div className="flex justify-between items-center py-4 border-t border-border">
                    <div className="text-sm text-muted-foreground">
                      {promo.vehicleCount} disponibles
                    </div>
                    <div className="text-sm text-copper font-medium">
                      {promo.timeLeft}
                    </div>
                  </div>

                  {/* CTA */}
                  <Link to="/occasions">
                    <Button className="w-full htg-button-primary group">
                      Voir les Offres
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Newsletter Signup for Promotions */}
          <div className="htg-card max-w-4xl mx-auto p-8 lg:p-12 text-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-3xl font-bold text-foreground">
                  Ne Manquez Plus Aucune Promotion
                </h3>
                <p className="text-lg text-muted-foreground">
                  Recevez en avant-première nos offres exclusives et promotions flash
                </p>
              </div>
              
              
              <div className="flex justify-center items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-copper" />
                  <span>Offres exclusives</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-copper" />
                  <span>Alertes flash</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-copper" />
                  <span>Promotions VIP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OffresEtVehicules;