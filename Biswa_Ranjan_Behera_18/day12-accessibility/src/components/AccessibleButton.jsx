export default function AccessibleButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      className="mt-4 px-4 py-2 bg-blue-600 text-white rounded 
                 focus:outline-none focus:ring-2 focus:ring-blue-400"
      aria-label="Open modal dialog"
    >
      Open Accessible Modal
    </button>
  );
}
