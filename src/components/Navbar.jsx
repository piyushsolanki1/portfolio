import React from "react";
import "../index.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Priyanshi<span>Portfolio</span></div>
      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li>
  <a href="#experience">Experience</a>
</li>
<li>
  <a href="#education">Education</a>
</li>
<li>
  <a href="#contact" className="hire-btn">Hire Me</a>
</li>

      </ul>
    </nav>
  );
}

export default Navbar;


