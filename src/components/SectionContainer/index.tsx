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
    <div className={`${className} mb-20 md:mb-44`}>
      {children}
    </div>
  );
}
