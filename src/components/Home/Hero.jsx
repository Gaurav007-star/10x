import React, { useEffect, useRef } from "react";
import { Element } from "react-scroll";
import { TypingAnimation } from "@/components/magicui/typing-animation";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Background from "../../asset/mainBackground.jpg";
import ScrollHero from "../layout/ScrollHero";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {

  // rocket animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".rocket",
        { y: 200, x: 230 }, // starting position
        {
          y: 5, // ending position
          xPercent: 90,
          scrollTrigger: {
            trigger: ".vision-mission",
            start: "top bottom", // starts when top of section hits bottom of viewport
            end: "+=800", // longer distance = slower animation
            scrub: 1 // scrub with smoothing
          },
          ease: "power1.out"
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <Element name="hero">
      <div className="w-full h-max flex flex-col items-center justify-center pb-10 overflow-hidden">
        <ScrollHero />

        {/* mobile-responsive hero section */}
        <div className="hero-section-mobile-responsive hidden max-[1025px]:inline-flex flex-col items-center ">
          <div className="heading-section w-full h-max flex flex-col  items-center max-[450px]:leading-8">
            <h1 className="bg-gradient-to-r from-primary-foreground to-primary bg-clip-text text-transparent text-[60px] max-[450px]:text-[30px] font-bold p-2">
              Center of Excellence
            </h1>

            <h2 className="text-[50px] max-[450px]:text-[30px] px-2">
              AI for Education
            </h2>
          </div>

          {/* main-background-image */}
          <div className="image-section w-full h-max max-[450px]:px-5 my-5 max-[450px]:mb-0">
            <img
              src={Background}
              alt="background"
              className="w-full h-[400px] max-[450px]:h-fit object-cover object-center rounded-2xl"
            />
          </div>
        </div>

        {/* vision-mission-section */}
        <div className="vision-mission w-full h-max flex max-[450px]:flex-col items-center justify-between gap-4 text-primary px-[10vw] max-[1025px]:px-10 max-[450px]:px-5 cursor-pointer z-20 mt-10">
          {/* left-VISION-section */}
          <div className="left w-[50%] max-[450px]:w-full h-max flex flex-col justify-center ">
            <div className="left-heading-section relative w-full h-[50%] flex items-center gap-2">
              <TypingAnimation
                className={`text-[100px] max-[1025px]:text-[60px] max-[450px]:text-[40px]`}
              >
                Vision
              </TypingAnimation>

              <DotLottieReact
                src="https://lottie.host/b1c78a29-0db1-4d5a-bda7-1d84e66558a7/TAEHN0QlUz.lottie"
                loop
                autoplay
                className="rocket absolute w-[80px] h-[80px] max-[1025px]:hidden"
              />
            </div>

            <ul className="w-full h-[100px] max-[1025px]:h-[200px] max-[450px]:h-max flex flex-col items-start text-[20px] text-secondary-foreground font-medium text-wrap truncate">
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
          <div className="right w-[50%] max-[450px]:w-full h-max bg-secondary max-[450px]:bg-transparent flex flex-col justify-center py-10 max-[1025px]:py-6 px-5 max-[450px]:p-0 rounded-4xl ">
            <div className="right-heading-section w-full h-[50%] flex items-center">
              <TypingAnimation
                className={`text-[100px] max-[1025px]:text-[60px] max-[450px]:text-[40px] `}
              >
                Mission.
              </TypingAnimation>
            </div>

            <ul className="w-full h-[100px] max-[1025px]:h-[200px] max-[450px]:h-max flex flex-col items-start text-[20px] text-secondary-foreground font-medium text-wrap truncate">
              <p className="flex items-start gap-3 text-secondary-foreground text-[16px] ">
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
