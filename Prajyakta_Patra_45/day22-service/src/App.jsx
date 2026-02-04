import { useState, useEffect } from "react";

const OFFLINE_QUEUE_KEY = "offlineQueue";

function App() {
  const [count, setCount] = useState(
    () => JSON.parse(localStorage.getItem("count")) || 0
  );
  const [input, setInput] = useState("");

  // Persist count to localStorage
  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  // Add to offline queue if offline
  const submitData = async () => {
    const request = {
      url: "/api/submit",
      options: {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input }),
      },
    };

    if (!navigator.onLine) {
      const queue = JSON.parse(localStorage.getItem(OFFLINE_QUEUE_KEY) || "[]");
      queue.push(request);
      localStorage.setItem(OFFLINE_QUEUE_KEY, JSON.stringify(queue));
      alert("You are offline. Data saved locally and will sync later.");
    } else {
      try {
        await fetch(request.url, request.options);
        alert("Data submitted successfully!");
      } catch (err) {
        console.error("Network error:", err);
      }
    }

    setInput("");
  };

  // Commit offline queue when online
  const commitOfflineQueue = async () => {
    const queue = JSON.parse(localStorage.getItem(OFFLINE_QUEUE_KEY) || "[]");
    for (const req of queue) {
      try {
        await fetch(req.url, req.options);
      } catch (err) {
        console.log("Retry later:", req);
      }
    }
    localStorage.setItem(OFFLINE_QUEUE_KEY, "[]");
  };

  useEffect(() => {
    window.addEventListener("online", commitOfflineQueue);
    return () => window.removeEventListener("online", commitOfflineQueue);
  }, []);

  // Color theme styles
  const styles = {
    container: {
      padding: "30px",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f0f8ff",
      color: "#333",
      minHeight: "100vh",
    },
    header: {
      color: "#1e90ff",
    },
    countBox: {
      fontSize: "24px",
      fontWeight: "bold",
      margin: "10px 0",
    },
    button: {
      padding: "10px 20px",
      margin: "5px",
      fontSize: "16px",
      backgroundColor: "#1e90ff",
      color: "#fff",
      border: "none",
      borderRadius: "5px",
      cursor: "pointer",
    },
    input: {
      padding: "10px",
      fontSize: "16px",
      borderRadius: "5px",
      border: "1px solid #ccc",
      width: "250px",
      marginRight: "10px",
    },
    section: {
      marginTop: "20px",
      padding: "15px",
      backgroundColor: "#e6f2ff",
      borderRadius: "10px",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>🌐 Offline Demo App</h1>

      <div style={styles.section}>
        <h2>Count: <span style={styles.countBox}>{count}</span></h2>
        <button style={styles.button} onClick={() => setCount((c) => c + 1)}>
          Increment
        </button>
      </div>

      <div style={styles.section}>
        <h2>Submit Input</h2>
        <input
          style={styles.input}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type something"
        />
        <button style={styles.button} onClick={submitData}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default App;
