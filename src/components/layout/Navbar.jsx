import React from "react";
import { NavLink, useNavigate } from "react-router";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import kgpIcon from "../../asset/kgp-icon.png";
import MainLogo from "../../asset/Dashabhuja_10xTeacher-logo.png";
import { scroller } from "react-scroll";

const Navbar = () => {
  const navigate = useNavigate();

  // helper function for scroll + navigation
  const scrollToSection = (section) => {
    if (window.location.pathname === "/") {
      scroller.scrollTo(section, {
        duration: 900,
        smooth: true,
        spy: true,
      });
    } else {
      navigate("/", { state: { scrollTo: section } });
    }
  };

  return (
    <div className="navbar w-full h-max flex items-center justify-between py-5 max-[450px]:py-5 max-[1025px]:py-8 px-10 max-[450px]:px-5">
      {/* logo section */}
      <div className="left logo-section font-serif leading-11 cursor-pointer">
        <img
          src={MainLogo}
          alt="logo"
          className="h-[80px] max-[1025px]:h-[50px] max-[450px]:h-[30px] w-fit object-cover"
          onClick={() => navigate("/")}
        />
      </div>

      {/* link-section */}
      <div className="right max-[1025px]:hidden link-section flex items-center gap-12 cursor-pointer font-medium text-[18px]">
        <span
          onClick={() => scrollToSection("project")}
          className="text-[20px] hover:scale-105 transition-transform duration-200"
        >
          Project Vertical
        </span>

        <span
          onClick={() => scrollToSection("capabilities")}
          className="text-[20px] hover:scale-105 transition-transform duration-200"
        >
          Capabilities
        </span>

        <NavLink
          to="/technology"
          className={({ isActive }) =>
            `text-[20px] hover:scale-105 transition-transform duration-200 ${
              isActive ? "text-primary" : ""
            }`
          }
        >
          Technology
        </NavLink>

        {/* <span
          onClick={() => scrollToSection("stakeholder")}
          className="text-[20px] hover:scale-105 transition-transform duration-200"
        >
          Stakeholder
        </span> */}

        <span
          onClick={() => scrollToSection("demo")}
          className="text-[20px] hover:scale-105 transition-transform duration-200"
        >
          Demo
        </span>

        <NavLink
          to="/team"
          className={({ isActive }) =>
            `text-[20px] hover:scale-105 transition-transform duration-200 ${
              isActive ? "text-primary" : ""
            }`
          }
        >
          Team
        </NavLink>

        <img
          src={kgpIcon}
          alt="kgp/logo"
          className="w-20 h-fit bg-cover bg-center ml-10"
        />
      </div>

      {/* sidebar for mobile */}
      <MenuSidebarComponent scrollToSection={scrollToSection} />
    </div>
  );
};

export default Navbar;

// ---------------- Sidebar Component ---------------- //

const MenuSidebarComponent = ({ scrollToSection }) => {
  return (
    <div className="drawer max-[1025px]:block hidden w-max ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer">
          <HiOutlineMenuAlt3 className="text-secondary-foreground text-4xl cursor-pointer" />
        </label>
      </div>
      <div className="drawer-side z-50">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 flex flex-col justify-between h-full w-80 p-4">
          {/* Sidebar content here */}
          <div className="link-section cursor-pointer flex flex-col gap-4 font-medium h-[70%]">
            <span
              onClick={() => scrollToSection("hero")}
              className="text-[30px] hover:scale-105 transition-transform duration-200"
            >
              Home
            </span>
            <span
              onClick={() => scrollToSection("project")}
              className="text-[30px] hover:scale-105 transition-transform duration-200"
            >
              Project Objective
            </span>
            <span
              onClick={() => scrollToSection("capabilities")}
              className="text-[30px] hover:scale-105 transition-transform duration-200"
            >
              Capabilities
            </span>
            <span
              onClick={() => scrollToSection("demo")}
              className="text-[30px] hover:scale-105 transition-transform duration-200"
            >
              Demo
            </span>
          </div>

          <div className="kgp-logo flex items-center justify-center h-[30%]">
            <img src={kgpIcon} alt="logo" className="w-[180px] h-auto" />
          </div>
        </ul>
      </div>
    </div>
  );
};
