import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        {}
        <div className="contact-info">
          <h2>📬 Get In Touch</h2>
          <p>
            I’d love to connect with you! Whether you have a question,
            opportunity, or just want to say hi, feel free to reach out.
          </p>

          <ul>
            <li>📧 <a href="mailto:gangradepriyanshi1@gmail.com">gangradepriyanshi1@gmail.com</a></li>
            <li>📱 +91 7389178130</li>
            <li>🌍 Indore, India</li>
          </ul>

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/priyanshi-gangrade-477279243"
              target="_blank"
              rel="noopener noreferrer"
            >
              💼 LinkedIn
            </a>
            <a
              href="https://github.com/priyagangrade"
              target="_blank"
              rel="noopener noreferrer"
            >
              💻 GitHub
            </a>
            <a
              href="PriyanshiMERN.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
            >
              📄 Resume
            </a>
          </div>
        </div>

        {}
        <form className="contact-form">
          <h3>Send Me a Message ✨</h3>
          <div className="form-group">
            <input type="text" placeholder="Your Name" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Your Email" required />
          </div>
          <div className="form-group">
            <textarea rows="5" placeholder="Your Message" required></textarea>
          </div>
          <button type="submit" className="btn-submit">Send Message 🚀</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
