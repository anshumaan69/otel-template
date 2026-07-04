import express from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import pinoHttp from "pino-http";
import routes from "./routes/index.js"
const app = express();
app.use(helmet());
app.use(cors())
app.use(compression())
app.use(express.json());
app.use(pinoHttp())
app.use("/", routes)
export default app;