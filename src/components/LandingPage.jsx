import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-row">
      <div className=" flex flex-col justify-start w-1/2 sm:hidden ">
        <img
          className="object-cover h-screen"
          src="../public/assets/nature.jpg"
          alt="feuilles verts"
        />
      </div>
      <div className="flex flex-col text-center w-1/2 h-screen bg-green-dark sm:w-screen ">
        <h1 className="text-white font-title text-8xl mt-16 sm:text-5xl">
          AGI-BASK
        </h1>
        <p className="font-body text-lg text-white sm:mt-10">
          The community you need to find your next green mission.
        </p>
        <img
          className="object-cover h-screen md:hidden"
          src="../public/assets/nature.jpg"
          alt="feuilles verts"
        />
        <div className="flex flex-row w-40 absolute bottom-0 right-60 ">
          <Link to="/Forest">
            <img
              className="absolute bottom-0 left-40 hover:scale-75 ease-in duration-500 sm:hidden "
              src="../public/assets/nature.png"
              alt="logo feuille"
            />
          </Link>

          <Link to="/AboutUs">
            {" "}
            <img
              className="absolute bottom-0  hover:scale-75 ease-in duration-500 sm:hidden"
              src="../public/assets/monde.png"
              alt="logo planete"
            />{" "}
          </Link>
          <Link to="/Ocean">
            <img
              className="absolute bottom-0 right-40 hover:scale-75 ease-in duration-500 sm:hidden"
              src="../public/assets/ocean.png"
              alt="logo ocean"
            />
          </Link>
        </div>
      </div>

      <NavLink to="/Home">
        <button className="font-title w-52 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-full border border-white text-lg hover:tracking-widest ">
          GET STARTED
        </button>
      </NavLink>
    </div>
  );
};

export default LandingPage;
