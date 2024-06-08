import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ShinyText from "./shinytext.tsx";

import "./index.css";

const rootElement = document.getElementById("root");
const aibubbleElement = document.getElementById("aibubble-container");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

if (aibubbleElement) {
  ReactDOM.createRoot(aibubbleElement).render(
    <React.StrictMode>
      <ShinyText />
    </React.StrictMode>
  );
}
