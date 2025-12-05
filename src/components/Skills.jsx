import React from "react";
import "./Skills.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiMysql } from "react-icons/si";

const skillsRow1 = [
  {
    name: "HTML",
    icon: <FaHtml5 color="#e34c26" />,
    desc: "Crafting the structure of modern websites.",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt color="#264de4" />,
    desc: "Designing responsive and elegant UI layouts.",
  },
  {
    name: "JavaScript",
    icon: <FaJs color="#f7df1e" />,
    desc: "Making websites interactive and dynamic.",
  },
  {
    name: "React",
    icon: <FaReact color="#61dbfb" />,
    desc: "Building fast, scalable user interfaces.",
  },
];

const skillsRow2 = [
  {
    name: "Node.js",
    icon: <FaNodeJs color="#3c873a" />,
    desc: "Server-side development with JavaScript.",
  },
  {
    name: "Express.js",
    icon: <SiExpress color="#888" />,
    desc: "Simplifying backend API development.",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb color="#4db33d" />,
    desc: "NoSQL database for scalable apps.",
  },
  {
    name: "MySQL",
    icon: <SiMysql color="#34bad1ff" />,
    desc: "Exploring and learning new technologies.",
  },
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2>Skills</h2>
        <p className="skills-intro">
          These are the technologies I use to build scalable and modern web
          applications.
        </p>

        <div className="skills-row">
          {skillsRow1.map((skill, index) => (
            <div key={index} className="skill-card">
              <span className="skill-icon">{skill.icon}</span>
              <h3>{skill.name}</h3>
              <p className="skill-desc">{skill.desc}</p>
            </div>
          ))}
        </div>

        <div className="skills-row">
          {skillsRow2.map((skill, index) => (
            <div key={index} className="skill-card">
              <span className="skill-icon">{skill.icon}</span>
              <h3>{skill.name}</h3>
              <p className="skill-desc">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;

