import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./src/routes/authRouter.js";
import admimRouter from "./src/routes/admimRouter.js";
dotenv.config();

const app = express();

app.use(json(), cors());

app.use(authRouter);
app.use(admimRouter);

app.listen(process.env.PORT, () => {
    console.log(`The server is running on port ${process.env.PORT}`);
});