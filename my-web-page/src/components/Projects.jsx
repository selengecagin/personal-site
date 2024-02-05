import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Projects() {
  const { data, loading, error } = useContext(DataContext);
  const { projects, projectTexts } = data;

  return (
    <div>
      <h2>Projects</h2>
      {projects?.map((project, i) => {
        <div>
          <h4>{project}</h4>
          <p>{projectTexts && projectTexts[i]}</p>
        </div>;
      })}
    </div>
  );
}
