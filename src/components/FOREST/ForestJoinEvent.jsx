import NavBar from "../NavBar";
import ForestEventCalendar from "../forest/ForestEventCalendar";
import { NavLink } from "react-router-dom";

const ForestJoinEvent = () => {
  return (
    <div className="h-screen w-screen bg-green-dark ">
      <NavBar />
      <div className="flex flex-col items-left">
        <h1 className="font-title text-6xl mt-16 text-white text-center border-y p-5 border-green-forest sm:text-2xl sm:mt-0 sm:mx-6">
          WELCOME TO THE CURRENT EVENTS SPACE.{" "}
        </h1>
        <div className="flex mt-6 justify-center sm:flex-wrap">
          <p className="text-white text-xl text-justify font-body p-5 w-2/5 sm:w-auto ">
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
            <a className="uppercase font-title text-2xl sm:hidden">
              Earn your eco badge after three monthly participations in events
            </a>
            <span className="flex w-1/2 -ml-20 -mt-16 pt-7 sm:hidden">
              <img className=" sm:hidden" src="../assets/flogoUN.png " />
              <img
                className="sm:hidden -ml-40 "
                src="../assets/flogoDEUX.png"
              />
              <img
                className="-ml-40 sm:hidden "
                src="../assets/flogoTROIS.png"
              />
            </span>
            <a className="-mt-80 uppercase font-title text-2xl sm:hidden">
              After three badges, win a 25% voucher at the St Jean de Luz
              market.{" "}
            </a>
          </p>
          <ForestEventCalendar />
        </div>
      </div>
    </div>
  );
};

export default ForestJoinEvent;
