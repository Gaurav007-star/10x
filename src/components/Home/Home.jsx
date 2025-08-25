import React from "react";
import Hero from "./Hero";
import ProjectObject from "./ProjectObject";
import Capabilities from "./Capabilities";
import Demo from "./Demo";
import { Footer } from "../ui/footer";
import Navbar from "../layout/Navbar";

const Home = () => {
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);

  return (
    <div className="home-wrapper w-full h-max">
      <Navbar />
      <Hero />
      <ProjectObject />
      <Demo />
      <Capabilities />
      <Footer/>
    </div>
  );
};

export default Home;
