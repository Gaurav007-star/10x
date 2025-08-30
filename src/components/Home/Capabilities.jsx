import React from "react";
import { Element } from "react-scroll";
import { TimeLineDemo } from "../ui/TimelineDemo";

const Capabilities = () => {
  return (
    <Element name="capabilities">
      <div className="w-full h-max my-20">
        <TimeLineDemo/>
      </div>
    </Element>
  );
};

export default Capabilities;
