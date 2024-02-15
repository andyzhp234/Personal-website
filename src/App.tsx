import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

function App() {
  const contactRef = React.useRef<HTMLDivElement>(null);

  const scrollToTarget = () => {
    let target = contactRef.current;
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex flex-col px-5 font-Raleway sm:px-10 md:px-10 lg:px-32 xl:px-32 2xl:px-80">
      <BrowserRouter>
        <Header scrollToTarget={scrollToTarget} />
        <Routes>
          <Route path="/" element={<Home scrollToTarget={scrollToTarget} />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Contact contactRef={contactRef} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
