import React from "react";
import { GiPlainCircle } from "react-icons/gi";

const aiVerticals = [
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

const glassBox =
  "rounded-2xl max-[450px]:rounded-md px-6 py-4 flex flex-col justify-start hover:scale-95 transition-transform duration-200 cursor-pointer";

export default function BentoGrid() {
  return (
    <div className="h-full w-full px-[15vw] max-[450px]:px-5 pb-10">
      <h1 className="text-[60px] max-[1025px]:text-[40px] max-[450px]:text-[28px] h-max w-full text-center py-10 font-bold text-primary">
        Verticals
      </h1>

      <div className="grid grid-cols-6 max-[1025px]:grid-cols-3 max-[450px]:grid-cols-1 gap-2">
        {/* Tall left block */}
        <div
          className={`col-span-2 row-span-2 max-[1025px]:col-span-3 max-[450px]:col-span-1 ${glassBox} bg-primary`}
        >
          <h2 className="text-[20px] max-[1025px]:text-[18px] max-[450px]:text-[16px] text-white font-semibold">
            {aiVerticals[0].title}
          </h2>
          <ul className="text-[18px] max-[450px]:text-[14px] text-white mt-2 space-y-1">
            {aiVerticals[0].content.map((c, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-[16px] max-[450px]:text-[14px]"
              >
                <GiPlainCircle className="w-2 h-2 text-white" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Two stacked blocks */}
        <div
          className={`col-span-2 row-span-1 max-[1025px]:col-span-3 max-[450px]:col-span-1 ${glassBox} bg-accent-two`}
        >
          <h2 className="text-[20px] max-[1025px]:text-[18px] max-[450px]:text-[16px] text-white font-semibold">
            {aiVerticals[1].title}
          </h2>
          <ul className="text-[18px] max-[450px]:text-[14px] text-white mt-2 space-y-1">
            {aiVerticals[1].content.map((c, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-[16px] max-[450px]:text-[14px]"
              >
                <GiPlainCircle className="w-2 h-2 text-white" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`col-span-2 row-span-1 max-[1025px]:col-span-3 max-[450px]:col-span-1 ${glassBox} bg-accent-one`}
        >
          <h2 className="text-[20px] max-[1025px]:text-[18px] max-[450px]:text-[16px] text-white font-semibold">
            {aiVerticals[2].title}
          </h2>
          <ul className="text-[18px] max-[450px]:text-[14px] text-white mt-2 space-y-1">
            {aiVerticals[2].content.map((c, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-[16px] max-[450px]:text-[14px]"
              >
                <GiPlainCircle className="w-2 h-2 text-white" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Wide banner */}
        <div
          className={`col-span-4 row-span-1 max-[1025px]:col-span-3 max-[450px]:col-span-1 ${glassBox} bg-accent-two`}
        >
          <h2 className="text-[20px] max-[1025px]:text-[18px] max-[450px]:text-[16px] text-white font-semibold">
            {aiVerticals[3].title}
          </h2>
          <ul className="text-[18px] max-[450px]:text-[14px] text-white mt-2 space-y-1">
            {aiVerticals[3].content.map((c, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-[16px] max-[450px]:text-[14px]"
              >
                <GiPlainCircle className="w-2 h-2 text-white" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Career Counselling */}
        <div
          className={`col-span-2 row-span-1 max-[1025px]:col-span-3 max-[450px]:col-span-1 ${glassBox} bg-accent-one`}
        >
          <h2 className="text-[20px] max-[1025px]:text-[18px] max-[450px]:text-[16px] text-white font-semibold">
            {aiVerticals[4].title}
          </h2>
          <ul className="text-[18px] max-[450px]:text-[14px] text-white mt-2 space-y-1">
            {aiVerticals[4].content.map((c, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-[16px] max-[450px]:text-[14px]"
              >
                <GiPlainCircle className="w-2 h-2 text-white" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Teacher Training */}
        <div
          className={`col-span-2 row-span-1 max-[1025px]:col-span-3 max-[450px]:col-span-1 ${glassBox} bg-primary`}
        >
          <h2 className="text-[20px] max-[1025px]:text-[18px] max-[450px]:text-[16px] text-white font-semibold">
            {aiVerticals[5].title}
          </h2>
          <ul className="text-[18px] max-[450px]:text-[14px] text-white mt-2 space-y-1">
            {aiVerticals[5].content.map((c, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-[16px] max-[450px]:text-[14px]"
              >
                <GiPlainCircle className="w-2 h-2 text-white" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pedagogy */}
        <div
          className={`col-span-2 row-span-2 max-[1025px]:col-span-3 max-[450px]:col-span-1 ${glassBox} bg-primary`}
        >
          <h2 className="text-[20px] max-[1025px]:text-[18px] max-[450px]:text-[16px] text-white font-semibold">
            {aiVerticals[6].title}
          </h2>
          <ul className="text-[18px] max-[450px]:text-[14px] text-white mt-2 space-y-1">
            {aiVerticals[6].content.map((c, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-[16px] max-[450px]:text-[14px]"
              >
                <GiPlainCircle className="w-2 h-2 text-white" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* AI-Driven Interventions */}
        <div
          className={`col-span-4 row-span-1 max-[1025px]:col-span-3 max-[450px]:col-span-1 ${glassBox} bg-accent-two`}
        >
          <h2 className="text-[20px] max-[1025px]:text-[18px] max-[450px]:text-[16px] text-white font-semibold">
            {aiVerticals[7].title}
          </h2>
          <ul className="text-[18px] max-[450px]:text-[14px] text-white mt-2 space-y-1">
            {aiVerticals[7].content.map((c, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-[16px] max-[450px]:text-[14px]"
              >
                <GiPlainCircle className="w-2 h-2 text-white" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
