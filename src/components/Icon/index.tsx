import React from "react";
import { fadeUpObserver } from "../../utils/scrollAnimation";

type IconProp = {
  imgSrc: string;
  text: string;
};

export default function Icon({ imgSrc, text }: IconProp) {
  const iconRef = React.useRef<any>(null);
  React.useEffect(() => {
    fadeUpObserver.observe(iconRef.current);
  }, []);

  return (
    <div
      className="fade-up-hidden my-3 mx-4 flex h-13 w-16 flex-col lg:m-3 lg:h-30 lg:w-32"
      ref={iconRef}
    >
      <img
        className="h-10 w-10 self-center lg:h-20 lg:w-20 mb-2"
        src={imgSrc}
        alt="skills-icon"
      />
      <h2 className="whitespace-nowrap text-center text-sm font-medium">
        {text}
      </h2>
    </div>
  );
}
