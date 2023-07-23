import React from "react";
import PrimaryButton from "../../components/Button/PrimaryButton";
import SectionContainer from "../../components/SectionContainer";
import NavigationItem from "../../components/NavigationItem";
import SelfIntro from "./SelfIntro";

type LandingProps = {
  scrollToTarget: (location: string) => void;
};

export default function Landing({ scrollToTarget }: LandingProps) {
  return (
    <div className="mb-40 mt-20 sm:ml-5 md:ml-10 lg:ml-14 xl:ml-20">
      <SectionContainer>
        <SelfIntro />
        <div className="unreveal flex items-center py-5">
          <PrimaryButton
            onClick={() => scrollToTarget("contact")}
            type="tertiary"
          >
            Hire Me
          </PrimaryButton>
          <NavigationItem onClick={() => scrollToTarget("project")}>
            See my works
          </NavigationItem>
          <NavigationItem isDownload={true}>My Resume</NavigationItem>
        </div>
      </SectionContainer>
    </div>
  );
}
