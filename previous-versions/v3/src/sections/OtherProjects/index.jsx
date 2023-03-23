import React from "react";
import Title from "../../components/Title";
import OtherProjectItem from "./OtherProjectItem";

export default function OtherProjects() {
  return (
    <div className="lg:py-22 px-6 pt-10 pb-20 md:px-10 xl:px-52">
      <Title>Other Side Projects</Title>
      <div className="flex flex-wrap">
        <OtherProjectItem
          title={"Into The Space"}
          githubURL="https://github.com/andyzhp234/Into-the-space"
          demoURL="https://andyzhp234.github.io/Into-the-space"
        />
        <OtherProjectItem
          title={"QR-Code Generator"}
          githubURL="https://github.com/andyzhp234/QR-Code-generator"
          demoURL="qr-code-generator-tool.netlify.app"
        />
      </div>
    </div>
  );
}
