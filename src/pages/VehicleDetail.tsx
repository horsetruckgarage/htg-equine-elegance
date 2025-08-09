import { ArrowLeft, Calendar, Settings, Users, Fuel, Gauge, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useTranslation } from "@/hooks/useTranslation";
import { getLocalizedPath } from "@/hooks/useLocalizedRouting";
import { useVehicle } from "@/hooks/useSupabaseVehicles";
import { useAutoTranslate, useAutoTranslateArray } from "@/hooks/useAutoTranslate";

const VehicleDetail = () => {
  const { t, language } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  
  const { vehicle, loading, error } = useVehicle(id || '');

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-copper mx-auto mb-4"></div>
            
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !vehicle) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-6 py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Véhicule non trouvé</h1>
            <p className="text-muted-foreground mb-6">{error || "Ce véhicule n'existe pas ou n'est plus disponible."}</p>
            <Link to={getLocalizedPath("/occasions", language)}>
              <Button className="htg-button-primary">
                {t.vehicleDetail.backToCatalogue}
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }


  const getBackPath = () => {
    if (!vehicle) return getLocalizedPath('/', language);
    
    switch (vehicle.type) {
      case 'truck': return getLocalizedPath('/camions-chevaux', language);
      case 'van': return getLocalizedPath('/vans-chevaux', language);
      case 'trailer': return getLocalizedPath('/vans-chevaux', language);
      default: return getLocalizedPath('/', language);
    }
  };

  const baseDesc = typeof (vehicle as any).description === 'string'
    ? (vehicle as any).description
    : ((vehicle as any).description?.[language] || (vehicle as any).description?.fr || '');
  const translatedName = useAutoTranslate(vehicle.name, language);
  const translatedDesc = useAutoTranslate(baseDesc, language);
  const translatedFeatures = useAutoTranslateArray(vehicle.features || [], language);
  const translatedCondition = useAutoTranslate(vehicle.condition || '', language);
  const translatedAvailability = useAutoTranslate(vehicle.availability || '', language);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header avec bouton retour */}
      <section className="pt-32 pb-8">
        <div className="container mx-auto px-6">
          <Link to={getBackPath()}>
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t.vehicleDetail.backToCatalogue}
            </Button>
          </Link>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            
            {/* Images */}
            <div className="space-y-4">
              <Carousel className="w-full">
                <CarouselContent>
                  {vehicle.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-[4/3] rounded-xl overflow-hidden">
                        <img 
                          src={image} 
                          alt={vehicle.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-4" />
                <CarouselNext className="right-4" />
              </Carousel>
              
              {/* Miniatures */}
              <div className="grid grid-cols-3 gap-2">
                {vehicle.images.map((image, index) => (
                  <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                    <img 
                      src={image} 
                      alt={`${vehicle.name} - ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Informations */}
            <div className="space-y-6">
              {(vehicle.type === 'truck' || vehicle.type === 'van') && (
                <Badge className="mb-2">
                  {vehicle.type === 'truck' ? t.categories.horseTrucks.title : t.categories.horseVans.title}
                </Badge>
              )}
                <h1 className="text-3xl font-bold text-foreground mb-2">{translatedName}</h1>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-copper">{vehicle.price}€</span>
                  {vehicle.originalPrice && (
                    <>
                      <span className="text-lg text-muted-foreground line-through">{vehicle.originalPrice}€</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        {t.vehicleDetail.save} {(parseInt(vehicle.originalPrice) - parseInt(vehicle.price)).toLocaleString()}€
                      </Badge>
                    </>
                  )}
                </div>
              </div>

              {/* Caractéristiques principales */}
              <div className="htg-card p-6">
                <h3 className="text-xl font-bold mb-4">{t.vehicleDetail.mainCharacteristics}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-copper" />
                    <span className="text-sm">{vehicle.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gauge className="w-5 h-5 text-copper" />
                    <span className="text-sm">{vehicle.mileage} km</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-copper" />
                    <span className="text-sm">{vehicle.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-copper" />
                    <span className="text-sm">{vehicle.transmission}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fuel className="w-5 h-5 text-copper" />
                    <span className="text-sm">{vehicle.fuel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-copper" />
                    <span className="text-sm">{vehicle.power}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="htg-card p-6">
                <h3 className="text-xl font-bold mb-4">{t.vehicleDetail.description}</h3>
                <p className="text-muted-foreground leading-relaxed">{translatedDesc}</p>
              </div>

              {/* Équipements */}
              <div className="htg-card p-6">
                <h3 className="text-xl font-bold mb-4">{t.vehicleDetail.includedEquipment}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {translatedFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-copper rounded-full"></div>
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* État et disponibilité */}
              <div className="grid grid-cols-2 gap-4">
                <div className="htg-card p-4 text-center">
                  <Shield className="w-6 h-6 text-copper mx-auto mb-2" />
                  <div className="font-semibold">{t.vehicleDetail.condition}</div>
                  <div className="text-sm text-muted-foreground">{translatedCondition}</div>
                </div>
                <div className="htg-card p-4 text-center">
                  <Calendar className="w-6 h-6 text-copper mx-auto mb-2" />
                  <div className="font-semibold">{t.vehicleDetail.availability}</div>
                  <div className="text-sm text-muted-foreground">{translatedAvailability}</div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <Link to={getLocalizedPath('/devis', language)} className="block">
                  <Button className="htg-button-primary w-full text-lg py-6">
                    {t.vehicleDetail.requestQuoteForVehicle}
                  </Button>
                </Link>
                <Link to={getLocalizedPath('/contact', language)} className="block">
                  <Button variant="outline" className="htg-button-secondary w-full">
                    {t.vehicleDetail.contactExpert}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
      </section>

      <Footer />
    </div>
  );
};

export default VehicleDetail;