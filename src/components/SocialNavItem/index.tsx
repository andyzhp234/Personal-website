import IconTopRightArrow from "../../assets/icon-general/icon-top-right-arrow.png";

type SocialNavItemProp = {
  text: string;
  url: string;
  isDownload?: boolean;
};

export default function SocialNavItem({
  text,
  url,
  isDownload = false,
}: SocialNavItemProp) {
  return (
    <div className="mb-3 flex items-center md:text-xl lg:text-2xl">
      <a
        href={url}
        className="cursor-pointer font-medium underline-offset-4 hover:underline"
        download={isDownload ? "Haopeng_Zeng_Resume" : undefined}
      >
        {text}
      </a>

      <img
        className="ml-2 h-5 w-5"
        src={IconTopRightArrow}
        alt="top-right-arrow"
      />
    </div>
  );
}
