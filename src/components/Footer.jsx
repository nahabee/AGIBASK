import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-around font-body text-white p-6 inset-x-0 absolute bottom-0 sm:justify-center sm:text-sm ">
      <Link to="/">
        <h1 className=" hover:tracking-widest cursor-pointer sm:hidden">
          {" "}
          Home{" "}
        </h1>
      </Link>
      <Link to="/Ocean">
        <h1 className=" hover:tracking-widest cursor-pointer sm:hidden">
          {" "}
          Ocean{" "}
        </h1>
      </Link>
      <Link to="/Forest">
        <h1 className=" hover:tracking-widest cursor-pointer sm:hidden">
          {" "}
          Forest{" "}
        </h1>
      </Link>
      <Link to="/AboutUs">
        <h1 className="hover:tracking-widest cursor-pointer sm:hidden">
          {" "}
          About us{" "}
        </h1>
      </Link>
      <Link to="/">
        <h1 className="hover:tracking-widest cursor-pointer">
          {" "}
          &copy; Copyright 2022, AGI BASK Foundation{" "}
        </h1>
      </Link>
    </div>
  );
};

export default Footer;
