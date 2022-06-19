import React, { useState } from "react";
import Calendar from "react-calendar";
import dataBeach from "../data/dataBeach";
import BeachCardList from "./BeachCardsList";

const FindYourOcean = () => {
  const [locations, setLocations] = useState([]);

  let cityNames = [];
  dataBeach.map(
    (beach) =>
      !cityNames.includes(beach.location) && cityNames.push(beach.location)
  );

  return (
    <div className="findYourOcean">
      <div className="findYourOcean__bg" />
      <h1 className="findYourOcean__title">AGI' BASK</h1>
      <h2 className="findYourOcean__subtitle">
        Trouve ta communauté pour nettoyer la plage.
      </h2>

      <div className="findYourOcean__selector">
        <div className="findYourOcean__selector__city">
          <label className="findYourOcean__selector__city__title">
            ↡ Filtrer par ville ↡
          </label>

          {cityNames.map((city, index) => (
            <button
              className={
                city === locations
                  ? "findYourOcean__selector__city__buttonOn"
                  : "findYourOcean__selector__city__button"
              }
              key={index}
              value={city}
              onClick={(e) => setLocations(e.target.value)}
            >
              {city}
            </button>
          ))}
        </div>
      </div>
      {locations.length !== 0
        ? dataBeach
            .filter((beach) => beach.location == locations)
            .map((beach, index) => <BeachCardList beach={beach} key={index} />)
        : dataBeach.map((beach, index) => (
            <BeachCardList beach={beach} key={index} />
          ))}
    </div>
  );
};

export default FindYourOcean;
