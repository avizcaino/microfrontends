import { createRoot } from "react-dom/client";
import { App } from "./App";

console.log("React App");

(function () {
  const initialize = (hostId: string) => {
    const host = document.getElementById(hostId);
    createRoot(host).render(<App />);
  };

  window[import.meta.env.VITE_APP_ID] = { initialize };
})();
