import React from "react";
import { Element } from "react-scroll";

import Horizontal from "../ui/Horizontal";
import DemoExample from "../ui/DemoExample";
import bloomSphere from "../../asset/demo/BoolmSphere.jpg";
import OpenObe from "../../asset/demo/OpenObe.jpg";
import filo from "../../asset/filo.jpg";
import merakilabs from "../../asset/merakilabs.jpg";


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
  {
    props: {
      imgLink: OpenObe,
      title: "OpenOBE",
      desc: "This tool will be a comprehensive, open-source, web-based platform that supports educational institutions, faculty, and accreditation bodies in implementing and sustaining Outcome-Based Education (OBE). It will enable the end-to-end lifecycle of curriculum design, review, and monitoring, ensuring alignment with national and international standards such as NBA, NAAC, ABET, and Washington Accord.",
      link: "https://ide.iitkgp.ac.in/Pedagogy1/pedagogy_main.jsp"
    },
    id: 2
  },
  {
    props: {
      videoLink:
        "https://www.youtube.com/embed/nlB98oEVxuo?si=zN9X6ja03Eu3FSOw",
      thumbnail: merakilabs,
      title: "Interactive Problem Solving - Meraki Labs",
      desc: "This demo shows interctive and multimodal problem solving in physics."
    },
    id: 3
  },
  {
    props: {
      videoLink:
        "https://www.youtube.com/embed/9mc_h4jeNa4?si=E2h_GHZD-9LSuOWN",
      thumbnail: merakilabs,
      title: "Guided Problem Solving with Error Identification - Meraki Labs",
      desc: "Understanding Energy and Momentum in Spring Systems which identifies mistakes in student provided solution and guide towards the solution."
    },
    id: 4
  }
  //    {
  //   props: {
  //     videoLink: "https://www.youtube.com/embed/9mc_h4jeNa4?si=E2h_GHZD-9LSuOWN" ,
  //     thumbnail: videoThumbLink,
  //     title: "FLN Problem Solving in Odia - FILO",
  //     desc: "Basic addition problem solving in Odia.",
  //   },
  //   id: 5
  // },
];

// Main-Component
const Demo = () => {
  // Start at middle
  return (
    <Element name="demo">
      <Horizontal cards={cards} />

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
