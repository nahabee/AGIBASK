import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const BeachCardsList = ({ beach }) => {
  return (
    <>
      <div className="">
        <h1 className="">{beach.name}</h1>
        <img className="" src={beach.img} alt={beach.name}></img>
        <h2 className="">{beach.location}</h2>
        <p className="">{beach.desc}</p>
        <p className="">
          <span className="">Distance: </span> {beach.length}
        </p>
        <p className="">Prochaines missions:</p>
        <ul className="">
          {beach.events.dates[0] === "jj-mm-aaaa"
            ? ""
            : beach.events.dates.map((date, index) => (
                <li className="" key={index}>
                  {date}
                </li>
              ))}
        </ul>
        {beach.events.dates[0] === "jj-mm-aaaa" ? (
          <NavLink to={`/Beach/${beach.id}`}>
            <button className="" type="button">
              CREER
            </button>
          </NavLink>
        ) : (
          <NavLink to={`/Beach/${beach.id}`}>
            <button className="" type="button">
              PARTICIPER
            </button>
          </NavLink>
        )}
      </div>
    </>
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
