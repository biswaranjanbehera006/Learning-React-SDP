import { useState } from "react";
import {
  HeadlessModal,
  RadixModal,
  HeadlessDropdown,
} from "../components/ui";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-10 space-y-6">
      <h1 className="text-2xl font-bold">Component Libraries Demo</h1>

      <button
        onClick={() => setOpen(true)}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Open Headless Modal
      </button>

      <HeadlessModal open={open} setOpen={setOpen} />

      <RadixModal />

      <HeadlessDropdown />
    </div>
  );
}
