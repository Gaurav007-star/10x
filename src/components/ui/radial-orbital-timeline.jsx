import { useState, useEffect, useRef } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/Card";
import { cn } from "@/lib/utils";
import { GiPlainCircle } from "react-icons/gi";

export default function RadialOrbitalTimeline({ timelineData }) {
  const [expandedItems, setExpandedItems] = useState({});
  const [rotationAngle, setRotationAngle] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [activeNodeId, setActiveNodeId] = useState(null);
  const containerRef = useRef(null);
  const orbitRef = useRef(null);
  const nodeRefs = useRef({});

  // split items
  const outerItems = timelineData.slice(0, 5); // 3 outer
  const innerItems = timelineData.slice(5, timelineData.length); // 2 inner

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
    const zIndex = Math.round(200 + 50 * Math.cos(radian));
    return { x, y, zIndex };
  };

  return (
    <div
      className="w-full h-[130vh] flex flex-col items-center justify-center bg-white overflow-hidden"
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
          <div className="absolute w-[300px] h-[300px] rounded-full border border-gray-400/50"></div>
          <div className="absolute w-[700px] h-[700px] rounded-full border border-gray-400/50"></div>

          {/* Inner items */}
          {innerItems.map((item, index) => {
            const position = calculateNodePosition(
              index,
              innerItems.length,
              150, // inner orbit radius
              200 // offset spacing
            );
            const isExpanded = expandedItems[item.id];
            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex
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
                <div className="px-3 py-3 w-[150px] bg-primary text-wrap text-center rounded-xl text-white font-semibold  transition-all duration-300 transform text-sm hover:scale-105 z-10">
                  {item.title}
                </div>
                {isExpanded && (
                  <Card className="absolute top-15 left-1/2 -translate-x-1/2 w-70 p-4 bg-white border-2 border-black overflow-visible z-[500]">
                    <ul className="flex flex-col gap-2 py-2">
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
              350 // outer orbit radius
            );
            const isExpanded = expandedItems[item.id];
            const nodeStyle = {
              transform: `translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex
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
                <div className="px-4 py-3 w-[220px] rounded-xl text-center bg-secondary-foreground text-wrap  text-white font-semibold transition-all duration-300 transform hover:scale-105 z-10">
                  {item.title}
                </div>
                {isExpanded && (
                  <Card
                    className={cn(
                      "absolute w-[280px] p-4 bg-white border-2 border-black rounded-lg shadow-lg z-[1000] transition-all duration-200",

                      // vertical placement
                      position.y > 50
                        ? "bottom-full mb-3 left-1/2 -translate-x-1/2"
                        : position.y < -50
                        ? "top-full mt-3 left-1/2 -translate-x-1/2"
                        : "top-1/2 -translate-y-1/2",

                      // horizontal placement
                      position.x > 100
                        ? "left-full ml-3"
                        : position.x < -100
                        ? "right-full mr-3"
                        : ""
                    )}
                  >
                    <ul className="flex flex-col gap-2 py-2">
                      {item.content.map((sub, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2 text-[16px]"
                        >
                          <span>
                            <GiPlainCircle className="w-2 h-2 text-primary" />
                          </span>
                          <span>{sub}</span>
                        </li>
                      ))}
                    </ul>
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
