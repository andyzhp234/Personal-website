import React from "react";
import SectionContainer from "../../components/SectionContainer";
import SectionTitle from "../../components/SectionTitle";
import SelfImage from "../../assets/images/me.png";

export default function About() {
  return (
    <SectionContainer>
      <SectionTitle>About Me</SectionTitle>
      <div className="flex w-full items-center self-center">
        <div className="w-1/2">
          <img src={SelfImage} alt="self-image" />
        </div>
        <div className="w-1/2 text-5xl">
          My expertise is developing intuitive and scalable software
          architectures that prioritize both functionality and user experience.
        </div>
      </div>
    </SectionContainer>
  );
}
