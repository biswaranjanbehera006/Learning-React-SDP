import AccessibleButton from "../components/AccessibleButton";
import AccessibleModal from "../components/AccessibleModal";
import AccessibleForm from "../components/AccessibleForm";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className="p-6 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">
        React Accessibility Demo
      </h1>

      <AccessibleButton onClick={() => setOpen(true)} />

      <AccessibleModal open={open} onClose={() => setOpen(false)} />

      <AccessibleForm />
    </main>
  );
}
