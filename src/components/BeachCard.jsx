import React from "react";
import { useParams, NavLink } from "react-router-dom";
import databeach from "../data/dataBeach";

const BeachCard = () => {
  const { id } = useParams();
  const beach = databeach.find((beach) => beach.id == id);
  // au clic la plage
  return (
    <div className=" ">
      <div className="w-full flex gap-6 snap-y snap-mandatory overflow-y-auto pb-14 mt-">
        <div className="snap-center shrink-0">
          <div className="shrink-0 w-4 sm:w-48"></div>
        </div>
        <div className="snap-center shrink-0">
          <img
            className="shrink-0 w-96 h-48 rounded-lg shadow-xl bg-white"
            src="https://images.unsplash.com/photo-1604999565976-8913ad2ddb7c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
          />
        </div>
        <div className="snap-center shrink-0">
          <img
            className="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white"
            src="https://images.unsplash.com/photo-1540206351-d6465b3ac5c1?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
          />
        </div>
        <div className="snap-center shrink-0">
          <img
            className="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white"
            src="https://images.unsplash.com/photo-1622890806166-111d7f6c7c97?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
          />
        </div>
        <div className="snap-center shrink-0">
          <img
            className="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white"
            src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
          />
        </div>
        <div className="snap-center shrink-0">
          <img
            className="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white"
            src="https://images.unsplash.com/photo-1575424909138-46b05e5919ec?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
          />
        </div>
        <div className="snap-center shrink-0">
          <img
            className="shrink-0 w-80 h-40 rounded-lg shadow-xl bg-white"
            src="https://images.unsplash.com/photo-1559333086-b0a56225a93c?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=160&amp;q=80"
          />
        </div>
        <div className="snap-center shrink-0">
          <div className="shrink-0 w-4 sm:w-48"></div>
        </div>
      </div>

      <h1 className="">{beach.name}</h1>
      <img className="" src={beach.img} alt={beach.name} />
      <p className="">{beach.desc}</p>
      {beach.events.dates[0] == "jj-mm-aaaa" ? (
        <h2 className="">Pas de date disponible...</h2>
      ) : (
        beach.events.dates.map((date, index) => (
          <div className="" key={index}>
            {date}
          </div>
        ))
      )}
      <NavLink to="/Form">
        <div className="">Nouveau Projet</div>
      </NavLink>
    </div>
  );
};

export default BeachCard;
