import React from "react";
import { Element } from "react-scroll";
import { Marquee } from "@/components/magicui/marquee";
import { WobbleCard } from "../ui/wobble-card";
import { GoGoal } from "react-icons/go";
import { IoArrowForwardSharp } from "react-icons/io5";
import { SparklesText } from "@/components/magicui/sparkles-text";
// import MatrixTable from "./layout/MatrixTable";
import Goal10X from "../../asset/Dashabhuja_10xTeacher-goals.png";
import TenXLayoutResponsive from "../layout/TenxLayoutResponsive";


const ProjectObject = () => {
  return (
    <Element >
      <div className="relative w-full h-screen max-[1025px]:h-max flex flex-col items-center px-20 max-[1025px]:px-5 pt-20 mt-20 max-[1025px]:my-2">
        <h1 className="absolute top-0 w-full h-max text-[60px] max-[450px]:text-[30px] text-center text-primary font-bold p-2 z-20">
          10x Teacher Goals
        </h1>
        <img
          src={Goal10X}
          alt=""
          className="w-full h-full object-contain max-[1025px]:hidden"
        />

        {/* This layout is for mobile-responsive where we show options in stack */}
        <TenXLayoutResponsive/>
      </div>

      
      {/* matrix table */}
    </Element>
  );
};

export default ProjectObject;
