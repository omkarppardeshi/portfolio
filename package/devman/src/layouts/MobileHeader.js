import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const MobileHeader = () => {
  const [toggle, setToggle] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Toggle between dark mode and light mode
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      // Toggle the dark-mode class based on the upcoming state change
      document.body.classList.toggle("dark-mode", !prevMode);
      return !prevMode; // Correctly update the state
    });
  };

  return (
    <div className="devman_tm_mobile_menu">
      <div className="mobile_menu_inner">
        <div className="mobile_in">
          <div className="logo">
            {/* Conditional rendering of the logo based on theme */}
            <a className="light" href="/">
              <img src={isDarkMode ? "img/logo/dark.png" : "img/logo/logo.png"} alt="Logo" />
            </a>
          </div>
          <div className="trigger">
            <div
              className={`hamburger hamburger--slider ${toggle ? "is-active" : ""}`}
            >
              <div className="hamburger-box" onClick={() => setToggle(!toggle)}>
                <div className="hamburger-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="dropdown"
        style={{
          display: toggle ? "block" : "none",
        }}
      >
        <div className="dropdown_inner">
          <ul className="anchor_nav">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a href="#blog">Blog</a>
            </li>
            {/* Conditionally render the dark/light mode button */}
            <li onClick={toggleTheme}>
              <a href="#" aria-label="Switch Theme">
                {isDarkMode ? <MdLightMode /> : <MdDarkMode />}
              </a>
            </li>
            <li className="download_cv">
              <a href="img/cv/1.jpg" download>
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
