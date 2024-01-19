import React from "react";

export default function Footer() {
  const currentYear: number = new Date().getFullYear();
  return (
    <h1 className="w-full py-4 text-center text-xs sm:text-base" id="footer">
      Haopeng Zeng © {currentYear}. All rights reserved.
    </h1>
  );
}
