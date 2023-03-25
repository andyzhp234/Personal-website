import React from "react";
import SectionContainer from "../../components/SectionContainer";
import SectionTitle from "../../components/SectionTitle";
import OtherProjectItem from "../../components/OtherProjectItem";

export default function OtherProjects() {
  return (
    <SectionContainer>
      <SectionTitle>Other Side Projects</SectionTitle>
      <div className="flex flex-wrap">
        <OtherProjectItem
          title="Chicken-combat"
          githubURL="https://github.com/andyzhp234/Chicken-combat"
          demoURL="https://chicken-combat.netlify.app"
        />
        <OtherProjectItem
          title="Asteroid Dodge"
          githubURL="https://github.com/andyzhp234/Asteroid-dodge"
          demoURL="https://asteroid-dodge.netlify.app"
        />
        <OtherProjectItem
          title={"QR-Code Generator"}
          githubURL="https://github.com/andyzhp234/QR-Code-generator"
          demoURL="https://qr-code-generator-tool.netlify.app"
        />
      </div>
    </SectionContainer>
  );
}
