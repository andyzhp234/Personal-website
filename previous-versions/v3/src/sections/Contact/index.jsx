import React from "react";
import ContactSocialItem from "./ContactSocialItem";
import Resume from "../../assets/Resume_Haopeng_Zeng.pdf";

export default function Contact() {
  return (
    <div className="flex flex-col bg-black px-6 py-16 text-white md:px-10 lg:flex-row lg:px-20 lg:py-40 xl:py-96">
      <div
        className="my-28 text-4xl md:mr-20 md:text-5xl md:font-medium lg:mt-0 lg:w-1/2 xl:text-7xl"
        data-aos="fade-up"
        data-aos-duration="500"
      >
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
        <div className="flex flex-col">
          <ContactSocialItem text={"Resume"} url={Resume} isDownload={true} />
          <ContactSocialItem
            text={"Github"}
            url="https://github.com/andyzhp234"
          />
          <ContactSocialItem
            text={"Linkedin"}
            url="https://www.linkedin.com/in/haopengzeng"
          />
        </div>
      </div>
    </div>
  );
}
