import React from "react";
import { createContext } from "react";

export default function LanguageContextProvider({ children }) {
  return <LanguageContext.Provider>{children}</LanguageContext.Provider>;
}

export const LanguageContext = createContext();
