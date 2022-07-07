import { Router } from "express";
import { signUpUser } from "../controllers/authController.js";
import signUpMiddleware from "../middlewares/signUpMiddleware.js";


const authRouter = Router();


authRouter.post("/sign-up", signUpMiddleware, signUpUser);


export default authRouter;