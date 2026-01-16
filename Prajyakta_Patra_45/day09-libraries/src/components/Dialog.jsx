import { Dialog } from "@headlessui/react";
import { useState } from "react";

export default function Modal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="px-4 py-2 bg-green-600 text-white rounded"
        onClick={() => setOpen(true)}
      >
        Open Dialog
      </button>

      <Dialog open={open} onClose={() => setOpen(false)} className="fixed inset-0 flex items-center justify-center">
        <Dialog.Overlay className="fixed inset-0 bg-black/40" />

        <div className="bg-white p-6 rounded shadow z-10">
          <Dialog.Title className="text-lg font-bold">
            Headless UI Dialog
          </Dialog.Title>

          <button
            className="mt-4 px-3 py-1 bg-red-500 text-white rounded"
            onClick={() => setOpen(false)}
          >
            Close
          </button>
        </div>
      </Dialog>
    </>
  );
}
