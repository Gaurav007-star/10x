import React, { useState } from "react";

export default function Tooltip({ children, text, position = "top" }) {
  const [visible, setVisible] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      {visible && (
        <div
          className={`
            absolute z-50 px-2 py-1 text-xs rounded-md 
            text-white bg-black/80 transition-all duration-200
            ${position === "top" && "bottom-full left-1/2 -translate-x-1/2 mb-2"}
            ${position === "bottom" && "top-full left-1/2 -translate-x-1/2 mt-2"}
            ${position === "left" && "right-full top-1/2 -translate-y-1/2 mr-2"}
            ${position === "right" && "left-full top-1/2 -translate-y-1/2 ml-2"}
          `}
        >
          {text}
        </div>
      )}
    </div>
  );
}
