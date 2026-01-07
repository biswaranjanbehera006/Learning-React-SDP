import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Props Drilling vs Composition</h1>

      <hr />

      {/* PROPS DRILLING EXAMPLE */}
      <h2>❌ Props Drilling</h2>
      <PropsDrillingApp />

      <hr />

      {/* COMPOSITION EXAMPLE */}
      <h2>✅ Composition</h2>
      <CompositionApp />
    </div>
  );
}

/* ================= PROPS DRILLING ================= */

function PropsDrillingApp() {
  return <Parent name="Krishna" />;
}

function Parent({ name }) {
  // Parent does NOT need name
  return <Child name={name} />;
}

function Child({ name }) {
  return <p>Hello {name}</p>;
}

/* ================= COMPOSITION ================= */

function CompositionApp() {
  return (
    <Box>
      <p>Hello Krishna</p>
    </Box>
  );
}

function Box({ children }) {
  return <div>{children}</div>;
}

export default App;