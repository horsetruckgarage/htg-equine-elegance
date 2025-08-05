import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, CheckCircle, Users, Award, Shield, Phone, Mail, MapPin, ArrowRight, Heart, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const ConfianceEtContact = () => {
  const reviews = [
    {
      id: 1,
      name: "Marie Dubois",
      location: "Normandie",
      rating: 5,
      text: "Service exceptionnel ! J'ai acheté mon van chez HTG il y a 2 ans et je suis toujours aussi satisfaite. L'équipe est professionnelle et de bon conseil.",
      vehicleType: "Van Chevaux Renault Master",
      date: "Il y a 3 semaines",
      verified: true
    },
    {
      id: 2,
      name: "Pierre Martin",
      location: "Île-de-France",
      rating: 5,
      text: "Excellent rapport qualité-prix pour mon camion 4 places. La livraison s'est parfaitement déroulée et le véhicule était impeccable.",
      vehicleType: "Camion Iveco Daily",
      date: "Il y a 1 mois",
      verified: true
    },
    {
      id: 3,
      name: "Sophie Lemoine",
      location: "Bretagne",
      rating: 5,
      text: "Je recommande vivement HTG ! Leur expertise m'a permis de trouver la remorque parfaite pour mes besoins. Suivi irréprochable.",
      vehicleType: "Remorque Böckmann",
      date: "Il y a 2 mois",
      verified: true
    }
  ];

  const partners = [
    { name: "Iveco", logo: "🚛", description: "Partenaire officiel depuis 2015" },
    { name: "Mercedes", logo: "⭐", description: "Distributeur agréé" },
    { name: "Renault", logo: "🔷", description: "Concessionnaire certifié" },
    { name: "Böckmann", logo: "🏆", description: "Revendeur exclusif région" },
    { name: "Ifor Williams", logo: "🛡️", description: "Distributeur autorisé" },
    { name: "Humbaur", logo: "⚡", description: "Partenaire premium" }
  ];

  const stats = [
    { number: "15+", label: "Années d'expérience", icon: Award },
    { number: "2500+", label: "Clients satisfaits", icon: Users },
    { number: "98%", label: "Taux de satisfaction", icon: Heart },
    { number: "24h", label: "Réponse garantie", icon: CheckCircle }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-copper/10 rounded-full px-4 py-2">
            <Shield className="w-4 h-4 text-copper" />
            <span className="text-copper font-semibold">Confiance & Expertise</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Votre Partenaire</span>
            <span className="block htg-text-gradient">de Confiance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez pourquoi plus de 2500 clients nous font confiance pour leurs véhicules équestres. 
            Excellence, expertise et service personnalisé depuis plus de 15 ans.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="text-center space-y-3">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-copper/10 rounded-full">
                  <IconComponent className="w-8 h-8 text-copper" />
                </div>
                <div className="space-y-1">
                  <div className="text-3xl font-bold text-copper">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Reviews Section */}
        <div className="mb-20">
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-4 py-2 border border-blue-200">
              <div className="flex items-center space-x-1">
                <div className="w-5 h-5 bg-blue-500 text-white rounded-sm flex items-center justify-center text-xs font-bold">G</div>
                <span className="text-blue-600 font-semibold">Avis Google</span>
              </div>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                ))}
                <span className="text-sm text-gray-600 ml-1">4.9/5</span>
              </div>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
              Ce que Disent Nos Clients
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Des témoignages authentiques de professionnels et passionnés qui nous font confiance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {reviews.map((review, index) => (
              <div 
                key={review.id} 
                className="htg-card p-6 space-y-4 group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-copper/10 rounded-full flex items-center justify-center">
                      <span className="text-copper font-bold text-lg">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold text-foreground">{review.name}</h4>
                        {review.verified && (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{review.location}</p>
                    </div>
                  </div>
                  <Quote className="w-6 h-6 text-copper/50" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-copper fill-copper" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-muted-foreground leading-relaxed">
                  "{review.text}"
                </p>

                {/* Vehicle & Date */}
                <div className="pt-4 border-t border-border space-y-2">
                  <p className="text-sm font-medium text-copper">{review.vehicleType}</p>
                  <p className="text-xs text-muted-foreground">{review.date}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Review CTA */}
          <div className="text-center">
            <Link to="/contact">
              <Button variant="outline" className="htg-button-secondary">
                Laisser un Avis
                <Star className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Partners Section */}
        <div className="mb-20">
          <div className="text-center mb-12 space-y-4">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
              Nos Partenaires de Confiance
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Nous travaillons exclusivement avec les plus grandes marques du secteur équestre
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="htg-card p-6 text-center space-y-3 group hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl">{partner.logo}</div>
                <div>
                  <h4 className="font-semibold text-foreground">{partner.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{partner.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA Section */}
        <div className="htg-card max-w-6xl mx-auto p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                  Prêt à Trouver Votre Véhicule Idéal ?
                </h3>
                <p className="text-lg text-muted-foreground">
                  Nos experts vous accompagnent personnellement dans votre projet. 
                  Devis gratuit, conseil sur-mesure et service après-vente garanti.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-muted-foreground">Conseil personnalisé gratuit</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-muted-foreground">Devis détaillé en moins de 24h</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-muted-foreground">Garantie et SAV inclus</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-muted-foreground">Financement sur mesure</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/devis" className="flex-1">
                  <Button className="htg-button-primary w-full">
                    Demander un Devis Gratuit
                  </Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" className="htg-button-secondary flex-1">
                    Prendre Rendez-vous
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Content - Contact Info */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-foreground">Contactez-nous</h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-copper/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-copper" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Téléphone</p>
                      <a href="tel:+33123456789" className="text-copper hover:underline">
                        +33 1 23 45 67 89
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-copper/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-copper" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href="mailto:contact@htg-horsetrucks.fr" className="text-copper hover:underline">
                        contact@htg-horsetrucks.fr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-copper/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-copper" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Showroom</p>
                      <p className="text-muted-foreground">123 Route des Chevaux<br />75001 Paris</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-copper/5 rounded-lg p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-copper" />
                  <span className="font-medium text-foreground">Horaires d'ouverture</span>
                </div>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>Lun - Ven : 9h00 - 18h00</p>
                  <p>Sam : 9h00 - 17h00</p>
                  <p>Dim : Sur rendez-vous</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfianceEtContact;