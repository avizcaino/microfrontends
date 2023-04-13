import * as fs from "fs/promises";
import { create } from "middleware-axios";
import * as path from "path";

const registryApp = async () => {
  try {
    const data = await fs.readFile(
      path.join(__dirname, "/../dist/manifest.json"),
      { encoding: "utf8" }
    );
    const manifest = JSON.parse(data);
    return create({ baseURL: process.env.VITE_REGISTRY_URL })
      .post("react-app", {
        path: `http://localhost:${process.env.PORT}/${manifest["index.html"]?.file}`,
      })
      .then((r) => Promise.resolve(r))
      .catch((e) => Promise.reject(e));
  } catch (error) {
    return Promise.reject(error);
  }
};

export default registryApp;
