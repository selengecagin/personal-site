import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Skills() {
  const { data } = useContext(DataContext);
  const { skills } = data;

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      <div className="skills-item">
        <ul>
          {/* !!!! */}
          {skills &&
            Object.keys(skills).map((skillName) => (
              <li key={skillName}>
                <img
                  src={skills[skillName]}
                  alt={skillName}
                  style={{ width: "50px", height: "50px", marginRight: "10px" }}
                />
                {skillName}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
