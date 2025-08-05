import { ArrowRight, Truck, Car, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const VehicleCategories = () => {
  const categories = [
    {
      id: "camions",
      title: "Camions Chevaux",
      description: "Transport professionnel haute capacité pour vos champions",
      icon: Truck,
      features: ["4-6 chevaux", "Suspension pneumatique", "Cabine couchette", "Boîte automatique"],
      image: "/api/placeholder/400/300",
      count: "25+ modèles",
      promo: "Jusqu'à -15%",
      startingPrice: "À partir de 45 000€",
      highlight: "Bestseller"
    },
    {
      id: "vans",
      title: "Vans Chevaux",
      description: "Polyvalence et maniabilité urbaine pour tous vos déplacements",
      icon: Car,
      features: ["2-4 chevaux", "Compact & agile", "Économique", "Conduite facile"],
      image: "/api/placeholder/400/300",
      count: "18+ modèles",
      promo: "Offres spéciales",
      startingPrice: "À partir de 28 000€",
      highlight: "Plus demandé"
    },
    {
      id: "remorques",
      title: "Remorques Chevaux",
      description: "Solution flexible et économique pour vos concours",
      icon: Zap,
      features: ["1-3 chevaux", "Ultra-léger", "Facile à manœuvrer", "Excellent rapport qualité/prix"],
      image: "/api/placeholder/400/300",
      count: "12+ modèles",
      promo: "Nouveautés 2024",
      startingPrice: "À partir de 15 000€",
      highlight: "Meilleur prix"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-copper/10 rounded-full px-4 py-2">
            <span className="text-copper font-semibold">Nos Spécialités</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Trouvez le Véhicule</span>
            <span className="block htg-text-gradient">Parfait pour Vos Besoins</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Chaque discipline équestre a ses exigences. Découvrez notre sélection organisée 
            par type de véhicule pour trouver la solution idéale.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.id} 
                className="htg-card group cursor-pointer p-0 overflow-hidden"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Image Section */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-leather/40 to-copper/20 flex items-center justify-center">
                    <IconComponent className="w-16 h-16 text-copper" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Badge & Promo */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2">
                    <div className="htg-glass rounded-lg px-3 py-1">
                      <span className="text-copper text-sm font-semibold">{category.count}</span>
                    </div>
                    <div className="bg-red-600 text-white text-xs px-2 py-1 rounded-lg font-semibold animate-pulse">
                      {category.promo}
                    </div>
                  </div>
                  
                  {/* Highlight Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="bg-copper text-black text-xs px-3 py-1 rounded-full font-semibold">
                      {category.highlight}
                    </div>
                  </div>

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-copper/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Button className="htg-button-primary">
                      Explorer
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-copper transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2">
                    {category.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-copper rounded-full"></div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action */}
                  <div className="pt-4 space-y-4">
                    <div className="text-center space-y-1">
                      <p className="text-copper font-bold text-lg">{category.startingPrice}</p>
                      <p className="text-xs text-muted-foreground">{category.promo}</p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Découvrez notre collection exclusive de véhicules sélectionnés pour répondre aux standards les plus exigeants du transport équin.
                    </p>
                    <Link to={`/${category.id}`}>
                      <Button 
                        variant="outline" 
                        className="w-full htg-button-secondary group"
                      >
                        Voir la Collection
                        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="htg-card max-w-4xl mx-auto p-8 lg:p-12">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Besoin d'un Conseil Personnalisé ?
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                Nos experts sont là pour vous accompagner dans le choix du véhicule parfait. 
                Contactez-nous pour une étude personnalisée de vos besoins.
              </p>
              <div className="text-center space-y-4 mb-6">
                <p className="text-copper font-medium text-lg">Recevez votre offre personnalisée en moins de 24h – Sans engagement</p>
                <p className="text-sm text-muted-foreground">Besoin d'un échange personnalisé ? Réservez un rendez-vous téléphonique ou en visio avec l'un de nos experts.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/devis">
                  <Button className="htg-button-primary">
                    Demander un Devis Gratuit
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button 
                    variant="outline" 
                    className="htg-button-secondary"
                  >
                    Prendre Rendez-vous
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleCategories;