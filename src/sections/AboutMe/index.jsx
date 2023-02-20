import React from "react";
import IconMe from "../../assets/images/aboutme.png";
import Title from "../../components/Title";

export default function AboutMe() {
  return (
    <div className="px-6 py-10 md:px-10 lg:py-20 xl:px-52">
      <Title>About Me</Title>
      <div className="flex w-full flex-col px-2 md:flex-row lg:px-10">
        <div className="flex w-full items-center lg:w-1/2">
          <img className="h-60 w-60" src={IconMe} alt="a photo of myself" />
        </div>
        <h1
          className="mt-10 w-full text-2xl lg:mt-0 lg:w-1/2 lg:text-5xl"
          data-aos="zoom-in"
        >
          My expertise is developing intuitive and scalable software
          architectures that prioritize both functionality and user experience.
        </h1>
      </div>
    </div>
  );
}
