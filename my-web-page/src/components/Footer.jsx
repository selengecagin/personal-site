import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faCodepen,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  const { data } = useContext(DataContext);
  const { footer } = data;

  return (
    <div className="footer">
      <h3>{footer?.title}</h3>
      <p>{footer?.text}</p>
      <p>{footer?.email}</p>
      <div className="icons">
        <FontAwesomeIcon icon={faTwitter} />
        <FontAwesomeIcon icon={faCodepen} />
        <FontAwesomeIcon icon="fa-solid fa-at" />
        <FontAwesomeIcon icon={faInstagram} />
      </div>
    </div>
  );
}
