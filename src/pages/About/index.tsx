import React from "react";
import SectionContainer from "../../components/SectionContainer";
import SectionTitle from "../../components/SectionTitle";
import SelfImage from "../../assets/images/me1.jpg";
import { fadeUpObserver } from "../../utils/scrollAnimation";
import Skills from "./Skills";

export default function About() {
  const textRef = React.useRef<any>(null);
  React.useEffect(() => {
    fadeUpObserver.observe(textRef.current);
  }, []);

  return (
    <SectionContainer>
      <SectionTitle>About Me</SectionTitle>
      <div
        className="fade-up-hidden flex w-full flex-col items-center xl:flex-row"
        ref={textRef}
      >
        <div className="flex w-full justify-center xl:w-1/2">
          <img
            className=" w-60 rounded-xl lg:w-80"
            src={SelfImage}
            alt="self-image"
          />
        </div>
        <p className="mt-10 w-full text-center text-sm md:text-xl xl:mt-0 xl:w-1/2 xl:text-left xl:text-xl 2xl:text-xl">
          Hello! I’m Haopeng, currently pursuing a Master’s degree in Computer
          Engineering at the University of Southern California (USC). I'm
          transitioning from a background in software engineering to specialize
          in hardware, specifically in Embedded Systems, ASIC/VLSI Design, and
          Verification. I'm looking for opportunities in these areas to apply
          what I've learned and contribute to real-world projects. Let's connect
          if you're interested.
        </p>
      </div>
      <Skills />
    </SectionContainer>
  );
}
