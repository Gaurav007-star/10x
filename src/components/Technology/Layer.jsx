export default function Layer() {
  return (
    <div className="h-max  px-[10vw] my-10">
      <h1 className="text-[60px] font-semibold text-center mb-6 text-primary">
        AI-enabled Digital Platform: Structure
      </h1>

      {/* Main Content with Guardrails on Right */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
        {/* Left 3 columns (main content) */}
        <div className="lg:col-span-3 space-y-4">
          {/* Stakeholders */}
          <div className="bg-sky-100 border border-sky-300 rounded-md py-2 px-4 text-center font-semibold">
            Stakeholders
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-pink-100 border border-pink-300 rounded-md p-4">
              <h2 className="font-bold flex items-center mb-2">👥 Interaction Layer</h2>
              <p>Enable rich, multimodal, inclusive, and personalized engagement</p>
            </div>
            <div className="bg-blue-100 border border-blue-300 rounded-md p-4">
              <h2 className="font-bold flex items-center mb-2">🎓 Training Layer</h2>
              <p>Build AI literacy, trust, and responsible usage among users</p>
            </div>
          </div>

          <div className="bg-sky-50 border border-sky-200 rounded-md p-4">
            <h2 className="font-bold mb-2">🖥 Presentation Layer</h2>
            <p>Safe, trustworthy, and user-friendly multimodal experiences</p>
          </div>

          <div className="bg-green-100 border border-green-300 rounded-md p-4">
            <h2 className="font-bold mb-2">📏 Measurement Layer</h2>
            <p>Ensure reliability, safety, fairness, performance, and continuous improvement</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-red-100 border border-red-300 rounded-md p-4">
              <h2 className="font-bold mb-2">⚙️ Orchestration Layer</h2>
              <p>Coordinate workflows, services, and agents efficiently</p>
            </div>
            <div className="bg-orange-100 border border-orange-300 rounded-md p-4">
              <h2 className="font-bold mb-2">🛠 Service Layer</h2>
              <p>Deliver adaptive, curriculum-aligned services</p>
            </div>
          </div>

          <div className="bg-blue-200 border border-blue-400 rounded-md p-4">
            <h2 className="font-bold mb-2">🤖 Agent Layer</h2>
            <p>Core intelligence via Foundational Agents</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-yellow-100 border border-yellow-300 rounded-md p-4">
              <h2 className="font-bold mb-2">☁️ Platform Layer</h2>
              <p>Scalable, curriculum-aware, multilingual, accreditation-aligned AI foundational models</p>
            </div>
            <div className="bg-purple-200 border-2 border-purple-600 rounded-md p-4">
              <h2 className="font-bold mb-2">💾 Data Layer</h2>
              <p>Secure, interoperable, privacy-preserving knowledge backbone</p>
            </div>
          </div>
        </div>

        {/* Guardrails Column */}
        <div className="bg-red-200 border border-red-400 rounded-md p-4 text-center flex flex-col justify-center">
          <h2 className="font-bold mb-2">🛡 Guard rails</h2>
          <p>Assuring safety, alignment, ethics and privacy</p>
        </div>
      </div>
    </div>
  );
}
