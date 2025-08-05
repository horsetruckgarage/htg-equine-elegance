import { Award, Users, Calendar, MapPin, Shield, Wrench, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useTranslation } from "@/hooks/useTranslation";

const About = () => {
  const { t } = useTranslation();
  
  const stats = [
    { icon: Calendar, value: "15+", label: t.trust.stats.experience || "Années d'Expertise" },
    { icon: Users, value: "2500+", label: t.trust.stats.clients || "Clients Satisfaits" },
    { icon: Shield, value: "100%", label: "Véhicules Certifiés" },
    { icon: Award, value: "98%", label: t.trust.stats.satisfaction || "Recommandations" }
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion Équestre",
      description: "Notre équipe partage votre passion pour le monde équin et comprend l'importance du bien-être animal."
    },
    {
      icon: Shield,
      title: "Expertise Reconnue", 
      description: "15 ans d'expérience dans le transport équin nous permettent de sélectionner les meilleurs véhicules."
    },
    {
      icon: Star,
      title: "Excellence du Service",
      description: "De la première visite à l'après-vente, nous nous engageons à vous offrir un service exceptionnel."
    },
    {
      icon: Wrench,
      title: "Accompagnement Complet",
      description: "Financement, assurance, entretien : nous vous accompagnons dans tous les aspects de votre achat."
    }
  ];

  const team = [
    {
      name: "Jean-Pierre Dubois",
      role: "Directeur & Fondateur",
      experience: "20 ans dans le transport équin",
      speciality: "Expert en camions chevaux premium"
    },
    {
      name: "Marie Leclerc", 
      role: "Responsable Commerciale",
      experience: "12 ans chez HTG",
      speciality: "Spécialiste vans et remorques"
    },
    {
      name: "Thomas Martin",
      role: "Expert Technique", 
      experience: "15 ans mécanicien spécialisé",
      speciality: "Contrôle qualité et expertise"
    }
  ];

  // Traductions simples basées sur la langue
  const getLocalizedText = (fr: string, en: string, es: string, de: string) => {
    switch ((t as any).nav.home === 'Home' ? 'en' : (t as any).nav.home === 'Inicio' ? 'es' : (t as any).nav.home === 'Startseite' ? 'de' : 'fr') {
      case 'en': return en;
      case 'es': return es; 
      case 'de': return de;
      default: return fr;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center space-x-2 bg-copper/10 rounded-full px-4 py-2">
              <Heart className="w-4 h-4 text-copper" />
              <span className="text-copper font-semibold">{getLocalizedText("Notre Histoire", "Our Story", "Nuestra Historia", "Unsere Geschichte")}</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold">
              <span className="text-foreground">{getLocalizedText("L'Excellence", "Excellence", "La Excelencia", "Exzellenz")}</span>
              <span className="block htg-text-gradient">{getLocalizedText("au Service des Chevaux", "in Service of Horses", "al Servicio de los Caballos", "im Dienste der Pferde")}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {getLocalizedText(
                "Depuis 2008, Horse Truck Garage accompagne les passionnés d'équitation dans le choix de leurs véhicules de transport. Notre expertise française au service de vos champions.",
                "Since 2008, Horse Truck Garage has been supporting equestrian enthusiasts in choosing their transport vehicles. Our French expertise at the service of your champions.",
                "Desde 2008, Horse Truck Garage acompaña a los apasionados de la equitación en la elección de sus vehículos de transporte. Nuestra experiencia francesa al servicio de sus campeones.",
                "Seit 2008 begleitet Horse Truck Garage Reitsport-Enthusiasten bei der Auswahl ihrer Transportfahrzeuge. Unsere französische Expertise im Dienste Ihrer Champions."
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-copper/10 rounded-full flex items-center justify-center mx-auto">
                    <IconComponent className="w-8 h-8 text-copper" />
                  </div>
                  <div className="space-y-1">
                    <div className="text-3xl lg:text-4xl font-bold text-copper">{stat.value}</div>
                    <div className="text-muted-foreground">{stat.label}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">
                <span className="text-foreground">{getLocalizedText("Une Passion", "A Passion", "Una Pasión", "Eine Leidenschaft")}</span>
                <span className="block htg-text-gradient">{getLocalizedText("Devenue Expertise", "Becoming Expertise", "Convertida en Experiencia", "Zur Expertise Geworden")}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {getLocalizedText(
                  "Tout a commencé en 2008 avec une simple conviction : les chevaux méritent le meilleur transport possible. Jean-Pierre Dubois, cavalier passionné et entrepreneur, a fondé HTG avec l'ambition de révolutionner le marché du transport équin en France.",
                  "It all started in 2008 with a simple conviction: horses deserve the best possible transport. Jean-Pierre Dubois, passionate rider and entrepreneur, founded HTG with the ambition to revolutionize the equine transport market in France.",
                  "Todo comenzó en 2008 con una simple convicción: los caballos merecen el mejor transporte posible. Jean-Pierre Dubois, jinete apasionado y empresario, fundó HTG con la ambición de revolucionar el mercado del transporte equino en Francia.",
                  "Alles begann 2008 mit einer einfachen Überzeugung: Pferde verdienen den bestmöglichen Transport. Jean-Pierre Dubois, leidenschaftlicher Reiter und Unternehmer, gründete HTG mit dem Ehrgeiz, den Pferdetransportmarkt in Frankreich zu revolutionieren."
                )}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {getLocalizedText(
                  "Aujourd'hui, nous sommes fiers d'être devenus la référence française en matière de véhicules de transport équin, avec plus de 2500 clients qui nous font confiance pour leurs champions.",
                  "Today, we are proud to have become the French reference for equine transport vehicles, with more than 2500 clients who trust us for their champions.",
                  "Hoy, estamos orgullosos de habernos convertido en la referencia francesa en vehículos de transporte equino, con más de 2500 clientes que confían en nosotros para sus campeones.",
                  "Heute sind wir stolz darauf, die französische Referenz für Pferdetransportfahrzeuge geworden zu sein, mit mehr als 2500 Kunden, die uns für ihre Champions vertrauen."
                )}
              </p>
              <Button className="htg-button-primary">
                {t.nav.getQuote}
              </Button>
            </div>
            <div className="relative">
              <div className="htg-card p-8 space-y-6">
                <h3 className="text-2xl font-bold text-foreground">{getLocalizedText("Notre Mission", "Our Mission", "Nuestra Misión", "Unser Auftrag")}</h3>
                <p className="text-muted-foreground">
                  {getLocalizedText(
                    "Offrir aux passionnés d'équitation des solutions de transport qui allient sécurité, confort et performance, tout en garantissant le bien-être de leurs chevaux.",
                    "Offer equestrian enthusiasts transport solutions that combine safety, comfort and performance, while ensuring the well-being of their horses.",
                    "Ofrecer a los entusiastas de la equitación soluciones de transporte que combinen seguridad, comodidad y rendimiento, garantizando el bienestar de sus caballos.",
                    "Reitsport-Enthusiasten Transportlösungen bieten, die Sicherheit, Komfort und Leistung kombinieren und dabei das Wohlbefinden ihrer Pferde gewährleisten."
                  )}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-copper rounded-full"></div>
                    <span className="text-sm">{getLocalizedText("Sélection rigoureuse des véhicules", "Rigorous vehicle selection", "Selección rigurosa de vehículos", "Rigorose Fahrzeugauswahl")}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-copper rounded-full"></div>
                    <span className="text-sm">{getLocalizedText("Expertise technique reconnue", "Recognized technical expertise", "Experiencia técnica reconocida", "Anerkannte technische Expertise")}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-copper rounded-full"></div>
                    <span className="text-sm">{getLocalizedText("Service client personnalisé", "Personalized customer service", "Servicio al cliente personalizado", "Personalisierter Kundenservice")}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">
              <span className="text-foreground">{getLocalizedText("Nos", "Our", "Nuestros", "Unsere")}</span>
              <span className="htg-text-gradient">{getLocalizedText(" Valeurs", " Values", " Valores", " Werte")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {getLocalizedText(
                "Les principes qui guident notre action depuis plus de 15 ans",
                "The principles that have guided our actions for over 15 years",
                "Los principios que guían nuestra acción desde hace más de 15 años",
                "Die Prinzipien, die unser Handeln seit über 15 Jahren leiten"
              )}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="htg-card p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-copper/10 rounded-full flex items-center justify-center mx-auto">
                    <IconComponent className="w-8 h-8 text-copper" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">
              <span className="text-foreground">{getLocalizedText("Notre", "Our", "Nuestro", "Unser")}</span>
              <span className="htg-text-gradient">{getLocalizedText(" Équipe", " Team", " Equipo", " Team")}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {getLocalizedText(
                "Des experts passionnés à votre service",
                "Passionate experts at your service",
                "Expertos apasionados a su servicio",
                "Leidenschaftliche Experten zu Ihren Diensten"
              )}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="htg-card p-6 text-center space-y-4">
                <div className="w-24 h-24 bg-gradient-to-br from-copper/20 to-bronze/20 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-12 h-12 text-copper" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-copper font-medium">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.experience}</p>
                  <p className="text-sm text-copper">{member.speciality}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="htg-card max-w-4xl mx-auto p-8 lg:p-12 text-center space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              {getLocalizedText(
                "Prêt à Faire Confiance à Notre Expertise ?",
                "Ready to Trust Our Expertise?",
                "¿Listo para Confiar en Nuestra Experiencia?",
                "Bereit, unserem Fachwissen zu vertrauen?"
              )}
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {getLocalizedText(
                "Découvrez pourquoi plus de 2500 passionnés d'équitation nous font confiance pour leurs véhicules de transport.",
                "Discover why more than 2500 equestrian enthusiasts trust us for their transport vehicles.",
                "Descubra por qué más de 2500 entusiastas de la equitación confían en nosotros para sus vehículos de transporte.",
                "Entdecken Sie, warum uns mehr als 2500 Reitsport-Enthusiasten für ihre Transportfahrzeuge vertrauen."
              )}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="htg-button-primary">
                {getLocalizedText("Voir Nos Véhicules", "View Our Vehicles", "Ver Nuestros Vehículos", "Unsere Fahrzeuge Ansehen")}
              </Button>
              <Button variant="outline" className="htg-button-secondary">
                {getLocalizedText("Prendre Rendez-vous", "Make an Appointment", "Concertar una Cita", "Termin Vereinbaren")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;