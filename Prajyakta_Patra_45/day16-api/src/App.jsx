import { useEffect, useState } from "react";
import { apiClient } from "./api/apiClient";
import SwaggerViewer from "./components/SwaggerViewer";
import "./index.css";

export default function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    apiClient.getData().then(setData);
  }, []);

  return (
    <div className="container">
      <h1>🚀 React Frontend Demo</h1>
      <h3>Created by Prajyakta Patra</h3>

      <div className="card">
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : "Loading..."}
      </div>

      <button onClick={() => alert("Hello Prajyakta!")}>Click Me</button>

      <SwaggerViewer />
    </div>
  );
}
