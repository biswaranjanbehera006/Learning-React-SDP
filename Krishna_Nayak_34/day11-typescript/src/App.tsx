import Greeting from "./components/Greeting";
import Counter from "./components/Counter";
import UserCard from "./components/UserCard";
import { User } from "./types/User";

const App = () => {
  const user: User = {
    id: 1,
    name: "Krishna Nayak",
    email: "krishna@gmail.com",
    isOnline: true,
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>React + TypeScript Basics</h1>

      <Greeting name="Krishna" age={21} />

      <Counter />

      <UserCard user={user} />
    </div>
  );
};

export default App;
