import { Shield, Award, CheckCircle, Handshake } from "lucide-react";

const PartnersSection = () => {
  const partners = [
    {
      category: "Constructeurs Officiels",
      description: "Partenaires constructeurs certifiés",
      logos: [
        { name: "Iveco", logo: "🚛" },
        { name: "Renault", logo: "🚐" },
        { name: "Mercedes", logo: "⭐" },
        { name: "Ford", logo: "🔵" }
      ]
    },
    {
      category: "Spécialistes Équipement",
      description: "Leaders européens du transport équin",
      logos: [
        { name: "Böckmann", logo: "🏆" },
        { name: "Ifor Williams", logo: "🎯" },
        { name: "Humbaur", logo: "💎" },
        { name: "Anssems", logo: "⚡" }
      ]
    },
    {
      category: "Services Financiers",
      description: "Solutions de financement adaptées",
      logos: [
        { name: "BNP Paribas", logo: "🏦" },
        { name: "Crédit Agricole", logo: "🌱" },
        { name: "Société Générale", logo: "🔶" },
        { name: "LCL", logo: "🔷" }
      ]
    }
  ];

  const certifications = [
    {
      title: "Certification Qualité",
      description: "Label Excellence Service Client",
      icon: Award,
      color: "text-yellow-500"
    },
    {
      title: "Garantie Constructeur",
      description: "Véhicules garantis jusqu'à 3 ans",
      icon: Shield,
      color: "text-blue-500"
    },
    {
      title: "Conformité CE",
      description: "Normes européennes respectées",
      icon: CheckCircle,
      color: "text-green-500"
    },
    {
      title: "Partenaire Agréé",
      description: "Revendeur officiel certifié",
      icon: Handshake,
      color: "text-copper"
    }
  ];

  return (
    <section className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-copper/10 rounded-full px-4 py-2">
            <Handshake className="w-4 h-4 text-copper" />
            <span className="text-copper font-semibold">Confiance & Partenariats</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold">
            <span className="text-foreground">Nos Partenaires</span>
            <span className="block htg-text-gradient">de Confiance</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            HTG collabore avec les plus grandes marques du secteur pour vous garantir 
            la meilleure qualité et les meilleurs services.
          </p>
        </div>

        {/* Certifications */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {certifications.map((cert, index) => {
            const IconComponent = cert.icon;
            return (
              <div 
                key={index} 
                className="htg-card p-6 text-center space-y-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-16 h-16 mx-auto bg-copper/10 rounded-full flex items-center justify-center ${cert.color}`}>
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{cert.title}</h3>
                <p className="text-sm text-muted-foreground">{cert.description}</p>
              </div>
            );
          })}
        </div>

        {/* Partners Grid */}
        <div className="space-y-12">
          {partners.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              {/* Category Header */}
              <div className="text-center space-y-2">
                <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
                <p className="text-muted-foreground">{category.description}</p>
              </div>

              {/* Partners Logos */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {category.logos.map((partner, index) => (
                  <div 
                    key={index} 
                    className="htg-card p-8 group hover:scale-105 transition-transform duration-300"
                    style={{ animationDelay: `${(categoryIndex * 4 + index) * 0.1}s` }}
                  >
                    <div className="text-center space-y-3">
                      <div className="text-4xl group-hover:scale-110 transition-transform duration-300">
                        {partner.logo}
                      </div>
                      <h4 className="font-semibold text-foreground group-hover:text-copper transition-colors">
                        {partner.name}
                      </h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16">
          <div className="htg-card max-w-4xl mx-auto p-8 lg:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-copper">15+</div>
                <div className="text-muted-foreground">Années d'Expérience</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-copper">25+</div>
                <div className="text-muted-foreground">Marques Partenaires</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-copper">500+</div>
                <div className="text-muted-foreground">Clients Satisfaits</div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-border text-center">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Pourquoi Nous Faire Confiance ?
              </h3>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Revendeur officiel agréé par les constructeurs</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Véhicules neufs et occasions certifiés</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Service après-vente professionnel</span>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Financement facilité avec nos partenaires</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Garanties constructeur étendues</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">Expertise reconnue depuis 15 ans</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;