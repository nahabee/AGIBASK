import React from "react";

import NavBar from "./NavBar";

const FindYourForest = () => {
  return (
    <div className="relative">
      <div className="flex w-full h-full relative sm:flex-col">
        <div className="w-screen h-screen bg-green-dark"></div>

        <div className="w-full h-full relative ">
          <img
            className="object-cover h-screen w-screen"
            src="../public/assets/green.jpg"
            alt="ocean"
          />
        </div>
      </div>
      <div className="absolute top-0 ">
        <NavBar />
      </div>
    </div>
  );
};

export default FindYourForest;
