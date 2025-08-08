import React, { useRef } from "react";
import { Element } from "react-scroll";
import { BoxReveal } from "@/components/magicui/box-reveal";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import background from "../../asset/heroBackground.jpg";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const Hero = () => {
  const imageSectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: imageSectionRef,
    offset: ["start end", "end start"]
  });

  // Shrink then grow effect
  const rawScale = useTransform(
    scrollYProgress,
    [0, 0.4, 0.6, 1], // scroll stages
    [1, 0.6, 1.4, 2] // shrink to 0.6x then grow to 2x
  );
  const scale = useSpring(rawScale, { stiffness: 80, damping: 20 });

  // Fade out quickly near the end
  const rawOpacity = useTransform(scrollYProgress, [0.6, 1], [1, 0]);
  const opacity = useSpring(rawOpacity, { stiffness: 80, damping: 20 });

  // Parallax upward move
  const rawY = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const y = useSpring(rawY, { stiffness: 80, damping: 20 });

  // Slight rotation during last phase
  const rawRotate = useTransform(scrollYProgress, [0.6, 1], [0, 5]);
  const rotate = useSpring(rawRotate, { stiffness: 70, damping: 15 });

  return (
    <Element name="hero">
      <div className="w-full h-max flex flex-col items-center justify-center pb-10 overflow-hidden">
        {/* heading-section */}
        <div className="heading w-full h-max z-50 flex flex-col items-center justify-center mt-20 mb-10">
          <BoxReveal boxColor={"#3b82f6"} duration={0.7}>
            <h1 className="text-left text-[15vh] font-serif font-bold leading-[70px] w-full bg-linear-to-r from-[#89c9f3] to-primary bg-clip-text text-transparent py-3">
              Center of Excellence 
            </h1>
          </BoxReveal>

          <BoxReveal boxColor={"#3b82f6"} duration={1}>
            <h2 className="text-[70px] text-secondary-foreground font-semibold py-3">
              in AI for Education.
            </h2>
          </BoxReveal>
        </div>

        {/* main image background */}
        <div
          ref={imageSectionRef}
          className="image-background-section relative w-full h-max flex items-center justify-center p-5"
        >
          <div className="gradient absolute top-[-20vh] right-0 w-[1000px] h-[700px] rounded-full z-10 bg-linear-to-tr from-secondary to-blue-100 blur-[5vh]"></div>

          <motion.img
            src={background}
            alt="background"
            style={{ scale, opacity, y, rotate }}
            className="w-[75vw] h-fit rounded-4xl bg-cover bg-center shadow-lg cursor-pointer z-20"
          />
        </div>

        {/* vision-mission-section */}
        <div className="vision-mission w-full h-max flex items-center justify-between gap-4 text-primary px-[10vw] py-10 cursor-pointer z-20">
          {/* left-VISION-section */}
          <div className="left w-[50%] h-max flex flex-col justify-center ">
            <div className="left-heading-section w-full h-max flex items-center gap-2">
              <TypingAnimation startOnView className={`text-[100px] `}>
                Vision
              </TypingAnimation>

              <DotLottieReact
                src="https://lottie.host/b1c78a29-0db1-4d5a-bda7-1d84e66558a7/TAEHN0QlUz.lottie"
                loop
                autoplay
                className="w-[80px] h-[80px]"
              />
            </div>

            <ul className="w-full h-max flex flex-col items-start text-[20px] text-secondary-foreground font-medium">
              <p className="flex items-start gap-3 text-secondary-foreground text-[16px]">
                We aim to build an AI-powered education system for joyful,
                inclusive, and personalized learning. We use Generative AI to
                help teachers work smarter and have greater impact. We will
                start with pilots and grow nationwide through Kendriya
                Vidyalayas.
              </p>
            </ul>
          </div>

          {/* right-MISSION-section */}
          <div className="right w-[50%] h-max bg-secondary flex flex-col justify-center py-10 px-5 rounded-4xl ">
            <TypingAnimation
              startOnView
              className={`text-[100px] text-primary-foreground`}
            >
              Mission.
            </TypingAnimation>

            <ul className="w-full h-max flex flex-col items-start text-[20px] text-secondary-foreground font-medium">
              <p className="flex items-start gap-3 text-secondary-foreground text-[16px]">
                We strive to transform education by integrating AI into everyday
                teaching and learning. We create tools and content that make
                lessons engaging, personalized, and accessible for all students.
                We support educators with smart resources to inspire and empower
                the next generation of learners.
              </p>
            </ul>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Hero;
