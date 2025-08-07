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

  // Pour l'instant, données simulées - à remplacer par de vraies données
  const vehicleData = {
    name: "Renault Master L3H2 - Transport 3 Chevaux",
    category: type === 'trucks' ? 'Camion Chevaux' : type === 'vans' ? 'Van Chevaux' : 'Remorque Chevaux',
    price: "68 500€",
    originalPrice: "75 000€",
    images: [
      "/lovable-uploads/a3bc9f31-af5a-4053-a835-56933ae8d26b.png",
      "/lovable-uploads/2b478b96-e19a-4288-ac04-f0410f56f0bc.png",
      "/lovable-uploads/35ff85cc-4513-4a11-9b8b-eda640027c91.png",
    ],
    specs: {
      year: "2022",
      mileage: "45 000 km",
      capacity: "3 chevaux",
      transmission: "Automatique",
      fuel: "Diesel",
      power: "170 CV"
    },
    features: [
      "Suspension pneumatique",
      "Climatisation",
      "Compartiment sellerie spacieux",
      "Système de ventilation optimisé",
      "Plancher antidérapant",
      "Éclairage LED",
      "Caméra de recul",
      "Boîte automatique"
    ],
    description: "Ce magnifique Renault Master a été entièrement aménagé par nos soins pour le transport de 3 chevaux. Véhicule en excellent état, révisé et garanti 12 mois.",
    condition: "Excellent",
    availability: "Disponible immédiatement"
  };

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
              Retour au catalogue
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
                    Économisez 6 500€
                  </Badge>
                </div>
              </div>

              {/* Caractéristiques principales */}
              <div className="htg-card p-6">
                <h3 className="text-xl font-bold mb-4">Caractéristiques principales</h3>
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
                <h3 className="text-xl font-bold mb-4">Description</h3>
                <p className="text-muted-foreground leading-relaxed">{vehicleData.description}</p>
              </div>

              {/* Équipements */}
              <div className="htg-card p-6">
                <h3 className="text-xl font-bold mb-4">Équipements inclus</h3>
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
                  <div className="font-semibold">État</div>
                  <div className="text-sm text-muted-foreground">{vehicleData.condition}</div>
                </div>
                <div className="htg-card p-4 text-center">
                  <Calendar className="w-6 h-6 text-copper mx-auto mb-2" />
                  <div className="font-semibold">Disponibilité</div>
                  <div className="text-sm text-muted-foreground">{vehicleData.availability}</div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-3">
                <Link to={getLocalizedPath('/devis', language)} className="block">
                  <Button className="htg-button-primary w-full text-lg py-6">
                    Demander un devis pour ce véhicule
                  </Button>
                </Link>
                <Link to={getLocalizedPath('/contact', language)} className="block">
                  <Button variant="outline" className="htg-button-secondary w-full">
                    Contacter un expert
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