function Home() {
  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h1 style={styles.heading}>Welcome to Our Website 👋</h1>
        <p style={styles.text}>
          We're glad to have you here. Explore the site and learn something new today!
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
    width: "400px",
    borderRadius: "10px",
    boxShadow: "0px 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  heading: {
    marginBottom: "10px",
    color: "#333"
  },
  text: {
    color: "#555",
    fontSize: "16px"
  }
};

export default Home;
