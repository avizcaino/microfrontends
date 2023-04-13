import { createRoot } from "react-dom/client";
import { App } from "./App";
import { getModules } from "./bootstrap";

console.log("React App");

getModules().then(createRoot(document.getElementById("root")).render(<App />));
