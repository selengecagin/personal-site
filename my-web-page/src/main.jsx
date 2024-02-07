import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import LanguageContextProvider from "./context/LanguageContext.jsx";
import { DataProvider } from "./context/DataContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LanguageContextProvider>
    <DataProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </DataProvider>
  </LanguageContextProvider>
);
