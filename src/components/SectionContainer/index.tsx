import React from "react";

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionContainer({
  children,
  className = "",
}: SectionContainerProps) {
  return (
    <div
      className={`${className} px-5 pb-56 sm:px-12 md:px-24 lg:px-44 xl:px-52`}
    >
      {children}
    </div>
  );
}
