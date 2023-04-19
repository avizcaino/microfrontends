import { AppRegistration } from "@microfrontends/registry";
import axios from "axios";
import * as fs from "fs/promises";
import * as path from "path";

const registryApp = async () => {
  try {
    const data = await fs.readFile(
      path.join(__dirname, "/../dist/manifest.json"),
      { encoding: "utf8" }
    );
    const manifest = JSON.parse(data);
    return axios
      .post(`${process.env.VITE_REGISTRY_URL}/${process.env.VITE_APP_ID}`, {
        entryPoint: `http://localhost:${process.env.VITE_PORT}/${manifest["index.html"]?.file}`,
        route: process.env.VITE_APP_ID,
      } as AppRegistration)
      .then((r) => Promise.resolve(r))
      .catch((e) => Promise.reject(e));
  } catch (error) {
    return Promise.reject(error);
  }
};

export default registryApp;
