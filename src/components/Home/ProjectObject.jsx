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
import TenXLayoutResponsive from "../layout/TenxLayoutResponsive";
import TenXBarChart from "../ui/TenXBarChart";
import BalloonWaveChart from "../ui/BalloonWaveChart";

const myData = [
  { name: "1x", value: 10, title: "Operational Efficiency", color: "#4682b4" },
  {
    name: "2x",
    value: 20,
    title: "Reduced Time on Non-Teaching",
    color: "#4682b4"
  },
  { name: "3x", value: 30, title: "Personalized Learning", color: "#4682b4" },
  { name: "4x", value: 40, title: "Personalized Assessment", color: "#4682b4" },
  {
    name: "5x",
    value: 50,
    title: "Inclusive (Early assessment of learning disability)",
    color: "#4682b4"
  },
  { name: "6x", value: 60, title: "Equality of opportunity", color: "#4682b4" },
  {
    name: "7x",
    value: 70,
    title: "Contextual and Experiential learning",
    color: "#4682b4"
  },
  { name: "8x", value: 80, title: "Pedagogical Innovation", color: "#4682b4" },
  {
    name: "9x",
    value: 90,
    title: "Collaborative Teaching, Exposure and Ownership",
    color: "#4682b4"
  },
  {
    name: "10x",
    value: 100,
    title: "Community Participation",
    color: "#4682b4"
  }
];

const ProjectObject = () => {
  return (
    <Element name="project">
      <div className="relative w-full h-max flex flex-col items-center px-20 max-[1025px]:px-5 pt-20 mt-10 max-[1025px]:my-2">
        <h1 className="absolute top-0 w-full h-max text-[60px] max-[450px]:text-[30px] text-center text-primary font-bold p-2 z-20">
          10x Teacher Goals
        </h1>
        <img
          src={Goal10X}
          alt=""
          className="w-full h-full object-cover max-[1025px]:hidden"
        />

        {/* This layout is for mobile-responsive where we show options in stack */}
        <TenXLayoutResponsive />
      </div>

      {/* <TenXBarChart/> */}
      {/* <BalloonWaveChart data={myData} /> */}
      
      {/* matrix table */}
      <div className="grid-section overflow-hidden w-full h-max flex flex-col items-center justify-center py-10 max-[450px]:py-0">
        <SparklesText sparklesCount="2">
          <h1 className="text-[60px] max-[450px]:text-[25px] font-sans text-primary font-semibold mt-5 max-[450zpx]:mt-10 max-[1025px]:mb-10 mb-20 max-[450px]:mb-5 ">
            <span className="w-max h-max bg-primary text-secondary px-4 py-6 max-[450px]:p-3 rounded-xl shadow-md">
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
