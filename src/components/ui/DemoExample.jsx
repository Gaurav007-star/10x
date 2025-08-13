import React from "react";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { Dialog, DialogTrigger } from "./dialog";
import { MdSlowMotionVideo } from "react-icons/md";
import DialogContentComponent from "./DialogContentComponent";
import { Button } from "./button";
import { motion } from "motion/react";
import { useNavigate } from "react-router";

const DemoExample = ({ imgLink, videoLink, thumbnail, title, desc, link }) => {
  console.log(imgLink, title);

  const navigate = useNavigate();

  return (
    <div className="flex max-[450px]:flex-col w-full h-full max-[1025px]:h-[400px] max-[400px]:h-[80vh] max-[450px]:h-[60vh] gap-4 p-4 max-[1025px]:px-10 max-[450px]:px-5 ">
      {/* left-section */}
      <div className="left w-[60%] max-[450px]:w-full h-full max-[450px]:h-[50%] overflow-hidden">
        {imgLink && (
          <img
            src={imgLink}
            alt="Demo"
            className="w-full h-full rounded-xl object-cover object-center"
          />
        )}

        {videoLink && (
          <div className="video-section relative w-full h-full rounded-xl overflow-hidden">
            <img
              src={thumbnail}
              alt="thumbnail"
              className="w-full h-auto rounded-xl z-10"
            />

            <Dialog>
              <DialogTrigger asChild>
                <div className="hover-section w-full h-full absolute top-0 left-0 flex items-center justify-center rounded-xl z-20 cursor-pointer transition-transform duration-200 hover:scale-110 ">
                  <MdSlowMotionVideo className="w-[70px] h-[70px] text-white" />
                </div>
              </DialogTrigger>
              <DialogContentComponent videoLink={videoLink} />
            </Dialog>
          </div>
        )}
      </div>

      {/* right-section */}
      <div className="right w-[40%] max-[450px]:w-full h-full max-[450px]:h-[50%] flex flex-col bg-primary text-white rounded-3xl p-4">
        <div className="top-section w-full h-[80%] flex flex-col gap-2">
          <h1 className="text-[42px] max-[1025px]:text-[30px] max-[450px]:text-[25px]">{title}</h1>
          <p className="max-[400px]:text-[16px] max-[450px]:text-[18px] text-wrap truncate">
            {desc}
          </p>
        </div>
        <div className="button-section w-full h-[20%] max-[450px]:mt-2 flex items-center justify-center">
          <a href={link} target="_blank" className="w-[90%] h-max">
            <Button
              className={`w-full h-[45px] max-[450px]:h-[35px] hover:bg-accent-foreground hover:text-secondary bg-accent rounded-4xl text-accent-foreground hover:scale-105 `}
            >
              View Demo
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default DemoExample;
