export default function App() {
  const user = "Eleena";

  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-10">
      
      {/* 🔴 PROPS DRILLING */}
      <div>
        <h1 className="text-2xl text-yellow-400 mb-4">
          Props Drilling Example
        </h1>
        <Parent user={user} />
      </div>

      {/* 🟢 COMPONENT COMPOSITION */}
      <div>
        <h1 className="text-2xl text-yellow-400 mb-4">
          Component Composition Example
        </h1>

        <Card>
          <h2 className="text-xl text-green-400">Welcome {user}</h2>
          <p>This content is passed using children (composition).</p>
        </Card>
      </div>

    </div>
  );
}

/* ---------------- PROPS DRILLING COMPONENTS ---------------- */

function Parent({ user }) {
  return <Child user={user} />;
}

function Child({ user }) {
  return <GrandChild user={user} />;
}

function GrandChild({ user }) {
  return (
    <h2 className="text-lg text-blue-400">
      Hello {user}, this came via Props Drilling
    </h2>
  );
}

/* ---------------- COMPONENT COMPOSITION ---------------- */

function Card({ children }) {
  return (
    <div className="p-6 bg-gray-900 border border-yellow-500 rounded-lg">
      {children}
    </div>
  );
}
