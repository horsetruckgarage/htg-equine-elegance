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
  
  const [language, setLanguage] = useState<Language>('fr');

  // Désactivation de la synchronisation URL -> langue (on reste en FR pour Google Translate)
  useEffect(() => {
    if (language !== 'fr') setLanguage('fr');
  }, [language]);

  useEffect(() => {
    localStorage.setItem('htg-language', language);
  }, [language]);

  const changeLanguage = (_newLanguage: Language) => {
    const { basePath } = extractLanguageFromPath(location.pathname);
    const newPath = getLocalizedPath(basePath, 'fr');
    if (language !== 'fr') setLanguage('fr');
    if (location.pathname !== newPath) {
      navigate(newPath, { replace: true });
    }
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