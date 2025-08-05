import { Award, Users, Calendar, MapPin, Shield, Wrench, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useTranslation } from "@/hooks/useTranslation";

const About = () => {
  const { t } = useTranslation();
  
  const stats = [
    { icon: Calendar, value: "15+", label: (t as any).aboutPage?.stats?.experience || "Années d'Expertise" },
    { icon: Users, value: "2500+", label: (t as any).aboutPage?.stats?.clients || "Clients Satisfaits" },
    { icon: Shield, value: "100%", label: (t as any).aboutPage?.stats?.certified || "Véhicules Certifiés" },
    { icon: Award, value: "98%", label: (t as any).aboutPage?.stats?.recommendations || "Recommandations" }
  ];

  const values = [
    {
      icon: Heart,
      title: (t as any).aboutPage?.values?.passion?.title || "Passion Équestre",
      description: (t as any).aboutPage?.values?.passion?.description || "Notre équipe partage votre passion pour le monde équin et comprend l'importance du bien-être animal."
    },
    {
      icon: Shield,
      title: (t as any).aboutPage?.values?.expertise?.title || "Expertise Reconnue",
      description: (t as any).aboutPage?.values?.expertise?.description || "15 ans d'expérience dans le transport équin nous permettent de sélectionner les meilleurs véhicules."
    },
    {
      icon: Star,
      title: (t as any).aboutPage?.values?.excellence?.title || "Excellence du Service",
      description: (t as any).aboutPage?.values?.excellence?.description || "De la première visite à l'après-vente, nous nous engageons à vous offrir un service exceptionnel."
    },
    {
      icon: Wrench,
      title: (t as any).aboutPage?.values?.support?.title || "Accompagnement Complet",
      description: (t as any).aboutPage?.values?.support?.description || "Financement, assurance, entretien : nous vous accompagnons dans tous les aspects de votre achat."
    }
  ];

  const team = [
    {
      name: "Jean-Pierre Dubois",
      role: (t as any).aboutPage?.team?.director?.role || "Directeur & Fondateur",
      experience: (t as any).aboutPage?.team?.director?.experience || "20 ans dans le transport équin",
      speciality: (t as any).aboutPage?.team?.director?.speciality || "Expert en camions chevaux premium"
    },
    {
      name: "Marie Leclerc",
      role: (t as any).aboutPage?.team?.sales?.role || "Responsable Commerciale",
      experience: (t as any).aboutPage?.team?.sales?.experience || "12 ans chez HTG",
      speciality: (t as any).aboutPage?.team?.sales?.speciality || "Spécialiste vans et remorques"
    },
    {
      name: "Thomas Martin",
      role: (t as any).aboutPage?.team?.technical?.role || "Expert Technique",
      experience: (t as any).aboutPage?.team?.technical?.experience || "15 ans mécanicien spécialisé",
      speciality: (t as any).aboutPage?.team?.technical?.speciality || "Contrôle qualité et expertise"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center space-x-2 bg-copper/10 rounded-full px-4 py-2">
              <Heart className="w-4 h-4 text-copper" />
              <span className="text-copper font-semibold">{(t as any).aboutPage?.hero?.badge || "Notre Histoire"}</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold">
              <span className="text-foreground">{(t as any).aboutPage?.hero?.title1 || "L'Excellence"}</span>
              <span className="block htg-text-gradient">{(t as any).aboutPage?.hero?.title2 || "au Service des Chevaux"}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {(t as any).aboutPage?.hero?.description || "Depuis 2008, Horse Truck Garage accompagne les passionnés d'équitation dans le choix de leurs véhicules de transport. Notre expertise française au service de vos champions."}
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
                <span className="text-foreground">{(t as any).aboutPage?.story?.title1 || "Une Passion"}</span>
                <span className="block htg-text-gradient">{(t as any).aboutPage?.story?.title2 || "Devenue Expertise"}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {(t as any).aboutPage?.story?.paragraph1 || "Tout a commencé en 2008 avec une simple conviction : les chevaux méritent le meilleur transport possible. Jean-Pierre Dubois, cavalier passionné et entrepreneur, a fondé HTG avec l'ambition de révolutionner le marché du transport équin en France."}
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {(t as any).aboutPage?.story?.paragraph2 || "Aujourd'hui, nous sommes fiers d'être devenus la référence française en matière de véhicules de transport équin, avec plus de 2500 clients qui nous font confiance pour leurs champions."}
              </p>
              <Button className="htg-button-primary">
                {(t as any).aboutPage?.story?.cta || "Demander un Devis Personnalisé"}
              </Button>
            </div>
            <div className="relative">
              <div className="htg-card p-8 space-y-6">
                <h3 className="text-2xl font-bold text-foreground">{(t as any).aboutPage?.mission?.title || "Notre Mission"}</h3>
                <p className="text-muted-foreground">
                  {(t as any).aboutPage?.mission?.description || "Offrir aux passionnés d'équitation des solutions de transport qui allient sécurité, confort et performance, tout en garantissant le bien-être de leurs chevaux."}
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-copper rounded-full"></div>
                    <span className="text-sm">{(t as any).aboutPage?.mission?.point1 || "Sélection rigoureuse des véhicules"}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-copper rounded-full"></div>
                    <span className="text-sm">{(t as any).aboutPage?.mission?.point2 || "Expertise technique reconnue"}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-copper rounded-full"></div>
                    <span className="text-sm">{(t as any).aboutPage?.mission?.point3 || "Service client personnalisé"}</span>
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
              <span className="text-foreground">{(t as any).aboutPage?.valuesSection?.title1 || "Nos"}</span>
              <span className="htg-text-gradient">{(t as any).aboutPage?.valuesSection?.title2 || " Valeurs"}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {(t as any).aboutPage?.valuesSection?.subtitle || "Les principes qui guident notre action depuis plus de 15 ans"}
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
              <span className="text-foreground">{(t as any).aboutPage?.teamSection?.title1 || "Notre"}</span>
              <span className="htg-text-gradient">{(t as any).aboutPage?.teamSection?.title2 || " Équipe"}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {(t as any).aboutPage?.teamSection?.subtitle || "Des experts passionnés à votre service"}
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
              {(t as any).aboutPage?.cta?.title || "Prêt à Faire Confiance à Notre Expertise ?"}
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {(t as any).aboutPage?.cta?.description || "Découvrez pourquoi plus de 2500 passionnés d'équitation nous font confiance pour leurs véhicules de transport."}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="htg-button-primary">
                {(t as any).aboutPage?.cta?.button1 || "Voir Nos Véhicules"}
              </Button>
              <Button variant="outline" className="htg-button-secondary">
                {(t as any).aboutPage?.cta?.button2 || "Prendre Rendez-vous"}
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