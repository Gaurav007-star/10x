"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"]
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-white md:px-10" ref={containerRef}>
      <div className="w-full h-max flex flex-col items-center justify-center px-20 pt-10">
        <h2 className="w-full h-max text-center text-[60px] font-bold text-primary">
          Capabilities in Educational{" "}
          <span className="text-[80px] text-primary">Activity</span>
        </h2>
        <p className="w-full h-max text-center text-[18px] leading-9 text-secondary-foreground px-15">
          <span>
            We harness the power of AI to re-imagine education—making learning
            more inclusive, interactive, and impactful.{" "}
          </span>
          <span className="text-[16px]">
            From assistive technologies for diverse learners to immersive tools
            like AR/VR, our initiatives blend innovation with accessibility.
          </span>
        </p>
      </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex justify-start pt-10 md:pt-30 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 self-start max-w-xs lg:max-w-sm md:w-full">
              <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-primary ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full text-secondary-foreground">
              {item.content}{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
