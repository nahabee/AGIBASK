import { NavLink } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex flex-row">
      <div className=" flex flex-col justify-start w-1/2 ">
        <img
          className="object-cover h-screen"
          src="../public/assets/nature.jpg"
          alt="feuilles verts"
        />
      </div>
      <div className="flex flex-col text-center w-1/2 h-screen bg-green-dark ">
        <h1 className="text-white font-title text-8xl mt-16 ">AGI-BASK</h1>
        <p className="font-body text-lg text-white ">
          The community you need to find your next green mission.
        </p>
        <div className="flex flex-row w-40 absolute bottom-0 right-50 ">
          <img src="../public/assets/nature.png" alt="logo feuille" />
          <img src="../public/assets/monde.png" alt="logo planete" />
          <img src="../public/assets/ocean.png" alt="logo ocean" />
        </div>
      </div>

      <NavLink to="/Home">
        <button className="font-body w-52 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-5 rounded-full bg-white text-lg hover:text-green-light ">
          Get Started
        </button>
      </NavLink>
    </div>
  );
};

export default LandingPage;
