import { useState } from "react";
import { send } from "../realtime";

export default function ClientIntro() {
  const [text, setText] = useState("");

  const sendMsg = () => {
    if (!text) return;
    send({ type: "chat", message: text });
    setText("");
  };

  return (
    <div className="card">
      <h3>💬 Realtime Chat</h3>
      <input
        placeholder="Type message"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={sendMsg}>Send</button>
    </div>
  );
}
