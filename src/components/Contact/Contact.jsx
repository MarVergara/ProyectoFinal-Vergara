import React, { useState } from "react";

export const Contact = () => {
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Minimum behavior for this delivery: simple confirmation
    alert(`Thanks, ${values.name || "there"}! We’ll get back to you at ${values.email || "your email"}.`);
    setValues({ name: "", email: "", message: "" });
  }

  return (
    <section style={{ padding: "1.5rem", maxWidth: 640, margin: "0 auto" }}>
      <h1 style={{ marginBottom: 8 }}>Contact</h1>
      <p style={{ marginBottom: 16 }}>
        Have a question about our flowers? Send us a message and we’ll reply soon.
      </p>

      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
        <label>
          <span style={{ display: "block", marginBottom: 4 }}>Name</span>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Your name"
            required
            style={{ width: "100%", padding: "8px 10px" }}
          />
        </label>

        <label>
          <span style={{ display: "block", marginBottom: 4 }}>Email</span>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="you@example.com"
            required
            style={{ width: "100%", padding: "8px 10px" }}
          />
        </label>

        <label>
          <span style={{ display: "block", marginBottom: 4 }}>Message</span>
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            placeholder="How can we help?"
            rows={5}
            style={{ width: "100%", padding: "8px 10px" }}
          />
        </label>

        <button type="submit" className="cta-button" style={{ justifySelf: "start" }}>
          Send
        </button>
      </form>

      <div style={{ marginTop: 24, color: "#555" }}>
        <p><strong>Email:</strong> hello@pmoflowershop.example</p>
        <p><strong>Phone:</strong> +351 012-3456</p>
        <p><strong>Hours:</strong> Mon–Fri, 9:00–18:00</p>
        <p><strong>Address:</strong> 123 Las Flores St, Córdoba, ARG</p>
      </div>
    </section>
  );
};
