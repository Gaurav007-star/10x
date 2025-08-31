import React from "react";
import { Element } from "react-scroll";

import Horizontal from "../ui/Horizontal";
import DemoExample from "../ui/DemoExample";
import bloomSphere from "../../asset/demo/BoolmSphere.jpg";
import OpenObe from "../../asset/demo/OpenObe.jpg";
import filo from "../../asset/filo.jpg";
import merakilabs from "../../asset/merakilabs.jpg";
import IItkgp from "../../asset/kgp-icon.png";

const cards = [
  {
    props: {
      imgLink: bloomSphere,
      title: "BloomSphere AI",
      desc: "Bloomsphere AI is an AI-powered educational platform that leverages Bloom’s Taxonomy to automate personalised question generation, assessment creation, and question paper analysis.",
      link: "https://bloomfront-production.up.railway.app/"
    },
    id: 1
  },
  {
    props: {
      imgLink: OpenObe,
      title: "OpenOBE",
      desc: "This tool will be a comprehensive, open-source, web-based platform that supports educational institutions, faculty, and accreditation bodies in implementing and sustaining Outcome-Based Education (OBE).",
      link: "https://ide.iitkgp.ac.in/Pedagogy1/pedagogy_main.jsp"
    },
    id: 2
  },
  {
    props: {
      videoLink:
        "https://www.youtube.com/embed/nlB98oEVxuo?si=zN9X6ja03Eu3FSOw",
      thumbnail: merakilabs,
      title: "Interactive Problem Solving",
      desc: "This demo shows interactive and multimodal problem solving in physics."
    },
    id: 3
  },
  {
    props: {
      videoLink:
        "https://www.youtube.com/embed/9mc_h4jeNa4?si=E2h_GHZD-9LSuOWN",
      thumbnail: merakilabs,
      title: "Guided Problem Solving with Error Identification",
      desc: "Understanding Energy and Momentum in Spring Systems. The background AI identifies mistakes in student provided solution and guides the student towards the solution"
    },
    id: 4
  },
  {
    props: {
      videoLink:
        "https://www.youtube.com/embed/VUqbnlvcEdc?si=m4mA5tEUpIDK3UsT",
      thumbnail: filo,
      title: "FLN Problem Solving in Odia",
      desc: "This demonstrates basic addition problem solving in Odia with setp-wise explanation."
    },
    id: 5
  },
  {
    props: {
      videoLink:
        "https://www.youtube.com/embed/4OKhESgwEMA?si=S8eB9E0Y2F75AgSY",
      thumbnail: filo,
      title: "BODMAS Rule",
      desc: "The video demonstrates AI-based step-wise explanation of the famous mnemonics for solving cmplex arithmatic expressions."
    },
    id: 6
  },
  {
    props: {
      videoLink:
        "https://www.youtube.com/embed/3T4l0i1YsUM?si=1xOAlG2vNrGWPfe4",
      thumbnail: IItkgp,
      title: "Which object is bigger?",
      desc: "This video demonstrates the assessment of a student on his powers of observation and comparison."
    },
    id: 7
  },
  {
    props: {
      videoLink:
        "https://www.youtube.com/embed/xnJ2FtRzeME?si=nGniBeZ3z25d1wFQ",
      thumbnail: IItkgp,
      title: "Literacy and Numeracy through a word arithmetic problem",
      desc: "This video assess a student's literacy and numeracy through a word problem in basic arithmetic - subtraction involving carrying."
    },
    id: 8
  }
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
