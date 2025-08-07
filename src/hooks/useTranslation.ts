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

  // Quote Request
  quoteRequest: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      description: string;
    };
    benefits: {
      free: string;
      fast: string;
      noCommitment: string;
    };
    form: {
      title: string;
      description: string;
      personalInfo: {
        title: string;
        firstName: string;
        firstNamePlaceholder: string;
        lastName: string;
        lastNamePlaceholder: string;
        email: string;
        emailPlaceholder: string;
        phone: string;
        phonePlaceholder: string;
        region: string;
        regionPlaceholder: string;
      };
      vehicleInfo: {
        title: string;
        type: string;
        typePlaceholder: string;
        typeOptions: {
          truck: string;
          van: string;
          trailer: string;
          unsure: string;
        };
        capacity: string;
        capacityPlaceholder: string;
        capacityOptions: {
          one: string;
          two: string;
          three: string;
          four: string;
          five: string;
          sixPlus: string;
        };
        condition: string;
        conditionPlaceholder: string;
        conditionOptions: {
          new: string;
          used: string;
          any: string;
        };
        budget: string;
        budgetPlaceholder: string;
        budgetOptions: {
          under30k: string;
          from30to50k: string;
          from50to80k: string;
          from80to120k: string;
          over120k: string;
          noBudget: string;
        };
      };
      usage: {
        title: string;
        primary: string;
        primaryPlaceholder: string;
        usageOptions: {
          leisure: string;
          competition: string;
          professional: string;
          mixed: string;
        };
      };
      additional: {
        title: string;
        timeline: string;
        timelinePlaceholder: string;
        timelineOptions: {
          immediate: string;
          oneToThree: string;
          threeToSix: string;
          sixToTwelve: string;
          overYear: string;
          infoOnly: string;
        };
        message: string;
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
  
  // Vehicle Features
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
    tackCompartment: string;
    ventilationSystem: string;
    compactSize: string;
    bLicenseDriving: string;
    modularLayout: string;
    economical: string;
    horsesCapacity: string;
    absBreaking: string;
  };
  
  // Common
  common: {
    readMore: string;
    learnMore: string;
    viewAll: string;
    viewDetails: string;
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

  // Trucks Page
  trucksPage: {
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
      horseTruck: string;
      features: {
        pneumaticSuspension: string;
        airConditioning: string;
        sleepingCabin: string;
        automaticTransmission: string;
        integratedGPS: string;
        grandComfortCabin: string;
        manualTransmission: string;
        blueEfficiency: string;
        automaticAirConditioning: string;
        cruiseControl: string;
        telematicSystem: string;
        dtiEngine: string;
        powerSteering: string;
        electricWindows: string;
        centralLocking: string;
        euro6: string;
        adBlueSystem: string;
        spaciousCabin: string;
        efficientEngine: string;
        easilyMaintained: string;
        ergonomicCabin: string;
      };
      badges: {
        bestseller: string;
        premium: string;
        promotion: string;
        certifiedUsed: string;
        recent: string;
        reliable: string;
      };
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

  // Vans Page
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
      specs: {
        horses: string;
        km: string;
      };
      features: {
        nonSlipFlooring: string;
        ledLighting: string;
        ventilation: string;
        handsFreeMobile: string;
        blueTecEngine: string;
        automaticTransmission: string;
        reverseCamera: string;
        parkingSensors: string;
        optimizedVolume: string;
        cruiseControl: string;
        airConditioning: string;
        ecoBlue: string;
        sync3: string;
        parkingAssist: string;
        tdiBlueMotion: string;
        esp: string;
        hillStartAssist: string;
        blueHdi: string;
        mirrorScreen: string;
        fatigueSensor: string;
      };
      badges: {
        favorite: string;
        bestseller: string;
        premium: string;
        promotion: string;
        certifiedUsed: string;
        recent: string;
        economical: string;
      };
      pricing: {
        save: string;
        financing: string;
        perMonth: string;
      };
      actions: {
        seeDetails: string;
      };
    };
    cta: {
      title: string;
      description: string;
      getQuote: string;
      contactExpert: string;
    };
  };
  
  // About Page
  aboutPage: {
    hero: {
      badge: string;
      title1: string;
      title2: string;
      description: string;
    };
    stats: {
      experience: string;
      clients: string;
      certified: string;
      recommendations: string;
    };
    story: {
      title1: string;
      title2: string;
      paragraph1: string;
      paragraph2: string;
      cta: string;
    };
    mission: {
      title: string;
      description: string;
      point1: string;
      point2: string;
      point3: string;
    };
    values: {
      passion: {
        title: string;
        description: string;
      };
      expertise: {
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
    valuesSection: {
      title1: string;
      title2: string;
      subtitle: string;
    };
    team: {
      director: {
        role: string;
        experience: string;
        speciality: string;
      };
      sales: {
        role: string;
        experience: string;
        speciality: string;
      };
      technical: {
        role: string;
        experience: string;
        speciality: string;
      };
    };
    teamSection: {
      title1: string;
      title2: string;
      subtitle: string;
    };
    cta: {
      title: string;
      description: string;
      button1: string;
      button2: string;
    };
  };

  // Contact Page
  contactPage: {
    hero: {
      badge: string;
      title1: string;
      title2: string;
      description: string;
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
    methodsSection: {
      title1: string;
      title2: string;
      subtitle: string;
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
      required: string;
    };
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
      makeAppointment: "Prendre Rendez-vous",
      specialties: "Nos Spécialités",
      findPerfectVehicle: "Trouvez le Véhicule Parfait pour Vos Besoins",
      disciplineDescription: "Chaque discipline équestre a ses exigences. Découvrez notre sélection organisée par type de véhicule pour trouver la solution idéale."
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
      partners: [
        { name: "Iveco", logo: "/lovable-uploads/2b478b96-e19a-4288-ac04-f0410f56f0bc.png", description: "Partenaire officiel depuis 2015" },
        { name: "Mercedes", logo: "/lovable-uploads/bee66bcd-4af5-4ce6-a9d1-a044053fa657.png", description: "Distributeur agréé" },
        { name: "Renault", logo: "/lovable-uploads/2307287b-f2a8-4858-984f-44b3a646dd23.png", description: "Concessionnaire certifié" },
        { name: "Böckmann", logo: "/lovable-uploads/35ff85cc-4513-4a11-9b8b-eda640027c91.png", description: "Revendeur exclusif région" },
        { name: "Ifor Williams", logo: "/lovable-uploads/a3bc9f31-af5a-4053-a835-56933ae8d26b.png", description: "Distributeur autorisé" },
        { name: "Humbaur", logo: "/lovable-uploads/243f1cf5-f2ce-48a8-a2dd-8c9d7334fa5a.png", description: "Partenaire premium" }
      ],
      getQuote: "Demander un Devis Gratuit",
      reviews: [
        {
          id: 1,
          name: "Marie Dubois",
          location: "Normandie",
          rating: 5,
          text: "Service exceptionnel ! J'ai acheté mon van chez HTG il y a 2 ans et je suis toujours aussi satisfaite. L'équipe est professionnelle et de bon conseil.",
          vehicleType: "Van Chevaux Renault Master",
          date: "Il y a 3 semaines",
          verified: true
        },
        {
          id: 2,
          name: "Pierre Martin",
          location: "Île-de-France",
          rating: 5,
          text: "Excellent rapport qualité-prix pour mon camion 4 places. La livraison s'est parfaitement déroulée et le véhicule était impeccable.",
          vehicleType: "Camion Iveco Daily",
          date: "Il y a 1 mois",
          verified: true
        },
        {
          id: 3,
          name: "Sophie Lemoine",
          location: "Bretagne",
          rating: 5,
          text: "Je recommande vivement HTG ! Leur expertise m'a permis de trouver la remorque parfaite pour mes besoins. Suivi irréprochable.",
          vehicleType: "Remorque Böckmann",
          date: "Il y a 2 mois",
          verified: true
        },
        {
          id: 4,
          name: "Jean-Claude Bertrand",
          location: "Provence-Alpes-Côte d'Azur",
          rating: 5,
          text: "20 ans d'expérience dans l'équestre, et je n'ai jamais vu un service aussi professionnel. Mon nouveau van Mercedes est parfait pour mes compétitions.",
          vehicleType: "Van Mercedes Sprinter",
          date: "Il y a 1 semaine",
          verified: true
        },
        {
          id: 5,
          name: "Camille Rousseau",
          location: "Nouvelle-Aquitaine",
          rating: 4,
          text: "Très satisfaite de mon achat ! L'équipe a su me conseiller sur le bon modèle. Juste un petit délai de livraison mais le résultat en valait la peine.",
          vehicleType: "Remorque Ifor Williams",
          date: "Il y a 3 jours",
          verified: true
        },
        {
          id: 6,
          name: "Thomas Moreau",
          location: "Centre-Val de Loire",
          rating: 5,
          text: "Service après-vente au top ! Mon camion a eu un petit souci et ils ont tout réglé rapidement. Une équipe vraiment fiable, je recommande sans hésiter.",
          vehicleType: "Camion Renault Master",
          date: "Il y a 2 semaines",
          verified: true
        },
        {
          id: 7,
          name: "Isabelle Durand",
          location: "Occitanie",
          rating: 5,
          text: "Achat d'une remorque 2 places pour mes chevaux de dressage. Produit de qualité, conseil expert et prix compétitif. Parfait !",
          vehicleType: "Remorque Humbaur",
          date: "Il y a 5 jours",
          verified: true
        },
        {
          id: 8,
          name: "Antoine Lefevre",
          location: "Hauts-de-France",
          rating: 4,
          text: "Bonne expérience globale. Le personnel connaît vraiment bien les produits équestres. Mon van correspond exactement à mes attentes pour les concours.",
          vehicleType: "Van Iveco Daily",
          date: "Il y a 4 semaines",
          verified: true
        }
      ]
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
      alkoSuspension: "Suspension AL-KO",
      rubberFlooring: "Plancher caoutchouc",
      tackCompartment: "Compartiment sellerie",
      ventilationSystem: "Système ventilation",
      compactSize: "Format compact",
      bLicenseDriving: "Conduite permis B",
      modularLayout: "Aménagement modulable",
      economical: "Économique",
      horsesCapacity: "chevaux",
      absBreaking: "Freinage ABS"
    },
    common: {
      readMore: "Lire la suite",
      learnMore: "En savoir plus",
      viewAll: "Voir tout",
      viewDetails: "Voir les détails",
      
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
      featuredVehicles: "Véhicules Vedettes",
      premiumSelection: "Sélection Premium",
      ourBest: "Nos Meilleures",
      offersVehicles: "Offres & Véhicules",
      discoverSelection: "Découvrez notre sélection de véhicules vedettes et profitez de nos promotions exceptionnelles. Chaque véhicule est rigoureusement contrôlé par nos experts.",
      rigorouslyControlled: "rigoureusement contrôlé",
      models: "modèles",
      specialOffers: "Offres spéciales",
      newArrivals2024: "Nouveautés 2024",
      bestseller: "Bestseller",
      mostRequested: "Plus demandé",
      bestPrice: "Meilleur prix",
      upTo15Off: "Jusqu'à -15%",
      receiveOffer24h: "Recevez votre offre personnalisée en moins de 24h – Sans engagement",
      personalizedExchange: "Besoin d'un échange personnalisé ? Réservez un rendez-vous téléphonique ou en visio avec l'un de nos experts.",
      discoverCollection: "Découvrez notre collection exclusive de véhicules sélectionnés pour répondre aux standards les plus exigeants du transport équin.",
      moreEquipment: "autres équipements",
      promotionalPrice: "Prix promotionnel",
      financingAvailable: "Financement disponible dès 299€/mois",
      discoverCharacteristics: "Découvrir toutes les caractéristiques de ce véhicule",
      addToMySelection: "Ajouter à ma sélection",
      onlyXDaysLeft: "Plus que 3 jours",
      favorite: "Coup de Cœur"
    },
    trucksPage: {
      title: "Camions Chevaux",
      subtitle: "Professionnels",
      description: "Découvrez notre sélection de camions chevaux haute capacité pour le transport professionnel. 4 à 6 chevaux, suspension pneumatique et tout le confort nécessaire.",
      filters: {
        allFilters: "Tous les filtres",
        capacity: "Capacité",
        price: "Prix",
        year: "Année",
        mileage: "Kilométrage",
        found: "camions trouvés"
      },
      vehicle: {
        horseTruck: "Camion Chevaux",
        features: {
          pneumaticSuspension: "Suspension pneumatique",
          airConditioning: "Climatisation",
          sleepingCabin: "Cabine couchette",
          automaticTransmission: "Boîte automatique",
          integratedGPS: "GPS intégré",
          grandComfortCabin: "Cabine grand confort",
          manualTransmission: "Boîte manuelle",
          blueEfficiency: "BlueEFFICIENCY",
          automaticAirConditioning: "Climatisation automatique",
          cruiseControl: "Régulateur de vitesse",
          telematicSystem: "Système télématique",
          dtiEngine: "Moteur DTI",
          powerSteering: "Direction assistée",
          electricWindows: "Vitres électriques",
          centralLocking: "Verrouillage centralisé",
          euro6: "Euro 6",
          adBlueSystem: "Système AdBlue",
          spaciousCabin: "Cabine spacieuse",
          efficientEngine: "Moteur efficient",
          easilyMaintained: "Maintenance facilité",
          ergonomicCabin: "Cabine ergonomique"
        },
        badges: {
          bestseller: "Bestseller",
          premium: "Premium",
          promotion: "Promotion",
          certifiedUsed: "Occasion Certifiée",
          recent: "Récent",
          reliable: "Fiable"
        },
        specs: {
          horses: "chevaux",
          year: "Année",
          km: "km",
          capacity: "Capacité"
        },
        pricing: {
          save: "Économisez",
          financing: "Financement disponible dès",
          perMonth: "/mois"
        },
        actions: {
          seeDetails: "Voir Détails",
          addToFavorites: "Ajouter aux favoris"
        }
      },
      cta: {
        title: "Besoin d'un Conseil sur nos Camions ?",
        description: "Nos experts vous accompagnent dans le choix du camion parfait pour vos besoins professionnels.",
        getQuote: "Demander un Devis Gratuit",
        contactExpert: "Contacter un Expert"
      }
    },

    vansPage: {
      title: "Vans Chevaux",
      subtitle: "Polyvalents",
      description: "Découvrez notre gamme de vans chevaux alliant polyvalence et maniabilité. Parfaits pour vos déplacements urbains et ruraux avec 2 à 4 chevaux.",
      filters: {
        allFilters: "Tous les filtres",
        capacity: "Capacité",
        price: "Prix",
        year: "Année",
        mileage: "Kilométrage",
        found: "vans trouvés"
      },
      vehicle: {
        horseVan: "Van Chevaux",
        specs: {
          horses: "chevaux",
          km: "km"
        },
        features: {
          nonSlipFlooring: "Plancher antidérapant",
          ledLighting: "Éclairage LED",
          ventilation: "Ventilation",
          handsFreeMobile: "Kit mains libres",
          blueTecEngine: "Moteur BlueTEC",
          automaticTransmission: "Boîte automatique",
          reverseCamera: "Caméra de recul",
          parkingSensors: "Radar de recul",
          optimizedVolume: "Volume optimisé",
          cruiseControl: "Régulateur de vitesse",
          airConditioning: "Climatisation",
          ecoBlue: "EcoBlue",
          sync3: "SYNC 3",
          parkingAssist: "Aide au stationnement",
          tdiBlueMotion: "TDI BlueMotion",
          esp: "ESP",
          hillStartAssist: "Assistant de démarrage en côte",
          blueHdi: "BlueHDi",
          mirrorScreen: "Mirror Screen",
          fatigueSensor: "Détecteur de fatigue"
        },
        badges: {
          favorite: "Coup de Cœur",
          bestseller: "Bestseller",
          premium: "Premium",
          promotion: "Promotion",
          certifiedUsed: "Occasion Certifiée",
          recent: "Récent",
          economical: "Économique"
        },
        pricing: {
          save: "Économisez",
          financing: "Financement disponible dès",
          perMonth: "/mois"
        },
        actions: {
          seeDetails: "Voir Détails"
        }
      },
      cta: {
        title: "Trouvez le Van Parfait pour Vous",
        description: "Nos experts vous conseillent pour choisir le van chevaux adapté à vos besoins et votre budget.",
        getQuote: "Demander un Devis Gratuit",
        contactExpert: "Prendre Rendez-vous"
      }
    },
    aboutPage: {
      hero: {
        badge: "Notre Histoire",
        title1: "L'Excellence",
        title2: "au Service des Chevaux",
        description: "Depuis 2008, Horse Truck Garage accompagne les passionnés d'équitation dans le choix de leurs véhicules de transport. Notre expertise française au service de vos champions."
      },
      stats: {
        experience: "Années d'Expertise",
        clients: "Clients Satisfaits",
        certified: "Véhicules Certifiés",
        recommendations: "Recommandations"
      },
      story: {
        title1: "Une Passion",
        title2: "Devenue Expertise",
        paragraph1: "Tout a commencé en 2008 avec une simple conviction : les chevaux méritent le meilleur transport possible. Jean-Pierre Dubois, cavalier passionné et entrepreneur, a fondé HTG avec l'ambition de révolutionner le marché du transport équin en France.",
        paragraph2: "Aujourd'hui, nous sommes fiers d'être devenus la référence française en matière de véhicules de transport équin, avec plus de 2500 clients qui nous font confiance pour leurs champions.",
        cta: "Demander un Devis Personnalisé"
      },
      mission: {
        title: "Notre Mission",
        description: "Offrir aux passionnés d'équitation des solutions de transport qui allient sécurité, confort et performance, tout en garantissant le bien-être de leurs chevaux.",
        point1: "Sélection rigoureuse des véhicules",
        point2: "Expertise technique reconnue",
        point3: "Service client personnalisé"
      },
      values: {
        passion: {
          title: "Passion Équestre",
          description: "Notre équipe partage votre passion pour le monde équin et comprend l'importance du bien-être animal."
        },
        expertise: {
          title: "Expertise Reconnue",
          description: "15 ans d'expérience dans le transport équin nous permettent de sélectionner les meilleurs véhicules."
        },
        excellence: {
          title: "Excellence du Service",
          description: "De la première visite à l'après-vente, nous nous engageons à vous offrir un service exceptionnel."
        },
        support: {
          title: "Accompagnement Complet",
          description: "Financement, assurance, entretien : nous vous accompagnons dans tous les aspects de votre achat."
        }
      },
      valuesSection: {
        title1: "Nos",
        title2: " Valeurs",
        subtitle: "Les principes qui guident notre action depuis plus de 15 ans"
      },
      team: {
        director: {
          role: "Directeur & Fondateur",
          experience: "20 ans dans le transport équin",
          speciality: "Expert en camions chevaux premium"
        },
        sales: {
          role: "Responsable Commerciale",
          experience: "12 ans chez HTG",
          speciality: "Spécialiste vans et remorques"
        },
        technical: {
          role: "Expert Technique",
          experience: "15 ans mécanicien spécialisé",
          speciality: "Contrôle qualité et expertise"
        }
      },
      teamSection: {
        title1: "Notre",
        title2: " Équipe",
        subtitle: "Des experts passionnés à votre service"
      },
      cta: {
        title: "Prêt à Faire Confiance à Notre Expertise ?",
        description: "Découvrez pourquoi plus de 2500 passionnés d'équitation nous font confiance pour leurs véhicules de transport.",
        button1: "Voir Nos Véhicules",
        button2: "Prendre Rendez-vous"
      }
    },
    contactPage: {
      hero: {
        badge: "Contactez-nous",
        title1: "Parlons de Votre",
        title2: "Projet Transport",
        description: "Nos experts vous accompagnent dans le choix de votre véhicule de transport équin. Contactez-nous par le moyen qui vous convient le mieux."
      },
      contactMethods: {
        phone: {
          title: "Appelez-nous",
          subtitle: "Réponse immédiate",
          description: "Nos experts vous répondent du lundi au samedi",
          action: "01 23 45 67 89",
          actionText: "Appeler maintenant"
        },
        chat: {
          title: "Chat en Ligne",
          subtitle: "Assistance instantanée",
          description: "Posez vos questions en temps réel",
          action: "Démarrer le chat",
          actionText: "Chatter maintenant"
        },
        appointment: {
          title: "Rendez-vous",
          subtitle: "Conseil personnalisé",
          description: "Rencontrez nos experts en visio ou au showroom",
          action: "Réserver un créneau",
          actionText: "Planifier maintenant"
        }
      },
      methodsSection: {
        title1: "Comment Nous",
        title2: " Joindre ?",
        subtitle: "Choisissez le canal de communication qui vous convient"
      },
      contactInfo: {
        title1: "Informations",
        title2: " Pratiques",
        subtitle: "Retrouvez-nous dans notre showroom ou contactez-nous directement.",
        address: {
          title: "Adresse",
          street: "Zone Industrielle de la Forêt\n123 Rue des Chevaux",
          city: "45000 Orléans, France"
        },
        hours: {
          title: "Horaires",
          weekdays: "Lundi - Vendredi : 8h - 18h",
          saturday: "Samedi : 9h - 17h",
          sunday: "Dimanche : Sur rendez-vous"
        },
        phone: {
          title: "Téléphone",
          number: "01 23 45 67 89"
        },
        email: {
          title: "Email",
          address: "contact@htg-france.com"
        }
      },
      services: {
        title: "Services Express",
        expertise: {
          title: "Expertise Véhicule",
          description: "Contrôle technique complet avant achat",
          duration: "Sous 48h"
        },
        financing: {
          title: "Simulation Financement",
          description: "Calculez vos mensualités en temps réel",
          duration: "Immédiat"
        },
        advice: {
          title: "Conseil Personnalisé",
          description: "Aide au choix selon vos besoins",
          duration: "30 min"
        }
      },
      form: {
        title: "Demande de Contact",
        subtitle: "Remplissez ce formulaire et recevez une réponse personnalisée sous 24h.",
        fields: {
          firstName: "Prénom",
          lastName: "Nom",
          email: "Email",
          phone: "Téléphone",
          vehicleType: "Type de véhicule recherché",
          budget: "Budget estimé",
          message: "Message"
        },
        placeholders: {
          firstName: "Votre prénom",
          lastName: "Votre nom",
          email: "votre@email.com",
          phone: "06 12 34 56 78",
          vehicleTypeSelect: "Sélectionnez un type",
          budgetSelect: "Sélectionnez votre budget",
          message: "Décrivez-nous votre projet, vos besoins spécifiques, le nombre de chevaux à transporter..."
        },
        vehicleTypes: {
          truck: "Camion Chevaux",
          van: "Van Chevaux",
          trailer: "Remorque Chevaux",
          other: "Autre / Conseil"
        },
        budgetRanges: {
          under30k: "Moins de 30 000€",
          range30to50k: "30 000€ - 50 000€",
          range50to80k: "50 000€ - 80 000€",
          over80k: "Plus de 80 000€"
        },
        submitInfo: "Recevez votre réponse personnalisée en moins de 24h",
        submitSubtitle: "Sans engagement • Conseil gratuit",
        submitButton: "Envoyer ma Demande",
        required: "*"
      }
    },
    quoteRequest: {
      hero: {
        badge: "Devis Gratuit",
        title: "Votre Devis",
        subtitle: "en Moins de 24h",
        description: "Obtenez un devis personnalisé pour votre véhicule de transport équin. Notre expert analyse vos besoins et vous propose la solution parfaite."
      },
      benefits: {
        free: "100% Gratuit",
        fast: "Réponse 24h",
        noCommitment: "Sans engagement"
      },
      form: {
        title: "Formulaire de Demande de Devis",
        description: "Plus vous nous donnez d'informations, plus votre devis sera précis et adapté",
        personalInfo: {
          title: "Vos Informations",
          firstName: "Prénom",
          firstNamePlaceholder: "Votre prénom",
          lastName: "Nom",
          lastNamePlaceholder: "Votre nom",
          email: "Email",
          emailPlaceholder: "votre@email.com",
          phone: "Téléphone",
          phonePlaceholder: "06 12 34 56 78",
          region: "Région",
          regionPlaceholder: "Votre région (pour optimiser la livraison)"
        },
        vehicleInfo: {
          title: "Votre Véhicule Idéal",
          type: "Type de véhicule",
          typePlaceholder: "Choisissez le type",
          typeOptions: {
            truck: "Camion Chevaux",
            van: "Van Chevaux",
            trailer: "Remorque Chevaux",
            unsure: "Je ne sais pas encore"
          },
          capacity: "Nombre de chevaux à transporter",
          capacityPlaceholder: "Sélectionnez",
          capacityOptions: {
            one: "1 cheval",
            two: "2 chevaux",
            three: "3 chevaux",
            four: "4 chevaux",
            five: "5 chevaux",
            sixPlus: "6 chevaux et plus"
          },
          condition: "État souhaité",
          conditionPlaceholder: "Neuf ou occasion ?",
          conditionOptions: {
            new: "Neuf uniquement",
            used: "Occasion acceptée",
            any: "Indifférent"
          },
          budget: "Budget approximatif",
          budgetPlaceholder: "Votre fourchette de prix",
          budgetOptions: {
            under30k: "Moins de 30 000€",
            from30to50k: "30 000€ - 50 000€",
            from50to80k: "50 000€ - 80 000€",
            from80to120k: "80 000€ - 120 000€",
            over120k: "Plus de 120 000€",
            noBudget: "Pas de budget défini"
          }
        },
        usage: {
          title: "Utilisation & Équipements",
          primary: "Utilisation principale",
          primaryPlaceholder: "Comment allez-vous utiliser le véhicule ?",
          usageOptions: {
            leisure: "Loisir / Balades",
            competition: "Compétition",
            professional: "Usage professionnel",
            mixed: "Usage mixte"
          }
        },
        additional: {
          title: "Informations Complémentaires",
          timeline: "Délai souhaité pour l'achat",
          timelinePlaceholder: "Quand souhaitez-vous acquérir votre véhicule ?",
          timelineOptions: {
            immediate: "Immédiatement",
            oneToThree: "Dans 1 à 3 mois",
            threeToSix: "Dans 3 à 6 mois",
            sixToTwelve: "Dans 6 mois à 1 an",
            overYear: "Plus d'1 an",
            infoOnly: "Simple demande d'information"
          },
          message: "Message complémentaire",
          messagePlaceholder: "Décrivez-nous vos besoins spécifiques, contraintes particulières, questions sur le financement, etc."
        },
        submit: {
          title: "C'est Parti !",
          description: "En soumettant ce formulaire, vous recevrez votre devis personnalisé sous 24h maximum. Un expert HTG vous contactera également pour affiner votre demande.",
          button: "Recevoir Mon Devis Gratuit",
          disclaimer: "* Aucun engagement • Réponse garantie sous 24h • Service 100% gratuit"
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
      makeAppointment: "Make Appointment",
      specialties: "Our Specialties",
      findPerfectVehicle: "Find the Perfect Vehicle for Your Needs",
      disciplineDescription: "Each equestrian discipline has its requirements. Discover our selection organized by vehicle type to find the ideal solution."
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
      partners: [
        { name: "Iveco", logo: "/lovable-uploads/2b478b96-e19a-4288-ac04-f0410f56f0bc.png", description: "Official partner since 2015" },
        { name: "Mercedes", logo: "/lovable-uploads/bee66bcd-4af5-4ce6-a9d1-a044053fa657.png", description: "Authorized distributor" },
        { name: "Renault", logo: "/lovable-uploads/2307287b-f2a8-4858-984f-44b3a646dd23.png", description: "Certified dealer" },
        { name: "Böckmann", logo: "/lovable-uploads/35ff85cc-4513-4a11-9b8b-eda640027c91.png", description: "Exclusive regional dealer" },
        { name: "Ifor Williams", logo: "/lovable-uploads/a3bc9f31-af5a-4053-a835-56933ae8d26b.png", description: "Authorized distributor" },
        { name: "Humbaur", logo: "/lovable-uploads/243f1cf5-f2ce-48a8-a2dd-8c9d7334fa5a.png", description: "Premium partner" }
      ],
      getQuote: "Get Free Quote",
      reviews: [
        {
          id: 1,
          name: "Emily Johnson",
          location: "Gloucestershire",
          rating: 5,
          text: "Outstanding service! I bought my horse van from HTG 2 years ago and I'm still extremely satisfied. The team is professional and provides excellent advice.",
          vehicleType: "Horse Van Renault Master",
          date: "3 weeks ago",
          verified: true
        },
        {
          id: 2,
          name: "James Thompson",
          location: "Yorkshire",
          rating: 5,
          text: "Excellent value for money for my 4-horse truck. The delivery went perfectly and the vehicle was immaculate.",
          vehicleType: "Iveco Daily Truck",
          date: "1 month ago",
          verified: true
        },
        {
          id: 3,
          name: "Sarah Williams",
          location: "Devon",
          rating: 5,
          text: "I highly recommend HTG! Their expertise helped me find the perfect trailer for my needs. Impeccable follow-up service.",
          vehicleType: "Böckmann Trailer",
          date: "2 months ago",
          verified: true
        },
        {
          id: 4,
          name: "Michael Brown",
          location: "Kent",
          rating: 5,
          text: "20 years of experience in equestrian sports, and I've never seen such professional service. My new Mercedes van is perfect for competitions.",
          vehicleType: "Mercedes Sprinter Van",
          date: "1 week ago",
          verified: true
        },
        {
          id: 5,
          name: "Jessica Davis",
          location: "Sussex",
          rating: 4,
          text: "Very satisfied with my purchase! The team advised me on the right model. Just a small delivery delay but the result was worth it.",
          vehicleType: "Ifor Williams Trailer",
          date: "3 days ago",
          verified: true
        },
        {
          id: 6,
          name: "David Wilson",
          location: "Norfolk",
          rating: 5,
          text: "Top-notch after-sales service! My truck had a small issue and they sorted it out quickly. A truly reliable team, I recommend without hesitation.",
          vehicleType: "Renault Master Truck",
          date: "2 weeks ago",
          verified: true
        },
        {
          id: 7,
          name: "Rebecca Miller",
          location: "Dorset",
          rating: 5,
          text: "Purchased a 2-horse trailer for my dressage horses. Quality product, expert advice and competitive price. Perfect!",
          vehicleType: "Humbaur Trailer",
          date: "5 days ago",
          verified: true
        },
        {
          id: 8,
          name: "Andrew Taylor",
          location: "Somerset",
          rating: 4,
          text: "Good overall experience. The staff really knows equestrian products well. My van matches exactly my expectations for competitions.",
          vehicleType: "Iveco Daily Van",
          date: "4 weeks ago",
          verified: true
        }
      ]
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
    features: {
      pneumaticSuspension: "Air suspension",
      airConditioning: "Air conditioning",
      sleepingCabin: "Sleeping cabin",
      automaticTransmission: "Automatic transmission",
      nonSlipFlooring: "Non-slip flooring",
      ledLighting: "LED lighting",
      ventilation: "Ventilation",
      handsFreeeKit: "Hands-free kit",
      aluminum: "Aluminum",
      alkoSuspension: "AL-KO suspension",
      rubberFlooring: "Rubber flooring",
      tackCompartment: "Tack compartment",
      ventilationSystem: "Ventilation system",
      compactSize: "Compact size",
      bLicenseDriving: "B license driving",
      modularLayout: "Modular layout",
      economical: "Economical",
      horsesCapacity: "horses",
      absBreaking: "ABS braking"
    },
    common: {
      readMore: "Read more",
      learnMore: "Learn more",
      viewAll: "View all",
      viewDetails: "View details",
      
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
      featuredVehicles: "Featured Vehicles",
      premiumSelection: "Premium Selection",
      ourBest: "Our Best",
      offersVehicles: "Offers & Vehicles",
      discoverSelection: "Discover our selection of featured vehicles and enjoy our exceptional promotions. Each vehicle is rigorously controlled by our experts.",
      rigorouslyControlled: "rigorously controlled",
      models: "models",
      specialOffers: "Special Offers",
      newArrivals2024: "New Arrivals 2024",
      bestseller: "Bestseller",
      mostRequested: "Most Requested",
      bestPrice: "Best Price",
      upTo15Off: "Up to -15%",
      receiveOffer24h: "Receive your personalized offer in less than 24h – No commitment",
      personalizedExchange: "Need a personalized exchange? Book a phone or video appointment with one of our experts.",
      discoverCollection: "Discover our exclusive collection of vehicles selected to meet the most demanding standards of equestrian transport.",
      moreEquipment: "more equipment",
      promotionalPrice: "Promotional price",
      financingAvailable: "Financing available from €299/month",
      discoverCharacteristics: "Discover all characteristics of this vehicle",
      addToMySelection: "Add to selection",
      onlyXDaysLeft: "Only 3 days left",
      favorite: "Favorite"
    },
    trucksPage: {
      title: "Horse Trucks",
      subtitle: "Professional",
      description: "Discover our selection of high-capacity horse trucks for professional transport. 4 to 6 horses, pneumatic suspension and all necessary comfort.",
      filters: {
        allFilters: "All filters",
        capacity: "Capacity",
        price: "Price",
        year: "Year",
        mileage: "Mileage",
        found: "trucks found"
      },
      vehicle: {
        horseTruck: "Horse Truck",
        features: {
          pneumaticSuspension: "Pneumatic suspension",
          airConditioning: "Air conditioning",
          sleepingCabin: "Sleeping cabin",
          automaticTransmission: "Automatic transmission",
          integratedGPS: "Integrated GPS",
          grandComfortCabin: "Grand comfort cabin",
          manualTransmission: "Manual transmission",
          blueEfficiency: "BlueEFFICIENCY",
          automaticAirConditioning: "Automatic air conditioning",
          cruiseControl: "Cruise control",
          telematicSystem: "Telematic system",
          dtiEngine: "DTI engine",
          powerSteering: "Power steering",
          electricWindows: "Electric windows",
          centralLocking: "Central locking",
          euro6: "Euro 6",
          adBlueSystem: "AdBlue system",
          spaciousCabin: "Spacious cabin",
          efficientEngine: "Efficient engine",
          easilyMaintained: "Easily maintained",
          ergonomicCabin: "Ergonomic cabin"
        },
        badges: {
          bestseller: "Bestseller",
          premium: "Premium",
          promotion: "Promotion",
          certifiedUsed: "Certified Used",
          recent: "Recent",
          reliable: "Reliable"
        },
        specs: {
          horses: "horses",
          year: "Year",
          km: "km",
          capacity: "Capacity"
        },
        pricing: {
          save: "Save",
          financing: "Financing available from",
          perMonth: "/month"
        },
        actions: {
          seeDetails: "View Details",
          addToFavorites: "Add to Favorites"
        }
      },
      cta: {
        title: "Need Advice on our Trucks?",
        description: "Our experts accompany you in choosing the perfect truck for your professional needs.",
        getQuote: "Request a Free Quote",
        contactExpert: "Contact an Expert"
      }
    },

    vansPage: {
      title: "Horse Vans",
      subtitle: "Versatile",
      description: "Discover our range of horse vans combining versatility and maneuverability. Perfect for your urban and rural travels with 2 to 4 horses.",
      filters: {
        allFilters: "All filters",
        capacity: "Capacity",
        price: "Price",
        year: "Year",
        mileage: "Mileage",
        found: "vans found"
      },
      vehicle: {
        horseVan: "Horse Van",
        specs: {
          horses: "horses",
          km: "km"
        },
        features: {
          nonSlipFlooring: "Non-slip flooring",
          ledLighting: "LED lighting",
          ventilation: "Ventilation",
          handsFreeMobile: "Hands-free kit",
          blueTecEngine: "BlueTEC engine",
          automaticTransmission: "Automatic transmission",
          reverseCamera: "Reverse camera",
          parkingSensors: "Parking sensors",
          optimizedVolume: "Optimized volume",
          cruiseControl: "Cruise control",
          airConditioning: "Air conditioning",
          ecoBlue: "EcoBlue",
          sync3: "SYNC 3",
          parkingAssist: "Parking assist",
          tdiBlueMotion: "TDI BlueMotion",
          esp: "ESP",
          hillStartAssist: "Hill start assist",
          blueHdi: "BlueHDi",
          mirrorScreen: "Mirror Screen",
          fatigueSensor: "Fatigue detector"
        },
        badges: {
          favorite: "Favorite",
          bestseller: "Bestseller",
          premium: "Premium",
          promotion: "Promotion",
          certifiedUsed: "Certified Used",
          recent: "Recent",
          economical: "Economical"
        },
        pricing: {
          save: "Save",
          financing: "Financing available from",
          perMonth: "/month"
        },
        actions: {
          seeDetails: "See Details"
        }
      },
      cta: {
        title: "Find the Perfect Van for You",
        description: "Our experts advise you to choose the horse van suited to your needs and budget.",
        getQuote: "Get a Free Quote",
        contactExpert: "Make an Appointment"
      }
    },
    aboutPage: {
      hero: {
        badge: "Our Story",
        title1: "Excellence",
        title2: "at the Service of Horses",
        description: "Since 2008, Horse Truck Garage has been supporting equestrian enthusiasts in choosing their transport vehicles. Our French expertise at the service of your champions."
      },
      stats: {
        experience: "Years of Expertise",
        clients: "Satisfied Clients",
        certified: "Certified Vehicles",
        recommendations: "Recommendations"
      },
      story: {
        title1: "A Passion",
        title2: "Became Expertise",
        paragraph1: "It all started in 2008 with a simple conviction: horses deserve the best possible transport. Jean-Pierre Dubois, passionate rider and entrepreneur, founded HTG with the ambition to revolutionize the equine transport market in France.",
        paragraph2: "Today, we are proud to have become the French reference in terms of equine transport vehicles, with more than 2500 clients who trust us for their champions.",
        cta: "Request a Personalized Quote"
      },
      mission: {
        title: "Our Mission",
        description: "To offer equestrian enthusiasts transport solutions that combine safety, comfort and performance, while guaranteeing the welfare of their horses.",
        point1: "Rigorous vehicle selection",
        point2: "Recognized technical expertise",
        point3: "Personalized customer service"
      },
      values: {
        passion: {
          title: "Equestrian Passion",
          description: "Our team shares your passion for the equine world and understands the importance of animal welfare."
        },
        expertise: {
          title: "Recognized Expertise",
          description: "15 years of experience in equine transport allow us to select the best vehicles."
        },
        excellence: {
          title: "Service Excellence",
          description: "From the first visit to after-sales service, we are committed to offering you exceptional service."
        },
        support: {
          title: "Complete Support",
          description: "Financing, insurance, maintenance: we support you in all aspects of your purchase."
        }
      },
      valuesSection: {
        title1: "Our",
        title2: " Values",
        subtitle: "The principles that have guided our action for more than 15 years"
      },
      team: {
        director: {
          role: "Director & Founder",
          experience: "20 years in equine transport",
          speciality: "Expert in premium horse trucks"
        },
        sales: {
          role: "Sales Manager",
          experience: "12 years at HTG",
          speciality: "Specialist in vans and trailers"
        },
        technical: {
          role: "Technical Expert",
          experience: "15 years specialized mechanic",
          speciality: "Quality control and expertise"
        }
      },
      teamSection: {
        title1: "Our",
        title2: " Team",
        subtitle: "Passionate experts at your service"
      },
      cta: {
        title: "Ready to Trust Our Expertise?",
        description: "Discover why more than 2500 equestrian enthusiasts trust us for their transport vehicles.",
        button1: "See Our Vehicles",
        button2: "Make an Appointment"
      }
    },
    contactPage: {
      hero: {
        badge: "Contact Us",
        title1: "Let's Talk About Your",
        title2: "Transport Project",
        description: "Our experts will guide you in choosing your equestrian transport vehicle. Contact us using the method that suits you best."
      },
      contactMethods: {
        phone: {
          title: "Call Us",
          subtitle: "Immediate Response",
          description: "Our experts are available Monday to Saturday",
          action: "01 23 45 67 89",
          actionText: "Call Now"
        },
        chat: {
          title: "Live Chat",
          subtitle: "Instant Support",
          description: "Ask your questions in real time",
          action: "Start chat",
          actionText: "Chat Now"
        },
        appointment: {
          title: "Appointment",
          subtitle: "Personalized Advice",
          description: "Meet our experts via video call or at our showroom",
          action: "Book a slot",
          actionText: "Schedule Now"
        }
      },
      methodsSection: {
        title1: "How to",
        title2: " Reach Us?",
        subtitle: "Choose the communication channel that suits you"
      },
      contactInfo: {
        title1: "Practical",
        title2: " Information",
        subtitle: "Find us at our showroom or contact us directly.",
        address: {
          title: "Address",
          street: "Zone Industrielle de la Forêt\n123 Rue des Chevaux",
          city: "45000 Orléans, France"
        },
        hours: {
          title: "Hours",
          weekdays: "Monday - Friday: 8am - 6pm",
          saturday: "Saturday: 9am - 5pm",
          sunday: "Sunday: By appointment"
        },
        phone: {
          title: "Phone",
          number: "01 23 45 67 89"
        },
        email: {
          title: "Email",
          address: "contact@htg-france.com"
        }
      },
      services: {
        title: "Express Services",
        expertise: {
          title: "Vehicle Expertise",
          description: "Complete technical inspection before purchase",
          duration: "Within 48h"
        },
        financing: {
          title: "Financing Simulation",
          description: "Calculate your monthly payments in real time",
          duration: "Immediate"
        },
        advice: {
          title: "Personalized Advice",
          description: "Help choosing according to your needs",
          duration: "30 min"
        }
      },
      form: {
        title: "Contact Request",
        subtitle: "Fill out this form and receive a personalized response within 24h.",
        fields: {
          firstName: "First Name",
          lastName: "Last Name",
          email: "Email",
          phone: "Phone",
          vehicleType: "Vehicle type sought",
          budget: "Estimated budget",
          message: "Message"
        },
        placeholders: {
          firstName: "Your first name",
          lastName: "Your last name",
          email: "your@email.com",
          phone: "06 12 34 56 78",
          vehicleTypeSelect: "Select a type",
          budgetSelect: "Select your budget",
          message: "Describe your project, specific needs, number of horses to transport..."
        },
        vehicleTypes: {
          truck: "Horse Truck",
          van: "Horse Van",
          trailer: "Horse Trailer",
          other: "Other / Advice"
        },
        budgetRanges: {
          under30k: "Less than €30,000",
          range30to50k: "€30,000 - €50,000",
          range50to80k: "€50,000 - €80,000",
          over80k: "More than €80,000"
        },
        submitInfo: "Receive your personalized response in less than 24h",
        submitSubtitle: "No commitment • Free advice",
        submitButton: "Send My Request",
        required: "*"
      }
    },
    quoteRequest: {
      hero: {
        badge: "Free Quote",
        title: "Your Quote",
        subtitle: "in Less than 24h",
        description: "Get a personalized quote for your equine transport vehicle. Our expert analyzes your needs and offers you the perfect solution."
      },
      benefits: {
        free: "100% Free",
        fast: "24h Response",
        noCommitment: "No commitment"
      },
      form: {
        title: "Quote Request Form",
        description: "The more information you give us, the more precise and adapted your quote will be",
        personalInfo: {
          title: "Your Information",
          firstName: "First Name",
          firstNamePlaceholder: "Your first name",
          lastName: "Last Name",
          lastNamePlaceholder: "Your last name",
          email: "Email",
          emailPlaceholder: "your@email.com",
          phone: "Phone",
          phonePlaceholder: "06 12 34 56 78",
          region: "Region",
          regionPlaceholder: "Your region (to optimize delivery)"
        },
        vehicleInfo: {
          title: "Your Ideal Vehicle",
          type: "Vehicle type",
          typePlaceholder: "Choose the type",
          typeOptions: {
            truck: "Horse Truck",
            van: "Horse Van",
            trailer: "Horse Trailer",
            unsure: "I don't know yet"
          },
          capacity: "Number of horses to transport",
          capacityPlaceholder: "Select",
          capacityOptions: {
            one: "1 horse",
            two: "2 horses",
            three: "3 horses",
            four: "4 horses",
            five: "5 horses",
            sixPlus: "6 horses and more"
          },
          condition: "Desired condition",
          conditionPlaceholder: "New or used?",
          conditionOptions: {
            new: "New only",
            used: "Used accepted",
            any: "Indifferent"
          },
          budget: "Approximate budget",
          budgetPlaceholder: "Your price range",
          budgetOptions: {
            under30k: "Less than €30,000",
            from30to50k: "€30,000 - €50,000",
            from50to80k: "€50,000 - €80,000",
            from80to120k: "€80,000 - €120,000",
            over120k: "More than €120,000",
            noBudget: "No defined budget"
          }
        },
        usage: {
          title: "Usage & Equipment",
          primary: "Primary use",
          primaryPlaceholder: "How will you use the vehicle?",
          usageOptions: {
            leisure: "Leisure / Rides",
            competition: "Competition",
            professional: "Professional use",
            mixed: "Mixed use"
          }
        },
        additional: {
          title: "Additional Information",
          timeline: "Desired timeline for purchase",
          timelinePlaceholder: "When would you like to acquire your vehicle?",
          timelineOptions: {
            immediate: "Immediately",
            oneToThree: "In 1 to 3 months",
            threeToSix: "In 3 to 6 months",
            sixToTwelve: "In 6 months to 1 year",
            overYear: "More than 1 year",
            infoOnly: "Simple information request"
          },
          message: "Additional message",
          messagePlaceholder: "Describe your specific needs, particular constraints, financing questions, etc."
        },
        submit: {
          title: "Let's Go!",
          description: "By submitting this form, you will receive your personalized quote within 24 hours maximum. An HTG expert will also contact you to refine your request.",
          button: "Get My Free Quote",
          disclaimer: "* No commitment • Guaranteed response within 24h • 100% free service"
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
      makeAppointment: "Concertar Cita",
      specialties: "Nuestras Especialidades",
      findPerfectVehicle: "Encuentre el Vehículo Perfecto para Sus Necesidades",
      disciplineDescription: "Cada disciplina ecuestre tiene sus exigencias. Descubra nuestra selección organizada por tipo de vehículo para encontrar la solución ideal."
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
      partners: [
        { name: "Iveco", logo: "/lovable-uploads/2b478b96-e19a-4288-ac04-f0410f56f0bc.png", description: "Socio oficial desde 2015" },
        { name: "Mercedes", logo: "/lovable-uploads/bee66bcd-4af5-4ce6-a9d1-a044053fa657.png", description: "Distribuidor autorizado" },
        { name: "Renault", logo: "/lovable-uploads/2307287b-f2a8-4858-984f-44b3a646dd23.png", description: "Concesionario certificado" },
        { name: "Böckmann", logo: "/lovable-uploads/35ff85cc-4513-4a11-9b8b-eda640027c91.png", description: "Distribuidor exclusivo regional" },
        { name: "Ifor Williams", logo: "/lovable-uploads/a3bc9f31-af5a-4053-a835-56933ae8d26b.png", description: "Distribuidor autorizado" },
        { name: "Humbaur", logo: "/lovable-uploads/243f1cf5-f2ce-48a8-a2dd-8c9d7334fa5a.png", description: "Socio premium" }
      ],
      getQuote: "Solicitar Presupuesto Gratuito",
      reviews: [
        {
          id: 1,
          name: "Carmen García",
          location: "Andalucía",
          rating: 5,
          text: "¡Servicio excepcional! Compré mi furgoneta para caballos en HTG hace 2 años y sigo muy satisfecha. El equipo es profesional y da buenos consejos.",
          vehicleType: "Furgoneta para Caballos Renault Master",
          date: "Hace 3 semanas",
          verified: true
        },
        {
          id: 2,
          name: "José Luis Martín",
          location: "Madrid",
          rating: 5,
          text: "Excelente relación calidad-precio para mi camión de 4 plazas. La entrega se desarrolló perfectamente y el vehículo estaba impecable.",
          vehicleType: "Camión Iveco Daily",
          date: "Hace 1 mes",
          verified: true
        },
        {
          id: 3,
          name: "Ana Rodríguez",
          location: "Cataluña",
          rating: 5,
          text: "¡Recomiendo encarecidamente HTG! Su experiencia me permitió encontrar el remolque perfecto para mis necesidades. Seguimiento irreprochable.",
          vehicleType: "Remolque Böckmann",
          date: "Hace 2 meses",
          verified: true
        },
        {
          id: 4,
          name: "Miguel Fernández",
          location: "Valencia",
          rating: 5,
          text: "20 años de experiencia en ecuestre, y nunca he visto un servicio tan profesional. Mi nueva furgoneta Mercedes es perfecta para mis competiciones.",
          vehicleType: "Furgoneta Mercedes Sprinter",
          date: "Hace 1 semana",
          verified: true
        },
        {
          id: 5,
          name: "Laura Sánchez",
          location: "Galicia",
          rating: 4,
          text: "¡Muy satisfecha con mi compra! El equipo supo aconsejarme sobre el modelo correcto. Solo un pequeño retraso en la entrega pero el resultado valió la pena.",
          vehicleType: "Remolque Ifor Williams",
          date: "Hace 3 días",
          verified: true
        },
        {
          id: 6,
          name: "Carlos López",
          location: "Castilla y León",
          rating: 5,
          text: "¡Servicio postventa de primera! Mi camión tuvo un pequeño problema y lo solucionaron rápidamente. Un equipo realmente confiable, lo recomiendo sin dudar.",
          vehicleType: "Camión Renault Master",
          date: "Hace 2 semanas",
          verified: true
        },
        {
          id: 7,
          name: "Patricia Ruiz",
          location: "País Vasco",
          rating: 5,
          text: "Compra de un remolque de 2 plazas para mis caballos de doma. Producto de calidad, consejo experto y precio competitivo. ¡Perfecto!",
          vehicleType: "Remolque Humbaur",
          date: "Hace 5 días",
          verified: true
        },
        {
          id: 8,
          name: "Roberto Jiménez",
          location: "Aragón",
          rating: 4,
          text: "Buena experiencia global. El personal conoce realmente bien los productos ecuestres. Mi furgoneta corresponde exactamente a mis expectativas para las competiciones.",
          vehicleType: "Furgoneta Iveco Daily",
          date: "Hace 4 semanas",
          verified: true
        }
      ]
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
    features: {
      pneumaticSuspension: "Suspensión neumática",
      airConditioning: "Aire acondicionado",
      sleepingCabin: "Cabina con cama",
      automaticTransmission: "Transmisión automática",
      nonSlipFlooring: "Suelo antideslizante",
      ledLighting: "Iluminación LED",
      ventilation: "Ventilación",
      handsFreeeKit: "Kit manos libres",
      aluminum: "Aluminio",
      alkoSuspension: "Suspensión AL-KO",
      rubberFlooring: "Suelo de goma",
      tackCompartment: "Compartimento guarnicionería",
      ventilationSystem: "Sistema ventilación",
      compactSize: "Tamaño compacto",
      bLicenseDriving: "Conducción permiso B",
      modularLayout: "Diseño modular",
      economical: "Económico",
      horsesCapacity: "caballos",
      absBreaking: "Frenado ABS"
    },
    common: {
      readMore: "Leer más",
      learnMore: "Saber más",
      viewAll: "Ver todo",
      viewDetails: "Ver detalles",
      
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
      featuredVehicles: "Vehículos Destacados",
      premiumSelection: "Selección Premium",
      ourBest: "Nuestros Mejores",
      offersVehicles: "Ofertas y Vehículos",
      discoverSelection: "Descubra nuestra selección de vehículos destacados y aproveche nuestras promociones excepcionales. Cada vehículo es rigurosamente controlado por nuestros expertos.",
      rigorouslyControlled: "rigurosamente controlado",
      models: "modelos",
      specialOffers: "Ofertas Especiales",
      newArrivals2024: "Novedades 2024",
      bestseller: "Bestseller",
      mostRequested: "Más Solicitado",
      bestPrice: "Mejor Precio",
      upTo15Off: "Hasta -15%",
      receiveOffer24h: "Reciba su oferta personalizada en menos de 24h – Sin compromiso",
      personalizedExchange: "¿Necesita un intercambio personalizado? Reserve una cita telefónica o por video con uno de nuestros expertos.",
      discoverCollection: "Descubra nuestra colección exclusiva de vehículos seleccionados para satisfacer los estándares más exigentes del transporte ecuestre.",
      moreEquipment: "más equipamiento",
      promotionalPrice: "Precio promocional",
      financingAvailable: "Financiación disponible desde 299€/mes",
      discoverCharacteristics: "Descubrir todas las características de este vehículo",
      addToMySelection: "Añadir a la selección",
      onlyXDaysLeft: "Solo quedan 3 días",
      favorite: "Favorito"
    },
    trucksPage: {
      title: "Camiones para Caballos",
      subtitle: "Profesionales",
      description: "Descubra nuestra selección de camiones para caballos de alta capacidad para transporte profesional. 4 a 6 caballos, suspensión neumática y toda la comodidad necesaria.",
      filters: {
        allFilters: "Todos los filtros",
        capacity: "Capacidad",
        price: "Precio",
        year: "Año",
        mileage: "Kilometraje",
        found: "camiones encontrados"
      },
      vehicle: {
        horseTruck: "Camión para Caballos",
        features: {
          pneumaticSuspension: "Suspensión neumática",
          airConditioning: "Aire acondicionado",
          sleepingCabin: "Cabina con cama",
          automaticTransmission: "Transmisión automática",
          integratedGPS: "GPS integrado",
          grandComfortCabin: "Cabina gran confort",
          manualTransmission: "Transmisión manual",
          blueEfficiency: "BlueEFFICIENCY",
          automaticAirConditioning: "Aire acondicionado automático",
          cruiseControl: "Control de crucero",
          telematicSystem: "Sistema telemático",
          dtiEngine: "Motor DTI",
          powerSteering: "Dirección asistida",
          electricWindows: "Ventanas eléctricas",
          centralLocking: "Cierre centralizado",
          euro6: "Euro 6",
          adBlueSystem: "Sistema AdBlue",
          spaciousCabin: "Cabina espaciosa",
          efficientEngine: "Motor eficiente",
          easilyMaintained: "Mantenimiento fácil",
          ergonomicCabin: "Cabina ergonómica"
        },
        badges: {
          bestseller: "Más vendido",
          premium: "Premium",
          promotion: "Promoción",
          certifiedUsed: "Ocasión Certificada",
          recent: "Reciente",
          reliable: "Confiable"
        },
        specs: {
          horses: "caballos",
          year: "Año",
          km: "km",
          capacity: "Capacidad"
        },
        pricing: {
          save: "Ahorre",
          financing: "Financiación disponible desde",
          perMonth: "/mes"
        },
        actions: {
          seeDetails: "Ver Detalles",
          addToFavorites: "Añadir a Favoritos"
        }
      },
      cta: {
        title: "¿Necesita Consejo sobre nuestros Camiones?",
        description: "Nuestros expertos le acompañan en la elección del camión perfecto para sus necesidades profesionales.",
        getQuote: "Solicitar Presupuesto Gratuito",
        contactExpert: "Contactar a un Experto"
      }
    },

    vansPage: {
      title: "Furgonetas para Caballos",
      subtitle: "Versátiles",
      description: "Descubre nuestra gama de furgonetas para caballos que combinan versatilidad y maniobrabilidad. Perfectas para tus viajes urbanos y rurales con 2 a 4 caballos.",
      filters: { allFilters: "Todos los filtros", capacity: "Capacidad", price: "Precio", year: "Año", mileage: "Kilometraje", found: "furgonetas encontradas" },
      vehicle: {
        horseVan: "Furgoneta para Caballos",
        specs: { horses: "caballos", km: "km" },
        features: { nonSlipFlooring: "Suelo antideslizante", ledLighting: "Iluminación LED", ventilation: "Ventilación", handsFreeMobile: "Kit manos libres", blueTecEngine: "Motor BlueTEC", automaticTransmission: "Transmisión automática", reverseCamera: "Cámara trasera", parkingSensors: "Sensores de aparcamiento", optimizedVolume: "Volumen optimizado", cruiseControl: "Control de crucero", airConditioning: "Aire acondicionado", ecoBlue: "EcoBlue", sync3: "SYNC 3", parkingAssist: "Asistente de aparcamiento", tdiBlueMotion: "TDI BlueMotion", esp: "ESP", hillStartAssist: "Asistente de arranque en pendiente", blueHdi: "BlueHDi", mirrorScreen: "Mirror Screen", fatigueSensor: "Detector de fatiga" },
        badges: { favorite: "Favorito", bestseller: "Más Vendido", premium: "Premium", promotion: "Promoción", certifiedUsed: "Seminuevo Certificado", recent: "Reciente", economical: "Económico" },
        pricing: { save: "Ahorra", financing: "Financiación disponible desde", perMonth: "/mes" },
        actions: { seeDetails: "Ver Detalles" }
      },
      cta: { title: "Encuentra la Furgoneta Perfecta para Ti", description: "Nuestros expertos te aconsejan para elegir la furgoneta para caballos adecuada a tus necesidades y presupuesto.", getQuote: "Solicitar Presupuesto Gratuito", contactExpert: "Concertar Cita" }
    },
    aboutPage: {
      hero: {
        badge: "Nuestra Historia",
        title1: "La Excelencia",
        title2: "al Servicio de los Caballos",
        description: "Desde 2008, Horse Truck Garage acompaña a los entusiastas de la equitación en la elección de sus vehículos de transporte. Nuestra experiencia francesa al servicio de tus campeones."
      },
      stats: {
        experience: "Años de Experiencia",
        clients: "Clientes Satisfechos",
        certified: "Vehículos Certificados",
        recommendations: "Recomendaciones"
      },
      story: {
        title1: "Una Pasión",
        title2: "Convertida en Experiencia",
        paragraph1: "Todo comenzó en 2008 con una simple convicción: los caballos merecen el mejor transporte posible. Jean-Pierre Dubois, jinete apasionado y empresario, fundó HTG con la ambición de revolucionar el mercado del transporte equino en Francia.",
        paragraph2: "Hoy, estamos orgullosos de habernos convertido en la referencia francesa en términos de vehículos de transporte equino, con más de 2500 clientes que confían en nosotros para sus campeones.",
        cta: "Solicitar un Presupuesto Personalizado"
      },
      mission: {
        title: "Nuestra Misión",
        description: "Ofrecer a los entusiastas de la equitación soluciones de transporte que combinen seguridad, comodidad y rendimiento, garantizando el bienestar de sus caballos.",
        point1: "Selección rigurosa de vehículos",
        point2: "Experiencia técnica reconocida",
        point3: "Servicio al cliente personalizado"
      },
      values: {
        passion: {
          title: "Pasión Ecuestre",
          description: "Nuestro equipo comparte tu pasión por el mundo equino y comprende la importancia del bienestar animal."
        },
        expertise: {
          title: "Experiencia Reconocida",
          description: "15 años de experiencia en transporte equino nos permiten seleccionar los mejores vehículos."
        },
        excellence: {
          title: "Excelencia del Servicio",
          description: "Desde la primera visita hasta el servicio postventa, nos comprometemos a ofrecerte un servicio excepcional."
        },
        support: {
          title: "Apoyo Completo",
          description: "Financiación, seguro, mantenimiento: te apoyamos en todos los aspectos de tu compra."
        }
      },
      valuesSection: {
        title1: "Nuestros",
        title2: " Valores",
        subtitle: "Los principios que han guiado nuestra acción durante más de 15 años"
      },
      team: {
        director: {
          role: "Director y Fundador",
          experience: "20 años en transporte equino",
          speciality: "Experto en camiones para caballos premium"
        },
        sales: {
          role: "Gerente de Ventas",
          experience: "12 años en HTG",
          speciality: "Especialista en furgonetas y remolques"
        },
        technical: {
          role: "Experto Técnico",
          experience: "15 años mecánico especializado",
          speciality: "Control de calidad y experiencia"
        }
      },
      teamSection: {
        title1: "Nuestro",
        title2: " Equipo",
        subtitle: "Expertos apasionados a tu servicio"
      },
      cta: {
        title: "¿Listo para Confiar en Nuestra Experiencia?",
        description: "Descubre por qué más de 2500 entusiastas de la equitación confían en nosotros para sus vehículos de transporte.",
        button1: "Ver Nuestros Vehículos",
        button2: "Concertar una Cita"
      }
    },
    contactPage: {
      hero: {
        badge: "Contáctanos",
        title1: "Hablemos de Tu",
        title2: "Proyecto de Transporte",
        description: "Nuestros expertos te acompañan en la elección de tu vehículo de transporte ecuestre. Contáctanos por el medio que más te convenga."
      },
      contactMethods: {
        phone: {
          title: "Llámanos",
          subtitle: "Respuesta inmediata",
          description: "Nuestros expertos te responden de lunes a sábado",
          action: "01 23 45 67 89",
          actionText: "Llamar ahora"
        },
        chat: {
          title: "Chat en Línea",
          subtitle: "Asistencia instantánea",
          description: "Haz tus preguntas en tiempo real",
          action: "Iniciar el chat",
          actionText: "Chatear ahora"
        },
        appointment: {
          title: "Cita",
          subtitle: "Consejo personalizado",
          description: "Reúnete con nuestros expertos por video o en el showroom",
          action: "Reservar un horario",
          actionText: "Programar ahora"
        }
      },
      methodsSection: {
        title1: "¿Cómo",
        title2: " Contactarnos?",
        subtitle: "Elige el canal de comunicación que más te convenga"
      },
      contactInfo: {
        title1: "Información",
        title2: " Práctica",
        subtitle: "Encuéntranos en nuestro showroom o contáctanos directamente.",
        address: {
          title: "Dirección",
          street: "Zone Industrielle de la Forêt\n123 Rue des Chevaux",
          city: "45000 Orléans, Francia"
        },
        hours: {
          title: "Horarios",
          weekdays: "Lunes - Viernes: 8h - 18h",
          saturday: "Sábado: 9h - 17h",
          sunday: "Domingo: Con cita previa"
        },
        phone: {
          title: "Teléfono",
          number: "01 23 45 67 89"
        },
        email: {
          title: "Email",
          address: "contact@htg-france.com"
        }
      },
      services: {
        title: "Servicios Exprés",
        expertise: {
          title: "Pericia del Vehículo",
          description: "Control técnico completo antes de la compra",
          duration: "En 48h"
        },
        financing: {
          title: "Simulación de Financiación",
          description: "Calcula tus cuotas mensuales en tiempo real",
          duration: "Inmediato"
        },
        advice: {
          title: "Consejo Personalizado",
          description: "Ayuda en la elección según tus necesidades",
          duration: "30 min"
        }
      },
      form: {
        title: "Solicitud de Contacto",
        subtitle: "Completa este formulario y recibe una respuesta personalizada en 24h.",
        fields: {
          firstName: "Nombre",
          lastName: "Apellido",
          email: "Email",
          phone: "Teléfono",
          vehicleType: "Tipo de vehículo buscado",
          budget: "Presupuesto estimado",
          message: "Mensaje"
        },
        placeholders: {
          firstName: "Tu nombre",
          lastName: "Tu apellido",
          email: "tu@email.com",
          phone: "06 12 34 56 78",
          vehicleTypeSelect: "Selecciona un tipo",
          budgetSelect: "Selecciona tu presupuesto",
          message: "Descríbenos tu proyecto, tus necesidades específicas, el número de caballos a transportar..."
        },
        vehicleTypes: {
          truck: "Camión para Caballos",
          van: "Furgoneta para Caballos",
          trailer: "Remolque para Caballos",
          other: "Otro / Consejo"
        },
        budgetRanges: {
          under30k: "Menos de 30.000€",
          range30to50k: "30.000€ - 50.000€",
          range50to80k: "50.000€ - 80.000€",
          over80k: "Más de 80.000€"
        },
        submitInfo: "Recibe tu respuesta personalizada en menos de 24h",
        submitSubtitle: "Sin compromiso • Consejo gratuito",
        submitButton: "Enviar mi Solicitud",
        required: "*"
      }
    },
    quoteRequest: {
      hero: {
        badge: "Presupuesto Gratuito",
        title: "Su Presupuesto",
        subtitle: "en Menos de 24h",
        description: "Obtenga un presupuesto personalizado para su vehículo de transporte equino. Nuestro experto analiza sus necesidades y le propone la solución perfecta."
      },
      benefits: {
        free: "100% Gratuito",
        fast: "Respuesta 24h",
        noCommitment: "Sin compromiso"
      },
      form: {
        title: "Formulario de Solicitud de Presupuesto",
        description: "Cuanta más información nos proporcione, más preciso y adaptado será su presupuesto",
        personalInfo: {
          title: "Su Información",
          firstName: "Nombre",
          firstNamePlaceholder: "Su nombre",
          lastName: "Apellido",
          lastNamePlaceholder: "Su apellido",
          email: "Email",
          emailPlaceholder: "su@email.com",
          phone: "Teléfono",
          phonePlaceholder: "06 12 34 56 78",
          region: "Región",
          regionPlaceholder: "Su región (para optimizar la entrega)"
        },
        vehicleInfo: {
          title: "Su Vehículo Ideal",
          type: "Tipo de vehículo",
          typePlaceholder: "Elija el tipo",
          typeOptions: {
            truck: "Camión para Caballos",
            van: "Furgoneta para Caballos",
            trailer: "Remolque para Caballos",
            unsure: "Aún no lo sé"
          },
          capacity: "Número de caballos a transportar",
          capacityPlaceholder: "Seleccionar",
          capacityOptions: {
            one: "1 caballo",
            two: "2 caballos",
            three: "3 caballos",
            four: "4 caballos",
            five: "5 caballos",
            sixPlus: "6 caballos y más"
          },
          condition: "Estado deseado",
          conditionPlaceholder: "¿Nuevo o usado?",
          conditionOptions: {
            new: "Solo nuevo",
            used: "Usado aceptado",
            any: "Indiferente"
          },
          budget: "Presupuesto aproximado",
          budgetPlaceholder: "Su rango de precios",
          budgetOptions: {
            under30k: "Menos de 30.000€",
            from30to50k: "30.000€ - 50.000€",
            from50to80k: "50.000€ - 80.000€",
            from80to120k: "80.000€ - 120.000€",
            over120k: "Más de 120.000€",
            noBudget: "Sin presupuesto definido"
          }
        },
        usage: {
          title: "Uso y Equipamiento",
          primary: "Uso principal",
          primaryPlaceholder: "¿Cómo va a usar el vehículo?",
          usageOptions: {
            leisure: "Ocio / Paseos",
            competition: "Competición",
            professional: "Uso profesional",
            mixed: "Uso mixto"
          }
        },
        additional: {
          title: "Información Adicional",
          timeline: "Plazo deseado para la compra",
          timelinePlaceholder: "¿Cuándo le gustaría adquirir su vehículo?",
          timelineOptions: {
            immediate: "Inmediatamente",
            oneToThree: "En 1 a 3 meses",
            threeToSix: "En 3 a 6 meses",
            sixToTwelve: "En 6 meses a 1 año",
            overYear: "Más de 1 año",
            infoOnly: "Simple solicitud de información"
          },
          message: "Mensaje adicional",
          messagePlaceholder: "Describa sus necesidades específicas, limitaciones particulares, preguntas sobre financiación, etc."
        },
        submit: {
          title: "¡Vamos!",
          description: "Al enviar este formulario, recibirá su presupuesto personalizado en un máximo de 24 horas. Un experto de HTG también se pondrá en contacto con usted para afinar su solicitud.",
          button: "Recibir Mi Presupuesto Gratuito",
          disclaimer: "* Sin compromiso • Respuesta garantizada en 24h • Servicio 100% gratuito"
        }
      }
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
      makeAppointment: "Termin vereinbaren",
      specialties: "Unsere Spezialitäten",
      findPerfectVehicle: "Finden Sie das perfekte Fahrzeug für Ihre Bedürfnisse",
      disciplineDescription: "Jede Reitsportdisziplin hat ihre Anforderungen. Entdecken Sie unsere nach Fahrzeugtyp organisierte Auswahl, um die ideale Lösung zu finden."
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
      partners: [
        { name: "Iveco", logo: "/lovable-uploads/2b478b96-e19a-4288-ac04-f0410f56f0bc.png", description: "Offizieller Partner seit 2015" },
        { name: "Mercedes", logo: "/lovable-uploads/bee66bcd-4af5-4ce6-a9d1-a044053fa657.png", description: "Autorisierter Händler" },
        { name: "Renault", logo: "/lovable-uploads/2307287b-f2a8-4858-984f-44b3a646dd23.png", description: "Zertifizierter Händler" },
        { name: "Böckmann", logo: "/lovable-uploads/35ff85cc-4513-4a11-9b8b-eda640027c91.png", description: "Exklusiver regionaler Händler" },
        { name: "Ifor Williams", logo: "/lovable-uploads/a3bc9f31-af5a-4053-a835-56933ae8d26b.png", description: "Autorisierter Händler" },
        { name: "Humbaur", logo: "/lovable-uploads/243f1cf5-f2ce-48a8-a2dd-8c9d7334fa5a.png", description: "Premium Partner" }
      ],
      getQuote: "Kostenloses Angebot anfordern",
      reviews: [
        {
          id: 1,
          name: "Anna Weber",
          location: "Bayern",
          rating: 5,
          text: "Außergewöhnlicher Service! Ich habe meinen Pferdetransporter vor 2 Jahren bei HTG gekauft und bin immer noch sehr zufrieden. Das Team ist professionell und berät gut.",
          vehicleType: "Pferdetransporter Renault Master",
          date: "Vor 3 Wochen",
          verified: true
        },
        {
          id: 2,
          name: "Klaus Müller",
          location: "Nordrhein-Westfalen",
          rating: 5,
          text: "Ausgezeichnetes Preis-Leistungs-Verhältnis für meinen 4-Pferde-LKW. Die Lieferung verlief perfekt und das Fahrzeug war tadellos.",
          vehicleType: "Iveco Daily LKW",
          date: "Vor 1 Monat",
          verified: true
        },
        {
          id: 3,
          name: "Petra Schmidt",
          location: "Baden-Württemberg",
          rating: 5,
          text: "Ich empfehle HTG wärmstens! Ihre Expertise half mir, den perfekten Anhänger für meine Bedürfnisse zu finden. Tadellose Nachbetreuung.",
          vehicleType: "Böckmann Anhänger",
          date: "Vor 2 Monaten",
          verified: true
        },
        {
          id: 4,
          name: "Hans Wagner",
          location: "Hessen",
          rating: 5,
          text: "20 Jahre Erfahrung im Reitsport, und ich habe noch nie einen so professionellen Service gesehen. Mein neuer Mercedes-Transporter ist perfekt für Wettkämpfe.",
          vehicleType: "Mercedes Sprinter Transporter",
          date: "Vor 1 Woche",
          verified: true
        },
        {
          id: 5,
          name: "Sabine Fischer",
          location: "Niedersachsen",
          rating: 4,
          text: "Sehr zufrieden mit meinem Kauf! Das Team wusste mich über das richtige Modell zu beraten. Nur eine kleine Lieferverzögerung, aber das Ergebnis war es wert.",
          vehicleType: "Ifor Williams Anhänger",
          date: "Vor 3 Tagen",
          verified: true
        },
        {
          id: 6,
          name: "Thomas Becker",
          location: "Schleswig-Holstein",
          rating: 5,
          text: "Erstklassiger Kundendienst! Mein LKW hatte ein kleines Problem und sie haben es schnell gelöst. Ein wirklich zuverlässiges Team, ich empfehle ohne zu zögern.",
          vehicleType: "Renault Master LKW",
          date: "Vor 2 Wochen",
          verified: true
        },
        {
          id: 7,
          name: "Monika Hoffmann",
          location: "Rheinland-Pfalz",
          rating: 5,
          text: "Kauf eines 2-Pferde-Anhängers für meine Dressurpferde. Qualitätsprodukt, Expertenberatung und wettbewerbsfähiger Preis. Perfekt!",
          vehicleType: "Humbaur Anhänger",
          date: "Vor 5 Tagen",
          verified: true
        },
        {
          id: 8,
          name: "Jürgen Krause",
          location: "Brandenburg",
          rating: 4,
          text: "Gute Gesamterfahrung. Das Personal kennt sich wirklich gut mit Reitprodukten aus. Mein Transporter entspricht genau meinen Erwartungen für Wettkämpfe.",
          vehicleType: "Iveco Daily Transporter",
          date: "Vor 4 Wochen",
          verified: true
        }
      ]
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
    features: {
      pneumaticSuspension: "Luftfederung",
      airConditioning: "Klimaanlage",
      sleepingCabin: "Schlafkabine",
      automaticTransmission: "Automatikgetriebe",
      nonSlipFlooring: "Rutschfester Boden",
      ledLighting: "LED-Beleuchtung",
      ventilation: "Belüftung",
      handsFreeeKit: "Freisprecheinrichtung",
      aluminum: "Aluminium",
      alkoSuspension: "AL-KO Federung",
      rubberFlooring: "Gummiboden",
      tackCompartment: "Sattelkammer",
      ventilationSystem: "Belüftungssystem",
      compactSize: "Kompakte Größe",
      bLicenseDriving: "B-Führerschein",
      modularLayout: "Modularer Aufbau",
      economical: "Wirtschaftlich",
      horsesCapacity: "Pferde",
      absBreaking: "ABS-Bremsen"
    },
    common: {
      readMore: "Mehr lesen",
      learnMore: "Mehr erfahren",
      viewAll: "Alle anzeigen",
      viewDetails: "Details anzeigen",
      
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
      featuredVehicles: "Ausgewählte Fahrzeuge",
      premiumSelection: "Premium-Auswahl",
      ourBest: "Unsere Besten",
      offersVehicles: "Angebote & Fahrzeuge",
      discoverSelection: "Entdecken Sie unsere Auswahl an Topfahrzeugen und profitieren Sie von unseren außergewöhnlichen Aktionen. Jedes Fahrzeug wird von unseren Experten streng kontrolliert.",
      rigorouslyControlled: "streng kontrolliert",
      models: "Modelle",
      specialOffers: "Sonderangebote",
      newArrivals2024: "Neuheiten 2024",
      bestseller: "Bestseller",
      mostRequested: "Am meisten gefragt",
      bestPrice: "Bester Preis",
      upTo15Off: "Bis zu -15%",
      receiveOffer24h: "Erhalten Sie Ihr personalisiertes Angebot in weniger als 24h – Unverbindlich",
      personalizedExchange: "Brauchen Sie einen persönlichen Austausch? Buchen Sie einen Telefon- oder Videotermin mit einem unserer Experten.",
      discoverCollection: "Entdecken Sie unsere exklusive Kollektion von Fahrzeugen, die ausgewählt wurden, um den anspruchsvollsten Standards des Pferdetransports zu entsprechen.",
      moreEquipment: "weitere Ausstattung",
      promotionalPrice: "Aktionspreis",
      financingAvailable: "Finanzierung ab 299€/Monat verfügbar",
      discoverCharacteristics: "Alle Eigenschaften dieses Fahrzeugs entdecken",
      addToMySelection: "Zur Auswahl hinzufügen",
      onlyXDaysLeft: "Nur noch 3 Tage",
      favorite: "Favorit"
    },
    trucksPage: {
      title: "Pferdetransporter",
      subtitle: "Professionell",
      description: "Entdecken Sie unsere Auswahl an hochwertigen Pferdetransportern für den professionellen Transport. 4 bis 6 Pferde, Luftfederung und allen notwendigen Komfort.",
      filters: {
        allFilters: "Alle Filter",
        capacity: "Kapazität",
        price: "Preis",
        year: "Jahr",
        mileage: "Laufleistung",
        found: "LKWs gefunden"
      },
      vehicle: {
        horseTruck: "Pferdetransporter",
        features: {
          pneumaticSuspension: "Luftfederung",
          airConditioning: "Klimaanlage",
          sleepingCabin: "Schlafkabine",
          automaticTransmission: "Automatikgetriebe",
          integratedGPS: "Integriertes GPS",
          grandComfortCabin: "Komfort-Kabine",
          manualTransmission: "Schaltgetriebe",
          blueEfficiency: "BlueEFFICIENCY",
          automaticAirConditioning: "Automatische Klimaanlage",
          cruiseControl: "Tempomat",
          telematicSystem: "Telematik-System",
          dtiEngine: "DTI-Motor",
          powerSteering: "Servolenkung",
          electricWindows: "Elektrische Fensterheber",
          centralLocking: "Zentralverriegelung",
          euro6: "Euro 6",
          adBlueSystem: "AdBlue-System",
          spaciousCabin: "Geräumige Kabine",
          efficientEngine: "Effizienter Motor",
          easilyMaintained: "Wartungsfreundlich",
          ergonomicCabin: "Ergonomische Kabine"
        },
        badges: {
          bestseller: "Bestseller",
          premium: "Premium",
          promotion: "Aktion",
          certifiedUsed: "Zertifizierter Gebrauchtwagen",
          recent: "Aktuell",
          reliable: "Zuverlässig"
        },
        specs: {
          horses: "Pferde",
          year: "Jahr",
          km: "km",
          capacity: "Kapazität"
        },
        pricing: {
          save: "Sparen Sie",
          financing: "Finanzierung verfügbar ab",
          perMonth: "/Monat"
        },
        actions: {
          seeDetails: "Details ansehen",
          addToFavorites: "Zu Favoriten hinzufügen"
        }
      },
      cta: {
        title: "Brauchen Sie Beratung zu unseren LKWs?",
        description: "Unsere Experten begleiten Sie bei der Auswahl des perfekten LKWs für Ihre beruflichen Bedürfnisse.",
        getQuote: "Kostenloses Angebot anfordern",
        contactExpert: "Experten kontaktieren"
      }
    },

    vansPage: {
      title: "Pferde-Transporter",
      subtitle: "Vielseitig", 
      description: "Entdecken Sie unsere Palette von Pferdetransportern, die Vielseitigkeit und Wendigkeit vereinen. Perfekt für Ihre Stadt- und Landfahrten mit 2 bis 4 Pferden.",
      filters: { allFilters: "Alle Filter", capacity: "Kapazität", price: "Preis", year: "Jahr", mileage: "Laufleistung", found: "Transporter gefunden" },
      vehicle: {
        horseVan: "Pferde-Transporter",
        specs: { horses: "Pferde", km: "km" },
        features: { nonSlipFlooring: "Rutschfester Boden", ledLighting: "LED-Beleuchtung", ventilation: "Belüftung", handsFreeMobile: "Freisprecheinrichtung", blueTecEngine: "BlueTEC Motor", automaticTransmission: "Automatikgetriebe", reverseCamera: "Rückfahrkamera", parkingSensors: "Einparkhilfe", optimizedVolume: "Optimiertes Volumen", cruiseControl: "Tempomat", airConditioning: "Klimaanlage", ecoBlue: "EcoBlue", sync3: "SYNC 3", parkingAssist: "Einparkhilfe", tdiBlueMotion: "TDI BlueMotion", esp: "ESP", hillStartAssist: "Berganfahrhilfe", blueHdi: "BlueHDi", mirrorScreen: "Mirror Screen", fatigueSensor: "Müdigkeitserkennung" },
        badges: { favorite: "Favorit", bestseller: "Bestseller", premium: "Premium", promotion: "Aktion", certifiedUsed: "Zertifiziert Gebraucht", recent: "Neu", economical: "Sparsam" },
        pricing: { save: "Sparen", financing: "Finanzierung verfügbar ab", perMonth: "/Monat" },
        actions: { seeDetails: "Details Anzeigen" }
      },
      cta: { title: "Finden Sie den Perfekten Transporter für Sie", description: "Unsere Experten beraten Sie bei der Auswahl des für Ihre Bedürfnisse und Ihr Budget geeigneten Pferdetransporters.", getQuote: "Kostenloses Angebot Anfordern", contactExpert: "Termin Vereinbaren" }
    },
    aboutPage: {
      hero: { badge: "Unsere Geschichte", title1: "Exzellenz", title2: "im Dienste der Pferde", description: "Seit 2008 begleitet Horse Truck Garage Reitsport-Enthusiasten bei der Auswahl ihrer Transportfahrzeuge." },
      stats: { experience: "Jahre Erfahrung", clients: "Zufriedene Kunden", certified: "Zertifizierte Fahrzeuge", recommendations: "Empfehlungen" },
      story: { title1: "Eine Leidenschaft", title2: "Wurde zur Expertise", paragraph1: "Alles begann 2008 mit einer einfachen Überzeugung: Pferde verdienen den bestmöglichen Transport.", paragraph2: "Heute sind wir stolz darauf, die französische Referenz für Pferdetransportfahrzeuge geworden zu sein.", cta: "Persönliches Angebot anfordern" },
      mission: { title: "Unsere Mission", description: "Reitsport-Enthusiasten Transportlösungen anzubieten, die Sicherheit, Komfort und Leistung vereinen.", point1: "Strenge Fahrzeugauswahl", point2: "Anerkannte technische Expertise", point3: "Persönlicher Kundenservice" },
      values: { passion: { title: "Reitsport-Leidenschaft", description: "Unser Team teilt Ihre Leidenschaft für die Pferdewelt." }, expertise: { title: "Anerkannte Expertise", description: "15 Jahre Erfahrung im Pferdetransport." }, excellence: { title: "Service-Exzellenz", description: "Wir bieten Ihnen einen außergewöhnlichen Service." }, support: { title: "Komplette Unterstützung", description: "Finanzierung, Versicherung, Wartung." } },
      valuesSection: { title1: "Unsere", title2: " Werte", subtitle: "Die Prinzipien, die unser Handeln leiten" },
      team: { director: { role: "Direktor & Gründer", experience: "20 Jahre im Pferdetransport", speciality: "Experte für Premium-Pferdetransporter" }, sales: { role: "Verkaufsleiter", experience: "12 Jahre bei HTG", speciality: "Spezialist für Transporter" }, technical: { role: "Technischer Experte", experience: "15 Jahre spezialisierter Mechaniker", speciality: "Qualitätskontrolle" } },
      teamSection: { title1: "Unser", title2: " Team", subtitle: "Leidenschaftliche Experten zu Ihren Diensten" },
      cta: { title: "Bereit, unserer Expertise zu vertrauen?", description: "Entdecken Sie, warum mehr als 2500 Reitsport-Enthusiasten uns vertrauen.", button1: "Unsere Fahrzeuge ansehen", button2: "Termin vereinbaren" }
    },
    contactPage: {
      hero: {
        badge: "Kontaktieren Sie uns",
        title1: "Sprechen wir über Ihr",
        title2: "Transport-Projekt",
        description: "Unsere Experten begleiten Sie bei der Auswahl Ihres Reitfahrzeugs. Kontaktieren Sie uns auf die Art, die Ihnen am besten passt."
      },
      contactMethods: {
        phone: {
          title: "Rufen Sie uns an",
          subtitle: "Sofortige Antwort",
          description: "Unsere Experten antworten Ihnen von Montag bis Samstag",
          action: "01 23 45 67 89",
          actionText: "Jetzt anrufen"
        },
        chat: {
          title: "Live-Chat",
          subtitle: "Sofortige Unterstützung",
          description: "Stellen Sie Ihre Fragen in Echtzeit",
          action: "Chat starten",
          actionText: "Jetzt chatten"
        },
        appointment: {
          title: "Termin",
          subtitle: "Persönliche Beratung",
          description: "Treffen Sie unsere Experten per Video oder im Showroom",
          action: "Slot buchen",
          actionText: "Jetzt planen"
        }
      },
      methodsSection: {
        title1: "Wie Sie",
        title2: " uns Erreichen?",
        subtitle: "Wählen Sie den Kommunikationskanal, der Ihnen passt"
      },
      contactInfo: {
        title1: "Praktische",
        title2: " Informationen",
        subtitle: "Besuchen Sie uns in unserem Showroom oder kontaktieren Sie uns direkt.",
        address: {
          title: "Adresse",
          street: "Zone Industrielle de la Forêt\n123 Rue des Chevaux",
          city: "45000 Orléans, Frankreich"
        },
        hours: {
          title: "Öffnungszeiten",
          weekdays: "Montag - Freitag: 8h - 18h",
          saturday: "Samstag: 9h - 17h",
          sunday: "Sonntag: Nach Vereinbarung"
        },
        phone: {
          title: "Telefon",
          number: "01 23 45 67 89"
        },
        email: {
          title: "E-Mail",
          address: "contact@htg-france.com"
        }
      },
      services: {
        title: "Express-Services",
        expertise: {
          title: "Fahrzeug-Expertise",
          description: "Komplette technische Kontrolle vor dem Kauf",
          duration: "Binnen 48h"
        },
        financing: {
          title: "Finanzierungs-Simulation",
          description: "Berechnen Sie Ihre monatlichen Raten in Echtzeit",
          duration: "Sofort"
        },
        advice: {
          title: "Persönliche Beratung",
          description: "Hilfe bei der Auswahl nach Ihren Bedürfnissen",
          duration: "30 min"
        }
      },
      form: {
        title: "Kontaktanfrage",
        subtitle: "Füllen Sie dieses Formular aus und erhalten Sie eine persönliche Antwort innerhalb von 24h.",
        fields: {
          firstName: "Vorname",
          lastName: "Nachname",
          email: "E-Mail",
          phone: "Telefon",
          vehicleType: "Gesuchter Fahrzeugtyp",
          budget: "Geschätztes Budget",
          message: "Nachricht"
        },
        placeholders: {
          firstName: "Ihr Vorname",
          lastName: "Ihr Nachname",
          email: "ihre@email.com",
          phone: "06 12 34 56 78",
          vehicleTypeSelect: "Typ auswählen",
          budgetSelect: "Budget auswählen",
          message: "Beschreiben Sie uns Ihr Projekt, Ihre spezifischen Bedürfnisse, die Anzahl der zu transportierenden Pferde..."
        },
        vehicleTypes: {
          truck: "Pferdetransporter",
          van: "Pferde-Van",
          trailer: "Pferdeanhänger",
          other: "Andere / Beratung"
        },
        budgetRanges: {
          under30k: "Weniger als 30.000€",
          range30to50k: "30.000€ - 50.000€",
          range50to80k: "50.000€ - 80.000€",
          over80k: "Mehr als 80.000€"
        },
        submitInfo: "Erhalten Sie Ihre persönliche Antwort in weniger als 24h",
        submitSubtitle: "Unverbindlich • Kostenlose Beratung",
        submitButton: "Meine Anfrage senden",
        required: "*"
      }
    },
    quoteRequest: {
      hero: {
        badge: "Kostenloses Angebot",
        title: "Ihr Angebot",
        subtitle: "in weniger als 24h",
        description: "Erhalten Sie ein personalisiertes Angebot für Ihr Pferdetransportfahrzeug. Unser Experte analysiert Ihre Bedürfnisse und bietet Ihnen die perfekte Lösung."
      },
      benefits: {
        free: "100% Kostenlos",
        fast: "24h Antwort",
        noCommitment: "Unverbindlich"
      },
      form: {
        title: "Angebotsanfrage Formular",
        description: "Je mehr Informationen Sie uns geben, desto präziser und angepasster wird Ihr Angebot sein",
        personalInfo: {
          title: "Ihre Informationen",
          firstName: "Vorname",
          firstNamePlaceholder: "Ihr Vorname",
          lastName: "Nachname",
          lastNamePlaceholder: "Ihr Nachname",
          email: "E-Mail",
          emailPlaceholder: "ihre@email.com",
          phone: "Telefon",
          phonePlaceholder: "06 12 34 56 78",
          region: "Region",
          regionPlaceholder: "Ihre Region (zur Optimierung der Lieferung)"
        },
        vehicleInfo: {
          title: "Ihr ideales Fahrzeug",
          type: "Fahrzeugtyp",
          typePlaceholder: "Wählen Sie den Typ",
          typeOptions: {
            truck: "Pferdetransporter",
            van: "Pferde-Van",
            trailer: "Pferdeanhänger",
            unsure: "Ich weiß es noch nicht"
          },
          capacity: "Anzahl der zu transportierenden Pferde",
          capacityPlaceholder: "Auswählen",
          capacityOptions: {
            one: "1 Pferd",
            two: "2 Pferde",
            three: "3 Pferde",
            four: "4 Pferde",
            five: "5 Pferde",
            sixPlus: "6 Pferde und mehr"
          },
          condition: "Gewünschter Zustand",
          conditionPlaceholder: "Neu oder gebraucht?",
          conditionOptions: {
            new: "Nur neu",
            used: "Gebraucht akzeptiert",
            any: "Gleichgültig"
          },
          budget: "Ungefähres Budget",
          budgetPlaceholder: "Ihre Preisspanne",
          budgetOptions: {
            under30k: "Weniger als 30.000€",
            from30to50k: "30.000€ - 50.000€",
            from50to80k: "50.000€ - 80.000€",
            from80to120k: "80.000€ - 120.000€",
            over120k: "Mehr als 120.000€",
            noBudget: "Kein definiertes Budget"
          }
        },
        usage: {
          title: "Nutzung & Ausstattung",
          primary: "Hauptnutzung",
          primaryPlaceholder: "Wie werden Sie das Fahrzeug nutzen?",
          usageOptions: {
            leisure: "Freizeit / Ausritte",
            competition: "Wettkampf",
            professional: "Professionelle Nutzung",
            mixed: "Gemischte Nutzung"
          }
        },
        additional: {
          title: "Zusätzliche Informationen",
          timeline: "Gewünschter Zeitrahmen für den Kauf",
          timelinePlaceholder: "Wann möchten Sie Ihr Fahrzeug erwerben?",
          timelineOptions: {
            immediate: "Sofort",
            oneToThree: "In 1 bis 3 Monaten",
            threeToSix: "In 3 bis 6 Monaten",
            sixToTwelve: "In 6 Monaten bis 1 Jahr",
            overYear: "Mehr als 1 Jahr",
            infoOnly: "Einfache Informationsanfrage"
          },
          message: "Zusätzliche Nachricht",
          messagePlaceholder: "Beschreiben Sie Ihre spezifischen Bedürfnisse, besonderen Einschränkungen, Finanzierungsfragen, etc."
        },
        submit: {
          title: "Los geht's!",
          description: "Durch das Absenden dieses Formulars erhalten Sie Ihr personalisiertes Angebot innerhalb von maximal 24 Stunden. Ein HTG-Experte wird Sie auch kontaktieren, um Ihre Anfrage zu verfeinern.",
          button: "Mein kostenloses Angebot erhalten",
          disclaimer: "* Unverbindlich • Garantierte Antwort innerhalb von 24h • 100% kostenloser Service"
        }
      }
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