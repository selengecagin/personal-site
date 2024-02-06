import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";
export default function Profile() {
  const { data } = useContext(DataContext);
  const { profile, imgURL, aboutMe } = data;
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
    <div className="profile-container">
      <h2>Profile</h2>
      
      <div className="profile-item">
        <h3>Basic Information</h3>

        <div>
          <p>Birthdate</p>
          <p>{profile?.birthDate}</p>
        </div>

        <div>
          <p>Current Adress</p>
          <p>{profile?.location}</p>
        </div>

        <div>
          <p>Education</p>
          <p>{profile?.education}</p>
        </div>

        <div>
          <p>Preferred Role</p>
          <p>{profile?.preferredPosition}</p>
        </div>
      </div>

      <div className="profile-item">
        <img src="imgURL" />
      </div>

      <div className="profile-item">
        <h3>About Me</h3>
        {aboutMe?.map((value, i) => {
          <p key={i}>{value}</p>;
        })}

        {/* there are 2 solutions to solve undefined errors: */}
        {/* {aboutMe &&
          aboutMe.map((paragraph, index) => <p key={index}>{paragraph}</p>)} */}
      </div>
    </div>
  );
}
