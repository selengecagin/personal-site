import React from "react";
import { createContext } from "react";

export default function ThemeContextProvider({ children }) {
  return <ThemeContext.Provider>{children}</ThemeContext.Provider>;
}
export const ThemeContext = createContext();
