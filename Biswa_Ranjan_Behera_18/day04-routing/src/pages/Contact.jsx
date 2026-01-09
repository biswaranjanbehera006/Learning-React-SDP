export default function Contact() {
  return (
    <div
      style={{
        minHeight: "80vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "380px",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "15px" }}>
          Contact Us
        </h2>

        <input
          type="text"
          placeholder="Your Name"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <input
          type="email"
          placeholder="Your Email"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
          }}
        />

        <textarea
          placeholder="Your Message"
          rows="4"
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "15px",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#2563eb",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Send Message
        </button>

        <p style={{ fontSize: "13px", marginTop: "10px", textAlign: "center" }}>
          We will get back to you as soon as possible.
        </p>
      </div>
    </div>
  );
}
