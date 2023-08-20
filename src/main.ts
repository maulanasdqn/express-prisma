import express, { Express } from "express";
import { config } from "@/configs";
import { postRouter } from "@/routes";

const app: Express = express();

app.use("/posts", postRouter);

app.listen(config.port, () => {
  console.log("Listening on port 3000");
});
