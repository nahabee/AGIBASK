import React from "react";

import NavBar from "./NavBar";

const FindYourOcean = () => {
  return (
    <div className="relative">
      <div className="flex w-full h-full relative sm:flex-col">
        <div className="w-full h-full relative ">
          <img
            className="object-cover h-screen w-screen"
            src="../public/assets/oceandark.jpg"
            alt="ocean"
          />
          <img
            className="absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36  md:hidden"
            src="../public/assets/scroll.png"
            alt="scroll mouse"
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
