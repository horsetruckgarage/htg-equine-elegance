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
      id?: string;
      name: string;
      role: string;
      content?: string;
      text?: string;
      rating: number;
      image: string;
      verified?: boolean;
      location?: string;
      vehicleType?: string;
      date?: string;
    }>;
  };

  // Offres & Vehicules Section
  offres: {
    badge: string;
    title: string;
    subtitle: string;
    description: string;
    stats: {
      vehicles: string;
      brands: string;
      clients: string;
      years: string;
    };
    cta: {
      title: string;
      description: string;
      primaryButton: string;
      secondaryButton: string;
    };
    features: {
      quality: {
        title: string;
        description: string;
      };
      expertise: {
        title: string;
        description: string;
      };
      service: {
        title: string;
        description: string;
      };
      guarantee: {
        title: string;
        description: string;
      };
      financing: {
        title: string;
        description: string;
      };
      support: {
        title: string;
        description: string;
      };
    };
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
    premiumSelection: string;
    ourBest: string;
    offersVehicles: string;
    discoverSelection: string;
    rigorouslyControlled: string;
    models: string;
    specialOffers: string;
    newArrivals2024: string;
    bestseller: string;
    mostRequested: string;
    bestPrice: string;
    upTo15Off: string;
    receiveOffer24h: string;
    personalizedExchange: string;
    discoverCollection: string;
    moreEquipment: string;
    promotionalPrice: string;
    financingAvailable: string;
    discoverCharacteristics: string;
    addToMySelection: string;
    onlyXDaysLeft: string;
    favorite: string;
  };

  // Common translations
  common: {
    newArrival: string;
    bestseller: string;
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
    premiumSelection: string;
    ourBest: string;
    offersVehicles: string;
    discoverSelection: string;
    rigorouslyControlled: string;
    models: string;
    specialOffers: string;
    newArrivals2024: string;
    mostRequested: string;
    bestPrice: string;
    upTo15Off: string;
    receiveOffer24h: string;
    personalizedExchange: string;
    discoverCollection: string;
    moreEquipment: string;
    promotionalPrice: string;
    financingAvailable: string;
    discoverCharacteristics: string;
    addToMySelection: string;
    onlyXDaysLeft: string;
    favorite: string;
    disciplines: string[];
    professionalUse: string;
    personalUse: string;
    competition: string;
    leisure: string;
    transport: string;
    quality: string;
    comfort: string;
    safety: string;
    reliability: string;
    innovation: string;
    expertise: string;
    performance: string;
    efficiency: string;
    economy: string;
    durability: string;
    versatility: string;
    maneuverability: string;
    technology: string;
    design: string;
    service: string;
    support: string;
    warranty: string;
    maintenance: string;
    financing: string;
    delivery: string;
    consultation: string;
    advice: string;
    experience: string;
    satisfaction: string;
    trust: string;
    partnership: string;
    excellence: string;
    commitment: string;
    responsibility: string;
    sustainability: string;
    environment: string;
    future: string;
  };

  // Features translations
  features: {
    airSuspension: string;
    cabinAirConditioning: string;
    nonSlipFlooring: string;
    ledLighting: string;
    ventilationSystem: string;
    surveillanceCameras: string;
    easyDriving: string;
    reducedConsumption: string;
    modularity: string;
    lightAndRobust: string;
    easyHitching: string;
    attractivePrice: string;
    spaciousCabin: string;
    sleepingArea: string;
    modernEquipment: string;
    absBraking: string;
    espSystem: string;
    airSuspensionForHorses: string;
    qualityConstruction: string;
    reinforcedSecurity: string;
    premiumFinishes: string;
    advancedTechnology: string;
    optimalComfort: string;
    maximumSafety: string;
    environmentalRespect: string;
    fuelEfficiency: string;
    easyMaintenance: string;
    longDurability: string;
    flexibleConfiguration: string;
    intuitiveControls: string;
    quietOperation: string;
    smoothRide: string;
    precisionHandling: string;
    reliablePerformance: string;
    innovativeDesign: string;
    practicalSolutions: string;
    professionalEquipment: string;
    certifiedQuality: string;
    guaranteedSafety: string;
    provenReliability: string;
  };

  // Footer translations
  footer: {
    company: {
      title: string;
      about: string;
      team: string;
      careers: string;
      press: string;
      blog: string;
      contact: string;
    };
    vehicles: {
      title: string;
      horseTrucks: string;
      horseVans: string;
      horseTrailers: string;
      usedVehicles: string;
      newVehicles: string;
      financing: string;
    };
    services: {
      title: string;
      maintenance: string;
      insurance: string;
      warranty: string;
      delivery: string;
      tradingIn: string;
      expertise: string;
    };
    support: {
      title: string;
      customerService: string;
      technicalSupport: string;
      documentation: string;
      faq: string;
      tutorials: string;
      community: string;
    };
    legal: {
      title: string;
      termsOfService: string;
      privacyPolicy: string;
      cookiePolicy: string;
      legalNotices: string;
      gdpr: string;
      accessibility: string;
    };
    social: {
      title: string;
      facebook: string;
      instagram: string;
      youtube: string;
      linkedin: string;
      twitter: string;
      newsletter: string;
    };
    newsletter: {
      title: string;
      description: string;
      placeholder: string;
      subscribe: string;
      success: string;
      error: string;
    };
    contact: {
      address: string;
      phone: string;
      email: string;
      hours: string;
      emergency: string;
    };
    copyright: string;
    allRightsReserved: string;
    madeWith: string;
    love: string;
    in: string;
    france: string;
  };

  // Floating CTA translations
  floating: {
    title: string;
    subtitle: string;
    cta: string;
    phone: string;
    whatsapp: string;
    email: string;
  };

  // Quote Request Page
  quoteRequestPage: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      description: string;
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
      truck: {
        type: string;
        priceRange: string;
        popular: string;
        capacities: string[];
      };
      van: {
        type: string;
        priceRange: string;
        capacities: string[];
      };
      trailer: {
        type: string;
        priceRange: string;
        capacities: string[];
      };
    };
    form: {
      title: string;
      description: string;
      personalInfo: string;
      firstName: string;
      firstNamePlaceholder: string;
      lastName: string;
      lastNamePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      company: string;
      companyPlaceholder: string;
      vehicleRequirements: string;
      vehicleType: string;
      vehicleTypePlaceholder: string;
      capacity: string;
      capacityPlaceholder: string;
      budget: string;
      budgetPlaceholder: string;
      usage: string;
      usageType: string;
      usageTypePlaceholder: string;
      annualKm: string;
      annualKmPlaceholder: string;
      urgency: string;
      urgencyPlaceholder: string;
      additionalInfo: string;
      message: string;
      messagePlaceholder: string;
      submitButton: string;
      successMessage: string;
      vehicleTypes: {
        truck: string;
        van: string;
        trailer: string;
        other: string;
      };
      capacities: {
        oneHorse: string;
        twoHorses: string;
        threeHorses: string;
        fourHorses: string;
        fiveHorses: string;
        sixPlusHorses: string;
      };
      budgetRanges: {
        under30k: string;
        range30k50k: string;
        range50k80k: string;
        range80k120k: string;
        over120k: string;
      };
      usageTypes: {
        personal: string;
        professional: string;
        mixed: string;
      };
      urgencyOptions: {
        immediate: string;
        month: string;
        threeMonths: string;
        sixMonths: string;
        noUrgency: string;
      };
    };
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
      getQuote: "Demande de Devis",
      occasions: "Occasions"
    },
    hero: {
      slide1: {
        subtitle: "Transport équin premium",
        title: "Camions Chevaux Professionnels",
        description: "Découvrez notre sélection de camions haut de gamme pour le transport de vos chevaux. Confort, sécurité et fiabilité garantis."
      },
      slide2: {
        subtitle: "Solutions compactes",
        title: "Vans Chevaux Dernière Génération",
        description: "Parfaits pour 1 à 3 chevaux, nos vans allient maniabilité et équipements de pointe pour vos déplacements quotidiens."
      },
      slide3: {
        subtitle: "Économique et pratique",
        title: "Remorques Chevaux Certifiées",
        description: "L'alternative économique pour le transport équin. Large choix de remorques neuves et d'occasion, toutes contrôlées."
      },
      slide4: {
        subtitle: "Véhicules contrôlés",
        title: "Occasions Sélectionnées avec Soin",
        description: "Véhicules d'occasion rigoureusement sélectionnés et contrôlés. Garantie, financement et livraison partout en France."
      },
      slide5: {
        subtitle: "15 ans d'expertise",
        title: "Votre Partenaire Transport Équin",
        description: "HTG vous accompagne depuis 15 ans dans tous vos projets. Conseils personnalisés et service client d'exception."
      },
      cta: "Découvrir nos véhicules"
    },
    categories: {
      title: "Choisissez Votre",
      subtitle: "Véhicule Idéal",
      horseTrucks: {
        title: "Camions Chevaux",
        description: "Solutions professionnelles pour 2 à 8 chevaux. Confort maximum et équipements haut de gamme.",
        features: ["Suspension pneumatique", "Climatisation cabine", "Plancher antidérapant"],
        from: "À partir de 65 000€",
        explore: "Découvrir les camions"
      },
      horseVans: {
        title: "Vans Chevaux",
        description: "Parfaits pour 1 à 3 chevaux. Maniables, économiques et très bien équipés.",
        features: ["Conduite facile", "Consommation réduite", "Modularité"],
        from: "À partir de 35 000€",
        explore: "Découvrir les vans"
      },
      horseTrailers: {
        title: "Remorques Chevaux",
        description: "Solution économique pour 1 à 3 chevaux. Qualité et sécurité garanties.",
        features: ["Léger et robuste", "Facilité d'attelage", "Prix attractif"],
        from: "À partir de 18 000€",
        explore: "Découvrir les remorques"
      },
      ctaTitle: "Une Question ? Un Projet ?",
      ctaDescription: "Nos experts vous conseillent gratuitement pour trouver le véhicule parfait selon vos besoins.",
      getFreeQuote: "Devis Gratuit",
      makeAppointment: "Prendre RDV",
      specialties: "Nos Spécialités",
      findPerfectVehicle: "Trouvez le Véhicule Parfait",
      disciplineDescription: "Pour Chaque Discipline Équestre"
    },
    trust: {
      badge: "Pourquoi nous choisir",
      title: "HTG, Votre Partenaire",
      subtitle: "de Confiance",
      description: "15 ans d'expertise dans le transport équin. Plus de 2500 clients nous font confiance pour leur passion.",
      stats: {
        experience: "15 ans d'expérience",
        clients: "2500+ clients satisfaits",
        satisfaction: "98% de satisfaction",
        response: "Réponse sous 24h"
      },
      reviewsTitle: "Ce que disent nos clients",
      reviewsDescription: "Découvrez les témoignages de passionnés qui nous font confiance",
      leaveReview: "Laisser un avis",
      partnersTitle: "Nos Partenaires de Confiance",
      partnersDescription: "Nous travaillons avec les meilleures marques du secteur",
      getQuote: "Demander un devis",
      partners: [
        { name: "Peugeot", logo: "/placeholder.svg", description: "Partenaire officiel" },
        { name: "Iveco", logo: "/placeholder.svg", description: "Distributeur agréé" },
        { name: "Mercedes", logo: "/placeholder.svg", description: "Centre de service" }
      ],
      reviews: [
        {
          id: "1",
          name: "Sarah Martin",
          role: "Cavalière professionnelle",
          content: "Service exceptionnel ! Mon van est parfait pour mes compétitions. L'équipe HTG a su comprendre mes besoins spécifiques.",
          text: "Service exceptionnel ! Mon van est parfait pour mes compétitions. L'équipe HTG a su comprendre mes besoins spécifiques.",
          rating: 5,
          image: "/placeholder.svg",
          verified: true,
          location: "Paris",
          vehicleType: "Van Chevaux",
          date: "2024-01-15"
        },
        {
          id: "2",
          name: "Pierre Dubois",
          role: "Centre équestre",
          content: "Camion livré dans les délais avec tous les équipements demandés. Qualité au rendez-vous, je recommande vivement !",
          text: "Camion livré dans les délais avec tous les équipements demandés. Qualité au rendez-vous, je recommande vivement !",
          rating: 5,
          image: "/placeholder.svg",
          verified: true,
          location: "Lyon",
          vehicleType: "Camion Chevaux",
          date: "2024-02-10"
        },
        {
          id: "3",
          name: "Marie Leroy",
          role: "Propriétaire de chevaux",
          content: "Excellent conseil pour l'achat de ma remorque. Prix transparent et service après-vente impeccable.",
          text: "Excellent conseil pour l'achat de ma remorque. Prix transparent et service après-vente impeccable.",
          rating: 5,
          image: "/placeholder.svg",
          verified: true,
          location: "Bordeaux",
          vehicleType: "Remorque Chevaux",
          date: "2024-01-28"
        }
      ]
    },
    offres: {
      badge: "Nos Offres",
      title: "Véhicules Premium",
      subtitle: "Sélectionnés pour Vous",
      description: "Découvrez notre sélection rigoureuse de véhicules neufs et d'occasion. Chaque véhicule est contrôlé par nos experts.",
      stats: {
        vehicles: "150+ véhicules",
        brands: "12 marques",
        clients: "2500+ clients",
        years: "15 ans d'expertise"
      },
      cta: {
        title: "Prêt à trouver votre véhicule idéal ?",
        description: "Contactez nos experts pour un conseil personnalisé et un devis gratuit sous 24h.",
        primaryButton: "Demander un devis",
        secondaryButton: "Voir tous les véhicules"
      },
      features: {
        quality: {
          title: "Qualité Garantie",
          description: "Tous nos véhicules sont rigoureusement contrôlés et certifiés"
        },
        expertise: {
          title: "Expertise Reconnue",
          description: "15 ans d'expérience dans le transport équin de qualité"
        },
        service: {
          title: "Service Premium",
          description: "Accompagnement personnalisé de l'achat à la livraison"
        },
        guarantee: {
          title: "Garantie Étendue",
          description: "Garantie constructeur et services après-vente inclus"
        },
        financing: {
          title: "Financement Facilité",
          description: "Solutions de financement adaptées à votre budget"
        },
        support: {
          title: "Support 24/7",
          description: "Équipe disponible pour répondre à toutes vos questions"
        }
      },
      newArrival: "Nouveauté",
      bestSeller: "Bestseller",
      limitedOffer: "Offre limitée",
      urgent: "Urgent",
      years: "ans",
      km: "km",
      places: "places",
      horsesCapacity: "chevaux",
      reviews: "avis",
      timeLeft: "Temps restant",
      vehicles: "véhicules",
      savings: "d'économies",
      expertiseGuaranteed: "Expertise garantie",
      featuredVehicles: "Véhicules mis en avant",
      premiumSelection: "Sélection Premium",
      ourBest: "Nos Meilleures",
      offersVehicles: "Offres Véhicules",
      discoverSelection: "Découvrir la Sélection",
      rigorouslyControlled: "Rigoureusement Contrôlés",
      models: "modèles",
      specialOffers: "Offres Spéciales",
      newArrivals2024: "Nouveautés 2024",
      bestseller: "Bestseller",
      mostRequested: "Les Plus Demandés",
      bestPrice: "Meilleur Prix",
      upTo15Off: "Jusqu'à -15%",
      receiveOffer24h: "Recevoir une offre sous 24h",
      personalizedExchange: "Échange personnalisé",
      discoverCollection: "Découvrir la Collection",
      moreEquipment: "Plus d'équipements",
      promotionalPrice: "Prix promotionnel",
      financingAvailable: "Financement disponible",
      discoverCharacteristics: "Découvrir les caractéristiques",
      addToMySelection: "Ajouter à ma sélection",
      onlyXDaysLeft: "Plus que X jours",
      favorite: "Favori"
    },
    common: {
      newArrival: "Nouveauté",
      bestseller: "Bestseller", 
      limitedOffer: "Offre limitée",
      urgent: "Urgent",
      years: "ans",
      km: "km",
      places: "places",
      horsesCapacity: "chevaux",
      reviews: "avis",
      timeLeft: "Temps restant",
      vehicles: "véhicules",
      savings: "d'économies",
      expertiseGuaranteed: "Expertise garantie",
      featuredVehicles: "Véhicules mis en avant",
      premiumSelection: "Sélection Premium",
      ourBest: "Nos Meilleures",
      offersVehicles: "Offres Véhicules",
      discoverSelection: "Découvrir la Sélection",
      rigorouslyControlled: "Rigoureusement Contrôlés",
      models: "modèles",
      specialOffers: "Offres Spéciales",
      newArrivals2024: "Nouveautés 2024",
      mostRequested: "Les Plus Demandés",
      bestPrice: "Meilleur Prix",
      upTo15Off: "Jusqu'à -15%",
      receiveOffer24h: "Recevoir une offre sous 24h",
      personalizedExchange: "Échange personnalisé",
      discoverCollection: "Découvrir la Collection",
      moreEquipment: "Plus d'équipements",
      promotionalPrice: "Prix promotionnel",
      financingAvailable: "Financement disponible",
      discoverCharacteristics: "Découvrir les caractéristiques",
      addToMySelection: "Ajouter à ma sélection",
      onlyXDaysLeft: "Plus que X jours",
      favorite: "Favori",
      disciplines: ["Dressage", "Saut d'obstacles", "Cross", "Endurance", "Attelage", "Western", "Loisir"],
      professionalUse: "Usage professionnel",
      personalUse: "Usage personnel",
      competition: "Compétition",
      leisure: "Loisir",
      transport: "Transport",
      quality: "Qualité",
      comfort: "Confort",
      safety: "Sécurité",
      reliability: "Fiabilité",
      innovation: "Innovation",
      expertise: "Expertise",
      performance: "Performance",
      efficiency: "Efficacité",
      economy: "Économie",
      durability: "Durabilité",
      versatility: "Polyvalence",
      maneuverability: "Maniabilité",
      technology: "Technologie",
      design: "Design",
      service: "Service",
      support: "Support",
      warranty: "Garantie",
      maintenance: "Maintenance",
      financing: "Financement",
      delivery: "Livraison",
      consultation: "Consultation",
      advice: "Conseil",
      experience: "Expérience",
      satisfaction: "Satisfaction",
      trust: "Confiance",
      partnership: "Partenariat",
      excellence: "Excellence",
      commitment: "Engagement",
      responsibility: "Responsabilité",
      sustainability: "Durabilité",
      environment: "Environnement",
      future: "Avenir"
    },
    features: {
      airSuspension: "Suspension pneumatique",
      cabinAirConditioning: "Climatisation cabine",
      nonSlipFlooring: "Plancher antidérapant",
      ledLighting: "Éclairage LED",
      ventilationSystem: "Système de ventilation",
      surveillanceCameras: "Caméras de surveillance",
      easyDriving: "Conduite facile",
      reducedConsumption: "Consommation réduite",
      modularity: "Modularité",
      lightAndRobust: "Léger et robuste",
      easyHitching: "Facilité d'attelage",
      attractivePrice: "Prix attractif",
      spaciousCabin: "Cabine spacieuse",
      sleepingArea: "Espace couchage",
      modernEquipment: "Équipements modernes",
      absBraking: "Freinage ABS",
      espSystem: "Système ESP",
      airSuspensionForHorses: "Suspension pneumatique pour chevaux",
      qualityConstruction: "Construction de qualité",
      reinforcedSecurity: "Sécurité renforcée",
      premiumFinishes: "Finitions premium",
      advancedTechnology: "Technologie avancée",
      optimalComfort: "Confort optimal",
      maximumSafety: "Sécurité maximale",
      environmentalRespect: "Respect environnemental",
      fuelEfficiency: "Efficacité énergétique",
      easyMaintenance: "Maintenance facile",
      longDurability: "Longue durabilité",
      flexibleConfiguration: "Configuration flexible",
      intuitiveControls: "Commandes intuitives",
      quietOperation: "Fonctionnement silencieux",
      smoothRide: "Conduite en douceur",
      precisionHandling: "Maniement de précision",
      reliablePerformance: "Performance fiable",
      innovativeDesign: "Design innovant",
      practicalSolutions: "Solutions pratiques",
      professionalEquipment: "Équipement professionnel",
      certifiedQuality: "Qualité certifiée",
      guaranteedSafety: "Sécurité garantie",
      provenReliability: "Fiabilité prouvée"
    },
    footer: {
      company: {
        title: "Entreprise",
        about: "À propos",
        team: "Équipe",
        careers: "Carrières",
        press: "Presse",
        blog: "Blog",
        contact: "Contact"
      },
      vehicles: {
        title: "Véhicules",
        horseTrucks: "Camions chevaux",
        horseVans: "Vans chevaux",
        horseTrailers: "Remorques chevaux",
        usedVehicles: "Véhicules d'occasion",
        newVehicles: "Véhicules neufs",
        financing: "Financement"
      },
      services: {
        title: "Services",
        maintenance: "Maintenance",
        insurance: "Assurance",
        warranty: "Garantie",
        delivery: "Livraison",
        tradingIn: "Reprise",
        expertise: "Expertise"
      },
      support: {
        title: "Support",
        customerService: "Service client",
        technicalSupport: "Support technique",
        documentation: "Documentation",
        faq: "FAQ",
        tutorials: "Tutoriels",
        community: "Communauté"
      },
      legal: {
        title: "Légal",
        termsOfService: "Conditions d'utilisation",
        privacyPolicy: "Politique de confidentialité",
        cookiePolicy: "Politique des cookies",
        legalNotices: "Mentions légales",
        gdpr: "RGPD",
        accessibility: "Accessibilité"
      },
      social: {
        title: "Réseaux sociaux",
        facebook: "Facebook",
        instagram: "Instagram",
        youtube: "YouTube",
        linkedin: "LinkedIn",
        twitter: "Twitter",
        newsletter: "Newsletter"
      },
      newsletter: {
        title: "Newsletter",
        description: "Restez informé de nos nouveautés",
        placeholder: "Votre email",
        subscribe: "S'abonner",
        success: "Inscription réussie !",
        error: "Erreur lors de l'inscription"
      },
      contact: {
        address: "123 Rue des Chevaux, 45000 Orléans",
        phone: "01 23 45 67 89",
        email: "contact@htg-france.com",
        hours: "Lun-Ven 8h-18h, Sam 9h-17h",
        emergency: "Service d'urgence 24h/7j"
      },
      copyright: "© 2024 HTG France",
      allRightsReserved: "Tous droits réservés",
      madeWith: "Fait avec",
      love: "amour",
      in: "en",
      france: "France"
    },
    floating: {
      title: "Besoin d'aide ?",
      subtitle: "Nos experts vous conseillent",
      cta: "Nous contacter",
      phone: "Appeler",
      whatsapp: "WhatsApp",
      email: "Email"
    },
    quoteRequestPage: {
      hero: {
        badge: "Demande de Devis",
        title: "Obtenez Votre Devis",
        subtitle: "Personnalisé Gratuit",
        description: "Nos experts vous accompagnent dans le choix de votre véhicule de transport équin. Réponse garantie sous 24h."
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
        title: "Types de Véhicules Disponibles",
        truck: {
          type: "Camion Chevaux",
          priceRange: "45 000€ - 120 000€",
          popular: "Le plus demandé",
          capacities: ["2 chevaux", "3 chevaux", "4 chevaux", "5 chevaux", "6 chevaux et +"]
        },
        van: {
          type: "Van Chevaux",
          priceRange: "25 000€ - 85 000€",
          capacities: ["1 cheval", "2 chevaux", "3 chevaux"]
        },
        trailer: {
          type: "Remorque Chevaux",
          priceRange: "15 000€ - 55 000€",
          capacities: ["1 cheval", "2 chevaux", "3 chevaux"]
        }
      },
      form: {
        title: "Formulaire de Demande de Devis",
        description: "Remplissez ce formulaire détaillé pour recevoir votre devis personnalisé sous 24h",
        personalInfo: "Informations Personnelles",
        firstName: "Prénom",
        firstNamePlaceholder: "Votre prénom",
        lastName: "Nom",
        lastNamePlaceholder: "Votre nom",
        email: "Email",
        emailPlaceholder: "votre@email.com",
        phone: "Téléphone",
        phonePlaceholder: "06 12 34 56 78",
        company: "Entreprise (optionnel)",
        companyPlaceholder: "Nom de votre entreprise",
        vehicleRequirements: "Exigences du Véhicule",
        vehicleType: "Type de véhicule souhaité",
        vehicleTypePlaceholder: "Sélectionnez un type",
        capacity: "Capacité souhaitée",
        capacityPlaceholder: "Nombre de chevaux",
        budget: "Budget estimé",
        budgetPlaceholder: "Sélectionnez votre budget",
        usage: "Utilisation Prévue",
        usageType: "Type d'utilisation",
        usageTypePlaceholder: "Personnel, professionnel...",
        annualKm: "Kilométrage annuel estimé",
        annualKmPlaceholder: "Ex: 15 000 km/an",
        urgency: "Délai souhaité",
        urgencyPlaceholder: "Quand souhaitez-vous acheter ?",
        additionalInfo: "Informations Complémentaires",
        message: "Message (besoins spécifiques, questions...)",
        messagePlaceholder: "Décrivez vos besoins spécifiques, contraintes particulières, équipements souhaités...",
        submitButton: "Envoyer ma Demande de Devis",
        successMessage: "Votre demande a été envoyée avec succès ! Nous vous recontactons sous 24h.",
        vehicleTypes: {
          truck: "Camion Chevaux",
          van: "Van Chevaux",
          trailer: "Remorque Chevaux",
          other: "Autre / Conseil"
        },
        capacities: {
          oneHorse: "1 cheval",
          twoHorses: "2 chevaux",
          threeHorses: "3 chevaux",
          fourHorses: "4 chevaux",
          fiveHorses: "5 chevaux",
          sixPlusHorses: "6 chevaux et +"
        },
        budgetRanges: {
          under30k: "Moins de 30 000€",
          range30k50k: "30 000€ - 50 000€",
          range50k80k: "50 000€ - 80 000€",
          range80k120k: "80 000€ - 120 000€",
          over120k: "Plus de 120 000€"
        },
        usageTypes: {
          personal: "Usage personnel",
          professional: "Usage professionnel",
          mixed: "Usage mixte"
        },
        urgencyOptions: {
          immediate: "Immédiat (dans le mois)",
          month: "Dans 1 à 3 mois",
          threeMonths: "Dans 3 à 6 mois",
          sixMonths: "Dans 6 mois à 1 an",
          noUrgency: "Pas d'urgence particulière"
        }
      }
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
        subtitle: "Premium equine transport",
        title: "Professional Horse Trucks",
        description: "Discover our selection of high-end trucks for transporting your horses. Comfort, safety and reliability guaranteed."
      },
      slide2: {
        subtitle: "Compact solutions",
        title: "Latest Generation Horse Vans",
        description: "Perfect for 1 to 3 horses, our vans combine maneuverability and cutting-edge equipment for your daily trips."
      },
      slide3: {
        subtitle: "Economical and practical",
        title: "Certified Horse Trailers",
        description: "The economical alternative for equine transport. Wide choice of new and used trailers, all inspected."
      },
      slide4: {
        subtitle: "Inspected vehicles",
        title: "Carefully Selected Used Vehicles",
        description: "Used vehicles rigorously selected and inspected. Warranty, financing and delivery throughout France."
      },
      slide5: {
        subtitle: "15 years of expertise",
        title: "Your Equine Transport Partner",
        description: "HTG has been supporting you for 15 years in all your projects. Personalized advice and exceptional customer service."
      },
      cta: "Discover our vehicles"
    },
    categories: {
      title: "Choose Your",
      subtitle: "Ideal Vehicle",
      horseTrucks: {
        title: "Horse Trucks",
        description: "Professional solutions for 2 to 8 horses. Maximum comfort and premium equipment.",
        features: ["Air suspension", "Cabin air conditioning", "Non-slip flooring"],
        from: "From €65,000",
        explore: "Discover trucks"
      },
      horseVans: {
        title: "Horse Vans",
        description: "Perfect for 1 to 3 horses. Maneuverable, economical and very well equipped.",
        features: ["Easy driving", "Reduced consumption", "Modularity"],
        from: "From €35,000",
        explore: "Discover vans"
      },
      horseTrailers: {
        title: "Horse Trailers",
        description: "Economical solution for 1 to 3 horses. Quality and safety guaranteed.",
        features: ["Light and robust", "Easy hitching", "Attractive price"],
        from: "From €18,000",
        explore: "Discover trailers"
      },
      ctaTitle: "A Question? A Project?",
      ctaDescription: "Our experts advise you for free to find the perfect vehicle according to your needs.",
      getFreeQuote: "Free Quote",
      makeAppointment: "Make an Appointment",
      specialties: "Our Specialties",
      findPerfectVehicle: "Find the Perfect Vehicle",
      disciplineDescription: "For Every Equestrian Discipline"
    },
    trust: {
      badge: "Why choose us",
      title: "HTG, Your Trusted",
      subtitle: "Partner",
      description: "15 years of expertise in equine transport. More than 2500 customers trust us for their passion.",
      stats: {
        experience: "15 years of experience",
        clients: "2500+ satisfied customers",
        satisfaction: "98% satisfaction",
        response: "Response within 24h"
      },
      reviewsTitle: "What our customers say",
      reviewsDescription: "Discover testimonials from enthusiasts who trust us",
      leaveReview: "Leave a review",
      partnersTitle: "Our Trusted Partners",
      partnersDescription: "We work with the best brands in the sector",
      getQuote: "Request a quote",
      partners: [
        { name: "Peugeot", logo: "/placeholder.svg", description: "Official partner" },
        { name: "Iveco", logo: "/placeholder.svg", description: "Authorized distributor" },
        { name: "Mercedes", logo: "/placeholder.svg", description: "Service center" }
      ],
      reviews: [
        {
          id: "1",
          name: "Sarah Martin",
          role: "Professional rider",
          content: "Exceptional service! My van is perfect for my competitions. The HTG team understood my specific needs.",
          text: "Exceptional service! My van is perfect for my competitions. The HTG team understood my specific needs.",
          rating: 5,
          image: "/placeholder.svg",
          verified: true,
          location: "Paris",
          vehicleType: "Horse Van",
          date: "2024-01-15"
        },
        {
          id: "2",
          name: "Pierre Dubois",
          role: "Equestrian center",
          content: "Truck delivered on time with all requested equipment. Quality as expected, I highly recommend!",
          text: "Truck delivered on time with all requested equipment. Quality as expected, I highly recommend!",
          rating: 5,
          image: "/placeholder.svg",
          verified: true,
          location: "Lyon",
          vehicleType: "Horse Truck",
          date: "2024-02-10"
        },
        {
          id: "3",
          name: "Marie Leroy",
          role: "Horse owner",
          content: "Excellent advice for buying my trailer. Transparent price and impeccable after-sales service.",
          text: "Excellent advice for buying my trailer. Transparent price and impeccable after-sales service.",
          rating: 5,
          image: "/placeholder.svg",
          verified: true,
          location: "Bordeaux",
          vehicleType: "Horse Trailer",
          date: "2024-01-28"
        }
      ]
    },
    offres: {
      badge: "Our Offers",
      title: "Premium Vehicles",
      subtitle: "Selected for You",
      description: "Discover our rigorous selection of new and used vehicles. Each vehicle is inspected by our experts.",
      stats: {
        vehicles: "150+ vehicles",
        brands: "12 brands",
        clients: "2500+ customers",
        years: "15 years of expertise"
      },
      cta: {
        title: "Ready to find your ideal vehicle?",
        description: "Contact our experts for personalized advice and a free quote within 24h.",
        primaryButton: "Request a quote",
        secondaryButton: "See all vehicles"
      },
      features: {
        quality: {
          title: "Quality Guaranteed",
          description: "All our vehicles are rigorously inspected and certified"
        },
        expertise: {
          title: "Recognized Expertise",
          description: "15 years of experience in quality equine transport"
        },
        service: {
          title: "Premium Service",
          description: "Personalized support from purchase to delivery"
        },
        guarantee: {
          title: "Extended Warranty",
          description: "Manufacturer warranty and after-sales services included"
        },
        financing: {
          title: "Easy Financing",
          description: "Financing solutions adapted to your budget"
        },
        support: {
          title: "24/7 Support",
          description: "Team available to answer all your questions"
        }
      },
      newArrival: "New",
      bestSeller: "Bestseller",
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
      featuredVehicles: "Featured vehicles",
      premiumSelection: "Premium Selection",
      ourBest: "Our Best",
      offersVehicles: "Vehicle Offers",
      discoverSelection: "Discover the Selection",
      rigorouslyControlled: "Rigorously Controlled",
      models: "models",
      specialOffers: "Special Offers",
      newArrivals2024: "New 2024",
      bestseller: "Bestseller",
      mostRequested: "Most Requested",
      bestPrice: "Best Price",
      upTo15Off: "Up to -15%",
      receiveOffer24h: "Receive an offer within 24h",
      personalizedExchange: "Personalized exchange",
      discoverCollection: "Discover the Collection",
      moreEquipment: "More equipment",
      promotionalPrice: "Promotional price",
      financingAvailable: "Financing available",
      discoverCharacteristics: "Discover characteristics",
      addToMySelection: "Add to my selection",
      onlyXDaysLeft: "Only X days left",
      favorite: "Favorite"
    },
    common: {
      newArrival: "New",
      bestseller: "Bestseller",
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
      featuredVehicles: "Featured vehicles",
      premiumSelection: "Premium Selection",
      ourBest: "Our Best",
      offersVehicles: "Vehicle Offers",
      discoverSelection: "Discover the Selection",
      rigorouslyControlled: "Rigorously Controlled",
      models: "models",
      specialOffers: "Special Offers",
      newArrivals2024: "New 2024",
      mostRequested: "Most Requested",
      bestPrice: "Best Price",
      upTo15Off: "Up to -15%",
      receiveOffer24h: "Receive an offer within 24h",
      personalizedExchange: "Personalized exchange",
      discoverCollection: "Discover the Collection",
      moreEquipment: "More equipment",
      promotionalPrice: "Promotional price",
      financingAvailable: "Financing available",
      discoverCharacteristics: "Discover characteristics",
      addToMySelection: "Add to my selection",
      onlyXDaysLeft: "Only X days left",
      favorite: "Favorite",
      disciplines: ["Dressage", "Show jumping", "Cross-country", "Endurance", "Driving", "Western", "Leisure"],
      professionalUse: "Professional use",
      personalUse: "Personal use",
      competition: "Competition",
      leisure: "Leisure",
      transport: "Transport",
      quality: "Quality",
      comfort: "Comfort",
      safety: "Safety",
      reliability: "Reliability",
      innovation: "Innovation",
      expertise: "Expertise",
      performance: "Performance",
      efficiency: "Efficiency",
      economy: "Economy",
      durability: "Durability",
      versatility: "Versatility",
      maneuverability: "Maneuverability",
      technology: "Technology",
      design: "Design",
      service: "Service",
      support: "Support",
      warranty: "Warranty",
      maintenance: "Maintenance",
      financing: "Financing",
      delivery: "Delivery",
      consultation: "Consultation",
      advice: "Advice",
      experience: "Experience",
      satisfaction: "Satisfaction",
      trust: "Trust",
      partnership: "Partnership",
      excellence: "Excellence",
      commitment: "Commitment",
      responsibility: "Responsibility",
      sustainability: "Sustainability",
      environment: "Environment",
      future: "Future"
    },
    features: {
      airSuspension: "Air suspension",
      cabinAirConditioning: "Cabin air conditioning",
      nonSlipFlooring: "Non-slip flooring",
      ledLighting: "LED lighting",
      ventilationSystem: "Ventilation system",
      surveillanceCameras: "Surveillance cameras",
      easyDriving: "Easy driving",
      reducedConsumption: "Reduced consumption",
      modularity: "Modularity",
      lightAndRobust: "Light and robust",
      easyHitching: "Easy hitching",
      attractivePrice: "Attractive price",
      spaciousCabin: "Spacious cabin",
      sleepingArea: "Sleeping area",
      modernEquipment: "Modern equipment",
      absBraking: "ABS braking",
      espSystem: "ESP system",
      airSuspensionForHorses: "Air suspension for horses",
      qualityConstruction: "Quality construction",
      reinforcedSecurity: "Reinforced security",
      premiumFinishes: "Premium finishes",
      advancedTechnology: "Advanced technology",
      optimalComfort: "Optimal comfort",
      maximumSafety: "Maximum safety",
      environmentalRespect: "Environmental respect",
      fuelEfficiency: "Fuel efficiency",
      easyMaintenance: "Easy maintenance",
      longDurability: "Long durability",
      flexibleConfiguration: "Flexible configuration",
      intuitiveControls: "Intuitive controls",
      quietOperation: "Quiet operation",
      smoothRide: "Smooth ride",
      precisionHandling: "Precision handling",
      reliablePerformance: "Reliable performance",
      innovativeDesign: "Innovative design",
      practicalSolutions: "Practical solutions",
      professionalEquipment: "Professional equipment",
      certifiedQuality: "Certified quality",
      guaranteedSafety: "Guaranteed safety",
      provenReliability: "Proven reliability"
    },
    footer: {
      company: {
        title: "Company",
        about: "About",
        team: "Team",
        careers: "Careers",
        press: "Press",
        blog: "Blog",
        contact: "Contact"
      },
      vehicles: {
        title: "Vehicles",
        horseTrucks: "Horse trucks",
        horseVans: "Horse vans",
        horseTrailers: "Horse trailers",
        usedVehicles: "Used vehicles",
        newVehicles: "New vehicles",
        financing: "Financing"
      },
      services: {
        title: "Services",
        maintenance: "Maintenance",
        insurance: "Insurance",
        warranty: "Warranty",
        delivery: "Delivery",
        tradingIn: "Trade-in",
        expertise: "Expertise"
      },
      support: {
        title: "Support",
        customerService: "Customer service",
        technicalSupport: "Technical support",
        documentation: "Documentation",
        faq: "FAQ",
        tutorials: "Tutorials",
        community: "Community"
      },
      legal: {
        title: "Legal",
        termsOfService: "Terms of service",
        privacyPolicy: "Privacy policy",
        cookiePolicy: "Cookie policy",
        legalNotices: "Legal notices",
        gdpr: "GDPR",
        accessibility: "Accessibility"
      },
      social: {
        title: "Social media",
        facebook: "Facebook",
        instagram: "Instagram",
        youtube: "YouTube",
        linkedin: "LinkedIn",
        twitter: "Twitter",
        newsletter: "Newsletter"
      },
      newsletter: {
        title: "Newsletter",
        description: "Stay informed about our latest news",
        placeholder: "Your email",
        subscribe: "Subscribe",
        success: "Successfully subscribed!",
        error: "Subscription error"
      },
      contact: {
        address: "123 Rue des Chevaux, 45000 Orléans",
        phone: "01 23 45 67 89",
        email: "contact@htg-france.com",
        hours: "Mon-Fri 8am-6pm, Sat 9am-5pm",
        emergency: "24/7 emergency service"
      },
      copyright: "© 2024 HTG France",
      allRightsReserved: "All rights reserved",
      madeWith: "Made with",
      love: "love",
      in: "in",
      france: "France"
    },
    floating: {
      title: "Need help?",
      subtitle: "Our experts advise you",
      cta: "Contact us",
      phone: "Call",
      whatsapp: "WhatsApp",
      email: "Email"
    },
    quoteRequestPage: {
      hero: {
        badge: "Quote Request",
        title: "Get Your",
        subtitle: "Free Personalized Quote",
        description: "Our experts guide you in choosing your equine transport vehicle. Response guaranteed within 24h."
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
          description: "A personal advisor follows your case"
        }
      },
      vehicleTypes: {
        title: "Available Vehicle Types",
        truck: {
          type: "Horse Truck",
          priceRange: "€45,000 - €120,000",
          popular: "Most requested",
          capacities: ["2 horses", "3 horses", "4 horses", "5 horses", "6+ horses"]
        },
        van: {
          type: "Horse Van",
          priceRange: "€25,000 - €85,000",
          capacities: ["1 horse", "2 horses", "3 horses"]
        },
        trailer: {
          type: "Horse Trailer",
          priceRange: "€15,000 - €55,000",
          capacities: ["1 horse", "2 horses", "3 horses"]
        }
      },
      form: {
        title: "Quote Request Form",
        description: "Fill out this detailed form to receive your personalized quote within 24h",
        personalInfo: "Personal Information",
        firstName: "First Name",
        firstNamePlaceholder: "Your first name",
        lastName: "Last Name",
        lastNamePlaceholder: "Your last name",
        email: "Email",
        emailPlaceholder: "your@email.com",
        phone: "Phone",
        phonePlaceholder: "06 12 34 56 78",
        company: "Company (optional)",
        companyPlaceholder: "Your company name",
        vehicleRequirements: "Vehicle Requirements",
        vehicleType: "Desired vehicle type",
        vehicleTypePlaceholder: "Select a type",
        capacity: "Desired capacity",
        capacityPlaceholder: "Number of horses",
        budget: "Estimated budget",
        budgetPlaceholder: "Select your budget",
        usage: "Planned Use",
        usageType: "Type of use",
        usageTypePlaceholder: "Personal, professional...",
        annualKm: "Estimated annual mileage",
        annualKmPlaceholder: "Ex: 15,000 km/year",
        urgency: "Desired timeframe",
        urgencyPlaceholder: "When do you want to buy?",
        additionalInfo: "Additional Information",
        message: "Message (specific needs, questions...)",
        messagePlaceholder: "Describe your specific needs, particular constraints, desired equipment...",
        submitButton: "Send My Quote Request",
        successMessage: "Your request has been sent successfully! We will contact you within 24h.",
        vehicleTypes: {
          truck: "Horse Truck",
          van: "Horse Van",
          trailer: "Horse Trailer",
          other: "Other / Advice"
        },
        capacities: {
          oneHorse: "1 horse",
          twoHorses: "2 horses",
          threeHorses: "3 horses",
          fourHorses: "4 horses",
          fiveHorses: "5 horses",
          sixPlusHorses: "6+ horses"
        },
        budgetRanges: {
          under30k: "Under €30,000",
          range30k50k: "€30,000 - €50,000",
          range50k80k: "€50,000 - €80,000",
          range80k120k: "€80,000 - €120,000",
          over120k: "Over €120,000"
        },
        usageTypes: {
          personal: "Personal use",
          professional: "Professional use",
          mixed: "Mixed use"
        },
        urgencyOptions: {
          immediate: "Immediate (within a month)",
          month: "Within 1 to 3 months",
          threeMonths: "Within 3 to 6 months",
          sixMonths: "Within 6 months to 1 year",
          noUrgency: "No particular urgency"
        }
      }
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
      occasions: "Vehículos Usados"
    },
    // Simplified Spanish translations for brevity
    hero: { slide1: { subtitle: "Transporte equino premium", title: "Camiones Profesionales para Caballos", description: "Descubra nuestra selección de camiones de alta gama para el transporte de sus caballos. Comodidad, seguridad y fiabilidad garantizadas." }, slide2: { subtitle: "Soluciones compactas", title: "Furgonetas para Caballos de Última Generación", description: "Perfectas para 1 a 3 caballos, nuestras furgonetas combinan maniobrabilidad y equipos de vanguardia para sus desplazamientos diarios." }, slide3: { subtitle: "Económico y práctico", title: "Remolques para Caballos Certificados", description: "La alternativa económica para el transporte equino. Amplia selección de remolques nuevos y usados, todos inspeccionados." }, slide4: { subtitle: "Vehículos inspeccionados", title: "Vehículos Usados Cuidadosamente Seleccionados", description: "Vehículos usados rigurosamente seleccionados e inspeccionados. Garantía, financiación y entrega en toda Francia." }, slide5: { subtitle: "15 años de experiencia", title: "Su Socio en Transporte Equino", description: "HTG le ha apoyado durante 15 años en todos sus proyectos. Asesoramiento personalizado y servicio al cliente excepcional." }, cta: "Descubrir nuestros vehículos" },
    categories: { title: "Elija Su", subtitle: "Vehículo Ideal", horseTrucks: { title: "Camiones para Caballos", description: "Soluciones profesionales para 2 a 8 caballos. Máximo confort y equipos de alta gama.", features: ["Suspensión neumática", "Aire acondicionado en cabina", "Suelo antideslizante"], from: "Desde 65.000€", explore: "Descubrir camiones" }, horseVans: { title: "Furgonetas para Caballos", description: "Perfectas para 1 a 3 caballos. Maniobrables, económicas y muy bien equipadas.", features: ["Conducción fácil", "Consumo reducido", "Modularidad"], from: "Desde 35.000€", explore: "Descubrir furgonetas" }, horseTrailers: { title: "Remolques para Caballos", description: "Solución económica para 1 a 3 caballos. Calidad y seguridad garantizadas.", features: ["Ligero y robusto", "Facilidad de enganche", "Precio atractivo"], from: "Desde 18.000€", explore: "Descubrir remolques" }, ctaTitle: "¿Una Pregunta? ¿Un Proyecto?", ctaDescription: "Nuestros expertos le asesoran gratuitamente para encontrar el vehículo perfecto según sus necesidades.", getFreeQuote: "Presupuesto Gratuito", makeAppointment: "Concertar Cita", specialties: "Nuestras Especialidades", findPerfectVehicle: "Encuentre el Vehículo Perfecto", disciplineDescription: "Para Cada Disciplina Ecuestre" },
    trust: { badge: "Por qué elegirnos", title: "HTG, Su Socio", subtitle: "de Confianza", description: "15 años de experiencia en transporte equino. Más de 2500 clientes confían en nosotros para su pasión.", stats: { experience: "15 años de experiencia", clients: "2500+ clientes satisfechos", satisfaction: "98% de satisfacción", response: "Respuesta en 24h" }, reviewsTitle: "Lo que dicen nuestros clientes", reviewsDescription: "Descubra testimonios de entusiastas que confían en nosotros", leaveReview: "Dejar una reseña", partnersTitle: "Nuestros Socios de Confianza", partnersDescription: "Trabajamos con las mejores marcas del sector", getQuote: "Solicitar un presupuesto", partners: [{ name: "Peugeot", logo: "/placeholder.svg", description: "Socio oficial" }, { name: "Iveco", logo: "/placeholder.svg", description: "Distribuidor autorizado" }, { name: "Mercedes", logo: "/placeholder.svg", description: "Centro de servicio" }], reviews: [{ id: "1", name: "Sarah Martin", role: "Jinete profesional", content: "¡Servicio excepcional! Mi furgoneta es perfecta para mis competiciones. El equipo HTG entendió mis necesidades específicas.", text: "¡Servicio excepcional! Mi furgoneta es perfecta para mis competiciones. El equipo HTG entendió mis necesidades específicas.", rating: 5, image: "/placeholder.svg", verified: true, location: "París", vehicleType: "Furgoneta para Caballos", date: "2024-01-15" }, { id: "2", name: "Pierre Dubois", role: "Centro ecuestre", content: "Camión entregado a tiempo con todo el equipo solicitado. Calidad como se esperaba, ¡lo recomiendo encarecidamente!", text: "Camión entregado a tiempo con todo el equipo solicitado. Calidad como se esperaba, ¡lo recomiendo encarecidamente!", rating: 5, image: "/placeholder.svg", verified: true, location: "Lyon", vehicleType: "Camión para Caballos", date: "2024-02-10" }, { id: "3", name: "Marie Leroy", role: "Propietaria de caballos", content: "Excelente consejo para comprar mi remolque. Precio transparente y servicio posventa impecable.", text: "Excelente consejo para comprar mi remolque. Precio transparente y servicio posventa impecable.", rating: 5, image: "/placeholder.svg", verified: true, location: "Burdeos", vehicleType: "Remolque para Caballos", date: "2024-01-28" }] },
    offres: { badge: "Nuestras Ofertas", title: "Vehículos Premium", subtitle: "Seleccionados para Usted", description: "Descubra nuestra rigurosa selección de vehículos nuevos y usados. Cada vehículo es inspeccionado por nuestros expertos.", stats: { vehicles: "150+ vehículos", brands: "12 marcas", clients: "2500+ clientes", years: "15 años de experiencia" }, cta: { title: "¿Listo para encontrar su vehículo ideal?", description: "Contacte a nuestros expertos para asesoramiento personalizado y un presupuesto gratuito en 24h.", primaryButton: "Solicitar un presupuesto", secondaryButton: "Ver todos los vehículos" }, features: { quality: { title: "Calidad Garantizada", description: "Todos nuestros vehículos son rigurosamente inspeccionados y certificados" }, expertise: { title: "Experiencia Reconocida", description: "15 años de experiencia en transporte equino de calidad" }, service: { title: "Servicio Premium", description: "Acompañamiento personalizado desde la compra hasta la entrega" }, guarantee: { title: "Garantía Extendida", description: "Garantía del fabricante y servicios posventa incluidos" }, financing: { title: "Financiación Facilitada", description: "Soluciones de financiación adaptadas a su presupuesto" }, support: { title: "Soporte 24/7", description: "Equipo disponible para responder a todas sus preguntas" } }, newArrival: "Novedad", bestSeller: "Bestseller", limitedOffer: "Oferta limitada", urgent: "Urgente", years: "años", km: "km", places: "plazas", horsesCapacity: "caballos", reviews: "reseñas", timeLeft: "Tiempo restante", vehicles: "vehículos", savings: "de ahorro", expertiseGuaranteed: "Experiencia garantizada", featuredVehicles: "Vehículos destacados", premiumSelection: "Selección Premium", ourBest: "Nuestras Mejores", offersVehicles: "Ofertas de Vehículos", discoverSelection: "Descubrir la Selección", rigorouslyControlled: "Rigurosamente Controlados", models: "modelos", specialOffers: "Ofertas Especiales", newArrivals2024: "Novedades 2024", bestseller: "Bestseller", mostRequested: "Los Más Solicitados", bestPrice: "Mejor Precio", upTo15Off: "Hasta -15%", receiveOffer24h: "Recibir una oferta en 24h", personalizedExchange: "Intercambio personalizado", discoverCollection: "Descubrir la Colección", moreEquipment: "Más equipamiento", promotionalPrice: "Precio promocional", financingAvailable: "Financiación disponible", discoverCharacteristics: "Descubrir características", addToMySelection: "Añadir a mi selección", onlyXDaysLeft: "Solo quedan X días", favorite: "Favorito" },
    common: { newArrival: "Novedad", bestseller: "Bestseller", limitedOffer: "Oferta limitada", urgent: "Urgente", years: "años", km: "km", places: "plazas", horsesCapacity: "caballos", reviews: "reseñas", timeLeft: "Tiempo restante", vehicles: "vehículos", savings: "de ahorro", expertiseGuaranteed: "Experiencia garantizada", featuredVehicles: "Vehículos destacados", premiumSelection: "Selección Premium", ourBest: "Nuestras Mejores", offersVehicles: "Ofertas de Vehículos", discoverSelection: "Descubrir la Selección", rigorouslyControlled: "Rigurosamente Controlados", models: "modelos", specialOffers: "Ofertas Especiales", newArrivals2024: "Novedades 2024", mostRequested: "Los Más Solicitados", bestPrice: "Mejor Precio", upTo15Off: "Hasta -15%", receiveOffer24h: "Recibir una oferta en 24h", personalizedExchange: "Intercambio personalizado", discoverCollection: "Descubrir la Colección", moreEquipment: "Más equipamiento", promotionalPrice: "Precio promocional", financingAvailable: "Financiación disponible", discoverCharacteristics: "Descubrir características", addToMySelection: "Añadir a mi selección", onlyXDaysLeft: "Solo quedan X días", favorite: "Favorito", disciplines: ["Doma", "Salto", "Cross", "Resistencia", "Enganche", "Western", "Ocio"], professionalUse: "Uso profesional", personalUse: "Uso personal", competition: "Competición", leisure: "Ocio", transport: "Transporte", quality: "Calidad", comfort: "Confort", safety: "Seguridad", reliability: "Fiabilidad", innovation: "Innovación", expertise: "Experiencia", performance: "Rendimiento", efficiency: "Eficiencia", economy: "Economía", durability: "Durabilidad", versatility: "Versatilidad", maneuverability: "Maniobrabilidad", technology: "Tecnología", design: "Diseño", service: "Servicio", support: "Soporte", warranty: "Garantía", maintenance: "Mantenimiento", financing: "Financiación", delivery: "Entrega", consultation: "Consulta", advice: "Consejo", experience: "Experiencia", satisfaction: "Satisfacción", trust: "Confianza", partnership: "Asociación", excellence: "Excelencia", commitment: "Compromiso", responsibility: "Responsabilidad", sustainability: "Sostenibilidad", environment: "Medio ambiente", future: "Futuro" },
    features: { airSuspension: "Suspensión neumática", cabinAirConditioning: "Aire acondicionado en cabina", nonSlipFlooring: "Suelo antideslizante", ledLighting: "Iluminación LED", ventilationSystem: "Sistema de ventilación", surveillanceCameras: "Cámaras de vigilancia", easyDriving: "Conducción fácil", reducedConsumption: "Consumo reducido", modularity: "Modularidad", lightAndRobust: "Ligero y robusto", easyHitching: "Facilidad de enganche", attractivePrice: "Precio atractivo", spaciousCabin: "Cabina espaciosa", sleepingArea: "Área de descanso", modernEquipment: "Equipos modernos", absBraking: "Frenado ABS", espSystem: "Sistema ESP", airSuspensionForHorses: "Suspensión neumática para caballos", qualityConstruction: "Construcción de calidad", reinforcedSecurity: "Seguridad reforzada", premiumFinishes: "Acabados premium", advancedTechnology: "Tecnología avanzada", optimalComfort: "Confort óptimo", maximumSafety: "Seguridad máxima", environmentalRespect: "Respeto ambiental", fuelEfficiency: "Eficiencia de combustible", easyMaintenance: "Mantenimiento fácil", longDurability: "Larga durabilidad", flexibleConfiguration: "Configuración flexible", intuitiveControls: "Controles intuitivos", quietOperation: "Funcionamiento silencioso", smoothRide: "Conducción suave", precisionHandling: "Manejo de precisión", reliablePerformance: "Rendimiento confiable", innovativeDesign: "Diseño innovador", practicalSolutions: "Soluciones prácticas", professionalEquipment: "Equipo profesional", certifiedQuality: "Calidad certificada", guaranteedSafety: "Seguridad garantizada", provenReliability: "Fiabilidad probada" },
    footer: { company: { title: "Empresa", about: "Acerca de", team: "Equipo", careers: "Carreras", press: "Prensa", blog: "Blog", contact: "Contacto" }, vehicles: { title: "Vehículos", horseTrucks: "Camiones para caballos", horseVans: "Furgonetas para caballos", horseTrailers: "Remolques para caballos", usedVehicles: "Vehículos usados", newVehicles: "Vehículos nuevos", financing: "Financiación" }, services: { title: "Servicios", maintenance: "Mantenimiento", insurance: "Seguro", warranty: "Garantía", delivery: "Entrega", tradingIn: "Intercambio", expertise: "Experiencia" }, support: { title: "Soporte", customerService: "Servicio al cliente", technicalSupport: "Soporte técnico", documentation: "Documentación", faq: "FAQ", tutorials: "Tutoriales", community: "Comunidad" }, legal: { title: "Legal", termsOfService: "Términos de servicio", privacyPolicy: "Política de privacidad", cookiePolicy: "Política de cookies", legalNotices: "Avisos legales", gdpr: "RGPD", accessibility: "Accesibilidad" }, social: { title: "Redes sociales", facebook: "Facebook", instagram: "Instagram", youtube: "YouTube", linkedin: "LinkedIn", twitter: "Twitter", newsletter: "Newsletter" }, newsletter: { title: "Newsletter", description: "Manténgase informado sobre nuestras novedades", placeholder: "Su email", subscribe: "Suscribirse", success: "¡Suscripción exitosa!", error: "Error en la suscripción" }, contact: { address: "123 Rue des Chevaux, 45000 Orléans", phone: "01 23 45 67 89", email: "contact@htg-france.com", hours: "Lun-Vie 8h-18h, Sáb 9h-17h", emergency: "Servicio de emergencia 24h/7j" }, copyright: "© 2024 HTG Francia", allRightsReserved: "Todos los derechos reservados", madeWith: "Hecho con", love: "amor", in: "en", france: "Francia" },
    floating: { title: "¿Necesita ayuda?", subtitle: "Nuestros expertos le asesoran", cta: "Contáctenos", phone: "Llamar", whatsapp: "WhatsApp", email: "Email" },
    quoteRequestPage: { hero: { badge: "Solicitud de Presupuesto", title: "Obtén Tu Presupuesto", subtitle: "Personalizado Gratuito", description: "Nuestros expertos te acompañan en la elección de tu vehículo de transporte equino. Respuesta garantizada en 24h." }, benefits: { response24h: { title: "Respuesta en 24h", description: "Tu presupuesto personalizado en tu bandeja de entrada" }, free: { title: "100% Gratuito", description: "Sin tarifas, sin compromiso de tu parte" }, transparent: { title: "Precios Transparentes", description: "Todos los costos incluidos, sin sorpresas" }, expert: { title: "Experto Dedicado", description: "Un asesor personal sigue tu caso" } }, vehicleTypes: { title: "Tipos de Vehículos Disponibles", truck: { type: "Camión para Caballos", priceRange: "45.000€ - 120.000€", popular: "El más solicitado", capacities: ["2 caballos", "3 caballos", "4 caballos", "5 caballos", "6+ caballos"] }, van: { type: "Furgoneta para Caballos", priceRange: "25.000€ - 85.000€", capacities: ["1 caballo", "2 caballos", "3 caballos"] }, trailer: { type: "Remolque para Caballos", priceRange: "15.000€ - 55.000€", capacities: ["1 caballo", "2 caballos", "3 caballos"] } }, form: { title: "Formulario de Solicitud de Presupuesto", description: "Completa este formulario detallado para recibir tu presupuesto personalizado en 24h", personalInfo: "Información Personal", firstName: "Nombre", firstNamePlaceholder: "Tu nombre", lastName: "Apellido", lastNamePlaceholder: "Tu apellido", email: "Email", emailPlaceholder: "tu@email.com", phone: "Teléfono", phonePlaceholder: "06 12 34 56 78", company: "Empresa (opcional)", companyPlaceholder: "Nombre de tu empresa", vehicleRequirements: "Requisitos del Vehículo", vehicleType: "Tipo de vehículo deseado", vehicleTypePlaceholder: "Selecciona un tipo", capacity: "Capacidad deseada", capacityPlaceholder: "Número de caballos", budget: "Presupuesto estimado", budgetPlaceholder: "Selecciona tu presupuesto", usage: "Uso Previsto", usageType: "Tipo de uso", usageTypePlaceholder: "Personal, profesional...", annualKm: "Kilometraje anual estimado", annualKmPlaceholder: "Ej: 15.000 km/año", urgency: "Plazo deseado", urgencyPlaceholder: "¿Cuándo quieres comprar?", additionalInfo: "Información Adicional", message: "Mensaje (necesidades específicas, preguntas...)", messagePlaceholder: "Describe tus necesidades específicas, limitaciones particulares, equipos deseados...", submitButton: "Enviar mi Solicitud de Presupuesto", successMessage: "¡Tu solicitud ha sido enviada con éxito! Te contactaremos en 24h.", vehicleTypes: { truck: "Camión para Caballos", van: "Furgoneta para Caballos", trailer: "Remolque para Caballos", other: "Otro / Asesoramiento" }, capacities: { oneHorse: "1 caballo", twoHorses: "2 caballos", threeHorses: "3 caballos", fourHorses: "4 caballos", fiveHorses: "5 caballos", sixPlusHorses: "6+ caballos" }, budgetRanges: { under30k: "Menos de 30.000€", range30k50k: "30.000€ - 50.000€", range50k80k: "50.000€ - 80.000€", range80k120k: "80.000€ - 120.000€", over120k: "Más de 120.000€" }, usageTypes: { personal: "Uso personal", professional: "Uso profesional", mixed: "Uso mixto" }, urgencyOptions: { immediate: "Inmediato (en el mes)", month: "En 1 a 3 meses", threeMonths: "En 3 a 6 meses", sixMonths: "En 6 meses a 1 año", noUrgency: "Sin urgencia particular" } } }
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
      occasions: "Gebrauchtfahrzeuge"
    },
    // Simplified German translations for brevity
    hero: { slide1: { subtitle: "Premium Pferdetransport", title: "Professionelle Pferdetransporter", description: "Entdecken Sie unsere Auswahl an hochwertigen Lastwagen für den Transport Ihrer Pferde. Komfort, Sicherheit und Zuverlässigkeit garantiert." }, slide2: { subtitle: "Kompakte Lösungen", title: "Pferde-Vans der neuesten Generation", description: "Perfekt für 1 bis 3 Pferde, unsere Vans kombinieren Wendigkeit und modernste Ausstattung für Ihre täglichen Fahrten." }, slide3: { subtitle: "Wirtschaftlich und praktisch", title: "Zertifizierte Pferdeanhänger", description: "Die wirtschaftliche Alternative für den Pferdetransport. Große Auswahl an neuen und gebrauchten Anhängern, alle geprüft." }, slide4: { subtitle: "Geprüfte Fahrzeuge", title: "Sorgfältig Ausgewählte Gebrauchtfahrzeuge", description: "Gebrauchtfahrzeuge rigoros ausgewählt und geprüft. Garantie, Finanzierung und Lieferung in ganz Frankreich." }, slide5: { subtitle: "15 Jahre Erfahrung", title: "Ihr Partner für Pferdetransport", description: "HTG unterstützt Sie seit 15 Jahren bei all Ihren Projekten. Persönliche Beratung und außergewöhnlicher Kundenservice." }, cta: "Unsere Fahrzeuge entdecken" },
    categories: { title: "Wählen Sie Ihr", subtitle: "Ideales Fahrzeug", horseTrucks: { title: "Pferdetransporter", description: "Professionelle Lösungen für 2 bis 8 Pferde. Maximaler Komfort und hochwertige Ausstattung.", features: ["Luftfederung", "Kabinen-Klimaanlage", "Rutschfester Boden"], from: "Ab 65.000€", explore: "LKWs entdecken" }, horseVans: { title: "Pferde-Vans", description: "Perfekt für 1 bis 3 Pferde. Wendig, wirtschaftlich und sehr gut ausgestattet.", features: ["Einfaches Fahren", "Reduzierter Verbrauch", "Modularität"], from: "Ab 35.000€", explore: "Vans entdecken" }, horseTrailers: { title: "Pferdeanhänger", description: "Wirtschaftliche Lösung für 1 bis 3 Pferde. Qualität und Sicherheit garantiert.", features: ["Leicht und robust", "Einfache Kupplung", "Attraktiver Preis"], from: "Ab 18.000€", explore: "Anhänger entdecken" }, ctaTitle: "Eine Frage? Ein Projekt?", ctaDescription: "Unsere Experten beraten Sie kostenlos, um das perfekte Fahrzeug für Ihre Bedürfnisse zu finden.", getFreeQuote: "Kostenloses Angebot", makeAppointment: "Termin vereinbaren", specialties: "Unsere Spezialitäten", findPerfectVehicle: "Das Perfekte Fahrzeug Finden", disciplineDescription: "Für Jede Reitsportdisziplin" },
    trust: { badge: "Warum uns wählen", title: "HTG, Ihr vertrauensvoller", subtitle: "Partner", description: "15 Jahre Erfahrung im Pferdetransport. Mehr als 2500 Kunden vertrauen uns für ihre Leidenschaft.", stats: { experience: "15 Jahre Erfahrung", clients: "2500+ zufriedene Kunden", satisfaction: "98% Zufriedenheit", response: "Antwort innerhalb 24h" }, reviewsTitle: "Was unsere Kunden sagen", reviewsDescription: "Entdecken Sie Erfahrungsberichte von Enthusiasten, die uns vertrauen", leaveReview: "Eine Bewertung hinterlassen", partnersTitle: "Unsere vertrauenswürdigen Partner", partnersDescription: "Wir arbeiten mit den besten Marken der Branche", getQuote: "Ein Angebot anfordern", partners: [{ name: "Peugeot", logo: "/placeholder.svg", description: "Offizieller Partner" }, { name: "Iveco", logo: "/placeholder.svg", description: "Autorisierter Händler" }, { name: "Mercedes", logo: "/placeholder.svg", description: "Servicezentrum" }], reviews: [{ id: "1", name: "Sarah Martin", role: "Professionelle Reiterin", content: "Außergewöhnlicher Service! Mein Van ist perfekt für meine Wettkämpfe. Das HTG-Team verstand meine spezifischen Bedürfnisse.", text: "Außergewöhnlicher Service! Mein Van ist perfekt für meine Wettkämpfe. Das HTG-Team verstand meine spezifischen Bedürfnisse.", rating: 5, image: "/placeholder.svg", verified: true, location: "Paris", vehicleType: "Pferde-Van", date: "2024-01-15" }, { id: "2", name: "Pierre Dubois", role: "Reitzentrum", content: "LKW pünktlich mit aller angeforderten Ausrüstung geliefert. Qualität wie erwartet, ich empfehle sehr!", text: "LKW pünktlich mit aller angeforderten Ausrüstung geliefert. Qualität wie erwartet, ich empfehle sehr!", rating: 5, image: "/placeholder.svg", verified: true, location: "Lyon", vehicleType: "Pferdetransporter", date: "2024-02-10" }, { id: "3", name: "Marie Leroy", role: "Pferdebesitzerin", content: "Ausgezeichnete Beratung für den Kauf meines Anhängers. Transparenter Preis und tadellose Nachbetreuung.", text: "Ausgezeichnete Beratung für den Kauf meines Anhängers. Transparenter Preis und tadellose Nachbetreuung.", rating: 5, image: "/placeholder.svg", verified: true, location: "Bordeaux", vehicleType: "Pferdeanhänger", date: "2024-01-28" }] },
    offres: { badge: "Unsere Angebote", title: "Premium Fahrzeuge", subtitle: "Für Sie Ausgewählt", description: "Entdecken Sie unsere strenge Auswahl an neuen und gebrauchten Fahrzeugen. Jedes Fahrzeug wird von unseren Experten geprüft.", stats: { vehicles: "150+ Fahrzeuge", brands: "12 Marken", clients: "2500+ Kunden", years: "15 Jahre Erfahrung" }, cta: { title: "Bereit, Ihr ideales Fahrzeug zu finden?", description: "Kontaktieren Sie unsere Experten für persönliche Beratung und ein kostenloses Angebot innerhalb von 24h.", primaryButton: "Ein Angebot anfordern", secondaryButton: "Alle Fahrzeuge ansehen" }, features: { quality: { title: "Garantierte Qualität", description: "Alle unsere Fahrzeuge werden rigoros geprüft und zertifiziert" }, expertise: { title: "Anerkannte Expertise", description: "15 Jahre Erfahrung im hochwertigen Pferdetransport" }, service: { title: "Premium Service", description: "Persönliche Betreuung vom Kauf bis zur Lieferung" }, guarantee: { title: "Erweiterte Garantie", description: "Herstellergarantie und Kundendienst inklusive" }, financing: { title: "Einfache Finanzierung", description: "Finanzierungslösungen angepasst an Ihr Budget" }, support: { title: "24/7 Support", description: "Team verfügbar, um alle Ihre Fragen zu beantworten" } }, newArrival: "Neuheit", bestSeller: "Bestseller", limitedOffer: "Begrenztes Angebot", urgent: "Dringend", years: "Jahre", km: "km", places: "Plätze", horsesCapacity: "Pferde", reviews: "Bewertungen", timeLeft: "Verbleibende Zeit", vehicles: "Fahrzeuge", savings: "Ersparnis", expertiseGuaranteed: "Expertise garantiert", featuredVehicles: "Empfohlene Fahrzeuge", premiumSelection: "Premium Auswahl", ourBest: "Unsere Besten", offersVehicles: "Fahrzeugangebote", discoverSelection: "Die Auswahl Entdecken", rigorouslyControlled: "Streng Kontrolliert", models: "Modelle", specialOffers: "Sonderangebote", newArrivals2024: "Neuheiten 2024", bestseller: "Bestseller", mostRequested: "Am Meisten Angefragt", bestPrice: "Bester Preis", upTo15Off: "Bis zu -15%", receiveOffer24h: "Angebot innerhalb 24h erhalten", personalizedExchange: "Persönlicher Austausch", discoverCollection: "Die Kollektion Entdecken", moreEquipment: "Mehr Ausstattung", promotionalPrice: "Aktionspreis", financingAvailable: "Finanzierung verfügbar", discoverCharacteristics: "Eigenschaften entdecken", addToMySelection: "Zu meiner Auswahl hinzufügen", onlyXDaysLeft: "Nur noch X Tage", favorite: "Favorit" },
    common: { newArrival: "Neuheit", bestseller: "Bestseller", limitedOffer: "Begrenztes Angebot", urgent: "Dringend", years: "Jahre", km: "km", places: "Plätze", horsesCapacity: "Pferde", reviews: "Bewertungen", timeLeft: "Verbleibende Zeit", vehicles: "Fahrzeuge", savings: "Ersparnis", expertiseGuaranteed: "Expertise garantiert", featuredVehicles: "Empfohlene Fahrzeuge", premiumSelection: "Premium Auswahl", ourBest: "Unsere Besten", offersVehicles: "Fahrzeugangebote", discoverSelection: "Die Auswahl Entdecken", rigorouslyControlled: "Streng Kontrolliert", models: "Modelle", specialOffers: "Sonderangebote", newArrivals2024: "Neuheiten 2024", mostRequested: "Am Meisten Angefragt", bestPrice: "Bester Preis", upTo15Off: "Bis zu -15%", receiveOffer24h: "Angebot innerhalb 24h erhalten", personalizedExchange: "Persönlicher Austausch", discoverCollection: "Die Kollektion Entdecken", moreEquipment: "Mehr Ausstattung", promotionalPrice: "Aktionspreis", financingAvailable: "Finanzierung verfügbar", discoverCharacteristics: "Eigenschaften entdecken", addToMySelection: "Zu meiner Auswahl hinzufügen", onlyXDaysLeft: "Nur noch X Tage", favorite: "Favorit", disciplines: ["Dressur", "Springen", "Vielseitigkeit", "Distanz", "Fahren", "Western", "Freizeit"], professionalUse: "Professionelle Nutzung", personalUse: "Private Nutzung", competition: "Wettkampf", leisure: "Freizeit", transport: "Transport", quality: "Qualität", comfort: "Komfort", safety: "Sicherheit", reliability: "Zuverlässigkeit", innovation: "Innovation", expertise: "Expertise", performance: "Leistung", efficiency: "Effizienz", economy: "Wirtschaftlichkeit", durability: "Haltbarkeit", versatility: "Vielseitigkeit", maneuverability: "Wendigkeit", technology: "Technologie", design: "Design", service: "Service", support: "Support", warranty: "Garantie", maintenance: "Wartung", financing: "Finanzierung", delivery: "Lieferung", consultation: "Beratung", advice: "Rat", experience: "Erfahrung", satisfaction: "Zufriedenheit", trust: "Vertrauen", partnership: "Partnerschaft", excellence: "Exzellenz", commitment: "Engagement", responsibility: "Verantwortung", sustainability: "Nachhaltigkeit", environment: "Umwelt", future: "Zukunft" },
    features: { airSuspension: "Luftfederung", cabinAirConditioning: "Kabinen-Klimaanlage", nonSlipFlooring: "Rutschfester Boden", ledLighting: "LED-Beleuchtung", ventilationSystem: "Belüftungssystem", surveillanceCameras: "Überwachungskameras", easyDriving: "Einfaches Fahren", reducedConsumption: "Reduzierter Verbrauch", modularity: "Modularität", lightAndRobust: "Leicht und robust", easyHitching: "Einfache Kupplung", attractivePrice: "Attraktiver Preis", spaciousCabin: "Geräumige Kabine", sleepingArea: "Schlafbereich", modernEquipment: "Moderne Ausstattung", absBraking: "ABS-Bremsung", espSystem: "ESP-System", airSuspensionForHorses: "Luftfederung für Pferde", qualityConstruction: "Qualitätsbau", reinforcedSecurity: "Verstärkte Sicherheit", premiumFinishes: "Premium-Ausstattung", advancedTechnology: "Fortschrittliche Technologie", optimalComfort: "Optimaler Komfort", maximumSafety: "Maximale Sicherheit", environmentalRespect: "Umweltrespekt", fuelEfficiency: "Kraftstoffeffizienz", easyMaintenance: "Einfache Wartung", longDurability: "Lange Haltbarkeit", flexibleConfiguration: "Flexible Konfiguration", intuitiveControls: "Intuitive Bedienung", quietOperation: "Leiser Betrieb", smoothRide: "Sanfte Fahrt", precisionHandling: "Präzise Handhabung", reliablePerformance: "Zuverlässige Leistung", innovativeDesign: "Innovatives Design", practicalSolutions: "Praktische Lösungen", professionalEquipment: "Professionelle Ausrüstung", certifiedQuality: "Zertifizierte Qualität", guaranteedSafety: "Garantierte Sicherheit", provenReliability: "Bewährte Zuverlässigkeit" },
    footer: { company: { title: "Unternehmen", about: "Über uns", team: "Team", careers: "Karrieren", press: "Presse", blog: "Blog", contact: "Kontakt" }, vehicles: { title: "Fahrzeuge", horseTrucks: "Pferdetransporter", horseVans: "Pferde-Vans", horseTrailers: "Pferdeanhänger", usedVehicles: "Gebrauchtfahrzeuge", newVehicles: "Neue Fahrzeuge", financing: "Finanzierung" }, services: { title: "Dienstleistungen", maintenance: "Wartung", insurance: "Versicherung", warranty: "Garantie", delivery: "Lieferung", tradingIn: "Inzahlungnahme", expertise: "Expertise" }, support: { title: "Support", customerService: "Kundendienst", technicalSupport: "Technischer Support", documentation: "Dokumentation", faq: "FAQ", tutorials: "Tutorials", community: "Gemeinschaft" }, legal: { title: "Rechtliches", termsOfService: "Nutzungsbedingungen", privacyPolicy: "Datenschutzrichtlinie", cookiePolicy: "Cookie-Richtlinie", legalNotices: "Rechtliche Hinweise", gdpr: "DSGVO", accessibility: "Barrierefreiheit" }, social: { title: "Soziale Medien", facebook: "Facebook", instagram: "Instagram", youtube: "YouTube", linkedin: "LinkedIn", twitter: "Twitter", newsletter: "Newsletter" }, newsletter: { title: "Newsletter", description: "Bleiben Sie über unsere Neuigkeiten informiert", placeholder: "Ihre E-Mail", subscribe: "Abonnieren", success: "Erfolgreich abonniert!", error: "Abonnement-Fehler" }, contact: { address: "123 Rue des Chevaux, 45000 Orléans", phone: "01 23 45 67 89", email: "contact@htg-france.com", hours: "Mo-Fr 8-18 Uhr, Sa 9-17 Uhr", emergency: "24/7 Notdienst" }, copyright: "© 2024 HTG Frankreich", allRightsReserved: "Alle Rechte vorbehalten", madeWith: "Gemacht mit", love: "Liebe", in: "in", france: "Frankreich" },
    floating: { title: "Brauchen Sie Hilfe?", subtitle: "Unsere Experten beraten Sie", cta: "Uns kontaktieren", phone: "Anrufen", whatsapp: "WhatsApp", email: "E-Mail" },
    quoteRequestPage: { hero: { badge: "Angebotsanfrage", title: "Erhalten Sie Ihr", subtitle: "Kostenloses Persönliches Angebot", description: "Unsere Experten begleiten Sie bei der Auswahl Ihres Pferdetransport-Fahrzeugs. Antwort garantiert innerhalb 24h." }, benefits: { response24h: { title: "Antwort Innerhalb 24h", description: "Ihr persönliches Angebot in Ihrem Postfach" }, free: { title: "100% Kostenlos", description: "Keine Gebühren, keine Verpflichtung Ihrerseits" }, transparent: { title: "Transparente Preise", description: "Alle Kosten inklusive, keine Überraschungen" }, expert: { title: "Spezieller Experte", description: "Ein persönlicher Berater betreut Ihren Fall" } }, vehicleTypes: { title: "Verfügbare Fahrzeugtypen", truck: { type: "Pferdetransporter", priceRange: "45.000€ - 120.000€", popular: "Am meisten angefragt", capacities: ["2 Pferde", "3 Pferde", "4 Pferde", "5 Pferde", "6+ Pferde"] }, van: { type: "Pferde-Van", priceRange: "25.000€ - 85.000€", capacities: ["1 Pferd", "2 Pferde", "3 Pferde"] }, trailer: { type: "Pferdeanhänger", priceRange: "15.000€ - 55.000€", capacities: ["1 Pferd", "2 Pferde", "3 Pferde"] } }, form: { title: "Angebotsanfrage-Formular", description: "Füllen Sie dieses detaillierte Formular aus, um Ihr persönliches Angebot innerhalb von 24h zu erhalten", personalInfo: "Persönliche Informationen", firstName: "Vorname", firstNamePlaceholder: "Ihr Vorname", lastName: "Nachname", lastNamePlaceholder: "Ihr Nachname", email: "E-Mail", emailPlaceholder: "ihre@email.com", phone: "Telefon", phonePlaceholder: "06 12 34 56 78", company: "Unternehmen (optional)", companyPlaceholder: "Name Ihres Unternehmens", vehicleRequirements: "Fahrzeuganforderungen", vehicleType: "Gewünschter Fahrzeugtyp", vehicleTypePlaceholder: "Typ auswählen", capacity: "Gewünschte Kapazität", capacityPlaceholder: "Anzahl der Pferde", budget: "Geschätztes Budget", budgetPlaceholder: "Budget auswählen", usage: "Geplante Nutzung", usageType: "Art der Nutzung", usageTypePlaceholder: "Privat, beruflich...", annualKm: "Geschätzter Jahreskilometerstand", annualKmPlaceholder: "Z.B: 15.000 km/Jahr", urgency: "Gewünschter Zeitrahmen", urgencyPlaceholder: "Wann möchten Sie kaufen?", additionalInfo: "Zusätzliche Informationen", message: "Nachricht (spezifische Bedürfnisse, Fragen...)", messagePlaceholder: "Beschreiben Sie Ihre spezifischen Bedürfnisse, besondere Einschränkungen, gewünschte Ausstattung...", submitButton: "Meine Angebotsanfrage Senden", successMessage: "Ihre Anfrage wurde erfolgreich gesendet! Wir kontaktieren Sie innerhalb von 24h.", vehicleTypes: { truck: "Pferdetransporter", van: "Pferde-Van", trailer: "Pferdeanhänger", other: "Andere / Beratung" }, capacities: { oneHorse: "1 Pferd", twoHorses: "2 Pferde", threeHorses: "3 Pferde", fourHorses: "4 Pferde", fiveHorses: "5 Pferde", sixPlusHorses: "6+ Pferde" }, budgetRanges: { under30k: "Unter 30.000€", range30k50k: "30.000€ - 50.000€", range50k80k: "50.000€ - 80.000€", range80k120k: "80.000€ - 120.000€", over120k: "Über 120.000€" }, usageTypes: { personal: "Private Nutzung", professional: "Berufliche Nutzung", mixed: "Gemischte Nutzung" }, urgencyOptions: { immediate: "Sofort (innerhalb eines Monats)", month: "Innerhalb 1 bis 3 Monaten", threeMonths: "Innerhalb 3 bis 6 Monaten", sixMonths: "Innerhalb 6 Monaten bis 1 Jahr", noUrgency: "Keine besondere Eile" } } }
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