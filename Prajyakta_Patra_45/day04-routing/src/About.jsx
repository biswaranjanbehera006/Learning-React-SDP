function About() {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "50px",
        fontSize: "22px",
      }}
    >
      <h2 style={{ fontSize: "36px", marginBottom: "20px", color: "#4facfe" }}>
        ℹ️ About Page
      </h2>

      <p>
        This application demonstrates routing in React using
        <strong> react-router-dom</strong>.
      </p>

      <p>
        React Router allows navigation between pages without reloading
        the browser.
      </p>
    </div>
  );
}

export default About;
