import React from "react";
import { Element } from "react-scroll";

import Horizontal from "../ui/Horizontal";
import DemoExample from "../ui/DemoExample";
import image from "../../asset/heroBackground.jpg";
const videoLink = "https://www.youtube.com/embed/hJP5GqnTrNo";
const videoThumbLink =
  "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const cards = [
  {
    Component: DemoExample,
    props: { imgLink: image },
    id: 1
  },
  {
    Component: DemoExample,
    props: { videoLink: videoLink, thumbnail: videoThumbLink },
    id: 2
  },
  {
    Component: DemoExample,
    props: {
      imgLink:
        "https://images.pexels.com/photos/8728223/pexels-photo-8728223.jpeg"
    },
    id: 3
  }
];

// Main-Component
const Demo = () => {
  // Start at middle
  return (
    <Element name="demo">
      <Horizontal />

      <h1 className="w-full h-max text-center text-[50px] font-bold text-primary min-[1025px]:hidden">Demo</h1>
      {/* demo-section-for-mobile-responsive */}
      <div className="demo-section w-full h-max flex flex-col gap-2 my-5 min-[1025px]:hidden">
        {cards.map((item, i) => {
          return <item.Component key={i} {...item.props} />;
        })}
      </div>
    </Element>
  );
};

export default Demo;
