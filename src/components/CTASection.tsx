import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Clock, Euro, Shield } from "lucide-react";

const CTASection = () => {
  const benefits = [
    {
      icon: CheckCircle,
      title: "Devis Gratuit",
      description: "Estimation personnalisée sous 24h"
    },
    {
      icon: Euro,
      title: "Financement Facilité",
      description: "Solutions adaptées à votre budget"
    },
    {
      icon: Shield,
      title: "Garantie Incluse",
      description: "Véhicules garantis constructeur"
    },
    {
      icon: Clock,
      title: "Livraison Rapide",
      description: "Disponible sous 7 à 15 jours"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-copper/5 to-bronze/10">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main CTA Card */}
          <div className="htg-card p-8 lg:p-12 text-center space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-copper/20 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-copper" />
                <span className="text-copper font-semibold">Réponse Sous 24h</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold">
                <span className="text-foreground">Prêt à Trouver</span>
                <span className="block htg-text-gradient">Votre Véhicule Idéal ?</span>
              </h2>
              
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Nos experts vous accompagnent gratuitement dans votre projet. 
                Obtenez un devis personnalisé et découvrez les solutions qui correspondent 
                exactement à vos besoins et votre budget.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div 
                    key={index} 
                    className="p-4 bg-background/50 rounded-lg border border-border/50"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <IconComponent className="w-8 h-8 text-copper mx-auto mb-3" />
                    <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                );
              })}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="htg-button-primary text-lg px-8 py-4 group"
              >
                Demander un Devis Gratuit
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <div className="flex items-center space-x-4 text-muted-foreground">
                <span className="hidden sm:block w-px h-6 bg-border"></span>
                <div className="text-center sm:text-left">
                  <div className="font-semibold text-copper">+33 1 23 45 67 89</div>
                  <div className="text-sm">Lun-Ven: 8h-18h</div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-border">
              <div className="grid grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-copper">24h</div>
                  <div className="text-sm text-muted-foreground">Délai de Réponse</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-copper">0€</div>
                  <div className="text-sm text-muted-foreground">Frais de Devis</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-copper">15+</div>
                  <div className="text-sm text-muted-foreground">Ans d'Expérience</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="htg-card p-6 text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-copper/10 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-copper group-hover:text-white transition-colors">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Devis Express</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Formulaire en ligne, réponse sous 24h
              </p>
              <Button variant="outline" className="htg-button-secondary">
                Formulaire
              </Button>
            </div>

            <div className="htg-card p-6 text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-copper/10 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-copper group-hover:text-white transition-colors">
                <Shield className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Expertise Sur-Mesure</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Conseil personnalisé par téléphone
              </p>
              <Button variant="outline" className="htg-button-secondary">
                Appeler
              </Button>
            </div>

            <div className="htg-card p-6 text-center group hover:scale-105 transition-transform">
              <div className="w-16 h-16 bg-copper/10 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:bg-copper group-hover:text-white transition-colors">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Visite Showroom</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Découvrez nos véhicules sur place
              </p>
              <Button variant="outline" className="htg-button-secondary">
                Rendez-vous
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;