import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <button
      className="bg-blue-600 text-white px-4 py-2 rounded-md shadow hover:bg-blue-700 transition-colors duration-200"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
