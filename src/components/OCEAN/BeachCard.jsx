import React from "react";
import { useParams } from "react-router-dom";
import databeach from "../../data/dataBeach";

const BeachCard = () => {
  const { id } = useParams();
  const beach = databeach.find((beach) => beach.id == id);
  // au clic la plage
  return (
    <div className="shrink-0 w-96 h-48 rounded-lg shadow-xl bg-white">
      <h1>{beach.name}</h1>
      <img src={beach.img} alt={beach.name} />
      <p>{beach.desc}</p>
    </div>
  );
};

export default BeachCard;
