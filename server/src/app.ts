import express, { Express } from "express";
import houseRouter from "./routes/houses";

const app: Express = express();

app.use(express.json());
app.use("/api", houseRouter);
app.use("/", express.static("client/build"));

export default app;