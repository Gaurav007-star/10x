import React, { useRef } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell // ✅ Correct import
} from "recharts";
import gsap from "gsap";

const colors = ["#4682b4", "#89c9f3", "#1e3a8a"];

const data = [
  { name: "1x", value: 5, color: colors[0] },
  { name: "2x", value: 10, color: colors[1] },
  { name: "3x", value: 15, color: colors[2] },
  { name: "4x", value: 20, color: colors[0] },
  { name: "5x", value: 25, color: colors[1] },
  { name: "6x", value: 30, color: colors[2] },
  { name: "7x", value: 35, color: colors[0] },
  { name: "8x", value: 40, color: colors[1] },
  { name: "9x", value: 45, color: colors[2] },
  { name: "10x", value: 50, color: colors[0] }
];

export default function TenXBarChart() {
  const barRefs = useRef({});

  const handleMouseEnter = (index) => {
    if (barRefs.current[index]) {
      gsap.to(barRefs.current[index], {
        scale: 1.1,
        transformOrigin: "center bottom",
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const handleMouseLeave = (index) => {
    if (barRefs.current[index]) {
      gsap.to(barRefs.current[index], {
        scale: 1,
        transformOrigin: "center bottom",
        duration: 0.3,
        ease: "power2.out"
      });
    }
  };

  const CustomBar = (props) => {
    const { fill, x, y, width, height, index } = props;
    return (
      <rect
        ref={(el) => (barRefs.current[index] = el)}
        x={x}
        y={y}
        width={width}
        height={height}
        fill={fill}
        rx={0}
        ry={0}
        style={{ cursor: "pointer"}}
        onMouseEnter={() => handleMouseEnter(index)}
        onMouseLeave={() => handleMouseLeave(index)}
      />
    );
  };

  return (
    <ResponsiveContainer width="100%" height={600}>
      <BarChart
        data={data}
        margin={{ top: 20, right: 30, left: 20,}}
        style={{ backgroundColor: "" }}
      >
        <XAxis dataKey="name" />
        <Tooltip />
        <Bar dataKey="value" shape={<CustomBar />}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} className="rounded-4xl" />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
