import Times from "./Times.jsx";

import React from "react";

function Time(props) {
  return (
    <div className="bg-blue-gold rounded-lg text-center font-body">
      {props.showTime ? <Times date={props.date} /> : null}
    </div>
  );
}

export default Time;
