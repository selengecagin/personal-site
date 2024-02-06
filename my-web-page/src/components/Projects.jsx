import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Projects() {
  const { data, loading, error } = useContext(DataContext);
  const { projects, projectTexts } = data;

  return (
    <div>
      <h2>Projects</h2>
      {/* use () instead of {} and return the JSX elements explicitly. */}
      {projects?.map((project, i) => (
        <div key={i}>
          <h3>{project}</h3>
          <p>{projectTexts && projectTexts[i]}</p>
        </div>
      ))}
    </div>
  );
}
