import { createRoot } from "react-dom/client";
import { ReactApp } from "./ReactApp";

console.log("React App");

(function () {
  const initialize = (hostId: string) => {
    console.log(`Initialize ReactApp in ${hostId}`);
    const host = document.getElementById(hostId);
    createRoot(host).render(<ReactApp />);
  };

  window[import.meta.env.VITE_APP_ID] = { initialize };
})();
