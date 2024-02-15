import React from "react";
import PrimaryButton from "../../../../components/Button/PrimaryButton";
import NavigationItem from "../../../../components/NavigationItem";
import SectionContainer from "../../../../components/SectionContainer";
import SelfIntro from "./SelfIntro";

type LandingProps = {
  scrollToTarget: () => void;
};

export default function Landing({ scrollToTarget }: LandingProps) {
  return (
    <div className="mb-40 mt-60 sm:ml-5 md:ml-10 lg:ml-14 xl:ml-20">
      <SectionContainer>
        <SelfIntro />
        <div className="mt-32 flex w-full justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="arrow h-6 w-6 text-gray-800 lg:h-10 lg:w-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
        {/* <div className="unreveal flex items-center py-5">
          <PrimaryButton onClick={() => scrollToTarget()} type="tertiary">
            Hire Me
          </PrimaryButton>
          <NavigationItem isDownload={true}>My Resume</NavigationItem>
        </div> */}
      </SectionContainer>
    </div>
  );
}
