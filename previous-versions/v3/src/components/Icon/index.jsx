import React from "react";

export default function Icon({ imgSrc, text }) {
  return (
    <div className="my-2 mx-1 flex h-14 w-16 flex-col lg:m-3 lg:h-32 lg:w-36">
      <img
        className="h-10 w-10 self-center lg:h-20 lg:w-20"
        src={imgSrc}
        alt="skills-icon"
      />
      <h2 className="text-center text-sm font-medium">{text}</h2>
    </div>
  );
}
