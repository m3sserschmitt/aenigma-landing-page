import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, LanguageContextType } from '@/types/language';
import { translations } from '@/translations';
import { APP_CONSTANTS } from '@/constants/app';

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>('ro');

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem(APP_CONSTANTS.STORAGE_KEYS.LANGUAGE) as Language;
    if (savedLanguage && (savedLanguage === 'en' || savedLanguage === 'ro')) {
      setLanguageState(savedLanguage);
    }
  }, []);

  // Custom setLanguage function that also saves to localStorage
  const setLanguage = (newLanguage: Language) => {
    setLanguageState(newLanguage);
    localStorage.setItem(APP_CONSTANTS.STORAGE_KEYS.LANGUAGE, newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
