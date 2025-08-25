import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import HeroBackground from "../../asset/heroBackground.jpg";
import HeroBackground from "../../asset/mainBackground.jpg"; 
import { BoxReveal } from "@/components/magicui/box-reveal";
gsap.registerPlugin(ScrollTrigger);

export default function ScrollHero() {
  const headingRef = useRef(null);
  const secondHeadingRef = useRef(null);
  const imageRef = useRef(null);
  const parentRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    const secondHeading = secondHeadingRef.current;
    const h1 = heading.querySelectorAll("h1");
    const h2 = secondHeading.querySelectorAll("h1");
    const image = imageRef.current;
    const parent = parentRef.current;

    // First heading container animation (move + fade during scale)
    gsap.fromTo(
      heading,
      { y: 0, opacity: 1 },
      {
        y: window.innerHeight / 2 - heading.offsetHeight / 2 - 50,
        opacity: 0, // fade out while moving
        scrollTrigger: {
          trigger: parent,
          start: "top top",
          end: "+=500", // slower fade-out
          scrub: true
        }
      }
    );

    // Second heading container animation (move + fade during scale)
    gsap.fromTo(
      secondHeading,
      { y: 0, opacity: 1 },
      {
        y: window.innerHeight / 2 - heading.offsetHeight / 2 - -300,
        opacity: 0, // final opacity
        scale:1.1,
        keyframes: [
          { opacity: 0.9, ease: "power1.in", duration: 0.7 }, // mid fade
          { opacity: 0, ease: "power1.out", duration: 0.3 } // fade out fully
        ],
        scrollTrigger: {
          trigger: parent,
          start: "top top",
          end: "+=800",
          scrub: true
        }
      }
    );

    // First heading font size + fade while scaling
    gsap.fromTo(
      h1,
      { fontSize: "100px", opacity: 1 },
      {
        fontSize: "120px",
        opacity: 0.6, // stop at 0.6 instead of disappearing
        scrollTrigger: {
          trigger: parent,
          start: "top top",
          end: "+=500", // longer duration
          scrub: true
        }
      }
    );

    // Second heading font size + fade while scaling
    gsap.fromTo(
      h2,
      { fontSize: "80px", opacity: 1 },
      {
        fontSize: "180px",
        zIndex: 20,
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: parent,
          start: "top top",
          end: "+=500",
          scrub: true
        }
      }
    );

    // Image movement + fade-out upward
    gsap.fromTo(
      image,
      { y: 0, opacity: 1, scale: 1 },
      {
        y: -150, // move upward more for dramatic fade
        opacity: 0.5, // fade out completely
        keyframes: [
          { opacity: 0.7, ease: "power1.in", duration: 0.9 }, // mid fade
          { opacity: 0, ease: "power1.out", duration: 0.1 } // fade out fully
        ],
        scale:2,
        ease: "power1.inOut", // smooth upward drift
        scrollTrigger: {
          trigger: parent,
          start: "top top",
          end: "+=800", // slightly longer fade
          scrub: true
        }
      }
    );
  }, []);

  return (
    <div
      ref={parentRef}
      style={{
        height: "100%",
        width: "100%",
        position: "relative",
        textAlign: "center",
        overflow: "hidden"
      }}
      className="max-[1025px]:hidden"
    >
      {/* First heading */}
      <div
        ref={headingRef}
        style={{
          position: "absolute",
          top: 20,
          left: 0,
          height: "120px",
          width: "100%",
          textAlign: "center"
        }}
      >
        <h1
          style={{ margin: 0, position: "relative", zIndex: 1 }}
          className="font-bold font-serif bg-gradient-to-r from-primary-foreground to-primary bg-clip-text text-transparent"
        >
          Center of Excellence
        </h1>
      </div>

      {/* Second heading */}
      <div
        ref={secondHeadingRef}
        style={{
          position: "absolute",
          top: "130px",
          left: 0,
          height: "max-content",
          width: "100%",
          textAlign: "center",
          zIndex: 20,
          overflowX:"auto",
          textWrap: "nowrap"
        }}
      >
        <h1
          style={{
            margin: 0,
            position: "relative",
            zIndex: 2,
            overflow: "hidden"
          }}
          className="font-bold font-serif"
        >
          AI for Education
        </h1>
      </div>

      {/* Image */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "50vh",
          zIndex: 5,
          position: "relative"
        }}
      >
        <img
          ref={imageRef}
          src={HeroBackground}
          alt="demo"
          style={{
            width: "900px",
            height: "auto",
            objectFit: "cover",
            borderRadius: "20px"
          }}
        />
      </div>
    </div>
  );
}
