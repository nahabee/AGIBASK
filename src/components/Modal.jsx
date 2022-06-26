import React from "react";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="hover:bg-blue-gold font-title uppercase border border-blue-gold p-3 rounded-lg text-2xl text-white my-5 mx-5"
      >
        {" "}
        Create{" "}
      </button>

      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-between p-5 border-b border-solid rounded-t">
                  <h3 className="text-3xl font-title text-blue-gold uppercase text-center">
                    Congrat's Event Almost Created
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-black h-6 w-6 text-2xl block ">
                      ✖︎
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 font-body text-blue-gold text-xl leading-relaxed">
                    Thank you for helping to save our beaches. As soon as you
                    validate your request, after verification, as soon as our
                    teams confirm the event, it will appear on the "current
                    events" page. <br />
                    Goodbye ! The AGI BASK team 🌿
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid rounded-b">
                  <button
                    className="text-red-500 background-transparent font-title text-2xl uppercase px-6 py-2  outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Edit
                  </button>
                  <button
                    className="border border-cyan-400 text-blue-gold active:bg-blue-gold font-title uppercase text-2xl px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" fixed inset-0 z-40 backdrop-blur-sm"></div>
        </>
      ) : null}
    </>
  );
}
