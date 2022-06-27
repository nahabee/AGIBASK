import React from "react";
import PropTypes from "prop-types";

const forestCardList = ({ forest }) => {
  return (
    <div className="flex flex-col text-white w-96 mt-8 text-justify font-body sm:w-40">
      <img
        className="shrink-0 w-96 h-48 rounded-lg shadow-xl bg-white"
        src={forest.img}
        alt={forest.name}
      />

      <h1 className="font-title uppercase text-2xl">{forest.name}</h1>
      <h2 className="italic font-body">{forest.location}</h2>
      <p className="font-body">{forest.desc}</p>
    </div>
  );
};

forestCardList.propTypes = {
  forest: PropTypes.shape({
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
  }).isRequired,
};

export default forestCardList;
