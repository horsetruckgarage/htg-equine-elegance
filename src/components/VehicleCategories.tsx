import { ArrowRight, Truck, Car, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const VehicleCategories = () => {
  const categories = [
    {
      id: "camions",
      title: "Camions Chevaux",
      description: "Transport professionnel haute capacité",
      icon: Truck,
      features: ["4-6 chevaux", "Suspension pneumatique", "Cabine couchette"],
      image: "/api/placeholder/400/300",
      count: "25+ modèles"
    },
    {
      id: "vans",
      title: "Vans Chevaux",
      description: "Polyvalence et maniabilité urbaine",
      icon: Car,
      features: ["2-4 chevaux", "Compact", "Économique"],
      image: "/api/placeholder/400/300",
      count: "18+ modèles"
    },
    {
      id: "remorques",
      title: "Remorques Chevaux",
      description: "Solution flexible et économique",
      icon: Zap,
      features: ["1-3 chevaux", "Léger", "Facile à manœuvrer"],
      image: "/api/placeholder/400/300",
      count: "12+ modèles"
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
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="htg-glass rounded-lg px-3 py-1">
                      <span className="text-copper text-sm font-semibold">{category.count}</span>
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
                  <div className="pt-4">
                    <Button 
                      variant="outline" 
                      className="w-full htg-button-secondary group"
                    >
                      Voir la Collection
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
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
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Nos experts sont là pour vous accompagner dans le choix du véhicule parfait. 
                Contactez-nous pour une étude personnalisée de vos besoins.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="htg-button-primary">
                  Demander un Devis Gratuit
                </Button>
                <Button 
                  variant="outline" 
                  className="htg-button-secondary"
                >
                  Prendre Rendez-vous
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VehicleCategories;