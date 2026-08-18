import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { FaEnvelope, FaGithub, FaLinkedin, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useTheme } from "../contexts/ThemeContext"; // import hook

const Contact = () => {
  const form = useRef();
  const { isDark } = useTheme();  // 👈 get theme from context

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dpmenek", // Service ID
        "template_3pwa859", // Template ID
        form.current,
        "hgVWC22_ibi1W5Uqm" // Public Key
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        () => {
          alert("Failed to send. Please try again.");
        }
      );
  };

  return (
    <section
      className={`contact-section ${isDark ? "dark" : "light"}`} // ✅ works now
      id="contact"
    >
      {/* Intro text */}
      <div className="contact-intro">
        <h2>Get In Touch</h2>
        <p>
          I'm always interested in new opportunities and collaborations. Let's
          discuss how we can work together!
        </p>
      </div>

      <div className="contact-content">
        {/* Contact Info */}
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><FaMapMarkerAlt /> Khambakone, Byndoor-576219</p>
          <p><FaEnvelope /> ananyashetty82987@gmail.com</p>
          <p><FaPhone /> +91 8861955088</p>

          <h3>Social Profiles</h3>
          <div className="social-icons">
            <a href="mailto:ananyashetty82987@gmail.com"><FaEnvelope /></a>
            <a href="https://github.com/ananyaashettyy"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/ananyaashettyy"><FaLinkedin /></a>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-box">
          <h3>Send me a message</h3>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="user_name" placeholder="Name" required />
            <input type="email" name="user_email" placeholder="Email" required />
            <input type="text" name="subject" placeholder="Subject" required />
            <textarea name="message" placeholder="Message" rows="5" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
