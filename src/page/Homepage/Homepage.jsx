import Home from "@/components/Home/Home";
import React from "react";
import { Helmet } from "react-helmet";

const Homepage = () => {
  return (
    <>
      <Helmet>
        <title>Home-Ai education</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Home page IIT KGP" />
      </Helmet>
      <Home />
    </>
  );
};

export default Homepage;
