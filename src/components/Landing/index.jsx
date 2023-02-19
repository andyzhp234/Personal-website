import React from "react";
import AppBar from "../Appbar";
import SelfIntro from "./SelfIntro";
import LandingNav from "./LandingNav";

export default function Landing() {
  return (
    <div className="w-full">
      <AppBar />
      <div className="py-20 md:py-32 lg:py-40">
        <SelfIntro />
        <LandingNav />
      </div>
    </div>
  );
}
