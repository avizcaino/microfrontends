import { create } from "middleware-axios";
import { APP_NAME } from "./constants";

const httpClientSingleton = create({
  baseURL: import.meta.env.VITE_REGISTRY_URL,
}).axiosInstance;

export const registerApp = async () => {
  await httpClientSingleton.post(APP_NAME, {
    path: import.meta.env.VITE_APP_URL,
  });
  //   await fetch(`${import.meta.env.VITE_REGISTRY_URL}/${APP_NAME}`, {
  //     method: "POST",
  //     body: JSON.stringify({ path: import.meta.env.VITE_APP_URL }),
  //   });

  return Promise.resolve();
};
