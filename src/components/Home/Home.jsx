import React, { useEffect } from "react";
import Navbar from "../layout/Navbar";
import Hero from "./Hero";
import ProjectObject from "./ProjectObject";
import Capabilities from "./Capabilities";
import Demo from "./Demo";
import { Footer } from "../ui/footer";

const Home = () => {
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);

  return (
    <div className="home-wrapper w-full h-max">
      <Navbar />
      <Hero />
      <ProjectObject />
      <Capabilities />
      <Demo />
      <Footer/>
    </div>
  );
};

export default Home;
