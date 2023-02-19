import React from "react";
import IconGithub from "../../assets/icon-github.png";
import IconLinkedIn from "../../assets/icon-linkedin.png";
import Resume from "../../assets/icon-linkedin.png";

export default function LandingNav() {
  return (
    <>
      <div
        className="flex flex-wrap py-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div
          className="mr-4 cursor-pointer self-center rounded-full bg-black px-6 py-3 text-sm font-semibold text-white duration-100
          ease-in-out hover:translate-y-1 md:text-base lg:px-8 lg:py-4 lg:text-xl"
        >
          Hire Me
        </div>
        <div
          className="mr-4 cursor-pointer self-center text-sm font-semibold duration-100
          ease-in-out hover:translate-y-1 md:text-base lg:text-xl"
        >
          See my works
        </div>
        <a
          className="cursor-pointer self-center text-sm font-semibold duration-100
          ease-in-out hover:translate-y-1 md:text-base lg:text-xl"
          href={Resume}
          download="Haopeng_Zeng_Resume"
        >
          My Resume
        </a>
      </div>
      <div className="flex" data-aos="fade-up" data-aos-duration="1000">
        <a href="https://github.com/andyzhp234">
          <img
            className="h-12 w-12 cursor-pointer"
            src={IconGithub}
            alt="github"
          />
        </a>
        <a href="https://www.linkedin.com/in/haopengzeng">
          <img
            className="h-12 w-12 cursor-pointer"
            src={IconLinkedIn}
            alt="linkedin"
          />
        </a>
      </div>
    </>
  );
}
