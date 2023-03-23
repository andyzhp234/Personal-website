import React from "react";

type SectionContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SectionContainer({
  children,
  className = "",
}: SectionContainerProps) {
  return <div className={`${className} px-52 pb-56`}>{children}</div>;
}
