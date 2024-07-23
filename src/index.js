import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import Hello from "./routes/hello";
import Home from "./routes/home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/hello",
    element: <Hello />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} className="app" />
  </React.StrictMode>
);

reportWebVitals();
