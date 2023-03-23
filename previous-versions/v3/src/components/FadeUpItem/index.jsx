import React from "react";

export default function FadeUpItem({ children, duration }) {
  return (
    <span
      className="inline-block leading-tight"
      data-aos="fade-up"
      data-aos-duration={duration}
    >
      {children}
    </span>
  );
}
