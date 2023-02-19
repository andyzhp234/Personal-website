import React from "react";
import "./css/index.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Landing from "./components/Landing";
import Projects from "./components/Projects";
import Divider from "./components/Divider";
import Contact from "./components/Contact";

function App() {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-gray-100 px-6 font-Raleway sm:px-10 lg:px-24">
      <Landing />
      <Divider />
      <Projects />
      <Divider />
      <Contact />
    </div>
  );
}

export default App;
