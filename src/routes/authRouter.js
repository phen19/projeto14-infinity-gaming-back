import { Router } from "express";
import signUpMiddleware from "../middlewares/signUpMiddleware.js";


const authRouter = Router();


authRouter.post("/sign-up", signUpMiddleware, signUpUser);


export default authRouter;