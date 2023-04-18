import { createApp } from "vue";
import VueApp from "./VueApp.vue";

import "./assets/main.css";

// createApp(VueApp).mount('#app')

(function () {
  const initialize = (hostId) => {
    console.log(`Initialize VueApp in ${hostId}`);
    createApp(VueApp).mount(`#${hostId}`);
  };

  window[import.meta.env.VITE_APP_ID] = { initialize };
})();
