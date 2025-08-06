import { createContext, useContext } from 'react';

export type Language = 'fr' | 'en' | 'es' | 'de';

export interface Translations {
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
    cta: string;
  };
  categories: {
    title: string;
    subtitle: string;
    horseTrucks: {
      title: string;
      description: string;
      features: string[];
      startingPrice: string;
      from: string;
      explore: string;
    };
    horseVans: {
      title: string;
      description: string;
      features: string[];
      startingPrice: string;
      from: string;
      explore: string;
    };
    horseTrailers: {
      title: string;
      description: string;
      features: string[];
      startingPrice: string;
      from: string;
      explore: string;
    };
    cta: string;
    specialties: string;
    disciplineDescription: string;
    ctaTitle: string;
    ctaDescription: string;
    getFreeQuote: string;
    makeAppointment: string;
  };
  offers: {
    title: string;
    subtitle: string;
    newVehicles: {
      title: string;
      description: string;
      benefits: string[];
    };
    usedVehicles: {
      title: string;
      description: string;
      benefits: string[];
    };
    accessories: {
      title: string;
      description: string;
      benefits: string[];
    };
    cta: string;
  };
  trust: {
    title: string;
    subtitle: string;
    features: {
      expertise: {
        title: string;
        description: string;
      };
      quality: {
        title: string;
        description: string;
      };
      service: {
        title: string;
        description: string;
      };
      warranty: {
        title: string;
        description: string;
      };
    };
  };
  contact: {
    title: string;
    subtitle: string;
    info: {
      phone: string;
      email: string;
      address: string;
      hours: string;
    };
    form: {
      title: string;
      subtitle: string;
      fields: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        subject: string;
        message: string;
      };
      placeholders: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        subject: string;
        message: string;
      };
      submit: string;
      required: string;
    };
  };
  footer: {
    company: {
      title: string;
      description: string;
    };
    quickLinks: {
      title: string;
      home: string;
      about: string;
      contact: string;
      occasions: string;
    };
    products: {
      title: string;
      horseTrucks: string;
      horseVans: string;
      horseTrailers: string;
      accessories: string;
    };
    contact: {
      title: string;
      phone: string;
      email: string;
      address: string;
    };
    copyright: string;
  };
  about: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
    };
    story: {
      title: string;
      description: string;
    };
    values: {
      title: string;
      expertise: {
        title: string;
        description: string;
      };
      quality: {
        title: string;
        description: string;
      };
      service: {
        title: string;
        description: string;
      };
    };
    team: {
      title: string;
      description: string;
    };
  };
  aboutPage: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
    };
    story: {
      title: string;
      description: string;
    };
    values: {
      title: string;
      stats: {
        experience: string;
        vehicles: string;
        satisfaction: string;
        warranty: string;
      };
      passion: {
        title: string;
        description: string;
      };
      excellence: {
        title: string;
        description: string;
      };
      support: {
        title: string;
        description: string;
      };
    };
    team: {
      title: string;
      description: string;
      director: {
        name: string;
        role: string;
        description: string;
      };
    };
  };
  trucksPage: any; // Fallback
  contactPage: any; // Fallback
  vansPage: any; // Fallback
  common: {
    learnMore: string;
    getQuote: string;
    contact: string;
    phone: string;
    email: string;
    address: string;
    readMore: string;
    previous: string;
    next: string;
    close: string;
    open: string;
    menu: string;
    loading: string;
    error: string;
    success: string;
    required: string;
    optional: string;
    submit: string;
    cancel: string;
    save: string;
    delete: string;
    edit: string;
    add: string;
    search: string;
    filter: string;
    sort: string;
    all: string;
    none: string;
    select: string;
    clear: string;
    apply: string;
    reset: string;
    confirm: string;
    yes: string;
    no: string;
    ok: string;
    horsesCapacity: string;
    bestseller: string;
    onlyXDaysLeft: string;
    favorite: string;
    newArrival: string;
    promotion: string;
    premiumSelection: string;
    ourBest: string;
    offersVehicles: string;
    discoverSelection: string;
    limitedOffer: string;
    expertiseGuaranteed: string;
    featuredVehicles: string;
    moreEquipment: string;
    savings: string;
    promotionalPrice: string;
    financingAvailable: string;
    viewDetails: string;
    discoverCharacteristics: string;
    addToMySelection: string;
    viewAll: string;
    vehicles: string;
    km: string;
    upTo15Off: string;
    from: string;
    mostRequested: string;
    specialOffers: string;
    newArrivals2024: string;
    bestPrice: string;
    models: string;
    disciplineDescription: string;
    explore: string;
    discoverCollection: string;
    receiveOffer24h: string;
    personalizedExchange: string;
    getFreeQuote: string;
    makeAppointment: string;
    experience: string;
  };
  features: {
    pneumaticSuspension: string;
    airConditioning: string;
    sleepingCabin: string;
    automaticTransmission: string;
    nonSlipFlooring: string;
    ledLighting: string;
    ventilation: string;
    handsFreeeKit: string;
    aluminum: string;
    alkoSuspension: string;
    rubberFlooring: string;
  };
  occasions: any; // Fallback
  horseTrucks: any; // Fallback
  horseVans: any; // Fallback
  horseTrailers: any; // Fallback
  quotePage: any; // Fallback
}

const frenchTranslations: Translations = {
  nav: {
    home: "Accueil",
    horseTrucks: "Camions Chevaux",
    horseVans: "Vans Chevaux",
    horseTrailers: "Remorques Chevaux",
    about: "À Propos",
    contact: "Contact",
    getQuote: "Devis Gratuit",
    occasions: "Occasions"
  },
  hero: {
    slide1: {
      subtitle: "Transport Équestre Premium",
      title: "Des Véhicules d'Exception pour Vos Chevaux",
      description: "Découvrez notre gamme complète de camions, vans et remorques pour transporter vos chevaux en toute sécurité et confort."
    },
    slide2: {
      subtitle: "Confort & Sécurité",
      title: "Camions Chevaux Haut de Gamme",
      description: "Des véhicules spacieux équipés des dernières technologies pour le bien-être de vos chevaux durant tous vos déplacements."
    },
    slide3: {
      subtitle: "Mobilité Optimale",
      title: "Vans Chevaux Polyvalents",
      description: "Solutions pratiques et élégantes pour transporter de 1 à 3 chevaux, idéales pour les sorties quotidiennes et compétitions."
    },
    slide4: {
      subtitle: "Flexibilité Maximale",
      title: "Remorques Chevaux Professionnelles",
      description: "La solution économique pour tous types de transport équin, avec une large variété de configurations disponibles."
    },
    cta: "Découvrir Nos Véhicules"
  },
  categories: {
    title: "Notre Gamme de Véhicules",
    subtitle: "Trouvez le véhicule parfait pour vos besoins de transport équin",
    horseTrucks: {
      title: "Camions Chevaux",
      description: "Pour transporter de 2 à 12 chevaux avec un confort optimal",
      features: ["Cabine couchette", "Suspension pneumatique", "Climatisé"],
      startingPrice: "À partir de 45 000€",
      from: "À partir de",
      explore: "Explorer"
    },
    horseVans: {
      title: "Vans Chevaux",
      description: "Polyvalents et maniables pour 1 à 3 chevaux",
      features: ["Facile à conduire", "Économique", "Stationnement aisé"],
      startingPrice: "À partir de 25 000€",
      from: "À partir de",
      explore: "Explorer"
    },
    horseTrailers: {
      title: "Remorques Chevaux",
      description: "La solution économique et flexible",
      features: ["Large choix de tailles", "Excellent rapport qualité-prix", "Entretien facile"],
      startingPrice: "À partir de 15 000€",
      from: "À partir de",
      explore: "Explorer"
    },
    cta: "Voir Plus de Détails",
    specialties: "Nos Spécialités",
    disciplineDescription: "Que vous pratiquiez le dressage, le saut d'obstacles, ou l'équitation de loisir",
    ctaTitle: "Prêt à Trouver Votre Véhicule Idéal ?",
    ctaDescription: "Bénéficiez de notre expertise pour choisir le véhicule parfait pour vos besoins.",
    getFreeQuote: "Devis Gratuit",
    makeAppointment: "Prendre RDV"
  },
  offers: {
    title: "Nos Offres & Services",
    subtitle: "Des solutions complètes pour tous vos besoins",
    newVehicles: {
      title: "Véhicules Neufs",
      description: "Derniers modèles avec garantie constructeur",
      benefits: ["Garantie étendue", "Financement facilité", "Configuration sur mesure"]
    },
    usedVehicles: {
      title: "Véhicules d'Occasion",
      description: "Véhicules sélectionnés et révisés",
      benefits: ["Prix attractifs", "Contrôle qualité", "Garantie incluse"]
    },
    accessories: {
      title: "Accessoires & Équipements",
      description: "Tout pour équiper votre véhicule",
      benefits: ["Large gamme", "Installation professionnelle", "Conseils d'experts"]
    },
    cta: "Demander un Devis"
  },
  trust: {
    title: "Pourquoi Nous Choisir ?",
    subtitle: "Plus de 30 ans d'expertise dans le transport équin",
    features: {
      expertise: {
        title: "Expertise Reconnue",
        description: "Plus de 30 ans d'expérience dans le transport équin nous permettent de vous conseiller au mieux."
      },
      quality: {
        title: "Qualité Premium",
        description: "Nous sélectionnons uniquement les meilleures marques pour garantir durabilité et fiabilité."
      },
      service: {
        title: "Service Personnalisé",
        description: "Chaque client bénéficie d'un accompagnement sur mesure de l'achat à la livraison."
      },
      warranty: {
        title: "Garantie Étendue",
        description: "Tous nos véhicules sont couverts par une garantie complète pour votre tranquillité d'esprit."
      }
    }
  },
  contact: {
    title: "Nous Contacter",
    subtitle: "Notre équipe d'experts est à votre disposition",
    info: {
      phone: "+33 1 23 45 67 89",
      email: "contact@htg-france.com",
      address: "123 Route des Chevaux, 75000 Paris",
      hours: "Lun-Ven : 8h-18h, Sam : 9h-17h"
    },
    form: {
      title: "Envoyez-nous un Message",
      subtitle: "Nous vous répondrons dans les plus brefs délais",
      fields: {
        firstName: "Prénom",
        lastName: "Nom",
        email: "Email",
        phone: "Téléphone",
        subject: "Objet",
        message: "Message"
      },
      placeholders: {
        firstName: "Votre prénom",
        lastName: "Votre nom",
        email: "votre@email.com",
        phone: "06 12 34 56 78",
        subject: "Objet de votre message",
        message: "Décrivez votre demande..."
      },
      submit: "Envoyer le Message",
      required: "Champs obligatoires"
    }
  },
  footer: {
    company: {
      title: "HTG France",
      description: "Spécialiste du transport équin depuis plus de 30 ans. Nous proposons une gamme complète de véhicules pour tous vos besoins."
    },
    quickLinks: {
      title: "Liens Rapides",
      home: "Accueil",
      about: "À Propos",
      contact: "Contact",
      occasions: "Occasions"
    },
    products: {
      title: "Nos Produits",
      horseTrucks: "Camions Chevaux",
      horseVans: "Vans Chevaux",
      horseTrailers: "Remorques Chevaux",
      accessories: "Accessoires"
    },
    contact: {
      title: "Contact",
      phone: "+33 1 23 45 67 89",
      email: "contact@htg-france.com",
      address: "123 Route des Chevaux, 75000 Paris"
    },
    copyright: "© 2024 HTG France. Tous droits réservés."
  },
  about: {
    hero: {
      title: "Notre Histoire",
      subtitle: "Plus de 30 ans d'expertise",
      description: "Depuis notre création, nous sommes passionnés par le transport équin et nous nous efforçons d'offrir les meilleures solutions à nos clients."
    },
    story: {
      title: "Notre Histoire",
      description: "Fondée en 1990, HTG France est née de la passion de ses fondateurs pour l'équitation et de leur volonté d'offrir des solutions de transport de qualité pour les chevaux."
    },
    values: {
      title: "Nos Valeurs",
      expertise: {
        title: "Expertise",
        description: "Plus de 30 ans d'expérience dans le secteur"
      },
      quality: {
        title: "Qualité",
        description: "Sélection rigoureuse des meilleurs équipements"
      },
      service: {
        title: "Service",
        description: "Accompagnement personnalisé de chaque client"
      }
    },
    team: {
      title: "Notre Équipe",
      description: "Une équipe de passionnés à votre service pour vous accompagner dans tous vos projets de transport équin."
    }
  },
  aboutPage: {
    hero: {
      title: "À Propos de HTG France",
      subtitle: "Votre partenaire de confiance depuis 1990",
      description: "Découvrez l'histoire et les valeurs qui font de HTG France le leader français du transport équin."
    },
    story: {
      title: "Notre Histoire",
      description: "Fondée en 1990 par des passionnés d'équitation, HTG France s'est imposée comme la référence française en matière de transport équin."
    },
    values: {
      title: "Nos Valeurs & Expertise",
      stats: {
        experience: "30+ ans d'expérience",
        vehicles: "5000+ véhicules vendus",
        satisfaction: "98% de satisfaction client",
        warranty: "Garantie jusqu'à 5 ans"
      },
      passion: {
        title: "Passion",
        description: "Notre passion pour l'équitation guide chacune de nos actions."
      },
      excellence: {
        title: "Excellence",
        description: "Nous sélectionnons uniquement les meilleures marques."
      },
      support: {
        title: "Accompagnement",
        description: "Chaque client bénéficie d'un suivi personnalisé."
      }
    },
    team: {
      title: "Notre Équipe",
      description: "Une équipe de professionnels passionnés, combinant expertise technique et connaissance du monde équin.",
      director: {
        name: "Jean-Pierre Martin",
        role: "Directeur Général",
        description: "Cavalier depuis plus de 40 ans, Jean-Pierre a fondé HTG France avec la vision de révolutionner le transport équin en France."
      }
    }
  },
  trucksPage: {},
  contactPage: {},
  vansPage: {},
  common: {
    learnMore: "En Savoir Plus",
    getQuote: "Demander un Devis",
    contact: "Contact",
    phone: "Téléphone",
    email: "Email",
    address: "Adresse",
    readMore: "Lire la Suite",
    previous: "Précédent",
    next: "Suivant",
    close: "Fermer",
    open: "Ouvrir",
    menu: "Menu",
    loading: "Chargement...",
    error: "Erreur",
    success: "Succès",
    required: "Obligatoire",
    optional: "Optionnel",
    submit: "Envoyer",
    cancel: "Annuler",
    save: "Enregistrer",
    delete: "Supprimer",
    edit: "Modifier",
    add: "Ajouter",
    search: "Rechercher",
    filter: "Filtrer",
    sort: "Trier",
    all: "Tous",
    none: "Aucun",
    select: "Sélectionner",
    clear: "Effacer",
    apply: "Appliquer",
    reset: "Réinitialiser",
    confirm: "Confirmer",
    yes: "Oui",
    no: "Non",
    ok: "OK",
    horsesCapacity: "chevaux",
    bestseller: "Bestseller",
    onlyXDaysLeft: "Seulement quelques jours",
    favorite: "Favoris",
    newArrival: "Nouveauté",
    promotion: "Promotion",
    premiumSelection: "Sélection Premium",
    ourBest: "Nos Meilleures",
    offersVehicles: "Offres & Véhicules",
    discoverSelection: "Découvrez notre sélection de véhicules exceptionnels",
    limitedOffer: "Offre limitée",
    expertiseGuaranteed: "Expertise garantie",
    featuredVehicles: "Véhicules en vedette",
    moreEquipment: "équipements de plus",
    savings: "Économies",
    promotionalPrice: "Prix promotionnel",
    financingAvailable: "Financement disponible",
    viewDetails: "Voir détails",
    discoverCharacteristics: "Découvrir les caractéristiques",
    addToMySelection: "Ajouter à ma sélection",
    viewAll: "Voir tous",
    vehicles: "véhicules",
    km: "km",
    upTo15Off: "Jusqu'à -15%",
    from: "À partir de",
    mostRequested: "Les plus demandés",
    specialOffers: "Offres spéciales",
    newArrivals2024: "Nouveautés 2024",
    bestPrice: "Meilleur prix",
    models: "modèles",
    disciplineDescription: "Que vous pratiquiez le dressage, le saut d'obstacles, ou l'équitation de loisir",
    explore: "Explorer",
    discoverCollection: "Découvrir la Collection",
    receiveOffer24h: "Recevez une offre sous 24h",
    personalizedExchange: "Échange personnalisé avec un expert",
    getFreeQuote: "Devis Gratuit",
    makeAppointment: "Prendre RDV",
    experience: "ans d'expérience"
  },
  features: {
    pneumaticSuspension: "Suspension pneumatique",
    airConditioning: "Climatisation",
    sleepingCabin: "Cabine couchette",
    automaticTransmission: "Boîte automatique",
    nonSlipFlooring: "Plancher antidérapant",
    ledLighting: "Éclairage LED",
    ventilation: "Ventilation",
    handsFreeeKit: "Kit mains libres",
    aluminum: "Aluminium",
    alkoSuspension: "Suspension ALKO",
    rubberFlooring: "Plancher caoutchouc"
  },
  occasions: {},
  horseTrucks: {},
  horseVans: {},
  horseTrailers: {},
  quotePage: {}
};

export const translations: Record<Language, Translations> = {
  fr: frenchTranslations,
  en: frenchTranslations, // Use French as fallback
  es: frenchTranslations, // Use French as fallback  
  de: frenchTranslations  // Use French as fallback
};

export const TranslationContext = createContext<{
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}>({
  language: 'fr',
  setLanguage: () => {},
  t: translations.fr
});

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};