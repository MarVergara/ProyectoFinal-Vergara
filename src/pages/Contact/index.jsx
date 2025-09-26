import React, { useState } from "react";
import "./contact.css";

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert(`Thanks, ${values.name || "there"}! We’ll get back to you at ${values.email || "your email"}.`);
    setValues({ name: "", email: "", message: "" });
  }

  return (
    <section className="contact">
      <h1 className="contact-title">Contact</h1>
      <p className="contact-lead">
        Have a question about our flowers? Send us a message and we’ll reply soon.
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <label>
          <span>Name</span>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            className="contact-input"
          />
        </label>

        <label>
          <span>Email</span>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            className="contact-input"
          />
        </label>

        <label>
          <span>Message</span>
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            placeholder="How can we help?"
            rows={5}
            className="contact-textarea"
          />
        </label>

        <button type="submit" className="cta-button contact-submit">
          Send
        </button>
      </form>

      <div className="contact-info">
        <p><strong>Email:</strong> hello@pmoflowershop.example</p>
        <p><strong>Phone:</strong> +351 012-3456</p>
        <p><strong>Hours:</strong> Mon–Fri, 9:00–18:00</p>
        <p><strong>Address:</strong> 123 Las Flores St, Córdoba, ARG</p>
      </div>
    </section>
  );
}
