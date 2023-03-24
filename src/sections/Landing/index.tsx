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
    <SectionContainer>
      <SelfIntro />
      <div className="unreveal mt-10 flex items-center">
        <PrimaryButton
          onClick={() => scrollToTarget("contact")}
          type="secondary"
        >
          Hire Me
        </PrimaryButton>
        <NavigationItem onClick={() => scrollToTarget("project")}>
          See my works
        </NavigationItem>
        <NavigationItem isDownload={true}>My Resume</NavigationItem>
      </div>
    </SectionContainer>
  );
}
