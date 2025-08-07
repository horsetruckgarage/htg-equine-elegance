import { ArrowLeft, Calendar, Settings, Users, Fuel, Gauge, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link, useParams, useNavigate } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useTranslation } from "@/hooks/useTranslation";
import { getLocalizedPath } from "@/hooks/useLocalizedRouting";

const VehicleDetail = () => {
  const { t, language } = useTranslation();
  const { type, id } = useParams();
  const navigate = useNavigate();

  // Données simulées basées sur l'ID du véhicule
  const getVehicleData = () => {
    const vehicleId = parseInt(id || '1');
    
    // Base de données simulée de véhicules
    const vehiclesDB = {
      trucks: [
        {
          name: "Renault Master L3H2 - Transport 3 Chevaux",
          price: "68 500€", originalPrice: "75 000€",
          year: "2022", mileage: "45 000 km", power: "170 CV",
          images: ["/lovable-uploads/a3bc9f31-af5a-4053-a835-56933ae8d26b.png", "/lovable-uploads/2b478b96-e19a-4288-ac04-f0410f56f0bc.png", "/lovable-uploads/35ff85cc-4513-4a11-9b8b-eda640027c91.png"]
        },
        {
          name: "Mercedes Sprinter Premium - 4 Chevaux",
          price: "78 900€", originalPrice: "85 000€",
          year: "2023", mileage: "28 000 km", power: "190 CV",
          images: ["/lovable-uploads/2b478b96-e19a-4288-ac04-f0410f56f0bc.png", "/lovable-uploads/35ff85cc-4513-4a11-9b8b-eda640027c91.png", "/lovable-uploads/a3bc9f31-af5a-4053-a835-56933ae8d26b.png"]
        },
        {
          name: "Iveco Daily Excellence - 5 Chevaux",
          price: "89 500€", originalPrice: "95 000€",
          year: "2023", mileage: "15 000 km", power: "210 CV",
          images: ["/lovable-uploads/35ff85cc-4513-4a11-9b8b-eda640027c91.png", "/lovable-uploads/a3bc9f31-af5a-4053-a835-56933ae8d26b.png", "/lovable-uploads/2b478b96-e19a-4288-ac04-f0410f56f0bc.png"]
        }
      ],
      vans: [
        {
          name: "Ford Transit Custom - 2 Chevaux",
          price: "45 900€", originalPrice: "49 000€",
          year: "2021", mileage: "32 000 km", power: "130 CV",
          images: ["/lovable-uploads/bee66bcd-4af5-4ce6-a9d1-a044053fa657.png", "/lovable-uploads/2307287b-f2a8-4858-984f-44b3a646dd23.png", "/lovable-uploads/243f1cf5-f2ce-48a8-a2dd-8c9d7334fa5a.png"]
        },
        {
          name: "Volkswagen Crafter Sport - 3 Chevaux",
          price: "52 500€", originalPrice: "56 000€",
          year: "2022", mileage: "25 000 km", power: "140 CV",
          images: ["/lovable-uploads/2307287b-f2a8-4858-984f-44b3a646dd23.png", "/lovable-uploads/243f1cf5-f2ce-48a8-a2dd-8c9d7334fa5a.png", "/lovable-uploads/bee66bcd-4af5-4ce6-a9d1-a044053fa657.png"]
        }
      ],
      trailers: [
        {
          name: "Böckmann Comfort - 2 Chevaux",
          price: "28 500€", originalPrice: "32 000€",
          year: "2023", mileage: "Neuf", power: "N/A",
          images: ["/lovable-uploads/b90c9439-0e85-44c0-aa34-cdc82bc8b364.png", "/lovable-uploads/a0f80a95-a142-4cef-ae8c-1b305dc07a0e.png", "/lovable-uploads/bee66bcd-4af5-4ce6-a9d1-a044053fa657.png"]
        },
        {
          name: "Humbaur Xanthos - 3 Chevaux",
          price: "35 800€", originalPrice: "38 500€",
          year: "2023", mileage: "Neuf", power: "N/A",
          images: ["/lovable-uploads/a0f80a95-a142-4cef-ae8c-1b305dc07a0e.png", "/lovable-uploads/b90c9439-0e85-44c0-aa34-cdc82bc8b364.png", "/lovable-uploads/bee66bcd-4af5-4ce6-a9d1-a044053fa657.png"]
        }
      ]
    };

    const vehicles = vehiclesDB[type as keyof typeof vehiclesDB] || vehiclesDB.trucks;
    const vehicle = vehicles[vehicleId - 1] || vehicles[0];
    
    return {
      ...vehicle,
      category: type === 'trucks' ? t.trucksPage.vehicle.horseTruck : type === 'vans' ? t.vansPage.vehicle.horseVan : t.categories.horseTrailers.title,
      specs: {
        year: vehicle.year,
        mileage: vehicle.mileage,
        capacity: type === 'trailers' ? vehicle.name.includes('2 Chevaux') ? `2 ${t.common.horsesCapacity}` : `3 ${t.common.horsesCapacity}` : vehicle.name.includes('3 Chevaux') ? `3 ${t.common.horsesCapacity}` : vehicle.name.includes('4 Chevaux') ? `4 ${t.common.horsesCapacity}` : `5 ${t.common.horsesCapacity}`,
        transmission: type === 'trailers' ? 'N/A' : t.vehicleDetail.automaticTransmission,
        fuel: type === 'trailers' ? 'N/A' : t.vehicleDetail.diesel,
        power: vehicle.power
      },
      features: [
        t.features.pneumaticSuspension,
        t.features.airConditioning,
        t.features.tackCompartment + " spacieux",
        t.features.ventilationSystem + " optimisé",
        t.features.nonSlipFlooring,
        t.features.ledLighting,
        "Caméra de recul",
        t.features.automaticTransmission
      ],
      description: language === 'fr' ? `Ce ${vehicle.name} a été entièrement aménagé par nos soins. Véhicule en excellent état, révisé et garanti 12 mois.`
        : language === 'en' ? `This ${vehicle.name} has been completely fitted out by us. Vehicle in excellent condition, serviced and guaranteed for 12 months.`
        : language === 'es' ? `Este ${vehicle.name} ha sido completamente acondicionado por nosotros. Vehículo en excelente estado, revisado y garantizado por 12 meses.`
        : `Dieser ${vehicle.name} wurde von uns vollständig ausgestattet. Fahrzeug in ausgezeichnetem Zustand, gewartet und 12 Monate garantiert.`,
      condition: t.vehicleDetail.excellent,
      availability: t.vehicleDetail.availableImmediately
    };
  };

  const vehicleData = getVehicleData();

  const getBackPath = () => {
    switch (type) {
      case 'trucks': return getLocalizedPath('/camions', language);
      case 'vans': return getLocalizedPath('/vans', language);
      case 'trailers': return getLocalizedPath('/remorques', language);
      default: return getLocalizedPath('/', language);
    }
  };

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
                  {vehicleData.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-[4/3] rounded-xl overflow-hidden">
                        <img 
                          src={image} 
                          alt={`${vehicleData.name} - Photo ${index + 1}`}
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
                {vehicleData.images.map((image, index) => (
                  <div key={index} className="aspect-[4/3] rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                    <img 
                      src={image} 
                      alt={`Miniature ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Informations */}
            <div className="space-y-6">
              <div>
                <Badge className="mb-2">{vehicleData.category}</Badge>
                <h1 className="text-3xl font-bold text-foreground mb-2">{vehicleData.name}</h1>
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-bold text-copper">{vehicleData.price}</span>
                  <span className="text-lg text-muted-foreground line-through">{vehicleData.originalPrice}</span>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {t.vehicleDetail.save} 6 500€
                  </Badge>
                </div>
              </div>

              {/* Caractéristiques principales */}
              <div className="htg-card p-6">
                <h3 className="text-xl font-bold mb-4">{t.vehicleDetail.mainCharacteristics}</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-copper" />
                    <span className="text-sm">{vehicleData.specs.year}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Gauge className="w-5 h-5 text-copper" />
                    <span className="text-sm">{vehicleData.specs.mileage}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-copper" />
                    <span className="text-sm">{vehicleData.specs.capacity}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-copper" />
                    <span className="text-sm">{vehicleData.specs.transmission}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Fuel className="w-5 h-5 text-copper" />
                    <span className="text-sm">{vehicleData.specs.fuel}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-copper" />
                    <span className="text-sm">{vehicleData.specs.power}</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="htg-card p-6">
                <h3 className="text-xl font-bold mb-4">{t.vehicleDetail.description}</h3>
                <p className="text-muted-foreground leading-relaxed">{vehicleData.description}</p>
              </div>

              {/* Équipements */}
              <div className="htg-card p-6">
                <h3 className="text-xl font-bold mb-4">{t.vehicleDetail.includedEquipment}</h3>
                <div className="grid grid-cols-2 gap-2">
                  {vehicleData.features.map((feature, index) => (
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
                  <div className="text-sm text-muted-foreground">{vehicleData.condition}</div>
                </div>
                <div className="htg-card p-4 text-center">
                  <Calendar className="w-6 h-6 text-copper mx-auto mb-2" />
                  <div className="font-semibold">{t.vehicleDetail.availability}</div>
                  <div className="text-sm text-muted-foreground">{vehicleData.availability}</div>
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VehicleDetail;