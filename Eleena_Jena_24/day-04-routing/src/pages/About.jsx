function About() {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.heading}>About Us</h1>
        <p style={styles.text}>
          This application is built using React to demonstrate routing,
          navigation, and component-based design. It is simple, fast,
          and beginner-friendly.
        </p>
        <p style={styles.text}>
          Our goal is to help users understand how modern web applications
          work using clean and structured code.
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px"
  },
  box: {
    backgroundColor: "#ffffff",
    padding: "30px",
    width: "450px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  heading: {
    marginBottom: "15px",
    color: "#333"
  },
  text: {
    color: "#555",
    fontSize: "16px",
    lineHeight: "1.5"
  }
};

export default About;
