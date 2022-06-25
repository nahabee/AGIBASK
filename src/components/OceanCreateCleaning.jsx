import NavBar from "./NavBar";
import CalendarModule from "./CalendarModule";

const OceanCreateCleaning = () => {
  return (
    <div className="h-screen w-screen bg-blue-dark ">
      <NavBar />
      <div className="flex flex-col items-left">
        <h1 className="font-title text-6xl mt-20 text-white text-center border-y p-5 border-blue-gold">
          WELCOME TO THE CREATING SPACE.{" "}
        </h1>
        <div className="flex mt-10 justify-center">
          <p className="text-white text-xl text-justify font-body p-5 w-2/5 ">
            <span className="text-2xl font-title uppercase">Here</span> you can
            create your cleaning session with the date you prefer. Everyone can
            join and share the experience with you. Don't forget to post the
            details and the beach you choose. Don't hesitate to add an hour of
            meeting and a place. And don't forget to have fun! Together it's
            better.
            <br />
            <a className="uppercase font-title text-2xl">
              OWN your eco badge, for your first event created.
            </a>
            <div className="flex w-1/2 -ml-20 -mt-16 pt-7">
              <img className=" " src="./assets/ecologo.png" />
              <img className=" -ml-40 " src="./assets/ecologo2.png" />
              <img className="-ml-40  " src="./assets/ecologo3.png" />
            </div>
            <a className="-mt-80 uppercase font-title text-2xl">
              After three badges, win a €10 voucher at the Biarritz designer
              market.{" "}
            </a>
          </p>
          <CalendarModule />
        </div>
      </div>
    </div>
  );
};

export default OceanCreateCleaning;
