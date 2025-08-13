import React from "react";

export default function ImageModal({ isOpen, onClose, imageSrc, alt }) {
  if (!isOpen) return null;

  return (
    <>
      <input
        type="checkbox"
        id="image_modal"
        className="modal-toggle"
        checked
        readOnly
      />
      <div className="modal" role="dialog">
        <div className="modal-box p-4 max-w-4xl">
          <img src={imageSrc} alt={alt} className="w-full h-auto rounded-lg" />
        </div>
        <label className="modal-backdrop cursor-pointer" onClick={onClose}>
          Close
        </label>
      </div>
    </>
  );
}
