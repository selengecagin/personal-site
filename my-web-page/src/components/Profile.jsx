import React, { useContext } from "react";
import { DataContext } from "../context/DataContext";

export default function Profile() {
  const { data } = useContext(DataContext);
  const { profile, imgURL, aboutMe } = data;

  // {key:"birthDate",title:"Doğum Tarihi"}

  // this way, we couldt specify titles such as title: "Doğum Tarihi "
  // const infoTitles = profile ? Object.keys(profile).map((key) => ({
  //       key,
  //       title: key.charAt(0).toUpperCase() + key.slice(1),
  //     }))
  //   : [];

  return (
    <div>
      <div>
        <h3>Basic Information</h3>
        {profile && (
          <div>
            {infoTitles.map(({ key, title }) => (
              <div key={key}>
                <strong>{title}</strong>: <p>{profile[key]}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      <div>
        <img src="imgURL" alt="profile-image" />
      </div>
      <div>
        <h3>About Me</h3>
        {/* about me map */}
      </div>
    </div>
  );
}
