import React from "react";
import "../index.css";

function Hero() {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>Hi, I'm <span>Priyanshi</span> 👩‍💻</h1>
        <h2>A Passionate MERN Stack Developer 🚀</h2>
        <p>
          I design and develop modern full-stack web applications that are fast,
          responsive, and user-friendly. Let’s build something amazing together!
        </p>
        <div className="hero-buttons">
          <button className="btn-primary" onClick={() => window.location.href="#projects"}>Explore Projects</button>
          <button className="btn-secondary" onClick={() => window.location.href="#contact"}>Contact Me</button>
        </div>
      </div>
      <div className="hero-image">
        <img src="/PriyanshiImage.png" alt="developer avatar" />
      </div>
    </section>
  );
}

export default Hero;
