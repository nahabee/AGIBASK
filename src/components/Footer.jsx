import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-around font-body text-white p-6 inset-x-0 absolute border-t border-green-gold bottom-0 sm:justify-center sm:hidden">
      <Link to="/">
        <h1 className=" hover:tracking-widest hover:text-green-gold cursor-pointer sm:hidden">
          {" "}
          Home{" "}
        </h1>
      </Link>
      <Link to="/Ocean">
        <h1 className=" hover:tracking-widest hover:text-green-gold cursor-pointer sm:hidden">
          {" "}
          Ocean{" "}
        </h1>
      </Link>
      <Link to="/Forest">
        <h1 className=" hover:tracking-widest hover:text-green-gold cursor-pointer sm:hidden">
          {" "}
          Forest{" "}
        </h1>
      </Link>
      <Link to="/AboutUs">
        <h1 className="hover:tracking-widest hover:text-green-gold cursor-pointer sm:hidden">
          {" "}
          About us{" "}
        </h1>
      </Link>
      <Link to="/">
        <h1 className="hover:tracking-widest hover:text-green-gold cursor-pointer">
          {" "}
          &copy; Copyright 2022, AGI BASK Foundation{" "}
        </h1>
      </Link>
    </div>
  );
};

export default Footer;
