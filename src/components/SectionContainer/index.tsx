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
    <div className={`${className} mt-10 mb-10 md:mt-24 md:mb-24 `}>
      {children}
    </div>
  );
}
