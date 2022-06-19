import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@material-ui/icons";
import MenuResponsiv from "./MenuResponsiv";

const NavBar = () => {
  // --> change nav background on scroll <---
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 10) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
    if (color) setColor(false);
  };
  return (
    <div className="relative">
      <nav className="font-title absolute bg-transparent sm:justify-around ">
        <ul className="w-4/6 space-x-4 flex justify-around bg-transparent lg:hidden">
          <li className="hover:underline decoration-solid ">
            <Link to="/">HOME </Link>
          </li>
          <li className="hover:underline decoration-solid ">
            <Link to="/Ocean">OCEAN</Link>
          </li>
          <li className="hover:underline decoration-solid">
            <Link to="/Forest">FOREST</Link>
          </li>
          <li className="hover:underline decoration-solid ">
            <Link to="/AboutUs">ABOUT US</Link>
          </li>
        </ul>
      </nav>
      <div className="fixed right-6 xs:hidden top-5 scale-x-100 z-40 text-white">
        <MenuOutlined onClick={showMenu} className="scale-150 cursor-pointer" />
      </div>
      <div className="fixed z-50 text-white">
        <MenuResponsiv showMenu={showMenu} active={active} />
      </div>
    </div>
  );
};

export default NavBar;
