import React from "react";

export default function Title({ children }) {
  return (
    <h1 className="mb-6 self-start text-3xl font-bold sm:text-5xl md:mb-12 lg:text-6xl">
      {children}
    </h1>
  );
}
