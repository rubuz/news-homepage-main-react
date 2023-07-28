import React from "react";

const Navbar = ({ style }) => {
  return (
    <div className={style}>
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
    </div>
  );
};

export default Navbar;
