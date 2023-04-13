import { createRoot } from "react-dom/client";
import { App } from "./App";
import { registerApp } from "./bootstrap";

console.log("React App");

registerApp().then(createRoot(document.getElementById("root")).render(<App />));
