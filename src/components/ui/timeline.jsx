import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export const Timeline = ({ data = [] }) => {
  const timelineRef = useRef(null); // <--- observe this (only the timeline area)
  const itemRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isScrollingToItem, setIsScrollingToItem] = useState(false);
  const [showDots, setShowDots] = useState(false);

  // IntersectionObserver: show dots when at least ~10% of timeline is visible
  useEffect(() => {
    if (!timelineRef.current) return;
    const el = timelineRef.current;

    const obs = new IntersectionObserver(
      ([entry]) => {
        // tweak this threshold (0.05, 0.1, 0.2...) to show earlier/later
        setShowDots(entry.intersectionRatio > 0.1);
      },
      {
        root: null,
        threshold: [0, 0.05, 0.1, 0.25, 0.5, 1]
      }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Update activeIndex based on which item is nearest center of viewport
  useEffect(() => {
    const onScroll = () => {
      if (isScrollingToItem) return;

      let closestIndex = 0;
      let closestDistance = Infinity;
      itemRefs.current.forEach((item, idx) => {
        if (!item) return;
        const rect = item.getBoundingClientRect();
        const distance = Math.abs(
          rect.top + rect.height / 2 - window.innerHeight / 2
        );
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = idx;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    // initial check
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [isScrollingToItem]);

  const scrollToItem = (index) => {
    setIsScrollingToItem(true);
    setActiveIndex(index);
    itemRefs.current[index]?.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });

    // small timeout — increase if you have heavy content or long smooth scroll timing
    setTimeout(() => setIsScrollingToItem(false), 700);
  };

  return (
    <section className="relative w-full md:px-10 bg-white">
      {/* Fixed dot navigation (fades in/out). pointerEvents disabled when hidden */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: showDots ? 1 : 0 }}
        transition={{ duration: 0.25 }}
        style={{ pointerEvents: showDots ? "auto" : "none" }}
        className="fixed top-1/2 -translate-y-1/2 z-50 p-3 rounded max-[1025px]:hidden"
      >
        <div className="flex flex-col gap-3">
          {data.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToItem(i)}
              aria-label={`Go to item ${i + 1}`}
              className={`w-3 h-3 max-[1025px]:w-5 max-[1025px]:h-5 rounded-full transition-transform cursor-pointer ${
                activeIndex === i
                  ? "bg-primary scale-125"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      </motion.div>

      {/* Header (kept outside the observed timeline block so it won't keep dots visible) */}
      <div className="w-full flex flex-col items-center justify-center px-6 my-20 max-[1025px]:mb-10">
        <h2 className="w-full text-center max-[450px]:text-[30px] max-[1025px]:text-[60px] text-[60px] font-bold text-primary leading-tight">
          Capabilities in Educational{" "}
          <span className="max-[450px]:text-[30px] max-[1025px]:text-[60px] text-[80px] text-primary">
            Activity
          </span>
        </h2>
        <p className="w-full text-center text-[18px] max-[1025px]:text-[16px] leading-7 text-secondary-foreground">
          We harness the power of AI to re-imagine education—making learning
          more inclusive, interactive, and impactful. From assistive
          technologies for diverse learners to immersive tools like AR/VR, our
          initiatives blend innovation with accessibility.
        </p>
      </div>

      {/* TIMELINE: THIS is the element we observe */}
      <div
        ref={timelineRef}
        className="relative w-[90%] max-[1025px]:w-full max-[450px]:px-4 mx-auto pb-20 "
      >
        {data.map((item, index) => (
          <div
            key={index}
            ref={(el) => (itemRefs.current[index] = el)}
            className="flex max-[1025px]:flex-col justify-start pt-10 gap-10  max-[1025px]:gap-5"
          >
            <div className="min-[1025px]:sticky flex flex-row max-[1025px]:flex-col z-40 items-center top-30 self-start max-w-xs max-[1025px]:max-w-full w-full">
              <h3 className="block text-[40px] max-[450px]:text-[20px] px-15 max-[1025px]:px-5 font-bold text-primary">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-6 pr-4 m-5 max-[1025px]:px-0 max-[1025px]:m-0 w-full text-secondary-foreground">
              {item.content}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
