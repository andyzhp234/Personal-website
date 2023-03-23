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
            description="The online eCommerce platform for furniture has been built using the MERN stack and integrates with Stripe as a payment gateway. It has separate user and admin dashboards, with admin access required to manage orders, users, and products, as well as perform maintenance tasks. Normal users can use the platform to purchase furniture easily via Stripe."
            projectImg={ImgStableStore}
            demoURL="https://www.stable-store.com/"
            githubURL="https://github.com/andyzhp234/stable-e-commerce-web"
          />
          <Project
            title="Quick Chat"
            type="Realtime Communication"
            description="A web-based real time chat application that allows users to communicate in real-time using text messaging and video chatting. The website was built using Node.js and Socket.io for real-time messaging and WebRTC for video chatting."
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
