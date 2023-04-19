import { createRoot } from "react-dom/client";
import { ReactApp } from "./ReactApp";

console.log("React App");

const mountApp = (hostId: string) => {
  const host = document.getElementById(hostId);
  createRoot(host).render(<ReactApp />);
};

if (document.location.port === import.meta.env.VITE_PORT) mountApp("root");
else
  (function () {
    const initialize = (hostId: string) => {
      console.log(`Initialize ReactApp in ${hostId}`);
      mountApp(hostId);
    };

    window[import.meta.env.VITE_APP_ID] = { initialize };
  })();
