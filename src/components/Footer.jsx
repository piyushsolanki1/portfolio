import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        
        {/* Brand Section */}
        <div className="footer-brand">
          <h2>Priyanshi Gangrade</h2>
          <p>Crafting Code ✦ Creating Impact</p>
        </div>

        {/* Quick Links */}
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#education">Education</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Social Icons */}
        <div className="footer-social">
          <a href="https://github.com/priyagangrade" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/priyanshi-gangrade-477279243?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="gangradepriyanshi1@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        {/* Bottom Note */}
        <p className="footer-copy">© 2025 Priyanshi Gangrade | All Rights Reserved</p>
      </div>
    </footer>
  );
}




