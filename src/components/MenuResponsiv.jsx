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
            ? "flex-col flex items-center fixed inset-0 full bg-black backdrop-blur-sm gap-20 justify-center"
            : "hidden"
        }
      >
        <div className="absolute right-6 xs:hidden top-6 scale-x-100 z-50">
          <Close onClick={showMenu} className="cursor-pointer scale-x-100" />
        </div>
        <li className=" absolute hover:underline decoration-solid decoration-primary-1">
          <Link to="/">HOME</Link>
        </li>
        <li className="absolute hover:underline decoration-solid decoration-primary-1 z-50">
          <Link to="/Ocean">OCEAN</Link>
        </li>
        <li className="absolute hover:underline decoration-solid decoration-primary-1 z-50">
          <Link to="/Forest">FOREST</Link>
        </li>
        <li className="absolute hover:underline decoration-solid decoration-primary-1 z-50">
          <Link to="/AboutUs">ABOUT US</Link>
        </li>
      </ul>
    </div>
  );
};

MenuResponsiv.propTypes = {
  showMenu: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};
export default MenuResponsiv;
