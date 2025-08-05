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