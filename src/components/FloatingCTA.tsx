import { MessageCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const FloatingCTA = () => {
  return (
    <>
      {/* Floating CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Link to="/devis">
          <Button 
            className="htg-button-primary shadow-luxury text-lg px-6 py-4 animate-pulse-glow"
            size="lg"
          >
            <MessageCircle className="w-5 h-5 mr-2" />
            Devis Gratuit 24h
          </Button>
        </Link>
      </div>

      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 left-6 z-50">
        <a
          href="https://wa.me/33123456789?text=Bonjour, je souhaite des informations sur vos véhicules"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-luxury transition-colors animate-float"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </a>
      </div>

    </>
  );
};

export default FloatingCTA;