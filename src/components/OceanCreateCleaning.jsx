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
          <p className="text-white text-lg text-justify font-body p-5 w-2/5 ">
            Here you can create your cleaning session with the date you prefer.
            Everyone can join and share the experience with you. Don't forget to
            post the details and the beach you choose. Don't hesitate to add an
            hour of meeting and a place. And don't forget to have fun! Together
            it's better.
          </p>
          <CalendarModule />
        </div>
      </div>
    </div>
  );
};

export default OceanCreateCleaning;
