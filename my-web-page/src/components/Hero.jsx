import "../App.css";
import React, { useContext, useEffect } from "react";
import Header from "./Header";
import { DataContext } from "../context/DataContext";
import { LanguageContext } from "../context/LanguageContext";
import { dataEng, dataTr } from "../data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { ThemeContext } from "../context/ThemeContext";

// run this command and import:
// npm i --save @fortawesome/free-brands-svg-icons
// import { faGithub } from '@fortawesome/free-brands-svg-icons';
// import { faCopy, faQuestionCircle, faQrcode } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
  const { data, setData } = useContext(DataContext);
  const { header, description, heroIMG, buttons } = data;
  const { language, toggleLanguage } = useContext(LanguageContext);
  // const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const showLng = language === "en" ? dataEng : dataTr;
    setData(showLng);
  }, [language, setData]);

  return (
    <div
      className={`hero-container flex flex-wrap-reverse sm:no-wrap justify-center m-auto `}
    >
      {/* ilk div için:  ${
      theme === "dark" ? "bg-[#171043]" : "bg-[#4731D3]"
    } */}
      <div className="sm:bg-[#3730A3]  sm:w-2/3 sm:pl-[15%] sm:pb-20 sm:pt-12 sm:relative ">
        <div className="hero-header flex flex-col justify-center h-auto ">
          <div className="header-right  flex flex-row items-end  content-center justify-around sm:justify-end sm:pl-[55%] sm:pr-[5%]">
            <div className="lng-btn">
              <button onClick={toggleLanguage} className="text-[#CBF281]">
                {language === "en" ? "TÜRKÇE'YE GEÇ" : "SWITCH TO ENGLISH"}
              </button>
            </div>
          </div>
          <div className="header-left flex justify-center sm:justify-start">
            <Header />
          </div>
        </div>
        <div className="hero-container flex flex-col py-[0] justify-center m-auto">
          <div className="flex flex-wrap-reverse sm:flex-nowrap sm:flex-row ">
            <div className="hero-left mb-8 md:mb-0 md:w-1/2 ">
              <h1 className="font-bold text-[3rem] leading-[59.4px] text-[#CBF281] mx-12 sm:ml-0 sm:mt-20 text-left mb-8">
                {header}
              </h1>
              <p className="font-normal text-[24px] mx-12 sm:ml-0 leading-[30px] text-[#FFFFFF] text-left">
                {description}
              </p>
              <div className="hero-btn flex items-center justify-center sm:justify-start mt-6 flex-row gap-2 md:space-x-4">
                {buttons &&
                  buttons.map((btn, index) => (
                    <div key={index}>
                      <button
                        className={`sm:bg-[#fcfcfc] flex w-[127px] h-[52px] rounded-[6px] border-[1px] border-[solid] pl-[12px] pr-[20px,] py-[12px,] text-[#3730A3] flex-row items-center justify-evenly font-medium text-[18px] leading-[28px] mt-8 `}
                      >
                        {/* button için:  ${
                        theme === "dark"
                          ? "bg-[#252128] text-[#FFFFFF]"
                          : "bg-[#FFFFFF] text-[#3730A3]"
                      } */}
                        {index % 2 === 0 ? (
                          <FontAwesomeIcon icon={faGithub} size="2x" />
                        ) : (
                          <FontAwesomeIcon icon={faLinkedin} size="2x" />
                        )}
                        <p className={`text-[1rem] `}>
                          {/*ptagi için:  ${
                          theme === "dark"
                            ? "text-[#FFFFFF]"
                            : "text-[#3730A3]"
                        } */}
                          {btn}
                        </p>
                      </button>
                    </div>
                  ))}
              </div>
            </div>
            <img
              className="hero-right max-w-full h-auto sm:absolute top-[100px] -right-[260px]"
              src={heroIMG}
            />
          </div>
        </div>
      </div>
      <div className="sm:bg-[#CBF281] sm:w-1/3 sm:pr-[20%] sm:pb-20  mb-[10px] sm:mb-0  sm:pt-6">
        {/* Theme button */}
      </div>
    </div>
  );
}
