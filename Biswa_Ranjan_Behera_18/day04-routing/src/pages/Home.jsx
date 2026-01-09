export default function Home() {
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
          maxWidth: "400px",
          padding: "25px",
          textAlign: "center",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }}
      >
        <h1>Welcome to Our App 🚀</h1>
        <p style={{ color: "#555", marginTop: "10px" }}>
          This is a simple React application created to learn routing and
          navigation using React Router.
        </p>
        <p style={{ marginTop: "10px", fontSize: "14px" }}>
          Navigate using the menu above to explore different pages.
        </p>
      </div>
    </div>
  );
}
