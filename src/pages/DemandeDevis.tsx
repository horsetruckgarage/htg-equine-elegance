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
  
  // Fallback structure in case quotePage is not loaded
  const quotePage = t.quotePage || {
    benefits: {
      response24h: { title: "Réponse 24h", description: "Réponse d'expert sous 24h maximum" },
      free: { title: "100% Gratuit", description: "Aucun frais, aucun engagement de votre part" },
      expertise: { title: "Prix Transparent", description: "Tous les coûts inclus, aucune surprise" },
      dedicated: { title: "Expert Dédié", description: "Un conseiller personnel suit votre dossier" }
    },
    hero: {
      badge: "Devis Gratuit",
      title1: "Obtenez Votre Devis",
      title2: "en Moins de 24h",
      description: "Obtenez un devis personnalisé pour votre véhicule de transport équin."
    },
    form: {
      title: "Formulaire de Demande de Devis",
      subtitle: "Plus vous nous donnez d'informations, plus votre devis sera précis",
      personalInfo: "📋 Vos Informations",
      vehicleRequirements: "🚗 Votre Véhicule Idéal",
      usageFeatures: "🎯 Utilisation & Équipements",
      additionalInfo: "💬 Informations Complémentaires",
      noCommitment: "Sans engagement",
      fields: {
        firstName: "Prénom", lastName: "Nom", email: "Email", phone: "Téléphone",
        region: "Région", vehicleType: "Type de véhicule", horsesNumber: "Nombre de chevaux",
        condition: "État souhaité", budget: "Budget approximatif", usage: "Utilisation principale",
        equipment: "Équipements souhaités", timeline: "Délai souhaité", message: "Message"
      },
      placeholders: {
        firstName: "Votre prénom", lastName: "Votre nom", email: "votre@email.com",
        phone: "06 12 34 56 78", region: "Votre région", vehicleTypeSelect: "Choisissez le type",
        horsesSelect: "Sélectionnez", conditionSelect: "Neuf ou occasion ?",
        budgetSelect: "Votre fourchette de prix", usageSelect: "Comment allez-vous utiliser le véhicule ?",
        timelineSelect: "Quand souhaitez-vous acquérir votre véhicule ?",
        message: "Décrivez-nous vos besoins spécifiques..."
      },
      options: {
        vehicleTypes: { truck: "Camion Chevaux", van: "Van Chevaux", trailer: "Remorque Chevaux", unsure: "Je ne sais pas encore" },
        horsesNumber: { one: "1 cheval", two: "2 chevaux", three: "3 chevaux", four: "4 chevaux", five: "5 chevaux", sixPlus: "6 chevaux et plus" },
        condition: { new: "Neuf uniquement", used: "Occasion acceptée", indifferent: "Indifférent" },
        budget: { under30k: "Moins de 30 000€", range30to50k: "30 000€ - 50 000€", range50to80k: "50 000€ - 80 000€", range80to120k: "80 000€ - 120 000€", over120k: "Plus de 120 000€", noBudget: "Pas de budget défini" },
        usage: { leisure: "Loisir / Balades", competition: "Compétition", professional: "Usage professionnel", mixed: "Usage mixte" },
        timeline: { immediate: "Immédiatement", oneToThreeMonths: "Dans 1 à 3 mois", threeToSixMonths: "Dans 3 à 6 mois", sixToTwelveMonths: "Dans 6 mois à 1 an", overOneYear: "Plus d'1 an", information: "Simple demande d'information" }
      },
      equipment: ["Suspension pneumatique", "Climatisation", "Caméra de recul", "Boîte automatique", "Cabine couchette", "Éclairage LED", "Plancher caoutchouc", "Ventilation chevaux", "Kit mains libres"],
      submitSection: {
        title: "🎉 C'est Parti !",
        description: "En soumettant ce formulaire, vous recevrez votre devis personnalisé sous 24h maximum.",
        button: "Recevoir Mon Devis Gratuit",
        disclaimer: "* Aucun engagement • Réponse garantie sous 24h • Service 100% gratuit"
      }
    },
    vehicleSelection: {
      title: "Quel Type de Véhicule Recherchez-vous ?",
      subtitle: "Sélectionnez votre catégorie pour un devis encore plus précis",
      popular: "Plus demandé",
      capacitiesAvailable: "Capacités disponibles :"
    },
    vehicleTypes: { truck: "Camion Chevaux", van: "Van Chevaux", trailer: "Remorque Chevaux" },
    capacities: { oneHorse: "1 cheval", twoHorses: "2 chevaux", threeHorses: "3 chevaux", fourHorses: "4 chevaux", fiveHorses: "5 chevaux", sixPlusHorses: "6 chevaux et +" },
    priceRanges: { truck: "45 000€ - 120 000€", van: "25 000€ - 85 000€", trailer: "15 000€ - 55 000€" }
  };

  const benefits = [
    {
      icon: Clock,
      title: quotePage.benefits.response24h.title,
      description: quotePage.benefits.response24h.description
    },
    {
      icon: Calculator,
      title: quotePage.benefits.free.title,
      description: quotePage.benefits.free.description
    },
    {
      icon: Shield,
      title: quotePage.benefits.expertise.title,
      description: quotePage.benefits.expertise.description
    },
    {
      icon: CheckCircle,
      title: quotePage.benefits.dedicated.title,
      description: quotePage.benefits.dedicated.description
    }
  ];

  const vehicleTypes = [
    {
      type: quotePage.vehicleTypes.truck,
      capacities: [quotePage.capacities.twoHorses, quotePage.capacities.threeHorses, quotePage.capacities.fourHorses, quotePage.capacities.fiveHorses, quotePage.capacities.sixPlusHorses],
      priceRange: quotePage.priceRanges.truck,
      popular: true
    },
    {
      type: quotePage.vehicleTypes.van, 
      capacities: [quotePage.capacities.oneHorse, quotePage.capacities.twoHorses, quotePage.capacities.threeHorses],
      priceRange: quotePage.priceRanges.van,
      popular: false
    },
    {
      type: quotePage.vehicleTypes.trailer,
      capacities: [quotePage.capacities.oneHorse, quotePage.capacities.twoHorses, quotePage.capacities.threeHorses],
      priceRange: quotePage.priceRanges.trailer,
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
              <span className="text-copper font-semibold">{quotePage.hero.badge}</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold">
              <span className="text-foreground">{quotePage.hero.title1}</span>
              <span className="block htg-text-gradient">{quotePage.hero.title2}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {quotePage.hero.description}
            </p>
            
            {/* Trust Indicators */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <div className="flex items-center gap-2 bg-green-600/10 rounded-full px-4 py-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-green-600 font-medium text-sm">{quotePage.benefits.free.title}</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-600/10 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-blue-600 font-medium text-sm">{quotePage.benefits.response24h.title}</span>
              </div>
              <div className="flex items-center gap-2 bg-copper/10 rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-copper" />
                <span className="text-copper font-medium text-sm">{quotePage.form.noCommitment}</span>
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
              {quotePage.vehicleSelection.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {quotePage.vehicleSelection.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {vehicleTypes.map((vehicle, index) => (
              <div key={index} className="htg-card p-6 hover:scale-105 transition-all duration-300 relative">
                {vehicle.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-copper text-black">
                    {quotePage.vehicleSelection.popular}
                  </Badge>
                )}
                <div className="text-center space-y-4">
                  <Car className="w-12 h-12 text-copper mx-auto" />
                  <h3 className="text-xl font-bold text-foreground">{vehicle.type}</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground font-medium">{quotePage.vehicleSelection.capacitiesAvailable}</p>
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
                  {quotePage.form.title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {quotePage.form.subtitle}
                </p>
              </div>

              <form className="space-y-8">
                {/* Personal Info */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                    {quotePage.form.personalInfo}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{quotePage.form.fields.firstName} *</label>
                      <Input placeholder={quotePage.form.placeholders.firstName} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{quotePage.form.fields.lastName} *</label>
                      <Input placeholder={quotePage.form.placeholders.lastName} required />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{quotePage.form.fields.email} *</label>
                      <Input type="email" placeholder={quotePage.form.placeholders.email} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{quotePage.form.fields.phone}</label>
                      <Input placeholder={quotePage.form.placeholders.phone} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{quotePage.form.fields.region}</label>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-copper" />
                      <Input placeholder={quotePage.form.placeholders.region} />
                    </div>
                  </div>
                </div>

                {/* Vehicle Requirements */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                    {quotePage.form.vehicleRequirements}
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{quotePage.form.fields.vehicleType} *</label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder={quotePage.form.placeholders.vehicleTypeSelect} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="camion">{quotePage.form.options.vehicleTypes.truck}</SelectItem>
                          <SelectItem value="van">{quotePage.form.options.vehicleTypes.van}</SelectItem>
                          <SelectItem value="remorque">{quotePage.form.options.vehicleTypes.trailer}</SelectItem>
                          <SelectItem value="hesitant">{quotePage.form.options.vehicleTypes.unsure}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{quotePage.form.fields.horsesNumber} *</label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder={quotePage.form.placeholders.horsesSelect} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">{quotePage.form.options.horsesNumber.one}</SelectItem>
                          <SelectItem value="2">{quotePage.form.options.horsesNumber.two}</SelectItem>
                          <SelectItem value="3">{quotePage.form.options.horsesNumber.three}</SelectItem>
                          <SelectItem value="4">{quotePage.form.options.horsesNumber.four}</SelectItem>
                          <SelectItem value="5">{quotePage.form.options.horsesNumber.five}</SelectItem>
                          <SelectItem value="6+">{quotePage.form.options.horsesNumber.sixPlus}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{quotePage.form.fields.condition}</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder={quotePage.form.placeholders.conditionSelect} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="neuf">{quotePage.form.options.condition.new}</SelectItem>
                          <SelectItem value="occasion">{quotePage.form.options.condition.used}</SelectItem>
                          <SelectItem value="indifferent">{quotePage.form.options.condition.indifferent}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{quotePage.form.fields.budget}</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder={quotePage.form.placeholders.budgetSelect} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="moins-30k">{quotePage.form.options.budget.under30k}</SelectItem>
                          <SelectItem value="30k-50k">{quotePage.form.options.budget.range30to50k}</SelectItem>
                          <SelectItem value="50k-80k">{quotePage.form.options.budget.range50to80k}</SelectItem>
                          <SelectItem value="80k-120k">{quotePage.form.options.budget.range80to120k}</SelectItem>
                          <SelectItem value="120k-plus">{quotePage.form.options.budget.over120k}</SelectItem>
                          <SelectItem value="pas-de-budget">{quotePage.form.options.budget.noBudget}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Usage & Features */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                    {quotePage.form.usageFeatures}
                  </h3>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{quotePage.form.fields.usage}</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={quotePage.form.placeholders.usageSelect} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="loisir">{quotePage.form.options.usage.leisure}</SelectItem>
                        <SelectItem value="competition">{quotePage.form.options.usage.competition}</SelectItem>
                        <SelectItem value="professionnel">{quotePage.form.options.usage.professional}</SelectItem>
                        <SelectItem value="mixte">{quotePage.form.options.usage.mixed}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{quotePage.form.fields.equipment}</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {quotePage.form.equipment.map((equipment, idx) => (
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
                    {quotePage.form.additionalInfo}
                  </h3>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{quotePage.form.fields.timeline}</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={quotePage.form.placeholders.timelineSelect} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediat">{quotePage.form.options.timeline.immediate}</SelectItem>
                        <SelectItem value="1-3mois">{quotePage.form.options.timeline.oneToThreeMonths}</SelectItem>
                        <SelectItem value="3-6mois">{quotePage.form.options.timeline.threeToSixMonths}</SelectItem>
                        <SelectItem value="6-12mois">{quotePage.form.options.timeline.sixToTwelveMonths}</SelectItem>
                        <SelectItem value="plus-1an">{quotePage.form.options.timeline.overOneYear}</SelectItem>
                        <SelectItem value="information">{quotePage.form.options.timeline.information}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{quotePage.form.fields.message}</label>
                    <Textarea 
                      placeholder={quotePage.form.placeholders.message}
                      rows={4}
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="bg-copper/5 rounded-lg p-6 space-y-4">
                  <div className="text-center space-y-2">
                    <h4 className="text-lg font-bold text-foreground">{quotePage.form.submitSection.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {quotePage.form.submitSection.description}
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button className="htg-button-primary text-lg px-12 py-4 group">
                      <Calculator className="w-5 h-5 mr-2" />
                      {quotePage.form.submitSection.button}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  
                  <div className="text-center text-xs text-muted-foreground">
                    {quotePage.form.submitSection.disclaimer}
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