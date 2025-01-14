import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Dynamically add the Lexend font link to the <head>
const link = document.createElement("link");
link.href =
  "https://fonts.googleapis.com/css2?family=Lexend:wght@100..900&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

