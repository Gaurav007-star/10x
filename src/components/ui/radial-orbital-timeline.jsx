import { useState, useEffect, useRef } from "react";
// import { Card } from "@/components/ui/card";

export default function RadialOrbitalTimeline({ timelineData }) {
  const [expandedItems, setExpandedItems] = useState({});
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeNodeId, setActiveNodeId] = useState(null);
  const containerRef = useRef(null);
  const orbitRef = useRef(null);
  const nodeRefs = useRef({});

  // split items
  const outerItems = timelineData.slice(0, 3); // 3 outer
  const innerItems = timelineData.slice(3, 5); // 2 inner

  const handleContainerClick = (e) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setAutoRotate(true);
    }
  };

  const toggleItem = (id) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });

      newState[id] = !prev[id];
      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
      }
      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer;
    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => (prev + 0.3) % 360);
      }, 50);
    }
    return () => {
      if (rotationTimer) clearInterval(rotationTimer);
    };
  }, [autoRotate]);

  const calculateNodePosition = (index, total, radius, offset = 0) => {
    const angle = ((index / total) * 360 + rotationAngle + offset) % 360;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian);
    const y = radius * Math.sin(radian);
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    return { x, y, zIndex };
  };

  return (
    <div
      className="w-full h-screen flex flex-col items-center justify-center bg-white overflow-hidden"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
        <div
          className="absolute w-full h-full flex items-center justify-center"
          ref={orbitRef}
          style={{ perspective: "1000px" }}
        >
          {/* center nucleus */}
          <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 via-blue-500 to-teal-500 animate-pulse flex items-center justify-center z-10">
            <div className="absolute w-20 h-20 rounded-full border border-white/20 animate-ping opacity-70"></div>
            <div
              className="absolute w-24 h-24 rounded-full border border-white/10 animate-ping opacity-50"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div className="w-8 h-8 rounded-full bg-white/80 backdrop-blur-md"></div>
          </div>

          {/* Orbits */}
          <div className="absolute w-[200px] h-[200px] rounded-full border border-gray-400/50"></div>
          <div className="absolute w-[520px] h-[520px] rounded-full border border-gray-400/50"></div>

          {/* Inner items */}
          {innerItems.map((item, index) => {
            const position = calculateNodePosition(
              index,
              innerItems.length,
              100, // inner orbit radius
              90 // offset spacing
            );
            const isExpanded = expandedItems[item.id];
            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
            };
            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onMouseEnter={() => toggleItem(item.id)}
                onMouseLeave={() => {
                  setExpandedItems({});
                  setActiveNodeId(null);
                  setAutoRotate(true);
                }}
              >
                <div
                  className="px-3 py-1 rounded-full text-white font-semibold border-2 border-black transition-all duration-300 transform text-sm"
                  style={{ backgroundColor: item.color || "#2563eb" }}
                >
                  {item.title}
                </div>
                {isExpanded && (
                  <Card className="absolute top-15 left-1/2 -translate-x-1/2 w-56 bg-black/90 backdrop-blur-lg border-white/30 shadow-xl shadow-white/10 overflow-visible">
                    <h1 className="text-white">{item.title}</h1>
                  </Card>
                )}
              </div>
            );
          })}

          {/* Outer items */}
          {outerItems.map((item, index) => {
            const position = calculateNodePosition(
              index,
              outerItems.length,
              260 // outer orbit radius
            );
            const isExpanded = expandedItems[item.id];
            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
            };
            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onMouseEnter={() => toggleItem(item.id)}
                onMouseLeave={() => {
                  setExpandedItems({});
                  setActiveNodeId(null);
                  setAutoRotate(true);
                }}
              >
                <div
                  className="px-4 py-2 rounded-full text-white font-semibold border-2 border-black transition-all duration-300 transform"
                  style={{ backgroundColor: item.color || "#f97316" }}
                >
                  {item.title}
                </div>
                {isExpanded && (
                  <Card className="absolute top-15 left-1/2 -translate-x-1/2 w-64 bg-black/90 backdrop-blur-lg border-white/30 shadow-xl shadow-white/10 overflow-visible">
                    <h1 className="text-white">{item.title}</h1>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
