import { Calculator, Clock, Shield, CheckCircle, ArrowRight, Car, MapPin } from "lucide-react";
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
      title: t.quoteRequest.benefits.response24h.title,
      description: t.quoteRequest.benefits.response24h.description
    },
    {
      icon: Calculator,
      title: t.quoteRequest.benefits.free.title,
      description: t.quoteRequest.benefits.free.description
    },
    {
      icon: Shield,
      title: t.quoteRequest.benefits.transparent.title,
      description: t.quoteRequest.benefits.transparent.description
    },
    {
      icon: CheckCircle,
      title: t.quoteRequest.benefits.expert.title,
      description: t.quoteRequest.benefits.expert.description
    }
  ];

  const vehicleTypes = [
    {
      type: t.quoteRequest.vehicleTypes.horseTrucks,
      capacities: ["2", "3", "4", "5", "6+"],
      priceRange: "45 000€ - 120 000€",
      popular: true
    },
    {
      type: t.quoteRequest.vehicleTypes.horseVans,
      capacities: ["1", "2", "3"],
      priceRange: "25 000€ - 85 000€",
      popular: false
    },
    {
      type: t.quoteRequest.vehicleTypes.horseTrailers,
      capacities: ["1", "2", "3"],
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
              <span className="text-copper font-semibold">{t.quoteRequest.hero.badge}</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold">
              <span className="text-foreground">{t.quoteRequest.hero.title}</span>
              <span className="block htg-text-gradient">{t.quoteRequest.hero.subtitle}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.quoteRequest.hero.description}
            </p>
            
            {/* Trust Indicators */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <div className="flex items-center gap-2 bg-green-600/10 rounded-full px-4 py-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-green-600 font-medium text-sm">{t.quoteRequest.hero.trustIndicators.free}</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-600/10 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-blue-600 font-medium text-sm">{t.quoteRequest.hero.trustIndicators.response24h}</span>
              </div>
              <div className="flex items-center gap-2 bg-copper/10 rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-copper" />
                <span className="text-copper font-medium text-sm">{t.quoteRequest.hero.trustIndicators.noCommitment}</span>
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
              {t.quoteRequest.vehicleTypes.title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {t.quoteRequest.vehicleTypes.subtitle}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {vehicleTypes.map((vehicle, index) => (
              <div key={index} className="htg-card p-6 hover:scale-105 transition-all duration-300 relative">
                {vehicle.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-copper text-black">
                    {t.quoteRequest.vehicleTypes.popular}
                  </Badge>
                )}
                <div className="text-center space-y-4">
                  <Car className="w-12 h-12 text-copper mx-auto" />
                  <h3 className="text-xl font-bold text-foreground">{vehicle.type}</h3>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground font-medium">{t.quoteRequest.vehicleTypes.capacities} :</p>
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
                  {t.quoteRequest.form.title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t.quoteRequest.form.subtitle}
                </p>
              </div>

              <form className="space-y-8">
                {/* Personal Info */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                    📋 {t.quoteRequest.form.personalInfo.title}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t.quoteRequest.form.personalInfo.firstName} *</label>
                      <Input placeholder={t.quoteRequest.form.personalInfo.firstName} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t.quoteRequest.form.personalInfo.lastName} *</label>
                      <Input placeholder={t.quoteRequest.form.personalInfo.lastName} required />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t.quoteRequest.form.personalInfo.email} *</label>
                      <Input type="email" placeholder={t.quoteRequest.form.personalInfo.email} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t.quoteRequest.form.personalInfo.phone}</label>
                      <Input placeholder={t.quoteRequest.form.personalInfo.phone} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{t.quoteRequest.form.personalInfo.region}</label>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-copper" />
                      <Input placeholder={t.quoteRequest.form.personalInfo.region} />
                    </div>
                  </div>
                </div>

                {/* Vehicle Requirements */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                    🚗 {t.quoteRequest.form.vehicleRequirements.title}
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t.quoteRequest.form.vehicleRequirements.vehicleType} *</label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder={t.quoteRequest.form.vehicleRequirements.selectVehicleType} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="camion">{t.quoteRequest.vehicleTypes.horseTrucks}</SelectItem>
                          <SelectItem value="van">{t.quoteRequest.vehicleTypes.horseVans}</SelectItem>
                          <SelectItem value="remorque">{t.quoteRequest.vehicleTypes.horseTrailers}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t.quoteRequest.form.vehicleRequirements.horseCapacity} *</label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder={t.quoteRequest.form.vehicleRequirements.selectCapacity} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1</SelectItem>
                          <SelectItem value="2">2</SelectItem>
                          <SelectItem value="3">3</SelectItem>
                          <SelectItem value="4">4</SelectItem>
                          <SelectItem value="5">5</SelectItem>
                          <SelectItem value="6+">6+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t.quoteRequest.form.vehicleRequirements.condition}</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder={t.quoteRequest.form.vehicleRequirements.selectCondition} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="neuf">{t.common.new}</SelectItem>
                          <SelectItem value="occasion">{t.common.used}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t.quoteRequest.form.vehicleRequirements.budget}</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder={t.quoteRequest.form.vehicleRequirements.selectBudget} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="moins-30k">{"< 30 000€"}</SelectItem>
                          <SelectItem value="30k-50k">30 000€ - 50 000€</SelectItem>
                          <SelectItem value="50k-80k">50 000€ - 80 000€</SelectItem>
                          <SelectItem value="80k-120k">80 000€ - 120 000€</SelectItem>
                          <SelectItem value="120k-plus">{"> 120 000€"}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Usage */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                    🎯 {t.quoteRequest.form.usage.title}
                  </h3>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{t.quoteRequest.form.usage.primaryUse}</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t.quoteRequest.form.usage.selectUsage} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="loisir">{t.common.leisure}</SelectItem>
                        <SelectItem value="competition">{t.common.competition}</SelectItem>
                        <SelectItem value="professionnel">{t.common.professional}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                    💬 {t.quoteRequest.form.additional.title}
                  </h3>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{t.quoteRequest.form.additional.timeline}</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t.quoteRequest.form.additional.selectTimeline} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediat">{t.common.immediately}</SelectItem>
                        <SelectItem value="1-3mois">1-3 {t.common.months}</SelectItem>
                        <SelectItem value="3-6mois">3-6 {t.common.months}</SelectItem>
                        <SelectItem value="6-12mois">6-12 {t.common.months}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{t.quoteRequest.form.additional.message}</label>
                    <Textarea 
                      placeholder={t.quoteRequest.form.additional.messagePlaceholder}
                      rows={4}
                    />
                  </div>
                </div>

                {/* Submit */}
                <div className="bg-copper/5 rounded-lg p-6 space-y-4">
                  <div className="text-center space-y-2">
                    <h4 className="text-lg font-bold text-foreground">🎉 {t.quoteRequest.form.submit.title}</h4>
                    <p className="text-sm text-muted-foreground">
                      {t.quoteRequest.form.submit.description}
                    </p>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button className="htg-button-primary text-lg px-12 py-4 group">
                      <Calculator className="w-5 h-5 mr-2" />
                      {t.quoteRequest.form.submit.button}
                      <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                  
                  <div className="text-center text-xs text-muted-foreground">
                    {t.quoteRequest.form.submit.disclaimer}
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