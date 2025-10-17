import React, { createContext, useContext, useState, useEffect } from "react";
import { getDeviceLanguage, getTranslation, getNestedTranslation } from "./i18n";
import { Language, TranslationKeys } from "./types";

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  translations: TranslationKeys;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(getDeviceLanguage());
  const [translations, setTranslations] = useState<TranslationKeys>(getTranslation(language));

  useEffect(() => {
    setTranslations(getTranslation(language));
  }, [language]);

  const t = (key: string): string => {
    return getNestedTranslation(translations, key);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useTranslation must be used within a LanguageProvider");
  }
  return context;
};
