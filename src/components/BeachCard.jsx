import React from "react";
import { useParams, NavLink } from "react-router-dom";
import databeach from "../data/dataBeach";

const BeachCard = () => {
  const { id } = useParams();
  const beach = databeach.find((beach) => beach.id == id);
  // au clic la plage
  return (
    <div className="shrink-0 w-96 h-48 rounded-lg shadow-xl bg-white">
      <h1 className="">{beach.name}</h1>
      <img className="" src={beach.img} alt={beach.name} />
      <p>{beach.desc}</p>
      {beach.events.dates[0] == "jj-mm-aaaa" ? (
        <h2 className="">Pas de date disponible...</h2>
      ) : (
        beach.events.dates.map((date, index) => (
          <div className="" key={index}>
            {date}
          </div>
        ))
      )}
      <NavLink to="/Form">
        <div className="">Nouveau Projet</div>
      </NavLink>
    </div>
  );
};

export default BeachCard;
