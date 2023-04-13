import cors from "cors";
import * as dotEnv from "dotenv";
import Express from "express";
import DB from "./db";

const app = Express();
dotEnv.config();
process.title = "microfrontends-registry";

const db = new DB();

app.use(Express.json());
app.use(cors());
app.use(Express.json({ limit: "10mb" }));
app.use(Express.urlencoded({ extended: true, limit: "10mb" }));

app.get("/", (req, res) => {
  res.send(JSON.stringify(db.list()));
});

app.get("/:id", (req, res) => {
  res.send(JSON.stringify(db.getApp(req.params.id)));
});

app.post("/:id", (req, res) => {
  db.registerApp(req.params.id, req.body);
  res.send({ error: false });
});

app.delete("/:id", (req, res) => {
  db.unregisterApp(req.params.id);
  res.send({ error: false });
});

app.listen(process.env.PORT, () =>
  console.log(`Running Registry on port ${process.env.PORT}`)
);
