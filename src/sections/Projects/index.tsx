import SectionContainer from "../../components/SectionContainer";
import SectionTitle from "../../components/SectionTitle";
import Project from "../../components/Project";
import ImgStableStore from "../../assets/images/img-stable-store.jpg";
import ImgQuickChat from "../../assets/images/img-quick-chat.jpg";
import ImgTaskPilot from "../../assets/images/img-task-tracker.jpg";

export default function Projects({ projectRef }: { projectRef: any }) {
  return (
    <div ref={projectRef}>
      <SectionContainer>
        <SectionTitle>Projects</SectionTitle>
        <div className="flex flex-col justify-center">
          <Project
            title="Stable"
            type="eCommerce"
            description="A full stack online eCommerce website for furniture using the MERN stack with Stripe integration. The frontend was developed using React and Redux, and styled with Sass. The backend was built using Node.js and Express.js, with AWS S3 and AWS CloudFront CDN for static content storage and delivery. The database used was MongoDB. Both user and admin roles are implemented. Admin users are granted access to a specialized dashboard designed to facilitate efficient management and maintenance of the webstore."
            projectImg={ImgStableStore}
            demoURL="https://www.stable-store.com/"
            githubURL="https://github.com/andyzhp234/stable-e-commerce-web"
          />
          <Project
            title="Quick Chat"
            type="Realtime Communication"
            description="Quickchat is a full stack chat application that allows users to communicate through both text and video chat in real-time. With Quickchat, users can easily create accounts, find and add friends, and start conversations with individuals or groups. The frontend is built using React, while the backend is built using Express and Node.js. Socket.io and WebRTC are used to establish real-time text and video communications."
            projectImg={ImgQuickChat}
            demoURL="https://quick-chat.app/"
            githubURL="https://github.com/andyzhp234/QuickChat"
          />
          <Project
            title="Task Tracker"
            type="Task Management App"
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
