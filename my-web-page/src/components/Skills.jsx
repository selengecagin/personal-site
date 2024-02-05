import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Skills() {
  const { data } = useContext(DataContext);
  const { skills } = data;

  return (
    <div>
      <h2>Skills</h2>
      <ul>
        {/* skills? checks if skills exists and maps only then over the array.  */}
        {skills?.map((skill, index) => {
          <li key={index}>{skill}</li>;
        })}
      </ul>
    </div>
  );
}
