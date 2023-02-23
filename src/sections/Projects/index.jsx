import React from "react";
import Project from "./Project";
import Title from "../../components/Title";
// import ImgStableStore from "../../assets/images/img-stable-store.png";
// import ImgQuickChat from "../../assets/images/img-quick-chat.png";
// import ImgTaskPilot from "../../assets/images/img-taskpilot.png";

export default function Projects() {
  return (
    <div className="lg:py-22 px-6 pt-10 pb-20 md:px-10 xl:px-52">
      <Title>Projects</Title>
      <div className="flex flex-col justify-center">
        {/* <Project
          title={"Stable"}
          type={"E-Commerce"}
          description={
            "An online eCommerce for furniture built using MERN stack integrated with Stripe as payment gateway. This web application supports both user and admin dashboard to manage orders, users and products"
          }
          projectImg={ImgStableStore}
          githubURL="https://github.com/andyzhp234/stable-e-commerce-web"
          demoURL="https://www.stable-store.com/"
        />
        <Project
          title={"Quick Chat"}
          type={"Realtime Communication"}
          description={
            "A web-based real time chat application that allows users to communicate in real-time using text messaging and video chatting. The app was built using Node.js and socket.io for real-time messaging and WebRTC for video chatting."
          }
          projectImg={ImgQuickChat}
          githubURL="https://github.com/andyzhp234/QuickChat"
          demoURL="https://quick-chat.app/"
        />
        <Project
          title={"TaskPilot"}
          type={"Task Management"}
          description={
            "App designed to help individuals stay organized and productive. The app allows users to create, organize, prioritize tasks, set due dates, and track progress"
          }
          projectImg={ImgTaskPilot}
          githubURL="https://github.com/andyzhp234/task-management-app"
          demoURL=""
        /> */}
      </div>
    </div>
  );
}
