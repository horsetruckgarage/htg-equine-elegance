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
        name: string;
        role: string;
        content: string;
        rating: number;
        image: string;
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
    features: {
      comfort: {
        title: string;
        description: string;
      };
      safety: {
        title: string;
        description: string;
      };
      equipment: {
        title: string;
        description: string;
      };
    };
    cta: {
      title: string;
      description: string;
      button: string;
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
    features: {
      versatility: {
        title: string;
        description: string;
      };
      efficiency: {
        title: string;
        description: string;
      };
      comfort: {
        title: string;
        description: string;
      };
    };
    cta: {
      title: string;
      description: string;
      button: string;
    };
  };

  // Trailers Page
  trailersPage: {
    title: string;
    subtitle: string;
    description: string;
    filters: {
      allFilters: string;
      capacity: string;
      price: string;
      year: string;
      weight: string;
      found: string;
    };
    features: {
      lightweight: {
        title: string;
        description: string;
      };
      maneuverability: {
        title: string;
        description: string;
      };
      economy: {
        title: string;
        description: string;
      };
    };
    cta: {
      title: string;
      description: string;
      button: string;
    };
  };

  // Occasions Page
  occasionsPage: {
    title: string;
    subtitle: string;
    description: string;
    guarantees: {
      title: string;
      checked: string;
      warranty: string;
      maintenance: string;
      financing: string;
    };
    filters: {
      allFilters: string;
      type: string;
      brand: string;
      year: string;
      price: string;
      mileage: string;
      found: string;
    };
    advantages: {
      price: {
        title: string;
        description: string;
      };
      quality: {
        title: string;
        description: string;
      };
      choice: {
        title: string;
        description: string;
      };
    };
    cta: {
      title: string;
      description: string;
      button: string;
    };
  };

  // About Page
  aboutPage: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      description: string;
    };
    story: {
      title: string;
      subtitle: string;
      description: string;
      founder: {
        name: string;
        role: string;
        quote: string;
      };
    };
    mission: {
      title: string;
      subtitle: string;
      values: {
        excellence: {
          title: string;
          description: string;
        };
        trust: {
          title: string;
          description: string;
        };
        innovation: {
          title: string;
          description: string;
        };
        service: {
          title: string;
          description: string;
        };
      };
    };
    achievements: {
      title: string;
      subtitle: string;
      stats: {
        experience: string;
        vehicles: string;
        clients: string;
        satisfaction: string;
      };
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
  
  contactPage: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      description: string;
    };
    contactMethods: {
      title: string;
      subtitle: string;
      phone: {
        title: string;
        subtitle: string;
        description: string;
        actionText: string;
      };
      chat: {
        title: string;
        subtitle: string;
        description: string;
        actionText: string;
      };
      appointment: {
        title: string;
        subtitle: string;
        description: string;
        actionText: string;
      };
    };
    contactInfo: {
      title: string;
      subtitle: string;
      description: string;
      address: {
        title: string;
        value: string;
      };
      hours: {
        title: string;
        weekdays: string;
        saturday: string;
        sunday: string;
      };
      phone: {
        title: string;
        value: string;
      };
      email: {
        title: string;
        value: string;
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
      description: string;
      firstName: string;
      firstNamePlaceholder: string;
      lastName: string;
      lastNamePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      phone: string;
      phonePlaceholder: string;
      vehicleType: string;
      vehicleTypePlaceholder: string;
      budget: string;
      budgetPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      responseTime: string;
      noCommitment: string;
      submitButton: string;
      vehicleTypes: {
        truck: string;
        van: string;
        trailer: string;
        other: string;
      };
      budgetRanges: {
        under30k: string;
        range30k50k: string;
        range50k80k: string;
        over80k: string;
      };
    };
  };

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
          name: "Sarah Martin",
          role: "Cavalière professionnelle",
          content: "Service exceptionnel ! Mon van est parfait pour mes compétitions. L'équipe HTG a su comprendre mes besoins spécifiques.",
          rating: 5,
          image: "/placeholder.svg"
        },
        {
          name: "Pierre Dubois",
          role: "Centre équestre",
          content: "Camion livré dans les délais avec tous les équipements demandés. Qualité au rendez-vous, je recommande vivement !",
          rating: 5,
          image: "/placeholder.svg"
        },
        {
          name: "Marie Leroy",
          role: "Propriétaire de chevaux",
          content: "Excellent conseil pour l'achat de ma remorque. Prix transparent et service après-vente impeccable.",
          rating: 5,
          image: "/placeholder.svg"
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
    trucksPage: {
      title: "Camions Chevaux",
      subtitle: "Transport Professionnel",
      description: "Découvrez notre gamme complète de camions pour le transport équin professionnel. De 2 à 8 chevaux, tous équipements inclus.",
      filters: {
        allFilters: "Tous les filtres",
        capacity: "Capacité",
        price: "Prix",
        year: "Année",
        mileage: "Kilométrage",
        found: "véhicules trouvés"
      },
      features: {
        comfort: {
          title: "Confort Maximum",
          description: "Cabines spacieuses avec couchette, climatisation et équipements modernes"
        },
        safety: {
          title: "Sécurité Avancée",
          description: "Systèmes de freinage ABS, ESP et suspension pneumatique pour vos chevaux"
        },
        equipment: {
          title: "Équipements Premium",
          description: "Éclairage LED, ventilation, caméras de surveillance et bien plus"
        }
      },
      cta: {
        title: "Besoin d'un conseil ?",
        description: "Nos experts vous accompagnent dans le choix de votre camion",
        button: "Nous contacter"
      }
    },
    vansPage: {
      title: "Vans Chevaux",
      subtitle: "Polyvalence et Praticité",
      description: "Parfaits pour 1 à 3 chevaux, nos vans allient facilité de conduite et équipements professionnels.",
      filters: {
        allFilters: "Tous les filtres",
        capacity: "Capacité",
        price: "Prix",
        year: "Année",
        mileage: "Kilométrage",
        found: "véhicules trouvés"
      },
      features: {
        versatility: {
          title: "Polyvalence",
          description: "Parfaits pour usage quotidien et transport occasionnel"
        },
        efficiency: {
          title: "Efficacité",
          description: "Consommation réduite et facilité de stationnement"
        },
        comfort: {
          title: "Confort",
          description: "Suspension adaptée et ventilation optimisée pour vos chevaux"
        }
      },
      cta: {
        title: "Questions sur nos vans ?",
        description: "Découvrez le modèle qui correspond à vos besoins",
        button: "Demander un devis"
      }
    },
    trailersPage: {
      title: "Remorques Chevaux",
      subtitle: "Solution Économique",
      description: "Remorques de qualité pour 1 à 3 chevaux. Solution économique sans compromis sur la sécurité.",
      filters: {
        allFilters: "Tous les filtres",
        capacity: "Capacité",
        price: "Prix",
        year: "Année",
        weight: "Poids",
        found: "véhicules trouvés"
      },
      features: {
        lightweight: {
          title: "Légèreté",
          description: "Construction allégée pour une consommation réduite"
        },
        maneuverability: {
          title: "Maniabilité",
          description: "Facilité d'attelage et de manœuvre en toutes circonstances"
        },
        economy: {
          title: "Économie",
          description: "Investissement maîtrisé avec un excellent rapport qualité-prix"
        }
      },
      cta: {
        title: "Quelle remorque choisir ?",
        description: "Nos spécialistes vous conseillent selon votre usage",
        button: "Être rappelé"
      }
    },
    occasionsPage: {
      title: "Véhicules d'Occasion",
      subtitle: "Sélection Rigoureuse",
      description: "Découvrez nos véhicules d'occasion contrôlés et garantis. Qualité professionnelle à prix maîtrisé.",
      guarantees: {
        title: "Nos Garanties",
        checked: "Véhicules contrôlés",
        warranty: "Garantie incluse",
        maintenance: "Historique d'entretien",
        financing: "Financement disponible"
      },
      filters: {
        allFilters: "Tous les filtres",
        type: "Type",
        brand: "Marque",
        year: "Année",
        price: "Prix",
        mileage: "Kilométrage",
        found: "véhicules trouvés"
      },
      advantages: {
        price: {
          title: "Prix Attractifs",
          description: "Économisez jusqu'à 40% par rapport au neuf"
        },
        quality: {
          title: "Qualité Contrôlée",
          description: "Inspection complète de nos experts avant mise en vente"
        },
        choice: {
          title: "Large Choix",
          description: "Plus de 50 véhicules d'occasion en stock permanent"
        }
      },
      cta: {
        title: "Trouvez votre occasion",
        description: "Consultez notre stock complet et réservez votre véhicule",
        button: "Voir toutes les occasions"
      }
    },
    aboutPage: {
      hero: {
        badge: "Notre Histoire",
        title: "15 ans de Passion",
        subtitle: "au Service du Transport Équin",
        description: "Depuis 2009, HTG accompagne les passionnés d'équitation dans leurs projets de transport avec expertise et dévouement."
      },
      story: {
        title: "Notre",
        subtitle: "Histoire",
        description: "HTG naît de la passion de son fondateur pour l'univers équin et de sa volonté d'offrir des solutions de transport d'exception. Depuis 15 ans, nous avons accompagné plus de 2500 clients dans leurs projets.",
        founder: {
          name: "Jean-Michel Perrin",
          role: "Fondateur & Directeur",
          quote: "Ma vision a toujours été simple : offrir aux passionnés d'équitation les meilleurs véhicules de transport, avec un service irréprochable."
        }
      },
      mission: {
        title: "Nos",
        subtitle: "Valeurs",
        values: {
          excellence: {
            title: "Excellence",
            description: "Nous sélectionnons rigoureusement chaque véhicule pour garantir la plus haute qualité."
          },
          trust: {
            title: "Confiance",
            description: "Transparence totale dans nos échanges et nos tarifs. Votre satisfaction est notre priorité."
          },
          innovation: {
            title: "Innovation",
            description: "Nous restons à la pointe des technologies pour vous offrir les solutions les plus modernes."
          },
          service: {
            title: "Service",
            description: "Un accompagnement personnalisé de votre projet à la livraison de votre véhicule."
          }
        }
      },
      achievements: {
        title: "Nos",
        subtitle: "Réalisations",
        stats: {
          experience: "15 années d'expertise",
          vehicles: "150+ véhicules en stock",
          clients: "2500+ clients satisfaits",
          satisfaction: "98% de satisfaction client"
        }
      },
      team: {
        director: {
          role: "Directeur & Fondateur",
          experience: "20 ans dans le transport équin",
          speciality: "Expert en camions premium"
        },
        sales: {
          role: "Responsable Commercial",
          experience: "12 ans chez HTG",
          speciality: "Spécialiste vans et remorques"
        },
        technical: {
          role: "Expert Technique",
          experience: "15 ans mécanicien spécialisé",
          speciality: "Contrôle qualité"
        }
      },
      teamSection: {
        title1: "Notre",
        title2: " Équipe",
        subtitle: "Des experts passionnés à votre service"
      },
      cta: {
        title: "Prêt à nous faire confiance ?",
        description: "Découvrez pourquoi plus de 2500 passionnés d'équitation nous font confiance.",
        button1: "Voir Nos Véhicules",
        button2: "Prendre Rendez-vous"
      }
    },
    contactPage: {
      hero: {
        badge: "Contactez-nous",
        title: "Parlons de Votre",
        subtitle: "Projet Transport",
        description: "Nos experts vous accompagnent dans le choix de votre véhicule de transport équin."
      },
      contactMethods: {
        title: "Comment Nous",
        subtitle: "Joindre ?",
        phone: {
          title: "Appelez-nous",
          subtitle: "Réponse immédiate",
          description: "Nos experts vous répondent du lundi au samedi",
          actionText: "Appeler maintenant"
        },
        chat: {
          title: "Chat en Ligne",
          subtitle: "Assistance instantanée",
          description: "Posez vos questions en temps réel",
          actionText: "Chatter maintenant"
        },
        appointment: {
          title: "Rendez-vous",
          subtitle: "Conseil personnalisé",
          description: "Rencontrez nos experts en visio ou au showroom",
          actionText: "Planifier maintenant"
        }
      },
      contactInfo: {
        title: "Informations",
        subtitle: "Pratiques",
        description: "Retrouvez-nous dans notre showroom ou contactez-nous directement.",
        address: {
          title: "Adresse",
          value: "Zone Industrielle de la Forêt\n123 Rue des Chevaux\n45000 Orléans, France"
        },
        hours: {
          title: "Horaires",
          weekdays: "Lundi - Vendredi : 8h - 18h",
          saturday: "Samedi : 9h - 17h",
          sunday: "Dimanche : Sur rendez-vous"
        },
        phone: {
          title: "Téléphone",
          value: "01 23 45 67 89"
        },
        email: {
          title: "Email",
          value: "contact@htg-france.com"
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
        description: "Remplissez ce formulaire et recevez une réponse personnalisée sous 24h.",
        firstName: "Prénom *",
        firstNamePlaceholder: "Votre prénom",
        lastName: "Nom *",
        lastNamePlaceholder: "Votre nom",
        email: "Email *",
        emailPlaceholder: "votre@email.com",
        phone: "Téléphone",
        phonePlaceholder: "06 12 34 56 78",
        vehicleType: "Type de véhicule recherché",
        vehicleTypePlaceholder: "Sélectionnez un type",
        budget: "Budget estimé",
        budgetPlaceholder: "Sélectionnez votre budget",
        message: "Message *",
        messagePlaceholder: "Décrivez-nous votre projet, vos besoins spécifiques, le nombre de chevaux à transporter...",
        responseTime: "Recevez votre réponse personnalisée en moins de 24h",
        noCommitment: "Sans engagement • Conseil gratuit",
        submitButton: "Envoyer ma Demande",
        vehicleTypes: {
          truck: "Camion Chevaux",
          van: "Van Chevaux",
          trailer: "Remorque Chevaux",
          other: "Autre / Conseil"
        },
        budgetRanges: {
          under30k: "Moins de 30 000€",
          range30k50k: "30 000€ - 50 000€",
          range50k80k: "50 000€ - 80 000€",
          over80k: "Plus de 80 000€"
        }
      }
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
          name: "Sarah Martin",
          role: "Professional rider",
          content: "Exceptional service! My van is perfect for my competitions. The HTG team understood my specific needs.",
          rating: 5,
          image: "/placeholder.svg"
        },
        {
          name: "Pierre Dubois",
          role: "Equestrian center",
          content: "Truck delivered on time with all requested equipment. Quality as expected, I highly recommend!",
          rating: 5,
          image: "/placeholder.svg"
        },
        {
          name: "Marie Leroy",
          role: "Horse owner",
          content: "Excellent advice for buying my trailer. Transparent price and impeccable after-sales service.",
          rating: 5,
          image: "/placeholder.svg"
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
    trucksPage: {
      title: "Horse Trucks",
      subtitle: "Professional Transport",
      description: "Discover our complete range of trucks for professional equine transport. From 2 to 8 horses, all equipment included.",
      filters: {
        allFilters: "All filters",
        capacity: "Capacity",
        price: "Price",
        year: "Year",
        mileage: "Mileage",
        found: "vehicles found"
      },
      features: {
        comfort: {
          title: "Maximum Comfort",
          description: "Spacious cabins with sleeper, air conditioning and modern equipment"
        },
        safety: {
          title: "Advanced Safety",
          description: "ABS braking systems, ESP and air suspension for your horses"
        },
        equipment: {
          title: "Premium Equipment",
          description: "LED lighting, ventilation, surveillance cameras and much more"
        }
      },
      cta: {
        title: "Need advice?",
        description: "Our experts support you in choosing your truck",
        button: "Contact us"
      }
    },
    vansPage: {
      title: "Horse Vans",
      subtitle: "Versatility and Practicality",
      description: "Perfect for 1 to 3 horses, our vans combine ease of driving and professional equipment.",
      filters: {
        allFilters: "All filters",
        capacity: "Capacity",
        price: "Price",
        year: "Year",
        mileage: "Mileage",
        found: "vehicles found"
      },
      features: {
        versatility: {
          title: "Versatility",
          description: "Perfect for daily use and occasional transport"
        },
        efficiency: {
          title: "Efficiency",
          description: "Reduced consumption and easy parking"
        },
        comfort: {
          title: "Comfort",
          description: "Adapted suspension and optimized ventilation for your horses"
        }
      },
      cta: {
        title: "Questions about our vans?",
        description: "Discover the model that matches your needs",
        button: "Request a quote"
      }
    },
    trailersPage: {
      title: "Horse Trailers",
      subtitle: "Economical Solution",
      description: "Quality trailers for 1 to 3 horses. Economical solution without compromising on safety.",
      filters: {
        allFilters: "All filters",
        capacity: "Capacity",
        price: "Price",
        year: "Year",
        weight: "Weight",
        found: "vehicles found"
      },
      features: {
        lightweight: {
          title: "Lightness",
          description: "Lightweight construction for reduced consumption"
        },
        maneuverability: {
          title: "Maneuverability",
          description: "Easy hitching and maneuvering in all circumstances"
        },
        economy: {
          title: "Economy",
          description: "Controlled investment with excellent value for money"
        }
      },
      cta: {
        title: "Which trailer to choose?",
        description: "Our specialists advise you according to your use",
        button: "Be called back"
      }
    },
    occasionsPage: {
      title: "Used Vehicles",
      subtitle: "Rigorous Selection",
      description: "Discover our controlled and guaranteed used vehicles. Professional quality at controlled prices.",
      guarantees: {
        title: "Our Guarantees",
        checked: "Vehicles inspected",
        warranty: "Warranty included",
        maintenance: "Maintenance history",
        financing: "Financing available"
      },
      filters: {
        allFilters: "All filters",
        type: "Type",
        brand: "Brand",
        year: "Year",
        price: "Price",
        mileage: "Mileage",
        found: "vehicles found"
      },
      advantages: {
        price: {
          title: "Attractive Prices",
          description: "Save up to 40% compared to new"
        },
        quality: {
          title: "Controlled Quality",
          description: "Complete inspection by our experts before sale"
        },
        choice: {
          title: "Wide Choice",
          description: "More than 50 used vehicles in permanent stock"
        }
      },
      cta: {
        title: "Find your used vehicle",
        description: "Browse our complete stock and reserve your vehicle",
        button: "See all used vehicles"
      }
    },
    aboutPage: {
      hero: {
        badge: "Our Story",
        title: "15 years of Passion",
        subtitle: "in Service of Equine Transport",
        description: "Since 2009, HTG has been supporting equestrian enthusiasts in their transport projects with expertise and dedication."
      },
      story: {
        title: "Our",
        subtitle: "Story",
        description: "HTG was born from its founder's passion for the equestrian world and his desire to offer exceptional transport solutions. For 15 years, we have supported more than 2500 clients in their projects.",
        founder: {
          name: "Jean-Michel Perrin",
          role: "Founder & Director",
          quote: "My vision has always been simple: offer equestrian enthusiasts the best transport vehicles, with impeccable service."
        }
      },
      mission: {
        title: "Our",
        subtitle: "Values",
        values: {
          excellence: {
            title: "Excellence",
            description: "We rigorously select each vehicle to guarantee the highest quality."
          },
          trust: {
            title: "Trust",
            description: "Total transparency in our exchanges and our prices. Your satisfaction is our priority."
          },
          innovation: {
            title: "Innovation",
            description: "We stay at the forefront of technologies to offer you the most modern solutions."
          },
          service: {
            title: "Service",
            description: "Personalized support from your project to the delivery of your vehicle."
          }
        }
      },
      achievements: {
        title: "Our",
        subtitle: "Achievements",
        stats: {
          experience: "15 years of expertise",
          vehicles: "150+ vehicles in stock",
          clients: "2500+ satisfied customers",
          satisfaction: "98% customer satisfaction"
        }
      },
      team: {
        director: {
          role: "Director & Founder",
          experience: "20 years in equine transport",
          speciality: "Expert in premium trucks"
        },
        sales: {
          role: "Sales Manager",
          experience: "12 years at HTG",
          speciality: "Vans and trailers specialist"
        },
        technical: {
          role: "Technical Expert",
          experience: "15 years specialized mechanic",
          speciality: "Quality control"
        }
      },
      teamSection: {
        title1: "Our",
        title2: " Team",
        subtitle: "Passionate experts at your service"
      },
      cta: {
        title: "Ready to trust us?",
        description: "Discover why more than 2500 equestrian enthusiasts trust us.",
        button1: "See Our Vehicles",
        button2: "Make an Appointment"
      }
    },
    contactPage: {
      hero: {
        badge: "Contact Us",
        title: "Let's Talk About Your",
        subtitle: "Transport Project",
        description: "Our experts guide you in choosing your equine transport vehicle."
      },
      contactMethods: {
        title: "How to",
        subtitle: "Reach Us?",
        phone: {
          title: "Call us",
          subtitle: "Immediate response",
          description: "Our experts respond Monday to Saturday",
          actionText: "Call now"
        },
        chat: {
          title: "Online Chat",
          subtitle: "Instant assistance",
          description: "Ask your questions in real time",
          actionText: "Chat now"
        },
        appointment: {
          title: "Appointment",
          subtitle: "Personalized advice",
          description: "Meet our experts by video or at the showroom",
          actionText: "Schedule now"
        }
      },
      contactInfo: {
        title: "Practical",
        subtitle: "Information",
        description: "Find us in our showroom or contact us directly.",
        address: {
          title: "Address",
          value: "Zone Industrielle de la Forêt\n123 Rue des Chevaux\n45000 Orléans, France"
        },
        hours: {
          title: "Hours",
          weekdays: "Monday - Friday: 8am - 6pm",
          saturday: "Saturday: 9am - 5pm",
          sunday: "Sunday: By appointment"
        },
        phone: {
          title: "Phone",
          value: "01 23 45 67 89"
        },
        email: {
          title: "Email",
          value: "contact@htg-france.com"
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
        description: "Fill out this form and receive a personalized response within 24h.",
        firstName: "First Name *",
        firstNamePlaceholder: "Your first name",
        lastName: "Last Name *",
        lastNamePlaceholder: "Your last name",
        email: "Email *",
        emailPlaceholder: "your@email.com",
        phone: "Phone",
        phonePlaceholder: "06 12 34 56 78",
        vehicleType: "Type of vehicle sought",
        vehicleTypePlaceholder: "Select a type",
        budget: "Estimated budget",
        budgetPlaceholder: "Select your budget",
        message: "Message *",
        messagePlaceholder: "Describe your project, your specific needs, the number of horses to transport...",
        responseTime: "Receive your personalized response in less than 24h",
        noCommitment: "No commitment • Free advice",
        submitButton: "Send my Request",
        vehicleTypes: {
          truck: "Horse Truck",
          van: "Horse Van",
          trailer: "Horse Trailer",
          other: "Other / Advice"
        },
        budgetRanges: {
          under30k: "Under €30,000",
          range30k50k: "€30,000 - €50,000",
          range50k80k: "€50,000 - €80,000",
          over80k: "Over €80,000"
        }
      }
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
    hero: {
      slide1: {
        subtitle: "Transporte equino premium",
        title: "Camiones Profesionales para Caballos",
        description: "Descubra nuestra selección de camiones de alta gama para el transporte de sus caballos. Comodidad, seguridad y fiabilidad garantizadas."
      },
      slide2: {
        subtitle: "Soluciones compactas",
        title: "Furgonetas para Caballos de Última Generación",
        description: "Perfectas para 1 a 3 caballos, nuestras furgonetas combinan maniobrabilidad y equipos de vanguardia para sus desplazamientos diarios."
      },
      slide3: {
        subtitle: "Económico y práctico",
        title: "Remolques para Caballos Certificados",
        description: "La alternativa económica para el transporte equino. Amplia selección de remolques nuevos y usados, todos inspeccionados."
      },
      slide4: {
        subtitle: "Vehículos inspeccionados",
        title: "Vehículos Usados Cuidadosamente Seleccionados",
        description: "Vehículos usados rigurosamente seleccionados e inspeccionados. Garantía, financiación y entrega en toda Francia."
      },
      slide5: {
        subtitle: "15 años de experiencia",
        title: "Su Socio en Transporte Equino",
        description: "HTG le ha apoyado durante 15 años en todos sus proyectos. Asesoramiento personalizado y servicio al cliente excepcional."
      },
      cta: "Descubrir nuestros vehículos"
    },
    categories: {
      title: "Elija Su",
      subtitle: "Vehículo Ideal",
      horseTrucks: {
        title: "Camiones para Caballos",
        description: "Soluciones profesionales para 2 a 8 caballos. Máximo confort y equipos de alta gama.",
        features: ["Suspensión neumática", "Aire acondicionado en cabina", "Suelo antideslizante"],
        from: "Desde 65.000€",
        explore: "Descubrir camiones"
      },
      horseVans: {
        title: "Furgonetas para Caballos",
        description: "Perfectas para 1 a 3 caballos. Maniobrables, económicas y muy bien equipadas.",
        features: ["Conducción fácil", "Consumo reducido", "Modularidad"],
        from: "Desde 35.000€",
        explore: "Descubrir furgonetas"
      },
      horseTrailers: {
        title: "Remolques para Caballos",
        description: "Solución económica para 1 a 3 caballos. Calidad y seguridad garantizadas.",
        features: ["Ligero y robusto", "Facilidad de enganche", "Precio atractivo"],
        from: "Desde 18.000€",
        explore: "Descubrir remolques"
      },
      ctaTitle: "¿Una Pregunta? ¿Un Proyecto?",
      ctaDescription: "Nuestros expertos le asesoran gratuitamente para encontrar el vehículo perfecto según sus necesidades.",
      getFreeQuote: "Presupuesto Gratuito",
      makeAppointment: "Concertar Cita",
      specialties: "Nuestras Especialidades",
      findPerfectVehicle: "Encuentre el Vehículo Perfecto",
      disciplineDescription: "Para Cada Disciplina Ecuestre"
    },
    trust: {
      badge: "Por qué elegirnos",
      title: "HTG, Su Socio",
      subtitle: "de Confianza",
      description: "15 años de experiencia en transporte equino. Más de 2500 clientes confían en nosotros para su pasión.",
      stats: {
        experience: "15 años de experiencia",
        clients: "2500+ clientes satisfechos",
        satisfaction: "98% de satisfacción",
        response: "Respuesta en 24h"
      },
      reviewsTitle: "Lo que dicen nuestros clientes",
      reviewsDescription: "Descubra testimonios de entusiastas que confían en nosotros",
      leaveReview: "Dejar una reseña",
      partnersTitle: "Nuestros Socios de Confianza",
      partnersDescription: "Trabajamos con las mejores marcas del sector",
      getQuote: "Solicitar un presupuesto",
      partners: [
        { name: "Peugeot", logo: "/placeholder.svg", description: "Socio oficial" },
        { name: "Iveco", logo: "/placeholder.svg", description: "Distribuidor autorizado" },
        { name: "Mercedes", logo: "/placeholder.svg", description: "Centro de servicio" }
      ],
      reviews: [
        {
          name: "Sarah Martin",
          role: "Jinete profesional",
          content: "¡Servicio excepcional! Mi furgoneta es perfecta para mis competiciones. El equipo HTG entendió mis necesidades específicas.",
          rating: 5,
          image: "/placeholder.svg"
        },
        {
          name: "Pierre Dubois",
          role: "Centro ecuestre",
          content: "Camión entregado a tiempo con todo el equipo solicitado. Calidad como se esperaba, ¡lo recomiendo encarecidamente!",
          rating: 5,
          image: "/placeholder.svg"
        },
        {
          name: "Marie Leroy",
          role: "Propietaria de caballos",
          content: "Excelente consejo para comprar mi remolque. Precio transparente y servicio posventa impecable.",
          rating: 5,
          image: "/placeholder.svg"
        }
      ]
    },
    offres: {
      badge: "Nuestras Ofertas",
      title: "Vehículos Premium",
      subtitle: "Seleccionados para Usted",
      description: "Descubra nuestra rigurosa selección de vehículos nuevos y usados. Cada vehículo es inspeccionado por nuestros expertos.",
      stats: {
        vehicles: "150+ vehículos",
        brands: "12 marcas",
        clients: "2500+ clientes",
        years: "15 años de experiencia"
      },
      cta: {
        title: "¿Listo para encontrar su vehículo ideal?",
        description: "Contacte a nuestros expertos para asesoramiento personalizado y un presupuesto gratuito en 24h.",
        primaryButton: "Solicitar un presupuesto",
        secondaryButton: "Ver todos los vehículos"
      },
      features: {
        quality: {
          title: "Calidad Garantizada",
          description: "Todos nuestros vehículos son rigurosamente inspeccionados y certificados"
        },
        expertise: {
          title: "Experiencia Reconocida",
          description: "15 años de experiencia en transporte equino de calidad"
        },
        service: {
          title: "Servicio Premium",
          description: "Acompañamiento personalizado desde la compra hasta la entrega"
        },
        guarantee: {
          title: "Garantía Extendida",
          description: "Garantía del fabricante y servicios posventa incluidos"
        },
        financing: {
          title: "Financiación Facilitada",
          description: "Soluciones de financiación adaptadas a su presupuesto"
        },
        support: {
          title: "Soporte 24/7",
          description: "Equipo disponible para responder a todas sus preguntas"
        }
      },
      newArrival: "Novedad",
      bestSeller: "Bestseller",
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
      featuredVehicles: "Vehículos destacados",
      premiumSelection: "Selección Premium",
      ourBest: "Nuestras Mejores",
      offersVehicles: "Ofertas de Vehículos",
      discoverSelection: "Descubrir la Selección",
      rigorouslyControlled: "Rigurosamente Controlados",
      models: "modelos",
      specialOffers: "Ofertas Especiales",
      newArrivals2024: "Novedades 2024",
      bestseller: "Bestseller",
      mostRequested: "Los Más Solicitados",
      bestPrice: "Mejor Precio",
      upTo15Off: "Hasta -15%",
      receiveOffer24h: "Recibir una oferta en 24h",
      personalizedExchange: "Intercambio personalizado",
      discoverCollection: "Descubrir la Colección",
      moreEquipment: "Más equipamiento",
      promotionalPrice: "Precio promocional",
      financingAvailable: "Financiación disponible",
      discoverCharacteristics: "Descubrir características",
      addToMySelection: "Añadir a mi selección",
      onlyXDaysLeft: "Solo quedan X días",
      favorite: "Favorito"
    },
    trucksPage: {
      title: "Camiones para Caballos",
      subtitle: "Transporte Profesional",
      description: "Descubra nuestra gama completa de camiones para transporte ecuestre profesional. De 2 a 8 caballos, todo equipamiento incluido.",
      filters: {
        allFilters: "Todos los filtros",
        capacity: "Capacidad",
        price: "Precio",
        year: "Año",
        mileage: "Kilometraje",
        found: "vehículos encontrados"
      },
      features: {
        comfort: {
          title: "Máximo Confort",
          description: "Cabinas espaciosas con litera, aire acondicionado y equipos modernos"
        },
        safety: {
          title: "Seguridad Avanzada",
          description: "Sistemas de frenado ABS, ESP y suspensión neumática para sus caballos"
        },
        equipment: {
          title: "Equipamiento Premium",
          description: "Iluminación LED, ventilación, cámaras de vigilancia y mucho más"
        }
      },
      cta: {
        title: "¿Necesita asesoramiento?",
        description: "Nuestros expertos le apoyan en la elección de su camión",
        button: "Contáctenos"
      }
    },
    vansPage: {
      title: "Furgonetas para Caballos",
      subtitle: "Versatilidad y Practicidad",
      description: "Perfectas para 1 a 3 caballos, nuestras furgonetas combinan facilidad de conducción y equipos profesionales.",
      filters: {
        allFilters: "Todos los filtros",
        capacity: "Capacidad",
        price: "Precio",
        year: "Año",
        mileage: "Kilometraje",
        found: "vehículos encontrados"
      },
      features: {
        versatility: {
          title: "Versatilidad",
          description: "Perfectas para uso diario y transporte ocasional"
        },
        efficiency: {
          title: "Eficiencia",
          description: "Consumo reducido y facilidad de estacionamiento"
        },
        comfort: {
          title: "Confort",
          description: "Suspensión adaptada y ventilación optimizada para sus caballos"
        }
      },
      cta: {
        title: "¿Preguntas sobre nuestras furgonetas?",
        description: "Descubra el modelo que se adapta a sus necesidades",
        button: "Solicitar un presupuesto"
      }
    },
    trailersPage: {
      title: "Remolques para Caballos",
      subtitle: "Solución Económica",
      description: "Remolques de calidad para 1 a 3 caballos. Solución económica sin comprometer la seguridad.",
      filters: {
        allFilters: "Todos los filtros",
        capacity: "Capacidad",
        price: "Precio",
        year: "Año",
        weight: "Peso",
        found: "vehículos encontrados"
      },
      features: {
        lightweight: {
          title: "Ligereza",
          description: "Construcción ligera para un consumo reducido"
        },
        maneuverability: {
          title: "Maniobrabilidad",
          description: "Facilidad de enganche y maniobra en todas las circunstancias"
        },
        economy: {
          title: "Economía",
          description: "Inversión controlada con excelente relación calidad-precio"
        }
      },
      cta: {
        title: "¿Qué remolque elegir?",
        description: "Nuestros especialistas le asesoran según su uso",
        button: "Ser contactado"
      }
    },
    occasionsPage: {
      title: "Vehículos Usados",
      subtitle: "Selección Rigurosa",
      description: "Descubra nuestros vehículos usados controlados y garantizados. Calidad profesional a precios controlados.",
      guarantees: {
        title: "Nuestras Garantías",
        checked: "Vehículos inspeccionados",
        warranty: "Garantía incluida",
        maintenance: "Historial de mantenimiento",
        financing: "Financiación disponible"
      },
      filters: {
        allFilters: "Todos los filtros",
        type: "Tipo",
        brand: "Marca",
        year: "Año",
        price: "Precio",
        mileage: "Kilometraje",
        found: "vehículos encontrados"
      },
      advantages: {
        price: {
          title: "Precios Atractivos",
          description: "Ahorre hasta un 40% comparado con nuevos"
        },
        quality: {
          title: "Calidad Controlada",
          description: "Inspección completa por nuestros expertos antes de la venta"
        },
        choice: {
          title: "Amplia Selección",
          description: "Más de 50 vehículos usados en stock permanente"
        }
      },
      cta: {
        title: "Encuentre su vehículo usado",
        description: "Consulte nuestro stock completo y reserve su vehículo",
        button: "Ver todos los usados"
      }
    },
    aboutPage: {
      hero: {
        badge: "Nuestra Historia",
        title: "15 años de Pasión",
        subtitle: "al Servicio del Transporte Equino",
        description: "Desde 2009, HTG acompaña a los entusiastas de la equitación en sus proyectos de transporte con experiencia y dedicación."
      },
      story: {
        title: "Nuestra",
        subtitle: "Historia",
        description: "HTG nace de la pasión de su fundador por el mundo ecuestre y su voluntad de ofrecer soluciones de transporte excepcionales. Durante 15 años, hemos acompañado a más de 2500 clientes en sus proyectos.",
        founder: {
          name: "Jean-Michel Perrin",
          role: "Fundador y Director",
          quote: "Mi visión siempre ha sido simple: ofrecer a los entusiastas de la equitación los mejores vehículos de transporte, con un servicio impecable."
        }
      },
      mission: {
        title: "Nuestros",
        subtitle: "Valores",
        values: {
          excellence: {
            title: "Excelencia",
            description: "Seleccionamos rigurosamente cada vehículo para garantizar la más alta calidad."
          },
          trust: {
            title: "Confianza",
            description: "Transparencia total en nuestros intercambios y nuestras tarifas. Su satisfacción es nuestra prioridad."
          },
          innovation: {
            title: "Innovación",
            description: "Nos mantenemos a la vanguardia de las tecnologías para ofrecerle las soluciones más modernas."
          },
          service: {
            title: "Servicio",
            description: "Acompañamiento personalizado desde su proyecto hasta la entrega de su vehículo."
          }
        }
      },
      achievements: {
        title: "Nuestros",
        subtitle: "Logros",
        stats: {
          experience: "15 años de experiencia",
          vehicles: "150+ vehículos en stock",
          clients: "2500+ clientes satisfechos",
          satisfaction: "98% de satisfacción del cliente"
        }
      },
      team: {
        director: {
          role: "Director y Fundador",
          experience: "20 años en transporte equino",
          speciality: "Experto en camiones premium"
        },
        sales: {
          role: "Gerente de Ventas",
          experience: "12 años en HTG",
          speciality: "Especialista en furgonetas y remolques"
        },
        technical: {
          role: "Experto Técnico",
          experience: "15 años mecánico especializado",
          speciality: "Control de calidad"
        }
      },
      teamSection: {
        title1: "Nuestro",
        title2: " Equipo",
        subtitle: "Expertos apasionados a su servicio"
      },
      cta: {
        title: "¿Listo para confiar en nosotros?",
        description: "Descubra por qué más de 2500 entusiastas de la equitación confían en nosotros.",
        button1: "Ver Nuestros Vehículos",
        button2: "Concertar una Cita"
      }
    },
    contactPage: {
      hero: {
        badge: "Contáctanos",
        title: "Hablemos de Tu",
        subtitle: "Proyecto de Transporte",
        description: "Nuestros expertos te guían en la elección de tu vehículo de transporte equino."
      },
      contactMethods: {
        title: "Cómo",
        subtitle: "Contactarnos?",
        phone: {
          title: "Llámanos",
          subtitle: "Respuesta inmediata",
          description: "Nuestros expertos responden de lunes a sábado",
          actionText: "Llamar ahora"
        },
        chat: {
          title: "Chat en Línea",
          subtitle: "Asistencia instantánea",
          description: "Haz tus preguntas en tiempo real",
          actionText: "Chatear ahora"
        },
        appointment: {
          title: "Cita",
          subtitle: "Asesoramiento personalizado",
          description: "Conoce a nuestros expertos por video o en el showroom",
          actionText: "Programar ahora"
        }
      },
      contactInfo: {
        title: "Información",
        subtitle: "Práctica",
        description: "Encuéntranos en nuestro showroom o contáctanos directamente.",
        address: {
          title: "Dirección",
          value: "Zona Industrial de la Forêt\n123 Rue des Chevaux\n45000 Orléans, Francia"
        },
        hours: {
          title: "Horarios",
          weekdays: "Lunes - Viernes: 8h - 18h",
          saturday: "Sábado: 9h - 17h",
          sunday: "Domingo: Con cita previa"
        },
        phone: {
          title: "Teléfono",
          value: "01 23 45 67 89"
        },
        email: {
          title: "Email",
          value: "contact@htg-france.com"
        }
      },
      services: {
        title: "Servicios Express",
        expertise: {
          title: "Peritaje del Vehículo",
          description: "Inspección técnica completa antes de la compra",
          duration: "En 48h"
        },
        financing: {
          title: "Simulación de Financiación",
          description: "Calcula tus cuotas mensuales en tiempo real",
          duration: "Inmediato"
        },
        advice: {
          title: "Asesoramiento Personalizado",
          description: "Ayuda para elegir según tus necesidades",
          duration: "30 min"
        }
      },
      form: {
        title: "Solicitud de Contacto",
        description: "Completa este formulario y recibe una respuesta personalizada en 24h.",
        firstName: "Nombre *",
        firstNamePlaceholder: "Tu nombre",
        lastName: "Apellido *",
        lastNamePlaceholder: "Tu apellido",
        email: "Email *",
        emailPlaceholder: "tu@email.com",
        phone: "Teléfono",
        phonePlaceholder: "06 12 34 56 78",
        vehicleType: "Tipo de vehículo buscado",
        vehicleTypePlaceholder: "Selecciona un tipo",
        budget: "Presupuesto estimado",
        budgetPlaceholder: "Selecciona tu presupuesto",
        message: "Mensaje *",
        messagePlaceholder: "Describe tu proyecto, tus necesidades específicas, el número de caballos a transportar...",
        responseTime: "Recibe tu respuesta personalizada en menos de 24h",
        noCommitment: "Sin compromiso • Asesoramiento gratuito",
        submitButton: "Enviar mi Solicitud",
        vehicleTypes: {
          truck: "Camión para Caballos",
          van: "Furgoneta para Caballos",
          trailer: "Remolque para Caballos",
          other: "Otro / Consejo"
        },
        budgetRanges: {
          under30k: "Menos de 30.000€",
          range30k50k: "30.000€ - 50.000€",
          range50k80k: "50.000€ - 80.000€",
          over80k: "Más de 80.000€"
        }
      }
    },
    quoteRequestPage: {
      hero: {
        badge: "Solicitud de Presupuesto",
        title: "Obtén Tu Presupuesto",
        subtitle: "Personalizado Gratuito",
        description: "Nuestros expertos te acompañan en la elección de tu vehículo de transporte equino. Respuesta garantizada en 24h."
      },
      benefits: {
        response24h: {
          title: "Respuesta en 24h",
          description: "Tu presupuesto personalizado en tu bandeja de entrada"
        },
        free: {
          title: "100% Gratuito",
          description: "Sin tarifas, sin compromiso de tu parte"
        },
        transparent: {
          title: "Precios Transparentes",
          description: "Todos los costos incluidos, sin sorpresas"
        },
        expert: {
          title: "Experto Dedicado",
          description: "Un asesor personal sigue tu caso"
        }
      },
      vehicleTypes: {
        title: "Tipos de Vehículos Disponibles",
        truck: {
          type: "Camión para Caballos",
          priceRange: "45.000€ - 120.000€",
          popular: "El más solicitado",
          capacities: ["2 caballos", "3 caballos", "4 caballos", "5 caballos", "6+ caballos"]
        },
        van: {
          type: "Furgoneta para Caballos",
          priceRange: "25.000€ - 85.000€",
          capacities: ["1 caballo", "2 caballos", "3 caballos"]
        },
        trailer: {
          type: "Remolque para Caballos",
          priceRange: "15.000€ - 55.000€",
          capacities: ["1 caballo", "2 caballos", "3 caballos"]
        }
      },
      form: {
        title: "Formulario de Solicitud de Presupuesto",
        description: "Completa este formulario detallado para recibir tu presupuesto personalizado en 24h",
        personalInfo: "Información Personal",
        firstName: "Nombre",
        firstNamePlaceholder: "Tu nombre",
        lastName: "Apellido",
        lastNamePlaceholder: "Tu apellido",
        email: "Email",
        emailPlaceholder: "tu@email.com",
        phone: "Teléfono",
        phonePlaceholder: "06 12 34 56 78",
        company: "Empresa (opcional)",
        companyPlaceholder: "Nombre de tu empresa",
        vehicleRequirements: "Requisitos del Vehículo",
        vehicleType: "Tipo de vehículo deseado",
        vehicleTypePlaceholder: "Selecciona un tipo",
        capacity: "Capacidad deseada",
        capacityPlaceholder: "Número de caballos",
        budget: "Presupuesto estimado",
        budgetPlaceholder: "Selecciona tu presupuesto",
        usage: "Uso Previsto",
        usageType: "Tipo de uso",
        usageTypePlaceholder: "Personal, profesional...",
        annualKm: "Kilometraje anual estimado",
        annualKmPlaceholder: "Ej: 15.000 km/año",
        urgency: "Plazo deseado",
        urgencyPlaceholder: "¿Cuándo quieres comprar?",
        additionalInfo: "Información Adicional",
        message: "Mensaje (necesidades específicas, preguntas...)",
        messagePlaceholder: "Describe tus necesidades específicas, limitaciones particulares, equipos deseados...",
        submitButton: "Enviar mi Solicitud de Presupuesto",
        successMessage: "¡Tu solicitud ha sido enviada con éxito! Te contactaremos en 24h.",
        vehicleTypes: {
          truck: "Camión para Caballos",
          van: "Furgoneta para Caballos",
          trailer: "Remolque para Caballos",
          other: "Otro / Asesoramiento"
        },
        capacities: {
          oneHorse: "1 caballo",
          twoHorses: "2 caballos",
          threeHorses: "3 caballos",
          fourHorses: "4 caballos",
          fiveHorses: "5 caballos",
          sixPlusHorses: "6+ caballos"
        },
        budgetRanges: {
          under30k: "Menos de 30.000€",
          range30k50k: "30.000€ - 50.000€",
          range50k80k: "50.000€ - 80.000€",
          range80k120k: "80.000€ - 120.000€",
          over120k: "Más de 120.000€"
        },
        usageTypes: {
          personal: "Uso personal",
          professional: "Uso profesional",
          mixed: "Uso mixto"
        },
        urgencyOptions: {
          immediate: "Inmediato (en el mes)",
          month: "En 1 a 3 meses",
          threeMonths: "En 3 a 6 meses",
          sixMonths: "En 6 meses a 1 año",
          noUrgency: "Sin urgencia particular"
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
      occasions: "Gebrauchtfahrzeuge"
    },
    hero: {
      slide1: {
        subtitle: "Premium Pferdetransport",
        title: "Professionelle Pferdetransporter",
        description: "Entdecken Sie unsere Auswahl an hochwertigen Lastwagen für den Transport Ihrer Pferde. Komfort, Sicherheit und Zuverlässigkeit garantiert."
      },
      slide2: {
        subtitle: "Kompakte Lösungen",
        title: "Pferde-Vans der neuesten Generation",
        description: "Perfekt für 1 bis 3 Pferde, unsere Vans kombinieren Wendigkeit und modernste Ausstattung für Ihre täglichen Fahrten."
      },
      slide3: {
        subtitle: "Wirtschaftlich und praktisch",
        title: "Zertifizierte Pferdeanhänger",
        description: "Die wirtschaftliche Alternative für den Pferdetransport. Große Auswahl an neuen und gebrauchten Anhängern, alle geprüft."
      },
      slide4: {
        subtitle: "Geprüfte Fahrzeuge",
        title: "Sorgfältig Ausgewählte Gebrauchtfahrzeuge",
        description: "Gebrauchtfahrzeuge rigoros ausgewählt und geprüft. Garantie, Finanzierung und Lieferung in ganz Frankreich."
      },
      slide5: {
        subtitle: "15 Jahre Erfahrung",
        title: "Ihr Partner für Pferdetransport",
        description: "HTG unterstützt Sie seit 15 Jahren bei all Ihren Projekten. Persönliche Beratung und außergewöhnlicher Kundenservice."
      },
      cta: "Unsere Fahrzeuge entdecken"
    },
    categories: {
      title: "Wählen Sie Ihr",
      subtitle: "Ideales Fahrzeug",
      horseTrucks: {
        title: "Pferdetransporter",
        description: "Professionelle Lösungen für 2 bis 8 Pferde. Maximaler Komfort und hochwertige Ausstattung.",
        features: ["Luftfederung", "Kabinen-Klimaanlage", "Rutschfester Boden"],
        from: "Ab 65.000€",
        explore: "LKWs entdecken"
      },
      horseVans: {
        title: "Pferde-Vans",
        description: "Perfekt für 1 bis 3 Pferde. Wendig, wirtschaftlich und sehr gut ausgestattet.",
        features: ["Einfaches Fahren", "Reduzierter Verbrauch", "Modularität"],
        from: "Ab 35.000€",
        explore: "Vans entdecken"
      },
      horseTrailers: {
        title: "Pferdeanhänger",
        description: "Wirtschaftliche Lösung für 1 bis 3 Pferde. Qualität und Sicherheit garantiert.",
        features: ["Leicht und robust", "Einfache Kupplung", "Attraktiver Preis"],
        from: "Ab 18.000€",
        explore: "Anhänger entdecken"
      },
      ctaTitle: "Eine Frage? Ein Projekt?",
      ctaDescription: "Unsere Experten beraten Sie kostenlos, um das perfekte Fahrzeug für Ihre Bedürfnisse zu finden.",
      getFreeQuote: "Kostenloses Angebot",
      makeAppointment: "Termin vereinbaren",
      specialties: "Unsere Spezialitäten",
      findPerfectVehicle: "Das Perfekte Fahrzeug Finden",
      disciplineDescription: "Für Jede Reitsportdisziplin"
    },
    trust: {
      badge: "Warum uns wählen",
      title: "HTG, Ihr vertrauensvoller",
      subtitle: "Partner",
      description: "15 Jahre Erfahrung im Pferdetransport. Mehr als 2500 Kunden vertrauen uns für ihre Leidenschaft.",
      stats: {
        experience: "15 Jahre Erfahrung",
        clients: "2500+ zufriedene Kunden",
        satisfaction: "98% Zufriedenheit",
        response: "Antwort innerhalb 24h"
      },
      reviewsTitle: "Was unsere Kunden sagen",
      reviewsDescription: "Entdecken Sie Erfahrungsberichte von Enthusiasten, die uns vertrauen",
      leaveReview: "Eine Bewertung hinterlassen",
      partnersTitle: "Unsere vertrauenswürdigen Partner",
      partnersDescription: "Wir arbeiten mit den besten Marken der Branche",
      getQuote: "Ein Angebot anfordern",
      partners: [
        { name: "Peugeot", logo: "/placeholder.svg", description: "Offizieller Partner" },
        { name: "Iveco", logo: "/placeholder.svg", description: "Autorisierter Händler" },
        { name: "Mercedes", logo: "/placeholder.svg", description: "Servicezentrum" }
      ],
      reviews: [
        {
          name: "Sarah Martin",
          role: "Professionelle Reiterin",
          content: "Außergewöhnlicher Service! Mein Van ist perfekt für meine Wettkämpfe. Das HTG-Team verstand meine spezifischen Bedürfnisse.",
          rating: 5,
          image: "/placeholder.svg"
        },
        {
          name: "Pierre Dubois",
          role: "Reitzentrum",
          content: "LKW pünktlich mit aller angeforderten Ausrüstung geliefert. Qualität wie erwartet, ich empfehle sehr!",
          rating: 5,
          image: "/placeholder.svg"
        },
        {
          name: "Marie Leroy",
          role: "Pferdebesitzerin",
          content: "Ausgezeichnete Beratung für den Kauf meines Anhängers. Transparenter Preis und tadellose Nachbetreuung.",
          rating: 5,
          image: "/placeholder.svg"
        }
      ]
    },
    offres: {
      badge: "Unsere Angebote",
      title: "Premium Fahrzeuge",
      subtitle: "Für Sie Ausgewählt",
      description: "Entdecken Sie unsere strenge Auswahl an neuen und gebrauchten Fahrzeugen. Jedes Fahrzeug wird von unseren Experten geprüft.",
      stats: {
        vehicles: "150+ Fahrzeuge",
        brands: "12 Marken",
        clients: "2500+ Kunden",
        years: "15 Jahre Erfahrung"
      },
      cta: {
        title: "Bereit, Ihr ideales Fahrzeug zu finden?",
        description: "Kontaktieren Sie unsere Experten für persönliche Beratung und ein kostenloses Angebot innerhalb von 24h.",
        primaryButton: "Ein Angebot anfordern",
        secondaryButton: "Alle Fahrzeuge ansehen"
      },
      features: {
        quality: {
          title: "Garantierte Qualität",
          description: "Alle unsere Fahrzeuge werden rigoros geprüft und zertifiziert"
        },
        expertise: {
          title: "Anerkannte Expertise",
          description: "15 Jahre Erfahrung im hochwertigen Pferdetransport"
        },
        service: {
          title: "Premium Service",
          description: "Persönliche Betreuung vom Kauf bis zur Lieferung"
        },
        guarantee: {
          title: "Erweiterte Garantie",
          description: "Herstellergarantie und Kundendienst inklusive"
        },
        financing: {
          title: "Einfache Finanzierung",
          description: "Finanzierungslösungen angepasst an Ihr Budget"
        },
        support: {
          title: "24/7 Support",
          description: "Team verfügbar, um alle Ihre Fragen zu beantworten"
        }
      },
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
      featuredVehicles: "Empfohlene Fahrzeuge",
      premiumSelection: "Premium Auswahl",
      ourBest: "Unsere Besten",
      offersVehicles: "Fahrzeugangebote",
      discoverSelection: "Die Auswahl Entdecken",
      rigorouslyControlled: "Streng Kontrolliert",
      models: "Modelle",
      specialOffers: "Sonderangebote",
      newArrivals2024: "Neuheiten 2024",
      bestseller: "Bestseller",
      mostRequested: "Am Meisten Angefragt",
      bestPrice: "Bester Preis",
      upTo15Off: "Bis zu -15%",
      receiveOffer24h: "Angebot innerhalb 24h erhalten",
      personalizedExchange: "Persönlicher Austausch",
      discoverCollection: "Die Kollektion Entdecken",
      moreEquipment: "Mehr Ausstattung",
      promotionalPrice: "Aktionspreis",
      financingAvailable: "Finanzierung verfügbar",
      discoverCharacteristics: "Eigenschaften entdecken",
      addToMySelection: "Zu meiner Auswahl hinzufügen",
      onlyXDaysLeft: "Nur noch X Tage",
      favorite: "Favorit"
    },
    trucksPage: {
      title: "Pferdetransporter",
      subtitle: "Professioneller Transport",
      description: "Entdecken Sie unser komplettes Sortiment an LKWs für den professionellen Pferdetransport. Von 2 bis 8 Pferden, alle Ausrüstungen inklusive.",
      filters: {
        allFilters: "Alle Filter",
        capacity: "Kapazität",
        price: "Preis",
        year: "Jahr",
        mileage: "Kilometerstand",
        found: "gefundene Fahrzeuge"
      },
      features: {
        comfort: {
          title: "Maximaler Komfort",
          description: "Geräumige Kabinen mit Schlafplatz, Klimaanlage und moderner Ausstattung"
        },
        safety: {
          title: "Erweiterte Sicherheit",
          description: "ABS-Bremssysteme, ESP und Luftfederung für Ihre Pferde"
        },
        equipment: {
          title: "Premium Ausstattung",
          description: "LED-Beleuchtung, Belüftung, Überwachungskameras und vieles mehr"
        }
      },
      cta: {
        title: "Brauchen Sie Beratung?",
        description: "Unsere Experten unterstützen Sie bei der Auswahl Ihres LKWs",
        button: "Uns kontaktieren"
      }
    },
    vansPage: {
      title: "Pferde-Vans",
      subtitle: "Vielseitigkeit und Praktikabilität",
      description: "Perfekt für 1 bis 3 Pferde, unsere Vans kombinieren Fahrkomfort und professionelle Ausstattung.",
      filters: {
        allFilters: "Alle Filter",
        capacity: "Kapazität",
        price: "Preis",
        year: "Jahr",
        mileage: "Kilometerstand",
        found: "gefundene Fahrzeuge"
      },
      features: {
        versatility: {
          title: "Vielseitigkeit",
          description: "Perfekt für den täglichen Gebrauch und gelegentlichen Transport"
        },
        efficiency: {
          title: "Effizienz",
          description: "Reduzierter Verbrauch und einfaches Parken"
        },
        comfort: {
          title: "Komfort",
          description: "Angepasste Federung und optimierte Belüftung für Ihre Pferde"
        }
      },
      cta: {
        title: "Fragen zu unseren Vans?",
        description: "Entdecken Sie das Modell, das Ihren Bedürfnissen entspricht",
        button: "Ein Angebot anfordern"
      }
    },
    trailersPage: {
      title: "Pferdeanhänger",
      subtitle: "Wirtschaftliche Lösung",
      description: "Qualitätsanhänger für 1 bis 3 Pferde. Wirtschaftliche Lösung ohne Kompromisse bei der Sicherheit.",
      filters: {
        allFilters: "Alle Filter",
        capacity: "Kapazität",
        price: "Preis",
        year: "Jahr",
        weight: "Gewicht",
        found: "gefundene Fahrzeuge"
      },
      features: {
        lightweight: {
          title: "Leichtgewicht",
          description: "Leichte Konstruktion für reduzierten Verbrauch"
        },
        maneuverability: {
          title: "Wendigkeit",
          description: "Einfache Kupplung und Manövrierung unter allen Umständen"
        },
        economy: {
          title: "Wirtschaftlichkeit",
          description: "Kontrollierte Investition mit ausgezeichnetem Preis-Leistungs-Verhältnis"
        }
      },
      cta: {
        title: "Welchen Anhänger wählen?",
        description: "Unsere Spezialisten beraten Sie entsprechend Ihrem Gebrauch",
        button: "Rückruf anfordern"
      }
    },
    occasionsPage: {
      title: "Gebrauchtfahrzeuge",
      subtitle: "Strenge Auswahl",
      description: "Entdecken Sie unsere kontrollierten und garantierten Gebrauchtfahrzeuge. Professionelle Qualität zu kontrollierten Preisen.",
      guarantees: {
        title: "Unsere Garantien",
        checked: "Geprüfte Fahrzeuge",
        warranty: "Garantie inklusive",
        maintenance: "Wartungshistorie",
        financing: "Finanzierung verfügbar"
      },
      filters: {
        allFilters: "Alle Filter",
        type: "Typ",
        brand: "Marke",
        year: "Jahr",
        price: "Preis",
        mileage: "Kilometerstand",
        found: "gefundene Fahrzeuge"
      },
      advantages: {
        price: {
          title: "Attraktive Preise",
          description: "Sparen Sie bis zu 40% gegenüber Neufahrzeugen"
        },
        quality: {
          title: "Kontrollierte Qualität",
          description: "Vollständige Inspektion durch unsere Experten vor dem Verkauf"
        },
        choice: {
          title: "Große Auswahl",
          description: "Mehr als 50 Gebrauchtfahrzeuge im permanenten Lager"
        }
      },
      cta: {
        title: "Ihr Gebrauchtfahrzeug finden",
        description: "Durchsuchen Sie unser komplettes Lager und reservieren Sie Ihr Fahrzeug",
        button: "Alle Gebrauchten ansehen"
      }
    },
    aboutPage: {
      hero: {
        badge: "Unsere Geschichte",
        title: "15 Jahre Leidenschaft",
        subtitle: "im Dienst des Pferdetransports",
        description: "Seit 2009 begleitet HTG Reitsportbegeisterte bei ihren Transportprojekten mit Expertise und Hingabe."
      },
      story: {
        title: "Unsere",
        subtitle: "Geschichte",
        description: "HTG entsteht aus der Leidenschaft seines Gründers für die Reitwelt und seinem Willen, außergewöhnliche Transportlösungen anzubieten. Seit 15 Jahren haben wir mehr als 2500 Kunden bei ihren Projekten begleitet.",
        founder: {
          name: "Jean-Michel Perrin",
          role: "Gründer & Direktor",
          quote: "Meine Vision war immer einfach: Reitsportbegeisterten die besten Transportfahrzeuge mit tadelloserem Service zu bieten."
        }
      },
      mission: {
        title: "Unsere",
        subtitle: "Werte",
        values: {
          excellence: {
            title: "Exzellenz",
            description: "Wir wählen rigoros jedes Fahrzeug aus, um höchste Qualität zu garantieren."
          },
          trust: {
            title: "Vertrauen",
            description: "Totale Transparenz in unseren Austauschen und unseren Tarifen. Ihre Zufriedenheit ist unsere Priorität."
          },
          innovation: {
            title: "Innovation",
            description: "Wir bleiben an der Spitze der Technologien, um Ihnen die modernsten Lösungen zu bieten."
          },
          service: {
            title: "Service",
            description: "Persönliche Betreuung von Ihrem Projekt bis zur Lieferung Ihres Fahrzeugs."
          }
        }
      },
      achievements: {
        title: "Unsere",
        subtitle: "Erfolge",
        stats: {
          experience: "15 Jahre Expertise",
          vehicles: "150+ Fahrzeuge im Lager",
          clients: "2500+ zufriedene Kunden",
          satisfaction: "98% Kundenzufriedenheit"
        }
      },
      team: {
        director: {
          role: "Direktor & Gründer",
          experience: "20 Jahre im Pferdetransport",
          speciality: "Experte für Premium-Pferdetransporter"
        },
        sales: {
          role: "Verkaufsleiter",
          experience: "12 Jahre bei HTG",
          speciality: "Spezialist für Transporter"
        },
        technical: {
          role: "Technischer Experte",
          experience: "15 Jahre spezialisierter Mechaniker",
          speciality: "Qualitätskontrolle"
        }
      },
      teamSection: {
        title1: "Unser",
        title2: " Team",
        subtitle: "Leidenschaftliche Experten zu Ihren Diensten"
      },
      cta: {
        title: "Bereit, unserer Expertise zu vertrauen?",
        description: "Entdecken Sie, warum mehr als 2500 Reitsport-Enthusiasten uns vertrauen.",
        button1: "Unsere Fahrzeuge ansehen",
        button2: "Termin vereinbaren"
      }
    },
    contactPage: {
      hero: {
        badge: "Kontakt",
        title: "Sprechen wir über Ihr",
        subtitle: "Transport-Projekt",
        description: "Unsere Experten begleiten Sie bei der Auswahl Ihres Pferdetransport-Fahrzeugs."
      },
      contactMethods: {
        title: "Wie Sie uns",
        subtitle: "Erreichen?",
        phone: {
          title: "Anrufen",
          subtitle: "Sofortige Antwort",
          description: "Unsere Experten antworten Montag bis Samstag",
          actionText: "Jetzt anrufen"
        },
        chat: {
          title: "Online-Chat",
          subtitle: "Sofortige Hilfe",
          description: "Stellen Sie Ihre Fragen in Echtzeit",
          actionText: "Jetzt chatten"
        },
        appointment: {
          title: "Termin",
          subtitle: "Persönliche Beratung",
          description: "Treffen Sie unsere Experten per Video oder im Showroom",
          actionText: "Jetzt planen"
        }
      },
      contactInfo: {
        title: "Praktische",
        subtitle: "Informationen",
        description: "Besuchen Sie uns in unserem Showroom oder kontaktieren Sie uns direkt.",
        address: {
          title: "Adresse",
          value: "Industriezone de la Forêt\n123 Rue des Chevaux\n45000 Orléans, Frankreich"
        },
        hours: {
          title: "Öffnungszeiten",
          weekdays: "Montag - Freitag: 8-18 Uhr",
          saturday: "Samstag: 9-17 Uhr",
          sunday: "Sonntag: Nach Termin"
        },
        phone: {
          title: "Telefon",
          value: "01 23 45 67 89"
        },
        email: {
          title: "E-Mail",
          value: "contact@htg-france.com"
        }
      },
      services: {
        title: "Express-Services",
        expertise: {
          title: "Fahrzeug-Expertise",
          description: "Vollständige technische Prüfung vor dem Kauf",
          duration: "Innerhalb 48h"
        },
        financing: {
          title: "Finanzierungssimulation",
          description: "Berechnen Sie Ihre monatlichen Raten in Echtzeit",
          duration: "Sofort"
        },
        advice: {
          title: "Persönliche Beratung",
          description: "Hilfe bei der Auswahl nach Ihren Bedürfnissen",
          duration: "30 Min"
        }
      },
      form: {
        title: "Kontaktanfrage",
        description: "Füllen Sie dieses Formular aus und erhalten Sie innerhalb von 24h eine persönliche Antwort.",
        firstName: "Vorname *",
        firstNamePlaceholder: "Ihr Vorname",
        lastName: "Nachname *",
        lastNamePlaceholder: "Ihr Nachname",
        email: "E-Mail *",
        emailPlaceholder: "ihre@email.com",
        phone: "Telefon",
        phonePlaceholder: "06 12 34 56 78",
        vehicleType: "Gesuchter Fahrzeugtyp",
        vehicleTypePlaceholder: "Typ auswählen",
        budget: "Geschätztes Budget",
        budgetPlaceholder: "Budget auswählen",
        message: "Nachricht *",
        messagePlaceholder: "Beschreiben Sie Ihr Projekt, Ihre spezifischen Bedürfnisse, die Anzahl der zu transportierenden Pferde...",
        responseTime: "Erhalten Sie Ihre persönliche Antwort in weniger als 24h",
        noCommitment: "Unverbindlich • Kostenlose Beratung",
        submitButton: "Meine Anfrage senden",
        vehicleTypes: {
          truck: "Pferdetransporter",
          van: "Pferde-Van",
          trailer: "Pferdeanhänger",
          other: "Andere / Beratung"
        },
        budgetRanges: {
          under30k: "Unter 30.000€",
          range30k50k: "30.000€ - 50.000€",
          range50k80k: "50.000€ - 80.000€",
          over80k: "Über 80.000€"
        }
      }
    },
    quoteRequestPage: {
      hero: {
        badge: "Angebotsanfrage",
        title: "Erhalten Sie Ihr",
        subtitle: "Kostenloses Persönliches Angebot",
        description: "Unsere Experten begleiten Sie bei der Auswahl Ihres Pferdetransport-Fahrzeugs. Antwort garantiert innerhalb 24h."
      },
      benefits: {
        response24h: {
          title: "Antwort Innerhalb 24h",
          description: "Ihr persönliches Angebot in Ihrem Postfach"
        },
        free: {
          title: "100% Kostenlos",
          description: "Keine Gebühren, keine Verpflichtung Ihrerseits"
        },
        transparent: {
          title: "Transparente Preise",
          description: "Alle Kosten inklusive, keine Überraschungen"
        },
        expert: {
          title: "Spezieller Experte",
          description: "Ein persönlicher Berater betreut Ihren Fall"
        }
      },
      vehicleTypes: {
        title: "Verfügbare Fahrzeugtypen",
        truck: {
          type: "Pferdetransporter",
          priceRange: "45.000€ - 120.000€",
          popular: "Am meisten angefragt",
          capacities: ["2 Pferde", "3 Pferde", "4 Pferde", "5 Pferde", "6+ Pferde"]
        },
        van: {
          type: "Pferde-Van",
          priceRange: "25.000€ - 85.000€",
          capacities: ["1 Pferd", "2 Pferde", "3 Pferde"]
        },
        trailer: {
          type: "Pferdeanhänger",
          priceRange: "15.000€ - 55.000€",
          capacities: ["1 Pferd", "2 Pferde", "3 Pferde"]
        }
      },
      form: {
        title: "Angebotsanfrage-Formular",
        description: "Füllen Sie dieses detaillierte Formular aus, um Ihr persönliches Angebot innerhalb von 24h zu erhalten",
        personalInfo: "Persönliche Informationen",
        firstName: "Vorname",
        firstNamePlaceholder: "Ihr Vorname",
        lastName: "Nachname",
        lastNamePlaceholder: "Ihr Nachname",
        email: "E-Mail",
        emailPlaceholder: "ihre@email.com",
        phone: "Telefon",
        phonePlaceholder: "06 12 34 56 78",
        company: "Unternehmen (optional)",
        companyPlaceholder: "Name Ihres Unternehmens",
        vehicleRequirements: "Fahrzeuganforderungen",
        vehicleType: "Gewünschter Fahrzeugtyp",
        vehicleTypePlaceholder: "Typ auswählen",
        capacity: "Gewünschte Kapazität",
        capacityPlaceholder: "Anzahl der Pferde",
        budget: "Geschätztes Budget",
        budgetPlaceholder: "Budget auswählen",
        usage: "Geplante Nutzung",
        usageType: "Art der Nutzung",
        usageTypePlaceholder: "Privat, beruflich...",
        annualKm: "Geschätzter Jahreskilometerstand",
        annualKmPlaceholder: "Z.B: 15.000 km/Jahr",
        urgency: "Gewünschter Zeitrahmen",
        urgencyPlaceholder: "Wann möchten Sie kaufen?",
        additionalInfo: "Zusätzliche Informationen",
        message: "Nachricht (spezifische Bedürfnisse, Fragen...)",
        messagePlaceholder: "Beschreiben Sie Ihre spezifischen Bedürfnisse, besondere Einschränkungen, gewünschte Ausstattung...",
        submitButton: "Meine Angebotsanfrage Senden",
        successMessage: "Ihre Anfrage wurde erfolgreich gesendet! Wir kontaktieren Sie innerhalb von 24h.",
        vehicleTypes: {
          truck: "Pferdetransporter",
          van: "Pferde-Van",
          trailer: "Pferdeanhänger",
          other: "Andere / Beratung"
        },
        capacities: {
          oneHorse: "1 Pferd",
          twoHorses: "2 Pferde",
          threeHorses: "3 Pferde",
          fourHorses: "4 Pferde",
          fiveHorses: "5 Pferde",
          sixPlusHorses: "6+ Pferde"
        },
        budgetRanges: {
          under30k: "Unter 30.000€",
          range30k50k: "30.000€ - 50.000€",
          range50k80k: "50.000€ - 80.000€",
          range80k120k: "80.000€ - 120.000€",
          over120k: "Über 120.000€"
        },
        usageTypes: {
          personal: "Private Nutzung",
          professional: "Berufliche Nutzung",
          mixed: "Gemischte Nutzung"
        },
        urgencyOptions: {
          immediate: "Sofort (innerhalb eines Monats)",
          month: "Innerhalb 1 bis 3 Monaten",
          threeMonths: "Innerhalb 3 bis 6 Monaten",
          sixMonths: "Innerhalb 6 Monaten bis 1 Jahr",
          noUrgency: "Keine besondere Eile"
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
