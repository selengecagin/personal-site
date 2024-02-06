import React, { useState } from "react";
import { createContext } from "react";

export const LanguageContext = createContext();


export default function LanguageContextProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((lng) => (lng === "en" ? "tr" : "en"));
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
