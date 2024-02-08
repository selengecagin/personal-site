import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faCodepen,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../context/ThemeContext";

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
        <h3 className="text-[48px] font-bold">{footer?.title}</h3>

        <p>{footer?.text}</p>

        <p>{footer?.email}</p>

        <div className="icons">
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faCodepen} />
          <FontAwesomeIcon icon={faAt} />
          <FontAwesomeIcon icon={faInstagram} />
        </div>
      </div>
    </div>
  );
}
