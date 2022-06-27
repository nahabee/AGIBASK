import React, { useState } from "react";
import Calendar from "react-calendar";
import Modal from "../OCEAN/Modal";

function CalendarModule() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="font-body text-white border border-blue-gold p-8 text-2xl rounded-lg sm:w-auto sm:p-0 ">
      <Calendar
        className="font-title text-center uppercase "
        onChange={setDate}
        value={date}
        selectRange={true}
        showNeighboringMonth={false}
      />

      {date.length > 0 ? (
        <p className="text-center mt-8 sm:bg-blue-dark ">
          <h1 className="font-title uppercase text-2xl my-5 sm:text-xl  ">
            Selected dates:{" "}
          </h1>
          <a className="font-title text-2xl uppercase sm:text-xl sm:flex sm:flex-wrap sm:justify-center ">
            Start:
          </a>{" "}
          <a className="font-body text-cyan-400">
            {date[0].toDateString()} &nbsp; &nbsp;{" "}
          </a>
          <a className="font-title text-2xl uppercase sm:text-xl sm:flex sm:flex-wrap sm:justify-center">
            End:
          </a>{" "}
          <a className="font-body text-cyan-400 sm:flex sm:flex-wrap sm:justify-center">
            {date[1].toDateString()}
          </a>
          <Modal />
        </p>
      ) : (
        <div className="text-left mt-5 ">
          <span className="font-title uppercase text-2xl sm:text-xl">
            Date of the day:
          </span>{" "}
          <a className="font-body bg-blue-gold p-1 rounded-lg mx-5 sm:text-lg">
            {date.toDateString()}
          </a>
        </div>
      )}
    </div>
  );
}

export default CalendarModule;
