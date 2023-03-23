import React from "react";
import IconGithub from "../../assets/icon-github.png";
import IconTopRightArrow from "../../assets/icon-general/icon-top-right-arrow-black.png";

export default function OtherProjectItem({ title, githubURL, demoURL }) {
  return (
    <div
      className="flex h-20 w-full items-center justify-between border-b border-black text-2xl font-medium"
      data-aos="fade-up"
      data-aos-duration="300"
    >
      <a className="flex cursor-pointer hover:underline" href={demoURL}>
        <h1>{title}</h1>
        <img className="ml-1 h-8 w-8" src={IconTopRightArrow} alt="arrow" />
      </a>
      <a href={githubURL}>
        <img
          className="mr-3 h-8 w-8 cursor-pointer lg:h-16 lg:w-16"
          src={IconGithub}
          alt="github"
        />
      </a>
    </div>
  );
}
