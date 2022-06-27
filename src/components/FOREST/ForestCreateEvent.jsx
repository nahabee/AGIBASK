import NavBar from "../NavBar";
import ForestCalendar from "../calendar/ForestCalendar";
import { NavLink } from "react-router-dom";

const ForestCreateEvent = () => {
  return (
    <div className="h-screen w-screen bg-green-dark ">
      <NavBar />
      <div className="flex flex-col items-left sm:flex">
        <h1 className="font-title text-6xl mt-16 text-white text-center border-y p-5 border-green-forest sm:text-2xl sm:mt-0 sm:mx-6">
          WELCOME TO THE CREATING SPACE.{" "}
        </h1>
        <div className="flex mt-8 justify-center sm:flex-wrap sm:mt-0">
          <p className="text-white text-xl text-justify font-body p-5 w-2/5 sm:w-auto">
            <span className="text-2xl font-title uppercase">Here</span> you can
            create your cleaning session with the date you prefer. Everyone can
            join and share the experience with you. Don't forget to post the
            details and the forest you choose. If you just want to{" "}
            <NavLink
              className="text-green-forest uppercase hover:underline hover:decoration-1 font-title underline-offset-4"
              to="/ForestJoinEvent"
            >
              join
            </NavLink>{" "}
            a session it's possible too. Don't hesitate to add an hour of
            meeting and a place. And don't forget to have fun! Together it's
            better.
            <br />
            <a className="uppercase font-title text-2xl sm:hidden">
              OWN your eco badge, for your first event created.
            </a>
            <div className="flex w-1/2 -ml-20 -mt-16 pt-7 sm:hidden">
              <img className=" " src="./assets/flogoUN.png" />
              <img className=" -ml-40 " src="./assets/flogoDEUX.png" />
              <img className="-ml-40  " src="./assets/flogoTROIS.png" />
            </div>
            <a className="-mt-80 uppercase font-title text-2xl sm:hidden">
              After three badges, win a €10 voucher at the Biarritz designer
              market.{" "}
            </a>
          </p>
          <div className="">
            <ForestCalendar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForestCreateEvent;
