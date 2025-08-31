import React from "react";
import background from "../../asset/BG V.jpg";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { File, Settings, Search } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { Calendar, Code, FileText, User, Clock } from "lucide-react";
import { Element } from "react-scroll";
import { GiPlainCircle } from "react-icons/gi";
import BentoGrid from "./BentoGrid";

const aiVerticalsData = [
  {
    id: 1,
    title: "FLN and Early Warning Systems",
    category: "FLN",
    content: [
      "Reading fluency",
      "Language comprehension",
      "Writing ability detection",
      "Numeracy support",
      "Teacher co-pilot"
    ],
    relatedIds: [2],
    status: "active",
    energy: 100
  },
  {
    id: 2,
    title: "Learning Disabilities (LD)",
    category: "Disabilities",
    content: [
      "Multimodal screening AI",
      "Risk Profiling",
      "Causal Intervention Engine",
      "Mobile Diagnostic AI"
    ],
    relatedIds: [1, 3],
    status: "active",
    energy: 90
  },
  {
    id: 3,
    title: "Assessment Innovations",
    category: "Assessment",
    content: [
      "Adaptive micro-assessments",
      "Multimodal response analysis",
      "Personalization"
    ],
    relatedIds: [2, 4],
    status: "active",
    energy: 85
  },
  {
    id: 4,
    title: "Digital Content Accreditation",
    category: "Accreditation",
    content: [
      "Composite Accreditation Score",
      "Curriculum Alignment Engines",
      "Trust Badges & Ratings"
    ],
    relatedIds: [3, 5],
    status: "active",
    energy: 80
  },
  {
    id: 5,
    title: "Career Counselling, Mental Health & Affective Learning",
    category: "Counselling",
    content: ["AI Mentor Bot", "Student Wellness Dashboard"],
    relatedIds: [4, 6],
    status: "active",
    energy: 75
  },
  {
    id: 6,
    title: "Teacher Training",
    category: "Training",
    content: ["Teacher Co-pilot", "Peer Collaboration Network"],
    relatedIds: [5, 7],
    status: "active",
    energy: 70
  },
  {
    id: 7,
    title: "Pedagogy and Learning Analytics",
    category: "Pedagogy",
    content: [
      "AI-assisted doubt clearing",
      "Personalized lesson plan generation"
    ],
    relatedIds: [6, 8],
    status: "active",
    energy: 65
  },
  {
    id: 8,
    title: "AI-Driven Decision Support & Interventions",
    category: "AI Decision Support",
    content: [
      "AI Decision Support",
      "Personalized Insights",
      "Human-in-the-Loop"
    ],
    relatedIds: [7],
    status: "active",
    energy: 60
  }
];

const data = [
  {
    id: 1,
    title: "FLN and Early Warning Systems",
    content: [
      "Reading fluency",
      "Language comprehension",
      "Writing ability detection",
      "Numeracy support",
      "Teacher co-pilot"
    ]
  },
  {
    id: 2,
    title: "Learning Disabilities (LD)",
    content: [
      "Multimodal screening AI",
      "Risk Profiling",
      "Causal Intervention Engine",
      "Mobile Diagnostic AI"
    ]
  },
  {
    id: 3,
    title: "Assessment Innovations",
    content: [
      "Adaptive micro-assessments",
      "Multimodal response analysis",
      "Personalization"
    ]
  },
  {
    id: 4,
    title: "Digital Content Accreditation",
    content: [
      "Composite Accreditation Score",
      "Curriculum Alignment Engines",
      "Trust Badges & Ratings"
    ]
  },
  {
    id: 5,
    title: "Career Counselling, Mental Health & Affective Learning",
    content: ["AI Mentor Bot", "Student Wellness Dashboard"]
  },
  {
    id: 6,
    title: "Teacher Training",
    content: ["Teacher Co-pilot", "Peer Collaboration Network"]
  },
  {
    id: 7,
    title: "Pedagogy and Learning Analytics",
    content: [
      "AI-assisted doubt clearing",
      "Personalized lesson plan generation"
    ]
  },
  {
    id: 8,
    title: "AI-Driven Decision Support & Interventions",
    content: [
      "AI Decision Support",
      "Personalized Insights",
      "Human-in-the-Loop"
    ]
  }
];

// define an eye-pleasing bento span layout (col spans out of 12, row spans)
const spans = [
  "col-span-6 row-span-2", // big block left
  "col-span-3 row-span-1", // small block
  "col-span-3 row-span-1", // small block
  "col-span-6 row-span-2", // wide block
  "col-span-6 row-span-1", // medium block
  "col-span-3 row-span-1", // small block
  "col-span-6 row-span-1", // footer-wide
  "col-span-3 row-span-2" // tall block
];

// Card Component
const Card = ({ title, points, color }) => {
  return (
    <div className="relative group w-max cursor-pointer">
      {/* Title Box */}
      <div
        style={{ borderColor: color }}
        className="rounded border-2 bg-white shadow-2xl  w-[300px] h-[70px] flex items-center justify-center text-center text-black font-semibold text-[14px] p-4 hover:scale-105 transition-transform duration-200"
      >
        {title}
      </div>

      {/* Tooltip (Yellow Box on Hover) */}
      <div className="absolute w-[300px] h-max left-1/2 top-full z-10 hidden -translate-x-1/2 rounded border border-black bg-white p-4 text-left text-sm group-hover:block mt-5">
        <ul className="list-disc pl-5 space-y-1">
          {points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default function TriangleGrid() {
  return (
    <Element name="project">
      <div className="relative h-max w-full flex flex-col items-center justify-center mb-10 bg-white">
        {/* <h1 className="w-full h-max text-center text-[60px] text-primary font-bold mt-10 z-50">
          Verticals
        </h1> */}

        {/* Grid layout */}
        {/* <div className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-8 w-full px-[10vw] mt-10">
          {aiVerticalsData.map((item) => {
            return (
              <div className="h-[250px] max-[1300px]:h-[300px] p-4 bg-secondary rounded-xl shadow-md hover:scale-105 cursor-pointer transition-transform duration-300">
                <h1 className="text-[18px] font-semibold text-primary h-[25%]">{item.title}</h1>
                <ul className="flex flex-col gap-2 py-4">
                  {item.content.map((sub) => {
                    return (
                      <li className="flex items-center gap-2 text-[16px]">
                        <span>
                          <GiPlainCircle className="w-2 h-2 text-primary" />
                        </span>
                        <span>{sub}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div> */}

        {/* <div className="wrapper w-full px-[10vw]">
          <div className="grid grid-cols-12 gap-6 auto-rows-[200px]">
            {data.map((item, i) => (
              <div
                key={item.id}
                className={`${spans[i]} ${item.color} rounded-2xl p-6 flex flex-col justify-between shadow-lg`}
              >
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <ul className="text-sm mt-2 space-y-1 list-disc list-inside">
                  {item.content.map((c, idx) => (
                    <li key={idx}>{c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div> */}

        {/* <RadialOrbitalTimeline timelineData={aiVerticalsData} /> */}


        <BentoGrid/>
      </div>
    </Element>
  );
}
