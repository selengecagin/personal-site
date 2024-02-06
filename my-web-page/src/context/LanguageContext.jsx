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


//Notes:
// const MyComponent = () => {
//   const language = useContext(LanguageContext);

//   return <div>Current language: {language}</div>;
// };

// const MyComponent = () => {
//   const language = useLanguage();

//   return <div>Current language: {language}</div>;
// };