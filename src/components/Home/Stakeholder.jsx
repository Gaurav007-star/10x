import React from "react";
import StaleholderImage from "../../asset/stackholder.png";
import { Element } from "react-scroll";

const Stakeholder = () => {
  return (
    <Element name="stakeholder" className="w-full h-max flex flex-col px-10 mt-20">
      <h1 className="w-full h-max text-[60px] max-[450px]:text-[30px] text-center text-primary font-bold p-2 z-20">
        National Integration
      </h1>
      <img
        src={StaleholderImage}
        alt=""
        className="w-full h-auto object-contain"
      />
    </Element>
  );
};

export default Stakeholder;
