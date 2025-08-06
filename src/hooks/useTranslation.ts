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
    };
    horseVans: {
      title: string;
      description: string;
      features: string[];
      startingPrice: string;
    };
    horseTrailers: {
      title: string;
      description: string;
      features: string[];
      startingPrice: string;
    };
    cta: string;
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
        equipment: string;
        timeline: string;
        message: string;
      };
      noCommitment: string;
      placeholders: {
        firstName: string;
        lastName: string;
        email: string;
        phone: string;
        region: string;
        vehicleTypeSelect: string;
        horsesSelect: string;
        conditionSelect: string;
        budgetSelect: string;
        usageSelect: string;
        timelineSelect: string;
        message: string;
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
        description: "Des solutions pratiques et élégantes pour transporter 1 à 3 chevaux, idéales pour les sorties quotidiennes et les compétitions."
      },
      slide4: {
        subtitle: "Flexibilité Maximale",
        title: "Remorques Chevaux Professionnelles",
        description: "La solution économique pour tous types de transport équin, avec une grande variété de configurations disponibles."
      },
      cta: "Découvrir Nos Véhicules"
    },
    categories: {
      title: "Notre Gamme de Véhicules",
      subtitle: "Trouvez le véhicule parfait pour vos besoins de transport équin",
      horseTrucks: {
        title: "Camions Chevaux",
        description: "Pour le transport de 2 à 12 chevaux avec un confort optimal",
        features: ["Cabine couchette", "Suspension pneumatique", "Climat contrôlé"],
        startingPrice: "À partir de 45 000€"
      },
      horseVans: {
        title: "Vans Chevaux",
        description: "Polyvalents et maniables pour 1 à 3 chevaux",
        features: ["Facilité de conduite", "Économique", "Parking aisé"],
        startingPrice: "À partir de 25 000€"
      },
      horseTrailers: {
        title: "Remorques Chevaux",
        description: "La solution économique et flexible",
        features: ["Grand choix de tailles", "Excellent rapport qualité-prix", "Facilité d'entretien"],
        startingPrice: "À partir de 15 000€"
      },
      cta: "Voir Plus de Détails"
    },
    offers: {
      title: "Nos Offres & Services",
      subtitle: "Des solutions complètes pour tous vos besoins",
      newVehicles: {
        title: "Véhicules Neufs",
        description: "Les derniers modèles avec garantie constructeur",
        benefits: ["Garantie étendue", "Financement facilité", "Configuration sur mesure"]
      },
      usedVehicles: {
        title: "Véhicules d'Occasion",
        description: "Des véhicules sélectionnés et révisés",
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
      title: "Contactez-Nous",
      subtitle: "Notre équipe d'experts est à votre disposition",
      info: {
        phone: "+33 1 23 45 67 89",
        email: "contact@htg-france.com",
        address: "123 Route des Chevaux, 75000 Paris",
        hours: "Lun-Ven: 8h-18h, Sam: 9h-17h"
      },
      form: {
        title: "Envoyez-nous un Message",
        subtitle: "Nous vous répondrons dans les plus brefs délais",
        fields: {
          firstName: "Prénom",
          lastName: "Nom",
          email: "Email",
          phone: "Téléphone",
          subject: "Sujet",
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
        title: "À Propos de HTG France",
        subtitle: "Votre Partenaire de Confiance",
        description: "Depuis plus de 30 ans, HTG France accompagne les professionnels et passionnés du monde équin avec des solutions de transport adaptées à tous les besoins."
      },
      story: {
        title: "Notre Histoire",
        description: "Fondée en 1990, HTG France est née de la passion pour l'équitation et de l'expertise technique. Nous avons su évoluer avec les besoins du marché tout en conservant nos valeurs d'origine : qualité, proximité et service."
      },
      values: {
        title: "Nos Valeurs",
        expertise: {
          title: "Expertise",
          description: "Plus de 30 ans d'expérience dans le transport équin"
        },
        quality: {
          title: "Qualité",
          description: "Sélection rigoureuse des meilleures marques et équipements"
        },
        service: {
          title: "Service",
          description: "Accompagnement personnalisé de l'achat à l'après-vente"
        }
      },
      team: {
        title: "Notre Équipe",
        description: "Une équipe passionnée de professionnels à votre service pour vous conseiller et vous accompagner dans votre projet."
      }
    },
    common: {
      learnMore: "En Savoir Plus",
      getQuote: "Demander un Devis",
      contact: "Nous Contacter",
      phone: "Téléphone",
      email: "Email",
      address: "Adresse",
      readMore: "Lire Plus",
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
      submit: "Valider",
      cancel: "Annuler",
      save: "Enregistrer",
      delete: "Supprimer",
      edit: "Modifier",
      add: "Ajouter",
      search: "Rechercher",
      filter: "Filtrer",
      sort: "Trier",
      all: "Tout",
      none: "Aucun",
      select: "Sélectionner",
      clear: "Effacer",
      apply: "Appliquer",
      reset: "Réinitialiser",
      confirm: "Confirmer",
      yes: "Oui",
      no: "Non",
      ok: "OK"
    },
    occasions: {
      hero: {
        title: "Véhicules d'Occasion",
        subtitle: "Trouvez Votre Véhicule Idéal",
        description: "Découvrez notre sélection de véhicules d'occasion révisés et garantis pour transporter vos chevaux en toute confiance."
      },
      filters: {
        title: "Filtres",
        type: "Type de véhicule",
        price: "Prix",
        year: "Année",
        mileage: "Kilométrage",
        fuel: "Carburant",
        transmission: "Transmission",
        apply: "Appliquer",
        reset: "Réinitialiser"
      },
      listing: {
        noResults: "Aucun véhicule ne correspond à vos critères",
        priceFrom: "À partir de",
        year: "Année",
        mileage: "Kilométrage",
        fuel: "Carburant",
        transmission: "Transmission",
        viewDetails: "Voir les détails",
        contact: "Nous contacter"
      }
    },
    horseTrucks: {
      hero: {
        title: "Camions Chevaux",
        subtitle: "Transport Professionnel",
        description: "Nos camions chevaux offrent le summum du confort et de la sécurité pour le transport de vos équidés, avec des capacités de 2 à 12 chevaux."
      },
      features: {
        title: "Caractéristiques Premium",
        capacity: {
          title: "Grande Capacité",
          description: "Transport de 2 à 12 chevaux selon le modèle choisi"
        },
        comfort: {
          title: "Confort Optimal",
          description: "Cabine couchette et espaces de vie intégrés"
        },
        safety: {
          title: "Sécurité Maximale",
          description: "Équipements de sécurité dernière génération"
        },
        technology: {
          title: "Technologies Avancées",
          description: "Suspension pneumatique et contrôle climatique"
        }
      },
      models: {
        title: "Nos Modèles",
        subtitle: "Une gamme adaptée à tous vos besoins"
      }
    },
    horseVans: {
      hero: {
        title: "Vans Chevaux",
        subtitle: "Polyvalence et Maniabilité",
        description: "Nos vans chevaux combinent facilité de conduite et fonctionnalité pour le transport de 1 à 3 chevaux en toute simplicité."
      },
      features: {
        title: "Avantages Uniques",
        maneuverability: {
          title: "Maniabilité",
          description: "Facilité de conduite comparable à un utilitaire"
        },
        versatility: {
          title: "Polyvalence",
          description: "Idéal pour sorties quotidiennes et compétitions"
        },
        economy: {
          title: "Économie",
          description: "Consommation réduite et coûts d'entretien maîtrisés"
        },
        equipment: {
          title: "Équipement",
          description: "Tous les équipements nécessaires inclus"
        }
      },
      models: {
        title: "Nos Modèles",
        subtitle: "De 1 à 3 chevaux, trouvez votre solution"
      }
    },
    horseTrailers: {
      hero: {
        title: "Remorques Chevaux",
        subtitle: "Flexibilité et Économie",
        description: "Nos remorques chevaux offrent une solution économique et flexible pour tous types de transport équin."
      },
      features: {
        title: "Points Forts",
        flexibility: {
          title: "Flexibilité",
          description: "Utilisable avec différents véhicules tracteurs"
        },
        capacity: {
          title: "Capacité Modulable",
          description: "De 1 à 6 chevaux selon vos besoins"
        },
        durability: {
          title: "Robustesse",
          description: "Construction solide pour une longue durée de vie"
        },
        value: {
          title: "Rapport Qualité-Prix",
          description: "La solution la plus économique du marché"
        }
      },
      models: {
        title: "Nos Modèles",
        subtitle: "De la remorque simple à la remorque luxe"
      }
    },
    quotePage: {
      benefits: {
        response24h: { title: "Réponse 24h", description: "Réponse d'expert sous 24h maximum" },
        free: { title: "100% Gratuit", description: "Aucun frais, aucun engagement de votre part" },
        expertise: { title: "Prix Transparent", description: "Tous les coûts inclus, aucune surprise" },
        dedicated: { title: "Expert Dédié", description: "Un conseiller personnel suit votre dossier" }
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
        sixPlusHorses: "6 chevaux et +"
      },
      priceRanges: {
        truck: "45 000€ - 120 000€",
        van: "25 000€ - 85 000€",
        trailer: "15 000€ - 55 000€"
      },
      vehicleSelection: {
        title: "Quel Type de Véhicule Recherchez-vous ?",
        subtitle: "Sélectionnez votre catégorie pour un devis encore plus précis",
        popular: "Plus demandé",
        capacitiesAvailable: "Capacités disponibles :"
      },
      hero: {
        badge: "Devis Gratuit",
        title1: "Obtenez Votre Devis",
        title2: "en Moins de 24h",
        description: "Obtenez un devis personnalisé pour votre véhicule de transport équin. Notre expert analyse vos besoins et vous propose la solution parfaite."
      },
      form: {
        title: "Formulaire de Demande de Devis",
        subtitle: "Plus vous nous donnez d'informations, plus votre devis sera précis et adapté",
        personalInfo: "📋 Vos Informations",
        vehicleRequirements: "🚗 Votre Véhicule Idéal",
        usageFeatures: "🎯 Utilisation & Équipements",
        additionalInfo: "💬 Informations Complémentaires",
        fields: {
          firstName: "Prénom",
          lastName: "Nom",
          email: "Email",
          phone: "Téléphone",
          region: "Région",
          vehicleType: "Type de véhicule",
          horsesNumber: "Nombre de chevaux à transporter",
          condition: "État souhaité",
          budget: "Budget approximatif",
          usage: "Utilisation principale",
          equipment: "Équipements souhaités",
          timeline: "Délai souhaité pour l'achat",
          message: "Message complémentaire"
        },
        noCommitment: "Sans engagement",
        placeholders: {
          firstName: "Votre prénom",
          lastName: "Votre nom",
          email: "votre@email.com",
          phone: "06 12 34 56 78",
          region: "Votre région (pour optimiser la livraison)",
          vehicleTypeSelect: "Choisissez le type",
          horsesSelect: "Sélectionnez",
          conditionSelect: "Neuf ou occasion ?",
          budgetSelect: "Votre fourchette de prix",
          usageSelect: "Comment allez-vous utiliser le véhicule ?",
          timelineSelect: "Quand souhaitez-vous acquérir votre véhicule ?",
          message: "Décrivez-nous vos besoins spécifiques, contraintes particulières, questions sur le financement, etc."
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
        startingPrice: "From €45,000"
      },
      horseVans: {
        title: "Horse Vans",
        description: "Versatile and maneuverable for 1 to 3 horses",
        features: ["Easy to drive", "Economical", "Easy parking"],
        startingPrice: "From €25,000"
      },
      horseTrailers: {
        title: "Horse Trailers",
        description: "The economical and flexible solution",
        features: ["Wide choice of sizes", "Excellent value for money", "Easy maintenance"],
        startingPrice: "From €15,000"
      },
      cta: "See More Details"
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
        title: "About HTG France",
        subtitle: "Your Trusted Partner",
        description: "For over 30 years, HTG France has been supporting professionals and enthusiasts of the equestrian world with transport solutions adapted to all needs."
      },
      story: {
        title: "Our Story",
        description: "Founded in 1990, HTG France was born from a passion for riding and technical expertise. We have evolved with market needs while maintaining our original values: quality, proximity and service."
      },
      values: {
        title: "Our Values",
        expertise: {
          title: "Expertise",
          description: "Over 30 years of experience in equine transport"
        },
        quality: {
          title: "Quality",
          description: "Rigorous selection of the best brands and equipment"
        },
        service: {
          title: "Service",
          description: "Personalized support from purchase to after-sales"
        }
      },
      team: {
        title: "Our Team",
        description: "A passionate team of professionals at your service to advise and support you in your project."
      }
    },
    common: {
      learnMore: "Learn More",
      getQuote: "Get Quote",
      contact: "Contact Us",
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
      ok: "OK"
    },
    occasions: {
      hero: {
        title: "Used Vehicles",
        subtitle: "Find Your Ideal Vehicle",
        description: "Discover our selection of used vehicles serviced and guaranteed to transport your horses with confidence."
      },
      filters: {
        title: "Filters",
        type: "Vehicle type",
        price: "Price",
        year: "Year",
        mileage: "Mileage",
        fuel: "Fuel",
        transmission: "Transmission",
        apply: "Apply",
        reset: "Reset"
      },
      listing: {
        noResults: "No vehicle matches your criteria",
        priceFrom: "From",
        year: "Year",
        mileage: "Mileage",
        fuel: "Fuel",
        transmission: "Transmission",
        viewDetails: "View details",
        contact: "Contact us"
      }
    },
    horseTrucks: {
      hero: {
        title: "Horse Trucks",
        subtitle: "Professional Transport",
        description: "Our horse trucks offer the ultimate in comfort and safety for transporting your horses, with capacities from 2 to 12 horses."
      },
      features: {
        title: "Premium Features",
        capacity: {
          title: "Large Capacity",
          description: "Transport from 2 to 12 horses depending on the chosen model"
        },
        comfort: {
          title: "Optimal Comfort",
          description: "Sleeper cabin and integrated living spaces"
        },
        safety: {
          title: "Maximum Safety",
          description: "Latest generation safety equipment"
        },
        technology: {
          title: "Advanced Technologies",
          description: "Air suspension and climate control"
        }
      },
      models: {
        title: "Our Models",
        subtitle: "A range adapted to all your needs"
      }
    },
    horseVans: {
      hero: {
        title: "Horse Vans",
        subtitle: "Versatility and Maneuverability",
        description: "Our horse vans combine ease of driving and functionality for transporting 1 to 3 horses with simplicity."
      },
      features: {
        title: "Unique Advantages",
        maneuverability: {
          title: "Maneuverability",
          description: "Driving ease comparable to a utility vehicle"
        },
        versatility: {
          title: "Versatility",
          description: "Ideal for daily outings and competitions"
        },
        economy: {
          title: "Economy",
          description: "Reduced consumption and controlled maintenance costs"
        },
        equipment: {
          title: "Equipment",
          description: "All necessary equipment included"
        }
      },
      models: {
        title: "Our Models",
        subtitle: "From 1 to 3 horses, find your solution"
      }
    },
    horseTrailers: {
      hero: {
        title: "Horse Trailers",
        subtitle: "Flexibility and Economy",
        description: "Our horse trailers offer an economical and flexible solution for all types of equine transport."
      },
      features: {
        title: "Strengths",
        flexibility: {
          title: "Flexibility",
          description: "Usable with different towing vehicles"
        },
        capacity: {
          title: "Modular Capacity",
          description: "From 1 to 6 horses according to your needs"
        },
        durability: {
          title: "Robustness",
          description: "Solid construction for a long lifespan"
        },
        value: {
          title: "Value for Money",
          description: "The most economical solution on the market"
        }
      },
      models: {
        title: "Our Models",
        subtitle: "From simple trailer to luxury trailer"
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
    quotePage: {
      benefits: {
        response24h: { title: "Respuesta 24h", description: "Respuesta experta en máximo 24 horas" },
        free: { title: "100% Gratuito", description: "Sin tarifas, sin compromiso de su parte" },
        expertise: { title: "Precio Transparente", description: "Todos los costos incluidos, sin sorpresas" },
        dedicated: { title: "Experto Dedicado", description: "Un asesor personal sigue su expediente" }
      },
      vehicleTypes: {
        truck: "Camión para Caballos",
        van: "Furgoneta para Caballos",
        trailer: "Remolque para Caballos"
      },
      capacities: {
        oneHorse: "1 caballo",
        twoHorses: "2 caballos",
        threeHorses: "3 caballos",
        fourHorses: "4 caballos",
        fiveHorses: "5 caballos",
        sixPlusHorses: "6 caballos y más"
      },
      priceRanges: {
        truck: "€45.000 - €120.000",
        van: "€25.000 - €85.000",
        trailer: "€15.000 - €55.000"
      },
      vehicleSelection: {
        title: "¿Qué Tipo de Vehículo Busca?",
        subtitle: "Seleccione su categoría para un presupuesto aún más preciso",
        popular: "Más popular",
        capacitiesAvailable: "Capacidades disponibles:"
      },
      hero: {
        badge: "Presupuesto Gratuito",
        title1: "Obtenga Su Presupuesto",
        title2: "en Menos de 24h",
        description: "Obtenga un presupuesto personalizado para su vehículo de transporte equino. Nuestro experto analiza sus necesidades y le ofrece la solución perfecta."
      },
      form: {
        title: "Formulario de Solicitud de Presupuesto",
        subtitle: "Cuanta más información nos proporcione, más preciso y adaptado será su presupuesto",
        personalInfo: "📋 Su Información",
        vehicleRequirements: "🚗 Su Vehículo Ideal",
        usageFeatures: "🎯 Uso y Equipamiento",
        additionalInfo: "💬 Información Adicional",
        fields: {
          firstName: "Nombre",
          lastName: "Apellido",
          email: "Email",
          phone: "Teléfono",
          region: "Región",
          vehicleType: "Tipo de vehículo",
          horsesNumber: "Número de caballos a transportar",
          condition: "Estado deseado",
          budget: "Presupuesto aproximado",
          usage: "Uso principal",
          equipment: "Equipamiento deseado",
          timeline: "Plazo deseado para la compra",
          message: "Mensaje adicional"
        },
        noCommitment: "Sin compromiso",
        placeholders: {
          firstName: "Su nombre",
          lastName: "Su apellido",
          email: "su@email.com",
          phone: "06 12 34 56 78",
          region: "Su región (para optimizar la entrega)",
          vehicleTypeSelect: "Elija el tipo",
          horsesSelect: "Seleccione",
          conditionSelect: "¿Nuevo o usado?",
          budgetSelect: "Su rango de precios",
          usageSelect: "¿Cómo va a usar el vehículo?",
          timelineSelect: "¿Cuándo desea adquirir su vehículo?",
          message: "Describa sus necesidades específicas, limitaciones particulares, preguntas sobre financiación, etc."
        },
        options: {
          vehicleTypes: {
            truck: "Camión para Caballos",
            van: "Furgoneta para Caballos",
            trailer: "Remolque para Caballos",
            unsure: "Aún no lo sé"
          },
          horsesNumber: {
            one: "1 caballo",
            two: "2 caballos",
            three: "3 caballos",
            four: "4 caballos",
            five: "5 caballos",
            sixPlus: "6 caballos y más"
          },
          condition: {
            new: "Solo nuevo",
            used: "Usado aceptado",
            indifferent: "Indiferente"
          },
          budget: {
            under30k: "Menos de €30.000",
            range30to50k: "€30.000 - €50.000",
            range50to80k: "€50.000 - €80.000",
            range80to120k: "€80.000 - €120.000",
            over120k: "Más de €120.000",
            noBudget: "Sin presupuesto definido"
          },
          usage: {
            leisure: "Ocio / Paseos",
            competition: "Competición",
            professional: "Uso profesional",
            mixed: "Uso mixto"
          },
          timeline: {
            immediate: "Inmediatamente",
            oneToThreeMonths: "En 1 a 3 meses",
            threeToSixMonths: "En 3 a 6 meses",
            sixToTwelveMonths: "En 6 meses a 1 año",
            overOneYear: "Más de 1 año",
            information: "Simple solicitud de información"
          }
        },
        equipment: [
          "Suspensión neumática",
          "Aire acondicionado",
          "Cámara de marcha atrás",
          "Transmisión automática",
          "Cabina cama",
          "Iluminación LED",
          "Suelo de goma",
          "Ventilación para caballos",
          "Kit manos libres"
        ],
        submitSection: {
          title: "🎉 ¡Vamos!",
          description: "Al enviar este formulario, recibirá su presupuesto personalizado en un máximo de 24 horas. Un experto de HTG también se pondrá en contacto con usted para afinar su solicitud.",
          button: "Obtener Mi Presupuesto Gratuito",
          disclaimer: "* Sin compromiso • Respuesta garantizada en 24h • Servicio 100% gratuito"
        }
      }
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
        startingPrice: "Desde €45.000"
      },
      horseVans: {
        title: "Furgonetas para Caballos",
        description: "Versátiles y maniobrables para 1 a 3 caballos",
        features: ["Fácil de conducir", "Económico", "Estacionamiento fácil"],
        startingPrice: "Desde €25.000"
      },
      horseTrailers: {
        title: "Remolques para Caballos",
        description: "La solución económica y flexible",
        features: ["Gran variedad de tamaños", "Excelente relación calidad-precio", "Fácil mantenimiento"],
        startingPrice: "Desde €15.000"
      },
      cta: "Ver Más Detalles"
    },
    offers: {
      title: "Nuestras Ofertas y Servicios",
      subtitle: "Soluciones completas para todas sus necesidades",
      newVehicles: {
        title: "Vehículos Nuevos",
        description: "Los últimos modelos con garantía del fabricante",
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
          description: "Construcción sólida para una larga vida útil"
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
    quotePage: {
      benefits: {
        response24h: { title: "24h Antwort", description: "Expertenantwort innerhalb von maximal 24 Stunden" },
        free: { title: "100% Kostenlos", description: "Keine Gebühren, keine Verpflichtung Ihrerseits" },
        expertise: { title: "Transparenter Preis", description: "Alle Kosten inklusive, keine Überraschungen" },
        dedicated: { title: "Spezialisierter Experte", description: "Ein persönlicher Berater betreut Ihre Akte" }
      },
      vehicleTypes: {
        truck: "Pferdetransporter",
        van: "Pferde-Van",
        trailer: "Pferdeanhänger"
      },
      capacities: {
        oneHorse: "1 Pferd",
        twoHorses: "2 Pferde",
        threeHorses: "3 Pferde",
        fourHorses: "4 Pferde",
        fiveHorses: "5 Pferde",
        sixPlusHorses: "6 Pferde und mehr"
      },
      priceRanges: {
        truck: "€45.000 - €120.000",
        van: "€25.000 - €85.000",
        trailer: "€15.000 - €55.000"
      },
      vehicleSelection: {
        title: "Welche Art von Fahrzeug suchen Sie?",
        subtitle: "Wählen Sie Ihre Kategorie für ein noch präziseres Angebot",
        popular: "Am beliebtesten",
        capacitiesAvailable: "Verfügbare Kapazitäten:"
      },
      hero: {
        badge: "Kostenloses Angebot",
        title1: "Holen Sie Sich Ihr Angebot",
        title2: "in weniger als 24h",
        description: "Erhalten Sie ein personalisiertes Angebot für Ihr Pferdetransportfahrzeug. Unser Experte analysiert Ihre Bedürfnisse und bietet Ihnen die perfekte Lösung."
      },
      form: {
        title: "Angebots-Anfrageformular",
        subtitle: "Je mehr Informationen Sie uns geben, desto präziser und maßgeschneiderter wird Ihr Angebot",
        personalInfo: "📋 Ihre Informationen",
        vehicleRequirements: "🚗 Ihr Idealfahrzeug",
        usageFeatures: "🎯 Nutzung & Ausstattung",
        additionalInfo: "💬 Zusätzliche Informationen",
        fields: {
          firstName: "Vorname",
          lastName: "Nachname",
          email: "E-Mail",
          phone: "Telefon",
          region: "Region",
          vehicleType: "Fahrzeugtyp",
          horsesNumber: "Anzahl der zu transportierenden Pferde",
          condition: "Gewünschter Zustand",
          budget: "Ungefähres Budget",
          usage: "Hauptverwendung",
          equipment: "Gewünschte Ausstattung",
          timeline: "Gewünschter Zeitrahmen für den Kauf",
          message: "Zusätzliche Nachricht"
        },
        noCommitment: "Unverbindlich",
        placeholders: {
          firstName: "Ihr Vorname",
          lastName: "Ihr Nachname",
          email: "ihre@email.com",
          phone: "06 12 34 56 78",
          region: "Ihre Region (zur Optimierung der Lieferung)",
          vehicleTypeSelect: "Typ wählen",
          horsesSelect: "Auswählen",
          conditionSelect: "Neu oder gebraucht?",
          budgetSelect: "Ihre Preisspanne",
          usageSelect: "Wie werden Sie das Fahrzeug nutzen?",
          timelineSelect: "Wann möchten Sie Ihr Fahrzeug erwerben?",
          message: "Beschreiben Sie Ihre spezifischen Bedürfnisse, besonderen Einschränkungen, Finanzierungsfragen, usw."
        },
        options: {
          vehicleTypes: {
            truck: "Pferdetransporter",
            van: "Pferde-Van",
            trailer: "Pferdeanhänger",
            unsure: "Ich weiß noch nicht"
          },
          horsesNumber: {
            one: "1 Pferd",
            two: "2 Pferde",
            three: "3 Pferde",
            four: "4 Pferde",
            five: "5 Pferde",
            sixPlus: "6 Pferde und mehr"
          },
          condition: {
            new: "Nur neu",
            used: "Gebraucht akzeptiert",
            indifferent: "Gleichgültig"
          },
          budget: {
            under30k: "Weniger als €30.000",
            range30to50k: "€30.000 - €50.000",
            range50to80k: "€50.000 - €80.000",
            range80to120k: "€80.000 - €120.000",
            over120k: "Mehr als €120.000",
            noBudget: "Kein definiertes Budget"
          },
          usage: {
            leisure: "Freizeit / Ausritte",
            competition: "Wettkampf",
            professional: "Professionelle Nutzung",
            mixed: "Gemischte Nutzung"
          },
          timeline: {
            immediate: "Sofort",
            oneToThreeMonths: "In 1 bis 3 Monaten",
            threeToSixMonths: "In 3 bis 6 Monaten",
            sixToTwelveMonths: "In 6 Monaten bis 1 Jahr",
            overOneYear: "Mehr als 1 Jahr",
            information: "Einfache Informationsanfrage"
          }
        },
        equipment: [
          "Luftfederung",
          "Klimaanlage",
          "Rückfahrkamera",
          "Automatikgetriebe",
          "Schlafkabine",
          "LED-Beleuchtung",
          "Gummiboden",
          "Pferdelüftung",
          "Freisprechanlage"
        ],
        submitSection: {
          title: "🎉 Los geht's!",
          description: "Durch das Absenden dieses Formulars erhalten Sie Ihr persönliches Angebot innerhalb von maximal 24 Stunden. Ein HTG-Experte wird sich auch mit Ihnen in Verbindung setzen, um Ihre Anfrage zu verfeinern.",
          button: "Mein kostenloses Angebot erhalten",
          disclaimer: "* Keine Verpflichtung • Antwort garantiert innerhalb von 24h • 100% kostenloser Service"
        }
      }
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
        startingPrice: "Ab €45.000"
      },
      horseVans: {
        title: "Pferde-Vans",
        description: "Vielseitig und wendig für 1 bis 3 Pferde",
        features: ["Einfach zu fahren", "Wirtschaftlich", "Einfaches Parken"],
        startingPrice: "Ab €25.000"
      },
      horseTrailers: {
        title: "Pferdeanhänger",
        description: "Die wirtschaftliche und flexible Lösung",
        features: ["Große Auswahl an Größen", "Ausgezeichnetes Preis-Leistungs-Verhältnis", "Einfache Wartung"],
        startingPrice: "Ab €15.000"
      },
      cta: "Mehr Details Anzeigen"
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
