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
        path: `http://localhost:${process.env.PORT}/${manifest["index.html"]?.file}`,
      })
      .then((r) => Promise.resolve(r))
      .catch((e) => Promise.reject(e));
  } catch (error) {
    return Promise.reject(error);
  }
};

export default registryApp;
