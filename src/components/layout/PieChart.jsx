import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { motion, AnimatePresence } from "framer-motion";

// Data
const data = [
  {
    name: "FLN and Early Warning Systems",
    value: 3000,
    bullets: [
      "Reading fluency",
      "Language comprehension",
      "Writing ability detection",
      "Numeracy support",
      "Teacher co-pilot"
    ]
  },
  {
    name: "Learning Disabilities (LD)",
    value: 2850,
    bullets: [
      "Multimodal screening AI",
      "Risk Profiling",
      "Causal Intervention Engine",
      "Mobile Diagnostic AI"
    ]
  },
  {
    name: "Assessment Innovations",
    value: 2000,
    bullets: [
      "Adaptive micro-assessments",
      "Multimodal response analysis",
      "Personalization"
    ]
  },
  {
    name: "Digital Content Accreditation",
    value: 2200,
    bullets: [
      "Composite Accreditation Score",
      "Curriculum Alignment Engines",
      "Trust Badges & Ratings"
    ]
  },
  {
    name: "Career Counselling, Mental Health & Affective Learning",
    value: 1900,
    bullets: ["AI Mentor Bot", "Student Wellness Dashboard"]
  },
  {
    name: "Teacher Training",
    value: 2650,
    bullets: ["Teacher Co-pilot", "Peer Collaboration Network"]
  },
  {
    name: "Pedagogy and Learning Analytics",
    value: 2300,
    bullets: [
      "AI-assisted doubt clearing",
      "Personalized lesson plan generation"
    ]
  },
  {
    name: "AI-Driven Decision Support & Interventions",
    value: 2000,
    bullets: [
      "AI Decision Support",
      "Personalized Insights",
      "Human-in-the-Loop"
    ]
  }
];

const COLORS = [
  "#F24E0F",
  "#0CA7A0",
  "#0E3D4B",
  "#F4B602",
  "#FFA646",
  "#4CAF50",
  "#2196F3",
  "#9C27B0"
];

export default function SizedPieChartCard() {
  const [selected, setSelected] = useState(data[0]); // default first

  const selectedColor = selected.payload?.fill || "#F24E0F";

  return (
    <div className="h-screen w-full flex items-center justify-center px-[10vw]">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="w-full h-full rounded-3xl flex flex-col"
      >
        {/* Header */}
        <div className="flex-shrink-0">
          <div className="w-full flex items-center justify-center">
            <h2 className="text-2xl text-[60px] max-[450px]:text-[30px] text-center font-bold text-primary duration-300">
              Verticals
            </h2>
          </div>
        </div>

        {/* Chart */}
        <div className="flex-1 w-full relative">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                cx="50%"
                cy="50%"
                startAngle={220}
                endAngle={-140}
                innerRadius={80}
                outerRadius={(entry) => 100 + entry.value / 15}
                paddingAngle={4}
                cornerRadius={8}
                className="cursor-pointer"
                onMouseEnter={(d) => setSelected(d)}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                    stroke="#121212" // adds definition
                    strokeWidth={2}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Tooltip area (always visible) */}
          <div className="absolute top-10 left-0">
            <AnimatePresence mode="wait">
              {selected && (
                <motion.div
                  key={selected.name}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    borderColor: selectedColor,
                    boxShadow: `0 2px 1px ${selectedColor}`
                  }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className={`bg-white p-3 rounded-lg border text-sm w-[280px]`}
                >
                  {/* Animated header text with synced color */}
                  <motion.p
                    className="font-semibold mb-1"
                    initial={false}
                    animate={{ color: selectedColor }}
                    transition={{ duration: 0.3 }}
                  >
                    {selected.name}
                  </motion.p>

                  <ul className="list-disc ml-4 space-y-1">
                    {selected.bullets.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
