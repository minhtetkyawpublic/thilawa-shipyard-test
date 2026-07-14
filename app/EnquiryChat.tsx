"use client";

import { FormEvent, useState } from "react";

const enquiryTypes = [
  "Dry Dock Availability",
  "Repair Estimate",
  "New Construction",
  "Technical Documents / RFQ",
];

export default function EnquiryChat() {
  const [open, setOpen] = useState(false);
  const [type, setType] = useState(enquiryTypes[0]);
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "").trim();
    const company = String(form.get("company") || "").trim();
    const email = String(form.get("email") || "").trim();
    const vessel = String(form.get("vessel") || "").trim();
    const message = String(form.get("message") || "").trim();

    if (!name || !email || !message) {
      setStatus("Please add your name, email, and enquiry.");
      return;
    }

    const subject = encodeURIComponent(`Website enquiry - ${type}`);
    const body = encodeURIComponent(
      [
        `Enquiry type: ${type}`,
        `Name: ${name}`,
        `Company: ${company || "-"}`,
        `Email: ${email}`,
        `Vessel type: ${vessel || "-"}`,
        "",
        "Message:",
        message,
      ].join("\n")
    );

    setStatus("Opening your email app with the enquiry prepared.");
    window.location.href = `mailto:commercial@thilawashipyard.com?subject=${subject}&body=${body}`;
  }

  return (
    <div className="enquiry-chat">
      <button
        className={`chat-toggle ${open ? "is-open" : ""}`}
        type="button"
        aria-expanded={open}
        aria-controls="enquiryChatPanel"
        onClick={() => setOpen((value) => !value)}
      >
        <i className={`fa-solid ${open ? "fa-xmark" : "fa-comment-dots"}`} aria-hidden="true" />
        <span>{open ? "Close" : "Enquiry"}</span>
      </button>

      <section id="enquiryChatPanel" className={`chat-card ${open ? "is-open" : ""}`} aria-hidden={!open}>
        <div className="chat-card-head">
          <div>
            <strong>Quick Enquiry</strong>
            <p>Send a small question to our commercial team.</p>
          </div>
        </div>

        <div className="chat-options" aria-label="Enquiry type">
          {enquiryTypes.map((item) => (
            <button
              key={item}
              type="button"
              className={item === type ? "active" : ""}
              onClick={() => setType(item)}
            >
              {item}
            </button>
          ))}
        </div>

        <form className="chat-enquiry-form" onSubmit={handleSubmit}>
          <input name="name" type="text" placeholder="Name" />
          <input name="company" type="text" placeholder="Company" />
          <input name="email" type="email" placeholder="Email" />
          <input name="vessel" type="text" placeholder="Vessel type" />
          <textarea name="message" rows={4} placeholder="How can we help?" />
          <button className="btn btn-primary" type="submit">Prepare Email</button>
          <p aria-live="polite">{status}</p>
        </form>
      </section>
    </div>
  );
}
