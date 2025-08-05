import { createContext, useContext } from 'react';

export type Language = 'fr' | 'en' | 'es' | 'de';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    horseTrucks: string;
    horseVans: string;
    horseTrailers: string;
    about: string;
    contact: string;
    getQuote: string;
    occasions: string;
  };
  
  // Hero Section
  hero: {
    slide1: {
      subtitle: string;
      title: string;
      description: string;
    };
    slide2: {
      subtitle: string;
      title: string;
      description: string;
    };
    slide3: {
      subtitle: string;
      title: string;
      description: string;
    };
    slide4: {
      subtitle: string;
      title: string;
      description: string;
    };
    slide5: {
      subtitle: string;
      title: string;
      description: string;
    };
    cta: string;
  };
  
  // Vehicle Categories
  categories: {
    title: string;
    subtitle: string;
    horseTrucks: {
      title: string;
      description: string;
      features: string[];
      from: string;
      explore: string;
    };
    horseVans: {
      title: string;
      description: string;
      features: string[];
      from: string;
      explore: string;
    };
    horseTrailers: {
      title: string;
      description: string;
      features: string[];
      from: string;
      explore: string;
    };
    ctaTitle: string;
    ctaDescription: string;
    getFreeQuote: string;
    makeAppointment: string;
  };
  
  // Trust & Contact
  trust: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    stats: {
      experience: string;
      clients: string;
      satisfaction: string;
      response: string;
    };
    reviewsTitle: string;
    reviewsDescription: string;
    leaveReview: string;
    partnersTitle: string;
    partnersDescription: string;
    getQuote: string;
  };
  
  // Footer
  footer: {
    newsletter: {
      title: string;
      description: string;
      placeholder: string;
      subscribe: string;
    };
    company: {
      title: string;
      description: string;
    };
    contact: {
      title: string;
      phone: string;
      email: string;
      address: string;
      hours: string;
    };
    vehicles: {
      title: string;
      horseTrucks: string;
      horseVans: string;
      horseTrailers: string;
      occasions: string;
    };
    company2: {
      title: string;
      about: string;
      contact: string;
      blog: string;
      career: string;
    };
    services: {
      title: string;
      financing: string;
      insurance: string;
      warranty: string;
      maintenance: string;
    };
    followUs: string;
    copyright: string;
    terms: string;
    privacy: string;
    sitemap: string;
  };
  
  // Floating CTA
  floating: {
    quote24h: string;
  };
  
  // Common
  common: {
    readMore: string;
    learnMore: string;
    viewAll: string;
    viewDetails: string;
    addToSelection: string;
    inStock: string;
    promotion: string;
    newArrival: string;
    bestSeller: string;
    limitedOffer: string;
    urgent: string;
    years: string;
    km: string;
    places: string;
    horsesCapacity: string;
    reviews: string;
    timeLeft: string;
    vehicles: string;
    savings: string;
    expertiseGuaranteed: string;
    featuredVehicles: string;
  };
}

const translations: Record<Language, Translations> = {
  fr: {
    nav: {
      home: "Accueil",
      horseTrucks: "Camions Chevaux",
      horseVans: "Vans Chevaux",
      horseTrailers: "Remorques Chevaux",
      about: "À Propos",
      contact: "Contact",
      getQuote: "Demander un Devis",
      occasions: "Occasions"
    },
    hero: {
      slide1: {
        subtitle: "Transport Équestre Premium",
        title: "Véhicules d'Exception pour Vos Chevaux",
        description: "Découvrez notre gamme complète de camions, vans et remorques pour le transport de vos chevaux en toute sécurité et confort."
      },
      slide2: {
        subtitle: "Confort & Sécurité",
        title: "Camions Chevaux Haut de Gamme",
        description: "Des véhicules spacieux et équipés des dernières technologies pour le bien-être de vos chevaux lors de tous vos déplacements."
      },
      slide3: {
        subtitle: "Mobilité Optimale",
        title: "Vans Chevaux Polyvalents",
        description: "Solutions pratiques et élégantes pour le transport de 1 à 3 chevaux, idéales pour les sorties quotidiennes et les compétitions."
      },
      slide4: {
        subtitle: "Flexibilité Maximale",
        title: "Remorques Chevaux Professionnelles",
        description: "Large gamme de remorques adaptées à tous vos besoins, de la promenade familiale aux compétitions internationales."
      },
      slide5: {
        subtitle: "Occasions Certifiées",
        title: "Véhicules d'Occasion Garantis",
        description: "Découvrez notre sélection rigoureuse de véhicules d'occasion révisés et garantis par nos experts."
      },
      cta: "Demander un Devis Gratuit"
    },
    categories: {
      title: "Nos Véhicules",
      subtitle: "Équestres",
      horseTrucks: {
        title: "Camions Chevaux",
        description: "Véhicules spacieux et confortables pour le transport professionnel de vos chevaux",
        features: ["Capacité 2-6 chevaux", "Compartiment sellerie", "Système ventilation", "Suspension pneumatique"],
        from: "À partir de",
        explore: "Explorer les Camions"
      },
      horseVans: {
        title: "Vans Chevaux",
        description: "Solutions compactes et polyvalentes pour 1-3 chevaux, parfaites pour l'usage quotidien",
        features: ["Format compact", "Conduite permis B", "Aménagement modulable", "Économique"],
        from: "À partir de",
        explore: "Explorer les Vans"
      },
      horseTrailers: {
        title: "Remorques Chevaux",
        description: "Remorques robustes et fiables pour tous types de transport équestre",
        features: ["1-4 places chevaux", "Plancher antidérapant", "Éclairage LED", "Freinage ABS"],
        from: "À partir de",
        explore: "Explorer les Remorques"
      },
      ctaTitle: "Besoin de Conseils Personnalisés ?",
      ctaDescription: "Nos experts vous accompagnent dans le choix du véhicule idéal pour vos besoins",
      getFreeQuote: "Demander un Devis Gratuit",
      makeAppointment: "Prendre Rendez-vous"
    },
    trust: {
      badge: "Confiance & Expertise",
      title: "Votre Partenaire",
      subtitle: "de Confiance",
      description: "Découvrez pourquoi plus de 2500 clients nous font confiance pour leurs véhicules équestres. Excellence, expertise et service personnalisé depuis plus de 15 ans.",
      stats: {
        experience: "Années d'expérience",
        clients: "Clients satisfaits",
        satisfaction: "Taux de satisfaction",
        response: "Réponse garantie"
      },
      reviewsTitle: "Ce que Disent Nos Clients",
      reviewsDescription: "Des témoignages authentiques de professionnels et passionnés qui nous font confiance",
      leaveReview: "Laisser un Avis",
      partnersTitle: "Nos Partenaires de Confiance",
      partnersDescription: "Nous travaillons exclusivement avec les plus grandes marques du secteur équestre",
      getQuote: "Demander un Devis Gratuit"
    },
    footer: {
      newsletter: {
        title: "Restez Informé",
        description: "Recevez nos dernières offres et actualités équestres",
        placeholder: "Votre adresse email",
        subscribe: "S'abonner"
      },
      company: {
        title: "HTG Horse Truck Garage",
        description: "Spécialiste du transport équestre depuis plus de 15 ans. Nous vous accompagnons dans le choix, l'achat et l'entretien de vos véhicules."
      },
      contact: {
        title: "Contact",
        phone: "Téléphone",
        email: "Email",
        address: "Adresse",
        hours: "Horaires"
      },
      vehicles: {
        title: "Véhicules",
        horseTrucks: "Camions Chevaux",
        horseVans: "Vans Chevaux",
        horseTrailers: "Remorques Chevaux",
        occasions: "Occasions"
      },
      company2: {
        title: "Entreprise",
        about: "À Propos",
        contact: "Contact",
        blog: "Blog",
        career: "Carrières"
      },
      services: {
        title: "Services",
        financing: "Financement",
        insurance: "Assurance",
        warranty: "Garantie",
        maintenance: "SAV"
      },
      followUs: "Suivez-nous",
      copyright: "Tous droits réservés.",
      terms: "Mentions Légales",
      privacy: "Politique de Confidentialité",
      sitemap: "Plan du Site"
    },
    floating: {
      quote24h: "Devis Gratuit 24h"
    },
    common: {
      readMore: "Lire la suite",
      learnMore: "En savoir plus",
      viewAll: "Voir tout",
      viewDetails: "Voir les détails",
      addToSelection: "Ajouter à la sélection",
      inStock: "En stock",
      promotion: "Promotion",
      newArrival: "Nouveauté",
      bestSeller: "Best-seller",
      limitedOffer: "Offre limitée",
      urgent: "Urgent",
      years: "ans",
      km: "km",
      places: "places",
      horsesCapacity: "chevaux",
      reviews: "avis",
      timeLeft: "Temps restant",
      vehicles: "véhicules",
      savings: "d'économie",
      expertiseGuaranteed: "Expertise garantie",
      featuredVehicles: "Véhicules Vedettes"
    }
  },
  en: {
    nav: {
      home: "Home",
      horseTrucks: "Horse Trucks",
      horseVans: "Horse Vans",
      horseTrailers: "Horse Trailers",
      about: "About",
      contact: "Contact",
      getQuote: "Get Quote",
      occasions: "Used Vehicles"
    },
    hero: {
      slide1: {
        subtitle: "Premium Equestrian Transport",
        title: "Exceptional Vehicles for Your Horses",
        description: "Discover our complete range of trucks, vans and trailers for transporting your horses safely and comfortably."
      },
      slide2: {
        subtitle: "Comfort & Safety",
        title: "High-End Horse Trucks",
        description: "Spacious vehicles equipped with the latest technology for your horses' well-being during all your travels."
      },
      slide3: {
        subtitle: "Optimal Mobility",
        title: "Versatile Horse Vans",
        description: "Practical and elegant solutions for transporting 1 to 3 horses, ideal for daily outings and competitions."
      },
      slide4: {
        subtitle: "Maximum Flexibility",
        title: "Professional Horse Trailers",
        description: "Wide range of trailers adapted to all your needs, from family rides to international competitions."
      },
      slide5: {
        subtitle: "Certified Used Vehicles",
        title: "Guaranteed Used Vehicles",
        description: "Discover our rigorous selection of used vehicles inspected and guaranteed by our experts."
      },
      cta: "Get Free Quote"
    },
    categories: {
      title: "Our Vehicles",
      subtitle: "Equestrian",
      horseTrucks: {
        title: "Horse Trucks",
        description: "Spacious and comfortable vehicles for professional transport of your horses",
        features: ["2-6 horse capacity", "Tack compartment", "Ventilation system", "Air suspension"],
        from: "From",
        explore: "Explore Trucks"
      },
      horseVans: {
        title: "Horse Vans",
        description: "Compact and versatile solutions for 1-3 horses, perfect for daily use",
        features: ["Compact size", "B license driving", "Modular layout", "Economical"],
        from: "From",
        explore: "Explore Vans"
      },
      horseTrailers: {
        title: "Horse Trailers",
        description: "Robust and reliable trailers for all types of equestrian transport",
        features: ["1-4 horse capacity", "Non-slip flooring", "LED lighting", "ABS braking"],
        from: "From",
        explore: "Explore Trailers"
      },
      ctaTitle: "Need Personalized Advice?",
      ctaDescription: "Our experts help you choose the ideal vehicle for your needs",
      getFreeQuote: "Get Free Quote",
      makeAppointment: "Make Appointment"
    },
    trust: {
      badge: "Trust & Expertise",
      title: "Your Trusted",
      subtitle: "Partner",
      description: "Discover why over 2500 customers trust us for their equestrian vehicles. Excellence, expertise and personalized service for over 15 years.",
      stats: {
        experience: "Years of experience",
        clients: "Satisfied customers",
        satisfaction: "Satisfaction rate",
        response: "Guaranteed response"
      },
      reviewsTitle: "What Our Customers Say",
      reviewsDescription: "Authentic testimonials from professionals and enthusiasts who trust us",
      leaveReview: "Leave a Review",
      partnersTitle: "Our Trusted Partners",
      partnersDescription: "We work exclusively with the biggest brands in the equestrian sector",
      getQuote: "Get Free Quote"
    },
    footer: {
      newsletter: {
        title: "Stay Informed",
        description: "Receive our latest offers and equestrian news",
        placeholder: "Your email address",
        subscribe: "Subscribe"
      },
      company: {
        title: "HTG Horse Truck Garage",
        description: "Equestrian transport specialist for over 15 years. We support you in choosing, purchasing and maintaining your vehicles."
      },
      contact: {
        title: "Contact",
        phone: "Phone",
        email: "Email",
        address: "Address",
        hours: "Hours"
      },
      vehicles: {
        title: "Vehicles",
        horseTrucks: "Horse Trucks",
        horseVans: "Horse Vans",
        horseTrailers: "Horse Trailers",
        occasions: "Used Vehicles"
      },
      company2: {
        title: "Company",
        about: "About",
        contact: "Contact",
        blog: "Blog",
        career: "Careers"
      },
      services: {
        title: "Services",
        financing: "Financing",
        insurance: "Insurance",
        warranty: "Warranty",
        maintenance: "After Sales"
      },
      followUs: "Follow us",
      copyright: "All rights reserved.",
      terms: "Legal Notice",
      privacy: "Privacy Policy",
      sitemap: "Sitemap"
    },
    floating: {
      quote24h: "Free Quote 24h"
    },
    common: {
      readMore: "Read more",
      learnMore: "Learn more",
      viewAll: "View all",
      viewDetails: "View details",
      addToSelection: "Add to selection",
      inStock: "In stock",
      promotion: "Promotion",
      newArrival: "New arrival",
      bestSeller: "Best seller",
      limitedOffer: "Limited offer",
      urgent: "Urgent",
      years: "years",
      km: "km",
      places: "seats",
      horsesCapacity: "horses",
      reviews: "reviews",
      timeLeft: "Time left",
      vehicles: "vehicles",
      savings: "savings",
      expertiseGuaranteed: "Expertise guaranteed",
      featuredVehicles: "Featured Vehicles"
    }
  },
  es: {
    nav: {
      home: "Inicio",
      horseTrucks: "Camiones para Caballos",
      horseVans: "Furgonetas para Caballos",
      horseTrailers: "Remolques para Caballos",
      about: "Acerca de",
      contact: "Contacto",
      getQuote: "Solicitar Presupuesto",
      occasions: "Ocasiones"
    },
    hero: {
      slide1: {
        subtitle: "Transporte Ecuestre Premium",
        title: "Vehículos Excepcionales para Sus Caballos",
        description: "Descubra nuestra gama completa de camiones, furgonetas y remolques para transportar sus caballos con seguridad y comodidad."
      },
      slide2: {
        subtitle: "Confort y Seguridad",
        title: "Camiones para Caballos de Alta Gama",
        description: "Vehículos espaciosos equipados con la última tecnología para el bienestar de sus caballos durante todos sus desplazamientos."
      },
      slide3: {
        subtitle: "Movilidad Óptima",
        title: "Furgonetas para Caballos Versátiles",
        description: "Soluciones prácticas y elegantes para transportar de 1 a 3 caballos, ideales para salidas diarias y competiciones."
      },
      slide4: {
        subtitle: "Flexibilidad Máxima",
        title: "Remolques para Caballos Profesionales",
        description: "Amplia gama de remolques adaptados a todas sus necesidades, desde paseos familiares hasta competiciones internacionales."
      },
      slide5: {
        subtitle: "Vehículos Usados Certificados",
        title: "Vehículos Usados Garantizados",
        description: "Descubra nuestra selección rigurosa de vehículos usados revisados y garantizados por nuestros expertos."
      },
      cta: "Solicitar Presupuesto Gratuito"
    },
    categories: {
      title: "Nuestros Vehículos",
      subtitle: "Ecuestres",
      horseTrucks: {
        title: "Camiones para Caballos",
        description: "Vehículos espaciosos y cómodos para el transporte profesional de sus caballos",
        features: ["Capacidad 2-6 caballos", "Compartimento guarnicionería", "Sistema ventilación", "Suspensión neumática"],
        from: "Desde",
        explore: "Explorar Camiones"
      },
      horseVans: {
        title: "Furgonetas para Caballos",
        description: "Soluciones compactas y versátiles para 1-3 caballos, perfectas para uso diario",
        features: ["Formato compacto", "Conducción permiso B", "Diseño modular", "Económico"],
        from: "Desde",
        explore: "Explorar Furgonetas"
      },
      horseTrailers: {
        title: "Remolques para Caballos",
        description: "Remolques robustos y fiables para todo tipo de transporte ecuestre",
        features: ["1-4 plazas caballos", "Suelo antideslizante", "Iluminación LED", "Frenado ABS"],
        from: "Desde",
        explore: "Explorar Remolques"
      },
      ctaTitle: "¿Necesita Consejo Personalizado?",
      ctaDescription: "Nuestros expertos le ayudan a elegir el vehículo ideal para sus necesidades",
      getFreeQuote: "Solicitar Presupuesto Gratuito",
      makeAppointment: "Concertar Cita"
    },
    trust: {
      badge: "Confianza y Experiencia",
      title: "Su Socio",
      subtitle: "de Confianza",
      description: "Descubra por qué más de 2500 clientes confían en nosotros para sus vehículos ecuestres. Excelencia, experiencia y servicio personalizado desde hace más de 15 años.",
      stats: {
        experience: "Años de experiencia",
        clients: "Clientes satisfechos",
        satisfaction: "Tasa de satisfacción",
        response: "Respuesta garantizada"
      },
      reviewsTitle: "Lo Que Dicen Nuestros Clientes",
      reviewsDescription: "Testimonios auténticos de profesionales y entusiastas que confían en nosotros",
      leaveReview: "Dejar una Reseña",
      partnersTitle: "Nuestros Socios de Confianza",
      partnersDescription: "Trabajamos exclusivamente con las marcas más grandes del sector ecuestre",
      getQuote: "Solicitar Presupuesto Gratuito"
    },
    footer: {
      newsletter: {
        title: "Manténgase Informado",
        description: "Reciba nuestras últimas ofertas y noticias ecuestres",
        placeholder: "Su dirección de correo",
        subscribe: "Suscribirse"
      },
      company: {
        title: "HTG Horse Truck Garage",
        description: "Especialista en transporte ecuestre desde hace más de 15 años. Le acompañamos en la elección, compra y mantenimiento de sus vehículos."
      },
      contact: {
        title: "Contacto",
        phone: "Teléfono",
        email: "Correo",
        address: "Dirección",
        hours: "Horarios"
      },
      vehicles: {
        title: "Vehículos",
        horseTrucks: "Camiones para Caballos",
        horseVans: "Furgonetas para Caballos",
        horseTrailers: "Remolques para Caballos",
        occasions: "Ocasiones"
      },
      company2: {
        title: "Empresa",
        about: "Acerca de",
        contact: "Contacto",
        blog: "Blog",
        career: "Carreras"
      },
      services: {
        title: "Servicios",
        financing: "Financiación",
        insurance: "Seguro",
        warranty: "Garantía",
        maintenance: "Posventa"
      },
      followUs: "Síguenos",
      copyright: "Todos los derechos reservados.",
      terms: "Aviso Legal",
      privacy: "Política de Privacidad",
      sitemap: "Mapa del Sitio"
    },
    floating: {
      quote24h: "Presupuesto Gratuito 24h"
    },
    common: {
      readMore: "Leer más",
      learnMore: "Saber más",
      viewAll: "Ver todo",
      viewDetails: "Ver detalles",
      addToSelection: "Añadir a la selección",
      inStock: "En stock",
      promotion: "Promoción",
      newArrival: "Novedad",
      bestSeller: "Más vendido",
      limitedOffer: "Oferta limitada",
      urgent: "Urgente",
      years: "años",
      km: "km",
      places: "plazas",
      horsesCapacity: "caballos",
      reviews: "reseñas",
      timeLeft: "Tiempo restante",
      vehicles: "vehículos",
      savings: "de ahorro",
      expertiseGuaranteed: "Experiencia garantizada",
      featuredVehicles: "Vehículos Destacados"
    }
  },
  de: {
    nav: {
      home: "Startseite",
      horseTrucks: "Pferdetransporter",
      horseVans: "Pferde-Vans",
      horseTrailers: "Pferdeanhänger",
      about: "Über uns",
      contact: "Kontakt",
      getQuote: "Angebot anfordern",
      occasions: "Gebrauchtwagen"
    },
    hero: {
      slide1: {
        subtitle: "Premium Pferdetransport",
        title: "Außergewöhnliche Fahrzeuge für Ihre Pferde",
        description: "Entdecken Sie unser komplettes Sortiment an LKWs, Transportern und Anhängern für den sicheren und komfortablen Transport Ihrer Pferde."
      },
      slide2: {
        subtitle: "Komfort & Sicherheit",
        title: "Hochwertige Pferdetransporter",
        description: "Geräumige Fahrzeuge mit modernster Technologie für das Wohlbefinden Ihrer Pferde bei allen Ihren Fahrten."
      },
      slide3: {
        subtitle: "Optimale Mobilität",
        title: "Vielseitige Pferdetransporter",
        description: "Praktische und elegante Lösungen für den Transport von 1 bis 3 Pferden, ideal für tägliche Ausflüge und Wettkämpfe."
      },
      slide4: {
        subtitle: "Maximale Flexibilität",
        title: "Professionelle Pferdeanhänger",
        description: "Breite Palette von Anhängern, die an alle Ihre Bedürfnisse angepasst sind, von Familienausritten bis zu internationalen Wettkämpfen."
      },
      slide5: {
        subtitle: "Zertifizierte Gebrauchtwagen",
        title: "Garantierte Gebrauchtwagen",
        description: "Entdecken Sie unsere strenge Auswahl an Gebrauchtwagen, die von unseren Experten geprüft und garantiert werden."
      },
      cta: "Kostenloses Angebot anfordern"
    },
    categories: {
      title: "Unsere Fahrzeuge",
      subtitle: "Reitsport",
      horseTrucks: {
        title: "Pferdetransporter",
        description: "Geräumige und komfortable Fahrzeuge für den professionellen Transport Ihrer Pferde",
        features: ["2-6 Pferde Kapazität", "Sattelkammer", "Belüftungssystem", "Luftfederung"],
        from: "Ab",
        explore: "LKWs erkunden"
      },
      horseVans: {
        title: "Pferde-Vans",
        description: "Kompakte und vielseitige Lösungen für 1-3 Pferde, perfekt für den täglichen Gebrauch",
        features: ["Kompakte Größe", "B-Führerschein", "Modularer Aufbau", "Wirtschaftlich"],
        from: "Ab",
        explore: "Transporter erkunden"
      },
      horseTrailers: {
        title: "Pferdeanhänger",
        description: "Robuste und zuverlässige Anhänger für alle Arten von Pferdetransport",
        features: ["1-4 Pferdeplätze", "Rutschfester Boden", "LED-Beleuchtung", "ABS-Bremsen"],
        from: "Ab",
        explore: "Anhänger erkunden"
      },
      ctaTitle: "Brauchen Sie persönliche Beratung?",
      ctaDescription: "Unsere Experten helfen Ihnen bei der Wahl des idealen Fahrzeugs für Ihre Bedürfnisse",
      getFreeQuote: "Kostenloses Angebot anfordern",
      makeAppointment: "Termin vereinbaren"
    },
    trust: {
      badge: "Vertrauen & Expertise",
      title: "Ihr vertrauensvoller",
      subtitle: "Partner",
      description: "Entdecken Sie, warum über 2500 Kunden uns für ihre Reitfahrzeuge vertrauen. Exzellenz, Expertise und persönlicher Service seit über 15 Jahren.",
      stats: {
        experience: "Jahre Erfahrung",
        clients: "Zufriedene Kunden",
        satisfaction: "Zufriedenheitsrate",
        response: "Garantierte Antwort"
      },
      reviewsTitle: "Was Unsere Kunden Sagen",
      reviewsDescription: "Authentische Testimonials von Profis und Enthusiasten, die uns vertrauen",
      leaveReview: "Bewertung hinterlassen",
      partnersTitle: "Unsere Vertrauenspartner",
      partnersDescription: "Wir arbeiten ausschließlich mit den größten Marken der Reitsportbranche zusammen",
      getQuote: "Kostenloses Angebot anfordern"
    },
    footer: {
      newsletter: {
        title: "Bleiben Sie informiert",
        description: "Erhalten Sie unsere neuesten Angebote und Reitnachrichten",
        placeholder: "Ihre E-Mail-Adresse",
        subscribe: "Abonnieren"
      },
      company: {
        title: "HTG Horse Truck Garage",
        description: "Pferdetransport-Spezialist seit über 15 Jahren. Wir unterstützen Sie bei der Auswahl, dem Kauf und der Wartung Ihrer Fahrzeuge."
      },
      contact: {
        title: "Kontakt",
        phone: "Telefon",
        email: "E-Mail",
        address: "Adresse",
        hours: "Öffnungszeiten"
      },
      vehicles: {
        title: "Fahrzeuge",
        horseTrucks: "Pferdetransporter",
        horseVans: "Pferde-Vans",
        horseTrailers: "Pferdeanhänger",
        occasions: "Gebrauchtwagen"
      },
      company2: {
        title: "Unternehmen",
        about: "Über uns",
        contact: "Kontakt",
        blog: "Blog",
        career: "Karriere"
      },
      services: {
        title: "Services",
        financing: "Finanzierung",
        insurance: "Versicherung",
        warranty: "Garantie",
        maintenance: "Kundendienst"
      },
      followUs: "Folgen Sie uns",
      copyright: "Alle Rechte vorbehalten.",
      terms: "Rechtliche Hinweise",
      privacy: "Datenschutzrichtlinie",
      sitemap: "Sitemap"
    },
    floating: {
      quote24h: "Kostenloses Angebot 24h"
    },
    common: {
      readMore: "Mehr lesen",
      learnMore: "Mehr erfahren",
      viewAll: "Alle anzeigen",
      viewDetails: "Details anzeigen",
      addToSelection: "Zur Auswahl hinzufügen",
      inStock: "Auf Lager",
      promotion: "Aktion",
      newArrival: "Neuheit",
      bestSeller: "Bestseller",
      limitedOffer: "Begrenztes Angebot",
      urgent: "Dringend",
      years: "Jahre",
      km: "km",
      places: "Plätze",
      horsesCapacity: "Pferde",
      reviews: "Bewertungen",
      timeLeft: "Verbleibende Zeit",
      vehicles: "Fahrzeuge",
      savings: "Ersparnis",
      expertiseGuaranteed: "Expertise garantiert",
      featuredVehicles: "Ausgewählte Fahrzeuge"
    }
  }
};

export interface TranslationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

export const TranslationContext = createContext<TranslationContextType>({
  language: 'fr',
  setLanguage: () => {},
  t: translations.fr,
});

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};

export { translations };