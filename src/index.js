import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryContextProvider } from "./context/queryContext";
import { InputContextProvider } from "./context/inputContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryContextProvider>
      <InputContextProvider>
        <App />
      </InputContextProvider>
    </QueryContextProvider>
  </React.StrictMode>
);
