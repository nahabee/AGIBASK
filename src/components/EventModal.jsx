import React from "react";

export default function EventModal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="hover:bg-blue-light group w-20 flex items-center rounded-md bg-blue-gold text-white text-sm font-title pl-2 pr-3 py-2 shadow-sm"
      >
        <svg
          width="20"
          height="20"
          fill="currentColor"
          className="mr-2"
          aria-hidden="true"
        >
          <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />{" "}
        </svg>{" "}
        JOIN{" "}
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
                    Congrat's Event Joined
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
                    Thank you for helping us preserve the beaches. You are now
                    part of the big "AGI BASK" family. If you have a withdrawal
                    do not hesitate to warn your team for a better organization!
                    Have fun! <br />
                    See you ! The AGI BASK team 🌿
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 backdrop-blur-sm "></div>
        </>
      ) : null}
    </>
  );
}
