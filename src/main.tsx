import React from "react";
import { createRoot } from "react-dom/client";
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

const root = createRoot(aibubbleElement!);
root.render(<ShinyText />);
