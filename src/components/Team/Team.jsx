import React from "react";
import Navbar from "../layout/Navbar";
import Member from "./Member";
import Partners from "./Partners";
import { Footer } from "../ui/footer";

const Team = () => {
  return (
    <div className="w-full h-max">
      <Navbar />
      <Member />
      <Partners/>
      <Footer/>
    </div>
  );
};

export default Team;
