import { motion, useTransform, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import image from "../../asset/heroBackground.jpg";
import aiImage from "../../asset/ai.jpg";
import DemoExample from "./DemoExample";

// title section
const Horizontal = ({ cards }) => {
  return (
    <div className="bg-white mb-30 mt-30 max-[1025px]:m-0 max-[1025px]:hidden">
      <HorizontalScrollCarousel cards={cards} />
    </div>
  );
};

// main outer component
const HorizontalScrollCarousel = ({ cards }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef
  });

  // Map scroll progress to x movement
  const rawX = useTransform(scrollYProgress, [0, 1], ["50%", "-45%"]);

  // Smooth out the motion
  const x = useSpring(rawX, {
    stiffness: 40, // lower = looser, more floaty
    damping: 15, // less resistance = more glide
    mass: 0.8 // lighter, adds that inertia feel
  });

  return (
    <section ref={targetRef} className="relative h-[250vh]">
      <div className="sticky top-0 flex flex-col h-max items-center justify-center overflow-hidden">
        <h1 className="font-bold w-full h-max flex items-center justify-center text-[60px] text-primary mb-10">
          Demo
        </h1>
        <motion.div style={{ x }} className="flex gap-14">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[550px] w-[500px] overflow-hidden rounded-xl"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute w-full h-full inset-0 z-10 flex gap-2 rounded-xl ">
        <DemoExample {...card.props} />
      </div>
    </div>
  );
};

export default Horizontal;
