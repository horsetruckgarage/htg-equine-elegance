import { Calculator, Clock, Shield, CheckCircle, ArrowRight, Car, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useTranslation } from "@/hooks/useTranslation";

const DemandeDevis = () => {
  const { t } = useTranslation();

  const benefits = [
    {
      icon: Clock,
      title: t.language === 'fr' ? "Réponse Sous 24h" : t.language === 'en' ? "Response Within 24h" : t.language === 'es' ? "Respuesta en 24h" : "Antwort Innerhalb 24h",
      description: t.language === 'fr' ? "Votre devis personnalisé dans votre boîte mail" : t.language === 'en' ? "Your personalized quote in your inbox" : t.language === 'es' ? "Su presupuesto personalizado en su bandeja de entrada" : "Ihr persönliches Angebot in Ihrem Postfach"
    },
    {
      icon: Calculator,
      title: t.language === 'fr' ? "100% Gratuit" : t.language === 'en' ? "100% Free" : t.language === 'es' ? "100% Gratuito" : "100% Kostenlos",
      description: t.language === 'fr' ? "Aucun frais, aucun engagement de votre part" : t.language === 'en' ? "No fees, no commitment on your part" : t.language === 'es' ? "Sin tarifas, sin compromiso de su parte" : "Keine Gebühren, keine Verpflichtung Ihrerseits"
    },
    {
      icon: Shield,
      title: t.language === 'fr' ? "Prix Transparent" : t.language === 'en' ? "Transparent Pricing" : t.language === 'es' ? "Precios Transparentes" : "Transparente Preise",
      description: t.language === 'fr' ? "Tous les coûts inclus, aucune surprise" : t.language === 'en' ? "All costs included, no surprises" : t.language === 'es' ? "Todos los costos incluidos, sin sorpresas" : "Alle Kosten inklusive, keine Überraschungen"
    },
    {
      icon: CheckCircle,
      title: t.language === 'fr' ? "Expert Dédié" : t.language === 'en' ? "Dedicated Expert" : t.language === 'es' ? "Experto Dedicado" : "Spezieller Experte",
      description: t.language === 'fr' ? "Un conseiller personnel suit votre dossier" : t.language === 'en' ? "A personal advisor follows your case" : t.language === 'es' ? "Un asesor personal sigue su caso" : "Ein persönlicher Berater betreut Ihren Fall"
    }
  ];

  const vehicleTypes = [
    {
      type: t.language === 'fr' ? "Camion Chevaux" : t.language === 'en' ? "Horse Truck" : t.language === 'es' ? "Camión para Caballos" : "Pferdetransporter",
      capacities: t.language === 'fr' ? ["2 chevaux", "3 chevaux", "4 chevaux", "5 chevaux", "6 chevaux et +"] : 
                  t.language === 'en' ? ["2 horses", "3 horses", "4 horses", "5 horses", "6+ horses"] :
                  t.language === 'es' ? ["2 caballos", "3 caballos", "4 caballos", "5 caballos", "6+ caballos"] :
                  ["2 Pferde", "3 Pferde", "4 Pferde", "5 Pferde", "6+ Pferde"],
      priceRange: "45 000€ - 120 000€",
      popular: true
    },
    {
      type: t.language === 'fr' ? "Van Chevaux" : t.language === 'en' ? "Horse Van" : t.language === 'es' ? "Furgoneta para Caballos" : "Pferde-Van",
      capacities: t.language === 'fr' ? ["1 cheval", "2 chevaux", "3 chevaux"] :
                  t.language === 'en' ? ["1 horse", "2 horses", "3 horses"] :
                  t.language === 'es' ? ["1 caballo", "2 caballos", "3 caballos"] :
                  ["1 Pferd", "2 Pferde", "3 Pferde"],
      priceRange: "25 000€ - 85 000€",
      popular: false
    },
    {
      type: t.language === 'fr' ? "Remorque Chevaux" : t.language === 'en' ? "Horse Trailer" : t.language === 'es' ? "Remolque para Caballos" : "Pferdeanhänger",
      capacities: t.language === 'fr' ? ["1 cheval", "2 chevaux", "3 chevaux"] :
                  t.language === 'en' ? ["1 horse", "2 horses", "3 horses"] :
                  t.language === 'es' ? ["1 caballo", "2 caballos", "3 caballos"] :
                  ["1 Pferd", "2 Pferde", "3 Pferde"],
      priceRange: "15 000€ - 55 000€",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-copper/5 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center space-x-2 bg-copper/10 rounded-full px-4 py-2">
              <Calculator className="w-4 h-4 text-copper" />
              <span className="text-copper font-semibold">Devis Gratuit</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold">
              <span className="text-foreground">Votre Devis</span>
              <span className="block htg-text-gradient">en Moins de 24h</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Obtenez un devis personnalisé pour votre véhicule de transport équin. 
              Notre expert analyse vos besoins et vous propose la solution parfaite.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <div className="flex items-center gap-2 bg-green-600/10 rounded-full px-4 py-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-green-600 font-medium text-sm">100% Gratuit</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-600/10 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-blue-600 font-medium text-sm">Réponse 24h</span>
              </div>
              <div className="flex items-center gap-2 bg-copper/10 rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-copper" />
                <span className="text-copper font-medium text-sm">Sans engagement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div key={index} className="htg-card p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-copper/10 rounded-full flex items-center justify-center mx-auto">
                    <IconComponent className="w-8 h-8 text-copper" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vehicle Types */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Quel Type de Véhicule Recherchez-vous ?
            </h2>
            <p className="text-lg text-muted-foreground">
              Sélectionnez votre catégorie pour un devis encore plus précis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {vehicleTypes.map((vehicle, index) => (
              <div key={index} className="htg-card p-6 hover:scale-105 transition-all duration-300 relative">
                {vehicle.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-copper text-black">
                    Plus demandé
                  </Badge>
                )}
                <div className="text-center space-y-4">
                  <Car className="w-12 h-12 text-copper mx-auto" />
                  <h3 className="text-xl font-bold text-foreground">{vehicle.type}</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground font-medium">Capacités disponibles :</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {vehicle.capacities.map((capacity, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {capacity}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="text-copper font-bold text-lg">{vehicle.priceRange}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="htg-card p-8 lg:p-12">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-foreground mb-4">
                  Formulaire de Demande de Devis
                </h2>
                <p className="text-lg text-muted-foreground">
                  Plus vous nous donnez d'informations, plus votre devis sera précis et adapté
                </p>
              </div>

              <form className="space-y-8">
                {/* Personal Info */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                    📋 Vos Informations
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Prénom *</label>
                      <Input placeholder="Votre prénom" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Nom *</label>
                      <Input placeholder="Votre nom" required />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Email *</label>
                      <Input type="email" placeholder="votre@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Téléphone</label>
                      <Input placeholder="06 12 34 56 78" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Région</label>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-copper" />
                      <Input placeholder="Votre région (pour optimiser la livraison)" />
                    </div>
                  </div>
                </div>

                {/* Vehicle Requirements */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                    🚗 Votre Véhicule Idéal
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Type de véhicule *</label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Choisissez le type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="camion">Camion Chevaux</SelectItem>
                          <SelectItem value="van">Van Chevaux</SelectItem>
                          <SelectItem value="remorque">Remorque Chevaux</SelectItem>
                          <SelectItem value="hesitant">Je ne sais pas encore</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Nombre de chevaux à transporter *</label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder="Sélectionnez" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 cheval</SelectItem>
                          <SelectItem value="2">2 chevaux</SelectItem>
                          <SelectItem value="3">3 chevaux</SelectItem>
                          <SelectItem value="4">4 chevaux</SelectItem>
                          <SelectItem value="5">5 chevaux</SelectItem>
                          <SelectItem value="6+">6 chevaux et plus</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">État souhaité</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Neuf ou occasion ?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="neuf">Neuf uniquement</SelectItem>
                          <SelectItem value="occasion">Occasion acceptée</SelectItem>
                          <SelectItem value="indifferent">Indifférent</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Budget approximatif</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Votre fourchette de prix" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="moins-30k">Moins de 30 000€</SelectItem>
                          <SelectItem value="30k-50k">30 000€ - 50 000€</SelectItem>
                          <SelectItem value="50k-80k">50 000€ - 80 000€</SelectItem>
                          <SelectItem value="80k-120k">80 000€ - 120 000€</SelectItem>
                          <SelectItem value="120k-plus">Plus de 120 000€</SelectItem>
                          <SelectItem value="pas-de-budget">Pas de budget défini</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Usage & Features */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                    🎯 Utilisation & Équipements
                  </h3>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Utilisation principale</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Comment allez-vous utiliser le véhicule ?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="loisir">Loisir / Balades</SelectItem>
                        <SelectItem value="competition">Compétition</SelectItem>
                        <SelectItem value="professionnel">Usage professionnel</SelectItem>
                        <SelectItem value="mixte">Usage mixte</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Équipements souhaités</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {[
                        "Suspension pneumatique",
                        "Climatisation",
                        "Caméra de recul", 
                        "Boîte automatique",
                        "Cabine couchette",
                        "Éclairage LED",
                        "Plancher caoutchouc",
                        "Ventilation chevaux",
                        "Kit mains libres"
                      ].map((equipment, idx) => (
                        <label key={idx} className="flex items-center space-x-2 text-sm">
                          <input type="checkbox" className="rounded" />
                          <span>{equipment}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Timeline & Message */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                    💬 Informations Complémentaires
                  </h3>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Délai souhaité pour l'achat</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Quand souhaitez-vous acquérir votre véhicule ?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediat">Immédiatement</SelectItem>
                        <SelectItem value="1-3mois">Dans 1 à 3 mois</SelectItem>
                        <SelectItem value="3-6mois">Dans 3 à 6 mois</SelectItem>
                        <SelectItem value="6-12mois">Dans 6 mois à 1 an</SelectItem>
                        <SelectItem value="plus-1an">Plus d'1 an</SelectItem>
                        <SelectItem value="information">Simple demande d'information</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message complémentaire</label>
                    <Textarea 
                      placeholder="Décrivez-nous vos besoins spécifiques, contraintes particulières, questions sur le financement, etc."
                      rows={4}
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="bg-copper/5 rounded-lg p-6 space-y-4">
                  <div className="text-center space-y-2">
                    <h4 className="text-lg font-bold text-foreground">🎉 C'est Parti !</h4>
                    <p className="text-sm text-muted-foreground">
                      En soumettant ce formulaire, vous recevrez votre devis personnalisé sous 24h maximum.
                      Un expert HTG vous contactera également pour affiner votre demande.
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button className="htg-button-primary text-lg px-12 py-4 group">
                      <Calculator className="w-5 h-5 mr-2" />
                      Recevoir Mon Devis Gratuit
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  
                  <div className="text-center text-xs text-muted-foreground">
                    * Aucun engagement • Réponse garantie sous 24h • Service 100% gratuit
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DemandeDevis;