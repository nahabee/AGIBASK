import React, { useState } from "react";

import NavBar from "../NavBar";
import dataBeach from "../../data/dataBeach";
import BeachCardList from "./BeachCardsList";
import { NavLink } from "react-router-dom";

const FindYourOcean = () => {
  const [locations, setLocations] = useState([]);

  let cityNames = [];
  dataBeach.map(
    (beach) =>
      !cityNames.includes(beach.location) && cityNames.push(beach.location)
  );

  return (
    <div className="relative">
      <div className="flex w-full h-full relative sm:flex-col">
        <div className="w-1/2 h-full relative sm:w-screen ">
          <img
            className="object-cover h-screen w-screen"
            src="../assets/oceandark.jpg"
            alt="ocean dark"
          />
          <img
            className="absolute top-[94%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 md:hidden"
            src="../assets/scroll.png"
            alt="scroll mouse"
          />
        </div>
        <div className="w-1/2 h-screen bg-blue-dark flex flex-col sm:w-screen ">
          <h1 className="font-title text-white mt-20 text-center uppercase text-4xl border-y border-blue-gold p-2 sm:mt-0">
            {" "}
            Choose your spot{" "}
          </h1>
          <div className="mt-8 gap-3 flex justify-center sm:flex sm:flex-wrap sm:gap-10 ">
            {cityNames.map((city, index) => (
              <button
                className="flex w-auto bg-none hover:bg-blue-gold font-body border border-blue-gold p-2 rounded-lg text-sm text-white sm:w-auto sm:h-10 sm:justify-center"
                {...(city === locations ? "button" : "button")}
                key={index}
                value={city}
                onClick={(e) => setLocations(e.target.value)}
              >
                {city}
              </button>
            ))}
          </div>
          <div className="w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-14 scrollbar-hide sm:h-60 ">
            <div className="snap-center shrink-0 ">
              <div className="shrink-0 w-4 " />
            </div>
            <div className="flex gap-5 snap-center shrink-0">
              {locations.length !== 0
                ? dataBeach
                    .filter((beach) => beach.location == locations)
                    .map((beach, index) => (
                      <BeachCardList beach={beach} key={index} />
                    ))
                : dataBeach.map((beach, index) => (
                    <BeachCardList beach={beach} key={index} />
                  ))}
            </div>
            <div className="snap-center shrink-0 ">
              <div className="shrink-0 w-4 "></div>
            </div>
          </div>
          <div className="mt-4 ">
            <h1 className="font-title text-white text-center uppercase text-4xl border-y border-blue-gold p-2 -mt-16 sm:mt-6">
              {" "}
              JOIN US{" "}
            </h1>
            <div className="flex justify-around ">
              <NavLink to="/OceanCreateCleaning">
                <button className="hover:bg-blue-gold font-body border border-blue-gold p-2 rounded-lg text-sm text-white mt-8 sm:mt-5">
                  {" "}
                  CREATE CLEANING SESSION{" "}
                </button>
              </NavLink>
              <NavLink to="/OceanJoinEvent">
                <button className="hover:bg-blue-gold font-body border border-blue-gold p-2 rounded-lg text-sm text-white mt-8 sm:mt-5">
                  {" "}
                  JOIN CLEANING SESSION{" "}
                </button>{" "}
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 ">
        <NavBar />
      </div>
    </div>
  );
};

export default FindYourOcean;
