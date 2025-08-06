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
      title: t.contactPage.services.expertise.title,
      description: t.contactPage.services.expertise.description,
      duration: t.contactPage.services.expertise.duration
    },
    {
      icon: Calculator,
      title: t.contactPage.services.financing.title,
      description: t.contactPage.services.financing.description,
      duration: t.contactPage.services.financing.duration
    },
    {
      icon: MessageSquare,
      title: t.contactPage.services.advice.title,
      description: t.contactPage.services.advice.description,
      duration: t.contactPage.services.advice.duration
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
              <span className="text-foreground">{t.contactPage.contactMethods.title}</span>
              <span className="htg-text-gradient"> {t.contactPage.contactMethods.subtitle}</span>
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
                  <span className="text-foreground">{t.contactPage.contactInfo.title}</span>
                  <span className="htg-text-gradient"> {t.contactPage.contactInfo.subtitle}</span>
                </h2>
                <p className="text-lg text-muted-foreground">
                  {t.contactPage.contactInfo.description}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-copper/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-copper" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-foreground">{t.contactPage.contactInfo.address.title}</h4>
                    <p className="text-muted-foreground">
                      {t.contactPage.contactInfo.address.value.split('\n').map((line, index) => (
                        <span key={index}>
                          {line}
                          {index < t.contactPage.contactInfo.address.value.split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-copper/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-copper" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-foreground">{t.contactPage.contactInfo.hours.title}</h4>
                    <div className="text-muted-foreground space-y-1">
                      <p>{t.contactPage.contactInfo.hours.weekdays}</p>
                      <p>{t.contactPage.contactInfo.hours.saturday}</p>
                      <p>{t.contactPage.contactInfo.hours.sunday}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-copper/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-copper" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-foreground">{t.contactPage.contactInfo.phone.title}</h4>
                    <p className="text-muted-foreground">{t.contactPage.contactInfo.phone.value}</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-copper/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-copper" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-foreground">{t.contactPage.contactInfo.email.title}</h4>
                    <p className="text-muted-foreground">{t.contactPage.contactInfo.email.value}</p>
                  </div>
                </div>
              </div>

              {/* Services Quick Access */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-foreground">{t.contactPage.services.title}</h3>
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
                  <h3 className="text-2xl font-bold text-foreground">{t.contactPage.form.title}</h3>
                  <p className="text-muted-foreground">
                    {t.contactPage.form.description}
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t.contactPage.form.firstName}</label>
                      <Input placeholder={t.contactPage.form.firstNamePlaceholder} />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-foreground">{t.contactPage.form.lastName}</label>
                      <Input placeholder={t.contactPage.form.lastNamePlaceholder} />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{t.contactPage.form.email}</label>
                    <Input type="email" placeholder={t.contactPage.form.emailPlaceholder} />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{t.contactPage.form.phone}</label>
                    <Input placeholder={t.contactPage.form.phonePlaceholder} />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{t.contactPage.form.vehicleType}</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t.contactPage.form.vehicleTypePlaceholder} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="camion">{t.contactPage.form.vehicleTypes.truck}</SelectItem>
                        <SelectItem value="van">{t.contactPage.form.vehicleTypes.van}</SelectItem>
                        <SelectItem value="remorque">{t.contactPage.form.vehicleTypes.trailer}</SelectItem>
                        <SelectItem value="autre">{t.contactPage.form.vehicleTypes.other}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{t.contactPage.form.budget}</label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder={t.contactPage.form.budgetPlaceholder} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="moins-30k">{t.contactPage.form.budgetRanges.under30k}</SelectItem>
                        <SelectItem value="30k-50k">{t.contactPage.form.budgetRanges.range30k50k}</SelectItem>
                        <SelectItem value="50k-80k">{t.contactPage.form.budgetRanges.range50k80k}</SelectItem>
                        <SelectItem value="80k-plus">{t.contactPage.form.budgetRanges.over80k}</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">{t.contactPage.form.message}</label>
                    <Textarea 
                      placeholder={t.contactPage.form.messagePlaceholder}
                      rows={4}
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="text-center space-y-2">
                      <p className="text-copper font-medium">{t.contactPage.form.responseTime}</p>
                      <p className="text-sm text-muted-foreground">{t.contactPage.form.noCommitment}</p>
                    </div>
                    <Button className="htg-button-primary w-full text-lg py-3">
                      {t.contactPage.form.submitButton}
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