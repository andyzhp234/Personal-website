import SectionContainer from "../../components/SectionContainer";
import SectionTitle from "../../components/SectionTitle";
import Project from "../../components/Project";
import ImgStableStore from "../../assets/images/img-stable-store.jpg";
import ImgQuickChat from "../../assets/images/img-quick-chat.jpg";
import ImgTaskPilot from "../../assets/images/img-task-tracker.jpg";

export default function SoftwareProjects() {
  return (
    <div>
      <SectionContainer>
        <SectionTitle>Software Projects</SectionTitle>
        <div className="flex flex-col justify-center">
          <Project
            title="Stable"
            type="Full Stack - eCommerce"
            description="A MERN stack eCommerce furniture website, integrated with Stripe, was built using React, Redux, and Sass for the frontend, and Node.js, Express.js, AWS S3, and CloudFront CDN for the backend, with MongoDB as the database. The site features user and admin roles, including an admin dashboard for efficient webstore management."
            projectImg={ImgStableStore}
            demoURL="https://www.stable-store.com/"
            githubURL="https://github.com/andyzhp234/stable-e-commerce-web"
          />
          <Project
            title="Quick Chat"
            type="Full Stack - Realtime Communication"
            description="Quickchat, a full stack chat application built with React, Express, and Node.js, enables real-time text and video communication. Features include account creation, friend search and addition, and individual or group conversations, all supported by Socket.io and WebRTC."
            projectImg={ImgQuickChat}
            demoURL="https://quick-chat.app/"
            githubURL="https://github.com/andyzhp234/QuickChat"
          />
          <Project
            title="Task Tracker"
            type="Full Stack - Task Management App"
            description="Task Tracker is a simple and efficient task management app designed to help users stay organized and focused. With Task Tracker, users can create notes, tasks, chatting with AI Assistant, and much more, all in one place."
            projectImg={ImgTaskPilot}
            demoURL="https://task-tracker-tool.netlify.app/"
            githubURL="https://github.com/andyzhp234/task-management-app"
          />
        </div>
      </SectionContainer>
    </div>
  );
}
