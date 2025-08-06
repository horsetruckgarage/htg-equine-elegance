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
      title: t.quotePage.benefits.response24h.title,
      description: t.quotePage.benefits.response24h.description
    },
    {
      icon: Calculator,
      title: t.quotePage.benefits.free.title,
      description: t.quotePage.benefits.free.description
    },
    {
      icon: Shield,
      title: t.quotePage.benefits.expertise.title,
      description: t.quotePage.benefits.expertise.description
    },
    {
      icon: CheckCircle,
      title: "Expert Dédié",
      description: "Un conseiller personnel suit votre dossier"
    }
  ];

  const vehicleTypes = [
    {
      type: "Camion Chevaux",
      capacities: ["2 chevaux", "3 chevaux", "4 chevaux", "5 chevaux", "6 chevaux et +"],
      priceRange: "45 000€ - 120 000€",
      popular: true
    },
    {
      type: "Van Chevaux", 
      capacities: ["1 cheval", "2 chevaux", "3 chevaux"],
      priceRange: "25 000€ - 85 000€",
      popular: false
    },
    {
      type: "Remorque Chevaux",
      capacities: ["1 cheval", "2 chevaux", "3 chevaux"],
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
              <span className="text-copper font-semibold">{t.quotePage.hero.badge}</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold">
              <span className="text-foreground">{t.quotePage.hero.title1}</span>
              <span className="block htg-text-gradient">{t.quotePage.hero.title2}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.quotePage.hero.description}
            </p>
            
            {/* Trust Indicators */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <div className="flex items-center gap-2 bg-green-600/10 rounded-full px-4 py-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-green-600 font-medium text-sm">{t.quotePage.benefits.free.title}</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-600/10 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-blue-600 font-medium text-sm">{t.quotePage.benefits.response24h.title}</span>
              </div>
              <div className="flex items-center gap-2 bg-copper/10 rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-copper" />
                <span className="text-copper font-medium text-sm">{t.quotePage.form.noCommitment}</span>
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
                  {t.quotePage.form.title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t.quotePage.form.subtitle}
                </p>
              </div>

              <form className="space-y-8">
                {/* Personal Info */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                    {t.quotePage.form.personalInfo}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t.quotePage.form.fields.firstName} *</label>
                      <Input placeholder={t.quotePage.form.placeholders.firstName} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t.quotePage.form.fields.lastName} *</label>
                      <Input placeholder={t.quotePage.form.placeholders.lastName} required />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t.quotePage.form.fields.email} *</label>
                      <Input type="email" placeholder={t.quotePage.form.placeholders.email} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t.quotePage.form.fields.phone}</label>
                      <Input placeholder={t.quotePage.form.placeholders.phone} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{t.quotePage.form.fields.region}</label>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-copper" />
                      <Input placeholder={t.quotePage.form.placeholders.region} />
                    </div>
                  </div>
                </div>

                {/* Vehicle Requirements */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                    {t.quotePage.form.vehicleRequirements}
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t.quotePage.form.fields.vehicleType} *</label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder={t.quotePage.form.placeholders.vehicleTypeSelect} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="camion">{t.quotePage.form.options.vehicleTypes.truck}</SelectItem>
                          <SelectItem value="van">{t.quotePage.form.options.vehicleTypes.van}</SelectItem>
                          <SelectItem value="remorque">{t.quotePage.form.options.vehicleTypes.trailer}</SelectItem>
                          <SelectItem value="hesitant">{t.quotePage.form.options.vehicleTypes.unsure}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t.quotePage.form.fields.horsesNumber} *</label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder={t.quotePage.form.placeholders.horsesSelect} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">{t.quotePage.form.options.horsesNumber.one}</SelectItem>
                          <SelectItem value="2">{t.quotePage.form.options.horsesNumber.two}</SelectItem>
                          <SelectItem value="3">{t.quotePage.form.options.horsesNumber.three}</SelectItem>
                          <SelectItem value="4">{t.quotePage.form.options.horsesNumber.four}</SelectItem>
                          <SelectItem value="5">{t.quotePage.form.options.horsesNumber.five}</SelectItem>
                          <SelectItem value="6+">{t.quotePage.form.options.horsesNumber.sixPlus}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t.quotePage.form.fields.condition}</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder={t.quotePage.form.placeholders.conditionSelect} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="neuf">{t.quotePage.form.options.condition.new}</SelectItem>
                          <SelectItem value="occasion">{t.quotePage.form.options.condition.used}</SelectItem>
                          <SelectItem value="indifferent">{t.quotePage.form.options.condition.indifferent}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t.quotePage.form.fields.budget}</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder={t.quotePage.form.placeholders.budgetSelect} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="moins-30k">{t.quotePage.form.options.budget.under30k}</SelectItem>
                          <SelectItem value="30k-50k">{t.quotePage.form.options.budget.range30to50k}</SelectItem>
                          <SelectItem value="50k-80k">{t.quotePage.form.options.budget.range50to80k}</SelectItem>
                          <SelectItem value="80k-120k">{t.quotePage.form.options.budget.range80to120k}</SelectItem>
                          <SelectItem value="120k-plus">{t.quotePage.form.options.budget.over120k}</SelectItem>
                          <SelectItem value="pas-de-budget">{t.quotePage.form.options.budget.noBudget}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Usage & Features */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                    {t.quotePage.form.usageFeatures}
                  </h3>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{t.quotePage.form.fields.usage}</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t.quotePage.form.placeholders.usageSelect} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="loisir">{t.quotePage.form.options.usage.leisure}</SelectItem>
                        <SelectItem value="competition">{t.quotePage.form.options.usage.competition}</SelectItem>
                        <SelectItem value="professionnel">{t.quotePage.form.options.usage.professional}</SelectItem>
                        <SelectItem value="mixte">{t.quotePage.form.options.usage.mixed}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{t.quotePage.form.fields.equipment}</label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {t.quotePage.form.equipment.map((equipment, idx) => (
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
                    {t.quotePage.form.additionalInfo}
                  </h3>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{t.quotePage.form.fields.timeline}</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t.quotePage.form.placeholders.timelineSelect} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediat">{t.quotePage.form.options.timeline.immediate}</SelectItem>
                        <SelectItem value="1-3mois">{t.quotePage.form.options.timeline.oneToThreeMonths}</SelectItem>
                        <SelectItem value="3-6mois">{t.quotePage.form.options.timeline.threeToSixMonths}</SelectItem>
                        <SelectItem value="6-12mois">{t.quotePage.form.options.timeline.sixToTwelveMonths}</SelectItem>
                        <SelectItem value="plus-1an">{t.quotePage.form.options.timeline.overOneYear}</SelectItem>
                        <SelectItem value="information">{t.quotePage.form.options.timeline.information}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{t.quotePage.form.fields.message}</label>
                    <Textarea 
                      placeholder={t.quotePage.form.placeholders.message}
                      rows={4}
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="bg-copper/5 rounded-lg p-6 space-y-4">
                  <div className="text-center space-y-2">
                    <h4 className="text-lg font-bold text-foreground">{t.quotePage.form.submitSection.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t.quotePage.form.submitSection.description}
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button className="htg-button-primary text-lg px-12 py-4 group">
                      <Calculator className="w-5 h-5 mr-2" />
                      {t.quotePage.form.submitSection.button}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  
                  <div className="text-center text-xs text-muted-foreground">
                    {t.quotePage.form.submitSection.disclaimer}
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