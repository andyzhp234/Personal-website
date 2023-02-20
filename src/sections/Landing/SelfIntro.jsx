import React from "react";
import FadeUpItem from "../../components/FadeUpItem";

export default function SelfIntro() {
  return (
    <div className="font-Playfair text-3xl font-medium sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
      <h1>
        <FadeUpItem duration="600">Hi,</FadeUpItem>
      </h1>
      <h1>
        <FadeUpItem duration="600">{"I'm\u00A0"}</FadeUpItem>
        <FadeUpItem duration="800">{"Haopeng"}</FadeUpItem>
      </h1>
      <h1>
        <FadeUpItem duration="800">{"A\u00A0"}</FadeUpItem>
        <FadeUpItem duration="1000">{"Full-Stack\u00A0"}</FadeUpItem>
        <FadeUpItem duration="1200">{"Software\u00A0"}</FadeUpItem>
        <FadeUpItem duration="1400">{"Developer"}</FadeUpItem>
      </h1>
    </div>
  );
}
