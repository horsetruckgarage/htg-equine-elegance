import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Zap, Calendar, Gauge, Users, Eye, Heart, Star, Filter, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Remorques = () => {
  const remorques = [
    {
      id: 1,
      title: "Böckmann Comfort",
      price: "32 900",
      year: 2021,
      km: "Neuf",
      capacity: "2 chevaux",
      features: ["Aluminium", "Suspension AL-KO", "Plancher caoutchouc", "Éclairage LED"],
      badge: "Premium",
      rating: 5.0
    },
    {
      id: 2,
      title: "Humbaur Xanthos",
      price: "45 900",
      year: 2022,
      km: "Neuf",
      capacity: "3 chevaux",
      features: ["Système de freinage AL-KO", "Éclairage full LED", "Sellerie cuir", "Plancher bois"],
      badge: "Nouveauté",
      rating: 5.0
    },
    {
      id: 3,
      title: "Ifor Williams HB511",
      price: "28 500",
      originalPrice: "31 900",
      promo: true,
      year: 2020,
      km: "Occasion",
      capacity: "2 chevaux",
      features: ["Construction robuste", "Plancher antidérapant", "Ventilation optimale", "Facilité d'entretien"],
      badge: "Promotion",
      rating: 4.8,
      savings: "3 400"
    },
    {
      id: 4,
      title: "Cheval Liberte Gold",
      price: "38 900",
      year: 2021,
      km: "Neuf",
      capacity: "2 chevaux",
      features: ["Made in France", "Suspension pneumatique", "Plancher bois massif", "Design moderne"],
      badge: "Français",
      rating: 4.9
    },
    {
      id: 5,
      title: "Westfalia BC 60",
      price: "24 900",
      originalPrice: "27 500",
      promo: true,
      year: 2019,
      km: "Occasion",
      capacity: "1 cheval",
      features: ["Compact", "Légère", "Manœuvrable", "Idéale débutant"],
      badge: "Économique",
      rating: 4.6,
      savings: "2 600"
    },
    {
      id: 6,
      title: "Anssems PSX",
      price: "41 500",
      year: 2022,
      km: "Neuf",
      capacity: "3 chevaux",
      features: ["Technologie avancée", "Suspension independent", "Confort maximum", "Sécurité renforcée"],
      badge: "Innovant",
      rating: 4.7
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
              <Zap className="w-4 h-4 text-copper" />
              <span className="text-copper font-semibold">Remorques Chevaux</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold">
              <span className="text-foreground">Remorques Chevaux</span>
              <span className="block htg-text-gradient">Flexibles</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Découvrez notre collection de remorques chevaux, solution flexible et économique. 
              De 1 à 3 chevaux, ultra-légères et faciles à manœuvrer.
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
              <Button variant="outline" size="sm">État</Button>
              <Button variant="outline" size="sm">Marque</Button>
            </div>
            <div className="text-muted-foreground">
              {remorques.length} remorques trouvées
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {remorques.map((remorque, index) => (
              <div 
                key={remorque.id} 
                className="htg-card p-0 overflow-hidden group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-leather/30 to-copper/10 flex items-center justify-center">
                    <div className="text-center space-y-2">
                      <Zap className="w-16 h-16 text-copper mx-auto" />
                      <p className="text-copper font-semibold text-lg">Remorque Chevaux</p>
                    </div>
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                    <Badge className={`font-semibold ${
                      remorque.badge === 'Premium' ? 'bg-gradient-to-r from-copper to-bronze text-white' :
                      remorque.badge === 'Nouveauté' ? 'bg-green-600 text-white' :
                      remorque.badge === 'Promotion' ? 'bg-red-600 text-white' :
                      remorque.badge === 'Français' ? 'bg-blue-600 text-white' :
                      'bg-copper/90 text-black'
                    }`}>
                      {remorque.badge}
                    </Badge>
                    {remorque.promo && (
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
                      <span className="text-copper font-semibold">{remorque.rating}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  {/* Header */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-copper transition-colors">
                      {remorque.title}
                    </h3>
                    <p className="text-copper text-sm font-medium">Remorque Chevaux</p>
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div className="text-center">
                      <Calendar className="w-4 h-4 text-copper mx-auto mb-1" />
                      <span className="text-muted-foreground">{remorque.year}</span>
                    </div>
                    <div className="text-center">
                      <Gauge className="w-4 h-4 text-copper mx-auto mb-1" />
                      <span className="text-muted-foreground">{remorque.km}</span>
                    </div>
                    <div className="text-center">
                      <Users className="w-4 h-4 text-copper mx-auto mb-1" />
                      <span className="text-muted-foreground">{remorque.capacity}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-1">
                    {remorque.features.slice(0, 3).map((feature, idx) => (
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
                        {remorque.originalPrice && (
                          <span className="text-lg text-muted-foreground line-through">
                            {remorque.originalPrice}€
                          </span>
                        )}
                        <div className="text-2xl font-bold text-copper">
                          {remorque.price}€
                        </div>
                      </div>
                      {remorque.promo && remorque.savings && (
                        <div className="text-right">
                          <div className="text-green-600 font-semibold text-sm">
                            Économisez {remorque.savings}€
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {remorque.km === 'Neuf' ? 'Garantie constructeur incluse' : 'Financement disponible dès 290€/mois'}
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
                  Choisissez la Remorque Idéale
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  De la remorque 1 place pour débuter aux modèles 3 places premium, trouvez celle qui vous convient.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/devis">
                    <Button className="htg-button-primary">
                      Demander un Devis Gratuit
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button variant="outline" className="htg-button-secondary">
                      Conseil Personnalisé
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

export default Remorques;