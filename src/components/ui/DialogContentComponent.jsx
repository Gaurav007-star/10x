import React from "react";
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose
} from "./dialog";

const DialogContentComponent = ({ videoLink }) => {
  return (
    <DialogContent className="w-[800px] h-[500px] p-0">
      <div className="w-full h-full p-5 rounded-xl">
        <iframe src={videoLink} className="w-full h-full rounded-xl" />
      </div>
    </DialogContent>
  );
};

export default DialogContentComponent;
