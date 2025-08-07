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
    specialties: string;
    findPerfectVehicle: string;
    disciplineDescription: string;
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
    partners: Array<{
      name: string;
      logo: string;
      description: string;
    }>;
    reviews: Array<{
      id: number;
      name: string;
      location: string;
      rating: number;
      text: string;
      vehicleType: string;
      date: string;
      verified: boolean;
    }>;
  };

  // Quote Request
  quoteRequest: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      description: string;
      trustIndicators: {
        free: string;
        response24h: string;
        noCommitment: string;
      };
    };
    benefits: {
      response24h: {
        title: string;
        description: string;
      };
      free: {
        title: string;
        description: string;
      };
      transparent: {
        title: string;
        description: string;
      };
      expert: {
        title: string;
        description: string;
      };
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
      personalInfo: {
        title: string;
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        region: string;
      };
      vehicleRequirements: {
        title: string;
        vehicleType: string;
        horseCapacity: string;
        condition: string;
        budget: string;
        selectVehicleType: string;
        selectCapacity: string;
        selectCondition: string;
        selectBudget: string;
      };
      usage: {
        title: string;
        primaryUse: string;
        equipment: string;
        selectUsage: string;
      };
      additional: {
        title: string;
        timeline: string;
        message: string;
        selectTimeline: string;
        messagePlaceholder: string;
      };
      submit: {
        title: string;
        description: string;
        button: string;
        disclaimer: string;
      };
    };
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
    cancel: string;
    confirm: string;
    save: string;
    edit: string;
    delete: string;
    add: string;
    remove: string;
    search: string;
    filter: string;
    sort: string;
    clear: string;
    apply: string;
    reset: string;
    submit: string;
    back: string;
    continue: string;
    finish: string;
    skip: string;
    retry: string;
    refresh: string;
    reload: string;
    update: string;
    download: string;
    upload: string;
    share: string;
    copy: string;
    paste: string;
    cut: string;
    undo: string;
    redo: string;
    select: string;
    deselect: string;
    selectAll: string;
    deselectAll: string;
    expand: string;
    collapse: string;
    show: string;
    hide: string;
    view: string;
    preview: string;
    print: string;
    export: string;
    import: string;
    help: string;
    about: string;
    settings: string;
    preferences: string;
    account: string;
    profile: string;
    logout: string;
    login: string;
    register: string;
    forgotPassword: string;
    changePassword: string;
    ok: string;
    new: string;
    used: string;
    leisure: string;
    competition: string;
    professional: string;
    immediately: string;
    months: string;
    horsesCapacity: string;
    bestseller: string;
    onlyXDaysLeft: string;
    favorite: string;
    newArrival: string;
    promotion: string;
    limitedOffer: string;
    expertiseGuaranteed: string;
    featuredVehicles: string;
    premiumSelection: string;
    ourBest: string;
    offersVehicles: string;
    discoverSelection: string;
    km: string;
    moreEquipment: string;
    savings: string;
    promotionalPrice: string;
    financingAvailable: string;
    discoverCharacteristics: string;
    addToMySelection: string;
  };
  
  // Features
  features: {
    pneumaticSuspension: string;
    airConditioning: string;
    sleepingCabin: string;
    automaticTransmission: string;
  };
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
      ctaTitle: "Besoin d'aide pour choisir ?",
      ctaDescription: "Nos experts vous accompagnent dans le choix du véhicule parfait pour vos chevaux.",
      getFreeQuote: "Devis Gratuit",
      makeAppointment: "Prendre RDV",
      specialties: "Nos Spécialités",
      findPerfectVehicle: "Trouvez le véhicule parfait pour votre discipline",
      disciplineDescription: "Que vous pratiquiez le dressage, le saut d'obstacles, le cross ou l'endurance, nous avons le véhicule adapté à votre passion."
    },
    trust: {
      badge: "Confiance",
      title: "Votre Partenaire de Confiance",
      subtitle: "depuis 2008",
      description: "Horse Truck Garage, votre spécialiste français du transport équestre. Une expertise reconnue et un service client d'exception.",
      stats: {
        experience: "15+ ans d'expérience",
        clients: "2000+ clients satisfaits",
        satisfaction: "98% de satisfaction",
        response: "Réponse sous 24h"
      },
      reviewsTitle: "Témoignages Clients",
      reviewsDescription: "Découvrez l'expérience de nos clients",
      leaveReview: "Laisser un avis",
      partnersTitle: "Nos Partenaires",
      partnersDescription: "Des marques de confiance",
      getQuote: "Demander un Devis",
      partners: [],
      reviews: []
    },
    quoteRequest: {
      hero: {
        badge: "Devis Gratuit",
        title: "Votre Devis",
        subtitle: "en Moins de 24h",
        description: "Obtenez un devis personnalisé pour votre véhicule de transport équin. Notre expert analyse vos besoins et vous propose la solution parfaite.",
        trustIndicators: {
          free: "100% Gratuit",
          response24h: "Réponse 24h",
          noCommitment: "Sans engagement"
        }
      },
      benefits: {
        response24h: {
          title: "Réponse Sous 24h",
          description: "Votre devis personnalisé dans votre boîte mail"
        },
        free: {
          title: "100% Gratuit",
          description: "Aucun frais, aucun engagement de votre part"
        },
        transparent: {
          title: "Prix Transparent",
          description: "Tous les coûts inclus, aucune surprise"
        },
        expert: {
          title: "Expert Dédié",
          description: "Un conseiller personnel suit votre dossier"
        }
      },
      vehicleTypes: {
        title: "Quel Type de Véhicule Recherchez-vous ?",
        subtitle: "Sélectionnez votre catégorie pour un devis encore plus précis",
        popular: "Plus demandé",
        capacities: "Capacités disponibles",
        horseTrucks: "Camion Chevaux",
        horseVans: "Van Chevaux",
        horseTrailers: "Remorque Chevaux"
      },
      form: {
        title: "Formulaire de Demande de Devis",
        subtitle: "Plus vous nous donnez d'informations, plus votre devis sera précis et adapté",
        personalInfo: {
          title: "Vos Informations",
          firstName: "Prénom",
          lastName: "Nom",
          email: "Email",
          phone: "Téléphone",
          region: "Région"
        },
        vehicleRequirements: {
          title: "Votre Véhicule Idéal",
          vehicleType: "Type de véhicule",
          horseCapacity: "Nombre de chevaux à transporter",
          condition: "État souhaité",
          budget: "Budget approximatif",
          selectVehicleType: "Choisissez le type",
          selectCapacity: "Sélectionnez",
          selectCondition: "Neuf ou occasion ?",
          selectBudget: "Votre fourchette de prix"
        },
        usage: {
          title: "Utilisation & Équipements",
          primaryUse: "Utilisation principale",
          equipment: "Équipements souhaités",
          selectUsage: "Comment allez-vous utiliser le véhicule ?"
        },
        additional: {
          title: "Informations Complémentaires",
          timeline: "Délai souhaité pour l'achat",
          message: "Message complémentaire",
          selectTimeline: "Quand souhaitez-vous acquérir votre véhicule ?",
          messagePlaceholder: "Décrivez-nous vos besoins spécifiques, contraintes particulières, questions sur le financement, etc."
        },
        submit: {
          title: "C'est Parti !",
          description: "En soumettant ce formulaire, vous recevrez votre devis personnalisé sous 24h maximum. Un expert HTG vous contactera également pour affiner votre demande.",
          button: "Recevoir Mon Devis Gratuit",
          disclaimer: "* Aucun engagement • Réponse garantie sous 24h • Service 100% gratuit"
        }
      }
    },
    footer: {
      newsletter: {
        title: "Newsletter",
        description: "Restez informé de nos nouveautés",
        placeholder: "Votre email",
        subscribe: "S'abonner"
      },
      company: {
        title: "Horse Truck Garage",
        description: "Votre spécialiste français du transport équestre depuis 2008."
      },
      contact: {
        title: "Contact",
        phone: "06 12 34 56 78",
        email: "contact@horsetruckgarage.fr",
        address: "123 Route des Chevaux, 75000 Paris",
        hours: "Du lundi au vendredi 9h-18h"
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
        maintenance: "Maintenance"
      },
      followUs: "Suivez-nous",
      copyright: "© 2024 Horse Truck Garage. Tous droits réservés.",
      terms: "Conditions générales",
      privacy: "Politique de confidentialité",
      sitemap: "Plan du site"
    },
    floating: {
      quote24h: "Devis 24h"
    },
    common: {
      readMore: "Lire la suite",
      learnMore: "En savoir plus",
      getQuote: "Demander un Devis",
      contact: "Contact",
      phone: "Téléphone",
      email: "Email",
      address: "Adresse",
      previous: "Précédent",
      next: "Suivant",
      close: "Fermer",
      open: "Ouvrir",
      menu: "Menu",
      loading: "Chargement...",
      error: "Erreur",
      success: "Succès",
      cancel: "Annuler",
      confirm: "Confirmer",
      save: "Enregistrer",
      edit: "Modifier",
      delete: "Supprimer",
      add: "Ajouter",
      remove: "Supprimer",
      search: "Rechercher",
      filter: "Filtrer",
      sort: "Trier",
      clear: "Effacer",
      apply: "Appliquer",
      reset: "Réinitialiser",
      submit: "Envoyer",
      back: "Retour",
      continue: "Continuer",
      finish: "Terminer",
      skip: "Ignorer",
      retry: "Réessayer",
      refresh: "Actualiser",
      reload: "Recharger",
      update: "Mettre à jour",
      download: "Télécharger",
      upload: "Uploader",
      share: "Partager",
      copy: "Copier",
      paste: "Coller",
      cut: "Couper",
      undo: "Annuler",
      redo: "Refaire",
      select: "Sélectionner",
      deselect: "Désélectionner",
      selectAll: "Tout sélectionner",
      deselectAll: "Tout désélectionner",
      expand: "Développer",
      collapse: "Réduire",
      show: "Afficher",
      hide: "Masquer",
      view: "Voir",
      preview: "Aperçu",
      print: "Imprimer",
      export: "Exporter",
      import: "Importer",
      help: "Aide",
      about: "À propos",
      settings: "Paramètres",
      preferences: "Préférences",
      account: "Compte",
      profile: "Profil",
      logout: "Déconnexion",
      login: "Connexion",
      register: "S'inscrire",
      forgotPassword: "Mot de passe oublié",
      changePassword: "Changer le mot de passe",
      ok: "OK",
      new: "Neuf",
      used: "Occasion",
      leisure: "Loisir",
      competition: "Compétition",
      professional: "Professionnel",
      immediately: "Immédiatement",
      months: "mois",
      horsesCapacity: "chevaux",
      bestseller: "Bestseller",
      onlyXDaysLeft: "Plus que 3 jours",
      favorite: "Coup de Cœur",
      newArrival: "Nouveauté",
      promotion: "Promotion",
      limitedOffer: "Offre limitée",
      expertiseGuaranteed: "Expertise garantie",
      featuredVehicles: "Véhicules Vedettes",
      premiumSelection: "Sélection Premium",
      ourBest: "Nos Meilleures",
      offersVehicles: "Offres & Véhicules",
      discoverSelection: "Découvrez notre sélection",
      km: "km",
      moreEquipment: "autres équipements",
      savings: "d'économie",
      promotionalPrice: "Prix promotionnel",
      financingAvailable: "Financement disponible",
      discoverCharacteristics: "Découvrir les caractéristiques",
      addToMySelection: "Ajouter à ma sélection"
    },
    features: {
      pneumaticSuspension: "Suspension pneumatique",
      airConditioning: "Climatisation",
      sleepingCabin: "Cabine couchette",
      automaticTransmission: "Boîte automatique"
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
        description: "Spacious vehicles equipped with the latest technologies for the well-being of your horses during all your travels."
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
        subtitle: "Certified Used",
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
        features: ["Capacity 2-6 horses", "Tack compartment", "Ventilation system", "Air suspension"],
        from: "From",
        explore: "Explore Trucks"
      },
      horseVans: {
        title: "Horse Vans",
        description: "Compact and versatile solutions for 1-3 horses, perfect for daily use",
        features: ["Compact format", "B license driving", "Modular layout", "Economical"],
        from: "From",
        explore: "Explore Vans"
      },
      horseTrailers: {
        title: "Horse Trailers",
        description: "Robust and reliable trailers for all types of equestrian transport",
        features: ["1-4 horse places", "Non-slip flooring", "LED lighting", "ABS braking"],
        from: "From",
        explore: "Explore Trailers"
      },
      ctaTitle: "Need help choosing?",
      ctaDescription: "Our experts guide you in choosing the perfect vehicle for your horses.",
      getFreeQuote: "Free Quote",
      makeAppointment: "Book Appointment",
      specialties: "Our Specialties",
      findPerfectVehicle: "Find the perfect vehicle for your discipline",
      disciplineDescription: "Whether you practice dressage, show jumping, cross-country or endurance, we have the vehicle adapted to your passion."
    },
    trust: {
      badge: "Trust",
      title: "Your Trusted Partner",
      subtitle: "since 2008",
      description: "Horse Truck Garage, your French specialist in equestrian transport. Recognized expertise and exceptional customer service.",
      stats: {
        experience: "15+ years experience",
        clients: "2000+ satisfied clients",
        satisfaction: "98% satisfaction",
        response: "Response within 24h"
      },
      reviewsTitle: "Customer Reviews",
      reviewsDescription: "Discover our customers' experience",
      leaveReview: "Leave a review",
      partnersTitle: "Our Partners",
      partnersDescription: "Trusted brands",
      getQuote: "Get Quote",
      partners: [],
      reviews: []
    },
    quoteRequest: {
      hero: {
        badge: "Free Quote",
        title: "Your Quote",
        subtitle: "in Less than 24h",
        description: "Get a personalized quote for your equine transport vehicle. Our expert analyzes your needs and offers you the perfect solution.",
        trustIndicators: {
          free: "100% Free",
          response24h: "24h Response",
          noCommitment: "No commitment"
        }
      },
      benefits: {
        response24h: {
          title: "Response Within 24h",
          description: "Your personalized quote in your inbox"
        },
        free: {
          title: "100% Free",
          description: "No fees, no commitment on your part"
        },
        transparent: {
          title: "Transparent Pricing",
          description: "All costs included, no surprises"
        },
        expert: {
          title: "Dedicated Expert",
          description: "A personal advisor follows your file"
        }
      },
      vehicleTypes: {
        title: "What Type of Vehicle Are You Looking For?",
        subtitle: "Select your category for an even more precise quote",
        popular: "Most requested",
        capacities: "Available capacities",
        horseTrucks: "Horse Truck",
        horseVans: "Horse Van",
        horseTrailers: "Horse Trailer"
      },
      form: {
        title: "Quote Request Form",
        subtitle: "The more information you give us, the more precise and adapted your quote will be",
        personalInfo: {
          title: "Your Information",
          firstName: "First name",
          lastName: "Last name",
          email: "Email",
          phone: "Phone",
          region: "Region"
        },
        vehicleRequirements: {
          title: "Your Ideal Vehicle",
          vehicleType: "Vehicle type",
          horseCapacity: "Number of horses to transport",
          condition: "Desired condition",
          budget: "Approximate budget",
          selectVehicleType: "Choose the type",
          selectCapacity: "Select",
          selectCondition: "New or used?",
          selectBudget: "Your price range"
        },
        usage: {
          title: "Usage & Equipment",
          primaryUse: "Primary use",
          equipment: "Desired equipment",
          selectUsage: "How will you use the vehicle?"
        },
        additional: {
          title: "Additional Information",
          timeline: "Desired purchase timeframe",
          message: "Additional message",
          selectTimeline: "When do you wish to acquire your vehicle?",
          messagePlaceholder: "Describe your specific needs, particular constraints, questions about financing, etc."
        },
        submit: {
          title: "Let's Go!",
          description: "By submitting this form, you will receive your personalized quote within 24 hours maximum. An HTG expert will also contact you to refine your request.",
          button: "Receive My Free Quote",
          disclaimer: "* No commitment • Response guaranteed within 24h • 100% free service"
        }
      }
    },
    footer: {
      newsletter: {
        title: "Newsletter",
        description: "Stay informed about our news",
        placeholder: "Your email",
        subscribe: "Subscribe"
      },
      company: {
        title: "Horse Truck Garage",
        description: "Your French specialist in equestrian transport since 2008."
      },
      contact: {
        title: "Contact",
        phone: "06 12 34 56 78",
        email: "contact@horsetruckgarage.fr",
        address: "123 Route des Chevaux, 75000 Paris",
        hours: "Monday to Friday 9am-6pm"
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
        maintenance: "Maintenance"
      },
      followUs: "Follow us",
      copyright: "© 2024 Horse Truck Garage. All rights reserved.",
      terms: "Terms and conditions",
      privacy: "Privacy policy",
      sitemap: "Sitemap"
    },
    floating: {
      quote24h: "24h Quote"
    },
    common: {
      readMore: "Read more",
      learnMore: "Learn more",
      getQuote: "Get Quote",
      contact: "Contact",
      phone: "Phone",
      email: "Email",
      address: "Address",
      previous: "Previous",
      next: "Next",
      close: "Close",
      open: "Open",
      menu: "Menu",
      loading: "Loading...",
      error: "Error",
      success: "Success",
      cancel: "Cancel",
      confirm: "Confirm",
      save: "Save",
      edit: "Edit",
      delete: "Delete",
      add: "Add",
      remove: "Remove",
      search: "Search",
      filter: "Filter",
      sort: "Sort",
      clear: "Clear",
      apply: "Apply",
      reset: "Reset",
      submit: "Submit",
      back: "Back",
      continue: "Continue",
      finish: "Finish",
      skip: "Skip",
      retry: "Retry",
      refresh: "Refresh",
      reload: "Reload",
      update: "Update",
      download: "Download",
      upload: "Upload",
      share: "Share",
      copy: "Copy",
      paste: "Paste",
      cut: "Cut",
      undo: "Undo",
      redo: "Redo",
      select: "Select",
      deselect: "Deselect",
      selectAll: "Select all",
      deselectAll: "Deselect all",
      expand: "Expand",
      collapse: "Collapse",
      show: "Show",
      hide: "Hide",
      view: "View",
      preview: "Preview",
      print: "Print",
      export: "Export",
      import: "Import",
      help: "Help",
      about: "About",
      settings: "Settings",
      preferences: "Preferences",
      account: "Account",
      profile: "Profile",
      logout: "Logout",
      login: "Login",
      register: "Register",
      forgotPassword: "Forgot password",
      changePassword: "Change password",
      ok: "OK",
      new: "New",
      used: "Used",
      leisure: "Leisure",
      competition: "Competition",
      professional: "Professional",
      immediately: "Immediately",
      months: "months"
    }
  },
  es: {
    nav: {
      home: "Inicio",
      horseTrucks: "Camiones para Caballos",
      horseVans: "Furgones para Caballos",
      horseTrailers: "Remolques para Caballos",
      about: "Acerca de",
      contact: "Contacto",
      getQuote: "Solicitar Presupuesto",
      occasions: "Vehículos Usados"
    },
    hero: {
      slide1: {
        subtitle: "Transporte Ecuestre Premium",
        title: "Vehículos Excepcionales para tus Caballos",
        description: "Descubre nuestra gama completa de camiones, furgones y remolques para el transporte de tus caballos con total seguridad y comodidad."
      },
      slide2: {
        subtitle: "Comodidad y Seguridad",
        title: "Camiones para Caballos de Alta Gama",
        description: "Vehículos espaciosos equipados con las últimas tecnologías para el bienestar de tus caballos durante todos tus desplazamientos."
      },
      slide3: {
        subtitle: "Movilidad Óptima",
        title: "Furgones para Caballos Versátiles",
        description: "Soluciones prácticas y elegantes para el transporte de 1 a 3 caballos, ideales para salidas diarias y competiciones."
      },
      slide4: {
        subtitle: "Flexibilidad Máxima",
        title: "Remolques para Caballos Profesionales",
        description: "Amplia gama de remolques adaptados a todas tus necesidades, desde paseos familiares hasta competiciones internacionales."
      },
      slide5: {
        subtitle: "Usados Certificados",
        title: "Vehículos Usados Garantizados",
        description: "Descubre nuestra selección rigurosa de vehículos usados revisados y garantizados por nuestros expertos."
      },
      cta: "Solicitar Presupuesto Gratis"
    },
    categories: {
      title: "Nuestros Vehículos",
      subtitle: "Ecuestres",
      horseTrucks: {
        title: "Camiones para Caballos",
        description: "Vehículos espaciosos y cómodos para el transporte profesional de tus caballos",
        features: ["Capacidad 2-6 caballos", "Compartimento guarnicionería", "Sistema ventilación", "Suspensión neumática"],
        from: "Desde",
        explore: "Explorar Camiones"
      },
      horseVans: {
        title: "Furgones para Caballos",
        description: "Soluciones compactas y versátiles para 1-3 caballos, perfectas para uso diario",
        features: ["Formato compacto", "Conducción licencia B", "Distribución modular", "Económico"],
        from: "Desde",
        explore: "Explorar Furgones"
      },
      horseTrailers: {
        title: "Remolques para Caballos",
        description: "Remolques robustos y fiables para todo tipo de transporte ecuestre",
        features: ["1-4 plazas caballos", "Suelo antideslizante", "Iluminación LED", "Frenado ABS"],
        from: "Desde",
        explore: "Explorar Remolques"
      },
      ctaTitle: "¿Necesitas ayuda para elegir?",
      ctaDescription: "Nuestros expertos te acompañan en la elección del vehículo perfecto para tus caballos.",
      getFreeQuote: "Presupuesto Gratis",
      makeAppointment: "Pedir Cita",
      specialties: "Nuestras Especialidades",
      findPerfectVehicle: "Encuentra el vehículo perfecto para tu disciplina",
      disciplineDescription: "Ya practiques doma, salto de obstáculos, cross o resistencia, tenemos el vehículo adaptado a tu pasión."
    },
    trust: {
      badge: "Confianza",
      title: "Tu Socio de Confianza",
      subtitle: "desde 2008",
      description: "Horse Truck Garage, tu especialista francés en transporte ecuestre. Experiencia reconocida y servicio al cliente excepcional.",
      stats: {
        experience: "15+ años de experiencia",
        clients: "2000+ clientes satisfechos",
        satisfaction: "98% de satisfacción",
        response: "Respuesta en 24h"
      },
      reviewsTitle: "Testimonios de Clientes",
      reviewsDescription: "Descubre la experiencia de nuestros clientes",
      leaveReview: "Dejar una reseña",
      partnersTitle: "Nuestros Socios",
      partnersDescription: "Marcas de confianza",
      getQuote: "Solicitar Presupuesto",
      partners: [],
      reviews: []
    },
    quoteRequest: {
      hero: {
        badge: "Presupuesto Gratis",
        title: "Tu Presupuesto",
        subtitle: "en Menos de 24h",
        description: "Obtén un presupuesto personalizado para tu vehículo de transporte equino. Nuestro experto analiza tus necesidades y te propone la solución perfecta.",
        trustIndicators: {
          free: "100% Gratis",
          response24h: "Respuesta 24h",
          noCommitment: "Sin compromiso"
        }
      },
      benefits: {
        response24h: {
          title: "Respuesta en 24h",
          description: "Tu presupuesto personalizado en tu buzón"
        },
        free: {
          title: "100% Gratis",
          description: "Sin costes, sin compromiso por tu parte"
        },
        transparent: {
          title: "Precio Transparente",
          description: "Todos los costes incluidos, sin sorpresas"
        },
        expert: {
          title: "Experto Dedicado",
          description: "Un asesor personal sigue tu expediente"
        }
      },
      vehicleTypes: {
        title: "¿Qué Tipo de Vehículo Buscas?",
        subtitle: "Selecciona tu categoría para un presupuesto aún más preciso",
        popular: "Más solicitado",
        capacities: "Capacidades disponibles",
        horseTrucks: "Camión para Caballos",
        horseVans: "Furgón para Caballos",
        horseTrailers: "Remolque para Caballos"
      },
      form: {
        title: "Formulario de Solicitud de Presupuesto",
        subtitle: "Cuanta más información nos proporciones, más preciso y adaptado será tu presupuesto",
        personalInfo: {
          title: "Tu Información",
          firstName: "Nombre",
          lastName: "Apellidos",
          email: "Email",
          phone: "Teléfono",
          region: "Región"
        },
        vehicleRequirements: {
          title: "Tu Vehículo Ideal",
          vehicleType: "Tipo de vehículo",
          horseCapacity: "Número de caballos a transportar",
          condition: "Estado deseado",
          budget: "Presupuesto aproximado",
          selectVehicleType: "Elige el tipo",
          selectCapacity: "Selecciona",
          selectCondition: "¿Nuevo o usado?",
          selectBudget: "Tu rango de precios"
        },
        usage: {
          title: "Uso y Equipamiento",
          primaryUse: "Uso principal",
          equipment: "Equipamiento deseado",
          selectUsage: "¿Cómo vas a usar el vehículo?"
        },
        additional: {
          title: "Información Adicional",
          timeline: "Plazo deseado para la compra",
          message: "Mensaje adicional",
          selectTimeline: "¿Cuándo deseas adquirir tu vehículo?",
          messagePlaceholder: "Descríbenos tus necesidades específicas, restricciones particulares, preguntas sobre financiación, etc."
        },
        submit: {
          title: "¡Vamos!",
          description: "Al enviar este formulario, recibirás tu presupuesto personalizado en un máximo de 24 horas. Un experto de HTG también te contactará para afinar tu solicitud.",
          button: "Recibir Mi Presupuesto Gratis",
          disclaimer: "* Sin compromiso • Respuesta garantizada en 24h • Servicio 100% gratuito"
        }
      }
    },
    footer: {
      newsletter: {
        title: "Newsletter",
        description: "Mantente informado sobre nuestras novedades",
        placeholder: "Tu email",
        subscribe: "Suscribirse"
      },
      company: {
        title: "Horse Truck Garage",
        description: "Tu especialista francés en transporte ecuestre desde 2008."
      },
      contact: {
        title: "Contacto",
        phone: "06 12 34 56 78",
        email: "contact@horsetruckgarage.fr",
        address: "123 Route des Chevaux, 75000 Paris",
        hours: "Lunes a viernes 9h-18h"
      },
      vehicles: {
        title: "Vehículos",
        horseTrucks: "Camiones para Caballos",
        horseVans: "Furgones para Caballos",
        horseTrailers: "Remolques para Caballos",
        occasions: "Vehículos Usados"
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
        maintenance: "Mantenimiento"
      },
      followUs: "Síguenos",
      copyright: "© 2024 Horse Truck Garage. Todos los derechos reservados.",
      terms: "Términos y condiciones",
      privacy: "Política de privacidad",
      sitemap: "Mapa del sitio"
    },
    floating: {
      quote24h: "Presupuesto 24h"
    },
    common: {
      readMore: "Leer más",
      learnMore: "Saber más",
      getQuote: "Solicitar Presupuesto",
      contact: "Contacto",
      phone: "Teléfono",
      email: "Email",
      address: "Dirección",
      previous: "Anterior",
      next: "Siguiente",
      close: "Cerrar",
      open: "Abrir",
      menu: "Menú",
      loading: "Cargando...",
      error: "Error",
      success: "Éxito",
      cancel: "Cancelar",
      confirm: "Confirmar",
      save: "Guardar",
      edit: "Editar",
      delete: "Eliminar",
      add: "Añadir",
      remove: "Eliminar",
      search: "Buscar",
      filter: "Filtrar",
      sort: "Ordenar",
      clear: "Limpiar",
      apply: "Aplicar",
      reset: "Reiniciar",
      submit: "Enviar",
      back: "Atrás",
      continue: "Continuar",
      finish: "Terminar",
      skip: "Saltar",
      retry: "Reintentar",
      refresh: "Actualizar",
      reload: "Recargar",
      update: "Actualizar",
      download: "Descargar",
      upload: "Subir",
      share: "Compartir",
      copy: "Copiar",
      paste: "Pegar",
      cut: "Cortar",
      undo: "Deshacer",
      redo: "Rehacer",
      select: "Seleccionar",
      deselect: "Deseleccionar",
      selectAll: "Seleccionar todo",
      deselectAll: "Deseleccionar todo",
      expand: "Expandir",
      collapse: "Contraer",
      show: "Mostrar",
      hide: "Ocultar",
      view: "Ver",
      preview: "Vista previa",
      print: "Imprimir",
      export: "Exportar",
      import: "Importar",
      help: "Ayuda",
      about: "Acerca de",
      settings: "Configuración",
      preferences: "Preferencias",
      account: "Cuenta",
      profile: "Perfil",
      logout: "Cerrar sesión",
      login: "Iniciar sesión",
      register: "Registrarse",
      forgotPassword: "Contraseña olvidada",
      changePassword: "Cambiar contraseña",
      ok: "OK",
      new: "Nuevo",
      used: "Usado",
      leisure: "Ocio",
      competition: "Competición",
      professional: "Profesional",
      immediately: "Inmediatamente",
      months: "meses"
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
        description: "Entdecken Sie unser komplettes Sortiment an LKWs, Vans und Anhängern für den sicheren und komfortablen Transport Ihrer Pferde."
      },
      slide2: {
        subtitle: "Komfort & Sicherheit",
        title: "Hochwertige Pferdetransporter",
        description: "Geräumige Fahrzeuge ausgestattet mit neuesten Technologien für das Wohlbefinden Ihrer Pferde bei allen Ihren Fahrten."
      },
      slide3: {
        subtitle: "Optimale Mobilität",
        title: "Vielseitige Pferde-Vans",
        description: "Praktische und elegante Lösungen für den Transport von 1 bis 3 Pferden, ideal für tägliche Ausflüge und Wettkämpfe."
      },
      slide4: {
        subtitle: "Maximale Flexibilität",
        title: "Professionelle Pferdeanhänger",
        description: "Breites Sortiment an Anhängern, angepasst an alle Ihre Bedürfnisse, von Familienausritten bis zu internationalen Wettkämpfen."
      },
      slide5: {
        subtitle: "Zertifizierte Gebrauchtwagen",
        title: "Garantierte Gebrauchtwagen",
        description: "Entdecken Sie unsere strenge Auswahl an Gebrauchtwagen, die von unseren Experten überprüft und garantiert werden."
      },
      cta: "Kostenloses Angebot anfordern"
    },
    categories: {
      title: "Unsere Fahrzeuge",
      subtitle: "Reitsport",
      horseTrucks: {
        title: "Pferdetransporter",
        description: "Geräumige und komfortable Fahrzeuge für den professionellen Transport Ihrer Pferde",
        features: ["Kapazität 2-6 Pferde", "Sattelkammer", "Belüftungssystem", "Luftfederung"],
        from: "Ab",
        explore: "LKWs erkunden"
      },
      horseVans: {
        title: "Pferde-Vans",
        description: "Kompakte und vielseitige Lösungen für 1-3 Pferde, perfekt für den täglichen Gebrauch",
        features: ["Kompaktes Format", "B-Führerschein", "Modularer Aufbau", "Wirtschaftlich"],
        from: "Ab",
        explore: "Vans erkunden"
      },
      horseTrailers: {
        title: "Pferdeanhänger",
        description: "Robuste und zuverlässige Anhänger für alle Arten des Pferdetransports",
        features: ["1-4 Pferdeplätze", "Rutschfester Boden", "LED-Beleuchtung", "ABS-Bremsen"],
        from: "Ab",
        explore: "Anhänger erkunden"
      },
      ctaTitle: "Brauchen Sie Hilfe bei der Auswahl?",
      ctaDescription: "Unsere Experten begleiten Sie bei der Wahl des perfekten Fahrzeugs für Ihre Pferde.",
      getFreeQuote: "Kostenloses Angebot",
      makeAppointment: "Termin vereinbaren",
      specialties: "Unsere Spezialitäten",
      findPerfectVehicle: "Finden Sie das perfekte Fahrzeug für Ihre Disziplin",
      disciplineDescription: "Ob Sie Dressur, Springreiten, Vielseitigkeit oder Distanzreiten praktizieren, wir haben das passende Fahrzeug für Ihre Leidenschaft."
    },
    trust: {
      badge: "Vertrauen",
      title: "Ihr Vertrauenspartner",
      subtitle: "seit 2008",
      description: "Horse Truck Garage, Ihr französischer Spezialist für Pferdetransport. Anerkannte Expertise und außergewöhnlicher Kundenservice.",
      stats: {
        experience: "15+ Jahre Erfahrung",
        clients: "2000+ zufriedene Kunden",
        satisfaction: "98% Zufriedenheit",
        response: "Antwort innerhalb 24h"
      },
      reviewsTitle: "Kundenbewertungen",
      reviewsDescription: "Entdecken Sie die Erfahrungen unserer Kunden",
      leaveReview: "Bewertung hinterlassen",
      partnersTitle: "Unsere Partner",
      partnersDescription: "Vertrauensmarken",
      getQuote: "Angebot anfordern",
      partners: [],
      reviews: []
    },
    quoteRequest: {
      hero: {
        badge: "Kostenloses Angebot",
        title: "Ihr Angebot",
        subtitle: "in weniger als 24h",
        description: "Erhalten Sie ein personalisiertes Angebot für Ihr Pferdetransportfahrzeug. Unser Experte analysiert Ihre Bedürfnisse und bietet Ihnen die perfekte Lösung.",
        trustIndicators: {
          free: "100% Kostenlos",
          response24h: "24h Antwort",
          noCommitment: "Unverbindlich"
        }
      },
      benefits: {
        response24h: {
          title: "Antwort innerhalb 24h",
          description: "Ihr personalisiertes Angebot in Ihrem Postfach"
        },
        free: {
          title: "100% Kostenlos",
          description: "Keine Gebühren, keine Verpflichtung Ihrerseits"
        },
        transparent: {
          title: "Transparente Preise",
          description: "Alle Kosten inbegriffen, keine Überraschungen"
        },
        expert: {
          title: "Persönlicher Experte",
          description: "Ein persönlicher Berater betreut Ihre Akte"
        }
      },
      vehicleTypes: {
        title: "Welche Art von Fahrzeug suchen Sie?",
        subtitle: "Wählen Sie Ihre Kategorie für ein noch präziseres Angebot",
        popular: "Am meisten nachgefragt",
        capacities: "Verfügbare Kapazitäten",
        horseTrucks: "Pferdetransporter",
        horseVans: "Pferde-Van",
        horseTrailers: "Pferdeanhänger"
      },
      form: {
        title: "Angebotsanfrage-Formular",
        subtitle: "Je mehr Informationen Sie uns geben, desto präziser und angepasster wird Ihr Angebot sein",
        personalInfo: {
          title: "Ihre Informationen",
          firstName: "Vorname",
          lastName: "Nachname",
          email: "E-Mail",
          phone: "Telefon",
          region: "Region"
        },
        vehicleRequirements: {
          title: "Ihr ideales Fahrzeug",
          vehicleType: "Fahrzeugtyp",
          horseCapacity: "Anzahl der zu transportierenden Pferde",
          condition: "Gewünschter Zustand",
          budget: "Ungefähres Budget",
          selectVehicleType: "Typ wählen",
          selectCapacity: "Auswählen",
          selectCondition: "Neu oder gebraucht?",
          selectBudget: "Ihre Preisspanne"
        },
        usage: {
          title: "Nutzung & Ausstattung",
          primaryUse: "Hauptnutzung",
          equipment: "Gewünschte Ausstattung",
          selectUsage: "Wie werden Sie das Fahrzeug nutzen?"
        },
        additional: {
          title: "Zusätzliche Informationen",
          timeline: "Gewünschter Kaufzeitrahmen",
          message: "Zusätzliche Nachricht",
          selectTimeline: "Wann möchten Sie Ihr Fahrzeug erwerben?",
          messagePlaceholder: "Beschreiben Sie uns Ihre spezifischen Bedürfnisse, besonderen Einschränkungen, Fragen zur Finanzierung, etc."
        },
        submit: {
          title: "Los geht's!",
          description: "Durch das Absenden dieses Formulars erhalten Sie Ihr personalisiertes Angebot innerhalb von maximal 24 Stunden. Ein HTG-Experte wird Sie auch kontaktieren, um Ihre Anfrage zu verfeinern.",
          button: "Mein kostenloses Angebot erhalten",
          disclaimer: "* Unverbindlich • Antwort garantiert innerhalb 24h • 100% kostenloser Service"
        }
      }
    },
    footer: {
      newsletter: {
        title: "Newsletter",
        description: "Bleiben Sie über unsere Neuigkeiten informiert",
        placeholder: "Ihre E-Mail",
        subscribe: "Abonnieren"
      },
      company: {
        title: "Horse Truck Garage",
        description: "Ihr französischer Spezialist für Pferdetransport seit 2008."
      },
      contact: {
        title: "Kontakt",
        phone: "06 12 34 56 78",
        email: "contact@horsetruckgarage.fr",
        address: "123 Route des Chevaux, 75000 Paris",
        hours: "Montag bis Freitag 9-18 Uhr"
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
        title: "Dienstleistungen",
        financing: "Finanzierung",
        insurance: "Versicherung",
        warranty: "Garantie",
        maintenance: "Wartung"
      },
      followUs: "Folgen Sie uns",
      copyright: "© 2024 Horse Truck Garage. Alle Rechte vorbehalten.",
      terms: "Allgemeine Geschäftsbedingungen",
      privacy: "Datenschutzerklärung",
      sitemap: "Sitemap"
    },
    floating: {
      quote24h: "24h Angebot"
    },
    common: {
      readMore: "Mehr lesen",
      learnMore: "Mehr erfahren",
      getQuote: "Angebot anfordern",
      contact: "Kontakt",
      phone: "Telefon",
      email: "E-Mail",
      address: "Adresse",
      previous: "Vorherige",
      next: "Nächste",
      close: "Schließen",
      open: "Öffnen",
      menu: "Menü",
      loading: "Laden...",
      error: "Fehler",
      success: "Erfolg",
      cancel: "Abbrechen",
      confirm: "Bestätigen",
      save: "Speichern",
      edit: "Bearbeiten",
      delete: "Löschen",
      add: "Hinzufügen",
      remove: "Entfernen",
      search: "Suchen",
      filter: "Filtern",
      sort: "Sortieren",
      clear: "Löschen",
      apply: "Anwenden",
      reset: "Zurücksetzen",
      submit: "Senden",
      back: "Zurück",
      continue: "Weiter",
      finish: "Beenden",
      skip: "Überspringen",
      retry: "Wiederholen",
      refresh: "Aktualisieren",
      reload: "Neu laden",
      update: "Aktualisieren",
      download: "Herunterladen",
      upload: "Hochladen",
      share: "Teilen",
      copy: "Kopieren",
      paste: "Einfügen",
      cut: "Ausschneiden",
      undo: "Rückgängig",
      redo: "Wiederholen",
      select: "Auswählen",
      deselect: "Abwählen",
      selectAll: "Alle auswählen",
      deselectAll: "Alle abwählen",
      expand: "Erweitern",
      collapse: "Einklappen",
      show: "Anzeigen",
      hide: "Verbergen",
      view: "Ansehen",
      preview: "Vorschau",
      print: "Drucken",
      export: "Exportieren",
      import: "Importieren",
      help: "Hilfe",
      about: "Über",
      settings: "Einstellungen",
      preferences: "Einstellungen",
      account: "Konto",
      profile: "Profil",
      logout: "Abmelden",
      login: "Anmelden",
      register: "Registrieren",
      forgotPassword: "Passwort vergessen",
      changePassword: "Passwort ändern",
      ok: "OK",
      new: "Neu",
      used: "Gebraucht",
      leisure: "Freizeit",
      competition: "Wettkampf",
      professional: "Professionell",
      immediately: "Sofort",
      months: "Monate"
    }
  }
};

export interface TranslationContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: Translations;
}

export const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const useTranslation = (): TranslationContextType => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};