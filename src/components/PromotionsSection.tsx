import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, TrendingDown, Star, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PromotionsSection = () => {
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-red-600/10 rounded-full px-4 py-2">
            <TrendingDown className="w-4 h-4 text-red-600" />
            <span className="text-red-600 font-semibold">Promotions Exceptionnelles</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Offres</span>
            <span className="block htg-text-gradient">Limitées dans le Temps</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Profitez de nos promotions exceptionnelles sur une sélection de véhicules premium. 
            Stocks limités, ne manquez pas ces opportunités uniques !
          </p>
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
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input 
                type="email" 
                placeholder="Votre email" 
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
              />
              <Button className="htg-button-primary" onClick={() => {
                const email = (document.querySelector('input[type="email"]') as HTMLInputElement)?.value;
                if (email) alert(`Merci ! Vous serez alerté des prochaines promotions sur ${email}`);
              }}>
                S'abonner
              </Button>
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
    </section>
  );
};

export default PromotionsSection;