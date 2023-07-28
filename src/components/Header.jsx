import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.svg";
import Navbar from "./Navbar";
import NavbarMobile from "./NavbarMobile";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto flex justify-between p-4 items-center my-5">
      <div>
        <img src={Logo} alt="Logo" />
      </div>

      <nav>
        {windowWidth < 640 ? (
          <NavbarMobile />
        ) : (
          <Navbar style="flex gap-10 text-dark-grayish-blue" />
        )}
      </nav>
    </div>
  );
};

export default Header;
