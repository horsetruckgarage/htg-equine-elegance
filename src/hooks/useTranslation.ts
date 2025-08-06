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
  occasions: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
    };
    filters: {
      title: string;
      type: string;
      price: string;
      year: string;
      mileage: string;
      fuel: string;
      transmission: string;
      apply: string;
      reset: string;
    };
    listing: {
      noResults: string;
      priceFrom: string;
      year: string;
      mileage: string;
      fuel: string;
      transmission: string;
      viewDetails: string;
      contact: string;
    };
  };
  horseTrucks: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
    };
    features: {
      title: string;
      capacity: {
        title: string;
        description: string;
      };
      comfort: {
        title: string;
        description: string;
      };
      safety: {
        title: string;
        description: string;
      };
      technology: {
        title: string;
        description: string;
      };
    };
    models: {
      title: string;
      subtitle: string;
    };
  };
  horseVans: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
    };
    features: {
      title: string;
      maneuverability: {
        title: string;
        description: string;
      };
      versatility: {
        title: string;
        description: string;
      };
      economy: {
        title: string;
        description: string;
      };
      equipment: {
        title: string;
        description: string;
      };
    };
    models: {
      title: string;
      subtitle: string;
    };
  };
  horseTrailers: {
    hero: {
      title: string;
      subtitle: string;
      description: string;
    };
    features: {
      title: string;
      flexibility: {
        title: string;
        description: string;
      };
      capacity: {
        title: string;
        description: string;
      };
      durability: {
        title: string;
        description: string;
      };
      value: {
        title: string;
        description: string;
      };
    };
    models: {
      title: string;
      subtitle: string;
    };
  };
  quotePage: {
    benefits: {
      response24h: { title: string; description: string };
      free: { title: string; description: string };
      expertise: { title: string; description: string };
      dedicated: { title: string; description: string };
    };
    vehicleTypes: {
      truck: string;
      van: string;
      trailer: string;
    };
    capacities: {
      oneHorse: string;
      twoHorses: string;
      threeHorses: string;
      fourHorses: string;
      fiveHorses: string;
      sixPlusHorses: string;
    };
    priceRanges: {
      truck: string;
      van: string;
      trailer: string;
    };
    vehicleSelection: {
      title: string;
      subtitle: string;
      popular: string;
      capacitiesAvailable: string;
    };
    hero: {
      badge: string;
      title1: string;
      title2: string;
      description: string;
    };
    form: {
      title: string;
      subtitle: string;
      personalInfo: string;
      vehicleRequirements: string;
      usageFeatures: string;
      additionalInfo: string;
      fields: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        region: string;
        vehicleType: string;
        horsesNumber: string;
        condition: string;
        budget: string;
        usage: string;
        timeline: string;
        equipment: string;
        message: string;
        vehicleTypeSelect: string;
        horsesNumberSelect: string;
        conditionSelect: string;
        budgetSelect: string;
        usageSelect: string;
        timelineSelect: string;
      };
      options: {
        vehicleTypes: {
          truck: string;
          van: string;
          trailer: string;
          unsure: string;
        };
        horsesNumber: {
          one: string;
          two: string;
          three: string;
          four: string;
          five: string;
          sixPlus: string;
        };
        condition: {
          new: string;
          used: string;
          indifferent: string;
        };
        budget: {
          under30k: string;
          range30to50k: string;
          range50to80k: string;
          range80to120k: string;
          over120k: string;
          noBudget: string;
        };
        usage: {
          leisure: string;
          competition: string;
          professional: string;
          mixed: string;
        };
        timeline: {
          immediate: string;
          oneToThreeMonths: string;
          threeToSixMonths: string;
          sixToTwelveMonths: string;
          overOneYear: string;
          information: string;
        };
      };
      equipment: string[];
      submitSection: {
        title: string;
        description: string;
        button: string;
        disclaimer: string;
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
    aboutPage: {
      hero: {
        title: "À Propos de HTG France",
        subtitle: "Votre partenaire de confiance depuis 1990",
        description: "Découvrez l'histoire et les valeurs qui font de HTG France le leader français du transport équin."
      },
      story: {
        title: "Notre Histoire",
        description: "Fondée en 1990 par des passionnés d'équitation, HTG France s'est imposée comme la référence française en matière de transport équin. Notre expertise, acquise au fil de plus de trois décennies, nous permet aujourd'hui de proposer les meilleures solutions de transport pour vos chevaux."
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
          description: "Notre passion pour l'équitation guide chacune de nos actions et nous permet de comprendre parfaitement vos besoins."
        },
        excellence: {
          title: "Excellence",
          description: "Nous sélectionnons uniquement les meilleures marques et équipements pour garantir qualité et durabilité."
        },
        support: {
          title: "Accompagnement",
          description: "Chaque client bénéficie d'un suivi personnalisé, de la conception à la livraison de son véhicule."
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
    occasions: {
      hero: {
        title: "Véhicules d'Occasion",
        subtitle: "Qualité garantie, prix maîtrisés",
        description: "Découvrez notre sélection de véhicules d'occasion soigneusement choisis et révisés par nos experts."
      },
      filters: {
        title: "Filtres",
        type: "Type",
        price: "Prix",
        year: "Année",
        mileage: "Kilométrage",
        fuel: "Carburant",
        transmission: "Transmission",
        apply: "Appliquer",
        reset: "Réinitialiser"
      },
      listing: {
        noResults: "Aucun véhicule trouvé",
        priceFrom: "À partir de",
        year: "Année",
        mileage: "Kilométrage",
        fuel: "Carburant",
        transmission: "Transmission",
        viewDetails: "Voir les détails",
        contact: "Contacter"
      }
    },
    horseTrucks: {
      hero: {
        title: "Camions Chevaux",
        subtitle: "Confort et sécurité pour vos chevaux",
        description: "Découvrez notre gamme de camions chevaux, conçus pour offrir le meilleur confort à vos équidés lors de tous vos déplacements."
      },
      features: {
        title: "Caractéristiques",
        capacity: {
          title: "Capacité",
          description: "Transport de 2 à 12 chevaux selon le modèle"
        },
        comfort: {
          title: "Confort",
          description: "Suspension pneumatique et climatisation pour le bien-être animal"
        },
        safety: {
          title: "Sécurité",
          description: "Équipements de sécurité dernière génération"
        },
        technology: {
          title: "Technologie",
          description: "Tableaux de bord modernes et systèmes d'assistance"
        }
      },
      models: {
        title: "Nos Modèles",
        subtitle: "Trouvez le camion parfait pour vos besoins"
      }
    },
    horseVans: {
      hero: {
        title: "Vans Chevaux",
        subtitle: "Polyvalence et maniabilité",
        description: "Nos vans chevaux allient praticité et élégance pour vos déplacements quotidiens et vos compétitions."
      },
      features: {
        title: "Avantages",
        maneuverability: {
          title: "Maniabilité",
          description: "Faciles à conduire et à stationner"
        },
        versatility: {
          title: "Polyvalence",
          description: "Parfaits pour 1 à 3 chevaux"
        },
        economy: {
          title: "Économie",
          description: "Consommation maîtrisée et entretien simplifié"
        },
        equipment: {
          title: "Équipement",
          description: "Options et accessoires adaptés à vos besoins"
        }
      },
      models: {
        title: "Notre Gamme",
        subtitle: "Des solutions adaptées à chaque usage"
      }
    },
    horseTrailers: {
      hero: {
        title: "Remorques Chevaux",
        subtitle: "La solution économique et flexible",
        description: "Nos remorques chevaux offrent un excellent rapport qualité-prix pour tous vos besoins de transport équin."
      },
      features: {
        title: "Points Forts",
        flexibility: {
          title: "Flexibilité",
          description: "Utilisables avec différents véhicules tracteurs"
        },
        capacity: {
          title: "Capacité",
          description: "Modèles de 1 à 6 places selon vos besoins"
        },
        durability: {
          title: "Durabilité",
          description: "Construction robuste pour une longue durée de vie"
        },
        value: {
          title: "Rapport Qualité-Prix",
          description: "Solution économique sans compromis sur la qualité"
        }
      },
      models: {
        title: "Nos Remorques",
        subtitle: "Choisissez la configuration idéale"
      }
    },
    quotePage: {
      benefits: {
        response24h: {
          title: "Réponse sous 24h",
          description: "Notre équipe vous recontacte rapidement avec une proposition personnalisée"
        },
        free: {
          title: "100% Gratuit",
          description: "Aucun engagement, devis gratuit et sans surprise"
        },
        expertise: {
          title: "Expertise Reconnue",
          description: "Plus de 30 ans d'expérience dans le transport équin"
        },
        dedicated: {
          title: "Conseiller Dédié",
          description: "Un expert HTG vous accompagne dans votre projet"
        }
      },
      vehicleTypes: {
        truck: "Camion Chevaux",
        van: "Van Chevaux",
        trailer: "Remorque Chevaux"
      },
      capacities: {
        oneHorse: "1 cheval",
        twoHorses: "2 chevaux",
        threeHorses: "3 chevaux",
        fourHorses: "4 chevaux",
        fiveHorses: "5 chevaux",
        sixPlusHorses: "6 chevaux et plus"
      },
      priceRanges: {
        truck: "45 000€ - 150 000€",
        van: "25 000€ - 80 000€",
        trailer: "15 000€ - 50 000€"
      },
      vehicleSelection: {
        title: "Sélection de Véhicules",
        subtitle: "Choisissez le type de véhicule qui vous intéresse",
        popular: "Populaire",
        capacitiesAvailable: "Capacités disponibles"
      },
      hero: {
        badge: "Devis Gratuit",
        title1: "Obtenez Votre Devis",
        title2: "Personnalisé en 2 Minutes",
        description: "Remplissez ce formulaire pour recevoir une offre sur mesure adaptée à vos besoins spécifiques. Notre équipe d'experts vous recontactera sous 24h."
      },
      form: {
        title: "Demande de Devis Personnalisé",
        subtitle: "Obtenez une offre sur mesure en quelques minutes",
        personalInfo: "Informations Personnelles",
        vehicleRequirements: "Besoins Véhicule",
        usageFeatures: "Usage & Caractéristiques",
        additionalInfo: "Informations Complémentaires",
        fields: {
          firstName: "Prénom",
          lastName: "Nom",
          email: "Email",
          phone: "Téléphone",
          region: "Région",
          vehicleType: "Type de véhicule",
          horsesNumber: "Nombre de chevaux",
          condition: "État du véhicule",
          budget: "Budget",
          usage: "Type d'usage",
          timeline: "Délai souhaité",
          equipment: "Équipements souhaités",
          message: "Message complémentaire",
          vehicleTypeSelect: "Sélectionnez le type de véhicule",
          horsesNumberSelect: "Combien de chevaux transportez-vous ?",
          conditionSelect: "Préférence d'état",
          budgetSelect: "Votre budget",
          usageSelect: "Type d'utilisation principal",
          timelineSelect: "Dans quel délai ?"
        },
        options: {
          vehicleTypes: {
            truck: "Camion Chevaux",
            van: "Van Chevaux",
            trailer: "Remorque Chevaux",
            unsure: "Je ne sais pas encore"
          },
          horsesNumber: {
            one: "1 cheval",
            two: "2 chevaux",
            three: "3 chevaux",
            four: "4 chevaux",
            five: "5 chevaux",
            sixPlus: "6 chevaux et plus"
          },
          condition: {
            new: "Neuf uniquement",
            used: "Occasion acceptée",
            indifferent: "Indifférent"
          },
          budget: {
            under30k: "Moins de 30 000€",
            range30to50k: "30 000€ - 50 000€",
            range50to80k: "50 000€ - 80 000€",
            range80to120k: "80 000€ - 120 000€",
            over120k: "Plus de 120 000€",
            noBudget: "Pas de budget défini"
          },
          usage: {
            leisure: "Loisir / Balades",
            competition: "Compétition",
            professional: "Usage professionnel",
            mixed: "Usage mixte"
          },
          timeline: {
            immediate: "Immédiatement",
            oneToThreeMonths: "Dans 1 à 3 mois",
            threeToSixMonths: "Dans 3 à 6 mois",
            sixToTwelveMonths: "Dans 6 mois à 1 an",
            overOneYear: "Plus d'1 an",
            information: "Simple demande d'information"
          }
        },
        equipment: [
          "Suspension pneumatique",
          "Climatisation",
          "Caméra de recul",
          "Boîte automatique",
          "Cabine couchette",
          "Éclairage LED",
          "Plancher caoutchouc",
          "Ventilation chevaux",
          "Kit mains libres"
        ],
        submitSection: {
          title: "🎉 C'est Parti !",
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
        description: "The economical solution for all types of equine transport, with a wide variety of configurations available."
      },
      cta: "Discover Our Vehicles"
    },
    categories: {
      title: "Our Vehicle Range",
      subtitle: "Find the perfect vehicle for your equine transport needs",
      horseTrucks: {
        title: "Horse Trucks",
        description: "For transporting 2 to 12 horses with optimal comfort",
        features: ["Sleeper cabin", "Air suspension", "Climate controlled"],
        startingPrice: "From €45,000",
        from: "From",
        explore: "Explore"
      },
      horseVans: {
        title: "Horse Vans",
        description: "Versatile and maneuverable for 1 to 3 horses",
        features: ["Easy to drive", "Economical", "Easy parking"],
        startingPrice: "From €25,000",
        from: "From",
        explore: "Explore"
      },
      horseTrailers: {
        title: "Horse Trailers",
        description: "The economical and flexible solution",
        features: ["Wide choice of sizes", "Excellent value for money", "Easy maintenance"],
        startingPrice: "From €15,000",
        from: "From",
        explore: "Explore"
      },
      cta: "See More Details",
      specialties: "Our Specialties",
      disciplineDescription: "Whether you practice dressage, show jumping, or leisure riding",
      ctaTitle: "Ready to Find Your Ideal Vehicle?",
      ctaDescription: "Benefit from our expertise to choose the perfect vehicle for your needs.",
      getFreeQuote: "Free Quote",
      makeAppointment: "Book Appointment"
    },
    offers: {
      title: "Our Offers & Services",
      subtitle: "Complete solutions for all your needs",
      newVehicles: {
        title: "New Vehicles",
        description: "Latest models with manufacturer warranty",
        benefits: ["Extended warranty", "Easy financing", "Custom configuration"]
      },
      usedVehicles: {
        title: "Used Vehicles",
        description: "Selected and serviced vehicles",
        benefits: ["Attractive prices", "Quality control", "Warranty included"]
      },
      accessories: {
        title: "Accessories & Equipment",
        description: "Everything to equip your vehicle",
        benefits: ["Wide range", "Professional installation", "Expert advice"]
      },
      cta: "Request a Quote"
    },
    trust: {
      title: "Why Choose Us?",
      subtitle: "Over 30 years of expertise in equine transport",
      features: {
        expertise: {
          title: "Recognized Expertise",
          description: "Over 30 years of experience in equine transport allows us to advise you best."
        },
        quality: {
          title: "Premium Quality",
          description: "We select only the best brands to guarantee durability and reliability."
        },
        service: {
          title: "Personalized Service",
          description: "Each customer benefits from tailor-made support from purchase to delivery."
        },
        warranty: {
          title: "Extended Warranty",
          description: "All our vehicles are covered by a comprehensive warranty for your peace of mind."
        }
      }
    },
    contact: {
      title: "Contact Us",
      subtitle: "Our team of experts is at your disposal",
      info: {
        phone: "+33 1 23 45 67 89",
        email: "contact@htg-france.com",
        address: "123 Route des Chevaux, 75000 Paris",
        hours: "Mon-Fri: 8am-6pm, Sat: 9am-5pm"
      },
      form: {
        title: "Send us a Message",
        subtitle: "We will respond to you as soon as possible",
        fields: {
          firstName: "First Name",
          lastName: "Last Name",
          email: "Email",
          phone: "Phone",
          subject: "Subject",
          message: "Message"
        },
        placeholders: {
          firstName: "Your first name",
          lastName: "Your last name",
          email: "your@email.com",
          phone: "06 12 34 56 78",
          subject: "Subject of your message",
          message: "Describe your request..."
        },
        submit: "Send Message",
        required: "Required fields"
      }
    },
    footer: {
      company: {
        title: "HTG France",
        description: "Specialist in equine transport for over 30 years. We offer a complete range of vehicles for all your needs."
      },
      quickLinks: {
        title: "Quick Links",
        home: "Home",
        about: "About",
        contact: "Contact",
        occasions: "Used Vehicles"
      },
      products: {
        title: "Our Products",
        horseTrucks: "Horse Trucks",
        horseVans: "Horse Vans",
        horseTrailers: "Horse Trailers",
        accessories: "Accessories"
      },
      contact: {
        title: "Contact",
        phone: "+33 1 23 45 67 89",
        email: "contact@htg-france.com",
        address: "123 Route des Chevaux, 75000 Paris"
      },
      copyright: "© 2024 HTG France. All rights reserved."
    },
    about: {
      hero: {
        title: "Our Story",
        subtitle: "Over 30 years of expertise",
        description: "Since our creation, we have been passionate about equine transport and strive to offer the best solutions to our customers."
      },
      story: {
        title: "Our Story",
        description: "Founded in 1990, HTG France was born from the passion of its founders for riding and their desire to offer quality transport solutions for horses."
      },
      values: {
        title: "Our Values",
        expertise: {
          title: "Expertise",
          description: "Over 30 years of experience in the sector"
        },
        quality: {
          title: "Quality",
          description: "Rigorous selection of the best equipment"
        },
        service: {
          title: "Service",
          description: "Personalized support for each customer"
        }
      },
      team: {
        title: "Our Team",
        description: "A team of passionate professionals at your service to support you in all your equine transport projects."
      }
    },
    common: {
      learnMore: "Learn More",
      getQuote: "Get Quote",
      contact: "Contact",
      phone: "Phone",
      email: "Email",
      address: "Address",
      readMore: "Read More",
      previous: "Previous",
      next: "Next",
      close: "Close",
      open: "Open",
      menu: "Menu",
      loading: "Loading...",
      error: "Error",
      success: "Success",
      required: "Required",
      optional: "Optional",
      submit: "Submit",
      cancel: "Cancel",
      save: "Save",
      delete: "Delete",
      edit: "Edit",
      add: "Add",
      search: "Search",
      filter: "Filter",
      sort: "Sort",
      all: "All",
      none: "None",
      select: "Select",
      clear: "Clear",
      apply: "Apply",
      reset: "Reset",
      confirm: "Confirm",
      yes: "Yes",
      no: "No",
      ok: "OK",
      horsesCapacity: "horses",
      bestseller: "Bestseller",
      onlyXDaysLeft: "Only a few days left",
      favorite: "Favorite",
      newArrival: "New Arrival",
      promotion: "Promotion",
      premiumSelection: "Premium Selection",
      ourBest: "Our Best",
      offersVehicles: "Offers & Vehicles",
      discoverSelection: "Discover our selection of exceptional vehicles",
      limitedOffer: "Limited offer",
      expertiseGuaranteed: "Guaranteed expertise",
      featuredVehicles: "Featured vehicles",
      moreEquipment: "more equipment",
      savings: "Savings",
      promotionalPrice: "Promotional price",
      financingAvailable: "Financing available",
      viewDetails: "View details",
      discoverCharacteristics: "Discover characteristics",
      addToMySelection: "Add to my selection",
      viewAll: "View all",
      vehicles: "vehicles",
      km: "km",
      upTo15Off: "Up to -15%",
      from: "From",
      mostRequested: "Most requested",
      specialOffers: "Special offers",
      newArrivals2024: "New arrivals 2024",
      bestPrice: "Best price",
      models: "models",
      disciplineDescription: "Whether you practice dressage, show jumping, or leisure riding",
      explore: "Explore",
      discoverCollection: "Discover Collection",
      receiveOffer24h: "Receive an offer within 24h",
      personalizedExchange: "Personalized exchange with an expert",
      getFreeQuote: "Free Quote",
      makeAppointment: "Book Appointment",
      experience: "years of experience"
    },
    features: {
      pneumaticSuspension: "Pneumatic suspension",
      airConditioning: "Air conditioning",
      sleepingCabin: "Sleeping cabin",
      automaticTransmission: "Automatic transmission",
      nonSlipFlooring: "Non-slip flooring",
      ledLighting: "LED lighting",
      ventilation: "Ventilation",
      handsFreeeKit: "Hands-free kit",
      aluminum: "Aluminum",
      alkoSuspension: "ALKO suspension",
      rubberFlooring: "Rubber flooring"
    },
    aboutPage: {
      hero: {
        title: "About HTG France",
        subtitle: "Your trusted partner since 1990",
        description: "Discover the history and values that make HTG France the French leader in equine transport."
      },
      story: {
        title: "Our Story",
        description: "Founded in 1990 by equestrian enthusiasts, HTG France has established itself as the French reference in equine transport. Our expertise, acquired over more than three decades, now allows us to offer the best transport solutions for your horses."
      },
      values: {
        title: "Our Values & Expertise",
        stats: {
          experience: "30+ years of experience",
          vehicles: "5000+ vehicles sold",
          satisfaction: "98% customer satisfaction",
          warranty: "Warranty up to 5 years"
        },
        passion: {
          title: "Passion",
          description: "Our passion for equestrian sports guides each of our actions and allows us to perfectly understand your needs."
        },
        excellence: {
          title: "Excellence",
          description: "We select only the best brands and equipment to guarantee quality and durability."
        },
        support: {
          title: "Support",
          description: "Each customer benefits from personalized follow-up, from design to delivery of their vehicle."
        }
      },
      team: {
        title: "Our Team",
        description: "A team of passionate professionals, combining technical expertise and knowledge of the equestrian world.",
        director: {
          name: "Jean-Pierre Martin",
          role: "General Manager",
          description: "A rider for more than 40 years, Jean-Pierre founded HTG France with the vision of revolutionizing equine transport in France."
        }
      }
    },
    occasions: {
      hero: {
        title: "Used Vehicles",
        subtitle: "Guaranteed quality, controlled prices",
        description: "Discover our selection of used vehicles carefully chosen and serviced by our experts."
      },
      filters: {
        title: "Filters",
        type: "Type",
        price: "Price",
        year: "Year",
        mileage: "Mileage",
        fuel: "Fuel",
        transmission: "Transmission",
        apply: "Apply",
        reset: "Reset"
      },
      listing: {
        noResults: "No vehicles found",
        priceFrom: "From",
        year: "Year",
        mileage: "Mileage",
        fuel: "Fuel",
        transmission: "Transmission",
        viewDetails: "View details",
        contact: "Contact"
      }
    },
    horseTrucks: {
      hero: {
        title: "Horse Trucks",
        subtitle: "Comfort and safety for your horses",
        description: "Discover our range of horse trucks, designed to offer the best comfort to your horses during all your travels."
      },
      features: {
        title: "Features",
        capacity: {
          title: "Capacity",
          description: "Transport from 2 to 12 horses depending on the model"
        },
        comfort: {
          title: "Comfort",
          description: "Pneumatic suspension and air conditioning for animal welfare"
        },
        safety: {
          title: "Safety",
          description: "Latest generation safety equipment"
        },
        technology: {
          title: "Technology",
          description: "Modern dashboards and assistance systems"
        }
      },
      models: {
        title: "Our Models",
        subtitle: "Find the perfect truck for your needs"
      }
    },
    horseVans: {
      hero: {
        title: "Horse Vans",
        subtitle: "Versatility and maneuverability",
        description: "Our horse vans combine practicality and elegance for your daily travels and competitions."
      },
      features: {
        title: "Advantages",
        maneuverability: {
          title: "Maneuverability",
          description: "Easy to drive and park"
        },
        versatility: {
          title: "Versatility",
          description: "Perfect for 1 to 3 horses"
        },
        economy: {
          title: "Economy",
          description: "Controlled consumption and simplified maintenance"
        },
        equipment: {
          title: "Equipment",
          description: "Options and accessories adapted to your needs"
        }
      },
      models: {
        title: "Our Range",
        subtitle: "Solutions adapted to each use"
      }
    },
    horseTrailers: {
      hero: {
        title: "Horse Trailers",
        subtitle: "The economical and flexible solution",
        description: "Our horse trailers offer excellent value for money for all your equine transport needs."
      },
      features: {
        title: "Strengths",
        flexibility: {
          title: "Flexibility",
          description: "Usable with different towing vehicles"
        },
        capacity: {
          title: "Capacity",
          description: "Models from 1 to 6 places according to your needs"
        },
        durability: {
          title: "Durability",
          description: "Robust construction for a long lifespan"
        },
        value: {
          title: "Value for Money",
          description: "Economical solution without compromising on quality"
        }
      },
      models: {
        title: "Our Trailers",
        subtitle: "Choose the ideal configuration"
      }
    },
    quotePage: {
      benefits: {
        response24h: {
          title: "Response within 24h",
          description: "Our team contacts you quickly with a personalized proposal"
        },
        free: {
          title: "100% Free",
          description: "No commitment, free quote without surprises"
        },
        expertise: {
          title: "Recognized Expertise",
          description: "Over 30 years of experience in equine transport"
        },
        dedicated: {
          title: "Dedicated Advisor",
          description: "An HTG expert accompanies you in your project"
        }
      },
      vehicleTypes: {
        truck: "Horse Truck",
        van: "Horse Van",
        trailer: "Horse Trailer"
      },
      capacities: {
        oneHorse: "1 horse",
        twoHorses: "2 horses",
        threeHorses: "3 horses",
        fourHorses: "4 horses",
        fiveHorses: "5 horses",
        sixPlusHorses: "6 horses and more"
      },
      priceRanges: {
        truck: "€45,000 - €150,000",
        van: "€25,000 - €80,000",
        trailer: "€15,000 - €50,000"
      },
      vehicleSelection: {
        title: "Vehicle Selection",
        subtitle: "Choose the type of vehicle that interests you",
        popular: "Popular",
        capacitiesAvailable: "Available capacities"
      },
      hero: {
        badge: "Free Quote",
        title1: "Get Your",
        title2: "Personalized Quote in 2 Minutes",
        description: "Fill out this form to receive a tailor-made offer adapted to your specific needs. Our team of experts will contact you within 24h."
      },
      form: {
        title: "Personalized Quote Request",
        subtitle: "Get a tailor-made offer in a few minutes",
        personalInfo: "Personal Information",
        vehicleRequirements: "Vehicle Requirements",
        usageFeatures: "Usage & Features",
        additionalInfo: "Additional Information",
        fields: {
          firstName: "First Name",
          lastName: "Last Name",
          email: "Email",
          phone: "Phone",
          region: "Region",
          vehicleType: "Vehicle type",
          horsesNumber: "Number of horses",
          condition: "Vehicle condition",
          budget: "Budget",
          usage: "Type of usage",
          timeline: "Desired timeline",
          equipment: "Desired equipment",
          message: "Additional message",
          vehicleTypeSelect: "Select vehicle type",
          horsesNumberSelect: "How many horses do you transport?",
          conditionSelect: "Condition preference",
          budgetSelect: "Your budget",
          usageSelect: "Main type of use",
          timelineSelect: "Within what timeframe?"
        },
        options: {
          vehicleTypes: {
            truck: "Horse Truck",
            van: "Horse Van",
            trailer: "Horse Trailer",
            unsure: "I don't know yet"
          },
          horsesNumber: {
            one: "1 horse",
            two: "2 horses",
            three: "3 horses",
            four: "4 horses",
            five: "5 horses",
            sixPlus: "6 horses and more"
          },
          condition: {
            new: "New only",
            used: "Used accepted",
            indifferent: "Indifferent"
          },
          budget: {
            under30k: "Less than €30,000",
            range30to50k: "€30,000 - €50,000",
            range50to80k: "€50,000 - €80,000",
            range80to120k: "€80,000 - €120,000",
            over120k: "More than €120,000",
            noBudget: "No defined budget"
          },
          usage: {
            leisure: "Leisure / Rides",
            competition: "Competition",
            professional: "Professional use",
            mixed: "Mixed use"
          },
          timeline: {
            immediate: "Immediately",
            oneToThreeMonths: "In 1 to 3 months",
            threeToSixMonths: "In 3 to 6 months",
            sixToTwelveMonths: "In 6 months to 1 year",
            overOneYear: "More than 1 year",
            information: "Simple information request"
          }
        },
        equipment: [
          "Pneumatic suspension",
          "Air conditioning",
          "Rear camera",
          "Automatic transmission",
          "Sleeping cabin",
          "LED lighting",
          "Rubber flooring",
          "Horse ventilation",
          "Hands-free kit"
        ],
        submitSection: {
          title: "🎉 Let's Go!",
          description: "By submitting this form, you will receive your personalized quote within 24h maximum. An HTG expert will also contact you to refine your request.",
          button: "Get My Free Quote",
          disclaimer: "* No commitment • Response guaranteed within 24h • 100% free service"
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
        description: "La solución económica para todo tipo de transporte equino, con una gran variedad de configuraciones disponibles."
      },
      cta: "Descubrir Nuestros Vehículos"
    },
    categories: {
      title: "Nuestra Gama de Vehículos",
      subtitle: "Encuentre el vehículo perfecto para sus necesidades de transporte equino",
      horseTrucks: {
        title: "Camiones para Caballos",
        description: "Para el transporte de 2 a 12 caballos con comodidad óptima",
        features: ["Cabina cama", "Suspensión neumática", "Clima controlado"],
        startingPrice: "Desde €45.000",
        from: "Desde",
        explore: "Explorar"
      },
      horseVans: {
        title: "Furgonetas para Caballos",
        description: "Versátiles y maniobrables para 1 a 3 caballos",
        features: ["Fácil de conducir", "Económico", "Estacionamiento fácil"],
        startingPrice: "Desde €25.000",
        from: "Desde",
        explore: "Explorar"
      },
      horseTrailers: {
        title: "Remolques para Caballos",
        description: "La solución económica y flexible",
        features: ["Gran variedad de tamaños", "Excelente relación calidad-precio", "Fácil mantenimiento"],
        startingPrice: "Desde €15.000",
        from: "Desde",
        explore: "Explorar"
      },
      cta: "Ver Más Detalles",
      specialties: "Nuestras Especialidades",
      disciplineDescription: "Ya sea que practique doma, salto o equitación de ocio",
      ctaTitle: "¿Listo para Encontrar Su Vehículo Ideal?",
      ctaDescription: "Aproveche nuestra experiencia para elegir el vehículo perfecto para sus necesidades.",
      getFreeQuote: "Presupuesto Gratuito",
      makeAppointment: "Agendar Cita"
    },
    offers: {
      title: "Nuestras Ofertas y Servicios",
      subtitle: "Soluciones completas para todas sus necesidades",
      newVehicles: {
        title: "Vehículos Nuevos",
        description: "Últimos modelos con garantía del fabricante",
        benefits: ["Garantía extendida", "Financiación fácil", "Configuración personalizada"]
      },
      usedVehicles: {
        title: "Vehículos de Ocasión",
        description: "Vehículos seleccionados y revisados",
        benefits: ["Precios atractivos", "Control de calidad", "Garantía incluida"]
      },
      accessories: {
        title: "Accesorios y Equipamiento",
        description: "Todo para equipar su vehículo",
        benefits: ["Amplia gama", "Instalación profesional", "Consejos de expertos"]
      },
      cta: "Solicitar Presupuesto"
    },
    trust: {
      title: "¿Por Qué Elegirnos?",
      subtitle: "Más de 30 años de experiencia en transporte equino",
      features: {
        expertise: {
          title: "Experiencia Reconocida",
          description: "Más de 30 años de experiencia en transporte equino nos permiten asesorarle mejor."
        },
        quality: {
          title: "Calidad Premium",
          description: "Seleccionamos solo las mejores marcas para garantizar durabilidad y fiabilidad."
        },
        service: {
          title: "Servicio Personalizado",
          description: "Cada cliente se beneficia de un acompañamiento a medida desde la compra hasta la entrega."
        },
        warranty: {
          title: "Garantía Extendida",
          description: "Todos nuestros vehículos están cubiertos por una garantía completa para su tranquilidad."
        }
      }
    },
    contact: {
      title: "Contáctenos",
      subtitle: "Nuestro equipo de expertos está a su disposición",
      info: {
        phone: "+33 1 23 45 67 89",
        email: "contact@htg-france.com",
        address: "123 Route des Chevaux, 75000 París",
        hours: "Lun-Vie: 8h-18h, Sáb: 9h-17h"
      },
      form: {
        title: "Envíenos un Mensaje",
        subtitle: "Le responderemos lo antes posible",
        fields: {
          firstName: "Nombre",
          lastName: "Apellido",
          email: "Email",
          phone: "Teléfono",
          subject: "Asunto",
          message: "Mensaje"
        },
        placeholders: {
          firstName: "Su nombre",
          lastName: "Su apellido",
          email: "su@email.com",
          phone: "06 12 34 56 78",
          subject: "Asunto de su mensaje",
          message: "Describa su solicitud..."
        },
        submit: "Enviar Mensaje",
        required: "Campos obligatorios"
      }
    },
    footer: {
      company: {
        title: "HTG France",
        description: "Especialista en transporte equino desde hace más de 30 años. Ofrecemos una gama completa de vehículos para todas sus necesidades."
      },
      quickLinks: {
        title: "Enlaces Rápidos",
        home: "Inicio",
        about: "Acerca de",
        contact: "Contacto",
        occasions: "Ocasiones"
      },
      products: {
        title: "Nuestros Productos",
        horseTrucks: "Camiones para Caballos",
        horseVans: "Furgonetas para Caballos",
        horseTrailers: "Remolques para Caballos",
        accessories: "Accesorios"
      },
      contact: {
        title: "Contacto",
        phone: "+33 1 23 45 67 89",
        email: "contact@htg-france.com",
        address: "123 Route des Chevaux, 75000 París"
      },
      copyright: "© 2024 HTG France. Todos los derechos reservados."
    },
    about: {
      hero: {
        title: "Acerca de HTG France",
        subtitle: "Su Socio de Confianza",
        description: "Durante más de 30 años, HTG France ha acompañado a profesionales y entusiastas del mundo ecuestre con soluciones de transporte adaptadas a todas las necesidades."
      },
      story: {
        title: "Nuestra Historia",
        description: "Fundada en 1990, HTG France nació de la pasión por la equitación y la experiencia técnica. Hemos evolucionado con las necesidades del mercado manteniendo nuestros valores originales: calidad, proximidad y servicio."
      },
      values: {
        title: "Nuestros Valores",
        expertise: {
          title: "Experiencia",
          description: "Más de 30 años de experiencia en transporte equino"
        },
        quality: {
          title: "Calidad",
          description: "Selección rigurosa de las mejores marcas y equipos"
        },
        service: {
          title: "Servicio",
          description: "Acompañamiento personalizado desde la compra hasta el postventa"
        }
      },
      team: {
        title: "Nuestro Equipo",
        description: "Un equipo apasionado de profesionales a su servicio para asesorarle y acompañarle en su proyecto."
      }
    },
    common: {
      learnMore: "Saber Más",
      getQuote: "Solicitar Presupuesto",
      contact: "Contáctenos",
      phone: "Teléfono",
      email: "Email",
      address: "Dirección",
      readMore: "Leer Más",
      previous: "Anterior",
      next: "Siguiente",
      close: "Cerrar",
      open: "Abrir",
      menu: "Menú",
      loading: "Cargando...",
      error: "Error",
      success: "Éxito",
      required: "Obligatorio",
      optional: "Opcional",
      submit: "Enviar",
      cancel: "Cancelar",
      save: "Guardar",
      delete: "Eliminar",
      edit: "Editar",
      add: "Añadir",
      search: "Buscar",
      filter: "Filtrar",
      sort: "Ordenar",
      all: "Todo",
      none: "Ninguno",
      select: "Seleccionar",
      clear: "Limpiar",
      apply: "Aplicar",
      reset: "Reiniciar",
      confirm: "Confirmar",
      yes: "Sí",
      no: "No",
      ok: "OK"
    },
    occasions: {
      hero: {
        title: "Vehículos de Ocasión",
        subtitle: "Encuentre Su Vehículo Ideal",
        description: "Descubra nuestra selección de vehículos de ocasión revisados y garantizados para transportar sus caballos con confianza."
      },
      filters: {
        title: "Filtros",
        type: "Tipo de vehículo",
        price: "Precio",
        year: "Año",
        mileage: "Kilometraje",
        fuel: "Combustible",
        transmission: "Transmisión",
        apply: "Aplicar",
        reset: "Reiniciar"
      },
      listing: {
        noResults: "Ningún vehículo coincide con sus criterios",
        priceFrom: "Desde",
        year: "Año",
        mileage: "Kilometraje",
        fuel: "Combustible",
        transmission: "Transmisión",
        viewDetails: "Ver detalles",
        contact: "Contáctenos"
      }
    },
    horseTrucks: {
      hero: {
        title: "Camiones para Caballos",
        subtitle: "Transporte Profesional",
        description: "Nuestros camiones para caballos ofrecen lo último en comodidad y seguridad para el transporte de sus caballos, con capacidades de 2 a 12 caballos."
      },
      features: {
        title: "Características Premium",
        capacity: {
          title: "Gran Capacidad",
          description: "Transporte de 2 a 12 caballos según el modelo elegido"
        },
        comfort: {
          title: "Comodidad Óptima",
          description: "Cabina cama y espacios de vida integrados"
        },
        safety: {
          title: "Seguridad Máxima",
          description: "Equipos de seguridad de última generación"
        },
        technology: {
          title: "Tecnologías Avanzadas",
          description: "Suspensión neumática y control climático"
        }
      },
      models: {
        title: "Nuestros Modelos",
        subtitle: "Una gama adaptada a todas sus necesidades"
      }
    },
    horseVans: {
      hero: {
        title: "Furgonetas para Caballos",
        subtitle: "Versatilidad y Maniobrabilidad",
        description: "Nuestras furgonetas para caballos combinan facilidad de conducción y funcionalidad para el transporte de 1 a 3 caballos con simplicidad."
      },
      features: {
        title: "Ventajas Únicas",
        maneuverability: {
          title: "Maniobrabilidad",
          description: "Facilidad de conducción comparable a un vehículo utilitario"
        },
        versatility: {
          title: "Versatilidad",
          description: "Ideal para salidas diarias y competiciones"
        },
        economy: {
          title: "Economía",
          description: "Consumo reducido y costos de mantenimiento controlados"
        },
        equipment: {
          title: "Equipamiento",
          description: "Todo el equipamiento necesario incluido"
        }
      },
      models: {
        title: "Nuestros Modelos",
        subtitle: "De 1 a 3 caballos, encuentre su solución"
      }
    },
    horseTrailers: {
      hero: {
        title: "Remolques para Caballos",
        subtitle: "Flexibilidad y Economía",
        description: "Nuestros remolques para caballos ofrecen una solución económica y flexible para todo tipo de transporte equino."
      },
      features: {
        title: "Puntos Fuertes",
        flexibility: {
          title: "Flexibilidad",
          description: "Utilizable con diferentes vehículos tractores"
        },
        capacity: {
          title: "Capacidad Modular",
          description: "De 1 a 6 caballos según sus necesidades"
        },
        durability: {
          title: "Robustez",
          description: "Solida construcción para una larga vida útil"
        },
        value: {
          title: "Relación Calidad-Precio",
          description: "La solución más económica del mercado"
        }
      },
      models: {
        title: "Nuestros Modelos",
        subtitle: "Del remolque simple al remolque de lujo"
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
        description: "Die wirtschaftliche Lösung für alle Arten von Pferdetransport, mit einer großen Vielfalt verfügbarer Konfigurationen."
      },
      cta: "Unsere Fahrzeuge Entdecken"
    },
    categories: {
      title: "Unsere Fahrzeugpalette",
      subtitle: "Finden Sie das perfekte Fahrzeug für Ihre Pferdetransport-Bedürfnisse",
      horseTrucks: {
        title: "Pferdetransporter",
        description: "Für den Transport von 2 bis 12 Pferden mit optimalem Komfort",
        features: ["Schlafkabine", "Luftfederung", "Klimakontrolle"],
        startingPrice: "Ab €45.000",
        from: "Ab",
        explore: "Entdecken"
      },
      horseVans: {
        title: "Pferde-Vans",
        description: "Vielseitig und wendig für 1 bis 3 Pferde",
        features: ["Einfach zu fahren", "Wirtschaftlich", "Einfaches Parken"],
        startingPrice: "Ab €25.000",
        from: "Ab",
        explore: "Entdecken"
      },
      horseTrailers: {
        title: "Pferdeanhänger",
        description: "Die wirtschaftliche und flexible Lösung",
        features: ["Große Auswahl an Größen", "Ausgezeichnetes Preis-Leistungs-Verhältnis", "Einfache Wartung"],
        startingPrice: "Ab €15.000",
        from: "Ab",
        explore: "Entdecken"
      },
      cta: "Mehr Details Anzeigen",
      specialties: "Unsere Spezialitäten",
      disciplineDescription: "Ob Dressur, Springen oder Freizeitreiten",
      ctaTitle: "Bereit, Ihr Idealfahrzeug zu finden?",
      ctaDescription: "Profitieren Sie von unserer Expertise, um das perfekte Fahrzeug für Ihre Bedürfnisse auszuwählen.",
      getFreeQuote: "Kostenloses Angebot",
      makeAppointment: "Termin Vereinbaren"
    },
    offers: {
      title: "Unsere Angebote & Services",
      subtitle: "Komplette Lösungen für alle Ihre Bedürfnisse",
      newVehicles: {
        title: "Neue Fahrzeuge",
        description: "Neueste Modelle mit Herstellergarantie",
        benefits: ["Erweiterte Garantie", "Einfache Finanzierung", "Maßgeschneiderte Konfiguration"]
      },
      usedVehicles: {
        title: "Gebrauchte Fahrzeuge",
        description: "Ausgewählte und gewartete Fahrzeuge",
        benefits: ["Attraktive Preise", "Qualitätskontrolle", "Garantie inklusive"]
      },
      accessories: {
        title: "Zubehör & Ausstattung",
        description: "Alles zur Ausstattung Ihres Fahrzeugs",
        benefits: ["Breites Sortiment", "Professionelle Installation", "Expertenberatung"]
      },
      cta: "Angebot Anfordern"
    },
    trust: {
      title: "Warum Uns Wählen?",
      subtitle: "Über 30 Jahre Expertise im Pferdetransport",
      features: {
        expertise: {
          title: "Anerkannte Expertise",
          description: "Über 30 Jahre Erfahrung im Pferdetransport ermöglichen es uns, Sie bestmöglich zu beraten."
        },
        quality: {
          title: "Premium-Qualität",
          description: "Wir wählen nur die besten Marken aus, um Langlebigkeit und Zuverlässigkeit zu garantieren."
        },
        service: {
          title: "Persönlicher Service",
          description: "Jeder Kunde profitiert von einer maßgeschneiderten Betreuung vom Kauf bis zur Lieferung."
        },
        warranty: {
          title: "Erweiterte Garantie",
          description: "Alle unsere Fahrzeuge sind durch eine umfassende Garantie für Ihre Seelenruhe abgedeckt."
        }
      }
    },
    contact: {
      title: "Kontaktieren Sie Uns",
      subtitle: "Unser Expertenteam steht Ihnen zur Verfügung",
      info: {
        phone: "+33 1 23 45 67 89",
        email: "contact@htg-france.com",
        address: "123 Route des Chevaux, 75000 Paris",
        hours: "Mo-Fr: 8-18 Uhr, Sa: 9-17 Uhr"
      },
      form: {
        title: "Senden Sie uns eine Nachricht",
        subtitle: "Wir werden Ihnen so schnell wie möglich antworten",
        fields: {
          firstName: "Vorname",
          lastName: "Nachname",
          email: "E-Mail",
          phone: "Telefon",
          subject: "Betreff",
          message: "Nachricht"
        },
        placeholders: {
          firstName: "Ihr Vorname",
          lastName: "Ihr Nachname",
          email: "ihre@email.com",
          phone: "06 12 34 56 78",
          subject: "Betreff Ihrer Nachricht",
          message: "Beschreiben Sie Ihre Anfrage..."
        },
        submit: "Nachricht Senden",
        required: "Pflichtfelder"
      }
    },
    footer: {
      company: {
        title: "HTG France",
        description: "Spezialist für Pferdetransport seit über 30 Jahren. Wir bieten eine komplette Palette von Fahrzeugen für alle Ihre Bedürfnisse."
      },
      quickLinks: {
        title: "Schnelllinks",
        home: "Startseite",
        about: "Über uns",
        contact: "Kontakt",
        occasions: "Gebrauchtwagen"
      },
      products: {
        title: "Unsere Produkte",
        horseTrucks: "Pferdetransporter",
        horseVans: "Pferde-Vans",
        horseTrailers: "Pferdeanhänger",
        accessories: "Zubehör"
      },
      contact: {
        title: "Kontakt",
        phone: "+33 1 23 45 67 89",
        email: "contact@htg-france.com",
        address: "123 Route des Chevaux, 75000 Paris"
      },
      copyright: "© 2024 HTG France. Alle Rechte vorbehalten."
    },
    about: {
      hero: {
        title: "Über HTG France",
        subtitle: "Ihr Vertrauenspartner",
        description: "Seit über 30 Jahren begleitet HTG France Profis und Enthusiasten der Pferdewelt mit Transportlösungen, die an alle Bedürfnisse angepasst sind."
      },
      story: {
        title: "Unsere Geschichte",
        description: "1990 gegründet, entstand HTG France aus der Leidenschaft für das Reiten und technischer Expertise. Wir haben uns mit den Marktbedürfnissen weiterentwickelt und dabei unsere ursprünglichen Werte beibehalten: Qualität, Nähe und Service."
      },
      values: {
        title: "Unsere Werte",
        expertise: {
          title: "Expertise",
          description: "Über 30 Jahre Erfahrung im Pferdetransport"
        },
        quality: {
          title: "Qualität",
          description: "Strenge Auswahl der besten Marken und Ausrüstungen"
        },
        service: {
          title: "Service",
          description: "Persönliche Begleitung vom Kauf bis zum Kundendienst"
        }
      },
      team: {
        title: "Unser Team",
        description: "Ein leidenschaftliches Team von Fachleuten steht Ihnen zur Verfügung, um Sie zu beraten und bei Ihrem Projekt zu begleiten."
      }
    },
    common: {
      learnMore: "Mehr Erfahren",
      getQuote: "Angebot Anfordern",
      contact: "Kontaktieren Sie Uns",
      phone: "Telefon",
      email: "E-Mail",
      address: "Adresse",
      readMore: "Mehr Lesen",
      previous: "Vorherige",
      next: "Nächste",
      close: "Schließen",
      open: "Öffnen",
      menu: "Menü",
      loading: "Laden...",
      error: "Fehler",
      success: "Erfolg",
      required: "Erforderlich",
      optional: "Optional",
      submit: "Senden",
      cancel: "Abbrechen",
      save: "Speichern",
      delete: "Löschen",
      edit: "Bearbeiten",
      add: "Hinzufügen",
      search: "Suchen",
      filter: "Filtern",
      sort: "Sortieren",
      all: "Alle",
      none: "Keine",
      select: "Auswählen",
      clear: "Löschen",
      apply: "Anwenden",
      reset: "Zurücksetzen",
      confirm: "Bestätigen",
      yes: "Ja",
      no: "Nein",
      ok: "OK"
    },
    occasions: {
      hero: {
        title: "Gebrauchte Fahrzeuge",
        subtitle: "Finden Sie Ihr Idealfahrzeug",
        description: "Entdecken Sie unsere Auswahl an gewarteten und garantierten Gebrauchtfahrzeugen für den zuverlässigen Transport Ihrer Pferde."
      },
      filters: {
        title: "Filter",
        type: "Fahrzeugtyp",
        price: "Preis",
        year: "Jahr",
        mileage: "Kilometerstand",
        fuel: "Kraftstoff",
        transmission: "Getriebe",
        apply: "Anwenden",
        reset: "Zurücksetzen"
      },
      listing: {
        noResults: "Kein Fahrzeug entspricht Ihren Kriterien",
        priceFrom: "Ab",
        year: "Jahr",
        mileage: "Kilometerstand",
        fuel: "Kraftstoff",
        transmission: "Getriebe",
        viewDetails: "Details anzeigen",
        contact: "Kontaktieren Sie uns"
      }
    },
    horseTrucks: {
      hero: {
        title: "Pferdetransporter",
        subtitle: "Professioneller Transport",
        description: "Unsere Pferdetransporter bieten höchsten Komfort und Sicherheit für den Transport Ihrer Pferde, mit Kapazitäten von 2 bis 12 Pferden."
      },
      features: {
        title: "Premium-Eigenschaften",
        capacity: {
          title: "Große Kapazität",
          description: "Transport von 2 bis 12 Pferden je nach gewähltem Modell"
        },
        comfort: {
          title: "Optimaler Komfort",
          description: "Schlafkabine und integrierte Wohnbereiche"
        },
        safety: {
          title: "Maximale Sicherheit",
          description: "Sicherheitsausrüstung der neuesten Generation"
        },
        technology: {
          title: "Fortschrittliche Technologien",
          description: "Luftfederung und Klimakontrolle"
        }
      },
      models: {
        title: "Unsere Modelle",
        subtitle: "Eine Palette für alle Ihre Bedürfnisse"
      }
    },
    horseVans: {
      hero: {
        title: "Pferde-Vans",
        subtitle: "Vielseitigkeit und Wendigkeit",
        description: "Unsere Pferde-Vans kombinieren Fahrkomfort und Funktionalität für den einfachen Transport von 1 bis 3 Pferden."
      },
      features: {
        title: "Einzigartige Vorteile",
        maneuverability: {
          title: "Wendigkeit",
          description: "Fahrkomfort vergleichbar mit einem Nutzfahrzeug"
        },
        versatility: {
          title: "Vielseitigkeit",
          description: "Ideal für tägliche Ausflüge und Wettkämpfe"
        },
        economy: {
          title: "Wirtschaftlichkeit",
          description: "Reduzierter Verbrauch und kontrollierte Wartungskosten"
        },
        equipment: {
          title: "Ausstattung",
          description: "Alle notwendige Ausrüstung inklusive"
        }
      },
      models: {
        title: "Unsere Modelle",
        subtitle: "Von 1 bis 3 Pferden, finden Sie Ihre Lösung"
      }
    },
    horseTrailers: {
      hero: {
        title: "Pferdeanhänger",
        subtitle: "Flexibilität und Wirtschaftlichkeit",
        description: "Unsere Pferdeanhänger bieten eine wirtschaftliche und flexible Lösung für alle Arten von Pferdetransport."
      },
      features: {
        title: "Stärken",
        flexibility: {
          title: "Flexibilität",
          description: "Verwendbar mit verschiedenen Zugfahrzeugen"
        },
        capacity: {
          title: "Modulare Kapazität",
          description: "Von 1 bis 6 Pferden je nach Ihren Bedürfnissen"
        },
        durability: {
          title: "Robustheit",
          description: "Solide Konstruktion für eine lange Lebensdauer"
        },
        value: {
          title: "Preis-Leistungs-Verhältnis",
          description: "Die wirtschaftlichste Lösung auf dem Markt"
        }
      },
      models: {
        title: "Unsere Modelle",
        subtitle: "Vom einfachen Anhänger bis zum Luxusanhänger"
      }
    }
  }
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
