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
      {/* buttons? checks if buttons exists and maps only then over the array.  */}
      {buttons?.map((button, i) => {
        <p key={i}>{button}</p>;
      })}
    </div>
  );
}
