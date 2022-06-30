import NavBar from "../NavBar";
import OceanEventCalendar from "./OceanEventCalendar";
import { NavLink } from "react-router-dom";

const OceanJoinEvent = () => {
  return (
    <div className="h-screen w-screen bg-blue-dark ">
      <NavBar />
      <div className="flex flex-col items-left sm:flex">
        <h1 className="font-title text-6xl mt-16 text-white text-center border-y p-5 border-blue-gold sm:text-2xl sm:mt-0 sm:mx-6">
          WELCOME TO THE CURRENT EVENTS SPACE.{" "}
        </h1>
        <div className="flex mt-6 justify-center sm:flex-wrap sm:mt-0">
          <p className="text-white text-xl text-justify font-body p-5 w-2/5 sm:w-auto">
            <span className="text-2xl font-title uppercase">Here</span> you can
            join the teams already created. Choose the date that suits you, the
            spot that you like and above all do not hesitate to discuss with the
            organizer beforehand and ask him all the questions you need! And if
            you can't find anything, don't hesitate to{" "}
            <NavLink
              className="text-blue-gold uppercase hover:underline hover:decoration-1 font-title underline-offset-4"
              to="/OceanCreateCleaning"
            >
              create
            </NavLink>{" "}
            your own session!
            <br />
            <a className="uppercase font-title text-2xl sm:hidden">
              Earn your eco badge after three monthly participations in events
            </a>
            <div className="flex w-1/2 -ml-20 -mt-16 pt-7 sm:hidden">
              <img className=" " src="../assets/ecologo.png" />
              <img className=" -ml-40 " src="../assets/ecologo2.png" />
              <img className="-ml-40  " src="../assets/ecologo3.png" />
            </div>
            <a className="-mt-80 uppercase font-title text-2xl sm:hidden">
              After three badges, win a 25% voucher at the St Jean de Luz
              market.{" "}
            </a>
          </p>
          <OceanEventCalendar />
        </div>
      </div>
    </div>
  );
};

export default OceanJoinEvent;
