import React from "react";
import Navbar from "../layout/Navbar";
import Member from "./Member";
import Partners from "./Partners";
import { Footer } from "../ui/footer";
import BackToTop from "../ui/BcaktoTop";

const Team = () => {
  return (
    <div className="w-full h-max">
      <Navbar />
      <Member />
      <Partners/>
      <Footer/>
      <BackToTop/>
    </div>
  );
};

export default Team;
