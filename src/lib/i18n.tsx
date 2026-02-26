import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { Language, translations, TranslationKeys, isRTL } from "./translations";

type I18nContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: TranslationKeys;
  dir: "ltr" | "rtl";
};

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    const saved = localStorage.getItem("cybershield-lang");
    return (saved as Language) || "en";
  });

  const setLang = useCallback((l: Language) => {
    setLangState(l);
    localStorage.setItem("cybershield-lang", l);
  }, []);

  const dir = isRTL(lang) ? "rtl" : "ltr";

  useEffect(() => {
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", lang);
  }, [dir, lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t: translations[lang], dir }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
};
