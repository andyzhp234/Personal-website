import React from "react";
import IconGithub from "../../assets/icon-general/icon-github.png";
import { fadeUpObserver } from "../../utils/scrollAnimation";
type ProjectProps = {
  title: string;
  type: string;
  description: string;
  githubURL: string;
  demoURL: string;
  projectImg: string;
};

export default function Project({
  title,
  type,
  description,
  githubURL,
  demoURL,
  projectImg,
}: ProjectProps) {
  const projectRef = React.useRef<any>(null);

  React.useEffect(() => {
    fadeUpObserver.observe(projectRef.current);
  }, []);

  return (
    <div
      className="fade-up-hidden mb-24 flex flex-col items-center xl:flex-row xl:items-center xl:justify-center"
      ref={projectRef}
    >
      <div className="flex w-20rem shadow-xl sm:w-35rem md:w-38rem lg:w-40rem xl:w-38rem">
        <img src={projectImg} alt="project-img" />
      </div>
      <div className="w-20rem sm:w-35rem md:w-38rem lg:w-40rem xl:ml-20 xl:w-38rem xl:self-start">
        <h1 className="mt-4 text-2xl font-semibold md:text-3xl xl:text-4xl">
          {title}
        </h1>
        <h2 className="text-base sm:text-xl">Full Stack - {type}</h2>
        <h2 className="mt-4 text-sm md:text-base lg:text-xl xl:text-xl">
          {description}
        </h2>
        <div className="mt-5 flex items-center">
          <a href={githubURL}>
            <img
              className="mr-3 h-8 w-8 cursor-pointer md:h-10 md:w-10"
              src={IconGithub}
              alt="github"
            />
          </a>
          <a className="cursor-pointer hover:underline" href={demoURL}>
            Visit Website
          </a>
        </div>
      </div>
    </div>
  );
}
