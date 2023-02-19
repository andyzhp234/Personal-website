import React from "react";
import IconLogo from "../../assets/icon-logo.png";

export default function AppBar() {
  return (
    <div className="flex w-full items-center justify-between pt-20">
      <img className=" aspect-square w-20 lg:w-28" src={IconLogo} alt="logo" />
      <div className="cursor-pointer rounded-full border border-black px-4 py-2 font-medium duration-200 hover:bg-black hover:text-white lg:px-6 lg:py-4 lg:text-xl">
        CONTACT
      </div>
    </div>
  );
}
