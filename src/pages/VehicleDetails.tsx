import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Heart, Share2, Phone, MessageCircle, Star, CheckCircle, Calendar, Gauge, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { useTranslation } from "@/hooks/useTranslation";
import { getLocalizedPath } from "@/hooks/useLocalizedRouting";

const VehicleDetails = () => {
  const { id } = useParams();
  const { t, language } = useTranslation();

  // Mock vehicle data - in real app this would come from API
  const vehicle = {
    id: id || "1",
    title: "Mercedes-Benz Atego 1224 - 4 places",
    category: "Camion chevaux",
    price: 85000,
    originalPrice: 95000,
    year: 2021,
    km: 45000,
    capacity: 4,
    location: "Paris, France",
    rating: 4.8,
    features: ["pneumaticSuspension", "airConditioning", "sleepingCabin", "automaticTransmission"],
    badge: "premium",
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description: "Magnifique camion chevaux Mercedes-Benz Atego en excellent état. Idéal pour le transport professionnel de chevaux avec un maximum de confort et de sécurité.",
    specifications: {
      engine: "OM 924 LA Euro VI",
      power: "240 CV",
      transmission: "Automatique",
      suspension: "Pneumatique",
      cabin: "Confort+",
      fuel: "Diesel"
    },
    equipment: [
      "Suspension pneumatique",
      "Climatisation",
      "Cabine couchette",
      "Boîte automatique",
      "GPS intégré",
      "Système de ventilation",
      "Éclairage LED",
      "Sol antidérapant"
    ],
    financing: {
      monthlyFrom: 890,
      deposit: 17000,
      duration: 84
    }
  };

  const getLocalizedFeatures = (features: string[]) => {
    return features.map(feature => t.features[feature] || feature);
  };

  const getLocalizedBadge = (badge: string) => {
    return t.common[badge] || badge;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back button */}
        <div className="mb-6">
          <Link 
            to={getLocalizedPath('/camions-chevaux', language)}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux camions
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Images and main info */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image gallery */}
            <div className="space-y-4">
              <div className="aspect-[16/10] rounded-lg overflow-hidden bg-muted">
                <img 
                  src={vehicle.images[0]} 
                  alt={vehicle.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                {vehicle.images.map((image, index) => (
                  <div key={index} className="aspect-[4/3] rounded overflow-hidden bg-muted">
                    <img 
                      src={image} 
                      alt={`${vehicle.title} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Vehicle details */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">Description</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      {vehicle.description}
                    </p>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Caractéristiques techniques</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(vehicle.specifications).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-muted-foreground capitalize">{key}:</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-xl font-semibold mb-4">Équipements inclus</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {vehicle.equipment.map((item, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right column - Price and actions */}
          <div className="space-y-6">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* Header */}
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h1 className="text-xl font-bold">{vehicle.title}</h1>
                        <p className="text-muted-foreground">{vehicle.category}</p>
                      </div>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Heart className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Share2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Badges and rating */}
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary">{getLocalizedBadge(vehicle.badge)}</Badge>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{vehicle.rating}</span>
                      </div>
                    </div>
                  </div>

                  {/* Key specs */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Année</p>
                        <p className="font-medium">{vehicle.year}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Gauge className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Kilométrage</p>
                        <p className="font-medium">{vehicle.km.toLocaleString()} km</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Capacité</p>
                        <p className="font-medium">{vehicle.capacity} chevaux</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="text-xs text-muted-foreground">Localisation</p>
                        <p className="font-medium">{vehicle.location}</p>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Pricing */}
                  <div>
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-3xl font-bold">{vehicle.price.toLocaleString()}€</span>
                      {vehicle.originalPrice > vehicle.price && (
                        <span className="text-lg text-muted-foreground line-through">
                          {vehicle.originalPrice.toLocaleString()}€
                        </span>
                      )}
                    </div>
                    {vehicle.originalPrice > vehicle.price && (
                      <Badge variant="destructive" className="mb-3">
                        Économisez {(vehicle.originalPrice - vehicle.price).toLocaleString()}€
                      </Badge>
                    )}
                    
                    <div className="bg-muted/50 rounded-lg p-3">
                      <p className="text-sm text-muted-foreground mb-1">Financement disponible</p>
                      <p className="font-semibold">À partir de {vehicle.financing.monthlyFrom}€/mois</p>
                      <p className="text-xs text-muted-foreground">
                        Apport: {vehicle.financing.deposit.toLocaleString()}€ • {vehicle.financing.duration} mois
                      </p>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="space-y-3">
                    <Button className="w-full" size="lg">
                      <Phone className="h-4 w-4 mr-2" />
                      Appeler maintenant
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Demander des infos
                    </Button>
                    <Link to={getLocalizedPath('/demande-devis', language)}>
                      <Button variant="secondary" className="w-full" size="lg">
                        Obtenir un devis
                      </Button>
                    </Link>
                  </div>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3">Équipements principaux</h4>
                    <div className="space-y-2">
                      {getLocalizedFeatures(vehicle.features).map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingCTA />
    </div>
  );
};

export default VehicleDetails;