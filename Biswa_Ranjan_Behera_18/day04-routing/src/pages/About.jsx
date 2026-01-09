export default function About() {
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
          maxWidth: "420px",
          padding: "25px",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>About Us</h2>
        <p style={{ color: "#555", marginTop: "10px" }}>
          This project is built using React to understand how routing works in a
          single-page application.
        </p>
        <p style={{ color: "#555", marginTop: "10px" }}>
          React Router allows smooth navigation between pages without reloading
          the browser.
        </p>
        <p style={{ marginTop: "10px", fontSize: "14px" }}>
          This structure is commonly used in real-world MERN projects.
        </p>
      </div>
    </div>
  );
}
