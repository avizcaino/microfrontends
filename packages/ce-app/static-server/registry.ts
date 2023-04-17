import axios from "axios";

const registryApp = async () => {
  try {
    return axios
      .post(`${process.env.REGISTRY_URL}/${process.env.APP_ID}`, {
        path: `http://localhost:${process.env.PORT}/index.js`,
      })
      .then((r) => Promise.resolve(r))
      .catch((e) => Promise.reject(e));
  } catch (error) {
    return Promise.reject(error);
  }
};

export default registryApp;
