export default function Button({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="px-5 py-2 bg-blue-600 text-white rounded"
    >
      {label}
    </button>
  );
}
