import React from "react";

import { useParams } from "react-router-dom";
import dataforest from "../../data/dataforest";

const ForestCard = () => {
  const { id } = useParams();

  const forest = dataforest.find((forest) => forest.id == id);
  return (
    <div className="shrink-0 w-96 h-48 rounded-lg shadow-xl bg-white  ">
      <h1 className="text-base">{forest.name}</h1>
      <img src={forest.img} alt={forest.name} />
      <p>{forest.desc}</p>
    </div>
  );
};

export default ForestCard;
