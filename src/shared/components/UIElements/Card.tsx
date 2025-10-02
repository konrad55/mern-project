import React from "react";
import type { CardProps } from "../../../types";

const Card: React.FC<CardProps> = ({ className = "", style, children }) => {
  return (
    <div
      className={`bg-white rounded-lg shadow-lg p-4 overflow-hidden ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
