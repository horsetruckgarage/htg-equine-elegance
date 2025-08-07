import { useNavigate, useLocation } from 'react-router-dom';
import { useState, createContext } from 'react';

export const TranslationContext = createContext<any>(null);

export type Language = 'fr' | 'en' | 'es' | 'de';

// Translation interfaces
interface Translations {
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
  hero: {
    slide1: { subtitle: string; title: string; description: string; };
    slide2: { subtitle: string; title: string; description: string; };
    slide3: { subtitle: string; title: string; description: string; };
    slide4: { subtitle: string; title: string; description: string; };
    slide5: { subtitle: string; title: string; description: string; };
    cta: string;
  };
  categories: {
    title: string;
    subtitle: string;
    horseTrucks: { title: string; description: string; features: string[]; from: string; explore: string; };
    horseVans: { title: string; description: string; features: string[]; from: string; explore: string; };
    horseTrailers: { title: string; description: string; features: string[]; from: string; explore: string; };
    ctaTitle: string;
    ctaDescription: string;
    getFreeQuote: string;
    makeAppointment: string;
    specialties: string;
    findPerfectVehicle: string;
    disciplineDescription: string;
  };
  trust: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    stats: { 
      sold: { number: string; label: string; }; 
      satisfied: { number: string; label: string; }; 
      years: { number: string; label: string; }; 
      locations: { number: string; label: string; };
      experience: { number: string; label: string; };
      clients: { number: string; label: string; };
      satisfaction: { number: string; label: string; };
      response: { number: string; label: string; };
    };
    cta: { title: string; description: string; button: string; getQuote: string; };
    reviews: any[];
    partners: any[];
    reviewsTitle: string;
    reviewsDescription: string;
    leaveReview: string;
    partnersTitle: string;
    partnersDescription: string;
  };
  offers: {
    title: string;
    subtitle: string;
    tabs: { new: string; used: string; financing: string; };
    new: { badge: string; title: string; description: string; features: string[]; cta: string; };
    used: { badge: string; title: string; description: string; benefits: string[]; cta: string; };
    financing: { badge: string; title: string; description: string; details: string[]; cta: string; };
  };
  quoteRequest: {
    title: string;
    subtitle: string;
    description: string;
    hero: {
      badge: string;
      title: string;
      description: string;
    };
    benefits: {
      truck: string;
      van: string;
      trailer: string;
      other: string;
    };
    vehicleTypes: {
      title: string;
      subtitle: string;
      popular: string;
      capacities: string;
      horseTrucks: string;
      horseVans: string;
      horseTrailers: string;
    };
    form: {
      title: string;
      subtitle: string;
      personalInfo: { title: string; firstName: string; lastName: string; email: string; phone: string; region: string; };
      vehicleRequirements: { title: string; vehicleType: string; horseCapacity: string; condition: string; budget: string; selectVehicleType: string; selectCapacity: string; selectCondition: string; selectBudget: string; };
      usage: { title: string; primaryUse: string; equipment: string; selectUsage: string; };
      additional: { title: string; timeline: string; message: string; selectTimeline: string; messagePlaceholder: string; };
      submit: { title: string; description: string; button: string; disclaimer: string; };
    };
  };
  
  trucksPage: {
    title: string;
    subtitle: string;
    description: string;
    filters: { allFilters: string; capacity: string; price: string; year: string; mileage: string; found: string; };
    vehicle: {
      horseTruck: string;
      features: { [key: string]: string; };
      badges: { [key: string]: string; };
      specs: { horses: string; year: string; km: string; capacity: string; };
      pricing: { save: string; financing: string; perMonth: string; };
      actions: { seeDetails: string; addToFavorites: string; };
    };
    cta: { title: string; description: string; getQuote: string; contactExpert: string; };
  };
  
  aboutPage: { [key: string]: any; };
  contactPage: {
    hero: {
      badge: string;
      title1: string;
      title2: string;
      description: string;
    };
    methodsSection: {
      title1: string;
      title2: string;
      subtitle: string;
    };
    contactMethods: {
      phone: {
        title: string;
        subtitle: string;
        description: string;
        action: string;
        actionText: string;
      };
      chat: {
        title: string;
        subtitle: string;
        description: string;
        action: string;
        actionText: string;
      };
      appointment: {
        title: string;
        subtitle: string;
        description: string;
        action: string;
        actionText: string;
      };
    };
    contactInfo: {
      title1: string;
      title2: string;
      subtitle: string;
      address: {
        title: string;
        street: string;
        city: string;
      };
      hours: {
        title: string;
        weekdays: string;
        saturday: string;
        sunday: string;
      };
      phone: {
        title: string;
        number: string;
      };
      email: {
        title: string;
        address: string;
      };
    };
    services: {
      title: string;
      expertise: {
        title: string;
        description: string;
        duration: string;
      };
      financing: {
        title: string;
        description: string;
        duration: string;
      };
      advice: {
        title: string;
        description: string;
        duration: string;
      };
    };
    form: {
      title: string;
      subtitle: string;
      fields: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        vehicleType: string;
        budget: string;
        message: string;
      };
      required: string;
      placeholders: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        vehicleTypeSelect: string;
        budgetSelect: string;
        message: string;
      };
      vehicleTypes: {
        truck: string;
        van: string;
        trailer: string;
        other: string;
      };
      budgetRanges: {
        under30k: string;
        range30to50k: string;
        range50to80k: string;
        over80k: string;
      };
      submitInfo: string;
      submitSubtitle: string;
      submitButton: string;
    };
  };
  
  vansPage: {
    title: string;
    subtitle: string;
    description: string;
    filters: {
      allFilters: string;
      capacity: string;
      price: string;
      year: string;
      mileage: string;
      found: string;
    };
    vehicle: {
      horseVan: string;
      features: { [key: string]: string; };
      badges: { [key: string]: string; };
      specs: {
        horses: string;
        year: string;
        km: string;
        capacity: string;
      };
      pricing: {
        save: string;
        financing: string;
        perMonth: string;
      };
      actions: {
        seeDetails: string;
        addToFavorites: string;
      };
    };
    cta: {
      title: string;
      description: string;
      getQuote: string;
      contactExpert: string;
    };
  };
  
  footer: {
    newsletter: { title: string; description: string; placeholder: string; subscribe: string; };
    company: { title: string; description: string; };
    contact: { title: string; phone: string; email: string; address: string; hours: string; };
    vehicles: { title: string; horseTrucks: string; horseVans: string; horseTrailers: string; occasions: string; };
    company2: { title: string; about: string; contact: string; blog: string; career: string; };
    followUs: string;
    copyright: string;
    terms: string;
    privacy: string;
    sitemap: string;
  };
  
  floating: { quote24h: string; };
  
  features: { [key: string]: string; };
  
  common: { [key: string]: string; };
}

export const translations: Record<Language, Translations> = {
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
      slide1: { subtitle: "Transport Équestre Premium", title: "Véhicules d'Exception pour Vos Chevaux", description: "Découvrez notre gamme complète de camions, vans et remorques." },
      slide2: { subtitle: "Confort & Sécurité", title: "Camions Chevaux Haut de Gamme", description: "Des véhicules spacieux et équipés des dernières technologies." },
      slide3: { subtitle: "Mobilité Optimale", title: "Vans Chevaux Polyvalents", description: "Solutions pratiques et élégantes pour le transport de 1 à 3 chevaux." },
      slide4: { subtitle: "Flexibilité Maximale", title: "Remorques Chevaux Professionnelles", description: "Large gamme de remorques adaptées à tous vos besoins." },
      slide5: { subtitle: "Occasions Certifiées", title: "Véhicules d'Occasion Garantis", description: "Découvrez notre sélection rigoureuse de véhicules d'occasion." },
      cta: "Demander un Devis Gratuit"
    },
    categories: {
      title: "Nos Véhicules",
      subtitle: "Équestres",
      horseTrucks: { title: "Camions Chevaux", description: "Véhicules spacieux et confortables", features: ["Capacité 2-6 chevaux", "Compartiment sellerie"], from: "À partir de", explore: "Explorer les Camions" },
      horseVans: { title: "Vans Chevaux", description: "Solutions compactes et polyvalentes", features: ["Format compact", "Conduite permis B"], from: "À partir de", explore: "Explorer les Vans" },
      horseTrailers: { title: "Remorques Chevaux", description: "Remorques robustes et fiables", features: ["1-4 places chevaux", "Plancher antidérapant"], from: "À partir de", explore: "Explorer les Remorques" },
      ctaTitle: "Besoin d'aide pour choisir ?",
      ctaDescription: "Nos experts vous accompagnent dans le choix du véhicule parfait.",
      getFreeQuote: "Devis Gratuit",
      makeAppointment: "Prendre RDV",
      specialties: "Nos Spécialités",
      findPerfectVehicle: "Trouvez le véhicule parfait",
      disciplineDescription: "Nous avons le véhicule adapté à votre passion."
    },
    trust: {
      badge: "Confiance",
      title: "Votre Partenaire de Confiance",
      subtitle: "Plus de 15 ans d'expertise dans le transport équestre",
      description: "Depuis 2008, nous accompagnons les passionnés d'équitation dans leurs projets de transport.",
      stats: { 
        sold: { number: "2,500+", label: "Véhicules vendus" }, 
        satisfied: { number: "98%", label: "Clients satisfaits" }, 
        years: { number: "15", label: "Années d'expérience" }, 
        locations: { number: "5", label: "Points de vente" },
        experience: { number: "15", label: "Années d'expérience" },
        clients: { number: "2500", label: "Clients satisfaits" },
        satisfaction: { number: "98%", label: "Taux de satisfaction" },
        response: { number: "24h", label: "Délai de réponse" }
      },
      cta: { title: "Prêt à nous faire confiance ?", description: "Contactez nos experts pour une consultation personnalisée.", button: "Demander un Devis", getQuote: "Demander un Devis" },
      reviews: [],
      partners: [],
      reviewsTitle: "Avis Clients",
      reviewsDescription: "Découvrez les témoignages de nos clients",
      leaveReview: "Laisser un avis",
      partnersTitle: "Nos Partenaires",
      partnersDescription: "Les marques qui nous font confiance"
    },
    offers: {
      title: "Nos Offres",
      subtitle: "Exclusives",
      tabs: { new: "Véhicules Neufs", used: "Occasions", financing: "Financement" },
      new: { badge: "Nouveauté", title: "Véhicules Neufs 2024", description: "Découvrez les dernières innovations", features: ["Garantie constructeur", "Technologies de pointe", "Personnalisation"], cta: "Voir les Nouveautés" },
      used: { badge: "Certifié", title: "Occasions Garanties", description: "Véhicules inspectés et garantis", benefits: ["Contrôle technique", "Garantie 12 mois", "Financement 0%"], cta: "Parcourir les Occasions" },
      financing: { badge: "Facilité", title: "Solutions de Financement", description: "Des options adaptées à votre budget", details: ["Taux préférentiels", "Apport flexible", "Réponse 24h"], cta: "Simuler un Financement" }
    },
    quoteRequest: {
      title: "Demande de Devis",
      subtitle: "Gratuit & Personnalisé",
      description: "Recevez votre devis personnalisé en quelques minutes. Nos experts analysent vos besoins pour vous proposer la solution parfaite.",
      vehicleTypes: {
        title: "Type de Véhicule",
        subtitle: "Sélectionnez le type qui vous intéresse",
        popular: "Populaire",
        capacities: "Capacités disponibles",
        horseTrucks: "Camions Chevaux",
        horseVans: "Vans Chevaux",
        horseTrailers: "Remorques Chevaux"
      },
      form: {
        title: "Vos Informations",
        subtitle: "Pour recevoir votre devis personnalisé",
        personalInfo: { title: "Informations Personnelles", firstName: "Prénom", lastName: "Nom", email: "Email", phone: "Téléphone", region: "Région" },
        vehicleRequirements: { title: "Besoins Véhicule", vehicleType: "Type de véhicule", horseCapacity: "Capacité chevaux", condition: "État", budget: "Budget", selectVehicleType: "Sélectionnez un type", selectCapacity: "Nombre de chevaux", selectCondition: "Neuf ou occasion", selectBudget: "Votre budget" },
        usage: { title: "Utilisation", primaryUse: "Usage principal", equipment: "Équipements souhaités", selectUsage: "Sélectionnez l'usage" },
        additional: { title: "Informations Complémentaires", timeline: "Délai souhaité", message: "Message", selectTimeline: "Quand souhaitez-vous acheter ?", messagePlaceholder: "Décrivez vos besoins spécifiques..." },
        submit: { title: "Recevoir mon Devis", description: "Réponse garantie sous 24h par un expert", button: "Envoyer ma Demande", disclaimer: "En soumettant ce formulaire, vous acceptez d'être contacté par nos équipes." }
      }
    },
    devisPage: {
      title: "Demande de Devis",
      subtitle: "Gratuit & Personnalisé",
      description: "Recevez votre devis personnalisé en quelques minutes. Nos experts analysent vos besoins pour vous proposer la solution parfaite.",
      vehicleTypes: {
        title: "Type de Véhicule",
        subtitle: "Sélectionnez le type qui vous intéresse",
        popular: "Populaire",
        capacities: "Capacités disponibles",
        horseTrucks: "Camions Chevaux",
        horseVans: "Vans Chevaux",
        horseTrailers: "Remorques Chevaux"
      },
      form: {
        title: "Vos Informations",
        subtitle: "Pour recevoir votre devis personnalisé",
        personalInfo: { title: "Informations Personnelles", firstName: "Prénom", lastName: "Nom", email: "Email", phone: "Téléphone", region: "Région" },
        vehicleRequirements: { title: "Besoins Véhicule", vehicleType: "Type de véhicule", horseCapacity: "Capacité chevaux", condition: "État", budget: "Budget", selectVehicleType: "Sélectionnez un type", selectCapacity: "Nombre de chevaux", selectCondition: "Neuf ou occasion", selectBudget: "Votre budget" },
        usage: { title: "Utilisation", primaryUse: "Usage principal", equipment: "Équipements souhaités", selectUsage: "Sélectionnez l'usage" },
        additional: { title: "Informations Complémentaires", timeline: "Délai souhaité", message: "Message", selectTimeline: "Quand souhaitez-vous acheter ?", messagePlaceholder: "Décrivez vos besoins spécifiques..." },
        submit: { title: "Recevoir mon Devis", description: "Réponse garantie sous 24h par un expert", button: "Envoyer ma Demande", disclaimer: "En soumettant ce formulaire, vous acceptez d'être contacté par nos équipes." }
      }
    },
    trucksPage: {
      title: "Camions Chevaux",
      subtitle: "Professionnels",
      description: "Découvrez notre sélection de camions chevaux pour le transport professionnel et le haut niveau équestre.",
      filters: { allFilters: "Tous les filtres", capacity: "Capacité", price: "Prix", year: "Année", mileage: "Kilométrage", found: "camions trouvés" },
      vehicle: {
        horseTruck: "Camion Chevaux",
        features: {
          "pneumaticSuspension": "Suspension pneumatique",
          "airConditioning": "Climatisation",
          "sleepingCabin": "Cabine couchette",
          "automaticTransmission": "Boîte automatique",
          "integratedGPS": "GPS intégré",
          "grandComfortCabin": "Cabine grand confort",
          "manualTransmission": "Boîte manuelle",
          "blueEfficiency": "BlueEFFICIENCY",
          "automaticAirConditioning": "Climatisation automatique",
          "cruiseControl": "Régulateur de vitesse",
          "telematicSystem": "Système télématique",
          "dtiEngine": "Moteur DTI",
          "powerSteering": "Direction assistée",
          "electricWindows": "Vitres électriques",
          "centralLocking": "Verrouillage centralisé",
          "euro6": "Euro 6",
          "adBlueSystem": "Système AdBlue",
          "spaciousCabin": "Cabine spacieuse",
          "efficientEngine": "Moteur efficace",
          "easilyMaintained": "Facile d'entretien",
          "ergonomicCabin": "Cabine ergonomique"
        },
        badges: { "bestseller": "Best-seller", "premium": "Premium", "promotion": "Promotion", "certifiedUsed": "Occasion Certifiée", "recent": "Récent", "reliable": "Fiable" },
        specs: { horses: "chevaux", year: "Année", km: "km", capacity: "Capacité" },
        pricing: { save: "Économisez", financing: "Financement à partir de", perMonth: "/mois" },
        actions: { seeDetails: "Voir Détails", addToFavorites: "Ajouter aux favoris" }
      },
      cta: { title: "Besoin de Conseils sur nos Camions ?", description: "Nos experts vous accompagnent dans le choix du camion parfait.", getQuote: "Demander un Devis", contactExpert: "Contacter un Expert" }
    },
    aboutPage: {},
    contactPage: {
      hero: {
        badge: "Nous Contacter",
        title1: "Contactez",
        title2: "Nos Experts",
        description: "Notre équipe d'experts est à votre disposition pour vous accompagner dans votre projet de transport équestre."
      },
      methodsSection: {
        title1: "Comment Nous ",
        title2: "Contacter ?",
        subtitle: "Plusieurs moyens de communication s'offrent à vous"
      },
      contactMethods: {
        phone: {
          title: "Par Téléphone",
          subtitle: "06 12 34 56 78",
          description: "Appelez-nous directement pour un conseil immédiat",
          action: "tel:+33612345678",
          actionText: "Appeler Maintenant"
        },
        chat: {
          title: "Chat en Ligne",
          subtitle: "Disponible 9h-18h",
          description: "Discutez en direct avec un de nos conseillers",
          action: "#",
          actionText: "Démarrer le Chat"
        },
        appointment: {
          title: "Prendre RDV",
          subtitle: "Rendez-vous personnalisé",
          description: "Planifiez une visite ou un appel avec un expert",
          action: "#",
          actionText: "Réserver un Créneau"
        }
      },
      contactInfo: {
        title1: "Nos ",
        title2: "Coordonnées",
        subtitle: "Retrouvez toutes nos informations pratiques",
        address: {
          title: "Adresse",
          street: "123 Route des Chevaux\n75000 Paris",
          city: "France"
        },
        hours: {
          title: "Horaires d'ouverture",
          weekdays: "Lundi - Vendredi : 9h00 - 18h00",
          saturday: "Samedi : 9h00 - 17h00",
          sunday: "Dimanche : Fermé"
        },
        phone: {
          title: "Téléphone",
          number: "06 12 34 56 78"
        },
        email: {
          title: "Email",
          address: "contact@horsetruckgarage.fr"
        }
      },
      services: {
        title: "Nos Services",
        expertise: {
          title: "Conseil Expert",
          description: "Assistance personnalisée pour choisir votre véhicule",
          duration: "30 min"
        },
        financing: {
          title: "Solutions de Financement",
          description: "Étude gratuite de vos options de financement",
          duration: "45 min"
        },
        advice: {
          title: "Suivi Personnalisé",
          description: "Accompagnement de A à Z dans votre projet",
          duration: "1h"
        }
      },
      form: {
        title: "Nous Écrire",
        subtitle: "Envoyez-nous un message et nous vous répondrons rapidement",
        fields: {
          firstName: "Prénom",
          lastName: "Nom",
          email: "Email",
          phone: "Téléphone",
          vehicleType: "Type de véhicule",
          budget: "Budget",
          message: "Message"
        },
        required: "*",
        placeholders: {
          firstName: "Votre prénom",
          lastName: "Votre nom",
          email: "votre@email.com",
          phone: "06 12 34 56 78",
          vehicleTypeSelect: "Sélectionnez un type",
          budgetSelect: "Sélectionnez votre budget",
          message: "Décrivez-nous votre projet..."
        },
        vehicleTypes: {
          truck: "Camion chevaux",
          van: "Van chevaux",
          trailer: "Remorque chevaux",
          other: "Autre"
        },
        budgetRanges: {
          under30k: "Moins de 30 000€",
          range30to50k: "30 000€ - 50 000€",
          range50to80k: "50 000€ - 80 000€",
          over80k: "Plus de 80 000€"
        },
        submitInfo: "Réponse garantie sous 24h",
        submitSubtitle: "Notre équipe vous recontactera rapidement",
        submitButton: "Envoyer le Message"
      }
    },
    vansPage: {
      title: "Vans Chevaux",
      subtitle: "Compacts & Polyvalents",
      description: "Découvrez notre sélection de vans chevaux, parfaits pour le transport de 1 à 3 chevaux avec un permis B.",
      filters: {
        allFilters: "Tous les filtres",
        capacity: "Capacité",
        price: "Prix",
        year: "Année",
        mileage: "Kilométrage",
        found: "véhicules trouvés"
      },
      vehicle: {
        horseVan: "Van Chevaux",
        features: {
          "nonSlipFlooring": "Plancher antidérapant",
          "ledLighting": "Éclairage LED",
          "ventilation": "Ventilation",
          "handsFreeMobile": "Kit mains libres",
          "blueTecEngine": "Moteur BlueTEC",
          "automaticTransmission": "Boîte automatique",
          "reverseCamera": "Caméra de recul",
          "parkingSensors": "Radar de recul",
          "optimizedVolume": "Volume optimisé"
        },
        badges: {
          "bestseller": "Best-seller",
          "premium": "Premium",
          "promotion": "Promotion",
          "certifiedUsed": "Occasion Certifiée",
          "recent": "Récent",
          "reliable": "Fiable"
        },
        specs: {
          horses: "chevaux",
          year: "Année",
          km: "km",
          capacity: "Capacité"
        },
        pricing: {
          save: "Économisez",
          financing: "Financement à partir de",
          perMonth: "/mois"
        },
        actions: {
          seeDetails: "Voir Détails",
          addToFavorites: "Ajouter aux favoris"
        }
      },
      cta: {
        title: "Besoin de Conseils sur nos Vans ?",
        description: "Nos experts vous accompagnent dans le choix du van parfait.",
        getQuote: "Demander un Devis",
        contactExpert: "Contacter un Expert"
      }
    },
    footer: {
      newsletter: { title: "Newsletter", description: "Restez informé de nos actualités", placeholder: "Votre email", subscribe: "S'abonner" },
      company: { title: "Horse Truck Garage", description: "Votre spécialiste du transport équestre depuis plus de 15 ans." },
      contact: { title: "Contact", phone: "06 12 34 56 78", email: "contact@horsetruckgarage.fr", address: "123 Route des Chevaux, 75000 Paris", hours: "Lun-Ven 9h-18h" },
      vehicles: { title: "Véhicules", horseTrucks: "Camions Chevaux", horseVans: "Vans Chevaux", horseTrailers: "Remorques Chevaux", occasions: "Occasions" },
      company2: { title: "Entreprise", about: "À Propos", contact: "Contact", blog: "Blog", career: "Carrières" },
      followUs: "Suivez-nous",
      copyright: "© 2024 Horse Truck Garage. Tous droits réservés.",
      terms: "Conditions",
      privacy: "Confidentialité",
      sitemap: "Plan du site"
    },
    floating: { quote24h: "Devis 24h" },
    features: {},
    common: {}
  },
  en: {
    // ... similar structure for English with all required properties
    nav: { home: "Home", horseTrucks: "Horse Trucks", horseVans: "Horse Vans", horseTrailers: "Horse Trailers", about: "About", contact: "Contact", getQuote: "Get Quote", occasions: "Used Vehicles" },
    hero: { slide1: { subtitle: "Premium Equestrian Transport", title: "Exceptional Vehicles for Your Horses", description: "Discover our complete range of trucks, vans and trailers." }, slide2: { subtitle: "Comfort & Safety", title: "High-End Horse Trucks", description: "Spacious vehicles equipped with the latest technologies." }, slide3: { subtitle: "Optimal Mobility", title: "Versatile Horse Vans", description: "Practical and elegant solutions for transporting 1 to 3 horses." }, slide4: { subtitle: "Maximum Flexibility", title: "Professional Horse Trailers", description: "Wide range of trailers adapted to all your needs." }, slide5: { subtitle: "Certified Used Vehicles", title: "Guaranteed Used Vehicles", description: "Discover our rigorous selection of used vehicles." }, cta: "Get Free Quote" },
    categories: { title: "Our Vehicles", subtitle: "Equestrian", horseTrucks: { title: "Horse Trucks", description: "Spacious and comfortable vehicles", features: ["2-6 horse capacity", "Tack compartment"], from: "From", explore: "Explore Trucks" }, horseVans: { title: "Horse Vans", description: "Compact and versatile solutions", features: ["Compact format", "B license driving"], from: "From", explore: "Explore Vans" }, horseTrailers: { title: "Horse Trailers", description: "Robust and reliable trailers", features: ["1-4 horse places", "Non-slip flooring"], from: "From", explore: "Explore Trailers" }, ctaTitle: "Need help choosing?", ctaDescription: "Our experts guide you in choosing the perfect vehicle.", getFreeQuote: "Free Quote", makeAppointment: "Book Appointment", specialties: "Our Specialties", findPerfectVehicle: "Find the perfect vehicle", disciplineDescription: "We have the vehicle suited to your passion." },
    trust: { badge: "Trust", title: "Your Trusted Partner", subtitle: "Over 15 years of expertise in equestrian transport", description: "Since 2008, we have been supporting equestrian enthusiasts in their transport projects.", stats: { sold: { number: "2,500+", label: "Vehicles sold" }, satisfied: { number: "98%", label: "Satisfied customers" }, years: { number: "15", label: "Years of experience" }, locations: { number: "5", label: "Sales points" }, experience: { number: "15", label: "Years of experience" }, clients: { number: "2500", label: "Satisfied clients" }, satisfaction: { number: "98%", label: "Satisfaction rate" }, response: { number: "24h", label: "Response time" } }, cta: { title: "Ready to trust us?", description: "Contact our experts for a personalized consultation.", button: "Get Quote", getQuote: "Get Quote" }, reviews: [], partners: [], reviewsTitle: "Customer Reviews", reviewsDescription: "Discover testimonials from our customers", leaveReview: "Leave a review", partnersTitle: "Our Partners", partnersDescription: "Brands that trust us" },
    offers: { title: "Our Offers", subtitle: "Exclusive", tabs: { new: "New Vehicles", used: "Used", financing: "Financing" }, new: { badge: "New", title: "2024 New Vehicles", description: "Discover the latest innovations", features: ["Manufacturer warranty", "Cutting-edge technologies", "Customization"], cta: "See New Vehicles" }, used: { badge: "Certified", title: "Guaranteed Used", description: "Inspected and guaranteed vehicles", benefits: ["Technical inspection", "12-month warranty", "0% financing"], cta: "Browse Used Vehicles" }, financing: { badge: "Facility", title: "Financing Solutions", description: "Options adapted to your budget", details: ["Preferential rates", "Flexible down payment", "24h response"], cta: "Simulate Financing" } },
    quoteRequest: { title: "Quote Request", subtitle: "Free & Personalized", description: "Receive your personalized quote in minutes. Our experts analyze your needs to offer you the perfect solution.", vehicleTypes: { title: "Vehicle Type", subtitle: "Select the type that interests you", popular: "Popular", capacities: "Available capacities", horseTrucks: "Horse Trucks", horseVans: "Horse Vans", horseTrailers: "Horse Trailers" }, form: { title: "Your Information", subtitle: "To receive your personalized quote", personalInfo: { title: "Personal Information", firstName: "First Name", lastName: "Last Name", email: "Email", phone: "Phone", region: "Region" }, vehicleRequirements: { title: "Vehicle Requirements", vehicleType: "Vehicle type", horseCapacity: "Horse capacity", condition: "Condition", budget: "Budget", selectVehicleType: "Select a type", selectCapacity: "Number of horses", selectCondition: "New or used", selectBudget: "Your budget" }, usage: { title: "Usage", primaryUse: "Primary use", equipment: "Desired equipment", selectUsage: "Select usage" }, additional: { title: "Additional Information", timeline: "Desired timeline", message: "Message", selectTimeline: "When do you want to buy?", messagePlaceholder: "Describe your specific needs..." }, submit: { title: "Receive my Quote", description: "Response guaranteed within 24h by an expert", button: "Send my Request", disclaimer: "By submitting this form, you agree to be contacted by our teams." } } },
    devisPage: { title: "Quote Request", subtitle: "Free & Personalized", description: "Receive your personalized quote in minutes. Our experts analyze your needs to offer you the perfect solution.", vehicleTypes: { title: "Vehicle Type", subtitle: "Select the type that interests you", popular: "Popular", capacities: "Available capacities", horseTrucks: "Horse Trucks", horseVans: "Horse Vans", horseTrailers: "Horse Trailers" }, form: { title: "Your Information", subtitle: "To receive your personalized quote", personalInfo: { title: "Personal Information", firstName: "First Name", lastName: "Last Name", email: "Email", phone: "Phone", region: "Region" }, vehicleRequirements: { title: "Vehicle Requirements", vehicleType: "Vehicle type", horseCapacity: "Horse capacity", condition: "Condition", budget: "Budget", selectVehicleType: "Select a type", selectCapacity: "Number of horses", selectCondition: "New or used", selectBudget: "Your budget" }, usage: { title: "Usage", primaryUse: "Primary use", equipment: "Desired equipment", selectUsage: "Select usage" }, additional: { title: "Additional Information", timeline: "Desired timeline", message: "Message", selectTimeline: "When do you want to buy?", messagePlaceholder: "Describe your specific needs..." }, submit: { title: "Receive my Quote", description: "Response guaranteed within 24h by an expert", button: "Send my Request", disclaimer: "By submitting this form, you agree to be contacted by our teams." } } },
    trucksPage: { title: "Horse Trucks", subtitle: "Professional", description: "Discover our selection of horse trucks for professional transport and high-level equestrian.", filters: { allFilters: "All filters", capacity: "Capacity", price: "Price", year: "Year", mileage: "Mileage", found: "trucks found" }, vehicle: { horseTruck: "Horse Truck", features: { "pneumaticSuspension": "Air suspension", "airConditioning": "Air conditioning", "sleepingCabin": "Sleeping cabin", "automaticTransmission": "Automatic transmission", "integratedGPS": "Integrated GPS", "grandComfortCabin": "Grand comfort cabin", "manualTransmission": "Manual transmission", "blueEfficiency": "BlueEFFICIENCY", "automaticAirConditioning": "Automatic air conditioning", "cruiseControl": "Cruise control", "telematicSystem": "Telematic system", "dtiEngine": "DTI engine", "powerSteering": "Power steering", "electricWindows": "Electric windows", "centralLocking": "Central locking", "euro6": "Euro 6", "adBlueSystem": "AdBlue system", "spaciousCabin": "Spacious cabin", "efficientEngine": "Efficient engine", "easilyMaintained": "Easily maintained", "ergonomicCabin": "Ergonomic cabin" }, badges: { "bestseller": "Bestseller", "premium": "Premium", "promotion": "Promotion", "certifiedUsed": "Certified Used", "recent": "Recent", "reliable": "Reliable" }, specs: { horses: "horses", year: "Year", km: "km", capacity: "Capacity" }, pricing: { save: "Save", financing: "Financing available from", perMonth: "/month" }, actions: { seeDetails: "See Details", addToFavorites: "Add to favorites" } }, cta: { title: "Need Advice on our Trucks?", description: "Our experts guide you in choosing the perfect truck.", getQuote: "Get Free Quote", contactExpert: "Contact Expert" } },
    aboutPage: {},
    contactPage: { hero: { badge: "Contact Us", title1: "Contact", title2: "Our Experts", description: "Our team of experts is at your disposal to accompany you in your equestrian transport project." }, methodsSection: { title1: "How to ", title2: "Contact Us?", subtitle: "Several communication methods are available to you" }, contactMethods: { phone: { title: "By Phone", subtitle: "06 12 34 56 78", description: "Call us directly for immediate advice", action: "tel:+33612345678", actionText: "Call Now" }, chat: { title: "Online Chat", subtitle: "Available 9am-6pm", description: "Chat live with one of our advisors", action: "#", actionText: "Start Chat" }, appointment: { title: "Book Appointment", subtitle: "Personalized appointment", description: "Schedule a visit or call with an expert", action: "#", actionText: "Book a Slot" } }, contactInfo: { title1: "Our ", title2: "Contact Details", subtitle: "Find all our practical information", address: { title: "Address", street: "123 Route des Chevaux\n75000 Paris", city: "France" }, hours: { title: "Opening Hours", weekdays: "Monday - Friday: 9:00 AM - 6:00 PM", saturday: "Saturday: 9:00 AM - 5:00 PM", sunday: "Sunday: Closed" }, phone: { title: "Phone", number: "06 12 34 56 78" }, email: { title: "Email", address: "contact@horsetruckgarage.fr" } }, services: { title: "Our Services", expertise: { title: "Expert Advice", description: "Personalized assistance to choose your vehicle", duration: "30 min" }, financing: { title: "Financing Solutions", description: "Free study of your financing options", duration: "45 min" }, advice: { title: "Personalized Follow-up", description: "A to Z support for your project", duration: "1h" } }, form: { title: "Write to Us", subtitle: "Send us a message and we will respond quickly", fields: { firstName: "First Name", lastName: "Last Name", email: "Email", phone: "Phone", vehicleType: "Vehicle Type", budget: "Budget", message: "Message" }, required: "*", placeholders: { firstName: "Your first name", lastName: "Your last name", email: "your@email.com", phone: "06 12 34 56 78", vehicleTypeSelect: "Select a type", budgetSelect: "Select your budget", message: "Describe your project..." }, vehicleTypes: { truck: "Horse truck", van: "Horse van", trailer: "Horse trailer", other: "Other" }, budgetRanges: { under30k: "Under €30,000", range30to50k: "€30,000 - €50,000", range50to80k: "€50,000 - €80,000", over80k: "Over €80,000" }, submitInfo: "Response guaranteed within 24h", submitSubtitle: "Our team will contact you quickly", submitButton: "Send Message" } },
    vansPage: { title: "Horse Vans", subtitle: "Compact & Versatile", description: "Discover our selection of horse vans, perfect for transporting 1 to 3 horses with a B license.", filters: { allFilters: "All filters", capacity: "Capacity", price: "Price", year: "Year", mileage: "Mileage", found: "vehicles found" }, vehicle: { horseVan: "Horse Van", features: { "nonSlipFlooring": "Non-slip flooring", "ledLighting": "LED lighting", "ventilation": "Ventilation", "handsFreeMobile": "Hands-free kit", "blueTecEngine": "BlueTEC engine", "automaticTransmission": "Automatic transmission", "reverseCamera": "Reverse camera", "parkingSensors": "Parking sensors", "optimizedVolume": "Optimized volume" }, badges: { "bestseller": "Bestseller", "premium": "Premium", "promotion": "Promotion", "certifiedUsed": "Certified Used", "recent": "Recent", "reliable": "Reliable" }, specs: { horses: "horses", year: "Year", km: "km", capacity: "Capacity" }, pricing: { save: "Save", financing: "Financing available from", perMonth: "/month" }, actions: { seeDetails: "See Details", addToFavorites: "Add to favorites" } }, cta: { title: "Need Advice on our Vans?", description: "Our experts guide you in choosing the perfect van.", getQuote: "Get Free Quote", contactExpert: "Contact Expert" } },
    footer: { newsletter: { title: "Newsletter", description: "Stay informed about our news", placeholder: "Your email", subscribe: "Subscribe" }, company: { title: "Horse Truck Garage", description: "Your equestrian transport specialist for over 15 years." }, contact: { title: "Contact", phone: "06 12 34 56 78", email: "contact@horsetruckgarage.fr", address: "123 Route des Chevaux, 75000 Paris", hours: "Mon-Fri 9am-6pm" }, vehicles: { title: "Vehicles", horseTrucks: "Horse Trucks", horseVans: "Horse Vans", horseTrailers: "Horse Trailers", occasions: "Used Vehicles" }, company2: { title: "Company", about: "About", contact: "Contact", blog: "Blog", career: "Careers" }, followUs: "Follow us", copyright: "© 2024 Horse Truck Garage. All rights reserved.", terms: "Terms", privacy: "Privacy", sitemap: "Sitemap" },
    floating: { quote24h: "24h Quote" },
    features: {},
    common: {}
  },
  es: {
    // Spanish translations with all required properties
    nav: { home: "Inicio", horseTrucks: "Camiones para Caballos", horseVans: "Furgones para Caballos", horseTrailers: "Remolques para Caballos", about: "Acerca de", contact: "Contacto", getQuote: "Solicitar Presupuesto", occasions: "Vehículos Usados" },
    hero: { slide1: { subtitle: "Transporte Ecuestre Premium", title: "Vehículos Excepcionales para sus Caballos", description: "Descubra nuestra gama completa de camiones, furgones y remolques." }, slide2: { subtitle: "Comodidad y Seguridad", title: "Camiones para Caballos de Alta Gama", description: "Vehículos espaciosos equipados con las últimas tecnologías." }, slide3: { subtitle: "Movilidad Óptima", title: "Furgones para Caballos Versátiles", description: "Soluciones prácticas y elegantes para el transporte de 1 a 3 caballos." }, slide4: { subtitle: "Flexibilidad Máxima", title: "Remolques para Caballos Profesionales", description: "Amplia gama de remolques adaptados a todas sus necesidades." }, slide5: { subtitle: "Ocasiones Certificadas", title: "Vehículos de Ocasión Garantizados", description: "Descubra nuestra rigurosa selección de vehículos de ocasión." }, cta: "Solicitar Presupuesto Gratuito" },
    categories: { title: "Nuestros Vehículos", subtitle: "Ecuestres", horseTrucks: { title: "Camiones para Caballos", description: "Vehículos espaciosos y cómodos", features: ["Capacidad 2-6 caballos", "Compartimento para aperos"], from: "Desde", explore: "Explorar Camiones" }, horseVans: { title: "Furgones para Caballos", description: "Soluciones compactas y versátiles", features: ["Formato compacto", "Conducción con carnet B"], from: "Desde", explore: "Explorar Furgones" }, horseTrailers: { title: "Remolques para Caballos", description: "Remolques robustos y fiables", features: ["1-4 plazas para caballos", "Suelo antideslizante"], from: "Desde", explore: "Explorar Remolques" }, ctaTitle: "¿Necesita ayuda para elegir?", ctaDescription: "Nuestros expertos le guían en la elección del vehículo perfecto.", getFreeQuote: "Presupuesto Gratuito", makeAppointment: "Reservar Cita", specialties: "Nuestras Especialidades", findPerfectVehicle: "Encuentre el vehículo perfecto", disciplineDescription: "Tenemos el vehículo adaptado a su pasión." },
    trust: { badge: "Confianza", title: "Su Socio de Confianza", subtitle: "Más de 15 años de experiencia en transporte ecuestre", description: "Desde 2008, acompañamos a los entusiastas ecuestres en sus proyectos de transporte.", stats: { sold: { number: "2,500+", label: "Vehículos vendidos" }, satisfied: { number: "98%", label: "Clientes satisfechos" }, years: { number: "15", label: "Años de experiencia" }, locations: { number: "5", label: "Puntos de venta" }, experience: { number: "15", label: "Años de experiencia" }, clients: { number: "2500", label: "Clientes satisfechos" }, satisfaction: { number: "98%", label: "Tasa de satisfacción" }, response: { number: "24h", label: "Tiempo de respuesta" } }, cta: { title: "¿Listo para confiar en nosotros?", description: "Contacte a nuestros expertos para una consulta personalizada.", button: "Solicitar Presupuesto", getQuote: "Solicitar Presupuesto" }, reviews: [], partners: [], reviewsTitle: "Reseñas de Clientes", reviewsDescription: "Descubra testimonios de nuestros clientes", leaveReview: "Dejar una reseña", partnersTitle: "Nuestros Socios", partnersDescription: "Marcas que confían en nosotros" },
    offers: { title: "Nuestras Ofertas", subtitle: "Exclusivas", tabs: { new: "Vehículos Nuevos", used: "Ocasión", financing: "Financiación" }, new: { badge: "Novedad", title: "Vehículos Nuevos 2024", description: "Descubra las últimas innovaciones", features: ["Garantía del fabricante", "Tecnologías de vanguardia", "Personalización"], cta: "Ver Novedades" }, used: { badge: "Certificado", title: "Ocasiones Garantizadas", description: "Vehículos inspeccionados y garantizados", benefits: ["Control técnico", "Garantía 12 meses", "Financiación 0%"], cta: "Explorar Ocasiones" }, financing: { badge: "Facilidad", title: "Soluciones de Financiación", description: "Opciones adaptadas a su presupuesto", details: ["Tipos preferenciales", "Entrada flexible", "Respuesta 24h"], cta: "Simular Financiación" } },
    quoteRequest: { title: "Solicitud de Presupuesto", subtitle: "Gratuito y Personalizado", description: "Reciba su presupuesto personalizado en minutos. Nuestros expertos analizan sus necesidades para ofrecerle la solución perfecta.", vehicleTypes: { title: "Tipo de Vehículo", subtitle: "Seleccione el tipo que le interesa", popular: "Popular", capacities: "Capacidades disponibles", horseTrucks: "Camiones para Caballos", horseVans: "Furgones para Caballos", horseTrailers: "Remolques para Caballos" }, form: { title: "Su Información", subtitle: "Para recibir su presupuesto personalizado", personalInfo: { title: "Información Personal", firstName: "Nombre", lastName: "Apellidos", email: "Email", phone: "Teléfono", region: "Región" }, vehicleRequirements: { title: "Necesidades del Vehículo", vehicleType: "Tipo de vehículo", horseCapacity: "Capacidad caballos", condition: "Estado", budget: "Presupuesto", selectVehicleType: "Seleccione un tipo", selectCapacity: "Número de caballos", selectCondition: "Nuevo o usado", selectBudget: "Su presupuesto" }, usage: { title: "Uso", primaryUse: "Uso principal", equipment: "Equipamiento deseado", selectUsage: "Seleccione el uso" }, additional: { title: "Información Adicional", timeline: "Plazo deseado", message: "Mensaje", selectTimeline: "¿Cuándo desea comprar?", messagePlaceholder: "Describa sus necesidades específicas..." }, submit: { title: "Recibir mi Presupuesto", description: "Respuesta garantizada en 24h por un experto", button: "Enviar mi Solicitud", disclaimer: "Al enviar este formulario, acepta ser contactado por nuestros equipos." } } },
    devisPage: { title: "Solicitud de Presupuesto", subtitle: "Gratuito y Personalizado", description: "Reciba su presupuesto personalizado en minutos. Nuestros expertos analizan sus necesidades para ofrecerle la solución perfecta.", vehicleTypes: { title: "Tipo de Vehículo", subtitle: "Seleccione el tipo que le interesa", popular: "Popular", capacities: "Capacidades disponibles", horseTrucks: "Camiones para Caballos", horseVans: "Furgones para Caballos", horseTrailers: "Remolques para Caballos" }, form: { title: "Su Información", subtitle: "Para recibir su presupuesto personalizado", personalInfo: { title: "Información Personal", firstName: "Nombre", lastName: "Apellidos", email: "Email", phone: "Teléfono", region: "Región" }, vehicleRequirements: { title: "Necesidades del Vehículo", vehicleType: "Tipo de vehículo", horseCapacity: "Capacidad caballos", condition: "Estado", budget: "Presupuesto", selectVehicleType: "Seleccione un tipo", selectCapacity: "Número de caballos", selectCondition: "Nuevo o usado", selectBudget: "Su presupuesto" }, usage: { title: "Uso", primaryUse: "Uso principal", equipment: "Equipamiento deseado", selectUsage: "Seleccione el uso" }, additional: { title: "Información Adicional", timeline: "Plazo deseado", message: "Mensaje", selectTimeline: "¿Cuándo desea comprar?", messagePlaceholder: "Describa sus necesidades específicas..." }, submit: { title: "Recibir mi Presupuesto", description: "Respuesta garantizada en 24h por un experto", button: "Enviar mi Solicitud", disclaimer: "Al enviar este formulario, acepta ser contactado por nuestros equipos." } } },
    trucksPage: { title: "Camiones para Caballos", subtitle: "Profesionales", description: "Descubra nuestra selección de camiones para caballos para transporte profesional y ecuestre de alto nivel.", filters: { allFilters: "Todos los filtros", capacity: "Capacidad", price: "Precio", year: "Año", mileage: "Kilometraje", found: "camiones encontrados" }, vehicle: { horseTruck: "Camión para Caballos", features: {}, badges: { "bestseller": "Más vendido", "premium": "Premium", "promotion": "Promoción", "certifiedUsed": "Ocasión Certificada", "recent": "Reciente", "reliable": "Fiable" }, specs: { horses: "caballos", year: "Año", km: "km", capacity: "Capacidad" }, pricing: { save: "Ahorrar", financing: "Financiación desde", perMonth: "/mes" }, actions: { seeDetails: "Ver Detalles", addToFavorites: "Añadir a favoritos" } }, cta: { title: "¿Necesita Consejos sobre nuestros Camiones?", description: "Nuestros expertos le acompañan en la elección del camión perfecto.", getQuote: "Solicitar Presupuesto", contactExpert: "Contactar Experto" } },
    aboutPage: {},
    contactPage: { hero: { badge: "Contáctenos", title1: "Contacte", title2: "Nuestros Expertos", description: "Nuestro equipo de expertos está a su disposición para acompañarle en su proyecto de transporte ecuestre." }, methodsSection: { title1: "¿Cómo ", title2: "Contactarnos?", subtitle: "Varios métodos de comunicación están disponibles para usted" }, contactMethods: { phone: { title: "Por Teléfono", subtitle: "06 12 34 56 78", description: "Llámenos directamente para un consejo inmediato", action: "tel:+33612345678", actionText: "Llamar Ahora" }, chat: { title: "Chat en Línea", subtitle: "Disponible 9h-18h", description: "Chatea en directo con uno de nuestros asesores", action: "#", actionText: "Iniciar Chat" }, appointment: { title: "Reservar Cita", subtitle: "Cita personalizada", description: "Planifique una visita o llamada con un experto", action: "#", actionText: "Reservar Horario" } }, contactInfo: { title1: "Nuestros ", title2: "Datos de Contacto", subtitle: "Encuentre toda nuestra información práctica", address: { title: "Dirección", street: "123 Route des Chevaux\n75000 París", city: "Francia" }, hours: { title: "Horarios de apertura", weekdays: "Lunes - Viernes: 9:00 - 18:00", saturday: "Sábado: 9:00 - 17:00", sunday: "Domingo: Cerrado" }, phone: { title: "Teléfono", number: "06 12 34 56 78" }, email: { title: "Email", address: "contact@horsetruckgarage.fr" } }, services: { title: "Nuestros Servicios", expertise: { title: "Consejo Experto", description: "Asistencia personalizada para elegir su vehículo", duration: "30 min" }, financing: { title: "Soluciones de Financiación", description: "Estudio gratuito de sus opciones de financiación", duration: "45 min" }, advice: { title: "Seguimiento Personalizado", description: "Acompañamiento de A a Z en su proyecto", duration: "1h" } }, form: { title: "Escríbanos", subtitle: "Envíenos un mensaje y le responderemos rápidamente", fields: { firstName: "Nombre", lastName: "Apellidos", email: "Email", phone: "Teléfono", vehicleType: "Tipo de vehículo", budget: "Presupuesto", message: "Mensaje" }, required: "*", placeholders: { firstName: "Su nombre", lastName: "Sus apellidos", email: "su@email.com", phone: "06 12 34 56 78", vehicleTypeSelect: "Seleccione un tipo", budgetSelect: "Seleccione su presupuesto", message: "Describa su proyecto..." }, vehicleTypes: { truck: "Camión para caballos", van: "Furgón para caballos", trailer: "Remolque para caballos", other: "Otro" }, budgetRanges: { under30k: "Menos de 30.000€", range30to50k: "30.000€ - 50.000€", range50to80k: "50.000€ - 80.000€", over80k: "Más de 80.000€" }, submitInfo: "Respuesta garantizada en 24h", submitSubtitle: "Nuestro equipo le contactará rápidamente", submitButton: "Enviar Mensaje" } },
    vansPage: { title: "Furgones para Caballos", subtitle: "Compactos y Versátiles", description: "Descubra nuestra selección de furgones para caballos, perfectos para el transporte de 1 a 3 caballos con carnet B.", filters: { allFilters: "Todos los filtros", capacity: "Capacidad", price: "Precio", year: "Año", mileage: "Kilometraje", found: "vehículos encontrados" }, vehicle: { horseVan: "Furgón para Caballos", features: {}, badges: { "bestseller": "Más vendido", "premium": "Premium", "promotion": "Promoción", "certifiedUsed": "Ocasión Certificada", "recent": "Reciente", "reliable": "Fiable" }, specs: { horses: "caballos", year: "Año", km: "km", capacity: "Capacidad" }, pricing: { save: "Ahorrar", financing: "Financiación desde", perMonth: "/mes" }, actions: { seeDetails: "Ver Detalles", addToFavorites: "Añadir a favoritos" } }, cta: { title: "¿Necesita Consejos sobre nuestros Furgones?", description: "Nuestros expertos le acompañan en la elección del furgón perfecto.", getQuote: "Solicitar Presupuesto", contactExpert: "Contactar Experto" } },
    footer: { newsletter: { title: "Newsletter", description: "Manténgase informado de nuestras noticias", placeholder: "Su email", subscribe: "Suscribirse" }, company: { title: "Horse Truck Garage", description: "Su especialista en transporte ecuestre durante más de 15 años." }, contact: { title: "Contacto", phone: "06 12 34 56 78", email: "contact@horsetruckgarage.fr", address: "123 Route des Chevaux, 75000 París", hours: "Lun-Vie 9h-18h" }, vehicles: { title: "Vehículos", horseTrucks: "Camiones para Caballos", horseVans: "Furgones para Caballos", horseTrailers: "Remolques para Caballos", occasions: "Ocasiones" }, company2: { title: "Empresa", about: "Acerca de", contact: "Contacto", blog: "Blog", career: "Carreras" }, followUs: "Síguenos", copyright: "© 2024 Horse Truck Garage. Todos los derechos reservados.", terms: "Condiciones", privacy: "Privacidad", sitemap: "Mapa del sitio" },
    floating: { quote24h: "Presupuesto 24h" },
    features: {},
    common: {}
  },
  de: {
    // German translations with all required properties
    nav: { home: "Startseite", horseTrucks: "Pferdetransporter", horseVans: "Pferde-Vans", horseTrailers: "Pferdeanhänger", about: "Über uns", contact: "Kontakt", getQuote: "Angebot anfordern", occasions: "Gebrauchtwagen" },
    hero: { slide1: { subtitle: "Premium Pferdetransport", title: "Außergewöhnliche Fahrzeuge für Ihre Pferde", description: "Entdecken Sie unser komplettes Sortiment an LKWs, Vans und Anhängern." }, slide2: { subtitle: "Komfort & Sicherheit", title: "High-End Pferdetransporter", description: "Geräumige Fahrzeuge mit neuester Technologie ausgestattet." }, slide3: { subtitle: "Optimale Mobilität", title: "Vielseitige Pferde-Vans", description: "Praktische und elegante Lösungen für den Transport von 1 bis 3 Pferden." }, slide4: { subtitle: "Maximale Flexibilität", title: "Professionelle Pferdeanhänger", description: "Breite Palette von Anhängern für alle Ihre Bedürfnisse." }, slide5: { subtitle: "Zertifizierte Gebrauchtwagen", title: "Garantierte Gebrauchtwagen", description: "Entdecken Sie unsere sorgfältige Auswahl an Gebrauchtwagen." }, cta: "Kostenloses Angebot erhalten" },
    categories: { title: "Unsere Fahrzeuge", subtitle: "Reitsport", horseTrucks: { title: "Pferdetransporter", description: "Geräumige und komfortable Fahrzeuge", features: ["2-6 Pferde Kapazität", "Sattelkammer"], from: "Ab", explore: "LKWs erkunden" }, horseVans: { title: "Pferde-Vans", description: "Kompakte und vielseitige Lösungen", features: ["Kompaktes Format", "B-Führerschein"], from: "Ab", explore: "Vans erkunden" }, horseTrailers: { title: "Pferdeanhänger", description: "Robuste und zuverlässige Anhänger", features: ["1-4 Pferdeplätze", "Rutschfester Boden"], from: "Ab", explore: "Anhänger erkunden" }, ctaTitle: "Brauchen Sie Hilfe bei der Auswahl?", ctaDescription: "Unsere Experten begleiten Sie bei der Wahl des perfekten Fahrzeugs.", getFreeQuote: "Kostenloses Angebot", makeAppointment: "Termin vereinbaren", specialties: "Unsere Spezialitäten", findPerfectVehicle: "Finden Sie das perfekte Fahrzeug", disciplineDescription: "Wir haben das Fahrzeug für Ihre Leidenschaft." },
    trust: { badge: "Vertrauen", title: "Ihr vertrauensvoller Partner", subtitle: "Über 15 Jahre Expertise im Pferdetransport", description: "Seit 2008 begleiten wir Reitsport-Enthusiasten bei ihren Transportprojekten.", stats: { sold: { number: "2,500+", label: "Verkaufte Fahrzeuge" }, satisfied: { number: "98%", label: "Zufriedene Kunden" }, years: { number: "15", label: "Jahre Erfahrung" }, locations: { number: "5", label: "Verkaufsstellen" }, experience: { number: "15", label: "Jahre Erfahrung" }, clients: { number: "2500", label: "Zufriedene Kunden" }, satisfaction: { number: "98%", label: "Zufriedenheitsrate" }, response: { number: "24h", label: "Antwortzeit" } }, cta: { title: "Bereit, uns zu vertrauen?", description: "Kontaktieren Sie unsere Experten für eine persönliche Beratung.", button: "Angebot anfordern", getQuote: "Angebot anfordern" }, reviews: [], partners: [], reviewsTitle: "Kundenbewertungen", reviewsDescription: "Entdecken Sie Testimonials unserer Kunden", leaveReview: "Bewertung hinterlassen", partnersTitle: "Unsere Partner", partnersDescription: "Marken, die uns vertrauen" },
    offers: { title: "Unsere Angebote", subtitle: "Exklusiv", tabs: { new: "Neue Fahrzeuge", used: "Gebraucht", financing: "Finanzierung" }, new: { badge: "Neu", title: "2024 Neue Fahrzeuge", description: "Entdecken Sie die neuesten Innovationen", features: ["Herstellergarantie", "Modernste Technologien", "Anpassung"], cta: "Neue Fahrzeuge ansehen" }, used: { badge: "Zertifiziert", title: "Garantierte Gebrauchtwagen", description: "Geprüfte und garantierte Fahrzeuge", benefits: ["Technische Prüfung", "12 Monate Garantie", "0% Finanzierung"], cta: "Gebrauchtwagen durchsuchen" }, financing: { badge: "Erleichterung", title: "Finanzierungslösungen", description: "An Ihr Budget angepasste Optionen", details: ["Vorzugszinsen", "Flexible Anzahlung", "24h Antwort"], cta: "Finanzierung simulieren" } },
    quoteRequest: { title: "Angebotsanfrage", subtitle: "Kostenlos & Personalisiert", description: "Erhalten Sie Ihr personalisiertes Angebot in Minuten. Unsere Experten analysieren Ihre Bedürfnisse, um Ihnen die perfekte Lösung anzubieten.", vehicleTypes: { title: "Fahrzeugtyp", subtitle: "Wählen Sie den Typ, der Sie interessiert", popular: "Beliebt", capacities: "Verfügbare Kapazitäten", horseTrucks: "Pferdetransporter", horseVans: "Pferde-Vans", horseTrailers: "Pferdeanhänger" }, form: { title: "Ihre Informationen", subtitle: "Um Ihr personalisiertes Angebot zu erhalten", personalInfo: { title: "Persönliche Informationen", firstName: "Vorname", lastName: "Nachname", email: "E-Mail", phone: "Telefon", region: "Region" }, vehicleRequirements: { title: "Fahrzeuganforderungen", vehicleType: "Fahrzeugtyp", horseCapacity: "Pferdekapazität", condition: "Zustand", budget: "Budget", selectVehicleType: "Typ auswählen", selectCapacity: "Anzahl Pferde", selectCondition: "Neu oder gebraucht", selectBudget: "Ihr Budget" }, usage: { title: "Verwendung", primaryUse: "Hauptverwendung", equipment: "Gewünschte Ausstattung", selectUsage: "Verwendung auswählen" }, additional: { title: "Zusätzliche Informationen", timeline: "Gewünschter Zeitrahmen", message: "Nachricht", selectTimeline: "Wann möchten Sie kaufen?", messagePlaceholder: "Beschreiben Sie Ihre spezifischen Bedürfnisse..." }, submit: { title: "Mein Angebot erhalten", description: "Antwort garantiert innerhalb von 24h durch einen Experten", button: "Meine Anfrage senden", disclaimer: "Durch das Absenden dieses Formulars stimmen Sie zu, von unseren Teams kontaktiert zu werden." } } },
    devisPage: { title: "Angebotsanfrage", subtitle: "Kostenlos & Personalisiert", description: "Erhalten Sie Ihr personalisiertes Angebot in Minuten. Unsere Experten analysieren Ihre Bedürfnisse, um Ihnen die perfekte Lösung anzubieten.", vehicleTypes: { title: "Fahrzeugtyp", subtitle: "Wählen Sie den Typ, der Sie interessiert", popular: "Beliebt", capacities: "Verfügbare Kapazitäten", horseTrucks: "Pferdetransporter", horseVans: "Pferde-Vans", horseTrailers: "Pferdeanhänger" }, form: { title: "Ihre Informationen", subtitle: "Um Ihr personalisiertes Angebot zu erhalten", personalInfo: { title: "Persönliche Informationen", firstName: "Vorname", lastName: "Nachname", email: "E-Mail", phone: "Telefon", region: "Region" }, vehicleRequirements: { title: "Fahrzeuganforderungen", vehicleType: "Fahrzeugtyp", horseCapacity: "Pferdekapazität", condition: "Zustand", budget: "Budget", selectVehicleType: "Typ auswählen", selectCapacity: "Anzahl Pferde", selectCondition: "Neu oder gebraucht", selectBudget: "Ihr Budget" }, usage: { title: "Verwendung", primaryUse: "Hauptverwendung", equipment: "Gewünschte Ausstattung", selectUsage: "Verwendung auswählen" }, additional: { title: "Zusätzliche Informationen", timeline: "Gewünschter Zeitrahmen", message: "Nachricht", selectTimeline: "Wann möchten Sie kaufen?", messagePlaceholder: "Beschreiben Sie Ihre spezifischen Bedürfnisse..." }, submit: { title: "Mein Angebot erhalten", description: "Antwort garantiert innerhalb von 24h durch einen Experten", button: "Meine Anfrage senden", disclaimer: "Durch das Absenden dieses Formulars stimmen Sie zu, von unseren Teams kontaktiert zu werden." } } },
    trucksPage: { title: "Pferdetransporter", subtitle: "Professionell", description: "Entdecken Sie unsere Auswahl an Pferdetransportern für professionellen Transport und Hochleistungsreitsport.", filters: { allFilters: "Alle Filter", capacity: "Kapazität", price: "Preis", year: "Jahr", mileage: "Kilometerstand", found: "LKWs gefunden" }, vehicle: { horseTruck: "Pferdetransporter", features: {}, badges: { "bestseller": "Bestseller", "premium": "Premium", "promotion": "Aktion", "certifiedUsed": "Zertifiziert Gebraucht", "recent": "Aktuell", "reliable": "Zuverlässig" }, specs: { horses: "Pferde", year: "Jahr", km: "km", capacity: "Kapazität" }, pricing: { save: "Sparen", financing: "Finanzierung ab", perMonth: "/Monat" }, actions: { seeDetails: "Details ansehen", addToFavorites: "Zu Favoriten hinzufügen" } }, cta: { title: "Brauchen Sie Beratung zu unseren LKWs?", description: "Unsere Experten begleiten Sie bei der Wahl des perfekten LKWs.", getQuote: "Kostenloses Angebot", contactExpert: "Experten kontaktieren" } },
    aboutPage: {},
    contactPage: { hero: { badge: "Kontaktieren Sie uns", title1: "Kontaktieren Sie", title2: "Unsere Experten", description: "Unser Expertenteam steht Ihnen zur Verfügung, um Sie bei Ihrem Pferdetransportprojekt zu begleiten." }, methodsSection: { title1: "Wie können Sie ", title2: "uns kontaktieren?", subtitle: "Verschiedene Kommunikationswege stehen Ihnen zur Verfügung" }, contactMethods: { phone: { title: "Per Telefon", subtitle: "06 12 34 56 78", description: "Rufen Sie uns direkt für sofortige Beratung an", action: "tel:+33612345678", actionText: "Jetzt anrufen" }, chat: { title: "Online-Chat", subtitle: "Verfügbar 9-18 Uhr", description: "Chatten Sie live mit einem unserer Berater", action: "#", actionText: "Chat starten" }, appointment: { title: "Termin buchen", subtitle: "Persönlicher Termin", description: "Planen Sie einen Besuch oder Anruf mit einem Experten", action: "#", actionText: "Zeitslot buchen" } }, contactInfo: { title1: "Unsere ", title2: "Kontaktdaten", subtitle: "Finden Sie alle unsere praktischen Informationen", address: { title: "Adresse", street: "123 Route des Chevaux\n75000 Paris", city: "Frankreich" }, hours: { title: "Öffnungszeiten", weekdays: "Montag - Freitag: 9:00 - 18:00", saturday: "Samstag: 9:00 - 17:00", sunday: "Sonntag: Geschlossen" }, phone: { title: "Telefon", number: "06 12 34 56 78" }, email: { title: "E-Mail", address: "contact@horsetruckgarage.fr" } }, services: { title: "Unsere Dienstleistungen", expertise: { title: "Expertenberatung", description: "Persönliche Unterstützung bei der Fahrzeugwahl", duration: "30 Min" }, financing: { title: "Finanzierungslösungen", description: "Kostenlose Prüfung Ihrer Finanzierungsoptionen", duration: "45 Min" }, advice: { title: "Persönliche Betreuung", description: "Von A bis Z Unterstützung für Ihr Projekt", duration: "1h" } }, form: { title: "Schreiben Sie uns", subtitle: "Senden Sie uns eine Nachricht und wir antworten schnell", fields: { firstName: "Vorname", lastName: "Nachname", email: "E-Mail", phone: "Telefon", vehicleType: "Fahrzeugtyp", budget: "Budget", message: "Nachricht" }, required: "*", placeholders: { firstName: "Ihr Vorname", lastName: "Ihr Nachname", email: "ihre@email.com", phone: "06 12 34 56 78", vehicleTypeSelect: "Typ auswählen", budgetSelect: "Ihr Budget auswählen", message: "Beschreiben Sie Ihr Projekt..." }, vehicleTypes: { truck: "Pferdetransporter", van: "Pferde-Van", trailer: "Pferdeanhänger", other: "Andere" }, budgetRanges: { under30k: "Unter 30.000€", range30to50k: "30.000€ - 50.000€", range50to80k: "50.000€ - 80.000€", over80k: "Über 80.000€" }, submitInfo: "Antwort garantiert innerhalb 24h", submitSubtitle: "Unser Team wird Sie schnell kontaktieren", submitButton: "Nachricht senden" } },
    vansPage: { title: "Pferde-Vans", subtitle: "Kompakt & Vielseitig", description: "Entdecken Sie unsere Auswahl an Pferde-Vans, perfekt für den Transport von 1 bis 3 Pferden mit B-Führerschein.", filters: { allFilters: "Alle Filter", capacity: "Kapazität", price: "Preis", year: "Jahr", mileage: "Kilometerstand", found: "Fahrzeuge gefunden" }, vehicle: { horseVan: "Pferde-Van", features: {}, badges: { "bestseller": "Bestseller", "premium": "Premium", "promotion": "Aktion", "certifiedUsed": "Zertifiziert Gebraucht", "recent": "Aktuell", "reliable": "Zuverlässig" }, specs: { horses: "Pferde", year: "Jahr", km: "km", capacity: "Kapazität" }, pricing: { save: "Sparen", financing: "Finanzierung ab", perMonth: "/Monat" }, actions: { seeDetails: "Details ansehen", addToFavorites: "Zu Favoriten hinzufügen" } }, cta: { title: "Brauchen Sie Beratung zu unseren Vans?", description: "Unsere Experten begleiten Sie bei der Wahl des perfekten Vans.", getQuote: "Kostenloses Angebot", contactExpert: "Experten kontaktieren" } },
    footer: { newsletter: { title: "Newsletter", description: "Bleiben Sie über unsere Neuigkeiten informiert", placeholder: "Ihre E-Mail", subscribe: "Abonnieren" }, company: { title: "Horse Truck Garage", description: "Ihr Spezialist für Pferdetransport seit über 15 Jahren." }, contact: { title: "Kontakt", phone: "06 12 34 56 78", email: "contact@horsetruckgarage.fr", address: "123 Route des Chevaux, 75000 Paris", hours: "Mo-Fr 9-18 Uhr" }, vehicles: { title: "Fahrzeuge", horseTrucks: "Pferdetransporter", horseVans: "Pferde-Vans", horseTrailers: "Pferdeanhänger", occasions: "Gebrauchtwagen" }, company2: { title: "Unternehmen", about: "Über uns", contact: "Kontakt", blog: "Blog", career: "Karriere" }, followUs: "Folgen Sie uns", copyright: "© 2024 Horse Truck Garage. Alle Rechte vorbehalten.", terms: "Bedingungen", privacy: "Datenschutz", sitemap: "Sitemap" },
    floating: { quote24h: "24h Angebot" },
    features: {},
    common: {}
  }
};

export const useTranslation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const getCurrentLanguage = (): Language => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    const langFromPath = pathSegments[0];
    
    if (langFromPath && ['fr', 'en', 'es', 'de'].includes(langFromPath)) {
      return langFromPath as Language;
    }
    
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && ['fr', 'en', 'es', 'de'].includes(savedLang)) {
      return savedLang;
    }
    
    const browserLang = navigator.language.split('-')[0] as Language;
    if (['fr', 'en', 'es', 'de'].includes(browserLang)) {
      return browserLang;
    }
    
    return 'fr';
  };

  const [language, setLanguageState] = useState<Language>(getCurrentLanguage);

  const changeLanguage = (newLang: Language) => {
    const currentPath = location.pathname;
    const pathSegments = currentPath.split('/').filter(Boolean);
    
    // Remove current language if it exists
    if (['fr', 'en', 'es', 'de'].includes(pathSegments[0])) {
      pathSegments.shift();
    }
    
    // Add new language
    const newPath = `/${newLang}${pathSegments.length > 0 ? `/${pathSegments.join('/')}` : ''}`;
    
    setLanguageState(newLang);
    localStorage.setItem('language', newLang);
    navigate(newPath);
  };

  const t = translations[language];

  return {
    language,
    setLanguage: changeLanguage,
    t
  };
};