import express, { json } from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(json(), cors());


app.listen(process.env.PORT, () => {
    console.log(`The server is running on port ${process.env.PORT}`);
});