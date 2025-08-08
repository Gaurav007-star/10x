import React, { useState } from "react";
import { Element } from "react-scroll";
import { motion, useMotionValue } from "framer-motion";

import img1 from "../../asset/capabilities/contentDelivery.jpg";
import img2 from "../../asset/capabilities/contentCreation.jpg";
import img3 from "../../asset/capabilities/pedagogy.jpg";
import educationImg from "../../asset/capabilities/educationCenter.jpg";

import video from "../../asset/video.mp4";
import HeroVideoDialog from "../magicui/hero-video-dialog";
import Horizontal from "../ui/Horizontal";

// Custom component example
const Review = () => {
  return (
    <div className="w-full h-full flex items-center justify-center bg-white text-black rounded-xl p-4">
      <div className="left w-[50%] h-full ">
        <img
          src={educationImg}
          alt="left/bg"
          className="w-fit h-full object-center rounded-xl"
        />
      </div>
      <div className="right w-[50%] h-full p-4 flex flex-col justify-center">
        <h1 className="text-[50px] font-bold mb-2">Education Center</h1>
        <p className="w-full h-max text-[30px]">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
          quaerat iste aliquam voluptas excepturi nesciunt atque accusamus iure?
          Quis veniam mollitia debitis quae alias tenetur possimus dignissimos
          nulla odio? Incidunt. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Qui similique corporis dolores molestias beatae amet
          magnam dolorem quaerat incidunt. Modi voluptatum laboriosam hic
          numquam quibusdam iste porro alias, aperiam unde et, maxime,
          perferendis rem incidunt aliquam nulla minus quaerat assumenda?
        </p>
        <div className="button w-full flex items-center mt-5">
          <button
            onClick={() => console.log("click ion button")}
            className="bg-black w-[200px] h-[70px] hover:scale-105 transition-transform duration-200 text-2xl cursor-pointer  text-white px-4 py-2 rounded-xl "
          >
            Share
          </button>
        </div>
      </div>
    </div>
  );
};

// custom video component
const VideoComponent = () => {
  return (
    <>
      <HeroVideoDialog
        className="block dark:hidden"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/ogcSQ-cFRVM"
        thumbnailSrc={img3}
        thumbnailAlt="Dummy Video Thumbnail"
      />
    </>
  );
};

// Main-Component
const Demo = () => {
  // Start at middle
  return (
    <Element name="demo" className="my-10">
      <Horizontal />
    </Element>
  );
};

export default Demo;
