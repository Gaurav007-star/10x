import Tooltip from "../ui/Tooltip";

// ✅ Config-driven data
const sections = {
  stakeholders: {
    title: "Stakeholders",
    className:
      "bg-sky-100 border border-sky-300 rounded-md py-2 px-4 text-center font-semibold"
  },
  topTwo: [
    {
      title: "Interaction Layer",
      desc: "Enable rich, multimodal, inclusive, and personalized engagement",
      className: "bg-pink-100 border border-pink-300 rounded-md p-2 h-full",
      tooltip: {
        headers: ["Challenges", "Solution", "USP"],
        rows: [
          [
            "Support diverse languages & devices",
            "Multilingual NLP + device-aware interfaces",
            "Global-first, device-inclusive engagement"
          ],
          [
            "Ensure accessibility for all",
            "Standards-based accessibility + adaptive UX",
            "Accessibility is default, not optional"
          ]
        ]
      }
    },
    {
      title: "Training Layer",
      desc: "Build AI literacy, trust, and responsible usage among users",
      className: "bg-blue-100 border border-blue-300 rounded-md p-2 h-full",
      tooltip: {
        headers: ["Challenges", "Solution", "USP"],
        rows: [
          [
            "Different user roles, different training needs",
            "Role-based adaptive training modules",
            "Personalized AI readiness journeys"
          ],
          [
            "Sustaining engagement in training",
            "Gamification + microlearning",
            "Fun, sticky learning instead of compliance-driven"
          ]
        ]
      }
    }
  ],
  singles: [
    {
      title: "Presentation Layer",
      desc: "Safe, trustworthy, and user-friendly multimodal experiences",
      className: "bg-sky-50 border border-sky-200 rounded-md p-2",
      tooltip: {
        headers: ["Challenges", "Solution", "USP"],
        rows: [
          [
            "Consistency across modalities",
            "Unified design systems",
            "One platform, infinite modalities"
          ],
          [
            "Prevent harmful or unsafe experiences",
            "Real-time moderation + trust filters",
            "Trust & safety baked into the experience"
          ]
        ]
      }
    },
    {
      title: "Measurement Layer",
      desc: "Ensure reliability, safety, fairness, performance, and continuous improvement",
      className: "bg-green-100 border border-green-300 rounded-md p-2",
      tooltip: {
        headers: ["Challenges", "Solution", "USP"],
        rows: [
          [
            "Prevent bias in assessment models.",
            "Independent ratification & fairness checks",
            "Trusted assessments validated externally"
          ],
          [
            "Need actionable insights from performance data",
            "Real-time descriptive → prescriptive analytics",
            "Continuous feedback for system self-improvement"
          ]
        ]
      }
    }
  ],
  middleTwo: [
    {
      title: "Orchestration Layer",
      desc: "Coordinate workflows, services, and agents efficiently",
      className: "bg-red-100 border border-red-300 rounded-md p-2",
      tooltip: {
        headers: ["Challenges", "Solution", "USP"],
        rows: [
          [
            "Complex interdependencies between services/agents",
            "Middleware + workflow frameworks (Airflow, Kubeflow)",
            "“Orchestrated intelligence” across layers"
          ],
          [
            "Slow or non-reproducible experiments",
            "Versioned pipelines, checkpoints, experiment tracking",
            "Fast, reproducible innovation cycles"
          ]
        ]
      }
    },
    {
      title: "Service Layer",
      desc: "Deliver adaptive, curriculum-aligned services",
      className: "bg-orange-100 border border-orange-300 rounded-md p-2",
      tooltip: {
        headers: ["Challenges", "Solution", "USP"],
        rows: [
          [
            "Content must match curriculum & accreditation",
            "Automated curriculum checks + ratification filters",
            "Curriculum-aware services built-in"
          ],
          [
            "Content reuse across diverse contexts.",
            "RAG + repurposing pipelines",
            "Efficient, modular content adaptation"
          ]
        ]
      }
    }
  ],
  agent: {
    title: "Agent Layer",
    desc: "Core intelligence via Foundational Agents",
    className: "bg-blue-200 border border-blue-400 rounded-md p-2 w-full",
    tooltip: {
      headers: ["Challenges", "Solution", "USP"],
      rows: [
        [
          "Align agents to accreditation & teaching goals.",
          "Domain-specialized fine-tuning with validation loops",
          "Accreditation-aligned AI teachers"
        ],
        [
          "Agents need collaboration, not silos",
          "Multi-agent orchestration layer (cooperative workflows)",
          "Collaborative AI workforce, not isolated tools"
        ]
      ]
    }
  },
  bottomTwo: [
    {
      title: "Platform Layer",
      desc: "Scalable, curriculum-aware, multilingual, accreditation-aligned AI foundational models",
      className: "bg-yellow-100 border border-yellow-300 rounded-md p-2",
      tooltip: {
        headers: [],
        rows: [
          // ["Scaling", "Cloud-native infra", "Elastic growth"],
          // ["Localization", "Multilingual support", "Global reach"]
        ]
      }
    },
    {
      title: "Data Layer",
      desc: "Secure, interoperable, privacy-preserving knowledge backbone",
      className: "bg-purple-200 border border-purple-600 rounded-md p-2 h-full",
      tooltip: {
        headers: ["Challenges", "Solution", "USP"],
        rows: [
          [
            "Secure sensitive educational data",
            "Federated learning + differential privacy",
            "Privacy-first learning at scale"
          ],
          [
            "Heterogeneous data silos",
            "Semantic integration with Knowledge Graphs",
            "Unified, query-ready intelligence layer"
          ]
        ]
      }
    }
  ],
  guardrails: {
    title: "Guard rails",
    desc: "Assuring safety, alignment, ethics and privacy",
    className:
      "h-full bg-red-200 border border-red-400 rounded-md p-4 text-center flex flex-col justify-center",
    tooltip: {
      headers: [],
      rows: [
        // ["Ethics risk", "AI ethics board", "Responsible AI"],
        // ["Privacy", "Anonymization", "User trust"]
      ]
    }
  }
};

export default function Layer() {
  return (
    <div className="h-screen overflow-x-hidden max-[450px]:h-max flex items-center justify-center px-[10vw] mb-20">
      {/* Main Content with Guardrails on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 cursor-pointer">
        {/* Left 3 columns (main content) */}
        <div className="lg:col-span-3 space-y-4">
          {/* Stakeholders */}
          <div className={sections.stakeholders.className}>
            {sections.stakeholders.title}
          </div>

          {/* Top two (grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sections.topTwo.map((item, i) => (
              <Tooltip tableData={item.tooltip} position="bottom">
                <div
                  key={i}
                  className={`${item.className} hover:scale-105 transition-transform duration-200`}
                >
                  <h2 className="font-semibold text-[18px] flex items-center mb-2">
                    {item.emoji} {item.title}
                  </h2>
                  <p>{item.desc}</p>
                </div>
              </Tooltip>
            ))}
          </div>

          {/* Singles */}
          {sections.singles.map((item, i) => (
            <Tooltip tableData={item.tooltip} position="top">
              <div
                key={i}
                className={`${item.className} hover:scale-95 transition-transform duration-200`}
              >
                <h2 className="font-semibold text-[18px] mb-2">
                  {item.emoji} {item.title}
                </h2>
                <p>{item.desc}</p>
              </div>
            </Tooltip>
          ))}

          {/* Middle two (grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sections.middleTwo.map((item, i) => (
              <Tooltip tableData={item.tooltip} position="top">
                <div
                  key={i}
                  className={`${item.className} hover:scale-105 transition-transform duration-200`}
                >
                  <h2 className="font-semibold text-[18px] mb-2">
                    {item.emoji} {item.title}
                  </h2>
                  <p>{item.desc}</p>
                </div>
              </Tooltip>
            ))}
          </div>

          {/* Agent */}
          <Tooltip tableData={sections.agent.tooltip} position="top">
            <div
              className={`${sections.agent.className} hover:scale-95 transition-transform duration-200`}
            >
              <h2 className="font-semibold text-[18px] mb-2">
                {sections.agent.emoji} {sections.agent.title}
              </h2>
              <p>{sections.agent.desc}</p>
            </div>
          </Tooltip>

          {/* Bottom two (grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {sections.bottomTwo.map((item, i) => (
              <Tooltip key={i} position="top" tableData={item.tooltip}>
                <div
                  className={`${item.className} hover:scale-105 transition-transform duration-200`}
                >
                  <h2 className="font-semibold text-[18px] mb-2">
                    {item.emoji} {item.title}
                  </h2>
                  <p>{item.desc}</p>
                </div>
              </Tooltip>
            ))}
          </div>
        </div>

        {/* Guardrails Column */}
        <Tooltip tableData={sections.guardrails.tooltip} position="left">
          <div
            className={`${sections.guardrails.className} hover:scale-95 transition-transform duration-200`}
          >
            <h2 className="font-semibold text-[18px] mb-2">
              {sections.guardrails.emoji} {sections.guardrails.title}
            </h2>
            <p>{sections.guardrails.desc}</p>
          </div>
        </Tooltip>
      </div>
    </div>
  );
}
