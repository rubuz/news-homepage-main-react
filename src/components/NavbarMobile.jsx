import React, { useState } from "react";
import menu from "../assets/icon-menu.svg";
import menuClose from "../assets/icon-menu-close.svg";
import Navbar from "./Navbar";

const NavbarMobile = () => {
  const [sideMenu, setSideMenu] = useState(false);
  return (
    <div>
      <img
        src={menu}
        alt="hamburger menu icon"
        className="cursor-pointer"
        onClick={() => setSideMenu(!sideMenu)}
      />
      {/* Overlay */}
      {sideMenu && (
        <div className="bg-black/60 fixed w-full h-screen z-10 top-0 left-0"></div>
      )}
      <div
        className={
          sideMenu
            ? "bg-off-white z-20 fixed w-[60%] min-w-[250px] top-0 right-0 p-6 h-screen duration-200"
            : "bg-off-white z-20 fixed w-[320px] top-0 p-6 h-screen right-[-100%] duration-200"
        }
      >
        <img
          src={menuClose}
          alt="X icon for close"
          onClick={() => setSideMenu(!sideMenu)}
          className="cursor-pointer ml-auto"
        />
        <Navbar style="flex flex-col gap-6 text-very-dark-blue text-xl mt-[35%]" />
      </div>
    </div>
  );
};

export default NavbarMobile;
