import React, { useState } from "react";
import Footer from "./Footer";
import ReactPlayer from "react-player";

import { Link } from "react-router-dom";
import { MenuOutlined } from "@material-ui/icons";
import MenuResponsiv from "./MenuResponsiv";

const AboutUs = () => {
  const [active, setActive] = useState(false);
  const showMenu = () => {
    setActive(!active);
  };
  return (
    <div className="relative">
      <div className="flex flex-col relative ">
        <div className="w-cover h-cover relative ">
          <ReactPlayer
            url={"../public/assets/nature.mp4"}
            muted={true}
            width="100%"
            height="100%"
            playing
            loop
          />
          <Link to="/">
            <img
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer sm:w-[50%]"
              src="../public/assets/logo.png"
              width="20%"
            />
          </Link>
        </div>
        <div className="w-screen h-screen bg-blue-dark">
          <div className="w-1/3 mt-20 ml-10 sm:w-4/5">
            <div className="flex flex-col p-2 bg-transparent border-t border-b rounded-3xl font-body text-justify text-white">
              <h1 className="text-6xl text-left mx-6 mb-3 sm:text-5xl">
                {" "}
                ABOUT US,
              </h1>
              <p className="mx-6 overscroll-x-auto overflow-auto h-60 mb-3 cursor-ns-resize sm:mb-6">
                A plateform and foundation for connecting individuals and
                associations for ecological and collective purposes in the
                Basque country. The team is sensitive, a bit green and above all
                "BASK", we cultivate the hope that one day, perhaps, our
                beautiful region will be respected at its fair value...So how
                are we going to fight to PRESERVE OUR REGION? With a simple and
                effective interface to connect more easily the actors of the
                protection of our beautiful region in order to carry out more
                concrete and sustainable actions. For who? Volunteers,
                associations, enthusiasts, motivated! When? Throughout the year,
                take advantage of the platform to follow live event proposals,
                register there or even create your own. The goal? Reduce the
                impact of pollution and educate the general public to safeguard
                our territory.
              </p>
              <img
                className="absolute top-[67%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 md:hidden"
                src="../public/assets/scroll.png"
                alt="scroll mouse"
              />
            </div>
          </div>
          <Footer />
        </div>
      </div>
      <div className="absolute top-0 ">
        {/* black navBar */}
        <div className="relative ">
          <nav className="font-title absolute  bg-transparent sm:justify-around ">
            <ul className="space-x-72 ml-40 flex bg-transparent mt-5 text-xl lg:hidden">
              <li className="hover:underline decoration-solid text-black">
                <Link to="/">HOME </Link>
              </li>
              <li className="hover:underline decoration-solid text-black">
                <Link to="/Ocean">OCEAN</Link>
              </li>
              <li className="hover:underline decoration-solid text-black ">
                <Link to="/Forest">FOREST</Link>
              </li>
              <li className="hover:underline decoration-solid flex text-black  flex-row">
                <Link to="/AboutUs">ABOUT</Link>
              </li>
            </ul>
          </nav>
          <div className="fixed right-6 xs:hidden top-5 scale-x-100 z-40 text-white  ">
            <MenuOutlined
              onClick={showMenu}
              className="scale-150 cursor-pointer"
            />
          </div>
          <div className="fixed z-50 text-white">
            <MenuResponsiv showMenu={showMenu} active={active} />
          </div>
        </div>
        {/* End of navbar and burger */}
      </div>
    </div>
  );
};

export default AboutUs;
