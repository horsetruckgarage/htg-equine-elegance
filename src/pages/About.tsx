import { Award, Users, Calendar, Shield, Wrench, Heart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useTranslation } from "@/hooks/useTranslation";

const About = () => {
  const { t } = useTranslation();
  
  const stats = [
    { icon: Calendar, value: "30+", label: t.common.experience },
    { icon: Users, value: "5000+", label: "véhicules vendus" },
    { icon: Shield, value: "98%", label: "satisfaction client" },
    { icon: Award, value: "5", label: "ans de garantie" }
  ];

  const values = [
    {
      icon: Heart,
      title: t.aboutPage.values.passion.title,
      description: t.aboutPage.values.passion.description
    },
    {
      icon: Shield,
      title: t.aboutPage.values.excellence.title,
      description: t.aboutPage.values.excellence.description
    },
    {
      icon: Star,
      title: t.aboutPage.values.support.title,
      description: t.aboutPage.values.support.description
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
              <span className="text-copper font-semibold">Notre Histoire</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold">
              <span className="text-foreground">{t.aboutPage.hero.title}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.aboutPage.hero.description}
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
                <span className="text-foreground">{t.aboutPage.story.title}</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t.aboutPage.story.description}
              </p>
              <Button className="htg-button-primary">
                {t.common.learnMore}
              </Button>
            </div>
            <div className="relative">
              <div className="htg-card p-8 space-y-6">
                <h3 className="text-2xl font-bold text-foreground">Notre Mission</h3>
                <p className="text-muted-foreground">
                  Offrir les meilleures solutions de transport équin avec expertise et passion depuis plus de 30 ans.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-copper rounded-full"></div>
                    <span className="text-sm">Excellence dans le service client</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-copper rounded-full"></div>
                    <span className="text-sm">Qualité et sécurité garanties</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-copper rounded-full"></div>
                    <span className="text-sm">Innovation continue</span>
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
              <span className="text-foreground">{t.aboutPage.values.title}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Les valeurs qui nous animent au quotidien
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
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
              <span className="text-foreground">{t.aboutPage.team.title}</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {t.aboutPage.team.description}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="htg-card p-6 text-center space-y-4">
              <div className="w-24 h-24 bg-gradient-to-br from-copper/20 to-bronze/20 rounded-full flex items-center justify-center mx-auto">
                <Users className="w-12 h-12 text-copper" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-foreground">{t.aboutPage.team.director.name}</h3>
                <p className="text-copper font-medium">{t.aboutPage.team.director.role}</p>
                <p className="text-sm text-muted-foreground">{t.aboutPage.team.director.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto px-6">
          <div className="htg-card max-w-4xl mx-auto p-8 lg:p-12 text-center space-y-6">
            <h3 className="text-3xl font-bold text-foreground">
              Prêt à découvrir nos véhicules ?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Contactez notre équipe d'experts pour trouver la solution parfaite pour vos besoins.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="htg-button-primary">
                {t.common.getQuote}
              </Button>
              <Button variant="outline" className="htg-button-secondary">
                {t.common.contact}
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