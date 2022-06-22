import React from "react";

import NavBar from "./NavBar";

const FindYourOcean = () => {
  return (
    <div className="relative">
      <div className="flex w-full h-full relative ">
        <div className="w-full h-full relative ">
          <img
            className="object-cover h-screen w-screen"
            src="../public/assets/oceandark.jpg"
            alt="ocean"
          />
        </div>
        <div className="w-screen h-screen bg-blue-dark"></div>
      </div>
      <div className="absolute top-0 ">
        <NavBar />
      </div>
    </div>
  );
};

export default FindYourOcean;
