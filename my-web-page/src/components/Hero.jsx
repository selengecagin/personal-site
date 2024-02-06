import "../App.css";
import React, { useContext } from "react";
import Header from "./Header";
import { DataContext } from "../context/DataContext";
import { LanguageContext } from "../context/LanguageContext";
import { dataEng, dataTr } from "../data";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

// run this command and import:
// npm i --save @fortawesome/free-brands-svg-icons
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faCopy, faQuestionCircle, faQrcode } from '@fortawesome/free-solid-svg-icons';

const languageButton = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <button onClick={toggleLanguage}>
      {language === "en" ? "Türkçe'ye Geç" : " Switch to English"}
    </button>
  );
};

export default function Hero() {
  const { data, loading, error } = useContext(DataContext);
  const { header, description, heroImg, buttons } = data;

  return (
    <div>
      <Header />
      {/* languagebutton */}
      <div className="languageButton"></div>

      <h1>{header}</h1>
      <p>{description}</p>
      <img src={heroImg}></img>
      {/* buttons? checks if buttons exists and maps only then over the array.  */}
      {buttons?.map((button, i) => {
        <p key={i}>{button}</p>;
      })}
    </div>
  );
}
