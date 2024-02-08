import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
export default function Profile() {
  const { data } = useContext(DataContext);
  const { profile, heroIMG, aboutMe } = data;
  console.log(data);
  //burayı nasıl mapleyebilirim?
  // {key:"birthDate",title:"Doğum Tarihi"}
  // ****** this way, title names couldn't be specified title: "Doğum Tarihi "
  // const infoTitles = profile ? Object.keys(profile).map((key) => ({
  //       key,
  //       title: key.charAt(0).toUpperCase() + key.slice(1),
  //     }))
  //   : [];

  return (
    <div
      className={`sm:bg-[#3730A3] flex flex-col flex-wrap sm:no-wrap sm:pl-[15%] sm:pr-[10%] sm:py-[5%] sm:pb-20 justify-evenly `}
    >
      {/* yukarıdaki div için 
        ${theme === "dark"
        ? "bg-[#171043] text-[#FFFFFF]"
        : "bg-[#4731D3] text-[#FFFFFF]"} */}

      <div className="flex sm:flex-start justify-center sm:justify-start mt-12 sm:mt-0">
        <h2 className={`font-bold text-[3rem] text-[#CBF281] `}>
          {/* h2 için : ${
          theme === "dark" ? "text-[#CBF281]" : "text-[#CBF281]"
        } */}
          Profile
        </h2>
      </div>
      <div className="flex justify-center items-center sm:items-start flex-col sm:flex-row text-left flex-wrap sm:no-wrap mt-5">
        <div className="sm:w-1/3 sm:text-2xl">
          <h3 className="sm:text-3xl mt-12 text-[#CBF281]">
            Basic Information
          </h3>

          <div className="flex">
            <p className="font-inter font-semibold text-xl leading-6 text-[#CBF281] mt-8 w-36">
              Birth date
            </p>
            <p className="font-inter font-normal text-base leading-6 text-[#FFFFFF] mt-8 w-36">
              {profile?.birthDate}
            </p>
          </div>

          <div className="flex">
            <p className="font-inter font-semibold text-xl leading-6 text-[#CBF281] mt-8 w-36">
              Current Adress
            </p>
            <p className="font-inter font-normal text-base leading-6 text-[#FFFFFF] mt-8 w-36">
              {profile?.location}
            </p>
          </div>

          <div className="flex">
            <p className="font-inter font-semibold text-xl leading-6 text-[#CBF281] mt-8 w-36">
              Education
            </p>
            <p className="font-inter font-normal text-base leading-6 text-[#FFFFFF] mt-8 w-36">
              {profile?.education}
            </p>
          </div>

          <div className="flex">
            <p className="font-inter font-semibold text-xl leading-6 text-[#CBF281] mt-8 w-36">
              Preferred Role
            </p>
            <p className="font-inter font-normal text-base leading-6 text-[#FFFFFF] mt-8 w-36">
              {profile?.preferredPosition}
            </p>
          </div>
        </div>

        <div className="sm:w-1/3 mt-[50px] ">
          <img className="sm:w-[450px]" src={heroIMG} alt="Profile" />
        </div>
        <div className="sm:w-1/3">
          <h3 className="sm:text-3xl px-2 sm:text-left  mt-12 sm:mb-12 mb-5 sm:pl-10 text-center  text-[#FFFFFF]">
            About Me
          </h3>
          {aboutMe?.map((value, i) => (
            <p
              className="mb-12 px-5 sm:pl-10  sm:text-start sm:text-xl sm:px-2 text-center  text-[#FFFFFF]"
              key={i}
            >
              {value}
            </p>
          ))}
          {/* there are 2 solutions to solve undefined errors: */}
          {/* {aboutMe && aboutMe.map((paragraph, index) => <p key={index}>{paragraph}</p>)} */}
          {/*{aboutMe?.map((value, i) => {<p key={i}>{value}</p>;})} */}
        </div>
      </div>
    </div>
  );
}
