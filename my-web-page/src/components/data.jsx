return (
  <div
  // className={`flex flex-col flex-wrap sm:no-wrap sm:pl-[15%] sm:pr-[10%] sm:py-[5%] sm:pb-20 justify-evenly ${
  //   theme === "dark"
  //     ? "bg-[#171043] text-[#FFFFFF]"
  //     : "bg-[#4731D3] text-[#FFFFFF]"
  // }`}
  >
    <div className="flex sm:flex-start justify-center sm:justify-start mt-12 sm:mt-0">
      <h2
      // className={`font-bold text-[3rem] ${
      //   theme === "dark" ? "text-[#CBF281]" : "text-[#CBF281]"
      // }`}
      >
        Profile
      </h2>
    </div>
    <div className="flex justify-center items-center sm:items-start flex-col sm:flex-row text-left flex-wrap sm:no-wrap mt-5">
      <div className="sm:w-1/3 sm:text-2xl">
        <h3 className="sm:text-4xl mt-12">Basic Information</h3>

        <div>
          <p className="greenColor">Birth date</p>
          <p>{profile?.birthDate}</p>
        </div>

        <div>
          <p className="greenColor">Current Adress</p>
          <p>{profile?.location}</p>
        </div>

        <div>
          <p className="greenColor">Education</p>
          <p>{profile?.education}</p>
        </div>

        <div>
          <p className="greenColor">Preferred Role</p>
          <p>{profile?.preferredPosition}</p>
        </div>
      </div>

      <div className="sm:w-1/3 mt-[50px] ">
        <img className="sm:w-[350px]" src={profile?.profileIMG} alt="Profile" />
      </div>
      <div className="sm:w-1/3">
        <h3 className="sm:text-3xl px-2 sm:text-left sm:text-4xl mt-12 sm:mb-12 mb-5 sm:pl-10 text-center ">
          About Me
        </h3>
        {aboutMe?.map((value, i) => {
          <p key={i}>{value}</p>;
        })}
        {/* there are 2 solutions to solve undefined errors: */}
        {/* {aboutMe && aboutMe.map((paragraph, index) => <p key={index}>{paragraph}</p>)} */}
        {/*{aboutMe?.map((value, i) => {<p key={i}>{value}</p>;})} */}
      </div>
    </div>
  </div>
);
