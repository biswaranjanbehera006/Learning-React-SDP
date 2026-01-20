const Home = () => {
  return (
    <>
      <h1>Home</h1>

      <p>
        This application demonstrates how accessibility can be built into a
        modern React single-page application using best practices and semantic
        HTML.
      </p>

      <p>
        Users can navigate the entire site using only a keyboard. Visible focus
        indicators, logical tab order, and a skip-to-content link improve the
        experience for users of assistive technologies.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>Accessible navigation with keyboard support</li>
        <li>Screen reader–friendly routing</li>
        <li>Visible focus styles for interactive elements</li>
        <li>Semantic HTML structure</li>
      </ul>
    </>
  );
};

export default Home;
