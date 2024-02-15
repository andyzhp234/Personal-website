import React from "react";
import Landing from "./sections/Landing";
import HardwareProjects from "./sections/HardwareProjects";
import SoftwareProjects from "./sections/SoftwareProjects";
import OtherProjects from "./sections/OtherProjects";

type LandingProps = {
  scrollToTarget: () => void;
};

export default function Home({ scrollToTarget }: LandingProps) {
  return (
    <div>
      <Landing scrollToTarget={scrollToTarget} />
      {/* <HardwareProjects /> */}
      <SoftwareProjects />
      <OtherProjects />
      {/* <Skills /> */}
    </div>
  );
}
