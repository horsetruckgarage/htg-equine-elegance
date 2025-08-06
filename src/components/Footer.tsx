import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { getLocalizedPath } from "@/hooks/useLocalizedRouting";

const Footer = () => {
  const { t, language } = useTranslation();
  
  const footerSections = [
    {
      title: t.footer.vehicles.title,
      links: [
        { name: t.footer.vehicles.horseTrucks, href: getLocalizedPath("/camions", language) },
        { name: t.footer.vehicles.horseVans, href: getLocalizedPath("/vans", language) },
        { name: t.footer.vehicles.horseTrailers, href: getLocalizedPath("/remorques", language) },
        { name: t.footer.vehicles.occasions, href: getLocalizedPath("/occasions", language) },
        { name: t.nav.getQuote, href: getLocalizedPath("/devis", language) }
      ]
    },
    {
      title: t.footer.company2.title,
      links: [
        { name: t.footer.company2.about, href: getLocalizedPath("/about", language) },
        { name: t.footer.company2.contact, href: getLocalizedPath("/contact", language) },
        { name: t.nav.getQuote, href: getLocalizedPath("/devis", language) }
      ]
    },
    {
      title: t.footer.services.title,
      links: [
        { name: t.footer.services.financing, href: getLocalizedPath("/devis", language) },
        { name: t.footer.services.insurance, href: getLocalizedPath("/contact", language) },
        { name: t.footer.services.warranty, href: getLocalizedPath("/contact", language) },
        { name: t.footer.services.maintenance, href: getLocalizedPath("/contact", language) }
      ]
    }
  ];

  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com/htg", name: "Facebook" },
    { icon: Instagram, href: "https://instagram.com/htg", name: "Instagram" },
    { icon: Linkedin, href: "https://linkedin.com/company/htg", name: "LinkedIn" }
  ];

  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-copper/10 to-bronze/10 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">
              {t.footer.newsletter.title}
            </h3>
            <p className="text-lg text-gray-600">
              {t.footer.newsletter.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder={t.footer.newsletter.placeholder}
                className="flex-1 px-4 py-3 rounded-lg bg-white border border-gray-300 text-gray-800"
              />
              <Button className="htg-button-primary whitespace-nowrap">
                {t.footer.newsletter.subscribe}
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
                  <p className="text-gray-600">{t.footer.company.title}</p>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                {t.footer.company.description}
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-copper" />
                  <a href="tel:+33123456789" className="text-gray-800 hover:text-copper transition-colors">
                    +33 1 23 45 67 89
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-copper" />
                  <a href="mailto:contact@htg-france.com" className="text-gray-800 hover:text-copper transition-colors">
                    contact@htg-france.com
                  </a>
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
                      {link.href.startsWith('/') ? (
                        <Link
                          to={link.href}
                          className="text-gray-600 hover:text-copper transition-colors"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-gray-600 hover:text-copper transition-colors"
                        >
                          {link.name}
                        </a>
                      )}
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
                © 2024 {t.footer.company.title}. {t.footer.copyright}
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-end gap-6 text-sm">
              <Link to={getLocalizedPath("/about", language)} className="text-gray-600 hover:text-copper transition-colors">
                {t.footer.company2.about}
              </Link>
              <Link to={getLocalizedPath("/contact", language)} className="text-gray-600 hover:text-copper transition-colors">
                {t.footer.company2.contact}
              </Link>
              <Link to={getLocalizedPath("/devis", language)} className="text-gray-600 hover:text-copper transition-colors">
                {t.nav.getQuote}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;