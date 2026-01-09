function Contact() {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.heading}>Contact Us</h1>
        <p style={styles.text}>
          Have questions or feedback? We'd love to hear from you.
        </p>
        <p style={styles.text}>
          📧 Email: support@example.com
        </p>
        <p style={styles.text}>
          📞 Phone: +91 98765 43210
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

export default Contact;
