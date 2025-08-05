import React, { useState, useEffect } from 'react';
import { TranslationContext, Language, translations } from '@/hooks/useTranslation';

interface TranslationProviderProps {
  children: React.ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Try to get language from localStorage first
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

  useEffect(() => {
    localStorage.setItem('htg-language', language);
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};