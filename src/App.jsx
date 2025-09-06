import "./App.css";
import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Animation from "./components/Animation";
import Cursor from "./components/Cursor";
import ScrollIndicator from "./components/Scroll_indicator";
import UseActiveSection from "./components/UseActiveSection";
import Offers from "./components/Offers";
import SmoothScroll from "./components/SmoothScroll";
import BackToTop from "./components/BackToTop";
function App() {
  const sectionIds = ["home", "about", "education", "experience", "offers" ,"projects", "skills", "certificates", "contact"];
  // 3. Call the hook to get the ID of the currently active section
  const activeSection = UseActiveSection(sectionIds);
  return (
    // This main div will be the container for our entire page
    <div className="bg-[#111111] text-gray-300 cursor-none">
      <SmoothScroll />
      <ScrollIndicator />
      <Cursor />
      <Header activeSection={activeSection} />
      <main>
        <div id="home">
          <Hero />
        </div>
        <Animation id="about">
          <About />
        </Animation>
        <Animation id="education">
          <Education />
        </Animation>
        <Animation id="experience">
          <Experience />
        </Animation>
        <Animation id="offers">
          <Offers />
        </Animation>
        <Animation id="projects">
          <Projects />
        </Animation>
        <Animation id="skills">
          <Skills />
        </Animation>
        <Animation id="certificates">
          <Certificates />
        </Animation>
        <Animation id="contact">
          <Contact />
        </Animation>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
