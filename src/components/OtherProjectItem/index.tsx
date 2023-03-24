import React from "react";
import IconTopRightArrow from "../../assets/icon-general/icon-top-right-arrow-black.png";
import IconGithub from "../../assets/icon-general/icon-github.png";
import { fadeUpObserver } from "../../utils/scrollAnimation";

type OtherProjectItemProps = {
  title: string;
  demoURL: string;
  githubURL: string;
};

export default function OtherProjectItem({
  title,
  demoURL,
  githubURL,
}: OtherProjectItemProps) {
  const otherProjectRef = React.useRef<any>(null);

  React.useEffect(() => {
    fadeUpObserver.observe(otherProjectRef.current);
  }, []);

  return (
    <div
      className="fade-up-hidden flex h-20 w-full items-center justify-between border-b border-black text-2xl font-medium"
      ref={otherProjectRef}
    >
      <a className="flex cursor-pointer hover:underline" href={demoURL}>
        <h1>{title}</h1>
        <img className="ml-2 h-5 w-5" src={IconTopRightArrow} alt="arrow" />
      </a>
      <a href={githubURL}>
        <img
          className="mr-3 h-8 w-8 cursor-pointer lg:h-12 lg:w-12"
          src={IconGithub}
          alt="github"
        />
      </a>
    </div>
  );
}
