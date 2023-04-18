import { AppRegistration } from "@microfrontends/registry";
import axios from "axios";

const registryApp = async () => {
  try {
    return axios
      .post(`${process.env.REGISTRY_URL}/${process.env.APP_ID}`, {
        entryPoint: `http://localhost:${process.env.PORT}/index.js`,
        route: process.env.APP_ID,
      } as AppRegistration)
      .then((r) => Promise.resolve(r))
      .catch((e) => Promise.reject(e));
  } catch (error) {
    return Promise.reject(error);
  }
};

export default registryApp;
