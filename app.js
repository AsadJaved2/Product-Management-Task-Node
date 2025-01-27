import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import router from "./routes/mainRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use("/", router);
app.use(errorHandler);

export default app;
