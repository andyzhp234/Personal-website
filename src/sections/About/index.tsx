import React from "react";
import SectionContainer from "../../components/SectionContainer";
import SectionTitle from "../../components/SectionTitle";
import SelfImage from "../../assets/images/me.png";
import { fadeUpObserver } from "../../utils/scrollAnimation";

export default function About() {
  const textRef = React.useRef<any>(null);
  React.useEffect(() => {
    fadeUpObserver.observe(textRef.current);
  }, []);

  return (
    <SectionContainer>
      <SectionTitle>About Me</SectionTitle>
      <div
        className="fade-up-hidden flex w-full flex-col items-center lg:flex-row"
        ref={textRef}
      >
        <div className="flex w-full justify-center lg:w-1/2">
          <img className="w-56" src={SelfImage} alt="self-image" />
        </div>
        <div className="sm:2xl mt-10 w-full text-center text-xl md:text-3xl lg:mt-0 lg:w-1/2 lg:text-left xl:text-5xl">
          My expertise is developing intuitive and scalable software
          architectures that prioritize both functionality and user experience.
        </div>
      </div>
    </SectionContainer>
  );
}
