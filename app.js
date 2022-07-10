import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRouter from "./src/routes/authRouter.js";
import productsRouter from "./src/routes/productsRouter.js";
import orderRouter from "./src/routes/orderRouter.js";
dotenv.config();

const app = express();

app.use(json(), cors());

app.use(authRouter);
app.use(productsRouter);
app.use(orderRouter);

app.listen(process.env.PORT, () => {
    console.log(`The server is running on port ${process.env.PORT}`);
});