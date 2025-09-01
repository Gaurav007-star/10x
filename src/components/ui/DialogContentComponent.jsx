import React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from "./dialog";
import ReactPlayer from "react-player";

const DialogContentComponent = ({ videoLink }) => {
  return (
    <DialogContent className="w-[800px] h-[500px] rounded-2xl bg-transparent">
      <div className="w-full h-full rounded-2xl overflow-hidden">
        <ReactPlayer
          src={videoLink}
          playing
          controls
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </DialogContent>
  );
};

export default DialogContentComponent;
