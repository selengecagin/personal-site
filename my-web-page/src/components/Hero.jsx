import React, { useContext } from "react";
import Header from "./Header";
import { DataContext } from "../context/DataContext";

export default function Hero() {
  const { data, loading, error } = useContext(DataContext);
  const { header, description, imgURL, buttons } = data;

  return (
    <div>
      <Header />
      <h1>{header}</h1>
      <p>{description}</p>
      <img src={imgURL}></img>
      {/* buttonları maple */}
      <p>{buttons}</p>
      <p>{buttons}</p>
    </div>
  );
}
