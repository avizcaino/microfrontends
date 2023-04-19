import * as dotEnv from "dotenv";
import Express from "express";
import * as path from "path";
import registryApp from "./registry";

const app = Express();
dotEnv.config();
process.title = "microfrontends-react-app";

app.use(Express.static(path.join(__dirname, "/../dist")));

registryApp().then(() =>
  app.listen(process.env.VITE_PORT, () =>
    console.log(`Running ReactApp on port ${process.env.VITE_PORT}`)
  )
);
