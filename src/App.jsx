import React from "react";
import "./css/index.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Divider from "./components/Divider";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";

function App() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="my-0 mx-auto max-w-[1980px] px-6 font-Raleway sm:px-10 lg:px-24">
      <Landing />
      <Divider />
      <AboutMe />
      <Divider />
      {/* <Projects />
      <Divider /> */}
      <Contact />
    </div>
  );
}

export default App;
