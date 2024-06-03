import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./Route/Routes";
import AuthProvider from "./Provider/AuthProvider";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <Toaster />
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
