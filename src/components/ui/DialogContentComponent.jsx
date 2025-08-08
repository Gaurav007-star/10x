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
    <DialogContent className="w-full h-[500px]">
      <DialogHeader>
        <DialogTitle>Share link</DialogTitle>
      </DialogHeader>
      <div className="w-full h-full p-5 rounded-xl">
        <iframe
          src={videoLink}
          frameborder="0"
          className="w-full h-full rounded-xl"
        ></iframe>
      </div>
    </DialogContent>
  );
};

export default DialogContentComponent;
