import React from "react";
import Resume from "../../assets/resume.pdf";

type NavigationItemProps = {
  children: React.ReactNode;
  isDownload?: boolean;
  onClick?: () => void;
};

export default function NavigationItem({
  children,
  isDownload = false,
  onClick,
}: NavigationItemProps) {
  if (isDownload) {
    return (
      <a
        href={Resume}
        className="ml-5 cursor-pointer text-xs font-medium transition duration-150 ease-in-out hover:translate-y-1 sm:text-sm md:text-base xl:ml-10 xl:text-xl"
        onClick={onClick}
        download="Haopeng_Zeng_Resume"
      >
        {children}
      </a>
    );
  } else {
    return (
      <div
        className="ml-5 cursor-pointer text-xs font-medium transition duration-150 ease-in-out hover:translate-y-1 sm:text-sm md:text-base xl:ml-10 xl:text-xl"
        onClick={onClick}
      >
        {children}
      </div>
    );
  }
}
