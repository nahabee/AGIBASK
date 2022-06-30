import React, { useState } from "react";

import NavBar from "../NavBar";
import dataForest from "../../data/dataForest";
import ForestCardList from "./ForestCardList";
import { NavLink } from "react-router-dom";

const FindYourForest = () => {
  const [locations, setLocations] = useState([]);

  let cityNames = [];
  dataForest.map(
    (forest) =>
      !cityNames.includes(forest.location) && cityNames.push(forest.location)
  );
  return (
    <div className="relative">
      <div className="flex w-full h-full relative sm:flex-col">
        <div className="w-1/2 h-screen bg-green-dark flex flex-col sm:w-screen ">
          <h1 className="font-title text-white mt-20 text-center uppercase text-4xl border-y border-green-forest p-2 sm:mt-0">
            {" "}
            Choose your spot{" "}
          </h1>
          <div className="mt-8 gap-3 flex justify-center sm:flex sm:flex-wrap sm:gap-5 sm:mt-4 ">
            {cityNames.map((city, index) => (
              <button
                className="flex w-auto bg-none hover:bg-green-forest font-body border border-green-forest p-2 rounded-lg text-sm text-white sm:w-auto sm:h-10 sm:justify-center"
                {...(city === locations ? "button" : "button")}
                key={index}
                value={city}
                onClick={(e) => setLocations(e.target.value)}
              >
                {city}
              </button>
            ))}
          </div>
          <div className="w-full flex gap-6 snap-x snap-mandatory overflow-x-auto pb-14 scrollbar-hide  ">
            <div className="snap-end shrink-0 ">
              <div className="shrink-0 w-4 " />
            </div>
            <div className="flex gap-5 snap-end shrink-0">
              {locations.length !== 0
                ? dataForest
                    .filter((forest) => forest.location == locations)
                    .map((forest, index) => (
                      <ForestCardList forest={forest} key={index} />
                    ))
                : dataForest.map((forest, index) => (
                    <ForestCardList forest={forest} key={index} />
                  ))}
            </div>
            <div className="snap-end shrink-0 ">
              <div className="shrink-0 w-4 "></div>
            </div>
          </div>
          <div className="mt-4 ">
            <h1 className="font-title text-white text-center uppercase text-4xl border-y border-green-forest p-2 -mt-16 sm:mt-12 ">
              {" "}
              JOIN US{" "}
            </h1>
            <div className="flex justify-around sm:my-6 ">
              <NavLink to="/ForestCreateEvent">
                <button className="hover:bg-green-forest font-body border border-green-forest p-2 rounded-lg text-sm text-white mt-8 sm:mt-5">
                  {" "}
                  CREATE CLEANING SESSION{" "}
                </button>
              </NavLink>
              <NavLink to="/ForestJoinEvent">
                <button className="hover:bg-green-forest font-body border border-green-forest p-2 rounded-lg text-sm text-white mt-8 sm:mt-5">
                  {" "}
                  JOIN CLEANING SESSION{" "}
                </button>{" "}
              </NavLink>
            </div>
          </div>
        </div>

        <div className="w-1/2 h-full relative sm:w-screen ">
          <img
            className="object-cover h-screen w-screen"
            src="../assets/green.jpg"
            alt="green forest"
          />
        </div>
        <div className="absolute top-0 ">
          <NavBar />
        </div>
      </div>
    </div>
  );
};

export default FindYourForest;
