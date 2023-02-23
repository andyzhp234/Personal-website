import React from "react";
import "./css/index.css";
import Landing from "./sections/Landing";
import AboutMe from "./sections/AboutMe";
import Projects from "./sections/Projects";
import OtherProjects from "./sections/OtherProjects";
import Skills from "./sections/Skills";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import "aos/dist/aos.css";
import AOS from "aos";

function App() {
  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="my-0 mx-auto max-w-[1980px] font-Raleway">
      <Landing />
      <AboutMe />
      <Projects />
      <OtherProjects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
