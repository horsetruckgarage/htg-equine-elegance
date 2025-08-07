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
                <span className="text-green-600 font-medium text-sm">{t.quoteRequest.benefits.free}</span>
              </div>
              <div className="flex items-center gap-2 bg-blue-600/10 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span className="text-blue-600 font-medium text-sm">{t.quoteRequest.benefits.fast}</span>
              </div>
              <div className="flex items-center gap-2 bg-copper/10 rounded-full px-4 py-2">
                <Shield className="w-4 h-4 text-copper" />
                <span className="text-copper font-medium text-sm">{t.quoteRequest.benefits.noCommitment}</span>
              </div>
            </div>
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
                  {t.quoteRequest.form.description}
                </p>
              </div>

              <form className="space-y-8">
                {/* Personal Info */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                    {t.quoteRequest.form.personalInfo.title}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t.quoteRequest.form.personalInfo.firstName} *</label>
                      <Input placeholder={t.quoteRequest.form.personalInfo.firstNamePlaceholder} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t.quoteRequest.form.personalInfo.lastName} *</label>
                      <Input placeholder={t.quoteRequest.form.personalInfo.lastNamePlaceholder} required />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t.quoteRequest.form.personalInfo.email} *</label>
                      <Input type="email" placeholder={t.quoteRequest.form.personalInfo.emailPlaceholder} required />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t.quoteRequest.form.personalInfo.phone}</label>
                      <Input placeholder={t.quoteRequest.form.personalInfo.phonePlaceholder} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{t.quoteRequest.form.personalInfo.region}</label>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4 text-copper" />
                      <Input placeholder={t.quoteRequest.form.personalInfo.regionPlaceholder} />
                    </div>
                  </div>
                </div>

                {/* Vehicle Requirements */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                    {t.quoteRequest.form.vehicleInfo.title}
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t.quoteRequest.form.vehicleInfo.type} *</label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder={t.quoteRequest.form.vehicleInfo.typePlaceholder} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="camion">{t.quoteRequest.form.vehicleInfo.typeOptions.truck}</SelectItem>
                          <SelectItem value="van">{t.quoteRequest.form.vehicleInfo.typeOptions.van}</SelectItem>
                          <SelectItem value="remorque">{t.quoteRequest.form.vehicleInfo.typeOptions.trailer}</SelectItem>
                          <SelectItem value="hesitant">{t.quoteRequest.form.vehicleInfo.typeOptions.unsure}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t.quoteRequest.form.vehicleInfo.capacity} *</label>
                      <Select required>
                        <SelectTrigger>
                          <SelectValue placeholder={t.quoteRequest.form.vehicleInfo.capacityPlaceholder} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">{t.quoteRequest.form.vehicleInfo.capacityOptions.one}</SelectItem>
                          <SelectItem value="2">{t.quoteRequest.form.vehicleInfo.capacityOptions.two}</SelectItem>
                          <SelectItem value="3">{t.quoteRequest.form.vehicleInfo.capacityOptions.three}</SelectItem>
                          <SelectItem value="4">{t.quoteRequest.form.vehicleInfo.capacityOptions.four}</SelectItem>
                          <SelectItem value="5">{t.quoteRequest.form.vehicleInfo.capacityOptions.five}</SelectItem>
                          <SelectItem value="6+">{t.quoteRequest.form.vehicleInfo.capacityOptions.sixPlus}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t.quoteRequest.form.vehicleInfo.condition}</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder={t.quoteRequest.form.vehicleInfo.conditionPlaceholder} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="neuf">{t.quoteRequest.form.vehicleInfo.conditionOptions.new}</SelectItem>
                          <SelectItem value="occasion">{t.quoteRequest.form.vehicleInfo.conditionOptions.used}</SelectItem>
                          <SelectItem value="indifferent">{t.quoteRequest.form.vehicleInfo.conditionOptions.any}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t.quoteRequest.form.vehicleInfo.budget}</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder={t.quoteRequest.form.vehicleInfo.budgetPlaceholder} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="moins-30k">{t.quoteRequest.form.vehicleInfo.budgetOptions.under30k}</SelectItem>
                          <SelectItem value="30k-50k">{t.quoteRequest.form.vehicleInfo.budgetOptions.from30to50k}</SelectItem>
                          <SelectItem value="50k-80k">{t.quoteRequest.form.vehicleInfo.budgetOptions.from50to80k}</SelectItem>
                          <SelectItem value="80k-120k">{t.quoteRequest.form.vehicleInfo.budgetOptions.from80to120k}</SelectItem>
                          <SelectItem value="120k-plus">{t.quoteRequest.form.vehicleInfo.budgetOptions.over120k}</SelectItem>
                          <SelectItem value="pas-de-budget">{t.quoteRequest.form.vehicleInfo.budgetOptions.noBudget}</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Usage & Features */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                    {t.quoteRequest.form.usage.title}
                  </h3>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{t.quoteRequest.form.usage.primary}</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t.quoteRequest.form.usage.primaryPlaceholder} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="loisir">{t.quoteRequest.form.usage.usageOptions.leisure}</SelectItem>
                        <SelectItem value="competition">{t.quoteRequest.form.usage.usageOptions.competition}</SelectItem>
                        <SelectItem value="professionnel">{t.quoteRequest.form.usage.usageOptions.professional}</SelectItem>
                        <SelectItem value="mixte">{t.quoteRequest.form.usage.usageOptions.mixed}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                </div>

                {/* Timeline & Message */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                    {t.quoteRequest.form.additional.title}
                  </h3>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{t.quoteRequest.form.additional.timeline}</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t.quoteRequest.form.additional.timelinePlaceholder} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediat">{t.quoteRequest.form.additional.timelineOptions.immediate}</SelectItem>
                        <SelectItem value="1-3mois">{t.quoteRequest.form.additional.timelineOptions.oneToThree}</SelectItem>
                        <SelectItem value="3-6mois">{t.quoteRequest.form.additional.timelineOptions.threeToSix}</SelectItem>
                        <SelectItem value="6-12mois">{t.quoteRequest.form.additional.timelineOptions.sixToTwelve}</SelectItem>
                        <SelectItem value="plus-1an">{t.quoteRequest.form.additional.timelineOptions.overYear}</SelectItem>
                        <SelectItem value="information">{t.quoteRequest.form.additional.timelineOptions.infoOnly}</SelectItem>
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
                    <h4 className="text-lg font-bold text-foreground">{t.quoteRequest.form.submit.title}</h4>
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