import { createRoot } from "react-dom/client";
import { HostApp } from "./HostApp";
import { getModules } from "./bootstrap";

console.log("Host App");

getModules().then(
  createRoot(document.getElementById("host-root")).render(<HostApp />)
);
