import RealtimeBasics from "./components/RealtimeBasics";
import ClientIntro from "./components/ClientIntro";
import NotificationUI from "./components/NotificationUI";
import SocketUI from "./components/SocketUI";
import RealtimeDemo from "./components/RealtimeDemo";

export default function App() {
  return (
    <div className="container">
      <h1>⚡ React Realtime</h1>

      <div className="grid">
        <RealtimeBasics />
        <ClientIntro />
        <NotificationUI />
        <SocketUI />
        <RealtimeDemo />
      </div>
    </div>
  );
}
