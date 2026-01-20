import { useRef, useState } from "react";

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const successRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    const newErrors = {};

    if (!name) newErrors.name = "Name is required.";
    if (!email) newErrors.email = "Email is required.";
    if (!message) newErrors.message = "Message is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setSubmitted(false);
      return;
    }

    setErrors({});
    setSubmitted(true);

    // Move focus to success message (important for screen readers)
    setTimeout(() => {
      successRef.current?.focus();
    }, 0);

    form.reset();
  };

  return (
    <>
      <h1>Contact</h1>

      <p>
        This form demonstrates an accessible contact feature with proper labels,
        validation, keyboard support, ARIA live regions, and focus management.
      </p>

      {submitted && (
        <div
          ref={successRef}
          tabIndex="-1"
          role="status"
          aria-live="polite"
          style={{
            background: "#e6fffa",
            padding: "1rem",
            borderRadius: "6px",
            marginBottom: "1rem",
          }}
        >
          Your message has been sent successfully.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="name">Name</label>
          <br />
          <input id="name" name="name" type="text" />
          {errors.name && (
            <div role="alert" aria-live="assertive">
              {errors.name}
            </div>
          )}
        </div>

        {/* Email */}
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email">Email</label>
          <br />
          <input id="email" name="email" type="email" />
          {errors.email && (
            <div role="alert" aria-live="assertive">
              {errors.email}
            </div>
          )}
        </div>

        {/* Message */}
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="message">Message</label>
          <br />
          <textarea id="message" name="message" rows="4" />
          {errors.message && (
            <div role="alert" aria-live="assertive">
              {errors.message}
            </div>
          )}
        </div>

        <button type="submit">Send Message</button>
      </form>
    </>
  );
};

export default Contact;
