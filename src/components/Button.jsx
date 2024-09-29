import React from "react";

const Button = ({
  className = "",
  color = "primary",
  size = "default",
  onClick,
  ...props
}) => {
  const colorClasses = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    destructive: "bg-red-500 text-white",
  };

  const sizeClasses = {
    sm: "h-8 px-3 text-sm",
    default: "h-10 px-4 text-base",
    lg: "h-12 px-6 text-lg",
  };

  return (
    <button
      className={`${colorClasses[color]} ${sizeClasses[size]} ${className}`}
      onClick={onClick}
      {...props}
    />
  );
};

export { Button };
