import React, { useState } from "react";
import Footer from "./Footer";
import Subscribe from "./about/Subscribe";

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
        <div className="w-screen h-screen bg-green-dark">
          <div className="w-screen justify-around mt-20 flex sm:flex-col sm:items-center sm:gap-5 sm:mt-2 sm:w-auto sm:justify-self-stretch">
            <div className="flex flex-col w-2/5 p-2 bg-transparent font-body text-justify text-white sm:w-4/5">
              <h1 className="text-6xl font-title text-left pb-10 sm:text-5xl">
                {" "}
                ABOUT US,
              </h1>
              <p className="overscroll-x-auto overflow-auto h-60 text-lg cursor-ns-resize sm:mb-6 sm:text-base">
                <span className="text-green-gold">
                  A plateform and foundation
                </span>{" "}
                for connecting individuals and associations for ecological and
                collective purposes in the Basque country.{" "}
                <span className="text-green-gold">The team</span> is sensitive,
                a bit green and above all "BASK", we cultivate the hope that one
                day, perhaps, our beautiful region will be respected at its fair
                value...So how are we going to fight to PRESERVE OUR REGION?
                With a simple and effective interface to connect more easily the
                actors of the protection of our beautiful region in order to
                carry out more concrete and sustainable actions.{" "}
                <span className="text-green-gold">For who?</span> Volunteers,
                associations, enthusiasts, motivated!{" "}
                <span className="text-green-gold">When?</span> Throughout the
                year, take advantage of the platform to follow live event
                proposals, register there or even create your own.{" "}
                <span className="text-green-gold">The goal?</span> Reduce the
                impact of pollution and educate the general public to safeguard
                our territory.
              </p>
              <a className="text-sm text-green-gold mt-2 italic ">
                Scroll to read more.
              </a>
            </div>
            <div className="flex justify-end items-right sm:h-auto ">
              <Subscribe />
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
              <li className="hover:underline decoration-solid flex text-black flex-row">
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
