import { createContext, useContext, useEffect, useState } from "react";
import i18n from '../i18n';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    // align state with detected/remembered language from i18next on mount
    const detected = i18n.resolvedLanguage || i18n.language;
    if (detected && detected !== language) {
      setLanguage(detected);
    }
  }, []);

  const toggleLanguage = () => {
    setLanguage(prev => {
      const next = prev === 'es' ? 'en' : 'es';
      try { i18n.changeLanguage(next); } catch {}
      return next;
    });
  };

  // reflect current language on <html lang="...">
  if (typeof document !== 'undefined') {
    const html = document.documentElement;
    if (html && html.lang !== language) html.lang = language;
  }

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
