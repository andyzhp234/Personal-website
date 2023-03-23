import React from "react";
import IconGithub from "../../assets/icon-github.png";
import IconLinkedIn from "../../assets/icon-linkedin.png";
import Resume from "../../assets/icon-linkedin.png";

export default function LandingNav() {
  return (
    <>
      <div
        className="flex flex-wrap items-center py-8 text-xs md:text-base lg:text-xl"
        data-aos="fade-up"
        data-aos-duration="1200"
      >
        <div
          className="mr-3 cursor-pointer rounded-full bg-black px-4 py-2 font-semibold text-white duration-100 ease-in-out
          hover:translate-y-1 lg:mr-16 lg:px-8 lg:py-3"
        >
          Hire Me
        </div>
        <div className="mr-3 cursor-pointer font-semibold duration-100 ease-in-out hover:translate-y-1 lg:mr-16">
          See my works
        </div>
        <a
          className="cursor-pointer font-semibold duration-100 ease-in-out hover:translate-y-1"
          href={Resume}
          download="Haopeng_Zeng_Resume"
        >
          My Resume
        </a>
      </div>
      <div className="flex" data-aos="fade-up" data-aos-duration="1200">
        <a href="https://github.com/andyzhp234">
          <img
            className="mr-2 h-10 w-10 cursor-pointer duration-100 ease-in-out hover:translate-y-1 sm:h-12 sm:w-12 md:mr-5"
            src={IconGithub}
            alt="github"
          />
        </a>
        <a href="https://www.linkedin.com/in/haopengzeng">
          <img
            className="h-10 w-10 cursor-pointer duration-100 ease-in-out hover:translate-y-1 sm:h-12 sm:w-12"
            src={IconLinkedIn}
            alt="linkedin"
          />
        </a>
      </div>
    </>
  );
}
