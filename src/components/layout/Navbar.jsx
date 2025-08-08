import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import kgpIcon from "../../asset/kgp-icon.png";
import MainLogo from "../../asset/mainLogo.png";

const Navbar = () => {
  const [active, setActive] = useState({
    hero: true,
    project: false,
    capabilities: false,
    demo: false
  });

  const activeLinkHandler = (e) => {
    const id = e.target.id;
    setActive({
      hero: id === "hero",
      project: id === "project",
      capabilities: id === "capabilities",
      demo: id === "demo"
    });
  };

  return (
    <div className="navbar w-full h-max flex items-center justify-between py-5 px-10">
      {/* logo section */}
      <div className="left logo-section font-serif leading-11 cursor-pointer">
        {/* <h1 className="text-[40px] font-bold text-primary-foreground">10x TEACHER </h1>
        <h2 className="text-[40px] font-bold">CoEAI4Edu</h2> */}
        <img
          src={MainLogo}
          alt="logo"
          className="h-[60px] w-fit object-cover"
        />
      </div>

      {/* link-section */}
      <div className="right link-section flex items-center gap-12 cursor-pointer font-medium text-[18px]">
        <Link
          to="hero"
          id="hero"
          smooth={true}
          duration={900}
          onClick={activeLinkHandler}
          className={`${
            active.hero ? "text-primary" : ""
          } text-[20px] hover:scale-105 transition-transform duration-200`}
        >
          Home
        </Link>
        <Link
          to="project"
          id="project"
          smooth={true}
          duration={900}
          onClick={activeLinkHandler}
          className={`${
            active.project ? "text-primary" : ""
          } text-[20px] hover:scale-105 transition-transform duration-200`}
        >
          Project Objective
        </Link>
        <Link
          to="capabilities"
          id="capabilities"
          smooth={true}
          duration={900}
          onClick={activeLinkHandler}
          className={`${
            active.capabilities ? "text-primary" : ""
          } text-[20px] hover:scale-105 transition-transform duration-200`}
        >
          Capabilities
        </Link>
        <Link
          to="demo"
          id="demo"
          smooth={true}
          duration={900}
          onClick={activeLinkHandler}
          className={`${
            active.demo ? "text-primary" : ""
          } text-[20px] hover:scale-105 transition-transform duration-200`}
        >
          Demo
        </Link>
        <img
          src={kgpIcon}
          alt="kgp/logo"
          className="w-20 h-fit bg-cover bg-center ml-10"
        />
      </div>
    </div>
  );
};

export default Navbar;
