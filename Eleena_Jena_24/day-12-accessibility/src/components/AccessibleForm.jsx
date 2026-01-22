import { useState } from "react";

export default function AccessibleForm() {
  const [message, setMessage] = useState("");

  return (
    <form className="mt-8" aria-describedby="form-help">
      <p id="form-help" className="text-sm text-gray-600">
        All fields are required
      </p>

      <label htmlFor="email" className="block mt-4 font-medium">
        Email
      </label>
      <input
        id="email"
        type="email"
        required
        className="w-full p-2 border rounded focus:ring-2 focus:ring-green-400"
      />

      <button
        type="submit"
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded"
        onClick={(e) => {
          e.preventDefault();
          setMessage("Form submitted successfully");
        }}
      >
        Submit
      </button>

      <p aria-live="polite" className="mt-2 text-green-700">
        {message}
      </p>
    </form>
  );
}
