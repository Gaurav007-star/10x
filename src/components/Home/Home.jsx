import React, { useEffect } from "react";
import Hero from "./Hero";
import ProjectObject from "./ProjectObject";
import Capabilities from "./Capabilities";
import Demo from "./Demo";
import { Footer } from "../ui/footer";
import Navbar from "../layout/Navbar";
import PieChartCard from "../layout/PieChart";
import Faq from "../Team/Member";
import Stakeholder from "./Stakeholder";
import { useLocation, useNavigate } from "react-router";
import { scroller } from "react-scroll";
const Home = () => {
  // useEffect(() => {
  //   window.scrollTo({ top: 0, behavior: "smooth" });
  // }, []);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.scrollTo) {
      scroller.scrollTo(location.state.scrollTo, {
        duration: 900,
        smooth: true,
        spy: true,

      });

      // ✅ clear state so it doesn’t trigger again on refresh
      navigate(location.pathname, { replace: true });
    }
  }, [location, navigate]);

  return (
    <div className="home-wrapper w-full h-max">
      <Navbar />
      <Hero />
      <ProjectObject />
      <PieChartCard />
      <Demo />
      <Capabilities />
      <Stakeholder />
      <Footer />
    </div>
  );
};

export default Home;
