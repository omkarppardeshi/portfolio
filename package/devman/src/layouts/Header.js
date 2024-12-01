import { useEffect, useState } from "react";
import { scrollSection, stickyNav } from "../utilits";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Header = () => {
  // State to manage theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickyNav);
    window.addEventListener("scroll", scrollSection);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", stickyNav);
      window.removeEventListener("scroll", scrollSection);
    };
  }, []);

  // Toggle between dark mode and light mode
  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      // Toggle the dark-mode class based on the new state
      document.body.classList.toggle("dark-mode", newMode);
      return newMode; // Correctly update the state
    });
  };

  return (
    <div className="devman_tm_header">
      <div className="container">
        <div className="header_inner">
          <div className="logo">
            <a className="light" href="http://localhost:3000/">
              <img src="img/logo/logo.png" alt="Light Logo" />
            </a>
            <a className="dark" href="#">
              <img src="img/logo/dark.png" alt="Dark Logo" />
            </a>
          </div>
          <div className="menu">
            <ul className="anchor_nav">
              <li className="current">
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
              {/* Conditionally render the dark/light mode button
              <li onClick={toggleTheme} aria-label="Toggle Theme">
                {isDarkMode ? (
                  <a href="http://localhost:3000/" aria-label="Switch to Light Mode">
                    <MdLightMode />
                  </a>
                ) : (
                  <a href="http://localhost:3000/index-dark" aria-label="Switch to Dark Mode">
                    <MdDarkMode />
                  </a>
                )}
              </li> */}
              <li className="download_cv">
                <a href="img/cv/Omkar-Pardeshi-Frontend-developer.pdf" download>
                  Download CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
