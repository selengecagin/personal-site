import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Header() {
  const { data } = useContext(DataContext);
  const { name } = data;
  return (
    <div className="header">
      <h3 className="text-[#CBF281] text-[2rem] mt-8 "> {name}</h3>
    </div>
  );
}
