import { useEffect, useRef } from "react";

export default function AccessibleModal({ open, onClose }) {
  const closeRef = useRef(null);

  useEffect(() => {
    if (open) closeRef.current?.focus();
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
    >
      <div className="bg-white p-6 rounded w-96">
        <h2 id="modal-title" className="text-xl font-semibold">
          Accessible Modal
        </h2>

        <p className="mt-2">
          Focus is trapped inside this modal.
        </p>

        <button
          ref={closeRef}
          onClick={onClose}
          className="mt-4 px-3 py-2 bg-red-500 text-white rounded
                     focus:ring-2 focus:ring-red-300"
        >
          Close
        </button>
      </div>
    </div>
  );
}
