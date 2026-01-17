import { Dialog } from "@headlessui/react";

export default function HeadlessModal({ open, setOpen }) {
  return (
    <Dialog open={open} onClose={setOpen} className="relative z-50">
      <div className="fixed inset-0 bg-black/50" />

      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="bg-white p-6 rounded-lg w-80 shadow">
          <Dialog.Title className="text-lg font-bold">
            Headless UI Modal
          </Dialog.Title>

          <p className="mt-2 text-gray-600">
            Modal using Headless UI + Tailwind
          </p>

          <button
            onClick={() => setOpen(false)}
            className="mt-4 bg-black text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
