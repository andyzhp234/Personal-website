import Header from "./sections/Header";
import Landing from "./sections/Landing";
import About from "./sections/About";
import Projects from "./sections/Projects";
import OtherProjects from "./sections/OtherProjects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import React from "react";

function App() {
  const projectRef = React.useRef<HTMLDivElement>(null);
  const contactRef = React.useRef<HTMLDivElement>(null);

  const scrollToTarget = (location: string) => {
    let target;
    if (location === "project") {
      target = projectRef.current;
    } else {
      target = contactRef.current;
    }

    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col font-Raleway">
      <Header scrollToTarget={scrollToTarget} />
      <Landing scrollToTarget={scrollToTarget} />
      <About />
      <Projects projectRef={projectRef} />
      <OtherProjects />
      <Skills />
      <Contact contactRef={contactRef} />
      <Footer />
    </div>
  );
}

export default App;
