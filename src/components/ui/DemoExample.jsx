import React from "react";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { Dialog, DialogTrigger } from "./dialog";
import { MdSlowMotionVideo } from "react-icons/md";
import DialogContentComponent from "./DialogContentComponent";
import { Button } from "./button";
import { motion } from "motion/react";

const DemoExample = ({ imgLink, videoLink, thumbnail, title, desc, link }) => {
  return (
    <div className="flex max-[450px]:flex-col w-full h-full max-[1025px]:h-[600px] max-[400px]:h-[80vh] max-[450px]:h-[70vh] gap-4 p-4 max-[1025px]:px-10 max-[450px]:px-5 ">
      <Dialog>
        <div className="right w-full h-full flex flex-col items-center justify-center bg-white border-[1px] shadow-md border-primary text-black rounded-3xl py-4 px-8">
          <div className="top-section h-[30%] w-full  flex items-center justify-center">
            <img src={imgLink || thumbnail} alt={title} className="w-50 h-full object-cover" />
          </div>
          <div className="middle-section w-full h-[50%] flex flex-col items-center gap-2">
            <h1
              className={`text-[30px] max-[1025px]:text-[30px] max-[450px]:text-[25px] text-center font-semibold leading-tight`}
            >
              {title}
            </h1>
            <p className="max-[450px]:text-[20px] max-[1025px]:text-[24px] text-wrap text-center max-[1025px]:overflow-y-scroll">
              {desc}
            </p>
          </div>
          <div className="button-section w-full h-[20%] max-[450px]:mt-2 flex items-center justify-center">
            {videoLink && <DialogContentComponent videoLink={videoLink} />}
            {videoLink ? (
              <DialogTrigger asChild>
                <Button
                  className={`w-full h-[45px] max-[450px]:h-[50px] hover:bg-accent-foreground hover:text-secondary bg-accent rounded-4xl text-accent-foreground hover:scale-105 `}
                >
                  View Demo
                </Button>
              </DialogTrigger>
            ) : (
              <a href={link} target="_blank" className="w-[90%] h-max">
                <Button
                  className={`w-full h-[45px] max-[450px]:h-[50px] hover:bg-accent-foreground hover:text-secondary bg-accent rounded-4xl text-accent-foreground hover:scale-105 font-semibold `}
                >
                  View Demo
                </Button>
              </a>
            )}
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default DemoExample;
