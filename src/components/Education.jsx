import React from "react";
import { motion } from "framer-motion";
import "./Education.css";

function Education() {
  const educationData = [
    {
      degree: "Bachelor of Technology (B.Tech) - Information Technology",
      year: "2021 - 2025",
      place: "Jawaharlal Institute of Technology Borawan Affilated to RGPV University, Bhopal",
    },
    {
      degree: "Higher Secondary (12th)",
      year: "2020 - 2021",
      place: "Vyas Public Higher Secondary School Bhikangoan Distt. Khargone(MP Board)",
    },
    {
      degree: "High School (10th)",
      year: "2018 - 2019",
      place: "St. Mary's Convent School Bhikangoan Distt. Khargone(MP Board) ",
    },
  ];

  return (
    <section id="education" className="education-section">
      <div className="container">
        <h2 className="section-title">🎓 Education</h2>

        <div className="timeline">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{edu.degree}</h3>
                <span className="timeline-date">{edu.year}</span>
                <p>{edu.place}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;




