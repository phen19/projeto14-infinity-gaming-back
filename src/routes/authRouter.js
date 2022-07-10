import { Router } from "express";
import { loginUser, signUpUser } from "../controllers/authController.js";
import signUpMiddleware from "../middlewares/signUpMiddleware.js";


const authRouter = Router();


authRouter.post("/sign-up", signUpMiddleware, signUpUser);
authRouter.post("login", loginUser);

export default authRouter;