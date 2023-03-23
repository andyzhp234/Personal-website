import React from "react";
import SocialNavItem from "../../components/SocialNavItem";
import Resume from "../../assets/Resume.pdf";

export default function Contact({ contactRef }: { contactRef: any }) {
  const [isTargetVisible, setIsTargetVisible] = React.useState(false);
  const [textColor, setTextColor] = React.useState("text-black");
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsTargetVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  React.useEffect(() => {
    if (isTargetVisible) {
      setTextColor("text-white");
      document.body.style.backgroundColor = "black"; // change background color
    } else {
      setTextColor("text-black");
      document.body.style.backgroundColor = "#fbfcf8"; // reset background color
    }
  }, [isTargetVisible]);

  return (
    <div
      className={`${textColor} flex flex-col px-6 pb-16 md:px-10 lg:flex-row lg:px-20 lg:pb-40 xl:pb-96`}
    >
      <div className="my-28 text-4xl md:mr-20 md:text-5xl md:font-medium lg:mt-0 lg:w-1/2 xl:text-7xl">
        I'M OPEN TO WORK.
      </div>
      <div className="flex flex-col lg:w-1/2 lg:justify-center">
        <div className="flex flex-col font-medium md:text-xl lg:text-2xl">
          <h1>Email</h1>
          <h1 className="underline-offset-4 hover:underline">
            haopeng.zeng234@gmail.com
          </h1>
        </div>
        <hr className="my-7" />
        <div className="flex flex-col" ref={contactRef}>
          <SocialNavItem text="Resume" url={Resume} isDownload={true} />
          <SocialNavItem text="Github" url="https://github.com/andyzhp234" />
          <SocialNavItem
            text="Linkedin"
            url="https://www.linkedin.com/in/haopengzeng"
          />
        </div>
      </div>
    </div>
  );
}
