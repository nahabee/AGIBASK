import NavBar from "../NavBar";
import OceanEventCalendar from "../ocean/OceanEventCalendar";
import { NavLink } from "react-router-dom";

const ForestJoinEvent = () => {
  return (
    <div className="h-screen w-screen bg-green-dark ">
      <NavBar />
      <div className="flex flex-col items-left">
        <h1 className="font-title text-6xl mt-16 text-white text-center border-y p-5 border-green-forest">
          WELCOME TO THE CURRENT EVENTS SPACE.{" "}
        </h1>
        <div className="flex mt-6 justify-center">
          <p className="text-white text-xl text-justify font-body p-5 w-2/5 ">
            <span className="text-2xl font-title uppercase">Here</span> you can
            join the teams already created. Choose the date that suits you, the
            spot that you like and above all do not hesitate to discuss with the
            organizer beforehand and ask him all the questions you need! And if
            you can't find anything, don't hesitate to{" "}
            <NavLink
              className="text-green-forest uppercase hover:underline hover:decoration-1 font-title underline-offset-4"
              to="/ForestCreateEvent"
            >
              create
            </NavLink>{" "}
            your own session!
            <br />
            <a className="uppercase font-title text-2xl">
              Earn your eco badge after three monthly participations in events
            </a>
            <div className="flex w-1/2 -ml-20 -mt-16 pt-7">
              <img className=" " src="./assets/flogoUn.png" />
              <img className=" -ml-40 " src="./assets/flogoDEUX.png" />
              <img className="-ml-40  " src="./assets/flogoTROIS.png" />
            </div>
            <a className="-mt-80 uppercase font-title text-2xl">
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

export default ForestJoinEvent;
