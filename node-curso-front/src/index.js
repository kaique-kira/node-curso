import React from "react";
import ReactDOM from "react-dom";
import { RouterProvider } from "react-router-dom";
import { appRoutes } from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={appRoutes} />
  </React.StrictMode>
);
