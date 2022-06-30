import { NavLink } from "react-router-dom";
import ForestEventModal from "../forest/ForestEventModal";

const ForestEventCalendar = () => {
  return (
    <div className="w-2/5 sm:w-auto sm:bg-green-dark">
      <header className="bg-none border-green-forest border rounded-lg space-y-4 p-2 sm:p-0 sm:space-y-0">
        <div className="flex items-center justify-between sm:justify-center sm:gap-6">
          <h2 className="font-title uppercase text-2xl text-white sm:text-center sm:my-4">
            Events
          </h2>
          <NavLink to="/ForestCreateEvent">
            <a className="hover:bg-green-light group flex items-center rounded-md bg-green-forest text-white text-sm font-title pl-2 pr-3 py-2 shadow-sm">
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
      <div className="flex gap-3 sm:w-auto sm:mx-6 sm:my-6">
        {/* event 1 */}
        <div className="bg-white p-4 border border-white rounded-lg  text-green-forest my-2 w-1/2 hover:border-green-dark">
          <h1 className="font-title uppercase text-center ">
            Stroll in a park.
          </h1>
          <h2 className="font-body ">
            Meeting point in Bayonne.
            <br /> Departure scheduled for 8 a.m.
            <br /> Date: 07/09/22
          </h2>
          <div className="col-start-2 row-start-1 bg-none row-end-3 sm:mt-4 lg:mt-0 xl:mt-4 p-2 hover:border-green-dark">
            <div className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5 sm:mt-6">
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
                  src="./assets/girl-users/Stacy.png "
                  alt="user.name"
                  className="scale-200 "
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <ForestEventModal />
        </div>
        {/* event 1 */}

        {/* event 2 */}
        <div className="flex flex-col w-1/2 border border-white rounded-lg bg-white p-4  text-green-forest my-2    hover:border-green-dark">
          <h1 className="font-title uppercase text-center ">
            Walk in the forest with games.
          </h1>
          <h2 className="font-body">
            Meeting point in Fagosse.
            <br /> Departure scheduled for 4 p.m.
            <br /> Date: 09/28/22
          </h2>

          {/* users icon */}
          <div className="col-start-2 row-start-1 bg-none row-end-3 sm:mt-4 lg:mt-0 xl:mt-4 p-2    hover:border-green-dark">
            <div className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
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
                  src="./assets/man-users/sept.png "
                  alt="user.name"
                  className="scale-200 "
                  loading="lazy"
                />
              </div>
              <div className="w-6 h-6 rounded-full ring-1 ring-white">
                <img
                  src="./assets/man-users/dix.png "
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
          <ForestEventModal />
        </div>
        {/* event 2 */}
      </div>
      <div className="flex gap-3 sm:mx-6 sm:my-6">
        {/* event 3 */}
        <div className="flex flex-col w-1/2 border border-white rounded-lg bg-white p-4 text-green-forest    hover:border-green-dark">
          <h1 className="font-title uppercase text-center  ">
            Recycling of waste.{" "}
          </h1>
          <h2 className="font-body">
            Meeting point in Urt.
            <br /> Departure scheduled for 9 a.m.
            <br /> Date: 11/12/22
          </h2>
          {/* users icon */}
          <div className="col-start-2 row-start-1 bg-none row-end-3 sm:mt-4 lg:mt-0 xl:mt-4 p-2    hover:border-green-dark">
            <div className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
              <div className="w-6 h-6 rounded-full ring-1 ring-white">
                <img
                  src="./assets/man-users/douze.png "
                  alt="user.name"
                  className="scale-200 "
                  loading="lazy"
                />
              </div>
              <div className="w-6 h-6 rounded-full ring-1 ring-white">
                <img
                  src="./assets/man-users/huit.png "
                  alt="user.name"
                  className="scale-200 "
                  loading="lazy"
                />
              </div>
              <div className="w-6 h-6 rounded-full ring-1 ring-white">
                <img
                  src="./assets/girl-users/jade.png "
                  alt="user.name"
                  className="scale-200 "
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          {/* users icon end */}
          <ForestEventModal />
        </div>
        {/* event 4 */}
        <div className="flex flex-col w-1/2 border border-white rounded-lg bg-white p-4 text-green-forest    hover:border-green-dark">
          <h1 className="font-title uppercase text-center ">
            Prevention of forest fires.
          </h1>
          <h2 className="font-body">
            Meeting point in Anglet.
            <br /> Departure scheduled for 12 a.m.
            <br /> Date: 23/07/22
          </h2>
          {/* users icon */}
          <div className="col-start-2 row-start-1 bg-none row-end-3 sm:mt-4 lg:mt-0 xl:mt-4 p-2    hover:border-green-dark">
            <div className="flex justify-end sm:justify-start lg:justify-end xl:justify-start -space-x-1.5">
              <div className="w-6 h-6 rounded-full ring-1 ring-white">
                <img
                  src="./assets/girl-users/helene.png "
                  alt="user.name"
                  className="scale-200 "
                  loading="lazy"
                />
              </div>
              <div className="w-6 h-6 rounded-full ring-1 ring-white">
                <img
                  src="./assets/girl-users/romane.png "
                  alt="user.name"
                  className="scale-200 "
                  loading="lazy"
                />
              </div>
              <div className="w-6 h-6 rounded-full ring-1 ring-white">
                <img
                  src="./assets/man-users/vingt.png "
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
          <ForestEventModal />
        </div>
      </div>
    </div>
  );
};

export default ForestEventCalendar;
