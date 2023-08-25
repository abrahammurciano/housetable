import express, { Express } from "express";
import houseRouter from "./routes/houses";
import cors from "cors";

const app: Express = express();

app.use(express.json());
app.use(cors())
app.use("/api", houseRouter);
app.use("/", express.static(__dirname + "/../../../client/build"));
export default app;