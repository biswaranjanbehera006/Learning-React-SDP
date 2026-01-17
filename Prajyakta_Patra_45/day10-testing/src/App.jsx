import Button from "./components/Button";
import Counter from "./components/Counter";
import LoginForm from "./components/LoginForm";
import ToggleMessage from "./components/ToggleMessage";
import UserList from "./components/UserList";
import UserFetcher from "./components/UserFetcher";

function App() {
  return (
    <div className="p-6 max-w-xl mx-auto space-y-6">
      <Button label="Demo Button" onClick={() => alert("Clicked")} />
      <Counter />
      <LoginForm onSubmit={(data) => console.log(data)} />
      <ToggleMessage />
      <UserList users={[{ id: 1, name: "Alice" }]} />
      <UserFetcher />
    </div>
  );
}

export default App;
