function CICDInfo() {
  return (
    <div className="p-4 bg-white dark:bg-gray-800 rounded shadow mb-4">
      <h2 className="text-xl font-bold mb-2">🚀 CI/CD Demo</h2>
      <p className="mb-3">
        This app is built and deployed using <strong>GitHub Actions</strong>.
      </p>
      <div className="flex gap-2">
        <span className="px-3 py-1 bg-green-500 text-white rounded-full text-sm">
          🌸 CI: Build & Test
        </span>
        <span className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm">
          🚀 CD: Auto Deploy
        </span>
      </div>
    </div>
  );
}

export default CICDInfo;


