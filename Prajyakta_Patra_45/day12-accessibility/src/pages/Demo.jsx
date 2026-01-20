const Demo = () => {
  return (
    <>
      <h1>Accessibility Demo</h1>

      <p>
        This page highlights practical accessibility features implemented in the
        application. It is designed to be fully usable with assistive
        technologies such as screen readers and keyboard navigation.
      </p>

      <p>
        Try navigating this page using the Tab key to observe focus indicators
        and logical navigation order.
      </p>

      <h2>Demonstrated Features</h2>
      <ul>
        <li>Skip-to-content link for keyboard users</li>
        <li>ARIA live regions for dynamic messages</li>
        <li>Accessible form validation and feedback</li>
        <li>Focus management after user actions</li>
      </ul>
    </>
  );
};

export default Demo;
