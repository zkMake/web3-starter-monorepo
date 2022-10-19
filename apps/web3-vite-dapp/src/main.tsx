import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

// console.log(import.meta.env.VITE_SOME_KEY);
// console.log(import.meta.env.SOME_KEY);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
