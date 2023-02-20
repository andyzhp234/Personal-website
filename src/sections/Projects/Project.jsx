import React from "react";
import IconGithub from "../../assets/icon-github.png";

export default function Project({
  title,
  type,
  description,
  githubURL,
  demoURL,
  projectImg,
}) {
  return (
    <div
      className="mb-24 flex flex-col items-center xl:flex-row xl:items-center xl:justify-center"
      data-aos="fade-up"
    >
      <div className="flex w-20rem shadow-xl sm:w-35rem md:w-38rem lg:w-40rem xl:w-38rem">
        <img src={projectImg} />
      </div>
      <div className="w-20rem sm:w-35rem md:w-38rem lg:w-40rem xl:ml-20 xl:w-38rem xl:self-start">
        <h1 className="mt-4 text-2xl font-semibold md:text-3xl xl:text-4xl">
          {title}
        </h1>
        <h2 className="text-base sm:text-xl">{type}</h2>
        <h2 className="mt-4 text-sm md:text-base lg:text-xl xl:text-2xl">
          {description}
        </h2>
        <div className="mt-1 flex items-center">
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

{
  /* <div className="my-3 self-center overflow-hidden bg-orange-300 p-2">
        <img
          className="h-11/12 max-h-80 object-cover"
          src={projectImg}
          alt="project-img"
        />
      </div> */
}

// <div className="flex justify-between px-12">
//   <div className="h-25rem w-38rem rounded-3xl bg-green-200"></div>
//   <div className="w-1/2 bg-orange-300">
//     <h1>Stable E-Commerce</h1>
//   </div>
// </div>

{
  /* <div className="h-20rem w-full max-w-xs self-center rounded-3xl bg-green-200 sm:h-25rem sm:w-30rem sm:max-w-none lg:mr-4 xl:mr-32 "></div> */
}
{
  /* <div className="w-full lg:w-30rem">
        <h1 className="my-1 text-3xl font-medium">{title}</h1>
        <h2 className="my-1 text-base">{type}</h2>
        <h2 className="my-1 text-sm">{description}</h2>
      </div>
      <div className="flex items-center lg:absolute lg:bottom-0">
        <a href={githubURL}>
          <img
            className="mr-3 h-10 w-10 cursor-pointer"
            src={IconGithub}
            alt="github"
          />
        </a>
        <a className="cursor-pointer hover:underline" href={demoURL}>
          Visit Website
        </a>
      </div> */
}
