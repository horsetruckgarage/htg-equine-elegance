import { useNavigate, useLocation } from 'react-router-dom';
import { Language } from './useTranslation';

// Mapping des routes pour chaque langue
export const routeTranslations: Record<Language, Record<string, string>> = {
  fr: {
    '/': '/',
    '/camions': '/camions-chevaux',
    '/vans': '/vans-chevaux', 
    '/remorques': '/remorques-chevaux',
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
    '/remorques': '/horse-trailers', 
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
    '/remorques': '/remolques-para-caballos',
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
    '/remorques': '/pferde-anhaenger',
    '/about': '/ueber-uns',
    '/contact': '/kontakt',
    '/devis': '/angebot',
    '/occasions': '/gebrauchte',
    '/vehicule': '/fahrzeug'
  }
};

// Fonction pour obtenir le chemin localisé
export const getLocalizedPath = (path: string, language: Language): string => {
  const translatedPath = routeTranslations[language][path] || path;
  return `/${language}${translatedPath === '/' ? '' : translatedPath}`;
};

// Fonction pour extraire la langue de l'URL et convertir le chemin localisé en chemin de base
export const extractLanguageFromPath = (pathname: string): { language: Language; basePath: string } => {
  const segments = pathname.split('/');
  const possibleLang = segments[1] as Language;
  
  if (['fr', 'en', 'es', 'de'].includes(possibleLang)) {
    const localizedPath = '/' + segments.slice(2).join('/');
    
    // Convertir le chemin localisé en chemin de base
    const reverseMapping = Object.entries(routeTranslations[possibleLang]).find(
      ([basePath, translatedPath]) => translatedPath === localizedPath
    );
    
    const basePath = reverseMapping ? reverseMapping[0] : (localizedPath === '/' ? '/' : localizedPath);
    return { language: possibleLang, basePath };
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