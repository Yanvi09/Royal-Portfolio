// components/ContactForm.jsx
import React, { useState } from "react";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your request has been submitted. Octavian will respond soon."); // Placeholder
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2>Request an Audience</h2>
      <input type="text" name="name" placeholder="Your Full Name" required onChange={handleChange} />
      <input type="email" name="email" placeholder="Your Email Address" required onChange={handleChange} />
      <textarea name="message" placeholder="What would you like to discuss?" required onChange={handleChange}></textarea>
      <button type="submit">Summon Octavian</button>
    </form>
  );
};

export default ContactForm;
