import { MessageCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const FloatingCTA = () => {
  return (
    <>
      {/* Floating CTA Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          className="htg-button-primary shadow-luxury text-lg px-6 py-4 animate-pulse-glow"
          size="lg"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Devis Gratuit 24h
        </Button>
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

      {/* Contact Rapide - Desktop */}
      <div className="hidden lg:block fixed top-1/2 right-0 transform -translate-y-1/2 z-40">
        <div className="htg-glass rounded-l-xl p-4 space-y-3">
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full bg-white/90 hover:bg-copper hover:text-white"
          >
            <Phone className="w-4 h-4 mr-2" />
            Appeler
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="w-full bg-white/90 hover:bg-copper hover:text-white"
          >
            <Mail className="w-4 h-4 mr-2" />
            Email
          </Button>
        </div>
      </div>
    </>
  );
};

export default FloatingCTA;