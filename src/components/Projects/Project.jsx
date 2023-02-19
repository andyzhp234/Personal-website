import React from "react";

export default function Project() {
  return (
    <div className="mb-10 flex h-35rem flex-col border border-black md:flex-row">
      <div className="flex w-full border">
        <div className="p-4">01</div>
        <div>
          <h1>Project Name</h1>
          <h1>Project Description</h1>
          <h1>Project skills</h1>
        </div>
      </div>
      <div className="w-full flex-1 border"></div>
    </div>
  );
}
