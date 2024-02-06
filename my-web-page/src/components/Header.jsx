import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Header() {
  const { data } = useContext(DataContext);
  const { name } = data;
  return <div>{name}</div>;
}
