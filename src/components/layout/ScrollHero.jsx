import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroBackground from "../../asset/mainBackground.jpg";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollHero() {
  const headingRef = useRef(null);
  const secondHeadingRef = useRef(null);
  const imageRef = useRef(null);
  const parentRef = useRef(null);

  useLayoutEffect(() => {
    const heading = headingRef.current;
    const secondHeading = secondHeadingRef.current;
    const h1 = heading.querySelectorAll("h1");
    const h2 = secondHeading.querySelectorAll("h1");
    const image = imageRef.current;
    const parent = parentRef.current;

    // set explicit initial state for second heading
    gsap.set(secondHeading, { opacity: 1, y: 0 });

    const ctx = gsap.context(() => {
      // One timeline with same distances/durations as your first version
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: parent,
          start: "top top",
          end: "+=800", // overall duration for most
          scrub: true,
          onLeaveBack: () => {
            gsap.to([heading,secondHeading,h1, h2,image], { opacity: 1, y: 0 });
          }
        }
      });

      // First heading container
      tl.fromTo(
        heading,
        { y: 0, opacity: 1 },
        {
          y: window.innerHeight / 2 - heading.offsetHeight / 2 - 50,
          opacity: 0,
          duration: 1
        },
        0
      );

      // First heading font size
      tl.fromTo(
        h1,
        { fontSize: "100px", opacity: 1 },
        {
          fontSize: "120px",
          opacity: 0.6,
          duration: 1
        },
        0
      );

      // Second heading container (with scale + fade keyframes)
      tl.fromTo(
        secondHeading,
        { y: 0, opacity: 1 },
        {
          y: window.innerHeight / 2 - heading.offsetHeight / 2 + 300,
          scale: 1.2,
          keyframes: [
            { opacity: 0.9, ease: "power1.in", duration: 0.7 },
            { opacity: 0, ease: "power1.out", duration: 0.3 }
          ]
        },
        0
      );

      // Second heading font size + fade
      tl.fromTo(
        h2,
        { fontSize: "80px", opacity: 1, scale: 1 },
        {
          fontSize: "180px",
          zIndex: 20,
          scale: 1.1,
          ease: "power1.inOut",
          keyframes: [
            { opacity: 1, duration: 0.7 },
            { opacity: 0, duration: 0.3 }
          ]
        },
        0
      );

      // Image
      tl.fromTo(
        image,
        { y: 0, opacity: 1, scale: 1 },
        {
          y: -150,
          scale: 2,
          ease: "power1.inOut",
          keyframes: [
            { opacity: 0.7, ease: "power1.in", duration: 0.9 },
            { opacity: 0, ease: "power1.out", duration: 0.1 }
          ]
        },
        0
      );
    }, parentRef);

    return () => {
      ctx.revert();
    };
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
          zIndex: 50,
          overflowX: "auto",
          textWrap: "nowrap",
          overflow:"hidden"
        }}
      >
        <h1
          style={{
            margin: 0,
            position: "relative",
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
