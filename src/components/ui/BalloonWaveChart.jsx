import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

gsap.registerPlugin(ScrollTrigger);

function textWrap(text = "", maxChars = 14) {
  const words = String(text).split(" ");
  let lines = [];
  let current = "";

  words.forEach((word) => {
    if ((current + word).length <= maxChars) {
      current += (current ? " " : "") + word;
    } else {
      lines.push(current);
      current = word;
    }
  });
  if (current) lines.push(current);
  return lines;
}

const BallonWaveChart = ({ data = [] }) => {
  const colWidth = 50;
  const gap = 20;
  const depth = 10;
  const maxHeight = 200;
  const topOffset = 40;
  const titleLineHeight = 10;

  const fallbackMain = "#4682b4";
  const fallbackTop = "#89c9f3";
  const fallbackSide = "#333333";

  const barsRef = useRef([]);
  const valuesRef = useRef([]);
  const titlesRef = useRef([]);

  barsRef.current = [];
  valuesRef.current = [];
  titlesRef.current = [];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate bars
      barsRef.current.forEach((bar) => {
        if (!bar) return;
        gsap.set(bar, { transformOrigin: "50% 100%" });
        gsap.fromTo(
          bar,
          { scaleY: 0 },
          {
            scaleY: 1,
            duration: 0.9,
            ease: "power3.out",
            scrollTrigger: {
              trigger: bar,
              start: "top 80%",
              toggleActions: "restart none none none"
            }
          }
        );
      });

      // Animate values
      valuesRef.current.forEach((val) => {
        if (!val) return;
        gsap.fromTo(
          val,
          { autoAlpha: 0, y: -6 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
            scrollTrigger: {
              trigger: val,
              start: "top 85%",
              toggleActions: "restart none none none"
            }
          }
        );
      });

      // Animate titles
      titlesRef.current.flat().forEach((title) => {
        if (!title) return;
        gsap.fromTo(
          title,
          { autoAlpha: 0, y: -6 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.45,
            ease: "power2.out",
            scrollTrigger: {
              trigger: title,
              start: "top 85%",
              toggleActions: "restart none none none"
            }
          }
        );
      });
    });

    return () => ctx.revert(); // Only kills animations in this component
  }, [data]);

  const handleHoverIn = (i) => {
    const barEl = barsRef.current[i];
    const titleEls = titlesRef.current[i] || [];
    const valueEl = valuesRef.current[i];

    if (barEl) {
      gsap.to(barEl, {
        scaleX: 1.05,
        filter: "drop-shadow(4px 6px 6px rgba(0,0,0,0.4))",
        duration: 0.25,
        ease: "power2.out"
      });
    }
    if (titleEls.length) {
      gsap.to(titleEls, {
        y: -6,
        fill: "#1d4ed8",
        fontWeight: 700,
        duration: 0.25,
        ease: "power2.out"
      });
    }
    if (valueEl) {
      gsap.to(valueEl, {
        y: -3,
        duration: 0.25,
        ease: "power2.out"
      });
    }
  };

  const handleHoverOut = (i) => {
    const barEl = barsRef.current[i];
    const titleEls = titlesRef.current[i] || [];
    const valueEl = valuesRef.current[i];

    if (barEl) {
      gsap.to(barEl, {
        scaleX: 1,
        filter: "drop-shadow(2px 4px 3px rgba(0,0,0,0.3))",
        duration: 0.25,
        ease: "power2.out"
      });
    }
    if (titleEls.length) {
      gsap.to(titleEls, {
        y: 0,
        fill: "#374151",
        fontWeight: 400,
        duration: 0.25,
        ease: "power2.out"
      });
    }
    if (valueEl) {
      gsap.to(valueEl, {
        y: 0,
        duration: 0.25,
        ease: "power2.out"
      });
    }
  };

  return (
    <div className="chart-wrapper relative w-full h-max">

      <svg
        viewBox={`0 0 ${Math.max(600, data.length * (colWidth + gap))} ${
          topOffset + maxHeight + 80
        }`}
        className="relative w-full h-auto z-50 "
      >
        <defs>
          <filter id="barShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow
              dx="2"
              dy="4"
              stdDeviation="3"
              floodColor="rgba(0,0,0,0.3)"
            />
          </filter>
        </defs>

        {data.map((d, i) => {
          const x = i * (colWidth + gap);
          const height = (d.value / 100) * maxHeight;
          const barTopY = topOffset + (maxHeight - height);
          const wrapped = textWrap(d.title, 14);

          const mainColor = d.color || fallbackMain;
          const topColor = d.topColor || fallbackTop;
          const sideColor = d.sideColor || fallbackSide;

          titlesRef.current[i] = [];

          return (
            <g
              key={i}
              transform={`translate(${x},0)`}
              className="cursor-pointer"
              onMouseEnter={() => handleHoverIn(i)}
              onMouseLeave={() => handleHoverOut(i)}
            >
              <g
                ref={(el) => (barsRef.current[i] = el)}
                style={{ filter: "url(#barShadow)" }}
                
              >
                <polygon
                  points={`${0},${barTopY} ${depth},${barTopY - depth} ${
                    colWidth + depth
                  },${barTopY - depth} ${colWidth},${barTopY}`}
                  fill={topColor}
                />
                <polygon
                  points={`${0},${barTopY} ${colWidth},${barTopY} ${colWidth},${
                    barTopY + height
                  } ${0},${barTopY + height}`}
                  fill={mainColor}
                />
                <polygon
                  points={`${colWidth},${barTopY} ${colWidth + depth},${
                    barTopY - depth
                  } ${colWidth + depth},${
                    barTopY + height - depth
                  } ${colWidth},${barTopY + height}`}
                  fill={sideColor}
                />
              </g>

              <text
                ref={(el) => (valuesRef.current[i] = el)}
                x={colWidth / 2}
                y={barTopY + height / 2}
                textAnchor="middle"
                className="fill-white font-bold text-[7px]"
                dominantBaseline="middle"
              >
                {d.name} Growth
              </text>

              {wrapped.map((line, idx) => (
                <text
                  key={idx}
                  ref={(el) => el && titlesRef.current[i].push(el)}
                  x={colWidth / 2}
                  y={
                    barTopY - 20 - (wrapped.length - idx - 1) * titleLineHeight
                  }
                  textAnchor="middle"
                  className="fill-gray-700 text-[7px]"
                >
                  {line}
                </text>
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default BallonWaveChart;
