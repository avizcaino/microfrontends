import { createRoot } from "react-dom/client";
import { App } from "./App";

console.log("React App");

const mountPoint = document.createElement("div");
document.body.appendChild(mountPoint);

createRoot(mountPoint).render(<App />);
