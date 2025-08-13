import React from "react";
import { Element } from "react-scroll";

import Horizontal from "../ui/Horizontal";
import DemoExample from "../ui/DemoExample";
import bloomSphere from "../../asset/demo/BoolmSphere.jpg";

// const videoLink = "https://www.youtube.com/embed/hJP5GqnTrNo";
// const videoThumbLink =
//   "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const cards = [
  {
    props: {
      imgLink: bloomSphere,
      title: "BloomSphere AI",
      desc: "Bloomsphere AI is an AI-powered educational platform that leverages Bloom’s Taxonomy to automate personalised question generation, assessment creation, and question paper analysis. It helps educators design higher-order thinking assessments, provides real-time feedback, and supports large-scale adoption, promoting conceptual understanding over rote learning.",
      link: "https://bloomfront-production.up.railway.app/"
    },
    id: 1
  },
  // {
  //   props: {
  //     videoLink: videoLink,
  //     thumbnail: videoThumbLink,
  //     title: "Demo ai",
  //     desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae reprehenderit quaerat molestias ad, natus aliquam error harum totam debitis! Facere.",
  //     link: "https://bloomfront-production.up.railway.app/"
  //   },
  //   id: 2
  // },
  // {
  //   props: {
  //     imgLink:
  //       "https://images.pexels.com/photos/8728223/pexels-photo-8728223.jpeg",
  //     title: "Demo ai",
  //     desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aperiam recusandae tenetur illo commodi, ratione asperiores quos id, ut voluptates numquam, dignissimos inventore distinctio quam voluptas ea! Facilis, praesentium illo.",
  //     link: "https://bloomfront-production.up.railway.app/"
  //   },
  //   id: 3
  // }
];

// Main-Component
const Demo = () => {
  // Start at middle
  return (
    <Element name="demo">
      <Horizontal />

      <h1 className="w-full h-max text-center text-[50px] font-bold text-primary min-[1025px]:hidden">
        Demo
      </h1>
      {/* demo-section-for-mobile-responsive */}
      <div className="demo-section w-full h-max flex flex-col gap-2 my-5 min-[1025px]:hidden">
        {cards.map((item, i) => {
          return <DemoExample key={i} {...item.props} />;
        })}
      </div>
    </Element>
  );
};

export default Demo;
