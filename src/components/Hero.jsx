import React, { useEffect, useState } from "react";
import desktopImage from "../assets/image-web-3-desktop.jpg";
import mobileImage from "../assets/image-web-3-mobile.jpg";

const Hero = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div>
      <div>
        {windowWidth < 640 ? ( // Change the value 768 to your desired breakpoint for mobile
          <img src={mobileImage} alt="Mobile Image" />
        ) : (
          <img src={desktopImage} alt="Desktop Image" />
        )}
      </div>
      <div className="grid sm:grid-cols-2 py-6 gap-4">
        <h1 className="text-very-dark-blue font-extrabold text-6xl self-center">
          The Bright Future of Web 3.0?
        </h1>
        <div className="self-center">
          <p className="text-dark-grayish-blue mb-7">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button className="uppercase tracking-[0.3em] bg-primary-red px-8 py-3 text-white hover:bg-very-dark-blue duration-200 cursor-pointer">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
