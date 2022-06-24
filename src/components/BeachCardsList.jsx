import React from "react";
import PropTypes from "prop-types";

const BeachCardsList = ({ beach }) => {
  return (
    <div className="flex flex-col text-white w-96 mt-8 text-justify font-body sm:w-40">
      <img
        className="shrink-0 w-96 h-48 rounded-lg shadow-xl bg-white"
        src={beach.img}
        alt={beach.name}
      />

      <h1 className="">{beach.name}</h1>
      <h2 className="">{beach.location}</h2>
      <p className="">{beach.desc}</p>
    </div>
  );
};

BeachCardsList.propTypes = {
  beach: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    length: PropTypes.string.isRequired,
  }).isRequired,
};

export default BeachCardsList;
