function Card() {
  return (
    <div className="card fade-in">
      <h2>🚀 CI/CD Demo</h2>

      <p>
        This app is built and deployed using{" "}
        <strong>GitHub Actions</strong>.
      </p>

      <div className="badges">
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="badge ci"
        >
          🌼 CI: Build & Test
        </a>

        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="badge cd"
        >
          🚀 CD: Auto Deploy
        </a>
      </div>
    </div>
  );
}

export default Card;
