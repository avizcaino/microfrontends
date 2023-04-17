import { createRoot } from "react-dom/client";
import { App } from "./App";
import { getModules } from "./bootstrap";

console.log("Host App");

getModules().then(
  createRoot(document.getElementById("host-root")).render(<App />)
);
