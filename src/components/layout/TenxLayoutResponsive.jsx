import { motion } from "framer-motion";

const leftItems = [
  "Operational Efficiency",
  "Reduced Time on Non-Teaching",
  "Personalized Learning",
  "Personalized Assessment",
  "Inclusive (Early assessment of learning disability)"
];

const rightItems = [
  "Equality of opportunity",
  "Contextual and Experiential learning",
  "Pedagogical Innovation",
  "Collaborative Teaching, Exposure and Ownership",
  "Community Participation"
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1 }
  })
};

export default function TenXLayoutResponsive() {
  return (
    <div className="w-full h-max py-5 px-5 max-[450px]:px-1 mt-5 max-[450px]:mt-0 grid grid-cols-2 max-[450px]:grid-cols-1 gap-2 min-[1025px]:hidden">
      {/* Left Items */}
      {leftItems.map((text, i) => (
        <motion.div
          key={`left-${i}`}
          className="bg-primary-foreground text-secondary-foreground text-[20px] font-medium rounded-lg p-4 shadow-md flex items-center justify-center text-center h-[100px]"
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {text}
        </motion.div>
      ))}

      {/* Center Image */}
      {/* <motion.div
        className="flex justify-center"
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <img
          src="/10x-teacher.png"
          alt="10x Teacher"
          className="max-w-[250px]"
        />
      </motion.div> */}

      {/* Right Items */}
      {rightItems.map((text, i) => (
        <motion.div
          key={`right-${i}`}
          className="bg-primary-foreground text-secondary-foreground text-[20px] font-medium rounded-lg p-4 shadow-md flex items-center justify-center text-center h-[100px]"
          custom={i}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {text}
        </motion.div>
      ))}
    </div>
  );
}
