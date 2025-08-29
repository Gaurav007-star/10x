import React from "react";
import background from "../../asset/BG V.jpg";

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
    <div className="relative h-[80vh] w-full flex flex-col items-center justify-center mb-20  bg-white">
      <img src={background} alt="" className="w-full h-full absolute top-0 left-0 object-contain opacity-40" />
    <h1 className="w-full h-max text-center text-[60px] text-primary font-bold my-10 z-50">Verticals</h1>
      <div className="w-full space-y-14 px-[15vw]">
        {/* Row 1 */}
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

        {/* Row 2 (3 cards) */}
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

        {/* Row 3 (4 cards) */}
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
    </div>
  );
}
