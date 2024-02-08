import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { ThemeContext } from "../context/ThemeContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faCodepen,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const { data } = useContext(DataContext);
  const { footer } = data;
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`flex justify-center py-20 ${
        theme === "dark"
          ? "bg-[#252128] text-[#8F88FF]"
          : "bg-[#F9F9F9] text-[#4731D3]"
      }`}
    >
      <div className="sm:w-1/3">
        <h3 className="text-[48px] font-bold">{contact.title}</h3>
        <p
          className={`text-[30px] px-12 leading-10 pt-5 ${
            theme === "dark" ? " text-[#FFFFFF]" : "text-[#120B39]"
          }`}
        >
          {contact.text}
        </p>
        <p className="pt-10 text-xl underline">{contact.email}</p>
        <div className="px-5 justify-center space-x-4 mt-4 ">
          <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
          <FontAwesomeIcon icon={faCodepen} className="text-2xl" />
          <FontAwesomeIcon icon={faAt} className="text-2xl" />
          <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
        </div>
      </div>
    </div>
  );
}
