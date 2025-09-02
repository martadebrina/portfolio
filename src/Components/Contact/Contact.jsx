import React, { useState } from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Contact() {
  const [status, setStatus] = useState({ loading: false, msg: "" });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status.loading) return;
    setStatus({ loading: true, msg: "" });

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", "5555d12f-cf89-44dc-8a98-bc99dae8180e");

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
    }).then((r) => r.json());

    if (res.success) {
      setStatus({ loading: false, msg: "Thanks! Your message has been sent." });
      e.currentTarget.reset();
    } else {
      setStatus({ loading: false, msg: "Oops, something went wrong. Try again." });
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-card">
        <header className="contact-header">
          <h2>Let’s Connect!</h2>
          <p className="subtitle">Ideas, questions, memes — I accept them all 🤩</p>

          <div className="contact-info">
            <a href="mailto:martatogatorop384@gmail.com" className="info-item">
              <MdEmail className="icon" />
              martatogatorop384@gmail.com
            </a>
            <div className="info-item">
              <FaLocationDot className="icon" />
              Vancouver, BC
            </div>
          </div>
        </header>

        <form onSubmit={onSubmit} className="contact-form" noValidate>
          <label className="field">
            <span>Name</span>
            <input name="name" type="text" placeholder="Your name" required />
          </label>

          <label className="field">
            <span>Email</span>
            <input name="email" type="email" placeholder="you@example.com" required />
          </label>

          <label className="field">
            <span>Message</span>
            <textarea name="message" rows="6" placeholder="Enter your message" required />
          </label>

          <button type="submit" className="btn-glass" disabled={status.loading}>
            {status.loading ? "Sending…" : "Submit"}
          </button>

          <p className={`status ${status.msg ? "show" : ""}`} aria-live="polite">
            {status.msg}
          </p>
        </form>
      </div>
    </section>
  );
}
