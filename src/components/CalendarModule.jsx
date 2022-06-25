import React, { useState } from "react";
import Calendar from "react-calendar";
import Time from "./Time";

function CalendarModule() {
  const [date, setDate] = useState(new Date());
  const [showTime, setShowTime] = useState(false);

  return (
    <div className="font-body text-white border border-blue-gold w-2/5 p-8 text-2xl rounded-lg">
      <Calendar
        onChange={setDate}
        value={date}
        selectRange={true}
        showNeighboringMonth={false}
        onClickDay={() => setShowTime(true)}
      />
      {date.length > 0 ? (
        <p className="text-center mt-8">
          {" "}
          <a className="font-title text-2xl uppercase">Start:</a>{" "}
          {date[0].toDateString()} &nbsp; &nbsp;{" "}
          <a className="font-title text-2xl uppercase">End:</a>{" "}
          {date[1].toDateString()}
        </p>
      ) : (
        <div className="text-left mt-5">
          <span className="font-title uppercase text-2xl">Selected date:</span>{" "}
          <a className="font-body bg-blue-gold p-1 rounded-lg mx-5">
            {date.toDateString()}
          </a>
        </div>
      )}
      <Time showTime={showTime} date={date} />
    </div>
  );
}

export default CalendarModule;
