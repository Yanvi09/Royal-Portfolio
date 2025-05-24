import React, { useState } from "react";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);
  const validateForm = () => formData.name && validateEmail(formData.email) && formData.message.length > 10;

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage(""); // Reset the message

    // Simulating form submission
    setTimeout(() => {
      setSuccessMessage("Your request has been submitted. Octavian will respond shortly.");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" }); // Clear form after submission
    }, 2000); // Placeholder for API submission delay
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2 className="form-title">✨ Request an Audience with Octavian ✨</h2>

      <div className="input-group">
        <input
          type="text"
          name="name"
          placeholder="Your Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="contact-input"
        />
      </div>

      <div className="input-group">
        <input
          type="email"
          name="email"
          placeholder="Your Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="contact-input"
        />
      </div>

      <div className="input-group">
        <textarea
          name="message"
          placeholder="What would you like to discuss?"
          value={formData.message}
          onChange={handleChange}
          required
          className="contact-textarea"
        />
      </div>

      {successMessage && <div className="success-message">{successMessage}</div>}

      <button
        type="submit"
        className="contact-submit-btn"
        disabled={isSubmitting || !validateForm()}
      >
        {isSubmitting ? "Submitting..." : "Summon Octavian"}
      </button>
    </form>
  );
};

export default ContactForm;
