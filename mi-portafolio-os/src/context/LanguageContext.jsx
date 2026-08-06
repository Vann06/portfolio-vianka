import { createContext, useContext, useEffect, useState } from "react";
import i18n from '../i18n';

const LanguageContext = createContext();

function normalizeLanguage(value) {
  return value?.split("-")[0] === "en" ? "en" : "es";
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() =>
    normalizeLanguage(i18n.resolvedLanguage || i18n.language)
  );

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const toggleLanguage = () => {
    const next = language === "es" ? "en" : "es";

    setLanguage(next);
    i18n.changeLanguage(next).catch((error) => {
      console.error("Could not change language", error);
    });
  };

  return (
    <LanguageContext.Provider
      value={{ language, setLanguage, toggleLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
