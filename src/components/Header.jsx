import React from "react";
import Logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="max-w-[1440px] mx-auto flex justify-between p-4 items-center my-5">
      <div>
        <img src={Logo} alt="Logo" />
      </div>
      <nav className="flex gap-10 text-dark-grayish-blue">
        <a
          className="hover:text-primary-orange cursor-pointer duration-200"
          href="/"
        >
          Home
        </a>
        <a
          className="hover:text-primary-orange cursor-pointer duration-200"
          href="/"
        >
          New
        </a>
        <a
          className="hover:text-primary-orange cursor-pointer duration-200"
          href="/"
        >
          Popular
        </a>
        <a
          className="hover:text-primary-orange cursor-pointer duration-200"
          href="/"
        >
          Trending
        </a>
        <a
          className="hover:text-primary-orange cursor-pointer duration-200"
          href="/"
        >
          Categories
        </a>
      </nav>
    </div>
  );
};

export default Header;
