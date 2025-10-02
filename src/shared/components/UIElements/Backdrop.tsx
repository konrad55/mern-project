import React from "react";
import { createPortal } from "react-dom";
import type { BackdropProps } from "../../../types";

const Backdrop: React.FC<BackdropProps> = ({ onClick }) => {
  const backdropRoot = document.getElementById("backdrop-hook");

  if (!backdropRoot) {
    return null;
  }

  return createPortal(
    <div
      className="fixed top-0 left-0 w-full h-screen bg-black bg-opacity-75 z-10"
      onClick={onClick}
    />,
    backdropRoot
  );
};

export default Backdrop;
