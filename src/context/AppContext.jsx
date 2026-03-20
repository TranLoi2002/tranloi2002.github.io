import { createContext, useState } from "react";

export const AppContext = createContext();

const translations = {
  en: {
    about: "About",
    projects: "Projects",
    contact: "Contact",
    hero: "Backend Developer"
  },
  vi: {
    about: "Giới thiệu",
    projects: "Dự án",
    contact: "Liên hệ",
    hero: "Backend Developer"
  }
};
export function AppProvider({ children }) {
  const [theme, setTheme] = useState("dark");
  const [lang, setLang] = useState("en");

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        lang,
        setLang,
        t: translations[lang]
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
