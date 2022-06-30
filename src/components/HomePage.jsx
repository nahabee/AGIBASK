import { NavLink } from "react-router-dom";
import NavBar from "./NavBar";

const HomePage = () => {
  return (
    <div className="relative">
      <div className="flex w-full h-full relative sm:flex-col">
        <div className="w-full h-full relative ">
          <img
            className="object-cover h-screen w-screen"
            src="../assets/darkwave.jpg"
            alt="ocean"
          />
          <NavLink to="/Ocean">
            <button className="bg-none border border-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-4 px-8 rounded-full text-white font-title text-2xl hover:tracking-widest">
              OCEAN
            </button>
          </NavLink>
          <img
            className="absolute top-[94%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36  md:hidden"
            src="../assets/scroll.png"
            alt="scroll mouse"
          />
        </div>
        <div className="w-full h-full relative">
          <img
            className="object-cover h-screen w-screen "
            src="../assets/greendark.jpg"
            alt="foret"
          />
          <NavLink to="/Forest">
            <button className="bg-none border border-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-4 px-8 rounded-full text-white  font-title text-2xl hover:tracking-widest">
              FORET
            </button>
          </NavLink>
        </div>
      </div>
      <div className="absolute top-0 ">
        <NavBar />
      </div>
    </div>
  );
};

export default HomePage;
