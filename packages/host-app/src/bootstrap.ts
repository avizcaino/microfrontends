import axios from "axios";

const hostDictionary = {
  "ce-app": "ce-host",
  "react-app": "react-host",
};

export const getModules = async () => {
  const response = await axios.get(import.meta.env.VITE_REGISTRY_URL);
  Object.keys(response.data || {})?.forEach(async (k: any) => {
    // const moduleResponse = await axios.get(m.path);
    console.log(k);
    const newScriptTag = document.createElement("script");

    newScriptTag.onload = (data) => {
      console.log(`Module loaded`, data);
      const callbackScript = document.createElement("script");

      const hostId = hostDictionary[k];
      callbackScript.innerHTML = `window['${k}'].initialize('${hostId}')`;

      document.body.appendChild(callbackScript);
    };
    newScriptTag.onerror = (error) => console.log(`Module error`, error);

    newScriptTag.src = response.data[k].path;

    document.body.appendChild(newScriptTag);
  });

  return Promise.resolve();
};
