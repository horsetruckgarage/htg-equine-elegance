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
                    Vos Informations
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
                    Votre Véhicule Idéal
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
                    Utilisation & Équipements
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

                </div>

                {/* Timeline & Message */}
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-foreground border-b border-border pb-2">
                    Informations Complémentaires
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
                    <h4 className="text-lg font-bold text-foreground">C'est Parti !</h4>
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