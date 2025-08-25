import Home from "@/components/Home/Home";
import React from "react";
import { Helmet } from "react-helmet";

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Dashabhuja - 10x Teacher | Center of Excellence in AI for Education</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Center of Excellence in AI for Education" />
      </Helmet>
      <Home />
    </>
  );
};

export default Homepage;
