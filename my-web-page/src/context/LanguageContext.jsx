import React, { useState } from "react";
import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const LanguageContext = createContext();


export default function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useLocalStorage("language", "en");

  const toggleLanguage = () => {
    language === "en" ? setLanguage("tr") : setLanguage("en");
  };
// -----------
 useEffect(() => {
   const showLng = language === "en" ? dataEng : dataTr;
   setData(showLng);
 }, [language, setData]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

