import React from "react";
import Header from "./Header";
import SelfIntro from "./SelfIntro";
import LandingNav from "./LandingNav";

export default function Landing() {
  return (
    <div className="px-6 md:px-10 lg:px-20 ">
      <Header />
      <div className="py-44 sm:px-10 lg:px-36">
        <SelfIntro />
        <LandingNav />
      </div>
    </div>
  );
}
