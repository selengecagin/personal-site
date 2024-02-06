import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Footer() {
  const { data } = useContext(DataContext);
  const { footer } = data;

  return (
    <div>
      <h3>{footer?.title}</h3>
      <p>{footer?.text}</p>
      <p>{footer?.email}</p>
    </div>
  );
}
