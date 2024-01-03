import React from "react";
import ReactDOM from "react-dom/client.js";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./provider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
