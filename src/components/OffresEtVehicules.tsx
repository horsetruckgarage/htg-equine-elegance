import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Eye, Heart, Star, Calendar, Gauge, Users, Clock, TrendingUp, TrendingDown, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { getLocalizedPath } from "@/hooks/useLocalizedRouting";

const OffresEtVehicules = () => {
  const { t, language } = useTranslation();
  const featuredVehicles = [
    {
      id: 1,
      title: "Iveco Daily 70C21",
      category: t.categories.horseTrucks.title,
      price: "79 900",
      originalPrice: "89 500",
      promo: true,
      promoText: "-11%",
      year: 2019,
      km: "125 000",
      capacity: "4 " + t.common.horsesCapacity,
      features: [t.features.pneumaticSuspension, t.features.airConditioning, t.features.sleepingCabin, t.features.automaticTransmission],
      badge: t.common.bestseller,
      rating: 4.9,
      urgency: t.common.onlyXDaysLeft,
      savings: "9 600"
    },
    {
      id: 2,
      title: "Renault Master L3H2",
      category: t.categories.horseVans.title,
      price: "67 900",
      year: 2020,
      km: "89 500",
      capacity: "2 " + t.common.horsesCapacity,
      features: [t.features.nonSlipFlooring, t.features.ledLighting, t.features.ventilation, t.features.handsFreeeKit],
      badge: t.common.favorite,
      rating: 4.8
    },
    {
      id: 3,
      title: "Böckmann Comfort",
      category: t.categories.horseTrailers.title,
      price: "32 900",
      year: 2021,
      km: t.common.newArrival,
      capacity: "2 " + t.common.horsesCapacity,
      features: [t.features.aluminum, t.features.alkoSuspension, t.features.rubberFlooring, t.features.ledLighting],
      badge: t.common.promotion,
      rating: 5.0
    }
  ];

  const promotions = [
    {
      id: 1,
      title: t.promotions.winterSales.title,
      subtitle: t.promotions.winterSales.subtitle,
      description: t.promotions.winterSales.description,
      originalPrice: "89 500€",
      promoPrice: "71 600€",
      savings: "17 900€",
      timeLeft: t.promotions.winterSales.timeLeft,
      vehicleCount: t.promotions.winterSales.vehicleCount,
      badge: t.promotions.winterSales.badge,
      bgColor: "from-red-600 to-red-800",
      urgent: true
    },
    {
      id: 2,
      title: t.promotions.specialVans.title,
      subtitle: t.promotions.specialVans.subtitle,
      description: t.promotions.specialVans.description,
      monthlyPayment: t.promotions.specialVans.monthlyPayment,
      timeLeft: t.promotions.specialVans.timeLeft,
      vehicleCount: t.promotions.specialVans.vehicleCount,
      badge: t.promotions.specialVans.badge,
      bgColor: "from-blue-600 to-blue-800",
      urgent: false
    },
    {
      id: 3,
      title: t.promotions.trailersPackage.title,
      subtitle: t.promotions.trailersPackage.subtitle,
      description: t.promotions.trailersPackage.description,
      promoPrice: "32 900€",
      giftValue: t.promotions.trailersPackage.giftValue,
      timeLeft: t.promotions.trailersPackage.timeLeft,
      vehicleCount: t.promotions.trailersPackage.vehicleCount,
      badge: t.promotions.trailersPackage.badge,
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
            <span className="text-copper font-semibold">{t.common.premiumSelection}</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">{t.common.ourBest}</span>
            <span className="block htg-text-gradient">{t.common.offersVehicles}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.common.discoverSelection}
          </p>
          <div className="flex justify-center items-center gap-4 mt-6">
            <div className="flex items-center gap-2 bg-red-600/10 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></div>
              <span className="text-red-600 font-medium text-sm">{t.common.limitedOffer}</span>
            </div>
            <div className="flex items-center gap-2 bg-copper/10 rounded-full px-4 py-2">
              <div className="w-2 h-2 bg-copper rounded-full"></div>
              <span className="text-copper font-medium text-sm">{t.common.expertiseGuaranteed}</span>
            </div>
          </div>
        </div>

        {/* Featured Vehicles */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">{t.common.featuredVehicles}</h3>
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
                      <span className="text-muted-foreground">{vehicle.km} {vehicle.km !== t.common.newArrival ? t.common.km : ''}</span>
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
                        +{vehicle.features.length - 3} {t.common.moreEquipment}
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
                            {t.common.savings} {vehicle.savings}€
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {vehicle.promo ? t.common.promotionalPrice + ' • ' + t.common.limitedOffer : t.common.financingAvailable}
                    </div>
                  </div>
                  
                  <div className="flex gap-2 pt-2">
                    <Link to={getLocalizedPath(`/${vehicle.category.toLowerCase().includes('camion') ? 'camions' : vehicle.category.toLowerCase().includes('van') ? 'vans' : 'remorques'}`, language)} className="flex-1">
                      <Button className="htg-button-primary w-full" title={t.common.discoverCharacteristics}>
                        {t.common.viewDetails}
                      </Button>
                    </Link>
                    <Button variant="outline" className="htg-button-secondary px-3" title={t.common.addToMySelection}>
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Véhicules */}
          <div className="text-center">
            <Link to={getLocalizedPath("/occasions", language)}>
              <Button 
                size="lg" 
                className="htg-button-primary"
              >
                {t.common.viewAll} {t.common.vehicles}
              </Button>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

export default OffresEtVehicules;