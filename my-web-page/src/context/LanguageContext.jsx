import React, { useState } from "react";
import { createContext } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const LanguageContext = createContext();

export default function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useLocalStorage("language", "en");

  const toggleLanguage = () => {
    language === "en" ? setLanguage("tr") : setLanguage("en");
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

//Notes:
// const MyComponent = () => {
//   const language = useContext(LanguageContext);

//   return <div>Current language: {language}</div>;
// };

// const MyComponent = () => {
//   const language = useLanguage();

//   return <div>Current language: {language}</div>;
// };
