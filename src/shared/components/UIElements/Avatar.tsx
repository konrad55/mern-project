import React from "react";
import type { AvatarProps } from "../../../types";

const Avatar: React.FC<AvatarProps> = ({
  image,
  alt,
  className = "",
  style,
  width,
}) => {
  return (
    <div
      className={`w-full h-full flex justify-center items-center ${className}`}
      style={style}
    >
      <img
        src={image}
        alt={alt}
        className="block rounded-full w-full h-full object-cover"
        style={{ width: width, height: width }}
      />
    </div>
  );
};

export default Avatar;
