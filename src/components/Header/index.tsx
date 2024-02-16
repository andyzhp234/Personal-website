import { useLocation } from "react-router-dom";
import BrandIcon from "../../assets/icon-general/brand-logo.png";
import Resume from "../../assets/Resume_Haopeng_Zeng.pdf";

export default function Header({ scrollToTarget }: { scrollToTarget: any }) {
  const location = useLocation();
  const currentPath = location.pathname;

  const isHome = currentPath === "/";
  const isAbout = currentPath === "/about";

  return (
    <div className="mt-6 flex items-center justify-between font-Inter">
      <img
        className="h-16 w-16 lg:h-24 lg:w-24"
        src={BrandIcon}
        alt="brand-icon"
      />
      <div className="flex items-center justify-center gap-x-3 text-xs md:gap-x-7 md:text-base lg:gap-x-8 lg:text-xl">
        <a
          href="/"
          className={`${
            isHome ? "cursor-pointer font-semibold" : ""
          } hover-target relative cursor-pointer overflow-hidden border-2 border-transparent py-2`}
        >
          Work
        </a>
        <a
          href="/about"
          className={`${
            isAbout ? "cursor-pointer font-semibold" : ""
          } hover-target relative cursor-pointer overflow-hidden border-2 border-transparent py-2`}
        >
          About
        </a>
        <a
          href={Resume}
          className={`hover-target relative cursor-pointer overflow-hidden border-2 border-transparent py-2`}
          download={true}
        >
          Resume
        </a>
        <div
          className="round cursor-pointer rounded-full border border-black bg-white px-3 py-2 text-black transition-colors duration-300 hover:bg-black hover:text-white lg:px-4"
          onClick={() => scrollToTarget()}
        >
          Contact
        </div>
      </div>
    </div>
  );
}
