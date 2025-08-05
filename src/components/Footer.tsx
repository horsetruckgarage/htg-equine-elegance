import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const footerSections = [
    {
      title: "Véhicules",
      links: [
        { name: "Camions Chevaux", href: "/camions" },
        { name: "Vans Chevaux", href: "/vans" },
        { name: "Remorques Chevaux", href: "/remorques" },
        { name: "Occasions", href: "/occasions" },
        { name: "Neufs", href: "/neufs" }
      ]
    },
    {
      title: "Services",
      links: [
        { name: "Expertise Véhicule", href: "/expertise" },
        { name: "Financement", href: "/financement" },
        { name: "Assurance", href: "/assurance" },
        { name: "Garantie", href: "/garantie" },
        { name: "SAV", href: "/sav" }
      ]
    },
    {
      title: "Entreprise",
      links: [
        { name: "À Propos", href: "/about" },
        { name: "Notre Histoire", href: "/histoire" },
        { name: "Équipe", href: "/equipe" },
        { name: "Témoignages", href: "/temoignages" },
        { name: "Carrières", href: "/carrieres" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact", href: "/contact" },
        { name: "FAQ", href: "/faq" },
        { name: "Guide d'Achat", href: "/guide" },
        { name: "Documentation", href: "/docs" },
        { name: "Blog", href: "/blog" }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook" },
    { icon: Instagram, href: "#", name: "Instagram" },
    { icon: Linkedin, href: "#", name: "LinkedIn" }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-copper/10 to-bronze/10 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">
              Restez Informé des Dernières Nouveautés
            </h3>
            <p className="text-lg text-gray-600">
              Recevez en avant-première les nouveaux arrivages et les offres exclusives HTG.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-800"
              />
              <Button className="htg-button-primary whitespace-nowrap">
                S'abonner
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-6 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center space-x-3">
                <img 
                  src="/lovable-uploads/a0f80a95-a142-4cef-ae8c-1b305dc07a0e.png" 
                  alt="HTG Horse Truck Garage" 
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h3 className="text-2xl font-bold text-copper">HTG</h3>
                  <p className="text-gray-600">Horse Truck Garage</p>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                Spécialiste français du transport équin depuis plus de 15 ans. 
                Nous vous accompagnons dans le choix et l'acquisition de votre véhicule idéal.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-copper" />
                  <span className="text-gray-800">+33 1 23 45 67 89</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-copper" />
                  <span className="text-gray-800">contact@htg-france.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-copper" />
                  <span className="text-gray-800">Zone Industrielle, 69000 Lyon</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-copper" />
                  <span className="text-gray-800">Lun-Ven: 8h-18h, Sam: 9h-17h</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-copper/10 hover:bg-copper hover:text-black rounded-lg flex items-center justify-center transition-colors"
                      aria-label={social.name}
                    >
                      <IconComponent className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Footer Links */}
            {footerSections.map((section) => (
              <div key={section.title} className="space-y-4">
                <h4 className="text-lg font-semibold text-copper">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-copper transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-600">
                © 2024 Horse Truck Garage (HTG). Tous droits réservés.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <a href="/privacy" className="text-gray-600 hover:text-copper transition-colors">
                Politique de Confidentialité
              </a>
              <a href="/terms" className="text-gray-600 hover:text-copper transition-colors">
                Conditions Générales
              </a>
              <a href="/cookies" className="text-gray-600 hover:text-copper transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;