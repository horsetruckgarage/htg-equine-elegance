import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { getLocalizedPath } from "@/hooks/useLocalizedRouting";
import camionChevaux from "@/assets/camion-chevaux.jpg";
import vanChevaux from "@/assets/van-chevaux.jpg";
import remorqueChevaux from "@/assets/remorque-chevaux.jpg";

const VehicleCategories = () => {
  const { t, language } = useTranslation();
  
  const categories = [
    {
      id: "camions",
      title: t.categories.horseTrucks.title,
      description: t.categories.horseTrucks.description,
      image: camionChevaux,
      features: t.categories.horseTrucks.features,
      count: "25+ modèles",
      promo: "Jusqu'à -15%",
      startingPrice: t.categories.horseTrucks.from + " 45 000€",
      highlight: "Bestseller"
    },
    {
      id: "vans",
      title: t.categories.horseVans.title,
      description: t.categories.horseVans.description,
      image: vanChevaux,
      features: t.categories.horseVans.features,
      count: "18+ modèles",
      promo: "Offres spéciales",
      startingPrice: t.categories.horseVans.from + " 28 000€",
      highlight: "Plus demandé"
    },
    {
      id: "remorques",
      title: t.categories.horseTrailers.title,
      description: t.categories.horseTrailers.description,
      image: remorqueChevaux,
      features: t.categories.horseTrailers.features,
      count: "12+ modèles",
      promo: "Nouveautés 2024",
      startingPrice: t.categories.horseTrailers.from + " 15 000€",
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
            <span className="text-foreground">{t.categories.title}</span>
            <span className="block htg-text-gradient">{t.categories.subtitle}</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Chaque discipline équestre a ses exigences. Découvrez notre sélection organisée 
            par type de véhicule pour trouver la solution idéale.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => {
          return (
            <div 
              key={category.id} 
              className="htg-card group cursor-pointer p-0 overflow-hidden"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Image Section */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
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
                    <Link to={getLocalizedPath(`/${category.id}`, language)}>
                      <Button className="htg-button-primary">
                        {category.id === 'camions' ? t.categories.horseTrucks.explore : 
                         category.id === 'vans' ? t.categories.horseVans.explore : 
                         t.categories.horseTrailers.explore}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
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
                    <Link to={getLocalizedPath(`/${category.id}`, language)}>
                      <Button 
                        variant="outline" 
                        className="w-full htg-button-secondary group"
                      >
                        {t.common.viewAll}
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
                {t.categories.ctaTitle}
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
                {t.categories.ctaDescription}
              </p>
              <div className="text-center space-y-4 mb-6">
                <p className="text-copper font-medium text-lg">Recevez votre offre personnalisée en moins de 24h – Sans engagement</p>
                <p className="text-sm text-muted-foreground">Besoin d'un échange personnalisé ? Réservez un rendez-vous téléphonique ou en visio avec l'un de nos experts.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to={getLocalizedPath("/devis", language)}>
                  <Button className="htg-button-primary">
                    {t.categories.getFreeQuote}
                  </Button>
                </Link>
                <Link to={getLocalizedPath("/contact", language)}>
                  <Button 
                    variant="outline" 
                    className="htg-button-secondary"
                  >
                    {t.categories.makeAppointment}
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