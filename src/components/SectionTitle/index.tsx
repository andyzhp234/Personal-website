import React from "react";

type SectionTitleProps = {
  children: React.ReactNode;
};

export default function SectionTitle({ children }: SectionTitleProps) {
  return <h1 className="mb-20 text-6xl font-semibold">{children}</h1>;
}
