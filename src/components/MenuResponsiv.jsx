import { Close } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const MenuResponsiv = ({ showMenu, active }) => {
  return (
    <div className="z-50 fixed">
      <ul
        className={
          active
            ? "flex-col flex items-center fixed inset-0 full bg-green-dark backdrop-blur-sm gap-20 justify-center"
            : "hidden"
        }
      >
        <div className="absolute right-6 xs:hidden top-6 scale-x-100 z-50">
          <Close onClick={showMenu} className="cursor-pointer scale-x-100" />
        </div>
        <li className=" absolute top-10 hover:underline decoration-solid font-body text-xl mt-40">
          <Link to="/">Home</Link>
        </li>
        <li className="absolute mt-60 top-20 hover:underline decoration-solid font-body text-xl">
          {" "}
          <Link to="/Ocean">Ocean</Link>
        </li>
        <li className="absolute top-30 mt-52 hover:underline decoration-solid font-body text-xl">
          <Link to="/Forest">Forest</Link>
        </li>
        <li className="absolute top-48 mt-96 hover:underline decoration-solid font-body text-xl">
          <Link to="/AboutUs">About Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuResponsiv;
