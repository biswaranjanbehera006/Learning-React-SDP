import { useState } from "react";

const ToggleMessage = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="space-y-2">
      <button
        className="px-3 py-1 bg-gray-700 text-white rounded"
        onClick={() => setShow(!show)}
      >
        Toggle
      </button>
      {show && <p className="text-green-700 font-medium">Hello World</p>}
    </div>
  );
};

export default ToggleMessage;
