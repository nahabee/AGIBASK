import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Subscribe = () => {
  const notify = () => toast("Thank you, we will get back to you soon!");
  return (
    <form className="flex flex-col items-center sm:h-40">
      <div className="bg-none border border-green-gold w-full sm:h-3/4 p-6 pb-6 shadow-2xl rounded sm:border-hidden sm:p-0 sm:pb-2">
        <div className="text-white pb-4 text-6xl font-title sm:text-5xl">
          CONTACT US
        </div>
        <input
          className="block text-gray-700 p-1 m-4 ml-0 w-full rounded text-lg font-normal placeholder-gray-300 sm:hidden"
          id="name"
          type="text"
          placeholder="Name"
          required={true}
        />
        <input
          className="block text-gray-700 p-1 m-4 ml-0 w-full rounded text-lg font-normal placeholder-gray-300 "
          id="email"
          type="email"
          placeholder="Email"
          required={true}
        />
        <textarea
          className="block text-gray-700 p-1 m-4 ml-0 w-full rounded text-lg resize-none font-normal placeholder-gray-300 "
          id="textarea"
          type="text"
          placeholder="Message"
          required={true}
        />
        <button
          className="inline-block mt-2 bg-green-gold hover:bg-white hover:text-green-gold hover:border-green-gold font-body px-6 py-2 rounded text-white shadow-lg"
          onClick={notify}
        >
          <ToastContainer />
          SEND
        </button>
      </div>
    </form>
  );
};

export default Subscribe;
