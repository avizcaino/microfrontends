import * as dotEnv from "dotenv";
import Express from "express";
import * as path from "path";
import registryApp from "./registry";

const app = Express();
dotEnv.config();
process.title = "microfrontends-ce-app";

app.use(Express.static(path.join(__dirname, "/../dist")));

registryApp().then(() =>
  app.listen(process.env.PORT, () =>
    console.log(`Running CustomElementsApp on port ${process.env.PORT}`)
  )
);
