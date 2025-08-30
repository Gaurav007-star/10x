import React from "react";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { Dialog, DialogTrigger } from "./dialog";
import { MdSlowMotionVideo } from "react-icons/md";
import DialogContentComponent from "./DialogContentComponent";
import { Button } from "./button";
import { motion } from "motion/react";

const DemoExample = ({ imgLink, videoLink, thumbnail, title, desc, link }) => {
  return (
    <div className="flex max-[450px]:flex-col w-full h-full max-[1025px]:h-[400px] max-[400px]:h-[80vh] max-[450px]:h-[70vh] gap-4 p-4 max-[1025px]:px-10 max-[450px]:px-5">
      <Dialog>
        {/* left-section */}
        <div className="left rounded-xl w-[55%] max-[450px]:w-full flex items-center justify-center h-full max-[450px]:h-[50%] overflow-hidden">
          {imgLink && (
            <img
              src={imgLink}
              alt="Demo"
              className="w-full h-auto rounded-xl object-cover object-center"
            />
          )}

          {videoLink && (
            <div className="video-section relative w-full h-full rounded-xl overflow-hidden">
              <img
                src={thumbnail}
                alt="thumbnail"
                className="w-full h-auto rounded-xl z-10"
              />

              {/* video content */}
              <DialogContentComponent videoLink={videoLink} />
            </div>
          )}
        </div>

        {/* right-section */}
        <div className="right w-[45%] max-[450px]:w-full h-full max-[450px]:h-[50%] flex flex-col bg-primary text-white rounded-3xl p-4">
          <div className="top-section w-full h-[80%] flex flex-col gap-2">
            <h1 className={`${videoLink ? "text-[35px]" : "text-[42px]"} max-[1025px]:text-[30px] max-[450px]:text-[25px]`}>
              {title}
            </h1>
            <p className="max-[450px]:text-[20px] max-[1025px]:text-[24px] text-wrap max-[1025px]:overflow-y-scroll">
              {desc}
            </p>
          </div>
          <div className="button-section w-full h-[20%] max-[450px]:mt-2 flex items-center justify-center">
            {videoLink ? (
              <DialogTrigger asChild>
                <Button
                  className={`w-full h-[45px] max-[450px]:h-[35px] hover:bg-accent-foreground hover:text-secondary bg-accent rounded-4xl text-accent-foreground hover:scale-105 `}
                >
                  View Demo
                </Button>
              </DialogTrigger>
            ) : (
              <a href={link} target="_blank" className="w-[90%] h-max">
                <Button
                  className={`w-full h-[45px] max-[450px]:h-[35px] hover:bg-accent-foreground hover:text-secondary bg-accent rounded-4xl text-accent-foreground hover:scale-105 `}
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
