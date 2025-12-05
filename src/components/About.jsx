import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h2>About <span>Me</span></h2>
          <p>
            Hi! I'm <strong>Priyanshi Gangrade</strong>, a passionate MERN Stack Developer.  
            I love building scalable, user-friendly, and visually appealing web 
            applications. My focus is on writing clean, efficient code and 
            creating experiences that users enjoy.
          </p>
          <p>
            When I'm not coding, I enjoy exploring new technologies, improving my 
            problem-solving skills, and collaborating on exciting projects.
          </p>
          <a href="#contact" className="about-btn">Let's Connect</a>
        </div>

        <div className="about-image">
          <img src="About.jpg" alt="About Priyanshi" />
        </div>
      </div>
    </section>
  );
}

export default About;
