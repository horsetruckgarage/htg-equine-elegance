import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { TranslationContext, Language, translations } from '@/hooks/useTranslation';
import { extractLanguageFromPath, getLocalizedPath } from '@/hooks/useLocalizedRouting';

interface TranslationProviderProps {
  children: React.ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  
  const [language, setLanguage] = useState<Language>(() => {
    // First, try to get language from URL
    const { language: urlLang } = extractLanguageFromPath(window.location.pathname);
    if (urlLang && ['fr', 'en', 'es', 'de'].includes(urlLang)) {
      return urlLang;
    }
    
    // Then try to get from localStorage
    const savedLang = localStorage.getItem('htg-language') as Language;
    if (savedLang && ['fr', 'en', 'es', 'de'].includes(savedLang)) {
      return savedLang;
    }
    
    // Then try to get from browser language
    const browserLang = navigator.language.split('-')[0] as Language;
    if (['fr', 'en', 'es', 'de'].includes(browserLang)) {
      return browserLang;
    }
    
    // Default to French
    return 'fr';
  });

  // Synchroniser les changements de route avec la langue
  useEffect(() => {
    const { language: urlLang } = extractLanguageFromPath(location.pathname);
    if (urlLang !== language) {
      setLanguage(urlLang);
    }
  }, [location.pathname]);

  useEffect(() => {
    localStorage.setItem('htg-language', language);
  }, [language]);

  // Fonction pour changer de langue avec redirection
  const changeLanguage = (newLanguage: Language) => {
    const { basePath } = extractLanguageFromPath(location.pathname);
    const newPath = getLocalizedPath(basePath, newLanguage);
    setLanguage(newLanguage);
    navigate(newPath, { replace: true });
  };

  const value = {
    language,
    setLanguage: changeLanguage,
    t: translations[language],
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};