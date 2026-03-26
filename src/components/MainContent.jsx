import React, { useState } from "react";
import Navbar from "./Navbar";
import About from "./About";
import Services from "./Services";
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

export default function MainContent() {
  const [activeButton, setActiveButton] = useState("About");

  return (
    <div className="main-content">
      <Navbar setActiveButton={setActiveButton} activeButton={activeButton} />
      <article
        className={`about ${activeButton === "About" ? "active" : ""}`}
        data-page="about"
      >
        <About />
        <Services />
      </article>

      <article
        className={`resume ${activeButton === "resume" ? "active" : ""}`}
        data-page="resume"
      >
        <Resume />
      </article>

      <article
        className={`portfolio ${activeButton === "portfolio" ? "active" : ""}`}
        data-page="portfolio"
      >
        <Portfolio />
      </article>
      <article
        className={`contact ${activeButton === "contact" ? "active" : ""}`}
        data-page="contact"
      >
        <Contact />
      </article>

    </div>
  );
}
