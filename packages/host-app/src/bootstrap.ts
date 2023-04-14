import axios from "axios";

export const getModules = async () => {
  const response = await axios.get(import.meta.env.VITE_REGISTRY_URL);
  Object.values(response.data || {})?.forEach(async (m: any) => {
    // const moduleResponse = await axios.get(m.path);
    const newScriptTag = document.createElement("script");

    newScriptTag.onload = (data) => console.log(`Module loaded`, data);
    newScriptTag.onerror = (error) => console.log(`Module error`, error);

    newScriptTag.src = m.path;

    document.body.appendChild(newScriptTag);
  });

  return Promise.resolve();
};
