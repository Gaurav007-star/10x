import React from "react";
import Navbar from "../layout/Navbar";
import Layer from "./Layer";
import { Footer } from "../ui/footer";

const Technology = () => {
  return (
    <div className="w-full h-max ">
      <Navbar />
      <h1 className="text-[60px] max-[450px]:text-[40px] font-semibold text-center text-primary mt-20 mb-5 max-[450px]:mt-10 max-[450px]:mb-10">
        AI-enabled Digital Platform: Structure
      </h1>
      <Layer />
      <Footer/>
    </div>
  );
};

export default Technology;
