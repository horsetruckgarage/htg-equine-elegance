import { useNavigate, useLocation } from 'react-router-dom';
import { Language } from './useTranslation';

// Mapping des routes pour chaque langue
export const routeTranslations: Record<Language, Record<string, string>> = {
  fr: {
    '/': '/',
    '/camions': '/camions-chevaux',
    '/vans': '/vans-chevaux', 
    '/remorques': '/vans-chevaux',
    '/about': '/a-propos',
    '/contact': '/contact',
    '/devis': '/demande-devis',
    '/occasions': '/occasions',
    '/vehicule': '/vehicule'
  },
  en: {
    '/': '/',
    '/camions': '/horse-trucks',
    '/vans': '/horse-vans',
    '/remorques': '/horse-vans', 
    '/about': '/about',
    '/contact': '/contact',
    '/devis': '/quote',
    '/occasions': '/used-vehicles',
    '/vehicule': '/vehicle'
  },
  es: {
    '/': '/',
    '/camions': '/camiones-para-caballos',
    '/vans': '/furgonetas-para-caballos',
    '/remorques': '/furgonetas-para-caballos',
    '/about': '/acerca-de',
    '/contact': '/contacto', 
    '/devis': '/presupuesto',
    '/occasions': '/ocasiones',
    '/vehicule': '/vehiculo'
  },
  de: {
    '/': '/',
    '/camions': '/pferdetransporter',
    '/vans': '/pferde-vans',
    '/remorques': '/pferde-vans',
    '/about': '/ueber-uns',
    '/contact': '/kontakt',
    '/devis': '/angebot',
    '/occasions': '/gebrauchte',
    '/vehicule': '/fahrzeug'
  }
};

// Fonction pour obtenir le chemin localisé
export const getLocalizedPath = (path: string, language: Language): string => {
  // Gérer les chemins avec paramètres (comme /vehicule/trucks/1)
  const vehicleRoutePattern = /^\/vehicule\/([^\/]+)\/([^\/]+)$/;
  const match = path.match(vehicleRoutePattern);
  
  if (match) {
    const [, type, id] = match;
    const vehicleBasePath = routeTranslations[language]['/vehicule'] || '/vehicule';
    return `/${language}${vehicleBasePath}/${type}/${id}`;
  }
  
  // Pour les routes simples
  const translatedPath = routeTranslations[language][path] || path;
  return `/${language}${translatedPath === '/' ? '' : translatedPath}`;
};

// Fonction pour extraire la langue de l'URL et convertir le chemin localisé en chemin de base
export const extractLanguageFromPath = (pathname: string): { language: Language; basePath: string } => {
  const segments = pathname.split('/');
  const possibleLang = segments[1] as Language;

  const findBaseFromAnyLanguage = (translated: string): string => {
    // 1) Routes avec paramètres véhicule
    const vehiclePattern = /^\/([^\/]+)\/([^\/]+)\/([^\/]+)$/;
    const vm = translated.match(vehiclePattern);
    if (vm) {
      const [, vehicleBase, type, id] = vm;
      for (const lang of Object.keys(routeTranslations) as Language[]) {
        const entry = Object.entries(routeTranslations[lang]).find(([, tp]) => tp === '/' + vehicleBase);
        if (entry) {
          const [baseKey] = entry; // ex: '/vehicule'
          return `${baseKey}/${type}/${id}`;
        }
      }
    }

    // 2) Routes simples
    for (const lang of Object.keys(routeTranslations) as Language[]) {
      const entry = Object.entries(routeTranslations[lang]).find(([, tp]) => tp === translated);
      if (entry) {
        const [baseKey] = entry; // ex: '/camions'
        return baseKey;
      }
    }

    // 3) Aucun match: retourner tel quel
    return translated === '/' ? '/' : translated;
  };

  if (['fr', 'en', 'es', 'de'].includes(possibleLang)) {
    const pathWithoutLang = '/' + segments.slice(2).join('/');

    // D'abord, essayer dans la langue de l'URL
    const vehicleRoutePattern = /^\/([^\/]+)\/([^\/]+)\/([^\/]+)$/;
    const match = pathWithoutLang.match(vehicleRoutePattern);

    if (match) {
      const [, vehicleBase] = match;
      const reverseMapping = Object.entries(routeTranslations[possibleLang]).find(
        ([, translatedPath]) => translatedPath === '/' + vehicleBase
      );
      if (reverseMapping) {
        const [basePath] = reverseMapping;
        const [, , type, id] = match;
        return { language: possibleLang, basePath: `${basePath}/${type}/${id}` };
      }
      // Sinon, tenter de trouver via toutes les langues
      return { language: possibleLang, basePath: findBaseFromAnyLanguage(pathWithoutLang) };
    }

    // Routes simples
    const reverseMapping = Object.entries(routeTranslations[possibleLang]).find(
      ([, translatedPath]) => translatedPath === pathWithoutLang
    );
    if (reverseMapping) {
      return { language: possibleLang, basePath: reverseMapping[0] };
    }

    // Fallback: rechercher dans toutes les langues
    return { language: possibleLang, basePath: findBaseFromAnyLanguage(pathWithoutLang) };
  }

  // Si pas de langue dans l'URL, retourner français par défaut
  return { language: 'fr', basePath: pathname };
};

// Hook personnalisé pour la navigation localisée
export const useLocalizedRouting = () => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const navigateLocalized = (path: string, language: Language) => {
    const localizedPath = getLocalizedPath(path, language);
    navigate(localizedPath);
  };
  
  const getCurrentLanguageFromUrl = (): Language => {
    const { language } = extractLanguageFromPath(location.pathname);
    return language;
  };
  
  const getCurrentBasePath = (): string => {
    const { basePath } = extractLanguageFromPath(location.pathname);
    return basePath;
  };
  
  return {
    navigateLocalized,
    getCurrentLanguageFromUrl,
    getCurrentBasePath,
    getLocalizedPath
  };
};