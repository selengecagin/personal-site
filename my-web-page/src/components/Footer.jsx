import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
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

  return (
    <div className={`flex justify-center py-20`}>
      <div className="sm:w-1/3">
        <h3 className="text-[48px] font-bold text-[#3730A3] text-center">
          {footer?.title}
        </h3>
        <p className={`text-[30px] px-12 leading-10 pt-5 text-center`}>
          {footer?.text}
        </p>
        <p className="pt-10 text-xl underline text-[#3730A3] text-center">
          {footer?.email}
        </p>
        <div className="px-5 justify-center space-x-4 mt-4 text-[#3730A3] text-center">
          <FontAwesomeIcon icon={faTwitter} className="text-2xl" />
          <FontAwesomeIcon icon={faCodepen} className="text-2xl" />
          <FontAwesomeIcon icon={faAt} className="text-2xl" />
          <FontAwesomeIcon icon={faInstagram} className="text-2xl" />
        </div>
      </div>
    </div>
  );
}
