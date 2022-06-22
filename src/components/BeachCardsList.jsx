import React from "react";
import PropTypes from "prop-types";

const BeachCardsList = ({ beach }) => {
  return <></>;
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
