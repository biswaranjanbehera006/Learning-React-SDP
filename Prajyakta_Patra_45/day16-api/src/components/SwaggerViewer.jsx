import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

export default function SwaggerViewer() {
  return (
    <div className="card">
      <h2>Swagger API Viewer</h2>
      <SwaggerUI url="/api/swagger.json" />
    </div>
  );
}
