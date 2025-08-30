import React from "react";
import background from "../../asset/BG V.jpg";
import { OrbitingCircles } from "@/components/magicui/orbiting-circles";
import { File, Settings, Search } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { Calendar, Code, FileText, User, Clock } from "lucide-react";

const timelineData = [
  {
    id: 1,
    title: "Planning",
    date: "Jan 2024",
    content: "Project planning and requirements gathering phase.",
    category: "Planning",
    icon: Calendar,
    relatedIds: [2],
    status: "completed",
    energy: 100,
  },
  {
    id: 2,
    title: "Design",
    date: "Feb 2024",
    content: "UI/UX design and system architecture.",
    category: "Design",
    icon: FileText,
    relatedIds: [1, 3],
    status: "completed" ,
    energy: 90,
  },
  {
    id: 3,
    title: "Development",
    date: "Mar 2024",
    content: "Core features implementation and testing.",
    category: "Development",
    icon: Code,
    relatedIds: [2, 4],
    status: "in-progress",
    energy: 60,
  },
  {
    id: 4,
    title: "Testing",
    date: "Apr 2024",
    content: "User testing and bug fixes.",
    category: "Testing",
    icon: User,
    relatedIds: [3, 5],
    status: "pending",
    energy: 30,
  },
  {
    id: 5,
    title: "Release",
    date: "May 2024",
    content: "Final deployment and release.",
    category: "Release",
    icon: Clock,
    relatedIds: [4],
    status: "pending",
    energy: 10,
  },
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
    <div className="relative h-[70vh] w-full flex flex-col items-center justify-center mb-30 bg-white">
      <img
        src={background}
        alt=""
        className="w-full h-full absolute top-0 left-0 object-contain opacity-40"
      />
      <h1 className="w-full h-max text-center text-[60px] text-primary font-bold my-10 z-50">
        Verticals
      </h1>

      <div className="w-full space-y-14 px-[15vw]">
        <div className="flex items-center justify-center">
          <Card
            color={"#26A9E0"}
            title="Learning Disabilities (LD)"
            points={[
              "Multimodal screening AI",
              "Risk Profiling",
              "Causal Intervention Engine",
              "Mobile Diagnostic AI"
            ]}
          />
        </div>

        <div className="flex items-center justify-center gap-10">
          <Card
            color={"#1B75BB"}
            title="Assessment Innovations"
            points={[
              "Adaptive micro-assessments",
              "Multimodal response analysis",
              "Personalization"
            ]}
          />
          <Card
            color={"#1B75BB"}
            title="Digital Content Accreditation"
            points={[
              "Composite Accreditation Score",
              "Curriculum Alignment Engines",
              "Trust Badges & Ratings"
            ]}
          />
          <Card
            color={"#1B75BB"}
            title="Career Counselling, Mental Health & Affective Learning"
            points={["AI Mentor Bot", "Student Wellness Dashboard"]}
          />
        </div>

        <div className="flex items-center justify-center gap-10">
          <Card
            color={"#1F41AE"}
            title="FLN and Early Warning Systems"
            points={[
              "Reading fluency",
              "Language comprehension",
              "Writing ability detection",
              "Numeracy support",
              "Teacher co-pilot"
            ]}
          />
          <Card
            color={"#1F41AE"}
            title="Teacher Training"
            points={["Teacher Co-pilot", "Peer Collaboration Network"]}
          />
          <Card
            color={"#1F41AE"}
            title="Pedagogy and Learning Analytics"
            points={[
              "AI-assisted doubt clearing",
              "Personalized lesson plan generation"
            ]}
          />
          <Card
            color={"#1F41AE"}
            title="AI-Driven Decision Support & Interventions"
            points={[
              "AI Decision Support",
              "Personalized Insights",
              "Human-in-the-Loop"
            ]}
          />
        </div>
      </div>


{/* <RadialOrbitalTimeline timelineData={timelineData}/> */}

    </div>
  );
}
