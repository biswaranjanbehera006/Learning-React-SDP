import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold text-gray-800">My Dashboard</h1>
      <ul className="flex gap-6">
        <li><a href="#home" className="text-gray-600 hover:text-gray-900">Home</a></li>
        <li><a href="#reports" className="text-gray-600 hover:text-gray-900">Reports</a></li>
        <li><a href="#settings" className="text-gray-600 hover:text-gray-900">Settings</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
