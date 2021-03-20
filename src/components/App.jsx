import React, { useState, useEffect, useRef } from "react";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import Navigation from "./Navigation";

import { PortfolioProvider } from "../context/context";

import { aboutData, projectsData, contactData, sectionsData } from "../data/data";

function App() {
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [sections, setSections] = useState([]);

  const ref = useRef();

  useEffect(() => {
    setAbout({ ...aboutData });
    setProjects([ ...projectsData ]);
    setContact({ ...contactData });
    setSections([ ...sectionsData ]);
  }, []);

  return (
    <PortfolioProvider value={{ about, projects, contact, sections }}>
      <Navigation />
      <div ref={ref}>
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer appRef={ref} />
      </div>
    </PortfolioProvider>
  );
}

export default App;
