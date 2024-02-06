import "../App.css";
import React, { useContext } from "react";
import Header from "./Header";
import { DataContext } from "../context/DataContext";
import { LanguageContext } from "../context/LanguageContext";
import { dataEng, dataTr } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
      {/* ********* languagebutton *******/}
      <h1>{header}</h1>
      <p>{description}</p>

      <div className="hero-btn">
        {buttons?.map((button, index) => {
          <div className="btn">
            <button key={index}>
              {index % 2 === 0 ? (
                <FontAwesomeIcon icon={faGithub} size="2x" />
              ) : (
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              )}
            </button>
          </div>;
        })}
      </div>

      <img src={heroImg}></img>
    </div>
  );
}

// notes:
//  add key={index} to avoid "Each child in a list should have a unique 'key' prop"
//  while adding key={index} may suppress the warning, it's best to ensure that each item in the list has a
//  stable and unique identifier to improve the performance and correctness of your React components.
//  Do my solution provide this??
