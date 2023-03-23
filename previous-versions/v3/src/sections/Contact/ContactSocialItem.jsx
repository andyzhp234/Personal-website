import React from "react";
import IconTopRightArrow from "../../assets/icon-general/icon-top-right-arrow.png";

export default function ContactSocialItem({ url, text, isDownload = false }) {
  return (
    <div className="mb-3 flex items-center md:text-xl lg:text-2xl">
      {isDownload ? (
        <a
          className="cursor-pointer font-medium underline-offset-4 hover:underline"
          href={url}
          download="Haopeng_Zeng_Resume"
        >
          {text}
        </a>
      ) : (
        <a
          className="cursor-pointer font-medium underline-offset-4 hover:underline"
          href={url}
        >
          {text}
        </a>
      )}
      <img
        className="ml-2 h-5 w-5"
        src={IconTopRightArrow}
        alt="top-right-arrow"
      />
    </div>
  );
}
