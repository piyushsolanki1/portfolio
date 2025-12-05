import React from "react";
import "./Projects.css";

const projects = [
  {
    title: "PodVibe - Podcast Platform",
    desc: "A full-stack MERN podcast application where users can upload, stream, like, and bookmark podcasts.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://podvibe-frontend-6wi8.onrender.com", 
    img: "Podcast.png",
  },
  {
    title: "Ecommerce",
    desc: "A full-stack E-Shop application with JWT authentication, product listing with filters, and a persistent cart for a seamless shopping experience.",
    tech: ["React", "Nodejs","Express", "MongoDB"],
    link: "bright-crostata-095956.netlify.app", 
    img: "Ecommerce.png",
  },
  {
    title: "Shopping Cart",
    desc: "A  e-commerce site with , product filters, and shopping cart system.",
    tech: ["HTML", "CSS", "Javascript"],
    link: "https://priyagangrade.github.io/Ecommerce/",
    img: "Shoppingcart.png",
  },
  {
    title: "Portfolio Website",
    desc: "An interactive and responsive portfolio showcasing my skills and projects.",
    tech: ["React", "CSS"],
    link: "https://podvibe-frontend-6wi8.onrender.com",
    img: "Portfolio.png",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2>Projects</h2>
        <p className="projects-intro">
          Here are some of the projects I’ve built using MERN stack and other
          technologies.
        </p>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-img">
                <img src={project.img} alt={project.title} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tech">
                  {project.tech.map((t, i) => (
                    <span key={i} className="tech-tag">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="btn-glow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🚀 View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
