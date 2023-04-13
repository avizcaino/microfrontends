import { create } from "middleware-axios";

const httpClientSingleton = create({
  baseURL: import.meta.env.VITE_REGISTRY_URL,
}).axiosInstance;

export const getModules = async () => {
  const response = await httpClientSingleton.get("");
  console.log(response.data);
  //   await fetch(`${import.meta.env.VITE_REGISTRY_URL}/${APP_NAME}`, {
  //     method: "POST",
  //     body: JSON.stringify({ path: import.meta.env.VITE_APP_URL }),
  //   });

  return Promise.resolve();
};
