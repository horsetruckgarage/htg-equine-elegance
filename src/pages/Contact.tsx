import { Phone, Mail, MapPin, Clock, Calendar, MessageSquare, Car, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useTranslation } from "@/hooks/useTranslation";

const Contact = () => {
  const { t } = useTranslation();
  
  const contactMethods = [
    {
      icon: Phone,
      title: t.contactPage.contactMethods.phone.title,
      subtitle: t.contactPage.contactMethods.phone.subtitle,
      description: t.contactPage.contactMethods.phone.description,
      actionText: t.contactPage.contactMethods.phone.actionText,
      bgColor: "bg-green-600/10",
      iconColor: "text-green-600",
      buttonColor: "bg-green-600 hover:bg-green-700"
    },
    {
      icon: MessageSquare,
      title: t.contactPage.contactMethods.chat.title,
      subtitle: t.contactPage.contactMethods.chat.subtitle,
      description: t.contactPage.contactMethods.chat.description,
      actionText: t.contactPage.contactMethods.chat.actionText,
      bgColor: "bg-blue-600/10",
      iconColor: "text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      icon: Calendar,
      title: t.contactPage.contactMethods.appointment.title,
      subtitle: t.contactPage.contactMethods.appointment.subtitle,
      description: t.contactPage.contactMethods.appointment.description,
      actionText: t.contactPage.contactMethods.appointment.actionText,
      bgColor: "bg-copper/10",
      iconColor: "text-copper",
      buttonColor: "bg-copper hover:bg-copper/90 text-black"
    }
  ];

  const services = [
    {
      icon: Car,
      title: "Expertise Véhicule",
      description: "Contrôle technique complet avant achat",
      duration: "Sous 48h"
    },
    {
      icon: Calculator,
      title: "Simulation Financement",
      description: "Calculez vos mensualités en temps réel",
      duration: "Immédiat"
    },
    {
      icon: MessageSquare,
      title: "Conseil Personnalisé",
      description: "Aide au choix selon vos besoins",
      duration: "30 min"
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
              <Phone className="w-4 h-4 text-copper" />
              <span className="text-copper font-semibold">{t.contactPage.hero.badge}</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold">
              <span className="text-foreground">{t.contactPage.hero.title}</span>
              <span className="block htg-text-gradient">{t.contactPage.hero.subtitle}</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {t.contactPage.hero.description}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl lg:text-4xl font-bold">
              <span className="text-foreground">Comment Nous</span>
              <span className="htg-text-gradient"> Joindre ?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choisissez le canal de communication qui vous convient
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <div key={index} className="htg-card p-8 text-center space-y-6 hover:scale-105 transition-transform">
                  <div className={`w-20 h-20 ${method.bgColor} rounded-full flex items-center justify-center mx-auto`}>
                    <IconComponent className={`w-10 h-10 ${method.iconColor}`} />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-bold text-foreground">{method.title}</h3>
                    <p className="text-copper font-medium">{method.subtitle}</p>
                    <p className="text-muted-foreground">{method.description}</p>
                  </div>
                  <Button className={`${method.buttonColor} text-white w-full`}>
                    {method.actionText}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold">
                  <span className="text-foreground">Informations</span>
                  <span className="htg-text-gradient"> Pratiques</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  Retrouvez-nous dans notre showroom ou contactez-nous directement.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-copper/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-copper" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-foreground">Adresse</h4>
                    <p className="text-muted-foreground">
                      Zone Industrielle de la Forêt<br />
                      123 Rue des Chevaux<br />
                      45000 Orléans, France
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-copper/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-copper" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-foreground">Horaires</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>Lundi - Vendredi : 8h - 18h</p>
                      <p>Samedi : 9h - 17h</p>
                      <p>Dimanche : Sur rendez-vous</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-copper/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-copper" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-foreground">Téléphone</h4>
                    <p className="text-muted-foreground">01 23 45 67 89</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-copper/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-copper" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">contact@htg-france.com</p>
                  </div>
                </div>
              </div>

              {/* Services Quick Access */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-foreground">Services Express</h3>
                <div className="space-y-4">
                  {services.map((service, index) => {
                    const IconComponent = service.icon;
                    return (
                      <div key={index} className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                        <IconComponent className="w-6 h-6 text-copper" />
                        <div className="flex-1">
                          <h4 className="font-medium text-foreground">{service.title}</h4>
                          <p className="text-sm text-muted-foreground">{service.description}</p>
                        </div>
                        <div className="text-copper text-sm font-medium">{service.duration}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="htg-card p-8">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-foreground">Demande de Contact</h3>
                  <p className="text-muted-foreground">
                    Remplissez ce formulaire et recevez une réponse personnalisée sous 24h.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Prénom *</label>
                      <Input placeholder="Votre prénom" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">Nom *</label>
                      <Input placeholder="Votre nom" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Email *</label>
                    <Input type="email" placeholder="votre@email.com" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Téléphone</label>
                    <Input placeholder="06 12 34 56 78" />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Type de véhicule recherché</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez un type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="camion">Camion Chevaux</SelectItem>
                        <SelectItem value="van">Van Chevaux</SelectItem>
                        <SelectItem value="remorque">Remorque Chevaux</SelectItem>
                        <SelectItem value="autre">Autre / Conseil</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Budget estimé</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionnez votre budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="moins-30k">Moins de 30 000€</SelectItem>
                        <SelectItem value="30k-50k">30 000€ - 50 000€</SelectItem>
                        <SelectItem value="50k-80k">50 000€ - 80 000€</SelectItem>
                        <SelectItem value="80k-plus">Plus de 80 000€</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Message *</label>
                    <Textarea 
                      placeholder="Décrivez-nous votre projet, vos besoins spécifiques, le nombre de chevaux à transporter..."
                      rows={4}
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="text-center space-y-2">
                      <p className="text-copper font-medium">Recevez votre réponse personnalisée en moins de 24h</p>
                      <p className="text-sm text-muted-foreground">Sans engagement • Conseil gratuit</p>
                    </div>
                    <Button className="htg-button-primary w-full text-lg py-3">
                      Envoyer ma Demande
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;