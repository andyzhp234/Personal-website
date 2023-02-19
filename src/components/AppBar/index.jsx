import React from "react";

export default function AppBar() {
  return (
    <div className="flex w-full items-center justify-between pt-20">
      <h1>LOGO HERE</h1>
      <div className="cursor-pointer rounded-full border border-black px-4 py-2 font-medium duration-200 hover:bg-black hover:text-white lg:px-6 lg:py-4 lg:text-xl">
        CONTACT
      </div>
    </div>
  );
}
