import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter as Router } from "react-router-dom";
import AppRouter from "./AppRouter.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastContainer />
    <Router>
      <AppRouter />
    </Router>
  </React.StrictMode>
);
