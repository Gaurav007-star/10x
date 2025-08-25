import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import kgpIcon from "../../asset/kgp-icon.png";
import MainLogo from "../../asset/Dashabhuja_10xTeacher-logo.png";

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
    <div className="navbar w-full h-max flex items-center justify-between py-5 max-[450px]:py-5 max-[1025px]:py-8 px-10 max-[450px]:px-5">
      {/* logo section */}
      <div className="left logo-section font-serif leading-11 cursor-pointer">
        <img
          src={MainLogo}
          alt="logo"
          className="h-[80px] max-[1025px]:h-[50px] max-[450px]:h-[30px] w-fit object-cover"
        />
      </div>

      {/* link-section */}
      <div className="right max-[1025px]:hidden link-section flex items-center gap-12 cursor-pointer font-medium text-[18px]">
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
      <MenuSidebarComponent />
    </div>
  );
};

export default Navbar;

// Sidebar part
import { HiOutlineMenuAlt3 } from "react-icons/hi";

const MenuSidebarComponent = () => {
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
    <div className="drawer max-[1025px]:block hidden w-max ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content  ">
        {/* Page content here */}
        <label htmlFor="my-drawer">
          <HiOutlineMenuAlt3 className="text-secondary-foreground text-4xl cursor-pointer" />
        </label>
      </div>
      <div className="drawer-side z-50 ">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay "
        ></label>
        <ul className="menu bg-base-200 flex flex-col justify-between h-full w-80 p-4">
          {/* Sidebar content here */}
          <div className="link-section cursor-pointer flex flex-col gap-4 font-medium h-[70%]">
            <Link
              to="hero"
              id="hero"
              smooth={true}
              duration={900}
              onClick={activeLinkHandler}
              className={`${
                active.hero ? "text-primary" : ""
              } text-[30px] hover:scale-105 transition-transform duration-200`}
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
              } text-[30px] hover:scale-105 transition-transform duration-200`}
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
              } text-[30px] hover:scale-105 transition-transform duration-200`}
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
              } text-[30px] hover:scale-105 transition-transform duration-200`}
            >
              Demo
            </Link>
          </div>

          <div className="kgp-logo flex items-center justify-center h-[30%] ">
            <img src={kgpIcon} alt="logo" className="w-[180px] h-auto" />
          </div>
        </ul>
      </div>
    </div>
  );
};
