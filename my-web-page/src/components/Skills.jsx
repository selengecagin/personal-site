import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Skills() {
  const { data } = useContext(DataContext);
  const { skills } = data;

  return (
    <div
      className={`flex sm:pl-[15%] sm:py-[5%] pb-8 flex-col sm:flex-row justify-center items-center 
      sm:items-start 
       py-[0] sm:gap-[5%] m-auto
      `}
    >
      {/* div için: ${theme === "dark" ? "bg-[#252128]" : "bg-[#FFFFFF]"} */}
      <h2 className={`font-bold text-[3rem] text-[#3730A3] `}>
        {/* h2 için: ${theme === "dark" ? "text-[#CBF281]" : "text-[#4731D3]"} */}
        Skills
      </h2>
      <div className="skill-box-container flex items-start ">
        <ul className="flex list-none flex-wrap sm: sm:flex-wrap  flex-col sm:flex-row sm:items-start">
          {/* !!!! */}
          {skills &&
            Object.keys(skills).map((skillName) => (
              <li
                key={skillName}
                className="flex items-center justify-center sm:justify-start flex-col sm:flex-row sm:mr-[50px] min-w-[425px]"
              >
                <img
                  src={skills[skillName]}
                  alt={skillName}
                  className=" w-[120px] h-[120px]
                  "
                />
                <div className={`text-xl sm:text-xl sm:max-h-[720px] `}>
                  {/* div için:  ${
                    theme === "dark" ? "text-[#FFFFFF]" : "text-[#777777]"
                  } */}
                  {skillName}
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
