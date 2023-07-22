import React from "react";

type ButtonProps = {
  type?: "primary" | "secondary" | "tertiary";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  children: React.ReactNode;
};

const typeTable = {
  primary:
    "border py-2 px-5 xl:py-3 xl:px-7 w-fit font-medium rounded-full border-black hover:bg-black hover:text-white font-semibold",
  secondary:
    "py-3 px-7 w-fit font-medium rounded-full bg-black hover:translate-y-2 text-white border border-black font-semibold",
  tertiary:
    "py-2 px-5 w-fit font-medium rounded-full bg-black hover:translate-y-2 text-white border border-black font-semibold xl:py-3 xl:px-7",
};

const sizeTable = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-sm lg:text-lg",
};

export default function PrimaryButton({
  size = "lg",
  type = "primary",
  onClick,
  children,
}: ButtonProps) {
  return (
    <div
      className={`${typeTable[type]} ${sizeTable[size]} border- cursor-pointer transition duration-300 ease-in-out`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}
