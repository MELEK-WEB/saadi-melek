import React from "react";

export default function Navbar({ setActiveButton, activeButton }) {

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <button
            className={`navbar-link ${
              activeButton === "About" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("About")}
            data-nav-link
          >
            About
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={`navbar-link ${
              activeButton === "resume" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("resume")}
            data-nav-link
          >
            Resume
          </button>
        </li>

        <li className="navbar-item">
          <button
            className={`navbar-link ${activeButton === "portfolio" ? "active" : ""}`}
            onClick={() => handleButtonClick("portfolio")}
          >
            Portfolio
          </button>
        </li>
        <li className="navbar-item">
          <button 
            className={`navbar-link ${
              activeButton === "contact" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("contact")}
          >
            Contact
          </button>
        </li>
        {/* <li className="navbar-item">
          <button
            className={`navbar-link ${
              activeButton === "blog" ? "active" : ""
            }`}
            onClick={() => handleButtonClick("blog")}
          >
               Participations
          </button>
        </li> */}

       
      </ul>
    </nav>
  );
}
