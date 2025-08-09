import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Truck, Calendar, Gauge, Users, Eye, Heart, Star, Filter, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { getLocalizedPath } from "@/hooks/useLocalizedRouting";
import { useVehicles } from "@/hooks/useVehicles";
import VehicleImage from "@/components/VehicleImage";
import { Vehicle } from "@/types/vehicle";
import { useAutoTranslate, useAutoTranslateArray } from "@/hooks/useAutoTranslate";

const Camions = () => {
  const { t, language } = useTranslation();
  const { vehicles: camions, loading, error } = useVehicles({ type: 'truck' });
  
  const getLocalizedFeatures = (features: string[]) => {
    const featureMap: { [key: string]: string } = {
      "Suspension pneumatique": t.trucksPage.vehicle.features.pneumaticSuspension,
      "Climatisation": t.trucksPage.vehicle.features.airConditioning,
      "Cabine couchette": t.trucksPage.vehicle.features.sleepingCabin,
      "Boîte automatique": t.trucksPage.vehicle.features.automaticTransmission,
      "GPS intégré": t.trucksPage.vehicle.features.integratedGPS,
      "Cabine grand confort": t.trucksPage.vehicle.features.grandComfortCabin,
      "Boîte manuelle": t.trucksPage.vehicle.features.manualTransmission,
      "BlueEFFICIENCY": t.trucksPage.vehicle.features.blueEfficiency,
      "Climatisation automatique": t.trucksPage.vehicle.features.automaticAirConditioning,
      "Régulateur de vitesse": t.trucksPage.vehicle.features.cruiseControl,
      "Système télématique": t.trucksPage.vehicle.features.telematicSystem,
      "Moteur DTI": t.trucksPage.vehicle.features.dtiEngine,
      "Direction assistée": t.trucksPage.vehicle.features.powerSteering,
      "Vitres électriques": t.trucksPage.vehicle.features.electricWindows,
      "Verrouillage centralisé": t.trucksPage.vehicle.features.centralLocking,
      "Euro 6": t.trucksPage.vehicle.features.euro6,
      "Système AdBlue": t.trucksPage.vehicle.features.adBlueSystem,
      "Cabine spacieuse": t.trucksPage.vehicle.features.spaciousCabin,
      "Transmission manuelle": t.trucksPage.vehicle.features.manualTransmission,
      "Moteur efficient": t.trucksPage.vehicle.features.efficientEngine,
      "Maintenance facilité": t.trucksPage.vehicle.features.easilyMaintained,
      "Cabine ergonomique": t.trucksPage.vehicle.features.ergonomicCabin
    };
    return features.map(feature => featureMap[feature] || feature);
  };

  const getLocalizedBadge = (badge: string) => {
    const badgeMap: { [key: string]: string } = {
      "Bestseller": t.trucksPage.vehicle.badges.bestseller,
      "Premium": t.trucksPage.vehicle.badges.premium,
      "Promotion": t.trucksPage.vehicle.badges.promotion,
      "Occasion Certifiée": t.trucksPage.vehicle.badges.certifiedUsed,
      "Récent": t.trucksPage.vehicle.badges.recent,
      "Fiable": t.trucksPage.vehicle.badges.reliable
    };
    return badgeMap[badge] || badge;
  };


  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-copper/5 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center space-x-2 bg-copper/10 rounded-full px-4 py-2">
              <Truck className="w-4 h-4 text-copper" />
              <span className="text-copper font-semibold">{t.trucksPage.title}</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold">
              <span className="text-foreground">{t.trucksPage.title}</span>
              <span className="block htg-text-gradient">{t.trucksPage.subtitle}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.trucksPage.description}
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="htg-button-secondary">
                <Filter className="w-4 h-4 mr-2" />
                {t.trucksPage.filters.allFilters}
              </Button>
              <Button variant="outline" size="sm">{t.trucksPage.filters.capacity}</Button>
              <Button variant="outline" size="sm">{t.trucksPage.filters.price}</Button>
              <Button variant="outline" size="sm">{t.trucksPage.filters.year}</Button>
              <Button variant="outline" size="sm">{t.trucksPage.filters.mileage}</Button>
            </div>
            <div className="text-muted-foreground">
              {camions.length} {t.trucksPage.filters.found}
            </div>
          </div>
        </div>
      </section>

      {/* Vehicles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {loading && (
            <div className="text-center py-12">
              <div className="text-muted-foreground">Chargement...</div>
            </div>
          )}
          
          {error && (
            <div className="text-center py-12">
              <div className="text-red-600">Erreur: {error}</div>
            </div>
          )}
          
          {!loading && !error && camions.length === 0 && (
            <div className="text-center py-12">
              <div className="text-muted-foreground">Aucun camion disponible pour le moment.</div>
            </div>
          )}
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {!loading && camions.map((camion, index) => (
              <TruckCard key={camion.id} camion={camion} index={index} language={language} t={t} />
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <div className="htg-card max-w-4xl mx-auto p-8 lg:p-12">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-foreground">
                  {t.trucksPage.cta.title}
                </h3>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  {t.trucksPage.cta.description}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to={getLocalizedPath('/devis', language)}>
                    <Button className="htg-button-primary">
                      {t.trucksPage.cta.getQuote}
                    </Button>
                  </Link>
                  <Link to={getLocalizedPath('/contact', language)}>
                    <Button variant="outline" className="htg-button-secondary">
                      {t.trucksPage.cta.contactExpert}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default Camions;