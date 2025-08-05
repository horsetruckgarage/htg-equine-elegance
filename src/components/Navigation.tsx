import { useState } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Accueil", href: "/" },
    { name: "Camions Chevaux", href: "/camions" },
    { name: "Vans Chevaux", href: "/vans" },
    { name: "Remorques Chevaux", href: "/remorques" },
    { name: "À Propos", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 htg-glass">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/a0f80a95-a142-4cef-ae8c-1b305dc07a0e.png" 
              alt="HTG Horse Truck Garage" 
              className="w-16 h-16 object-contain"
            />
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-copper">HTG</h1>
              <p className="text-xs text-muted-foreground">Horse Truck Garage</p>
            </div>
          </div>

          {/* Navigation Desktop */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-copper transition-colors duration-300 font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              className="htg-button-secondary border-copper text-copper hover:bg-copper hover:text-black"
            >
              <Phone className="w-4 h-4 mr-2" />
              Contact
            </Button>
            <Button className="htg-button-primary">
              Demander un Devis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-copper hover:text-gold-matte transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 htg-glass border-t border-border">
            <div className="px-6 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-foreground hover:text-copper transition-colors duration-300 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full htg-button-secondary border-copper text-copper"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Contact
                </Button>
                <Button className="w-full htg-button-primary">
                  Demander un Devis
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;