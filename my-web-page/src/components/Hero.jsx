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
        {/* <div className="flex items-baseline sm:justify-center mt-5">
          <label class="relative inline-flex items-center me-5 cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" checked />
            <div
              class="w-11 h-6 bg-[#8F88FF] rounded-full peer peer-focus:ring-4 peer-focus:ring-red-300 dark:peer-focus:ring-red-800 dark:bg-gray-700 
            peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full
             peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px]
              after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all
               dark:border-gray-600 peer-checked:bg-red-600"
            ></div>
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
              Red
            </span>
          </label>
        </div> */}
      </div>
    </div>
  );
}

// <input type="checkbox" id="toggle" class="hidden" />
//       <label htmlFor="toggle" class="flex items-center cursor-pointer">
//         <div className="relative">
//           <div className="toggle-area w-14 h-8 bg-[#8F88FF] rounded-full shadow-inner flex items-center justify-center">
//             <div className="toggle-dot absolute w-5 h-5 bg-[#FFE86E] rounded-full shadow inset-y-0 left-0"></div>
//           </div>
//         </div>
//         <div className="ml-3 text-[#4731D3] bold font-bold">DARK MODE</div>
//       </label>
