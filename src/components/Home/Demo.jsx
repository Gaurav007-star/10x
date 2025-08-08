import React from "react";
import { Element } from "react-scroll";

import Horizontal from "../ui/Horizontal";

// Main-Component
const Demo = () => {
  // Start at middle
  return (
    <Element name="demo" className="my-10">
      <Horizontal />
    </Element>
  );
};

export default Demo;
