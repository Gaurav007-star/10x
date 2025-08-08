import React from "react";
import { Element } from "react-scroll";
import { Marquee } from "@/components/magicui/marquee";
import { WobbleCard } from "../ui/wobble-card";
import { GoGoal } from "react-icons/go";
import { IoArrowForwardSharp } from "react-icons/io5";
import { SparklesText } from "@/components/magicui/sparkles-text";
import MatrixTable from "../layout/MatrixTable";
import Goal10X from "../../asset/Goal10X.png";
import PulseCircle from "../ui/PulseCircle";

const ProjectObject = () => {
  return (
    <Element name="project">
      <div className="w-full h-max flex px-20">
        <img src={Goal10X} alt="" className="w-full h-full object-cover" />
      </div>
      {/* TODO:matrix creation */}
      <div className="grid-section w-full h-max flex flex-col items-center justify-center py-10">
        <SparklesText sparklesCount="2">
          <h1 className="text-[60px] font-sans text-primary font-semibold my-15 ">
            <span className="w-max h-max bg-primary text-secondary px-4 py-6 rounded-xl shadow-md">
              CoEAI4Edu
            </span>{" "}
            Verticals
          </h1>
        </SparklesText>

        <MatrixTable />
      </div>
    </Element>
  );
};

export default ProjectObject;
