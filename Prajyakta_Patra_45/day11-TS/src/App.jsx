import Header from "./Components/Header";
import Counter from "./Components/Counter";
import Card from "./Components/Card";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-md space-y-6">
        <Header
          title="React + Tailwind Lab"
          subtitle="Components | Props | State"
        />

        <Card>
          <Counter />
        </Card>
      </div>
    </div>
  );
};

export default App;
