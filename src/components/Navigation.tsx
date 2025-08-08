import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useTranslation } from "@/hooks/useTranslation";
import { getLocalizedPath } from "@/hooks/useLocalizedRouting";
import LanguageSelector from "@/components/LanguageSelector";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, language } = useTranslation();

  const navItems = [
    { name: t.nav.home, href: getLocalizedPath("/", language) },
    { name: t.nav.horseTrucks, href: getLocalizedPath("/camions", language) },
    { name: t.nav.horseVans, href: getLocalizedPath("/vans", language) },
    { name: t.nav.horseTrailers, href: getLocalizedPath("/remorques", language) },
    { name: t.nav.about, href: getLocalizedPath("/about", language) },
    { name: t.nav.contact, href: getLocalizedPath("/contact", language) },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-lg border-b border-gray-200">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to={getLocalizedPath("/", language)} className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/a0f80a95-a142-4cef-ae8c-1b305dc07a0e.png" 
              alt="HTG Horse Truck Garage" 
              className="w-16 h-16 object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-copper">HTG</h1>
              <p className="text-xs text-gray-600">Horse Truck Garage</p>
            </div>
          </Link>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-700 hover:text-copper transition-colors duration-300 font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSelector />
            <Link to={getLocalizedPath("/devis", language)}>
              <Button className="htg-button-primary">
                {t.nav.getQuote}
              </Button>
            </Link>
            <Link to="/auth" className="text-sm text-gray-700 hover:text-copper transition-colors">Admin</Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex md:hidden items-center space-x-3">
            <LanguageSelector />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-copper hover:text-gold-matte transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200">
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block text-gray-700 hover:text-copper transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Link to={getLocalizedPath("/devis", language)}>
                  <Button className="w-full htg-button-primary">
                    {t.nav.getQuote}
                  </Button>
                </Link>
                <Link to="/auth" className="block text-gray-700 hover:text-copper transition-colors duration-300 font-medium py-2" onClick={() => setIsMenuOpen(false)}>
                  Admin
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;