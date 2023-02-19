import React from "react";
import IconGithub from "../../assets/icon-github.png";
import IconLinkedin from "../../assets/icon-linkedin.png";
import IconResume from "../../assets/icon-resume.png";
import IconEmail from "../../assets/icon-email.png";

export default function Contact() {
  return (
    <div className="flex flex-col items-center pb-10">
      <h1 className="p-1 text-3xl font-semibold">Contact</h1>
      <h2 className=" p-1">Based in San Francisco, CA</h2>
      <h2 className="p-1">Willing to Relocate</h2>

      <div className="my-5 flex flex-col flex-wrap justify-center md:flex-row">
        <div className="flex items-center hover:cursor-pointer">
          <img className="mr-1 h-12 w-12" src={IconGithub} alt="github" />
          <a
            className="mr-6 hover:underline"
            href="https://github.com/andyzhp234"
          >
            Github
          </a>
        </div>
        <div className="flex items-center hover:cursor-pointer">
          <img className="mr-1 h-12 w-12" src={IconLinkedin} alt="github" />
          <a
            className="mr-6 hover:underline"
            href="https://www.linkedin.com/in/haopengzeng/"
          >
            LinkedIn
          </a>
        </div>
        <div className="flex items-center hover:cursor-pointer">
          <img className="mr-1 h-12 w-12" src={IconResume} alt="github" />
          <a
            className="mr-6 hover:underline"
            href={IconResume}
            download="Haopeng_Zeng_Resume"
          >
            Download Resume
          </a>
        </div>
        <div className="flex items-center hover:cursor-pointer">
          <img className="mr-1 h-12 w-12" src={IconEmail} alt="github" />
          <a
            className="mr-6 hover:underline"
            href="mailto:haopeng.zeng234@gmail.com"
          >
            haopeng.zeng234@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
