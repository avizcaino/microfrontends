import { createApp } from "vue";
import VueApp from "./VueApp.vue";

import "./assets/main.css";

// createApp(VueApp).mount('#app')

const mountApp = (hostId) => {
  createApp(VueApp).mount(`#${hostId}`);
};

if (document.location.port === import.meta.env.VITE_PORT) mountApp("app");
else
  (function () {
    const initialize = (hostId) => {
      console.log(`Initialize VueApp in ${hostId}`);
      mountApp(hostId);
    };

    window[import.meta.env.VITE_APP_ID] = { initialize };
  })();
