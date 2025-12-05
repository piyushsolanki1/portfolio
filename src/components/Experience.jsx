import React from "react";
import { motion } from "framer-motion";
import "./Experience.css";

function Experience() {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <h2 className="section-title">💼 Experience</h2>

                <motion.div
                    className="exp-card-glass"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    {/* Logo */}
                    <div className="exp-logo-box">
                        <img
                            src="logo1.png"
                            alt="Infobeans Logo"
                            style={{ width: "120px", height: "auto" }}
                        />
                    </div>

                    {/* Experience Details */}
                    <div className="exp-details">
                        <h3>Software Engineer Trainee</h3>
                        <span className="company">Infobeans Foundation, Indore </span>
                        <span className="year">August 2024 - 2025 (1 Year)</span>

                        <p>
                            Successfully completed the{" "}
                            <strong>Information Technology Excellence Programme Cum Internship</strong>{" "}
                            organized by <strong>InfoBeans Technologies</strong>. Gained expertise in the{" "}
                            <span className="highlight">
                                MERN Stack (MongoDB, Express.js, React.js, Node.js)
                            </span>{" "}
                            while enhancing <strong>soft skills</strong>,{" "}
                            <strong>aptitude</strong>, <strong>reasoning</strong>, and{" "}
                            <strong>professional communication</strong>.
                        </p>

                        <p>
                            Took on the role of <strong>Team Leader</strong>, guiding peers,
                            driving collaboration, and ensuring successful project delivery.
                            Alongside technical growth, developed strong{" "}
                            <strong>presentation and public speaking skills</strong> by
                            conducting impactful sessions on topics like{" "}
                            <em>Bhagavad Gita</em> and <em>Mahakumbh 2025</em>. My{" "}
                            <strong>Bhagavad Gita</strong> presentation received{" "}
                            <span className="highlight">special recognition</span>, further
                            boosting my confidence as a communicator.
                        </p>

                        {/* Highlights */}
                        <div className="experience-highlights">
                            <motion.div
                                className="highlight-card"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                ⚡ Built and deployed full-stack applications with secure
                                authentication and REST APIs.
                            </motion.div>

                            <motion.div
                                className="highlight-card"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                🤝 Led a team as <strong>Team Leader</strong>, ensuring
                                collaboration and project success.
                            </motion.div>

                            <motion.div
                                className="highlight-card"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                🚀 Enhanced <strong>problem-solving</strong>,{" "}
                                <strong>aptitude</strong>, and <strong>reasoning</strong>{" "}
                                through real-world challenges.
                            </motion.div>

                            <motion.div
                                className="highlight-card"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                🎤 Delivered impactful{" "}
                                <strong>presentations & public speaking sessions</strong>{" "}
                                on cultural and technical topics.
                            </motion.div>

                            <motion.div
                                className="highlight-card"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                🏆 Received{" "}
                                <strong>special appreciation</strong> for the{" "}
                                <em>Bhagavad Gita</em> presentation.
                            </motion.div>

                            <motion.div
                                className="highlight-card"
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                🌐 Balanced{" "}
                                <strong>technical expertise</strong> with{" "}
                                <strong>leadership & communication</strong> for holistic
                                growth.
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default Experience;







