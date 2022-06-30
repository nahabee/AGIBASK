import { NavLink } from "react-router-dom";
import EventModal from "../EventModal";

const OceanEventCalendar = () => {
  return (
    <div className="w-2/5 sm:w-auto sm:bg-blue-dark">
      <header className="bg-none border-blue-gold border rounded-lg space-y-4 p-4 ">
        <div className="flex items-center justify-between">
          <h2 className="font-title uppercase text-2xl text-white">Events</h2>
          <NavLink to="/OceanCreateCleaning">
            <a className="hover:bg-blue-light group flex items-center rounded-md bg-blue-gold text-white text-sm font-title pl-2 pr-3 py-2 shadow-sm">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="mr-2"
                aria-hidden="true"
              >
                <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
              </svg>
              New
            </a>
          </NavLink>
        </div>
      </header>
      {/* Div parente parente des blocs de projets */}
      <div className="flex gap-3 ">
        {/* event 1 */}
        <div className="bg-white p-4 border border-white rounded-lg  text-blue-gold my-2 w-1/2    hover:border-blue-dark">
          <h1 className="font-title uppercase text-center ">
            Collection and recovery of marine litter
          </h1>
          <h2 className="font-body ">
            Meeting point in Anglet.
            <br /> Departure scheduled for 1 p.m.
            <br /> Date: 06/27/22
          </h2>
          <div className="col-start-2 row-start-1 bg-none row-end-3 sm:mt-4 lg:mt-0 xl:mt-4 p-2    hover:border-blue-dark">
            <div className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
              <div className="w-6 h-6 rounded-full ring-1 ring-white">
                <img
                  src="./assets/girl-users/lili.png "
                  alt="user.name"
                  className="scale-200 "
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <EventModal />
        </div>
        {/* event 1 */}

        {/* event 2 */}
        <div className="flex flex-col w-1/2 border border-white rounded-lg bg-white p-4  text-blue-gold my-2    hover:border-blue-dark">
          <h1 className="font-title uppercase text-center ">
            Waste collection and awareness of global warming
          </h1>
          <h2 className="font-body">
            Meeting point in Biarritz.
            <br /> Departure scheduled for 4 p.m.
            <br /> Date: 09/17/22
          </h2>

          {/* users icon */}
          <div className="col-start-2 row-start-1 bg-none row-end-3 sm:mt-4 lg:mt-0 xl:mt-4 p-2    hover:border-blue-dark">
            <div className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
              <div className="w-6 h-6 rounded-full ring-1 ring-white">
                <img
                  src="./assets/man-users/un.png "
                  alt="user.name"
                  className="scale-200 "
                  loading="lazy"
                />
              </div>
              <div className="w-6 h-6 rounded-full ring-1 ring-white">
                <img
                  src="./assets/man-users/deux.png "
                  alt="user.name"
                  className="scale-200 "
                  loading="lazy"
                />
              </div>
              <div className="w-6 h-6 rounded-full ring-1 ring-white">
                <img
                  src="./assets/man-users/trois.png "
                  alt="user.name"
                  className="scale-200 "
                  loading="lazy"
                />
              </div>
              <div className="w-6 h-6 rounded-full ring-1 ring-white">
                <img
                  src="./assets/man-users/quatre.png "
                  alt="user.name"
                  className="scale-200 "
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          {/* users icon end */}
          <EventModal />
        </div>
        {/* event 2 */}
      </div>
      <div className="flex gap-3">
        {/* event 3 */}
        <div className="flex flex-col w-1/2 border border-white rounded-lg bg-white p-4 text-blue-gold    hover:border-blue-dark">
          <h1 className="font-title uppercase text-center  ">
            Coastal clean-up and diner{" "}
          </h1>
          <h2 className="font-body">
            Meeting point in Bidart.
            <br /> Departure scheduled for 5 p.m.
            <br /> Date: 07/12/22
          </h2>
          {/* users icon */}
          <div className="col-start-2 row-start-1 bg-none row-end-3 sm:mt-4 lg:mt-0 xl:mt-4 p-2    hover:border-blue-dark">
            <div className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
              <div className="w-6 h-6 rounded-full ring-1 ring-white">
                <img
                  src="./assets/man-users/quatorze.png "
                  alt="user.name"
                  className="scale-200 "
                  loading="lazy"
                />
              </div>
              <div className="w-6 h-6 rounded-full ring-1 ring-white">
                <img
                  src="./assets/man-users/treize.png "
                  alt="user.name"
                  className="scale-200 "
                  loading="lazy"
                />
              </div>
              <div className="w-6 h-6 rounded-full ring-1 ring-white">
                <img
                  src="./assets/girl-users/lise.png "
                  alt="user.name"
                  className="scale-200 "
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          {/* users icon end */}
          <EventModal />
        </div>
        {/* event 4 */}
        <div className="flex flex-col w-1/2 border border-white rounded-lg bg-white p-4 text-blue-gold    hover:border-blue-dark">
          <h1 className="font-title uppercase text-center ">
            Coastal clean-up and picnic
          </h1>
          <h2 className="font-body">
            Meeting point in Guéthary.
            <br /> Departure scheduled for 12 a.m.
            <br /> Date: 15/07/22
          </h2>
          {/* users icon */}
          <div className="col-start-2 row-start-1 bg-none row-end-3 sm:mt-4 lg:mt-0 xl:mt-4 p-2    hover:border-blue-dark">
            <div className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
              <div className="w-6 h-6 rounded-full ring-1 ring-white">
                <img
                  src="./assets/man-users/neuf.png "
                  alt="user.name"
                  className="scale-200 "
                  loading="lazy"
                />
              </div>
              <div className="w-6 h-6 rounded-full ring-1 ring-white">
                <img
                  src="./assets/girl-users/Pamela.png "
                  alt="user.name"
                  className="scale-200 "
                  loading="lazy"
                />
              </div>
              <div className="w-6 h-6 rounded-full ring-1 ring-white">
                <img
                  src="./assets/man-users/quinze.png "
                  alt="user.name"
                  className="scale-200 "
                  loading="lazy"
                />
              </div>
              <div className="w-6 h-6 rounded-full ring-1 ring-white">
                <img
                  src="./assets/girl-users/amelie.png "
                  alt="user.name"
                  className="scale-200 "
                  loading="lazy"
                />
              </div>
              <div className="w-6 h-6 rounded-full ring-1 ring-white">
                <img
                  src="./assets/girl-users/Cathy.png "
                  alt="user.name"
                  className="scale-200 "
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          {/* users icon end */}
          <EventModal />
        </div>
      </div>
    </div>
  );
};

export default OceanEventCalendar;
