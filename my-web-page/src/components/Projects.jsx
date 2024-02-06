import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Projects() {
  const { data, loading, error } = useContext(DataContext);
  const { projects, projectTexts } = data;

  return (
    <div className="projects-container">
      <h2>Projects</h2>
      {/* use () instead of {} and return the JSX elements explicitly. */}
      <div className="project-box">
        {projects &&
          projects.map((project, index) => (
            <div key={index}>
              <h3>{project}</h3>
              <p>{projectsText && projectsText[index]}</p>
              <img src={projectsImg && projectsImg[index]} />
              <div className="pill"> PILLS</div>
              <div className="links"> LINKS</div>
            </div>
          ))}
      </div>
    </div>
  );
}
