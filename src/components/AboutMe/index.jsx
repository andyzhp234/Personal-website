import React from "react";
import IconMe from "../../assets/images/aboutme.png";

export default function AboutMe() {
  return (
    <div>
      <h1 className="text-6xl font-bold lg:text-8xl">Hello!</h1>
      <div className="mt-8 flex w-full flex-col md:flex-row">
        <div className="md:w-3/5 lg:text-3xl">
          <h2>
            I am <b>Haopeng Zeng</b> and I recently graduated from the
            University of California, Santa Cruz with honors degrees in Computer
            Science.
          </h2>
          <h2 className="mt-10">
            I'm passionate about creating beautiful websites with intuitive UI,
            and I'm excited to design, build, and maintain scalable software
            that solves people's and business's needs.
          </h2>
          <h2 className="mt-10">
            Aspiring to become a Full Stack Software Developer, I'm always eager
            to take on new challenges and explore new technologies.
          </h2>
        </div>
        <img
          className="mt-10 h-60 w-60 self-center md:mt-0"
          src={IconMe}
          alt="a photo of myself"
        />
      </div>
    </div>
  );
}
