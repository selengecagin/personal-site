import React from "react";
import { createContext } from "react";

export const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export default function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((lng) => (lng === "en" ? "tr" : "en"));
  };

  return <LanguageContext.Provider>{children}</LanguageContext.Provider>;
}
