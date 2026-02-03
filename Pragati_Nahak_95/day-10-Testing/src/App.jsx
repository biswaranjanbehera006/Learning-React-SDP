import Button from "./components/Button";
import LoginForm from "./components/LoginForm";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold">Testing React</h1>
      <Button label="Click Me" onClick={() => alert("Clicked")} />
      <LoginForm />
    </div>
  );
}
