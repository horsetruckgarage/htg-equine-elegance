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
    stats: { experience: string; clients: string; satisfaction: string; response: string; };
    reviewsTitle: string;
    reviewsDescription: string;
    leaveReview: string;
    partnersTitle: string;
    partnersDescription: string;
    getQuote: string;
    partners: Array<{ name: string; logo: string; description: string; }>;
    reviews: Array<{ id: number; name: string; location: string; rating: number; text: string; vehicleType: string; date: string; verified: boolean; }>;
  };

  quoteRequest: {
    hero: {
      badge: string;
      title: string;
      subtitle: string;
      description: string;
      trustIndicators: { free: string; response24h: string; noCommitment: string; };
    };
    benefits: {
      response24h: { title: string; description: string; };
      free: { title: string; description: string; };
      transparent: { title: string; description: string; };
      expert: { title: string; description: string; };
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
  contactPage: { [key: string]: any; };
  vansPage: { [key: string]: any; };
  
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
      subtitle: "depuis 2008",
      description: "Horse Truck Garage, votre spécialiste français du transport équestre.",
      stats: { experience: "15+ ans d'expérience", clients: "2000+ clients satisfaits", satisfaction: "98% de satisfaction", response: "Réponse sous 24h" },
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
        description: "Obtenez un devis personnalisé pour votre véhicule de transport équin.",
        trustIndicators: { free: "100% Gratuit", response24h: "Réponse 24h", noCommitment: "Sans engagement" }
      },
      benefits: {
        response24h: { title: "Réponse Sous 24h", description: "Votre devis personnalisé dans votre boîte mail" },
        free: { title: "100% Gratuit", description: "Aucun frais, aucun engagement de votre part" },
        transparent: { title: "Prix Transparent", description: "Tous les coûts inclus, aucune surprise" },
        expert: { title: "Expert Dédié", description: "Un conseiller personnel suit votre dossier" }
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
        subtitle: "Plus vous nous donnez d'informations, plus votre devis sera précis",
        personalInfo: { title: "Vos Informations", firstName: "Prénom", lastName: "Nom", email: "Email", phone: "Téléphone", region: "Région" },
        vehicleRequirements: { title: "Votre Véhicule Idéal", vehicleType: "Type de véhicule", horseCapacity: "Nombre de chevaux", condition: "État souhaité", budget: "Budget approximatif", selectVehicleType: "Choisissez le type", selectCapacity: "Sélectionnez", selectCondition: "Neuf ou occasion ?", selectBudget: "Votre fourchette de prix" },
        usage: { title: "Utilisation & Équipements", primaryUse: "Utilisation principale", equipment: "Équipements souhaités", selectUsage: "Comment allez-vous utiliser le véhicule ?" },
        additional: { title: "Informations Complémentaires", timeline: "Délai souhaité", message: "Message complémentaire", selectTimeline: "Quand souhaitez-vous acquérir votre véhicule ?", messagePlaceholder: "Décrivez-nous vos besoins spécifiques" },
        submit: { title: "C'est Parti !", description: "En soumettant ce formulaire, vous recevrez votre devis personnalisé sous 24h maximum.", button: "Recevoir Mon Devis Gratuit", disclaimer: "* Aucun engagement • Réponse garantie sous 24h • Service 100% gratuit" }
      }
    },
    trucksPage: {
      title: "Camions Chevaux",
      subtitle: "Professionnels",
      description: "Découvrez notre sélection de camions chevaux haute capacité pour le transport professionnel.",
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
          "efficientEngine": "Moteur efficient",
          "easilyMaintained": "Maintenance facilité",
          "ergonomicCabin": "Cabine ergonomique"
        },
        badges: {
          "bestseller": "Bestseller",
          "premium": "Premium", 
          "promotion": "Promotion",
          "certifiedUsed": "Occasion Certifiée",
          "recent": "Récent",
          "reliable": "Fiable"
        },
        specs: { horses: "chevaux", year: "Année", km: "km", capacity: "Capacité" },
        pricing: { save: "Économisez", financing: "Financement disponible dès", perMonth: "/mois" },
        actions: { seeDetails: "Voir Détails", addToFavorites: "Ajouter aux favoris" }
      },
      cta: { title: "Besoin d'un Conseil sur nos Camions ?", description: "Nos experts vous accompagnent dans le choix du camion parfait.", getQuote: "Demander un Devis Gratuit", contactExpert: "Contacter un Expert" }
    },
    aboutPage: {},
    contactPage: {},
    vansPage: {},
    footer: {
      newsletter: { title: "Newsletter", description: "Restez informé de nos nouveautés", placeholder: "Votre email", subscribe: "S'abonner" },
      company: { title: "Horse Truck Garage", description: "Votre spécialiste français du transport équestre depuis 2008." },
      contact: { title: "Contact", phone: "06 12 34 56 78", email: "contact@horsetruckgarage.fr", address: "123 Route des Chevaux, 75000 Paris", hours: "Du lundi au vendredi 9h-18h" },
      vehicles: { title: "Véhicules", horseTrucks: "Camions Chevaux", horseVans: "Vans Chevaux", horseTrailers: "Remorques Chevaux", occasions: "Occasions" },
      company2: { title: "Entreprise", about: "À Propos", contact: "Contact", blog: "Blog", career: "Carrières" },
      followUs: "Suivez-nous",
      copyright: "© 2024 Horse Truck Garage. Tous droits réservés.",
      terms: "Conditions générales",
      privacy: "Politique de confidentialité",
      sitemap: "Plan du site"
    },
    floating: { quote24h: "Devis 24h" },
    features: {
      "pneumaticSuspension": "Suspension pneumatique",
      "airConditioning": "Climatisation",
      "sleepingCabin": "Cabine couchette", 
      "automaticTransmission": "Boîte automatique",
      "nonSlipFlooring": "Plancher antidérapant",
      "ledLighting": "Éclairage LED",
      "ventilation": "Ventilation",
      "handsFreeeKit": "Kit mains libres",
      "aluminum": "Aluminium",
      "alkoSuspension": "Suspension AL-KO",
      "rubberFlooring": "Plancher caoutchouc"
    },
    common: {
      "readMore": "Lire la suite",
      "learnMore": "En savoir plus",
      "getQuote": "Demander un Devis",
      "contact": "Contact",
      "phone": "Téléphone",
      "email": "Email",
      "address": "Adresse",
      "previous": "Précédent",
      "next": "Suivant",
      "close": "Fermer",
      "open": "Ouvrir",
      "menu": "Menu",
      "loading": "Chargement...",
      "error": "Erreur",
      "success": "Succès",
      "cancel": "Annuler",
      "confirm": "Confirmer",
      "save": "Enregistrer",
      "edit": "Modifier",
      "delete": "Supprimer",
      "add": "Ajouter",
      "remove": "Supprimer",
      "search": "Rechercher",
      "filter": "Filtrer",
      "sort": "Trier",
      "clear": "Effacer",
      "apply": "Appliquer",
      "reset": "Réinitialiser",
      "submit": "Envoyer",
      "back": "Retour",
      "continue": "Continuer",
      "finish": "Terminer",
      "skip": "Ignorer",
      "retry": "Réessayer",
      "refresh": "Actualiser",
      "reload": "Recharger",
      "update": "Mettre à jour",
      "download": "Télécharger",
      "upload": "Uploader",
      "share": "Partager",
      "copy": "Copier",
      "paste": "Coller",
      "cut": "Couper",
      "undo": "Annuler",
      "redo": "Refaire",
      "select": "Sélectionner",
      "deselect": "Désélectionner",
      "selectAll": "Tout sélectionner",
      "deselectAll": "Tout désélectionner",
      "expand": "Développer",
      "collapse": "Réduire",
      "show": "Afficher",
      "hide": "Masquer",
      "view": "Voir",
      "preview": "Aperçu",
      "print": "Imprimer",
      "export": "Exporter",
      "import": "Importer",
      "help": "Aide",
      "about": "À propos",
      "settings": "Paramètres",
      "preferences": "Préférences",
      "account": "Compte",
      "profile": "Profil",
      "logout": "Déconnexion",
      "login": "Connexion",
      "register": "S'inscrire",
      "forgotPassword": "Mot de passe oublié",
      "changePassword": "Changer le mot de passe",
      "ok": "OK",
      "new": "Neuf",
      "used": "Occasion",
      "leisure": "Loisir",
      "competition": "Compétition",
      "professional": "Professionnel",
      "immediately": "Immédiatement",
      "months": "mois",
      "horsesCapacity": "chevaux",
      "bestseller": "Bestseller",
      "onlyXDaysLeft": "Plus que 3 jours",
      "favorite": "Coup de Cœur",
      "newArrival": "Nouveauté",
      "promotion": "Promotion",
      "limitedOffer": "Offre limitée",
      "expertiseGuaranteed": "Expertise garantie",
      "featuredVehicles": "Véhicules Vedettes",
      "premiumSelection": "Sélection Premium",
      "ourBest": "Nos Meilleures",
      "offersVehicles": "Offres & Véhicules",
      "discoverSelection": "Découvrez notre sélection",
      "km": "km",
      "moreEquipment": "autres équipements",
      "savings": "d'économie",
      "promotionalPrice": "Prix promotionnel",
      "financingAvailable": "Financement disponible",
      "discoverCharacteristics": "Découvrir les caractéristiques",
      "addToMySelection": "Ajouter à ma sélection",
      "viewDetails": "Voir les détails",
      "viewAll": "Voir tout",
      "vehicles": "véhicules",
      "models": "modèles",
      "upTo15Off": "Jusqu'à -15%",
      "specialOffers": "Offres spéciales",
      "mostRequested": "Plus demandé",
      "newArrivals2024": "Nouveautés 2024",
      "bestPrice": "Meilleur prix",
      "discoverCollection": "Découvrez notre collection",
      "receiveOffer24h": "Recevez votre offre en 24h",
      "personalizedExchange": "Échange personnalisé"
    }
  },
  en: {
    nav: { home: "Home", horseTrucks: "Horse Trucks", horseVans: "Horse Vans", horseTrailers: "Horse Trailers", about: "About", contact: "Contact", getQuote: "Get Quote", occasions: "Used Vehicles" },
    hero: { slide1: { subtitle: "Premium Equestrian Transport", title: "Exceptional Vehicles for Your Horses", description: "Discover our complete range of trucks, vans and trailers." }, slide2: { subtitle: "Comfort & Safety", title: "High-End Horse Trucks", description: "Spacious vehicles equipped with the latest technologies." }, slide3: { subtitle: "Optimal Mobility", title: "Versatile Horse Vans", description: "Practical and elegant solutions for transporting 1 to 3 horses." }, slide4: { subtitle: "Maximum Flexibility", title: "Professional Horse Trailers", description: "Wide range of trailers adapted to all your needs." }, slide5: { subtitle: "Certified Used", title: "Guaranteed Used Vehicles", description: "Discover our rigorous selection of used vehicles." }, cta: "Get Free Quote" },
    categories: { title: "Our Vehicles", subtitle: "Equestrian", horseTrucks: { title: "Horse Trucks", description: "Spacious and comfortable vehicles", features: ["Capacity 2-6 horses", "Tack compartment"], from: "From", explore: "Explore Trucks" }, horseVans: { title: "Horse Vans", description: "Compact and versatile solutions", features: ["Compact format", "B license driving"], from: "From", explore: "Explore Vans" }, horseTrailers: { title: "Horse Trailers", description: "Robust and reliable trailers", features: ["1-4 horse places", "Non-slip flooring"], from: "From", explore: "Explore Trailers" }, ctaTitle: "Need help choosing?", ctaDescription: "Our experts guide you in choosing the perfect vehicle.", getFreeQuote: "Free Quote", makeAppointment: "Book Appointment", specialties: "Our Specialties", findPerfectVehicle: "Find the perfect vehicle", disciplineDescription: "We have the vehicle adapted to your passion." },
    trust: { badge: "Trust", title: "Your Trusted Partner", subtitle: "since 2008", description: "Horse Truck Garage, your French specialist in equestrian transport.", stats: { experience: "15+ years experience", clients: "2000+ satisfied clients", satisfaction: "98% satisfaction", response: "Response within 24h" }, reviewsTitle: "Customer Reviews", reviewsDescription: "Discover our customers' experience", leaveReview: "Leave a review", partnersTitle: "Our Partners", partnersDescription: "Trusted brands", getQuote: "Get Quote", partners: [], reviews: [] },
    quoteRequest: { hero: { badge: "Free Quote", title: "Your Quote", subtitle: "in Less than 24h", description: "Get a personalized quote for your equine transport vehicle.", trustIndicators: { free: "100% Free", response24h: "24h Response", noCommitment: "No commitment" } }, benefits: { response24h: { title: "Response Within 24h", description: "Your personalized quote in your inbox" }, free: { title: "100% Free", description: "No fees, no commitment on your part" }, transparent: { title: "Transparent Pricing", description: "All costs included, no surprises" }, expert: { title: "Dedicated Expert", description: "A personal advisor follows your file" } }, vehicleTypes: { title: "What Type of Vehicle Are You Looking For?", subtitle: "Select your category for an even more precise quote", popular: "Most requested", capacities: "Available capacities", horseTrucks: "Horse Truck", horseVans: "Horse Van", horseTrailers: "Horse Trailer" }, form: { title: "Quote Request Form", subtitle: "The more information you give us, the more precise your quote will be", personalInfo: { title: "Your Information", firstName: "First name", lastName: "Last name", email: "Email", phone: "Phone", region: "Region" }, vehicleRequirements: { title: "Your Ideal Vehicle", vehicleType: "Vehicle type", horseCapacity: "Number of horses", condition: "Desired condition", budget: "Approximate budget", selectVehicleType: "Choose the type", selectCapacity: "Select", selectCondition: "New or used?", selectBudget: "Your price range" }, usage: { title: "Usage & Equipment", primaryUse: "Primary use", equipment: "Desired equipment", selectUsage: "How will you use the vehicle?" }, additional: { title: "Additional Information", timeline: "Desired purchase timeframe", message: "Additional message", selectTimeline: "When do you wish to acquire your vehicle?", messagePlaceholder: "Describe your specific needs" }, submit: { title: "Let's Go!", description: "By submitting this form, you will receive your personalized quote within 24 hours maximum.", button: "Receive My Free Quote", disclaimer: "* No commitment • Response guaranteed within 24h • 100% free service" } } },
    trucksPage: { title: "Horse Trucks", subtitle: "Professional", description: "Discover our selection of high capacity horse trucks for professional transport.", filters: { allFilters: "All filters", capacity: "Capacity", price: "Price", year: "Year", mileage: "Mileage", found: "trucks found" }, vehicle: { horseTruck: "Horse Truck", features: { "pneumaticSuspension": "Air suspension", "airConditioning": "Air conditioning", "sleepingCabin": "Sleeping cabin", "automaticTransmission": "Automatic transmission", "integratedGPS": "Integrated GPS", "grandComfortCabin": "Grand comfort cabin", "manualTransmission": "Manual transmission", "blueEfficiency": "BlueEFFICIENCY", "automaticAirConditioning": "Automatic air conditioning", "cruiseControl": "Cruise control", "telematicSystem": "Telematic system", "dtiEngine": "DTI engine", "powerSteering": "Power steering", "electricWindows": "Electric windows", "centralLocking": "Central locking", "euro6": "Euro 6", "adBlueSystem": "AdBlue system", "spaciousCabin": "Spacious cabin", "efficientEngine": "Efficient engine", "easilyMaintained": "Easily maintained", "ergonomicCabin": "Ergonomic cabin" }, badges: { "bestseller": "Bestseller", "premium": "Premium", "promotion": "Promotion", "certifiedUsed": "Certified Used", "recent": "Recent", "reliable": "Reliable" }, specs: { horses: "horses", year: "Year", km: "km", capacity: "Capacity" }, pricing: { save: "Save", financing: "Financing available from", perMonth: "/month" }, actions: { seeDetails: "See Details", addToFavorites: "Add to favorites" } }, cta: { title: "Need Advice on our Trucks?", description: "Our experts guide you in choosing the perfect truck.", getQuote: "Get Free Quote", contactExpert: "Contact Expert" } },
    aboutPage: {},
    contactPage: {},
    vansPage: {},
    nav: { home: "Home", horseTrucks: "Horse Trucks", horseVans: "Horse Vans", horseTrailers: "Horse Trailers", about: "About", contact: "Contact", getQuote: "Get Quote", occasions: "Used Vehicles" },
    hero: {
      slide1: { subtitle: "Premium Equestrian Transport", title: "Exceptional Vehicles for Your Horses", description: "Discover our complete range of trucks, vans and trailers." },
      slide2: { subtitle: "Comfort & Safety", title: "High-End Horse Trucks", description: "Spacious vehicles equipped with the latest technologies." },
      slide3: { subtitle: "Optimal Mobility", title: "Versatile Horse Vans", description: "Practical and elegant solutions for transporting 1 to 3 horses." },
      slide4: { subtitle: "Maximum Flexibility", title: "Professional Horse Trailers", description: "Wide range of trailers adapted to all your needs." },
      slide5: { subtitle: "Certified Used", title: "Guaranteed Used Vehicles", description: "Discover our rigorous selection of used vehicles." },
      cta: "Get Free Quote"
    },
    categories: {
      title: "Our Vehicles", subtitle: "Equestrian",
      horseTrucks: { title: "Horse Trucks", description: "Spacious and comfortable vehicles", features: ["Capacity 2-6 horses", "Tack compartment"], from: "From", explore: "Explore Trucks" },
      horseVans: { title: "Horse Vans", description: "Compact and versatile solutions", features: ["Compact format", "B license driving"], from: "From", explore: "Explore Vans" },
      horseTrailers: { title: "Horse Trailers", description: "Robust and reliable trailers", features: ["1-4 horse places", "Non-slip flooring"], from: "From", explore: "Explore Trailers" },
      ctaTitle: "Need help choosing?", ctaDescription: "Our experts guide you in choosing the perfect vehicle.", getFreeQuote: "Free Quote", makeAppointment: "Book Appointment", specialties: "Our Specialties", findPerfectVehicle: "Find the perfect vehicle", disciplineDescription: "We have the vehicle adapted to your passion."
    },
    trust: { badge: "Trust", title: "Your Trusted Partner", subtitle: "since 2008", description: "Horse Truck Garage, your French specialist in equestrian transport.", stats: { experience: "15+ years experience", clients: "2000+ satisfied clients", satisfaction: "98% satisfaction", response: "Response within 24h" }, reviewsTitle: "Customer Reviews", reviewsDescription: "Discover our customers' experience", leaveReview: "Leave a review", partnersTitle: "Our Partners", partnersDescription: "Trusted brands", getQuote: "Get Quote", partners: [], reviews: [] },
    quoteRequest: {
      hero: { badge: "Free Quote", title: "Your Quote", subtitle: "in Less than 24h", description: "Get a personalized quote for your equine transport vehicle.", trustIndicators: { free: "100% Free", response24h: "24h Response", noCommitment: "No commitment" } },
      benefits: { response24h: { title: "Response Within 24h", description: "Your personalized quote in your inbox" }, free: { title: "100% Free", description: "No fees, no commitment on your part" }, transparent: { title: "Transparent Pricing", description: "All costs included, no surprises" }, expert: { title: "Dedicated Expert", description: "A personal advisor follows your file" } },
      vehicleTypes: { title: "What Type of Vehicle Are You Looking For?", subtitle: "Select your category for an even more precise quote", popular: "Most requested", capacities: "Available capacities", horseTrucks: "Horse Truck", horseVans: "Horse Van", horseTrailers: "Horse Trailer" },
      form: { title: "Quote Request Form", subtitle: "The more information you give us, the more precise your quote will be", personalInfo: { title: "Your Information", firstName: "First name", lastName: "Last name", email: "Email", phone: "Phone", region: "Region" }, vehicleRequirements: { title: "Your Ideal Vehicle", vehicleType: "Vehicle type", horseCapacity: "Number of horses", condition: "Desired condition", budget: "Approximate budget", selectVehicleType: "Choose the type", selectCapacity: "Select", selectCondition: "New or used?", selectBudget: "Your price range" }, usage: { title: "Usage & Equipment", primaryUse: "Primary use", equipment: "Desired equipment", selectUsage: "How will you use the vehicle?" }, additional: { title: "Additional Information", timeline: "Desired purchase timeframe", message: "Additional message", selectTimeline: "When do you wish to acquire your vehicle?", messagePlaceholder: "Describe your specific needs" }, submit: { title: "Let's Go!", description: "By submitting this form, you will receive your personalized quote within 24 hours maximum.", button: "Receive My Free Quote", disclaimer: "* No commitment • Response guaranteed within 24h • 100% free service" } }
    },
    trucksPage: {
      title: "Horse Trucks", subtitle: "Professional", description: "Discover our selection of high capacity horse trucks for professional transport.",
      filters: { allFilters: "All filters", capacity: "Capacity", price: "Price", year: "Year", mileage: "Mileage", found: "trucks found" },
      vehicle: { horseTruck: "Horse Truck", features: { "pneumaticSuspension": "Air suspension", "airConditioning": "Air conditioning", "sleepingCabin": "Sleeping cabin", "automaticTransmission": "Automatic transmission", "integratedGPS": "Integrated GPS", "grandComfortCabin": "Grand comfort cabin", "manualTransmission": "Manual transmission", "blueEfficiency": "BlueEFFICIENCY", "automaticAirConditioning": "Automatic air conditioning", "cruiseControl": "Cruise control", "telematicSystem": "Telematic system", "dtiEngine": "DTI engine", "powerSteering": "Power steering", "electricWindows": "Electric windows", "centralLocking": "Central locking", "euro6": "Euro 6", "adBlueSystem": "AdBlue system", "spaciousCabin": "Spacious cabin", "efficientEngine": "Efficient engine", "easilyMaintained": "Easily maintained", "ergonomicCabin": "Ergonomic cabin" }, badges: { "bestseller": "Bestseller", "premium": "Premium", "promotion": "Promotion", "certifiedUsed": "Certified Used", "recent": "Recent", "reliable": "Reliable" }, specs: { horses: "horses", year: "Year", km: "km", capacity: "Capacity" }, pricing: { save: "Save", financing: "Financing available from", perMonth: "/month" }, actions: { seeDetails: "See Details", addToFavorites: "Add to favorites" } },
      cta: { title: "Need Advice on our Trucks?", description: "Our experts guide you in choosing the perfect truck.", getQuote: "Get Free Quote", contactExpert: "Contact Expert" }
    },
    footer: { newsletter: { title: "Newsletter", description: "Stay informed about our news", placeholder: "Your email", subscribe: "Subscribe" }, company: { title: "Horse Truck Garage", description: "Your French specialist in equestrian transport since 2008." }, contact: { title: "Contact", phone: "06 12 34 56 78", email: "contact@horsetruckgarage.fr", address: "123 Route des Chevaux, 75000 Paris", hours: "Monday to Friday 9am-6pm" }, vehicles: { title: "Vehicles", horseTrucks: "Horse Trucks", horseVans: "Horse Vans", horseTrailers: "Horse Trailers", occasions: "Used Vehicles" }, company2: { title: "Company", about: "About", contact: "Contact", blog: "Blog", career: "Careers" }, followUs: "Follow us", copyright: "© 2024 Horse Truck Garage. All rights reserved.", terms: "Terms and conditions", privacy: "Privacy policy", sitemap: "Sitemap" },
    floating: { quote24h: "24h Quote" },
    features: { "pneumaticSuspension": "Air suspension", "airConditioning": "Air conditioning", "sleepingCabin": "Sleeping cabin", "automaticTransmission": "Automatic transmission", "nonSlipFlooring": "Non-slip flooring", "ledLighting": "LED lighting", "ventilation": "Ventilation", "handsFreeeKit": "Hands free kit", "aluminum": "Aluminum", "alkoSuspension": "AL-KO suspension", "rubberFlooring": "Rubber flooring" },
    common: { "readMore": "Read more", "learnMore": "Learn more", "getQuote": "Get Quote", "contact": "Contact", "phone": "Phone", "email": "Email", "address": "Address", "previous": "Previous", "next": "Next", "close": "Close", "open": "Open", "menu": "Menu", "loading": "Loading...", "error": "Error", "success": "Success", "cancel": "Cancel", "confirm": "Confirm", "save": "Save", "edit": "Edit", "delete": "Delete", "add": "Add", "remove": "Remove", "search": "Search", "filter": "Filter", "sort": "Sort", "clear": "Clear", "apply": "Apply", "reset": "Reset", "submit": "Submit", "back": "Back", "continue": "Continue", "finish": "Finish", "skip": "Skip", "retry": "Retry", "refresh": "Refresh", "reload": "Reload", "update": "Update", "download": "Download", "upload": "Upload", "share": "Share", "copy": "Copy", "paste": "Paste", "cut": "Cut", "undo": "Undo", "redo": "Redo", "select": "Select", "deselect": "Deselect", "selectAll": "Select all", "deselectAll": "Deselect all", "expand": "Expand", "collapse": "Collapse", "show": "Show", "hide": "Hide", "view": "View", "preview": "Preview", "print": "Print", "export": "Export", "import": "Import", "help": "Help", "about": "About", "settings": "Settings", "preferences": "Preferences", "account": "Account", "profile": "Profile", "logout": "Logout", "login": "Login", "register": "Register", "forgotPassword": "Forgot password", "changePassword": "Change password", "ok": "OK", "new": "New", "used": "Used", "leisure": "Leisure", "competition": "Competition", "professional": "Professional", "immediately": "Immediately", "months": "months", "horsesCapacity": "horses", "bestseller": "Bestseller", "onlyXDaysLeft": "Only 3 days left", "favorite": "Favorite", "newArrival": "New arrival", "promotion": "Promotion", "limitedOffer": "Limited offer", "expertiseGuaranteed": "Expertise guaranteed", "featuredVehicles": "Featured Vehicles", "premiumSelection": "Premium Selection", "ourBest": "Our Best", "offersVehicles": "Offers & Vehicles", "discoverSelection": "Discover our selection", "km": "km", "moreEquipment": "more equipment", "savings": "savings", "promotionalPrice": "Promotional price", "financingAvailable": "Financing available", "discoverCharacteristics": "Discover characteristics", "addToMySelection": "Add to my selection", "viewDetails": "View details", "viewAll": "View all", "vehicles": "vehicles", "models": "models", "upTo15Off": "Up to -15%", "specialOffers": "Special offers", "mostRequested": "Most requested", "newArrivals2024": "New arrivals 2024", "bestPrice": "Best price", "discoverCollection": "Discover our collection", "receiveOffer24h": "Receive your offer in 24h", "personalizedExchange": "Personalized exchange" }
  },
  es: {
    nav: { home: "Inicio", horseTrucks: "Camiones para Caballos", horseVans: "Furgones para Caballos", horseTrailers: "Remolques para Caballos", about: "Acerca de", contact: "Contacto", getQuote: "Solicitar Presupuesto", occasions: "Vehículos Usados" },
    hero: { slide1: { subtitle: "Transporte Ecuestre Premium", title: "Vehículos Excepcionales para tus Caballos", description: "Descubre nuestra gama completa de camiones, furgones y remolques." }, slide2: { subtitle: "Comodidad y Seguridad", title: "Camiones para Caballos de Alta Gama", description: "Vehículos espaciosos equipados con las últimas tecnologías." }, slide3: { subtitle: "Movilidad Óptima", title: "Furgones para Caballos Versátiles", description: "Soluciones prácticas y elegantes para el transporte de 1 a 3 caballos." }, slide4: { subtitle: "Flexibilidad Máxima", title: "Remolques para Caballos Profesionales", description: "Amplia gama de remolques adaptados a todas tus necesidades." }, slide5: { subtitle: "Usados Certificados", title: "Vehículos Usados Garantizados", description: "Descubre nuestra selección rigurosa de vehículos usados." }, cta: "Solicitar Presupuesto Gratis" },
    categories: { title: "Nuestros Vehículos", subtitle: "Ecuestres", horseTrucks: { title: "Camiones para Caballos", description: "Vehículos espaciosos y cómodos", features: ["Capacidad 2-6 caballos", "Compartimento guarnicionería"], from: "Desde", explore: "Explorar Camiones" }, horseVans: { title: "Furgones para Caballos", description: "Soluciones compactas y versátiles", features: ["Formato compacto", "Conducción licencia B"], from: "Desde", explore: "Explorar Furgones" }, horseTrailers: { title: "Remolques para Caballos", description: "Remolques robustos y fiables", features: ["1-4 plazas caballos", "Suelo antideslizante"], from: "Desde", explore: "Explorar Remolques" }, ctaTitle: "¿Necesitas ayuda para elegir?", ctaDescription: "Nuestros expertos te acompañan en la elección del vehículo perfecto.", getFreeQuote: "Presupuesto Gratis", makeAppointment: "Pedir Cita", specialties: "Nuestras Especialidades", findPerfectVehicle: "Encuentra el vehículo perfecto", disciplineDescription: "Tenemos el vehículo adaptado a tu pasión." },
    trust: { badge: "Confianza", title: "Tu Socio de Confianza", subtitle: "desde 2008", description: "Horse Truck Garage, tu especialista francés en transporte ecuestre.", stats: { experience: "15+ años de experiencia", clients: "2000+ clientes satisfechos", satisfaction: "98% de satisfacción", response: "Respuesta en 24h" }, reviewsTitle: "Testimonios de Clientes", reviewsDescription: "Descubre la experiencia de nuestros clientes", leaveReview: "Dejar una reseña", partnersTitle: "Nuestros Socios", partnersDescription: "Marcas de confianza", getQuote: "Solicitar Presupuesto", partners: [], reviews: [] },
    quoteRequest: { hero: { badge: "Presupuesto Gratis", title: "Tu Presupuesto", subtitle: "en Menos de 24h", description: "Obtén un presupuesto personalizado para tu vehículo de transporte equino.", trustIndicators: { free: "100% Gratis", response24h: "Respuesta 24h", noCommitment: "Sin compromiso" } }, benefits: { response24h: { title: "Respuesta en 24h", description: "Tu presupuesto personalizado en tu buzón" }, free: { title: "100% Gratis", description: "Sin costes, sin compromiso por tu parte" }, transparent: { title: "Precio Transparente", description: "Todos los costes incluidos, sin sorpresas" }, expert: { title: "Experto Dedicado", description: "Un asesor personal sigue tu expediente" } }, vehicleTypes: { title: "¿Qué Tipo de Vehículo Buscas?", subtitle: "Selecciona tu categoría para un presupuesto aún más preciso", popular: "Más solicitado", capacities: "Capacidades disponibles", horseTrucks: "Camión para Caballos", horseVans: "Furgón para Caballos", horseTrailers: "Remolque para Caballos" }, form: { title: "Formulario de Solicitud de Presupuesto", subtitle: "Cuanta más información nos proporciones, más preciso será tu presupuesto", personalInfo: { title: "Tu Información", firstName: "Nombre", lastName: "Apellidos", email: "Email", phone: "Teléfono", region: "Región" }, vehicleRequirements: { title: "Tu Vehículo Ideal", vehicleType: "Tipo de vehículo", horseCapacity: "Número de caballos", condition: "Estado deseado", budget: "Presupuesto aproximado", selectVehicleType: "Elige el tipo", selectCapacity: "Selecciona", selectCondition: "¿Nuevo o usado?", selectBudget: "Tu rango de precios" }, usage: { title: "Uso y Equipamiento", primaryUse: "Uso principal", equipment: "Equipamiento deseado", selectUsage: "¿Cómo vas a usar el vehículo?" }, additional: { title: "Información Adicional", timeline: "Plazo deseado", message: "Mensaje adicional", selectTimeline: "¿Cuándo deseas adquirir tu vehículo?", messagePlaceholder: "Descríbenos tus necesidades específicas" }, submit: { title: "¡Vamos!", description: "Al enviar este formulario, recibirás tu presupuesto personalizado en un máximo de 24 horas.", button: "Recibir Mi Presupuesto Gratis", disclaimer: "* Sin compromiso • Respuesta garantizada en 24h • Servicio 100% gratuito" } } },
    trucksPage: { title: "Camiones para Caballos", subtitle: "Profesional", description: "Descubre nuestra selección de camiones para caballos de alta capacidad.", filters: { allFilters: "Todos los filtros", capacity: "Capacidad", price: "Precio", year: "Año", mileage: "Kilometraje", found: "camiones encontrados" }, vehicle: { horseTruck: "Camión para Caballos", features: { "pneumaticSuspension": "Suspensión neumática", "airConditioning": "Climatización", "sleepingCabin": "Cabina cama", "automaticTransmission": "Transmisión automática", "integratedGPS": "GPS integrado", "grandComfortCabin": "Cabina gran confort", "manualTransmission": "Transmisión manual", "blueEfficiency": "BlueEFFICIENCY", "automaticAirConditioning": "Climatización automática", "cruiseControl": "Control de crucero", "telematicSystem": "Sistema telemático", "dtiEngine": "Motor DTI", "powerSteering": "Dirección asistida", "electricWindows": "Ventanas eléctricas", "centralLocking": "Cierre centralizado", "euro6": "Euro 6", "adBlueSystem": "Sistema AdBlue", "spaciousCabin": "Cabina espaciosa", "efficientEngine": "Motor eficiente", "easilyMaintained": "Fácil mantenimiento", "ergonomicCabin": "Cabina ergonómica" }, badges: { "bestseller": "Bestseller", "premium": "Premium", "promotion": "Promoción", "certifiedUsed": "Usado Certificado", "recent": "Reciente", "reliable": "Fiable" }, specs: { horses: "caballos", year: "Año", km: "km", capacity: "Capacidad" }, pricing: { save: "Ahorra", financing: "Financiación disponible desde", perMonth: "/mes" }, actions: { seeDetails: "Ver Detalles", addToFavorites: "Añadir a favoritos" } }, cta: { title: "¿Necesitas Consejo sobre nuestros Camiones?", description: "Nuestros expertos te guían en la elección del camión perfecto.", getQuote: "Solicitar Presupuesto Gratis", contactExpert: "Contactar Experto" } },
    footer: { newsletter: { title: "Newsletter", description: "Mantente informado sobre nuestras novedades", placeholder: "Tu email", subscribe: "Suscribirse" }, company: { title: "Horse Truck Garage", description: "Tu especialista francés en transporte ecuestre desde 2008." }, contact: { title: "Contacto", phone: "06 12 34 56 78", email: "contact@horsetruckgarage.fr", address: "123 Route des Chevaux, 75000 Paris", hours: "Lunes a viernes 9h-18h" }, vehicles: { title: "Vehículos", horseTrucks: "Camiones para Caballos", horseVans: "Furgones para Caballos", horseTrailers: "Remolques para Caballos", occasions: "Vehículos Usados" }, company2: { title: "Empresa", about: "Acerca de", contact: "Contacto", blog: "Blog", career: "Carreras" }, services: { title: "Servicios", financing: "Financiación", insurance: "Seguro", warranty: "Garantía", maintenance: "Mantenimiento" }, followUs: "Síguenos", copyright: "© 2024 Horse Truck Garage. Todos los derechos reservados.", terms: "Términos y condiciones", privacy: "Política de privacidad", sitemap: "Mapa del sitio" },
    floating: { quote24h: "Presupuesto 24h" },
    features: { "pneumaticSuspension": "Suspensión neumática", "airConditioning": "Climatización", "sleepingCabin": "Cabina cama", "automaticTransmission": "Transmisión automática", "nonSlipFlooring": "Suelo antideslizante", "ledLighting": "Iluminación LED", "ventilation": "Ventilación", "handsFreeeKit": "Kit manos libres", "aluminum": "Aluminio", "alkoSuspension": "Suspensión AL-KO", "rubberFlooring": "Suelo de goma" },
    common: { "readMore": "Leer más", "learnMore": "Saber más", "getQuote": "Solicitar Presupuesto", "contact": "Contacto", "phone": "Teléfono", "email": "Email", "address": "Dirección", "previous": "Anterior", "next": "Siguiente", "close": "Cerrar", "open": "Abrir", "menu": "Menú", "loading": "Cargando...", "error": "Error", "success": "Éxito", "cancel": "Cancelar", "confirm": "Confirmar", "save": "Guardar", "edit": "Editar", "delete": "Eliminar", "add": "Añadir", "remove": "Eliminar", "search": "Buscar", "filter": "Filtrar", "sort": "Ordenar", "clear": "Limpiar", "apply": "Aplicar", "reset": "Reiniciar", "submit": "Enviar", "back": "Atrás", "continue": "Continuar", "finish": "Terminar", "skip": "Saltar", "retry": "Reintentar", "refresh": "Actualizar", "reload": "Recargar", "update": "Actualizar", "download": "Descargar", "upload": "Subir", "share": "Compartir", "copy": "Copiar", "paste": "Pegar", "cut": "Cortar", "undo": "Deshacer", "redo": "Rehacer", "select": "Seleccionar", "deselect": "Deseleccionar", "selectAll": "Seleccionar todo", "deselectAll": "Deseleccionar todo", "expand": "Expandir", "collapse": "Contraer", "show": "Mostrar", "hide": "Ocultar", "view": "Ver", "preview": "Vista previa", "print": "Imprimir", "export": "Exportar", "import": "Importar", "help": "Ayuda", "about": "Acerca de", "settings": "Configuración", "preferences": "Preferencias", "account": "Cuenta", "profile": "Perfil", "logout": "Cerrar sesión", "login": "Iniciar sesión", "register": "Registrarse", "forgotPassword": "Contraseña olvidada", "changePassword": "Cambiar contraseña", "ok": "OK", "new": "Nuevo", "used": "Usado", "leisure": "Ocio", "competition": "Competición", "professional": "Profesional", "immediately": "Inmediatamente", "months": "meses", "horsesCapacity": "caballos", "bestseller": "Bestseller", "onlyXDaysLeft": "Sólo quedan 3 días", "favorite": "Favorito", "newArrival": "Nueva llegada", "promotion": "Promoción", "limitedOffer": "Oferta limitada", "expertiseGuaranteed": "Experiencia garantizada", "featuredVehicles": "Vehículos Destacados", "premiumSelection": "Selección Premium", "ourBest": "Nuestros Mejores", "offersVehicles": "Ofertas y Vehículos", "discoverSelection": "Descubre nuestra selección", "km": "km", "moreEquipment": "más equipamiento", "savings": "ahorro", "promotionalPrice": "Precio promocional", "financingAvailable": "Financiación disponible", "discoverCharacteristics": "Descubrir características", "addToMySelection": "Añadir a mi selección", "viewDetails": "Ver detalles", "viewAll": "Ver todo", "vehicles": "vehículos", "models": "modelos", "upTo15Off": "Hasta -15%", "specialOffers": "Ofertas especiales", "mostRequested": "Más solicitado", "newArrivals2024": "Novedades 2024", "bestPrice": "Mejor precio", "discoverCollection": "Descubre nuestra colección", "receiveOffer24h": "Recibe tu oferta en 24h", "personalizedExchange": "Intercambio personalizado" }
  },
  de: {
    nav: { home: "Startseite", horseTrucks: "Pferdetransporter", horseVans: "Pferde-Vans", horseTrailers: "Pferdeanhänger", about: "Über uns", contact: "Kontakt", getQuote: "Angebot anfordern", occasions: "Gebrauchtwagen" },
    hero: { slide1: { subtitle: "Premium Pferdetransport", title: "Außergewöhnliche Fahrzeuge für Ihre Pferde", description: "Entdecken Sie unser komplettes Sortiment an LKWs, Vans und Anhängern." }, slide2: { subtitle: "Komfort & Sicherheit", title: "Hochwertige Pferdetransporter", description: "Geräumige Fahrzeuge ausgestattet mit neuesten Technologien." }, slide3: { subtitle: "Optimale Mobilität", title: "Vielseitige Pferde-Vans", description: "Praktische und elegante Lösungen für den Transport von 1 bis 3 Pferden." }, slide4: { subtitle: "Maximale Flexibilität", title: "Professionelle Pferdeanhänger", description: "Breites Sortiment an Anhängern, angepasst an alle Ihre Bedürfnisse." }, slide5: { subtitle: "Zertifizierte Gebrauchtwagen", title: "Garantierte Gebrauchtwagen", description: "Entdecken Sie unsere strenge Auswahl an Gebrauchtwagen." }, cta: "Kostenloses Angebot anfordern" },
    categories: { title: "Unsere Fahrzeuge", subtitle: "Reitsport", horseTrucks: { title: "Pferdetransporter", description: "Geräumige und komfortable Fahrzeuge", features: ["Kapazität 2-6 Pferde", "Sattelkammer"], from: "Ab", explore: "LKWs erkunden" }, horseVans: { title: "Pferde-Vans", description: "Kompakte und vielseitige Lösungen", features: ["Kompaktes Format", "B-Führerschein"], from: "Ab", explore: "Vans erkunden" }, horseTrailers: { title: "Pferdeanhänger", description: "Robuste und zuverlässige Anhänger", features: ["1-4 Pferdeplätze", "Rutschfester Boden"], from: "Ab", explore: "Anhänger erkunden" }, ctaTitle: "Brauchen Sie Hilfe bei der Auswahl?", ctaDescription: "Unsere Experten begleiten Sie bei der Wahl des perfekten Fahrzeugs.", getFreeQuote: "Kostenloses Angebot", makeAppointment: "Termin vereinbaren", specialties: "Unsere Spezialitäten", findPerfectVehicle: "Finden Sie das perfekte Fahrzeug", disciplineDescription: "Wir haben das passende Fahrzeug für Ihre Leidenschaft." },
    trust: { badge: "Vertrauen", title: "Ihr Vertrauenspartner", subtitle: "seit 2008", description: "Horse Truck Garage, Ihr französischer Spezialist für Pferdetransport.", stats: { experience: "15+ Jahre Erfahrung", clients: "2000+ zufriedene Kunden", satisfaction: "98% Zufriedenheit", response: "Antwort innerhalb 24h" }, reviewsTitle: "Kundenbewertungen", reviewsDescription: "Entdecken Sie die Erfahrungen unserer Kunden", leaveReview: "Bewertung hinterlassen", partnersTitle: "Unsere Partner", partnersDescription: "Vertrauensmarken", getQuote: "Angebot anfordern", partners: [], reviews: [] },
    quoteRequest: { hero: { badge: "Kostenloses Angebot", title: "Ihr Angebot", subtitle: "in weniger als 24h", description: "Erhalten Sie ein personalisiertes Angebot für Ihr Pferdetransportfahrzeug.", trustIndicators: { free: "100% Kostenlos", response24h: "24h Antwort", noCommitment: "Unverbindlich" } }, benefits: { response24h: { title: "Antwort innerhalb 24h", description: "Ihr personalisiertes Angebot in Ihrem Postfach" }, free: { title: "100% Kostenlos", description: "Keine Gebühren, keine Verpflichtung Ihrerseits" }, transparent: { title: "Transparente Preise", description: "Alle Kosten inbegriffen, keine Überraschungen" }, expert: { title: "Persönlicher Experte", description: "Ein persönlicher Berater betreut Ihre Akte" } }, vehicleTypes: { title: "Welche Art von Fahrzeug suchen Sie?", subtitle: "Wählen Sie Ihre Kategorie für ein noch präziseres Angebot", popular: "Am meisten nachgefragt", capacities: "Verfügbare Kapazitäten", horseTrucks: "Pferdetransporter", horseVans: "Pferde-Van", horseTrailers: "Pferdeanhänger" }, form: { title: "Angebotsanfrage-Formular", subtitle: "Je mehr Informationen Sie uns geben, desto präziser wird Ihr Angebot sein", personalInfo: { title: "Ihre Informationen", firstName: "Vorname", lastName: "Nachname", email: "E-Mail", phone: "Telefon", region: "Region" }, vehicleRequirements: { title: "Ihr ideales Fahrzeug", vehicleType: "Fahrzeugtyp", horseCapacity: "Anzahl der Pferde", condition: "Gewünschter Zustand", budget: "Ungefähres Budget", selectVehicleType: "Typ wählen", selectCapacity: "Auswählen", selectCondition: "Neu oder gebraucht?", selectBudget: "Ihre Preisspanne" }, usage: { title: "Nutzung & Ausstattung", primaryUse: "Hauptnutzung", equipment: "Gewünschte Ausstattung", selectUsage: "Wie werden Sie das Fahrzeug nutzen?" }, additional: { title: "Zusätzliche Informationen", timeline: "Gewünschter Zeitrahmen", message: "Zusätzliche Nachricht", selectTimeline: "Wann möchten Sie Ihr Fahrzeug erwerben?", messagePlaceholder: "Beschreiben Sie uns Ihre spezifischen Bedürfnisse" }, submit: { title: "Los geht's!", description: "Durch das Absenden dieses Formulars erhalten Sie Ihr personalisiertes Angebot innerhalb von maximal 24 Stunden.", button: "Mein kostenloses Angebot erhalten", disclaimer: "* Unverbindlich • Antwort garantiert innerhalb 24h • 100% kostenloser Service" } } },
    trucksPage: { title: "Pferdetransporter", subtitle: "Professionell", description: "Entdecken Sie unsere Auswahl an Pferdetransportern mit hoher Kapazität.", filters: { allFilters: "Alle Filter", capacity: "Kapazität", price: "Preis", year: "Jahr", mileage: "Laufleistung", found: "LKWs gefunden" }, vehicle: { horseTruck: "Pferdetransporter", features: { "pneumaticSuspension": "Luftfederung", "airConditioning": "Klimaanlage", "sleepingCabin": "Schlafkabine", "automaticTransmission": "Automatikgetriebe", "integratedGPS": "Integriertes GPS", "grandComfortCabin": "Komfort-Kabine", "manualTransmission": "Schaltgetriebe", "blueEfficiency": "BlueEFFICIENCY", "automaticAirConditioning": "Automatische Klimaanlage", "cruiseControl": "Tempomat", "telematicSystem": "Telematik-System", "dtiEngine": "DTI-Motor", "powerSteering": "Servolenkung", "electricWindows": "Elektrische Fensterheber", "centralLocking": "Zentralverriegelung", "euro6": "Euro 6", "adBlueSystem": "AdBlue-System", "spaciousCabin": "Geräumige Kabine", "efficientEngine": "Effizienter Motor", "easilyMaintained": "Wartungsfreundlich", "ergonomicCabin": "Ergonomische Kabine" }, badges: { "bestseller": "Bestseller", "premium": "Premium", "promotion": "Aktion", "certifiedUsed": "Geprüft Gebraucht", "recent": "Aktuell", "reliable": "Zuverlässig" }, specs: { horses: "Pferde", year: "Jahr", km: "km", capacity: "Kapazität" }, pricing: { save: "Sparen", financing: "Finanzierung verfügbar ab", perMonth: "/Monat" }, actions: { seeDetails: "Details ansehen", addToFavorites: "Zu Favoriten hinzufügen" } }, cta: { title: "Beratung zu unseren LKWs benötigt?", description: "Unsere Experten begleiten Sie bei der Wahl des perfekten LKWs.", getQuote: "Kostenloses Angebot anfordern", contactExpert: "Experten kontaktieren" } },
    footer: { newsletter: { title: "Newsletter", description: "Bleiben Sie über unsere Neuigkeiten informiert", placeholder: "Ihre E-Mail", subscribe: "Abonnieren" }, company: { title: "Horse Truck Garage", description: "Ihr französischer Spezialist für Pferdetransport seit 2008." }, contact: { title: "Kontakt", phone: "06 12 34 56 78", email: "contact@horsetruckgarage.fr", address: "123 Route des Chevaux, 75000 Paris", hours: "Montag bis Freitag 9-18 Uhr" }, vehicles: { title: "Fahrzeuge", horseTrucks: "Pferdetransporter", horseVans: "Pferde-Vans", horseTrailers: "Pferdeanhänger", occasions: "Gebrauchtwagen" }, company2: { title: "Unternehmen", about: "Über uns", contact: "Kontakt", blog: "Blog", career: "Karriere" }, services: { title: "Dienstleistungen", financing: "Finanzierung", insurance: "Versicherung", warranty: "Garantie", maintenance: "Wartung" }, followUs: "Folgen Sie uns", copyright: "© 2024 Horse Truck Garage. Alle Rechte vorbehalten.", terms: "Allgemeine Geschäftsbedingungen", privacy: "Datenschutzerklärung", sitemap: "Sitemap" },
    floating: { quote24h: "24h Angebot" },
    features: { "pneumaticSuspension": "Luftfederung", "airConditioning": "Klimaanlage", "sleepingCabin": "Schlafkabine", "automaticTransmission": "Automatikgetriebe", "nonSlipFlooring": "Rutschfester Boden", "ledLighting": "LED-Beleuchtung", "ventilation": "Belüftung", "handsFreeeKit": "Freisprecheinrichtung", "aluminum": "Aluminium", "alkoSuspension": "AL-KO Federung", "rubberFlooring": "Gummiboden" },
    common: { "readMore": "Mehr lesen", "learnMore": "Mehr erfahren", "getQuote": "Angebot anfordern", "contact": "Kontakt", "phone": "Telefon", "email": "E-Mail", "address": "Adresse", "previous": "Vorherige", "next": "Nächste", "close": "Schließen", "open": "Öffnen", "menu": "Menü", "loading": "Laden...", "error": "Fehler", "success": "Erfolg", "cancel": "Abbrechen", "confirm": "Bestätigen", "save": "Speichern", "edit": "Bearbeiten", "delete": "Löschen", "add": "Hinzufügen", "remove": "Entfernen", "search": "Suchen", "filter": "Filtern", "sort": "Sortieren", "clear": "Löschen", "apply": "Anwenden", "reset": "Zurücksetzen", "submit": "Senden", "back": "Zurück", "continue": "Weiter", "finish": "Beenden", "skip": "Überspringen", "retry": "Wiederholen", "refresh": "Aktualisieren", "reload": "Neu laden", "update": "Aktualisieren", "download": "Herunterladen", "upload": "Hochladen", "share": "Teilen", "copy": "Kopieren", "paste": "Einfügen", "cut": "Ausschneiden", "undo": "Rückgängig", "redo": "Wiederholen", "select": "Auswählen", "deselect": "Abwählen", "selectAll": "Alle auswählen", "deselectAll": "Alle abwählen", "expand": "Erweitern", "collapse": "Einklappen", "show": "Anzeigen", "hide": "Verbergen", "view": "Ansehen", "preview": "Vorschau", "print": "Drucken", "export": "Exportieren", "import": "Importieren", "help": "Hilfe", "about": "Über", "settings": "Einstellungen", "preferences": "Einstellungen", "account": "Konto", "profile": "Profil", "logout": "Abmelden", "login": "Anmelden", "register": "Registrieren", "forgotPassword": "Passwort vergessen", "changePassword": "Passwort ändern", "ok": "OK", "new": "Neu", "used": "Gebraucht", "leisure": "Freizeit", "competition": "Wettkampf", "professional": "Professionell", "immediately": "Sofort", "months": "Monate", "horsesCapacity": "Pferde", "bestseller": "Bestseller", "onlyXDaysLeft": "Nur noch 3 Tage", "favorite": "Favorit", "newArrival": "Neuankömmling", "promotion": "Aktion", "limitedOffer": "Begrenztes Angebot", "expertiseGuaranteed": "Expertise garantiert", "featuredVehicles": "Empfohlene Fahrzeuge", "premiumSelection": "Premium-Auswahl", "ourBest": "Unsere Besten", "offersVehicles": "Angebote & Fahrzeuge", "discoverSelection": "Entdecken Sie unsere Auswahl", "km": "km", "moreEquipment": "weitere Ausstattung", "savings": "Ersparnis", "promotionalPrice": "Aktionspreis", "financingAvailable": "Finanzierung verfügbar", "discoverCharacteristics": "Eigenschaften entdecken", "addToMySelection": "Zu meiner Auswahl hinzufügen", "viewDetails": "Details ansehen", "viewAll": "Alle ansehen", "vehicles": "Fahrzeuge", "models": "Modelle", "upTo15Off": "Bis zu -15%", "specialOffers": "Sonderangebote", "mostRequested": "Am meisten nachgefragt", "newArrivals2024": "Neuheiten 2024", "bestPrice": "Bester Preis", "discoverCollection": "Entdecken Sie unsere Kollektion", "receiveOffer24h": "Erhalten Sie Ihr Angebot in 24h", "personalizedExchange": "Persönlicher Austausch" }
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