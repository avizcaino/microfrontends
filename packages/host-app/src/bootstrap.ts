import { AppRegistration } from "@microfrontends/registry";
import axios from "axios";

const hostDictionary = {
  "ce-app": "ce-host",
  "react-app": "react-host",
  "vue-app": "vue-host",
};

export const getModules = async () => {
  const response = await axios.get(import.meta.env.VITE_REGISTRY_URL);
  Object.keys(response.data || {})?.forEach(async (k: string) => {
    const newScriptTag = document.createElement("script");
    newScriptTag.type = "module";

    newScriptTag.onload = (data) => {
      console.log(`Module loaded ${k}`, data);
      const hostId = hostDictionary[k];
      window[k]?.initialize && window[k]?.initialize(hostId);
    };
    newScriptTag.onerror = (error) => console.warn(`Module error ${k}`, error);

    newScriptTag.src = (response.data[k] as AppRegistration).entryPoint;

    document.body.appendChild(newScriptTag);
  });

  return Promise.resolve();
};
