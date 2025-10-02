import React from "react";
import { Link } from "react-router-dom";
import type { ButtonProps } from "../../../types";

const Button: React.FC<ButtonProps> = ({
  inverse = false,
  danger = false,
  to,
  type = "button",
  size = "default",
  disabled = false,
  onClick,
  children,
}) => {
  const baseClasses =
    "cursor-pointer border border-gray-800 text-gray-800 bg-transparent py-2 px-4 font-inherit hover:bg-gray-800 hover:text-white focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed transition-colors";

  const sizeClasses = {
    small: "py-1 px-2 text-sm",
    default: "py-2 px-4",
    big: "py-3 px-6 text-lg",
  };

  const variantClasses = inverse
    ? "bg-yellow-400 text-gray-800 border-yellow-400 hover:bg-yellow-500"
    : danger
    ? "bg-red-600 text-white border-red-600 hover:bg-red-700"
    : "";

  const className = `${baseClasses} ${sizeClasses[size]} ${variantClasses}`;

  if (to) {
    return (
      <Link to={to} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button
      className={className}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
