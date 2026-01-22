import React from "react";
import Navbar from "./components/Nav/Navbar";
import CustomTable from "./components/Table/CustomTable";
import Button from "./components/Button/Button";

function App() {
  const handleAdd = () => alert("Add new record clicked!");
  const handleDelete = () => alert("Delete selected clicked!");

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="p-6 max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
          <div className="flex gap-4">
            <Button onClick={handleAdd}>Add Record</Button>
            <Button onClick={handleDelete}>Delete Selected</Button>
          </div>
        </header>

        {/* Table */}
        <CustomTable />
      </div>
    </div>
  );
}

export default App;
