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
    <Element name="project">
      <div className="relative w-full h-screen flex flex-col items-center px-20 max-[1025px]:px-5 pt-20 mt-10 max-[1025px]:my-2">
        <h1 className="absolute top-0 w-full h-max text-[60px] max-[450px]:text-[30px] text-center text-primary font-bold p-2 z-20">
          10x Teacher Goals
        </h1>
        <img
          src={Goal10X}
          alt=""
          className="w-full h-full object-cover max-[1025px]:hidden"
        />

        {/* This layout is for mobile-responsive where we show options in stack */}
        <TenXLayoutResponsive/>
      </div>

      
      {/* matrix table */}
      <div className="hidden grid-section overflow-hidden w-full h-max flex-col items-center justify-center py-10 max-[450px]:py-0">
        <SparklesText sparklesCount="2">
          <h1 className="text-[60px] max-[450px]:text-[25px] font-sans text-primary font-semibold mt-5 max-[450zpx]:mt-10 max-[1025px]:mb-10 mb-20 max-[450px]:mb-5 ">
            <span className="w-max h-max bg-primary text-secondary px-4 py-6 max-[450px]:p-3 rounded-xl shadow-md">
              CoEAI4Edu
            </span>
            Verticals
          </h1>
        </SparklesText>

         {/* <MatrixTable /> */}
      </div>
    </Element>
  );
};

export default ProjectObject;
