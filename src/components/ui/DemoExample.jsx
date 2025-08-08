import React from "react";
import HeroVideoDialog from "@/components/magicui/hero-video-dialog";
import { Dialog, DialogTrigger } from "./dialog";
import { MdSlowMotionVideo } from "react-icons/md";
import DialogContentComponent from "./DialogContentComponent";
import { Button } from "./button";
import { motion } from "motion/react";

const DemoExample = ({ imgLink, videoLink, thumbnail }) => {
  console.log("image link",imgLink);
  
  return (
    <div className="flex w-full gap-4 p-4">
      <div className="left w-[60%] h-full overflow-hidden">
        {imgLink && (
          <img
            src={imgLink}
            alt="Demo"
            className="w-full h-full rounded-xl object-cover"
          />
        )}

        {videoLink && (
          <div className="video-section relative w-full h-full rounded-xl overflow-hidden">
            <img
              src={thumbnail}
              alt="thumbnail"
              className="w-full h-full rounded-xl z-10"
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

      <div className="right w-[40%] h-full flex flex-col  bg-primary text-white rounded-3xl p-4">
        <div className="top-section w-full h-[80%] flex flex-col gap-2">
          <h1 className="text-[50px]">Title</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
            quibusdam fugit quis ea iure odit, atque aspernatur amet quod
            laboriosam?
          </p>
        </div>
        <div className="button-section w-full h-[20%] flex items-center justify-center">
          <Button
            className={`w-[90%] h-[45px] hover:bg-accent-foreground hover:text-secondary bg-accent rounded-4xl text-accent-foreground hover:scale-105 `}
          >
            Click to visit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DemoExample;
